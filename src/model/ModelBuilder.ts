import { CharStream, CommonTokenStream, ParserRuleContext, Token } from "antlr4ng";
import { TextDocument, Uri, workspace } from "vscode";
import { logger, SourceFile, StSymbol, StSymbolKind } from "../core.js";
import { StructuredTextLexer } from "../generated/StructuredTextLexer.js";
import { ExtendsClauseContext, FunctionBlockContext, FunctionContext, MethodContext, ProgramContext, PropertyContext, StructuredTextParser, TypeContext, VarDeclContext } from "../generated/StructuredTextParser.js";
import { StVisitor } from "./StVisitor.js";

export class ModelBuilder {

    private _model = new Map<string, SourceFile>();

    public async build(): Promise<Map<string, SourceFile>> {
    
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
        for (const sourceFile of this._model.values()) {
            
            for (const [ctx, symbol] of sourceFile.symbolMap) {
                
                if (symbol.declaringSymbol)
                    continue;

                switch (symbol.kind) {

                    case StSymbolKind.TypeUsage:
                        
                        if ((ctx as TypeContext).builtinType())
                            continue;
                        
                        this.findTypeDeclaringSymbol(symbol);

                        break;
                    
                    case StSymbolKind.Function:
                    case StSymbolKind.Method:
                    case StSymbolKind.Variable:
                        this.findTypeUsageSymbol(symbol);
                        break;

                    case StSymbolKind.VariableUsage:
                        this.findVariableDeclaringSymbol(ctx, symbol, sourceFile);
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

        const sourceFile = this.getOrCreateSourceFile(uri);

        if (document.lineCount === 0)
            return;

        // Build model
        const inputStream = CharStream.fromString(document.getText());
        const lexer = new StructuredTextLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new StructuredTextParser(tokenStream);
        const tree = parser.compilationUnit();
        const visitor = new StVisitor(sourceFile, uri);

        tree.accept(visitor);
    }

    private getOrCreateSourceFile(fileUri: Uri): SourceFile {
        
        let sourceFile: SourceFile;
        let fileUriAsString = fileUri.toString();

        if (this._model.has(fileUriAsString)) {
            sourceFile = this._model.get(fileUriAsString)!;
        }

        else {
            logger.appendLine(`Create source file ${fileUri}`);

            sourceFile = new SourceFile(
                fileUri,
                fileUriAsString,
                new Map<ParserRuleContext, StSymbol>(),
                new Map<ParserRuleContext, StSymbol>(),
                new Map<ParserRuleContext, StSymbol>()
            );
            
            this._model.set(fileUriAsString, sourceFile);
        }

        return sourceFile;
    }

    //#region Type

    private findTypeDeclaringSymbol(symbol: StSymbol) {

        for (const sourceFile of this._model.values()) {

            for (const typeDeclaration of sourceFile.typeDeclarationsMap.values()) {

                if (
                    (
                        typeDeclaration.kind === StSymbolKind.FunctionBlock ||
                        typeDeclaration.kind === StSymbolKind.Interface
                    ) &&
                    typeDeclaration.name === symbol.name
                ) {
                    symbol.declaringSymbol = typeDeclaration;

                    if (!typeDeclaration.referencingSymbols)
                        typeDeclaration.referencingSymbols = [];

                    typeDeclaration.referencingSymbols.push(symbol);

                    return;
                }
            }
        }
    }
    
    private findTypeUsageSymbol(symbol: StSymbol) {
        
        if (!symbol.children)
            return;

        const typeSymbol = symbol.children
            .find(child => child.kind === StSymbolKind.TypeUsage);

        if (typeSymbol)
            symbol.typeSymbol = typeSymbol;
    }

    //#region Variable usages

    private findVariableDeclaringSymbol(
        ctx: ParserRuleContext,
        symbol: StSymbol,
        sourceFile: SourceFile
    ) {

        if (!symbol.id)
            return;

        let declaringSymbol = this.findVariableDeclaringSymbolInParent(
            ctx,
            symbol,
            symbol.id,
            sourceFile
        );

        if (declaringSymbol)
            this.ConnectDeclaringSymbols(symbol, declaringSymbol);

        // Try to find the variable declaration in global variable blocks
        if (!declaringSymbol) {

            for (const sourceFile of this._model.values()) {
                
                for (const varGlobalSection of sourceFile.varGlobalSectionMap.values()) {
                    
                    if (!varGlobalSection.children)
                        continue;
                    
                    for (const varDeclSymbol of varGlobalSection.children) {
                        
                        if (varDeclSymbol.name === symbol.name) {
                            this.ConnectDeclaringSymbols(symbol, varDeclSymbol);
                            return;
                        }
                    }
                }
            }
        }
    }

    private findVariableDeclaringSymbolInParent(
        ctx: ParserRuleContext,
        symbol: StSymbol,
        id: Token,
        sourceFile: SourceFile
    ): StSymbol | undefined {
        
        const parent = this.getVariablesDeclaringParent(ctx, sourceFile);

        if (!parent || !parent.children)
            return undefined;

        const name = id.text;

        // Shortcut for properties
        if (parent.kind === StSymbolKind.Property && parent.name === name)
            return parent;

        // Search for variable declaration in this level
        for (const child of parent.children) {

            if (child.kind === StSymbolKind.VariableSection && child.children) {
                
                for (const varDecl of child.children) {
                    if (
                        varDecl.kind === StSymbolKind.Variable &&
                        varDecl.name === name
                    ) {
                        return varDecl;
                    }
                }
            }
        }

        // Try next level up (parent of parent)
        return this.findVariableDeclaringSymbolInParent(parent.context, symbol, id, sourceFile);
    }

    private getVariablesDeclaringParent(
        ctx: ParserRuleContext,
        sourceFile: SourceFile
    ): StSymbol | undefined {

        let current = ctx.parent ?? undefined;

        while (current) {

            if (
                current instanceof ProgramContext ||
                current instanceof FunctionBlockContext ||
                current instanceof FunctionContext ||
                current instanceof PropertyContext ||
                current instanceof MethodContext
            ) {
                return sourceFile.symbolMap.get(current);
            }

            current = current.parent ?? undefined;
        }

        return undefined;
    }

    //#endregion

    //#region Method or function calls

    private findMethodOrFunctionDeclaringSymbol(
        ctx: ParserRuleContext,
        symbol: StSymbol,
        sourceFile: SourceFile
    ) {

        if (!symbol.id)
            return;

        let declaringSymbol: StSymbol | undefined;

        // Either this call is a for a normal method or function ...
        declaringSymbol = this.findMethodOrFunctionDeclaringSymbolInParent(
            ctx,
            symbol,
            symbol.id,
            sourceFile
        );

        // ... or it is a function block variable that is being called
        if (!declaringSymbol) {

            declaringSymbol = this.findVariableDeclaringSymbolInParent(
                ctx,
                symbol,
                symbol.id,
                sourceFile
            );
        }

        //
        if (declaringSymbol)
            this.ConnectDeclaringSymbols(symbol, declaringSymbol);
    }

    private findMethodOrFunctionDeclaringSymbolInParent(
        ctx: ParserRuleContext,
        symbol: StSymbol,
        id: Token,
        sourceFile: SourceFile
    ): StSymbol | undefined {
            
        const parent = this.getMethodOrFunctionDeclaringParent(ctx, sourceFile);

        if (!parent || !parent.children)
            return undefined;

        const name = id.text;

        // Shortcut for functions
        if (parent.kind === StSymbolKind.Function && parent.name === name)
            return parent;

        // Search for method declaration in this level
        for (const child of parent.children) {
            if (child.kind === StSymbolKind.Method && child.name === name)
                return child;
        }

        // Try next level up (parent of parent)
        return this.findMethodOrFunctionDeclaringSymbolInParent(ctx, symbol, id, sourceFile);
    }

    private getMethodOrFunctionDeclaringParent(
        ctx: ParserRuleContext,
        sourceFile: SourceFile
    ): StSymbol | undefined {

        let current = ctx.parent ?? undefined;

        while (current) {

            if (
                current instanceof FunctionBlockContext ||
                current instanceof FunctionContext
            ) {
                return sourceFile.symbolMap.get(current);
            }

            current = current.parent ?? undefined;
        }

        return undefined;
    }

    //#endregion

    //#region Utils

    private ConnectDeclaringSymbols(symbol: StSymbol, declaringSymbol: StSymbol) {

        symbol.declaringSymbol = declaringSymbol;

        if (!declaringSymbol.referencingSymbols)
            declaringSymbol.referencingSymbols = [];

        declaringSymbol.referencingSymbols.push(symbol);
    }

    //#endregion
}