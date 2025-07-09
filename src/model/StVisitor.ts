import { ParserRuleContext, Token } from "antlr4ng";
import { Range, Uri } from "vscode";
import { logger, SourceFile, StAccessModifier, StSymbol, StSymbolKind, StTypeInfo, VariableKind } from "../core.js";
import { AccessModifierContext, ArgumentContext, AssignmentContext, CallStatementContext, EnumDeclContext, EnumMemberContext, ExprContext, FunctionBlockContext, FunctionContext, InitialValueContext, InterfaceContext, MemberContext, MemberQualifierContext, MethodContext, PrimaryContext, ProgramContext, PropertyContext, StructDeclContext, TypeContext, TypeDeclContext, VarDeclContext, VarDeclSectionContext, VarGlobalSectionContext } from "../generated/StructuredTextParser.js";
import { StructuredTextVisitor } from "../generated/StructuredTextVisitor.js";

export class StVisitor extends StructuredTextVisitor<void> {

    private _sourceFile: SourceFile;
    private _documentUri: Uri;
    private _parent: StSymbol | undefined;
    private _declaration: StSymbol | undefined;
    private _variableKind: VariableKind = VariableKind.None;
    private _accessModifier: StAccessModifier = StAccessModifier.Public;

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
            this.createStruct(structDeclCtx);
            this.visitChildren(structDeclCtx);
        }

        else if (enumDeclCtx) {
            this.createEnum(enumDeclCtx);
            this.visitChildren(enumDeclCtx);
        }
    };

    public override visitEnumMember = (ctx: EnumMemberContext): void => {
        this.createEnumMember(ctx);
        this.visitChildren(ctx);
    };

    public override visitInitialValue = (ctx: InitialValueContext): void => {
        const idToken = ctx.ID().symbol
        this.createVariableUsage(ctx, idToken)
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

        /* Workaround for the fact that a method can act as a parent itself.
         * This is no final solution as more problems of this kind may arise
         * in future. E.g. a method call is a parent for its arguments.
         */
        this._parent = this._parent?.parent;
    };

    public override visitProperty = (ctx: PropertyContext): void => {
        this.createProperty(ctx)
        this.visitChildren(ctx);
    };

    public override visitVarDeclSection = (ctx: VarDeclSectionContext): void => {
        this.processVarDeclSection(ctx)
        this.visitChildren(ctx);
    };

    public override visitVarGlobalSection = (ctx: VarGlobalSectionContext): void => {
        this.processVarGlobalSection(ctx);
        this.visitChildren(ctx);
    };

    public override visitVarDecl = (ctx: VarDeclContext): void => {
        this.createVarDecl(ctx);
        this.visitChildren(ctx);
    };

    public override visitAssignment = (ctx: AssignmentContext): void => {
        this.processAssignment(ctx);
    };

    public override visitMemberQualifier = (ctx: MemberQualifierContext): void => {
        
        const idToken = ctx.ID()?.symbol

        if (idToken)
            this.createVariableUsage(ctx, idToken);

        this.visitChildren(ctx);
    }

    public override visitPrimary = (ctx: PrimaryContext): void => {
        
        const idToken =
            ctx.ID()?.symbol ??
            ctx.THIS()?.symbol
        
        logger.appendLine(idToken?.text ?? "?");

        if (idToken)
            this.createVariableUsage(ctx, idToken);
    }

    public override visitExpr = (ctx: ExprContext): void => {

        const variableUsageToken = ctx.ID()?.symbol;

        if (variableUsageToken)
            this.createVariableUsage(ctx, variableUsageToken);

        for (const expression of ctx.expr()) {
            this.visitExpr(expression);
        }
    };

    public override visitCallStatement? = (ctx: CallStatementContext): void => {

        const idToken = ctx.ID().symbol;

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

    private createProgram(ctx: ProgramContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Program);

        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._parent = symbol;
        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);
    }

    private createInterface(ctx: InterfaceContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Interface);

        symbol.typeInfo = new StTypeInfo();
        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._parent = symbol;
        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);
    }

    private createFunctionBlock(ctx: FunctionBlockContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.FunctionBlock);

        symbol.typeInfo = new StTypeInfo();
        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._parent = symbol;
        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);
    }

    private createStruct(ctx: StructDeclContext) {

        const typeDeclCtx = ctx.parent as TypeDeclContext;
        const idToken = typeDeclCtx.ID().symbol;
        const symbol = this.create(typeDeclCtx, idToken, StSymbolKind.Struct);

        symbol.typeInfo = new StTypeInfo();
        symbol.accessModifier = this.GetAccessModifier(typeDeclCtx.accessModifier() ?? undefined);

        this._parent = symbol;
        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);
    }

    private createEnum(ctx: EnumDeclContext) {

        const typeDeclCtx = ctx.parent as TypeDeclContext;
        const idToken = typeDeclCtx.ID().symbol;
        const symbol = this.create(typeDeclCtx, idToken, StSymbolKind.Enum);

        symbol.typeInfo = new StTypeInfo();
        symbol.accessModifier = this.GetAccessModifier(typeDeclCtx.accessModifier() ?? undefined);

        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);
        this._parent = symbol;
        this._declaration = symbol;
    }

    private createFunction(ctx: FunctionContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Function);

        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);
        this._parent = symbol;
        this._declaration = symbol;
    }

    private createMethod(ctx: MethodContext) {
        
        const idToken = ctx.ID().symbol;

        const symbol = this.create(
            ctx,
            idToken,
            StSymbolKind.Method
        );

        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._parent?.add("methods", symbol);
        this._parent = symbol;
        this._declaration = symbol;
    }

    private createEnumMember(ctx: EnumMemberContext) {

        const idToken = ctx.ID().symbol;

        const symbol = this.create(
            ctx,
            idToken,
            StSymbolKind.EnumMember
        );

        symbol.accessModifier = StAccessModifier.Public;
    }

    private createProperty(ctx: PropertyContext) {
        const idToken = ctx.ID().symbol;

        const symbol = this.create(
            ctx,
            idToken,
            StSymbolKind.Property
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

        this._parent?.add("properties", symbol);
        this._declaration = symbol;
    }

    private createVarDecl(ctx: VarDeclContext) {

        const idToken = ctx.ID().symbol;

        const symbol = this.create(
            ctx,
            idToken,
            StSymbolKind.Variable
        );
        
        symbol.variableKind = this._variableKind;
        symbol.accessModifier = this._accessModifier

        this._parent?.add("variables", symbol);
        this._declaration = symbol;
    }

    private createMethodOrFunctionCall(ctx: ParserRuleContext, idToken: Token) {
        this.create(
            ctx,
            idToken,
            StSymbolKind.MethodOrFunctionCall
        );
    }

    private createVariableUsage(ctx: ParserRuleContext, idToken: Token) {
        this.create(
            ctx,
            idToken,
            StSymbolKind.VariableUsage
        );
    }

    private createType(ctx: TypeContext) {

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
            StSymbolKind.TypeUsage
        );

        if (builtinTypeNode)
            symbol.isBuiltinType = true;

        if (this._declaration)
            this._declaration.type = symbol;
    }

    private createArgument(ctx: ArgumentContext) {
        const expressionId = ctx.expr().ID();
        const idToken = expressionId?.symbol;

        if (idToken)
            this.createVariableUsage(ctx, idToken);
    }

    private create(
        ctx: ParserRuleContext,
        nameToken: Token | undefined,
        symbolKind: StSymbolKind
    ): StSymbol {
        
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
            range,
            selectionRange
        );

        // Assign parent
        symbol.parent = this._parent;

        // Add symbol to parent's children
        if (this._parent)
            this._parent.addChild(symbol);

        // Add symbol to source file
        this._sourceFile.symbolMap.set(ctx, symbol);

        return symbol;
    }

    //#endregion

    //#region Process

        private processVarDeclSection(ctx: VarDeclSectionContext) {

        this._accessModifier = StAccessModifier.Public;

        const sectionTypeCtx = ctx.varSectionType();
            
        if (sectionTypeCtx.VAR_INPUT())
            this._variableKind = VariableKind.Input;
            
        else if (sectionTypeCtx.VAR_OUTPUT())
            this._variableKind = VariableKind.Output;
            
        else if (sectionTypeCtx.VAR_IN_OUT())
            this._variableKind = VariableKind.InOut;
            
        else if (sectionTypeCtx.VAR_TEMP())
            this._variableKind = VariableKind.Local;
            
        else if (sectionTypeCtx.VAR_EXTERNAL())
            this._variableKind = VariableKind.Global;
            
        else if (sectionTypeCtx.VAR_INST()) {
            this._variableKind = VariableKind.Local;
            this._accessModifier = StAccessModifier.Private;
        }
            
        else if (sectionTypeCtx.VAR()) {
            this._variableKind = VariableKind.Local;
            this._accessModifier = StAccessModifier.Private;
        }
    }

    private processVarGlobalSection(ctx: VarGlobalSectionContext) {
        this._accessModifier = StAccessModifier.Public;
        this._variableKind = VariableKind.Global;
    }

    private processAssignment(ctx: AssignmentContext) {

        const memberQualifierContext = ctx.memberQualifier();

        if (!memberQualifierContext)
            return;

        /* Assignment to a variable ... */
        let idToken = memberQualifierContext.ID()?.symbol

        /* Or assignment to this */
        if (!idToken && memberQualifierContext.primary()?.THIS() && memberQualifierContext.CARET())
            idToken = memberQualifierContext.ID()?.symbol;

        if (idToken)
            this.createVariableUsage(ctx, idToken);

        this.visitExpr(ctx.expr());
    }

    //#endregion

    //#region Utils

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