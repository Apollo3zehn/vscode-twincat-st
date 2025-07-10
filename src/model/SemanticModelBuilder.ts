import { CharStream, CommonTokenStream, ParserRuleContext } from "antlr4ng";
import { TextDocument, Uri, workspace } from "vscode";
import { logger, StModel, StSourceFile, StSymbol, StSymbolKind } from "../core.js";
import { StructuredTextLexer } from "../generated/StructuredTextLexer.js";
import { ExtendsClauseContext, ImplementsClauseContext, StructuredTextParser } from "../generated/StructuredTextParser.js";
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

        // Find interconnections
        for (const sourceFile of this._model.sourceFileMap.values()) {
            
            for (const [ctx, symbol] of sourceFile.symbolMap) {
                
                if (symbol.declaration)
                    continue;

                switch (symbol.kind) {

                    case StSymbolKind.TypeUsage:
                        
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

                        break;
                    
                    case StSymbolKind.VariableUsage:
                        this.findAndAssignVariableDeclaringSymbol(ctx, symbol, sourceFile);
                        break;
                    
                    case StSymbolKind.MethodOrFunctionCall:
                        this.findMethodOrFunctionDeclaringSymbol(ctx, symbol, sourceFile);
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
        ctx: ParserRuleContext,
        symbol: StSymbol,
        sourceFile: StSourceFile
    ) {

        
    }

    //#endregion

    //#region Method or function calls

    private findMethodOrFunctionDeclaringSymbol(
        ctx: ParserRuleContext,
        symbol: StSymbol,
        sourceFile: StSourceFile
    ) {

        
    }

    // private findMethodOrFunctionDeclaringSymbolInParent(
    //     ctx: ParserRuleContext,
    //     symbol: StSymbol,
    //     id: Token,
    //     sourceFile: SourceFile
    // ): StSymbol | undefined {
            
    //     const name = id.text;
    //     const parent = symbol.parent2;

    //     if (!parent)
    //         return;

    //     // Shortcut for functions
    //     if (parent.kind === StSymbolKind.Function && parent.name === name)
    //         return parent;

    //     // Search for method declaration in this level
    //     for (const child of parent.children) {
    //         if (child.kind === StSymbolKind.Method && child.name === name)
    //             return child;
    //     }

    //     // Try next level up (parent of parent)
    //     return this.findMethodOrFunctionDeclaringSymbolInParent(ctx, symbol, id, sourceFile);
    // }

    // //#endregion

    // //#region Utils

    // private ConnectDeclaringSymbols(symbol: StSymbol, declaringSymbol: StSymbol) {

    //     symbol.declaration = declaringSymbol;

    //     if (!declaringSymbol.references)
    //         declaringSymbol.references = [];

    //     declaringSymbol.references.push(symbol);
    // }

    //#endregion
}