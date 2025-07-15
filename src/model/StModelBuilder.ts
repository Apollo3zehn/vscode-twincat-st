import { CharStream, CommonTokenStream, ParserRuleContext } from "antlr4ng";
import { TextDocument, Uri, workspace } from "vscode";
import { logger, StModel, StSourceFile, StSymbol, StSymbolKind } from "../core.js";
import { StructuredTextLexer } from "../generated/StructuredTextLexer.js";
import { ExprContext, ExtendsClauseContext, ImplementsClauseContext, MethodContext, StructuredTextParser } from "../generated/StructuredTextParser.js";
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

                if (symbol.builtinType)
                    continue;
                        
                symbol.declaration = this.findTypeDeclaration(symbol);

                if (symbol.declaration) {

                    // Inheritance
                    if (ctx.parent instanceof ExtendsClauseContext && symbol.parent) {

                        const parentTypeInfo = symbol.parent.typeHierarchyInfo;

                        if (parentTypeInfo) {

                            if (!parentTypeInfo.baseTypes)
                                parentTypeInfo.baseTypes = []

                            parentTypeInfo.baseTypes.push(symbol.declaration);

                            // Add back reference
                            const declaringSymbolTypeInfo = symbol.declaration.typeHierarchyInfo!;

                            if (!declaringSymbolTypeInfo.subTypes)
                                declaringSymbolTypeInfo.subTypes = []

                            declaringSymbolTypeInfo.subTypes.push(symbol.parent);
                        }
                    }

                    // Interfaces
                    if (ctx.parent instanceof ImplementsClauseContext && symbol.parent) {

                        const parentTypeInfo = symbol.parent.typeHierarchyInfo;

                        if (parentTypeInfo) {

                            if (!parentTypeInfo.interfaces)
                                parentTypeInfo.interfaces = []

                            parentTypeInfo.interfaces.push(symbol.declaration);

                            // Add back reference
                            const declaringSymbolTypeInfo = symbol.declaration.typeHierarchyInfo!;

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
            
            for (const symbol of sourceFile.symbolMap.values()) {
                
                if (symbol.declaration)
                    continue;

                switch (symbol.kind) {

                    case StSymbolKind.VariableUsage:
                        this.findDeclaration(symbol, false);
                        break;
                    
                    case StSymbolKind.CallStatement:
                        this.findDeclaration(symbol, true);
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
        const visitor = new StVisitor(sourceFile, uri);

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
                new Map<ParserRuleContext, StSymbol>(),
                []
            );
            
            this._model.sourceFileMap.set(fileUriAsString, sourceFile);
        }

        return sourceFile;
    }

    //#region Type usage

    private findTypeDeclaration(symbol: StSymbol): StSymbol | undefined {

        for (const sourceFile of this._model.sourceFileMap.values()) {

            const typeDeclaration = sourceFile.types
                .find(type => type.id === symbol.id);

            if (
                typeDeclaration &&
                (
                    typeDeclaration.kind === StSymbolKind.FunctionBlock ||
                    typeDeclaration.kind === StSymbolKind.Alias ||
                    typeDeclaration.kind === StSymbolKind.Struct ||
                    typeDeclaration.kind === StSymbolKind.Enum ||
                    typeDeclaration.kind === StSymbolKind.Interface
                )
            ) {
                if (!typeDeclaration.references)
                    typeDeclaration.references = [];

                typeDeclaration.references.push(symbol);
                
                return typeDeclaration;
            }
        }
    }

    //#region Variable usages or call statements

    private findDeclaration(
        symbol: StSymbol,
        isCall: boolean
    ) {
        /* Input examples:
         * 
         * Call statements
         *      a.b.c();
         *      d();
         * 
         * Assignments
         *      x = a.b.c;
         *      x = d;
         *      x = a.b.c();
         *      x = d();
         */

        // Find scope
        let scope: StSymbol | undefined;

        if (symbol.qualifier) {

            const declaration = symbol.qualifier.declaration;
            const declarationKind = declaration?.kind;

            const isType =
                declarationKind === StSymbolKind.Enum ||
                declarationKind === StSymbolKind.Gvl ||
                symbol.qualifier.id === "THIS";

            scope = isType
                ? declaration
                : declaration?.typeUsage?.declaration;
        }

        else {
            scope = symbol.parent;
        }

        // Find declaring symbol
        let declaration: StSymbol | undefined;

        // Call statements
        if (isCall) {
            declaration = this.resolveDeclaration(scope, symbol.id, isCall);
        }

        // Assigments
        else {

            declaration = symbol.id === "THIS"
            
                // THIS
                ? symbol.parent?.context instanceof MethodContext
                    ? symbol.parent?.parent
                    : symbol.parent
                
                // Everything else
                : symbol.context.parent?.parent instanceof ExprContext && symbol.context.parent.parent.LPAREN()
                    
                    // Method or function call
                    ? this.resolveDeclaration(scope, symbol.id, true)

                    // Variable usage
                    : this.resolveDeclaration(scope, symbol.id, false);
        }

        if (declaration)
            this.ConnectDeclaringSymbols(symbol, declaration);
    }

    private resolveDeclaration(
        scope: StSymbol | undefined,
        name: string,
        isCall: boolean
    ): StSymbol | undefined {
       
        // Current scope or ancestor scopes (variables & properties)
        while (scope) {

            if (isCall) {
                const methodDeclaration = scope?.methods?.find(x => x.id === name);

                if (methodDeclaration)
                    return methodDeclaration;
            }

            if (scope.variables) {

                const varableDeclaration = scope.variables.find(x => x.id === name);

                if (varableDeclaration)
                    return varableDeclaration;
            }

            if (scope.properties) {

                const propertyDeclaration = scope.properties.find(x => x.id === name);

                if (propertyDeclaration)
                    return propertyDeclaration;
            }

            scope = scope.parent;
        }

        // Global scope (function)
        if (isCall) {

            for (const sourceFile of this._model.sourceFileMap.values()) {
                
                const functionDeclaration = sourceFile.functions
                    .find(x => x.id === name);

                if (functionDeclaration)
                    return functionDeclaration;
            }
        }

        // Global scope (variables & types)
        else {

            for (const sourceFile of this._model.sourceFileMap.values()) {

                const typeSymbol = sourceFile.types
                    .find(x => x.id === name);

                if (typeSymbol)
                    return typeSymbol;

                const variableSymbol = sourceFile.variables
                    .find(x => x.id === name);

                if (variableSymbol)
                    return variableSymbol;
            }
        }

        return undefined;
    };

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