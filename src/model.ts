import { ExtensionContext, TextDocument, Uri, workspace } from "vscode";
import { logger, SourceFile, StSymbol, StSymbolKind } from "./core.js";
import { CharStream, CommonTokenStream, ParserRuleContext } from "antlr4ng";
import { StructuredTextLexer } from "./generated/StructuredTextLexer.js";
import { FunctionBlockContext, FunctionBlockMemberContext, FunctionContext, MethodContext, ProgramContext, PropertyContext, StructuredTextParser, VarDeclContext, VarDeclSectionContext } from "./generated/StructuredTextParser.js";
import { StructuredTextVisitor } from "./generated/StructuredTextVisitor.js";

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
        this.createProgram(ctx)
    };

    public override visitFunctionBlock = (ctx: FunctionBlockContext): void => {
        this.createFunctionBlock(ctx)
        this.visitChildren(ctx);
    };

    public override visitFunctionBlockMember = (ctx: FunctionBlockMemberContext): void => {
        this.visitChildren(ctx);
    };

    public override visitFunction = (ctx: FunctionContext): void => {
        this.createFunction(ctx)
    };

    public override visitMethod = (ctx: MethodContext): void => {
        this.createMethod(ctx)
    };

    public override visitProperty = (ctx: PropertyContext): void => {
        this.createProperty(ctx)
    };

    public override visitVarDeclSection = (ctx: VarDeclSectionContext): void => {
        this.createVarDeclSection(ctx)
        this.visitChildren(ctx);
    };

    public override visitVarDecl = (ctx: VarDeclContext): void => {
        this.createVarDecl(ctx)
    };

    createProgram(ctx: ProgramContext): StSymbol {
        const name = ctx.ID().symbol.text;
        return this.create(ctx, name);
    }

    createFunctionBlock(ctx: FunctionBlockContext): StSymbol {
        const name = ctx.ID().symbol.text;
        return this.create(ctx, name);
    }

    createFunction(ctx: FunctionContext): StSymbol {
        const name = ctx.ID().symbol.text;
        return this.create(ctx, name);
    }

    createMethod(ctx: MethodContext): StSymbol {
        const name = ctx.ID().symbol.text;
        return this.create(ctx, name);
    }

    createProperty(ctx: PropertyContext): StSymbol {
        const name = ctx.ID().symbol.text;
        return this.create(ctx, name);
    }

    createVarDeclSection(ctx: VarDeclSectionContext): StSymbol {
        return this.create(
            ctx,
            undefined,
            parentCtx => {
               switch (parentCtx.constructor) {

                    case ProgramContext:
                        return this.createProgram(parentCtx as ProgramContext);
                    
                    case FunctionBlockMemberContext:
                       return this.createFunctionBlock(parentCtx.parent as FunctionBlockContext);
                   
                    case FunctionContext:
                        return this.createFunction(parentCtx as FunctionContext);
                   
                    case MethodContext:
                        return this.createMethod(parentCtx as MethodContext);
                   
                    case PropertyContext:
                        return this.createProperty(parentCtx as PropertyContext);
                        
                    default:
                        return undefined;
                   
                } 
            }
        );
    }

    createVarDecl(ctx: VarDeclContext): StSymbol {

        const name = ctx.ID().symbol.text;

        return this.create(
            ctx,
            name,
            parentCtx => this.createVarDeclSection(parentCtx as VarDeclSectionContext)
        );
    }

    create(
        ctx: ParserRuleContext,
        name: string | undefined,
        createParentSymbol?: (ctx: ParserRuleContext) => StSymbol | undefined
    ): StSymbol {

        // Do nothing if symbol already exists
        let symbol = this._sourceFile.symbols.get(ctx);

        if (symbol)
            return symbol;

        // Find optional parent
        let parent: StSymbol | undefined;

        if (ctx.parent) {
            parent = this._sourceFile.symbols.get(ctx.parent);

            if (!parent && createParentSymbol)
                parent = createParentSymbol(ctx.parent);
        }
        
        // Find symbol kind
        let symbolKind: StSymbolKind;

        switch (ctx.constructor) {

            case VarDeclSectionContext:
                symbolKind = StSymbolKind.VariableDeclarationSection; break;
                
            case VarDeclContext:
                symbolKind = StSymbolKind.VariableDeclaration; break;
                
            case ProgramContext:
                symbolKind = StSymbolKind.Program; break;
                
            case FunctionBlockContext:
                symbolKind = StSymbolKind.FunctionBlock; break;
            
            case FunctionContext:
                symbolKind = StSymbolKind.Function; break;
            
            case MethodContext:
                symbolKind = StSymbolKind.Method; break;
            
            case PropertyContext:
                symbolKind = StSymbolKind.Property; break;
            
            default:
                symbolKind = StSymbolKind.Unknown;
        }

        // Create symbol
        symbol = new StSymbol(
            name,
            symbolKind,
            ctx,
            parent,
            []
        );

        // Add symbol to parent
        if (parent) {

            if (!parent.children)
                parent.children = [];

            parent.children.push(symbol);
        }

        // Add symbol to source file
        this._sourceFile.symbols.set(ctx, symbol);

        return symbol;
    }
}