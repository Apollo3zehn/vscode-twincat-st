import { ParserRuleContext, TerminalNode, Token } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity, Uri } from "vscode";
import { StAccessModifier, StBuiltinType, StModel, StNativeTypeKind, StSourceFile, StSymbol, StSymbolKind, StType, StTypeHierarchyInfo, StVariableScope } from "../core.js";
import { AccessModifierContext, BuiltinTypeContext, EnumMemberContext, ExprOrArrayInitContext, FunctionBlockContext, FunctionContext, InitialValueContext, InterfaceContext, MemberAccessContext, MemberContext, MethodContext, ProgramContext, PropertyContext, StatementContext, TypeContext, TypeDeclContext, VarDeclContext, VarDeclSectionContext, VarGlobalSectionContext } from "../generated/StructuredTextParser.js";
import { StructuredTextVisitor } from "../generated/StructuredTextVisitor.js";
import { getContextRange, getOriginalText, getTokenRange } from "../utils.js";

export class StVisitor extends StructuredTextVisitor<void> {

    private _sourceFile: StSourceFile;
    private _documentUri: Uri;
    private _parent: StSymbol | undefined;
    private _declaration: StSymbol | undefined;
    private _underlyingType: StType | undefined;
    private _variableKind: StVariableScope = StVariableScope.None;

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

        this._underlyingType = undefined;

        const symbol = this.createType(ctx);
        this.visitChildren(ctx);

        if (this._underlyingType) {
            if (symbol?.type)
                symbol.type = this._underlyingType;
        }

        else {
            if (symbol?.kind === StSymbolKind.Enum) {
                const defaultType = new StType();
                defaultType.builtinType = StBuiltinType.INT;
                symbol.type = defaultType;
            }
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

        this.createFunction(ctx);
        this.visitChildren(ctx);
    };

    public override visitMethod = (ctx: MethodContext): void => {

        this.createMethod(ctx);
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

    public override visitMemberAccess = (ctx: MemberAccessContext): void => {
        
        const idToken = ctx.ID()?.symbol

        if (idToken)
            this.createVariableUsage(ctx, idToken);
    }

    public override visitStatement = (ctx: StatementContext): void => {
        this._sourceFile.statements.push(ctx);
        this.visitChildren(ctx);
    }

    public override visitType? = (ctx: TypeContext): void | undefined => {
        this.visitChildren(ctx);

        const symbol = this.createTypeUsage(ctx);
        this._underlyingType = symbol.type;
    }

    //#endregion

    //#region Create

    private createProgram(ctx: ProgramContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Program);

        symbol.accessModifier = this.getAccessModifier(ctx.accessModifier() ?? undefined);

        this._parent = symbol;
        this.addGlobalObject(symbol);
    }

    private createInterface(ctx: InterfaceContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Interface);

        symbol.typeHierarchyInfo = new StTypeHierarchyInfo();
        symbol.accessModifier = this.getAccessModifier(ctx.accessModifier() ?? undefined);

