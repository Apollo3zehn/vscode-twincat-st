import { ExtensionContext, Range, TextDocument, Uri, workspace } from "vscode";
import { logger, SourceFile, StSymbol, StSymbolKind } from "./core.js";
import { CharStream, CommonTokenStream, ParserRuleContext, Token } from "antlr4ng";
import { StructuredTextLexer } from "./generated/StructuredTextLexer.js";
import { AssignmentContext, CallStatementContext, ExprContext, FunctionBlockContext, FunctionContext, InterfaceContext, MemberContext, MethodContext, ProgramContext, PropertyContext, StructuredTextParser, VarDeclContext, VarDeclSectionContext } from "./generated/StructuredTextParser.js";
import { StructuredTextVisitor } from "./generated/StructuredTextVisitor.js";

let _documentUri: Uri;

export async function buildModel(context: ExtensionContext): Promise<Map<string, SourceFile>> {
    
    logger.appendLine(`Build model`);

    // Build model
    const fileUris = await workspace.findFiles(
        "**/*.st"
    );

    const model = new Map<string, SourceFile>();
    const tasks: Promise<void>[] = [];

    for (const fileUri of fileUris) {

        logger.appendLine(`Processing ${fileUri.toString()}`);

        const task = async () => {
            const document = await workspace.openTextDocument(fileUri);
            analyzeStFile(model, document);
        };
        
        tasks.push(task());
    }

    await Promise.all(tasks);

    return model;
}

function analyzeStFile(
    model: Map<string, SourceFile>,
    document: TextDocument) {
   
    const uri = document.uri;

    if (uri.scheme !== "file") {
        return;
    }

    _documentUri = uri;

    const sourceFile = getOrCreateSourceFile(model, uri);

    if (document.lineCount === 0) {
        return;
    }

    const inputStream = CharStream.fromString(document.getText());
    const lexer = new StructuredTextLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new StructuredTextParser(tokenStream);
    const tree = parser.compilationUnit();

    const visitor = new MyVisitor(sourceFile);
    tree.accept(visitor);
}

function getOrCreateSourceFile(
    model: Map<string, SourceFile>,
    fileUri: Uri): SourceFile {
    
    let sourceFile: SourceFile;
    let fileUriAsString = fileUri.toString();

    if (model.has(fileUriAsString)) {
        sourceFile = model.get(fileUriAsString)!;
    }

    else {
        logger.appendLine(`Create source file ${fileUri}`);

        sourceFile = new SourceFile(
            fileUri,
            fileUriAsString,
            new Map<ParserRuleContext, StSymbol>()
        );
        
        model.set(fileUriAsString, sourceFile);
    }

    return sourceFile;
}

class MyVisitor extends StructuredTextVisitor<void> {

    private _sourceFile: SourceFile;

    constructor(sourceFile: SourceFile) {
        super();
        this._sourceFile = sourceFile;
    }

    public override visitProgram = (ctx: ProgramContext): void => {
        this.getOrCreateProgram(ctx)
        this.visitChildren(ctx);
    };

    public override visitInterface = (ctx: InterfaceContext): void => {
        this.getOrCreateInterface(ctx);
        this.visitChildren(ctx);
    };

    public override visitFunctionBlock = (ctx: FunctionBlockContext): void => {
        this.getOrCreateFunctionBlock(ctx)
        this.visitChildren(ctx);
    };

    public override visitMember = (ctx: MemberContext): void => {
        this.visitChildren(ctx);
    };

    public override visitFunction = (ctx: FunctionContext): void => {
        this.getOrCreateFunction(ctx)
        this.visitChildren(ctx);
    };

    public override visitMethod = (ctx: MethodContext): void => {
        this.getOrCreateMethod(ctx)
        this.visitChildren(ctx);
    };

    public override visitProperty = (ctx: PropertyContext): void => {
        this.getOrCreateProperty(ctx)
        this.visitChildren(ctx);
    };

    public override visitVarDeclSection = (ctx: VarDeclSectionContext): void => {
        this.getOrCreateVarDeclSection(ctx)
        this.visitChildren(ctx);
    };

    public override visitVarDecl = (ctx: VarDeclContext): void => {
        this.getOrCreateVarDecl(ctx)
    };

