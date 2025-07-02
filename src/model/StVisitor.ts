import { ParserRuleContext, Token } from "antlr4ng";
import { Range, Uri } from "vscode";
import { SourceFile, StAccessModifier, StSymbol, StSymbolKind, StTypeInfo, VariableKind } from "../core.js";
import { AccessModifierContext, ArgumentContext, AssignmentContext, CallStatementContext, EnumDeclContext, EnumMemberContext, ExprContext, ExtendsClauseContext, FunctionBlockContext, FunctionContext, ImplementsClauseContext, InterfaceContext, MemberContext, MethodContext, ProgramContext, PropertyContext, StructDeclContext, TypeContext, TypeDeclContext, VarDeclContext, VarDeclSectionContext, VarGlobalSectionContext } from "../generated/StructuredTextParser.js";
import { StructuredTextVisitor } from "../generated/StructuredTextVisitor.js";

export class StVisitor extends StructuredTextVisitor<void> {

    private _sourceFile: SourceFile;
    private _documentUri: Uri;

    constructor(sourceFile: SourceFile, documentUri: Uri) {
        super();
        this._sourceFile = sourceFile;
        this._documentUri = documentUri;
    }

    //#region Visit

    public override visitProgram = (ctx: ProgramContext): void => {
        this.createProgram(ctx)
        this.visitChildren(ctx);
    };

    public override visitTypeDecl = (ctx: TypeDeclContext): void => {

        const structDeclCtx = ctx.structDecl();
        const enumDeclCtx = ctx.enumDecl();

        if (structDeclCtx) {
            this.createStruct(ctx);
            this.visitChildren(structDeclCtx);
        }

        else if (enumDeclCtx) {
            this.createEnum(ctx);
            this.visitChildren(enumDeclCtx);
        }
    };

    public override visitEnumMember = (ctx: EnumMemberContext): void => {
        this.createEnumMember(ctx);
        this.visitChildren(ctx);
    };

    public override visitInterface = (ctx: InterfaceContext): void => {
        this.createInterface(ctx);
        this.visitChildren(ctx);
    };

    public override visitFunctionBlock = (ctx: FunctionBlockContext): void => {
        this.createFunctionBlock(ctx)
        this.visitChildren(ctx);
    };

    public override visitMember = (ctx: MemberContext): void => {
        this.visitChildren(ctx);
    };

    public override visitFunction = (ctx: FunctionContext): void => {
        this.createFunction(ctx)
        this.visitChildren(ctx);
    };

    public override visitMethod = (ctx: MethodContext): void => {
        this.createMethod(ctx)
        this.visitChildren(ctx);
    };

    public override visitProperty = (ctx: PropertyContext): void => {
        this.createProperty(ctx)
        this.visitChildren(ctx);
    };

    public override visitVarDeclSection = (ctx: VarDeclSectionContext): void => {
        this.createVarDeclSection(ctx, (ctx as VarDeclSectionContext).varSectionType().start!)
        this.visitChildren(ctx);
    };

    public override visitVarGlobalSection = (ctx: VarGlobalSectionContext): void => {
        this.createVarGlobalSection(ctx);
        this.visitChildren(ctx);
    };

    public override visitVarDecl = (ctx: VarDeclContext): void => {
        this.createVarDecl(ctx);
        this.visitChildren(ctx);
    };

    public override visitAssignment = (ctx: AssignmentContext): void => {
        this.processAssignment(ctx);
    };

    public override visitExpr = (ctx: ExprContext): void => {

        const variableUsageToken = ctx.ID()?.symbol;

        if (variableUsageToken)
            this.createVariableUsage(ctx, variableUsageToken);

        for (const expression of ctx.expr()) {
            this.visitExpr(expression);
        }
    };

    public override visitCallStatement? = (ctx: CallStatementContext): void => {

        /* Qualified member assignment is not yet supported */
        if (ctx.memberQualifier())
            return;

        const idNode = ctx.ID();

        if (!idNode)
            return;

        const idToken = idNode.symbol;

        this.createMethodOrFunctionCall(ctx, idToken);
        this.visitChildren(ctx);
    }

    public override visitArgument? = (ctx: ArgumentContext): void => {
        this.createArgument(ctx);
    }

    public override visitType? = (ctx: TypeContext): void | undefined => {
        this.createType(ctx)
    }

    //#endregion

    //#region Create