        this._parent = symbol;
        this.addGlobalObject(symbol);
    }

    private createFunctionBlock(ctx: FunctionBlockContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.FunctionBlock);

        symbol.typeHierarchyInfo = new StTypeHierarchyInfo();
        symbol.accessModifier = this.getAccessModifier(ctx.accessModifier() ?? undefined);

        this.addGlobalObject(symbol);

        this._parent = symbol;
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

        symbol.accessModifier = this.getAccessModifier(ctx.accessModifier() ?? undefined);

        this.addGlobalObject(symbol);

        this._parent = symbol;
        this._declaration = symbol;

        return symbol;
    }

    private createFunction(ctx: FunctionContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Function);

        symbol.accessModifier = this.getAccessModifier(ctx.accessModifier() ?? undefined);

        this.addGlobalObject(symbol);
        this._parent = symbol;
        this._declaration = symbol;
    }

    private createVarGlobalSection(ctx: VarGlobalSectionContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.Gvl);

        symbol.accessModifier = this.getAccessModifier(ctx.accessModifier() ?? undefined);

        this.addGlobalObject(symbol);
        
        this._parent = symbol;
        this._declaration = symbol;
        this._variableKind = StVariableScope.Global;
    }

    private createMethod(ctx: MethodContext) {
        
        const idToken = ctx.ID().symbol;

        const symbol = this.create(
            ctx,
            idToken,
            StSymbolKind.Method
        );

        symbol.accessModifier = this.getAccessModifier(ctx.accessModifier() ?? undefined);

        if (this._parent)
            this.addLocalObject(this._parent, symbol, "methods");

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

        if (this._parent)
            this.addLocalObject(this._parent, symbol, "variablesAndProperties");
    }

    private createProperty(ctx: PropertyContext) {
        
        const idToken = ctx.ID().symbol;

        const symbol = this.create(
            ctx,
            idToken,
            StSymbolKind.Property
        );

        if (this._parent)
            this.addLocalObject(this._parent, symbol, "variablesAndProperties");

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

        if (this._parent)
            this.addLocalObject(this._parent, symbol, "variablesAndProperties");
        
        this._declaration = symbol;
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

        const type = new StType();
        type.context = ctx;

        const baseType = ctx.baseType();

        if (baseType) {

            const builtinType = baseType?.builtinType();

            if (builtinType) {

                const typeText = builtinType.start!.text!.toUpperCase();

                if (typeText in StBuiltinType) {

                    type.builtinType = typeText as StBuiltinType;

                    const nativeTypeDetails = type.builtinType
                        ? StModel.nativeTypes.get(type.builtinType)
                        : undefined;

                    const builtinTypeKind = nativeTypeDetails?.kind;

                    switch (builtinTypeKind) {

                        case StNativeTypeKind.String:

                            const stringLengthParam = builtinType
                                .STRING_LEN_PARAM()?.getText();

                            type.stringLength = stringLengthParam
                                ? Number.parseInt(stringLengthParam.slice(1, -1))
                                : 80;
                            
                            break;
                        
                        case StNativeTypeKind.Bitfield:
                        case StNativeTypeKind.UnsignedInteger:
                        case StNativeTypeKind.SignedInteger:

                            const subRangeParamToken = builtinType.SUBRANGE_PARAM();
                            const subRangeParam = subRangeParamToken?.getText();
                            const subRangeParts = subRangeParam?.split('..');
                            
                            if (subRangeParts) {

                                type.subRangeStart = Number.parseInt(subRangeParts[0].slice(1));
                                type.subRangeStop = Number.parseInt(subRangeParts[1].slice(0, -1));
                                type.isFullRange = false;

                                const min = nativeTypeDetails!.min!;
                                const max = nativeTypeDetails!.max!;

                                if (
                                    type.subRangeStart !== undefined &&
                                    type.subRangeStop !== undefined &&
                                    (
                                        !(min <= type.subRangeStart && type.subRangeStart <= max) ||
                                        !(min <= type.subRangeStop && type.subRangeStop <= max)
                                    )
                                ) {
                                    this.M0001(symbol, subRangeParamToken!);
                                }
                            }

                            else {
                                type.subRangeStart = nativeTypeDetails!.min;
                                type.subRangeStop = nativeTypeDetails!.max;
                                type.isFullRange = true;
                            }

                            break;
                    }
                }
            }
        }

        // If this is not a base type, it must get a base type assigned
        else {
            type.underlyingType = this._underlyingType;
        }

        if (this._declaration) {
            if (
                this._declaration.kind === StSymbolKind.Method ||
                this._declaration.kind === StSymbolKind.Function
            ) {
                this._declaration.returnTypeUsage = symbol
            }

            else {
                this._declaration.typeUsage = symbol;
            }
        }

        symbol.type = type;

        return symbol;
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
            this._variableKind = StVariableScope.Input;
            
        else if (sectionTypeCtx.VAR_OUTPUT())
            this._variableKind = StVariableScope.Output;
            
        else if (sectionTypeCtx.VAR_IN_OUT())
            this._variableKind = StVariableScope.InOut;
            
        else if (sectionTypeCtx.VAR_EXTERNAL())
            this._variableKind = StVariableScope.Global;

        else if (sectionTypeCtx.VAR_TEMP())
            this._variableKind = StVariableScope.Local;    
            
        else if (sectionTypeCtx.VAR_INST())
            this._variableKind = StVariableScope.Local;
            
        else if (sectionTypeCtx.VAR())
            this._variableKind = StVariableScope.Local;
    }

    //#endregion

    //#region Utils

    private getAccessModifier(ctx: AccessModifierContext | undefined): StAccessModifier | undefined {

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

    private addGlobalObject(symbol: StSymbol) {

        if (this._sourceFile.globalObjects.has(symbol.id))
            this.SA0027(symbol);
        
        else
            this._sourceFile.globalObjects.set(symbol.id, symbol);
    }

    public addLocalObject<K extends 'variablesAndProperties' | 'methods'>(
        parent: StSymbol,
        symbol: StSymbol,
        key: K
    ): void {

        if (!parent[key])
            parent[key] = new Map<string, StSymbol>();

        if (parent[key].has(symbol.id))
            this.C0142(symbol);

        else
            parent[key].set(symbol.id, symbol);
    }

    // C0142: A local variable named 'name' is already defined in 'scope'
    private C0142(symbol: StSymbol) {

        const diagnostic = new Diagnostic(
            symbol.selectionRange ?? symbol.range,
            `A local variable named '${symbol.id}' is already defined in '${symbol.parent?.id}'`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0142";
        this._sourceFile.diagnostics.push(diagnostic);
    }

    // M0001: The subrange parameters are not within the valid range
    private M0001(symbol: StSymbol, subRangeToken: TerminalNode) {

        const diagnostic = new Diagnostic(
            getTokenRange(subRangeToken.symbol)!,
            `The subrange parameters are not within the valid range`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "M0001";
        this._sourceFile.diagnostics.push(diagnostic);
    }

    // SA0027: Object name '{name}' already used in this application
    private SA0027(symbol: StSymbol) {

        const diagnostic = new Diagnostic(
            symbol.selectionRange ?? symbol.range,
            `Object name '${symbol.id}' already used in this application`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "SA0027";
        this._sourceFile.diagnostics.push(diagnostic);
    }

    //#endregion
}