    public override visitAssignment = (ctx: AssignmentContext): void => {
        this.processAssignment(ctx)
    };

    public override visitExpr = (ctx: ExprContext): void => {

        const variableUsageToken = ctx.ID()?.symbol;

        if (variableUsageToken)
            this.getOrCreateVariableUsage(ctx, variableUsageToken);

        for (const expression of ctx.expr()) {
            this.visitExpr(expression);
        }
    };

    public override visitCallStatement? = (ctx: CallStatementContext): void => {
        const token = ctx.ID().symbol;
        this.getOrCreateMethodOrFunctionCall(ctx, token);
    }

    getOrCreateProgram(ctx: ProgramContext): StSymbol {
        const idToken = ctx.ID().symbol;
        const name = idToken.text;
        const range = this.getRangeFromToken(idToken);

        return this.getOrCreate(ctx, name, range, StSymbolKind.Program);
    }

    getOrCreateInterface(ctx: InterfaceContext): StSymbol {
        const idToken = ctx.ID().symbol;
        const name = idToken.text;
        const range = this.getRangeFromToken(idToken);

        return this.getOrCreate(ctx, name, range, StSymbolKind.Interface);
    }

    getOrCreateFunctionBlock(ctx: FunctionBlockContext): StSymbol {
        const idToken = ctx.ID().symbol;
        const name = idToken.text;
        const selectionRange = this.getRangeFromToken(idToken);

        return this.getOrCreate(ctx, name, selectionRange, StSymbolKind.FunctionBlock);
    }

    getOrCreateFunction(ctx: FunctionContext): StSymbol {
        const idToken = ctx.ID().symbol;
        const name = idToken.text;
        const range = this.getRangeFromToken(idToken);

        return this.getOrCreate(ctx, name, range, StSymbolKind.Function);
    }

    getOrCreateMethod(ctx: MethodContext): StSymbol {
        const idToken = ctx.ID().symbol;
        const name = idToken.text;
        const range = this.getRangeFromToken(idToken);

        return this.getOrCreate(
            ctx,
            name,
            range,
            StSymbolKind.Method,
            parentCtx => {
                const grandParent = parentCtx.parent!;

                switch (grandParent.constructor) {

                    case InterfaceContext:
                        return this.getOrCreateInterface(grandParent as InterfaceContext);
                    
                    case FunctionBlockContext:
                        return this.getOrCreateFunctionBlock(grandParent as FunctionBlockContext);
                                           
                    default:
                        return undefined;
                   
                } 
            }
        );
    }

    getOrCreateProperty(ctx: PropertyContext): StSymbol {
        const idToken = ctx.ID().symbol;
        const name = idToken.text;
        const range = this.getRangeFromToken(idToken);

        return this.getOrCreate(
            ctx,
            name,
            range,
            StSymbolKind.Property,
            parentCtx => {
                const grandParent = parentCtx.parent!;

                switch (grandParent.constructor) {

                    case InterfaceContext:
                        return this.getOrCreateInterface(grandParent as InterfaceContext);
                    
                    case FunctionBlockContext:
                        return this.getOrCreateFunctionBlock(grandParent as FunctionBlockContext);
                                           
                    default:
                        return undefined;
                   
                } 
            }
        );
    }

    getOrCreateVarDeclSection(ctx: VarDeclSectionContext): StSymbol | undefined {

        const varTypeContext = ctx.varSectionType();
        const typeStartToken = varTypeContext.start!;
        const name = varTypeContext.getText();
        const selectionRange = this.getRangeFromToken(typeStartToken);

        return this.getOrCreate(
            ctx,
            name,
            selectionRange,
            StSymbolKind.VariableDeclarationSection,
            parentCtx => {
               switch (parentCtx.constructor) {

                    case ProgramContext:
                        return this.getOrCreateProgram(parentCtx as ProgramContext);
                    
                    case MemberContext:
                       
                        const grandParent = parentCtx.parent!;
                       
                        switch (grandParent.constructor) {

                            case InterfaceContext:
                                return this.getOrCreateInterface(grandParent as InterfaceContext);
                            
                            case FunctionBlockContext:
                                return this.getOrCreateFunctionBlock(grandParent as FunctionBlockContext);
                                                        
                            default:
                                return undefined;
                            
                        }
                   
                    case FunctionContext:
                        return this.getOrCreateFunction(parentCtx as FunctionContext);
                   
                    case MethodContext:
                        return this.getOrCreateMethod(parentCtx as MethodContext);
                   
                    case PropertyContext:
                        return this.getOrCreateProperty(parentCtx as PropertyContext);
                        
                    default:
                        return undefined;
                   
                } 
            }
        );
    }

