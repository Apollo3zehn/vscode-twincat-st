import { ParserRuleContext, Token } from "antlr4ng";
import { Uri } from "vscode";
import { StAccessModifier, StBuiltinType, StSourceFile, StSymbol, StSymbolKind, StTypeInfo, VariableKind } from "../core.js";
import { AccessModifierContext, ArgumentContext, CallStatementContext, EnumMemberContext, FunctionBlockContext, FunctionContext, InitialValueContext, InterfaceContext, MemberContext, MemberQualifierContext, MethodContext, PrimaryContext, ProgramContext, PropertyContext, StatementContext, TypeContext, TypeDeclContext, VarDeclContext, VarDeclSectionContext, VarGlobalSectionContext } from "../generated/StructuredTextParser.js";
import { StructuredTextVisitor } from "../generated/StructuredTextVisitor.js";
import { getContextRange, getOriginalText, getTokenRange } from "../utils.js";

export class StVisitor extends StructuredTextVisitor<void> {

    private _sourceFile: StSourceFile;
    private _documentUri: Uri;
    private _parent: StSymbol | undefined;
    private _declaration: StSymbol | undefined;
    private _underlyingTypeUsage: StSymbol | undefined;
    private _qualifier: StSymbol | undefined;
    private _variableKind: VariableKind = VariableKind.None;

    constructor(sourceFile: StSourceFile, documentUri: Uri) {
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

        this._underlyingTypeUsage = undefined;

        const symbol = this.createType(ctx);
        this.visitChildren(ctx);

        if (symbol)
            symbol.underlyingTypeUsage = this._underlyingTypeUsage;
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
        this.createVarGlobalSection(ctx);
        this.visitChildren(ctx);
    };

    public override visitVarDecl = (ctx: VarDeclContext): void => {
        this.createVarDecl(ctx);
        this.visitChildren(ctx);
    };

    public override visitMemberQualifier = (ctx: MemberQualifierContext): void => {
        this._qualifier = undefined;
        this.visitChildren(ctx);
    }

    public override visitPrimary = (ctx: PrimaryContext): void => {
        
        const idToken = ctx.ID().symbol
        const symbol = this.createVariableUsage(ctx, idToken);
        
        symbol.qualifier = this._qualifier;
        this._qualifier = symbol;
    }

    public override visitStatement = (ctx: StatementContext): void => {
        this._sourceFile.statements.push(ctx);
        this.visitChildren(ctx);
    }

    public override visitCallStatement? = (ctx: CallStatementContext): void => {

        const idToken = ctx.ID().symbol;

        this.visitChildren(ctx);
        this.createCallStatement(ctx, idToken);
    }

    public override visitArgument? = (ctx: ArgumentContext): void => {
        this.createArgument(ctx);
    }

    public override visitType? = (ctx: TypeContext): void | undefined => {
        this.visitChildren(ctx);

        const symbol = this.createTypeUsage(ctx);
        this._underlyingTypeUsage = symbol;
    }

    //#endregion

    //#region Create

    private createProgram(ctx: ProgramContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Program);

        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._parent = symbol;
        this._sourceFile.types.push(symbol);
    }

    private createInterface(ctx: InterfaceContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Interface);

        symbol.typeHierarchyInfo = new StTypeInfo();
        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._parent = symbol;
        this._sourceFile.types.push(symbol);
    }

    private createFunctionBlock(ctx: FunctionBlockContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.FunctionBlock);

        symbol.typeHierarchyInfo = new StTypeInfo();
        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._parent = symbol;
        this._sourceFile.types.push(symbol);
    }

    private createType(ctx: TypeDeclContext): StSymbol | undefined {
        const structDeclCtx = ctx.structDecl();
        const enumDeclCtx = ctx.enumDecl();
        const typeCtx = ctx.type();

        let symbolKind: StSymbolKind;

        if (typeCtx)
            symbolKind = StSymbolKind.Alias;

        else if (enumDeclCtx)
            symbolKind = StSymbolKind.Enum;

        else if (structDeclCtx)
            symbolKind = StSymbolKind.Struct;

        else
            return undefined;

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, symbolKind);

        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._parent = symbol;
        this._sourceFile.types.push(symbol);
        this._declaration = symbol;

        return symbol;
    }

    private createFunction(ctx: FunctionContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Function);

        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._sourceFile.functions.push(symbol);
        this._parent = symbol;
        this._declaration = symbol;
    }

    private createVarGlobalSection(ctx: VarGlobalSectionContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Gvl);

        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._sourceFile.variables.push(symbol);
        this._parent = symbol;
        this._declaration = symbol;
        this._variableKind = VariableKind.Global;
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

        this._parent?.add("variables", symbol);
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
            StSymbolKind.VariableDeclaration
        );
        
        symbol.variableKind = this._variableKind;

        this._parent?.add("variables", symbol);
        this._declaration = symbol;
    }

    private createCallStatement(ctx: CallStatementContext, idToken: Token) {
        let symbol = this.create(
            ctx,
            idToken,
            StSymbolKind.CallStatement
        );

        if (ctx.memberQualifier())
            symbol.qualifier = this._qualifier;
    }

    private createVariableUsage(ctx: ParserRuleContext, idToken: Token): StSymbol {
        return this.create(
            ctx,
            idToken,
            StSymbolKind.VariableUsage
        );
    }

    private createTypeUsage(ctx: TypeContext): StSymbol {
           
        const symbol = this.create(
            ctx,
            undefined,
            StSymbolKind.TypeUsage
        );

        const baseType = ctx.baseType();

        if (baseType) {

            const builtinType = baseType?.builtinType();

            if (builtinType) {

                const typeText = builtinType.getText().toUpperCase();

                if (typeText in StBuiltinType)
                    symbol.builtinType = typeText as StBuiltinType;
            }
        }

        // If this is not a base type, it must get a base type assigned
        else {
            symbol.underlyingTypeUsage = this._underlyingTypeUsage;
        }

        if (this._declaration)
            this._declaration.typeUsage = symbol;

        return symbol;
    }

    private createArgument(ctx: ArgumentContext) {
        const expressionId = ctx.expr().memberQualifier()?.primary().ID();
        const idToken = expressionId?.symbol;

        if (idToken)
            this.createVariableUsage(ctx, idToken);
    }

    private create(
        ctx: ParserRuleContext,
        idToken: Token | undefined,
        symbolKind: StSymbolKind
    ): StSymbol {
        
        // Create symbol
        const range = getContextRange(ctx)!;

        const selectionRange = idToken
            ? getTokenRange(idToken)
            : range;
        
        const id = idToken
            ? idToken.text!
            : getOriginalText(ctx) ?? "??";

        const symbol = new StSymbol(
            this._documentUri,
            id,
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

        const sectionTypeCtx = ctx.varSectionType();
            
        if (sectionTypeCtx.VAR_INPUT())
            this._variableKind = VariableKind.Input;
            
        else if (sectionTypeCtx.VAR_OUTPUT())
            this._variableKind = VariableKind.Output;
            
        else if (sectionTypeCtx.VAR_IN_OUT())
            this._variableKind = VariableKind.InOut;
            
        else if (sectionTypeCtx.VAR_EXTERNAL())
            this._variableKind = VariableKind.Global;

        else if (sectionTypeCtx.VAR_TEMP())
            this._variableKind = VariableKind.Local;    
            
        else if (sectionTypeCtx.VAR_INST())
            this._variableKind = VariableKind.Local;
            
        else if (sectionTypeCtx.VAR())
            this._variableKind = VariableKind.Local;
    }

    //#endregion

    //#region Utils

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