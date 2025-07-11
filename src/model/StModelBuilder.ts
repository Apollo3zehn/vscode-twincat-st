import { CharStream, CommonTokenStream, ParserRuleContext } from "antlr4ng";
import { TextDocument, Uri, workspace } from "vscode";
import { logger, StModel, StSourceFile, StSymbol, StSymbolKind } from "../core.js";
import { StructuredTextLexer } from "../generated/StructuredTextLexer.js";
import { ExtendsClauseContext, FunctionContext, ImplementsClauseContext, MemberContext, MemberQualifierContext, MethodContext, StructuredTextParser } from "../generated/StructuredTextParser.js";
import { StVisitor } from "./StVisitor.js";

export class SemanticModelBuilder {

    private _model = new StModel();

    public async build(): Promise<StModel> {
    
        logger.appendLine(`Build model`);

        // Build model
        const fileUris = await workspace.findFiles(
            "**/*.st"
        );

        const tasks: Promise<void>[] = [];

        for (const fileUri of fileUris) {

            logger.appendLine(`Processing ${fileUri.toString()}`);

            const task = async () => {
                const document = await workspace.openTextDocument(fileUri);
                this.analyzeStFile(document);
            };
            
            tasks.push(task());
        }

        await Promise.all(tasks);

        // Resolve types first ...
        for (const sourceFile of this._model.sourceFileMap.values()) {
            
            for (const [ctx, symbol] of sourceFile.symbolMap) {
                
                if (symbol.kind != StSymbolKind.TypeUsage)
                    continue;

                if (symbol.isBuiltinType)
                    continue;
                        
                symbol.declaration = this.findTypeDeclaringSymbol(symbol);

                if (symbol.declaration) {

                    // Inheritance
                    if (ctx.parent instanceof ExtendsClauseContext && symbol.parent) {

                        const parentTypeInfo = symbol.parent.typeInfo;

                        if (parentTypeInfo) {

                            if (!parentTypeInfo.baseTypes)
                                parentTypeInfo.baseTypes = []

                            parentTypeInfo.baseTypes.push(symbol.declaration);

                            // Add back reference
                            const declaringSymbolTypeInfo = symbol.declaration.typeInfo!;

                            if (!declaringSymbolTypeInfo.subTypes)
                                declaringSymbolTypeInfo.subTypes = []

                            declaringSymbolTypeInfo.subTypes.push(symbol.parent);
                        }
                    }

                    // Interfaces
                    if (ctx.parent instanceof ImplementsClauseContext && symbol.parent) {

                        const parentTypeInfo = symbol.parent.typeInfo;

                        if (parentTypeInfo) {

                            if (!parentTypeInfo.interfaces)
                                parentTypeInfo.interfaces = []

                            parentTypeInfo.interfaces.push(symbol.declaration);

                            // Add back reference
                            const declaringSymbolTypeInfo = symbol.declaration.typeInfo!;

                            if (!declaringSymbolTypeInfo.subTypes)
                                declaringSymbolTypeInfo.subTypes = []

                            declaringSymbolTypeInfo.subTypes.push(symbol.parent);
                        }
                    }
                }
            }
        }

        // ... then resolve variables and method/function calls
        for (const sourceFile of this._model.sourceFileMap.values()) {
            
            for (const [ctx, symbol] of sourceFile.symbolMap) {
                
                /* This means when value === null, i.e. not found in previous
                 * round, we will still "continue" and not try again 
                 */
                if (symbol.declaration !== undefined)
                    continue;

                switch (symbol.kind) {

                    case StSymbolKind.VariableUsage:
                        this.findAndAssignVariableDeclaringSymbol(symbol);
                        break;
                    
                    case StSymbolKind.MethodOrFunctionCall:
                        this.findMethodOrFunctionDeclaringSymbol(symbol);
                        break;
                }
            }
        }

        return this._model;
    }

    private analyzeStFile(document: TextDocument) {
    
        const uri = document.uri;

        if (uri.scheme !== "file")
            return;

        if (document.lineCount === 0)
            return;

        // Build model
        const inputStream = CharStream.fromString(document.getText());
        const lexer = new StructuredTextLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new StructuredTextParser(tokenStream);
        const tree = parser.compilationUnit();
        const sourceFile = this.getOrCreateSourceFile(uri, tokenStream);
        const visitor = new StVisitor(this._model, sourceFile, uri);

        tree.accept(visitor);
    }