    getOrCreateVarDecl(ctx: VarDeclContext): StSymbol {

        const idToken = ctx.ID().symbol;
        const name = idToken.text;
        const selectionRange = this.getRangeFromToken(idToken);

        return this.getOrCreate(
            ctx,
            name,
            selectionRange,
            StSymbolKind.VariableDeclaration,
            parentCtx => this.getOrCreateVarDeclSection(parentCtx as VarDeclSectionContext)
        );
    }
    
    processAssignment(ctx: AssignmentContext) {
        this.getOrCreateVariableUsage(ctx, ctx.ID().symbol);
        this.visitExpr(ctx.expr());
    }

    getOrCreateMethodOrFunctionCall(ctx: ParserRuleContext, id: Token): StSymbol {

        let declaringSymbol: StSymbol | undefined = undefined;

        // Either this call is a for a normal method or function ...
        const methodOrFunctionDeclaringParent = this.getOrCreateMethodOrFunctionDefiningParent(ctx);

        if (methodOrFunctionDeclaringParent)
            declaringSymbol = this.findMethodOrFunctionDeclaringSymbol(methodOrFunctionDeclaringParent, id);

        // ... or it is a function block variable that is being called
        if (!declaringSymbol) {
            const variableHoldingParent = this.getOrCreateVariableDeclaringParent(ctx);

            if (variableHoldingParent)
                declaringSymbol = this.findVariableDeclaringSymbol(variableHoldingParent, id);
        }

        //
        const symbol = new StSymbol(
            _documentUri,
            undefined,
            StSymbolKind.MethodOrFunctionCall,
            ctx,
            undefined,
            this.getRangeFromToken(id),
            undefined,
            declaringSymbol,
            []
        )

        // Add symbol to parent
        this.addSymbolToParent(methodOrFunctionDeclaringParent, symbol);

        return symbol;
    }

    getOrCreateVariableUsage(ctx: ParserRuleContext, id: Token): StSymbol {

        let declaringSymbol: StSymbol | undefined = undefined;
        const variableHoldingParent = this.getOrCreateVariableDeclaringParent(ctx);

        if (variableHoldingParent)
            declaringSymbol = this.findVariableDeclaringSymbol(variableHoldingParent, id);

        const symbol = new StSymbol(
            _documentUri,
            undefined,
            StSymbolKind.VariableUsage,
            ctx,
            undefined,
            this.getRangeFromToken(id),
            undefined,
            declaringSymbol,
            []
        )

        // Add symbol to parent
        this.addSymbolToParent(variableHoldingParent, symbol);

        return symbol;
    }

    getOrCreate(
        ctx: ParserRuleContext,
        name: string | undefined,
        selectionRange: Range | undefined,
        symbolKind: StSymbolKind,
        createParentSymbol?: (ctx: ParserRuleContext) => StSymbol | undefined
    ): StSymbol {

        // Do nothing if symbol already exists
        let symbol = this._sourceFile.symbolMap.get(ctx);

        if (symbol)
            return symbol;

        // Find optional parent
        let parent: StSymbol | undefined;

        if (ctx.parent) {
            parent = this._sourceFile.symbolMap.get(ctx.parent);

            if (!parent && createParentSymbol)
                parent = createParentSymbol(ctx.parent);
        }
        
        // Create symbol
        const range = this.getRangeFromContext(ctx);

        symbol = new StSymbol(
            _documentUri,
            name,
            symbolKind,
            ctx,
            parent,
            range,
            selectionRange,
            undefined,
            []
        );

        // Add symbol to parent
        this.addSymbolToParent(parent, symbol);

        // Add symbol to source file
        this._sourceFile.symbolMap.set(ctx, symbol);

        return symbol;
    }

