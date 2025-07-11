import { CharStream, CommonTokenStream, ParserRuleContext } from "antlr4ng";
import { TextDocument, Uri, workspace } from "vscode";
import { logger, StModel, StSourceFile, StSymbol, StSymbolKind } from "../core.js";
import { StructuredTextLexer } from "../generated/StructuredTextLexer.js";
import { ExprContext, ExtendsClauseContext, FunctionContext, ImplementsClauseContext, MemberContext, MemberQualifierContext, MethodContext, StructuredTextParser } from "../generated/StructuredTextParser.js";
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
                        
                symbol.declaration = this.findTypeDeclaration(symbol);

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
            
            for (const symbol of sourceFile.symbolMap.values()) {
                
                if (symbol.declaration)
                    continue;

                switch (symbol.kind) {

                    case StSymbolKind.VariableUsage:
                        this.findVariableDeclaration(symbol);
                        break;
                    
                    case StSymbolKind.MethodOrFunctionCall:
                        this.findMethodOrFunctionDeclaration(symbol);
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

    private findTypeDeclaration(symbol: StSymbol): StSymbol | undefined {

        for (const typeDeclaration of this._model.typesMap.values()) {

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

    private findVariableDeclaration(
        symbol: StSymbol
    ) {
        /* Input examples:
         * a.b.c();
         * d();
         */

        // Find scope
        let scope: StSymbol | undefined;

        if (symbol.qualifier) {

            const declaration = symbol.qualifier.declaration;
            const declarationKind = declaration?.kind;

            const isType =
                declarationKind === StSymbolKind.Enum ||
                declarationKind === StSymbolKind.Gvl ||
                symbol.qualifier.name === "THIS"

            scope = isType
                ? declaration
                : declaration?.type?.declaration;
        }

        else {
            scope = symbol.parent;
        }

        // Find variable declaring symbol
        const declaration = symbol.name === "THIS"
            
            // THIS
            ? symbol.parent?.context instanceof MethodContext
                ? symbol.parent?.parent
                : symbol.parent
            
            : symbol.context.parent?.parent instanceof ExprContext && symbol.context.parent.parent.LPAREN()
                
                // Method or function call
                ? this.resolveMethodOrFunctionDeclaration(scope, symbol.name)

                // Variable usage
                : this.resolveVariableDeclaration(scope, symbol.name);

        if (declaration)
            this.ConnectDeclaringSymbols(symbol, declaration);
    }

    private resolveVariableDeclaration(
        scope: StSymbol | undefined,
        name: string
    ): StSymbol | undefined {

        // Current scope or ancestor scopes
        while (scope) {

            if (scope.variables) {

                const varableDeclaration = scope.variables.find(x => x.name === name);

                if (varableDeclaration)
                    return varableDeclaration;
            }

            scope = scope.parent;
        }

        // Global scope
        for (const symbol of this._model.typesMap.values()) {
            if (symbol.name === name)
                return symbol;
        }

        for (const symbol of this._model.variablesMap.values()) {
            if (symbol.name === name)
                return symbol;
        }

        return undefined;
    }

    //#endregion

    //#region Method or function calls

    private findMethodOrFunctionDeclaration(
        symbol: StSymbol
    ) {
        /* Input examples:
         * a.b.c();
         * d();
         */

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

        // Find method or function declaring symbol
        let declaration = this.resolveMethodOrFunctionDeclaration(scope, symbol.name);

        if (declaration)
            this.ConnectDeclaringSymbols(symbol, declaration);
    }

    private resolveMethodOrFunctionDeclaration(
        scope: StSymbol | undefined,
        name: string
    ): StSymbol | undefined {

        // Current scope (method)
        const methodDeclaration = scope?.methods?.find(x => x.name === name);

        if (methodDeclaration)
            return methodDeclaration;

        // Global scope (function)
        for (const functionDeclaration of this._model.functionsMap.values()) {
            if (functionDeclaration.name === name)
                return functionDeclaration;
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