    private getOrCreateSourceFile(fileUri: Uri, tokenStream: CommonTokenStream): StSourceFile {
        
        let sourceFile: StSourceFile;
        let fileUriAsString = fileUri.toString();

        if (this._model.sourceFileMap.has(fileUriAsString)) {
            sourceFile = this._model.sourceFileMap.get(fileUriAsString)!;
        }

        else {
            logger.appendLine(`Create source file ${fileUri}`);

            sourceFile = new StSourceFile(
                fileUri,
                fileUriAsString,
                tokenStream,
                new Map<ParserRuleContext, StSymbol>()
            );
            
            this._model.sourceFileMap.set(fileUriAsString, sourceFile);
        }

        return sourceFile;
    }

    //#region Type

    private findTypeDeclaringSymbol(symbol: StSymbol): StSymbol | undefined {

        for (const typeDeclaration of this._model.typeDeclarationsMap.values()) {

            if (
                (
                    typeDeclaration.kind === StSymbolKind.FunctionBlock ||
                    typeDeclaration.kind === StSymbolKind.Struct ||
                    typeDeclaration.kind === StSymbolKind.Enum ||
                    typeDeclaration.kind === StSymbolKind.Interface
                ) &&
                typeDeclaration.name === symbol.name
            ) {
                if (!typeDeclaration.references)
                    typeDeclaration.references = [];

                typeDeclaration.references.push(symbol);

                return typeDeclaration;
            }
        }
    }

    //#region Variable usages

    private findAndAssignVariableDeclaringSymbol(
        symbol: StSymbol
    ) {
        /* Input examples:
         * a.b.c();
         * d();
         */

        // Helper to resolve a symbol by name in a given scope chain
        function resolveInScope(scope: StSymbol | undefined, name: string): StSymbol | undefined {

            while (scope) {

                if (scope.variables) {

                    const found = scope.variables.find(x => x.name === name);

                    if (found)
                        return found;
                }

                scope = scope.parent;
            }

            return undefined;
        }

        // Helper to resolve in global scope map
        const resolveInGlobalScope = (name: string): StSymbol | undefined => {

            for (const symbol of this._model.typeDeclarationsMap.values()) {
                if (symbol.name === name)
                    return symbol;
            }

            for (const symbol of this._model.globalScopeMap.values()) {
                if (symbol.name === name)
                    return symbol;
            }

            return undefined;
        };

        const qualifier = symbol.qualifier;

        if (qualifier) {
            symbol.declaration = qualifier.variables?.find(x => x.name === qualifier.name);
        }

        else {
            if (symbol.name === "THIS") {
                symbol.declaration = symbol.parent?.context instanceof MethodContext
                    ? symbol.parent?.parent
                    : symbol.parent;
            }

            // Try to resolve in current scope
            if (!symbol.declaration)
                symbol.declaration = resolveInScope(symbol.parent, symbol.name);

            // If not found, try global scope
            if (!symbol.declaration)
                symbol.declaration = resolveInGlobalScope(symbol.name);
        }
    }

    //#endregion

    //#region Method or function calls

    private findMethodOrFunctionDeclaringSymbol(
        symbol: StSymbol
    ) {
        /* Input examples:
         * a.b.c();
         * d();
         */

        // Helper to resolve in global scope map
        const resolveInGlobalScope = (name: string): StSymbol | null => {

            for (const symbol of this._model.globalScopeMap.values()) {
                if (symbol.name === name)
                    return symbol;
            }

            return null;
        };

        // Find scope
        let scope: StSymbol | undefined;

        if (symbol.qualifier) {
            scope = symbol.qualifier.declaration?.type?.declaration;
        }

        else {
            if (symbol.parent?.context instanceof MethodContext)
                scope = symbol.parent?.parent;

            else
                scope = symbol.parent;
        }

        // Now to the actual work (find method or function declaring symbol)      
        if (scope?.methods) {

            let declaration = scope.methods.find(x => x.name === symbol.name) ?? null;

            if (!declaration)
                declaration = resolveInGlobalScope(symbol.name) ?? null;

            if (declaration)
                this.ConnectDeclaringSymbols(symbol, declaration);
        }
    }

    //#endregion

    //#region Utils

    private ConnectDeclaringSymbols(symbol: StSymbol, declaringSymbol: StSymbol) {

        symbol.declaration = declaringSymbol;

        if (!declaringSymbol.references)
            declaringSymbol.references = [];

        declaringSymbol.references.push(symbol);
    }

    //#endregion
}