    addSymbolToParent(parent: StSymbol | undefined, symbol: StSymbol) {
        if (parent) {

            if (!parent.children)
                parent.children = [];

            parent.children.push(symbol);
        }
    }

    getRangeFromToken(token: Token): Range {
        return new Range(
            token.line - 1,
            token.column,
            token.line - 1,
            token.column + token.stop - token.start + 1
        );
    }

    getRangeFromContext(ctx: ParserRuleContext): Range {
        const start = ctx.start!;
        const stop = ctx.stop!;

        return new Range(
            start.line - 1,
            start.column,
            stop.line - 1,
            stop.column + stop.stop - stop.start + 1
        );
    }

    getOrCreateMethodOrFunctionDefiningParent(ctx: ParserRuleContext): StSymbol | undefined {

        let current = ctx.parent ?? undefined;

        while (current) {

            if (
                current instanceof ProgramContext ||
                current instanceof FunctionBlockContext ||
                current instanceof FunctionContext
            ) {
                return this.getOrCreateContext(current);
            }

            current = current.parent ?? undefined;
        }

        return undefined;
    }

    getOrCreateVariableDeclaringParent(ctx: ParserRuleContext): StSymbol | undefined {

        let current = ctx.parent ?? undefined;

        while (current) {

            if (
                current instanceof ProgramContext ||
                current instanceof FunctionBlockContext ||
                current instanceof FunctionContext ||
                current instanceof PropertyContext ||
                current instanceof MethodContext
            ) {
                return this.getOrCreateContext(current);
            }

            current = current.parent ?? undefined;
        }

        return undefined;
    }

    private getOrCreateContext(ctx: ParserRuleContext): StSymbol | undefined {

        if (ctx instanceof ProgramContext)
            return this.getOrCreateProgram(ctx)

        if (ctx instanceof FunctionBlockContext)
            return this.getOrCreateFunctionBlock(ctx)

        if (ctx instanceof FunctionContext)
            return this.getOrCreateFunction(ctx)

        if (ctx instanceof PropertyContext)
            return this.getOrCreateProperty(ctx)

        if (ctx instanceof MethodContext)
            return this.getOrCreateMethod(ctx)

        if (ctx instanceof InterfaceContext)
            return this.getOrCreateInterface(ctx)

        if (ctx instanceof VarDeclSectionContext)
            return this.getOrCreateVarDeclSection(ctx)

        if (ctx instanceof VarDeclContext)
            return this.getOrCreateVarDecl(ctx)

        return undefined;
    }

    findMethodOrFunctionDeclaringSymbol(parent: StSymbol, id: Token): StSymbol | undefined {
        
        if (!parent.children)
            return undefined;

        const name = id.text;

        // Short cut for functions
        if (parent.kind === StSymbolKind.Function && parent.name === name)
            return parent;

        // Search for method declaration in this level
        for (const child of parent.children) {
            if (child.kind === StSymbolKind.Method && child.name === name)
                return child;
        }

        // Try next level up (parent of parent)
        const grandParent = this.getOrCreateVariableDeclaringParent(parent.context);

        if (grandParent)
            return this.findVariableDeclaringSymbol(grandParent, id);

        // Not found: could be a function defined in a different file (not supported yet)
        return undefined;
    }

    findVariableDeclaringSymbol(parent: StSymbol, id: Token): StSymbol | undefined {
        
        if (!parent.children)
            return undefined;

        const name = id.text;

        // Short cut for properties
        if (parent.kind === StSymbolKind.Property && parent.name === name)
            return parent;

        // Search for variable declaration in this level
        for (const child of parent.children) {

            if (child.kind === StSymbolKind.VariableDeclarationSection && child.children) {
                
                for (const varDecl of child.children) {
                    if (
                        varDecl.kind === StSymbolKind.VariableDeclaration &&
                        varDecl.name === name
                    ) {
                        return varDecl;
                    }
                }

            }

        }

        // Try next level up (parent of parent)
        const grandParent = this.getOrCreateVariableDeclaringParent(parent.context);

        if (grandParent)
            return this.findVariableDeclaringSymbol(grandParent, id);

        // Not found: could be a global variable (not supported yet)
        return undefined;
    }
}