    private createProgram(ctx: ProgramContext): StSymbol {
        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Program);

        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);
        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        return symbol;
    }

    private createInterface(ctx: InterfaceContext): StSymbol {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Interface);

        symbol.typeInfo = new StTypeInfo();
        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);

        return symbol;
    }

    private createFunctionBlock(ctx: FunctionBlockContext): StSymbol {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.FunctionBlock);

        symbol.typeInfo = new StTypeInfo();
        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);

        return symbol;
    }

    private createStruct(ctx: TypeDeclContext): StSymbol {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Struct);

        symbol.typeInfo = new StTypeInfo();
        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);

        return symbol;
    }

    private createEnum(ctx: TypeDeclContext): StSymbol {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Enum);

        symbol.typeInfo = new StTypeInfo();
        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);

        return symbol;
       
    }

    private createEnumMember(ctx: EnumMemberContext): StSymbol {

        const idToken = ctx.ID().symbol;

        const symbol = this.create(
            ctx,
            idToken,
            StSymbolKind.EnumMember,
            () => ctx.parent?.parent ?? undefined
        );

        symbol.accessModifier = StAccessModifier.Public;

        return symbol;
    }

    private createFunction(ctx: FunctionContext): StSymbol {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Function);

        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);

        return symbol;
    }

    private createMethod(ctx: MethodContext): StSymbol {
        
        const idToken = ctx.ID().symbol;

        const symbol = this.create(
            ctx,
            idToken,
            StSymbolKind.Method,
            () => ctx.parent?.parent ?? undefined
        );

        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        return symbol;
    }

    private createProperty(ctx: PropertyContext): StSymbol {
        const idToken = ctx.ID().symbol;

        const symbol = this.create(
            ctx,
            idToken,
            StSymbolKind.Property,
            () => ctx.parent?.parent ?? undefined
        );

        let variableKind: VariableKind | undefined;

        const propertyBodyCtx = ctx.propertyBody();
            
        const getter = propertyBodyCtx.getter();
        const setter = propertyBodyCtx.setter();

        if (getter) {
            if (setter)
                variableKind = VariableKind.InOut

            else
                variableKind = VariableKind.Output
        }

        else {
            if (setter)
                variableKind = VariableKind.Input

            else
                variableKind = undefined
        }

        symbol.variableKind = variableKind;

        return symbol;
    }

    private createArgument(ctx: ArgumentContext) {
        const expressionId = ctx.expr().ID();
        const idToken = expressionId?.symbol;

        if (idToken)
            this.createVariableUsage(ctx, idToken);
    }

    private createVarDeclSection(ctx: VarDeclSectionContext, nameToken: Token): StSymbol {

        return this.create(
            ctx,
            nameToken,
            StSymbolKind.VariableSection,
            () => {

                const parentCtx = ctx.parent!;

                switch (parentCtx.constructor) {

                    case ProgramContext:
                    case FunctionContext:
                    case MethodContext:
                    case PropertyContext:
                        return ctx.parent ?? undefined
                    
                    case MemberContext:
                        return ctx.parent?.parent ?? undefined;
                        
                    default:
                        return undefined;
                }
            }
        );
    }

    private createVarGlobalSection(ctx: VarGlobalSectionContext): StSymbol {

        return this.create(
            ctx,
            ctx.VAR_GLOBAL().symbol,
            StSymbolKind.VariableSection
        );
    }

    private createVarDecl(ctx: VarDeclContext): StSymbol {

        const idToken = ctx.ID().symbol;

        const symbol = this.create(
            ctx,
            idToken,
            StSymbolKind.Variable,
            () => {

                const parentCtx = ctx.parent!;

                switch (parentCtx.constructor) {

                    case VarDeclSectionContext:                 
                    case VarGlobalSectionContext:
                        return ctx.parent ?? undefined;

                    case StructDeclContext:
                        return ctx.parent?.parent ?? undefined;
                   
                    default:
                        return undefined;
                }
            }
        );

        symbol.accessModifier = StAccessModifier.Public;

        let variableKind: VariableKind | undefined = undefined;
        
        const parentCtx = ctx.parent!;

        if (parentCtx instanceof VarDeclSectionContext) {

            const sectionTypeCtx = (parentCtx as VarDeclSectionContext).varSectionType();
            
            if (sectionTypeCtx.VAR_INPUT()) {
                variableKind = VariableKind.Input;
                symbol.accessModifier = StAccessModifier.Private;
            }
                
            else if (sectionTypeCtx.VAR_OUTPUT())
                variableKind = VariableKind.Output;
                
            else if (sectionTypeCtx.VAR_IN_OUT())
                variableKind = VariableKind.InOut;
                
            else if (sectionTypeCtx.VAR_TEMP())
                variableKind = VariableKind.Local;
                
            else if (sectionTypeCtx.VAR_EXTERNAL())
                variableKind = VariableKind.Global;
                
            else if (sectionTypeCtx.VAR_INST()) {
                variableKind = VariableKind.Local;
                symbol.accessModifier = StAccessModifier.Private;
            }
                
            else if (sectionTypeCtx.VAR())
                variableKind = VariableKind.Local;
            
        }
        
        else if (parentCtx instanceof VarGlobalSectionContext) {
            variableKind = VariableKind.Global;
        }
        
        else if (parentCtx instanceof StructDeclContext) {
            variableKind = VariableKind.Input;
        }
        
        symbol.variableKind = variableKind;

        return symbol;
    }
    
    private processAssignment(ctx: AssignmentContext) {

        const assignTargetContext = ctx.assignTarget();

        /* Qualified member assignment is not yet supported */
        if (assignTargetContext.memberQualifier())
            return;

        const idToken = assignTargetContext.ID().symbol;

        this.createVariableUsage(ctx, idToken);
        this.visitExpr(ctx.expr());
    }

    private createMethodOrFunctionCall(ctx: ParserRuleContext, idToken: Token): StSymbol {
        return this.create(
            ctx,
            idToken,
            StSymbolKind.MethodOrFunctionCall,
            () => this.getNearestParentContext(ctx)
        );
    }

    private createVariableUsage(ctx: ParserRuleContext, idToken: Token): StSymbol {

        return this.create(
            ctx,
            idToken,
            StSymbolKind.VariableUsage,
            () => this.getNearestParentContext(ctx)
        );
    }

    private getNearestParentContext(ctx: ParserRuleContext): ParserRuleContext | undefined {

        let current = ctx.parent ?? undefined;

        while (current) {

            if (
                current instanceof ProgramContext ||
                current instanceof FunctionBlockContext ||
                current instanceof FunctionContext ||
                current instanceof MethodContext ||
                current instanceof PropertyContext ||
                current instanceof ArgumentContext ||
                current instanceof CallStatementContext
            ) {
                switch (current.constructor) {

                    case ProgramContext:
                    case FunctionBlockContext:
                    case FunctionContext:
                    case MethodContext:
                    case PropertyContext:
                    case CallStatementContext:
                        return current;

                    default:
                        return undefined;
                }
            }

            current = current.parent ?? undefined;
        }

        return undefined;
    }

    private createType(ctx: TypeContext): StSymbol {

        const builtinTypeNode = ctx.builtinType();
        let idToken: Token | undefined;

        if (builtinTypeNode) {
            const text = builtinTypeNode.getText();
            const startToken = builtinTypeNode.start;

            idToken = {
                ...startToken,
                text,
            } as Token;
        }
        
        else if (ctx.ID()) {
            idToken = ctx.ID()!.symbol;
        }

        const symbol = this.create(
            ctx,
            idToken,
            StSymbolKind.TypeUsage,
            () => {

                let parentCtx = ctx.parent!;

                switch (parentCtx.constructor) {

                    case InterfaceContext:
                    case FunctionBlockContext:
                    case Function:
                    case MethodContext:
                    case PropertyContext:
                    case VarDeclContext:
                        return ctx.parent ?? undefined;
                        
                    case EnumDeclContext:
                    case ImplementsClauseContext:
                    case ExtendsClauseContext:
                        return ctx.parent?.parent ?? undefined;
                        
                    default:
                        return undefined;
                   
                }
            }
        );

        if (builtinTypeNode)
            symbol.isBuiltinType = true;
        
        return symbol;
    }

    private create(
        ctx: ParserRuleContext,
        nameToken: Token | undefined,
        symbolKind: StSymbolKind,
        getParentContext?: () => ParserRuleContext | undefined
    ): StSymbol {

        // Find optional parent
        const parentCtx = getParentContext?.();

        const parent = parentCtx
            ? this._sourceFile.symbolMap.get(parentCtx)
            :undefined;
        
        // Create symbol
        const range = this.getRangeFromContext(ctx);

        const selectionRange = nameToken
            ? this.getRangeFromToken(nameToken)
            : undefined;
        
        const name = nameToken
            ? nameToken.text
            : undefined;

        const symbol = new StSymbol(
            this._documentUri,
            nameToken,
            name,
            symbolKind,
            ctx,
            parent,
            range,
            selectionRange
        );

        // Add symbol to parent
        this.addSymbolToParent(parent, symbol);

        // Add symbol to source file
        this._sourceFile.symbolMap.set(ctx, symbol);

        return symbol;
    }

    //#endregion

    //#region Utils

    private addSymbolToParent(parent: StSymbol | undefined, symbol: StSymbol) {
        if (parent) {

            if (!parent.children)
                parent.children = [];

            parent.children.push(symbol);
        }
    }

    private getRangeFromToken(token: Token): Range {
        return new Range(
            token.line - 1,
            token.column,
            token.line - 1,
            token.column + token.stop - token.start + 1
        );
    }

    private getRangeFromContext(ctx: ParserRuleContext): Range {
        const start = ctx.start!;
        const stop = ctx.stop!;

        return new Range(
            start.line - 1,
            start.column,
            stop.line - 1,
            stop.column + stop.stop - stop.start + 1
        );
    }

    private GetAccessModifier(ctx: AccessModifierContext | undefined): StAccessModifier | undefined {

        if (!ctx)
            return;

        let accessModifier: StAccessModifier | undefined = undefined;

        if (ctx?.PUBLIC())
            accessModifier = StAccessModifier.Public;

        else if (ctx?.INTERNAL())
            accessModifier = StAccessModifier.Internal;

        else if (ctx?.PROTECTED())
            accessModifier = StAccessModifier.Protected;

        else if (ctx?.PRIVATE())
            accessModifier = StAccessModifier.Private;

        return accessModifier;
    }

    //#endregion
}