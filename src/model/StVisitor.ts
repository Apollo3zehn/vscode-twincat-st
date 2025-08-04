import { ParserRuleContext, Token } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity, Uri } from "vscode";
import { Architecture, nativeTypesDetails, StAccessModifier, StBuiltinType, StBuiltinTypeCode, StModel, StNativeTypeKind, StSymbol, StSymbolKind, StType, StTypeDeclarationDetails, StVariableScope } from "../core/types.js";
import { convertToPlatformSpecificTypeText, getContextRange, getModifier, getOriginalText, getTokenRange } from "../core/utils.js";
import { AccessModifierContext, DutDeclContext, EnumMemberContext, EnumTypeContext, FunctionBlockContext, FunctionContext, InitialValueContext, InterfaceContext, MemberAccessContext, MemberContext, MethodContext, ModifierContext, ProgramContext, PropertyContext, StatementContext, TypeContext, VarDeclContext, VarDeclSectionContext, VarGlobalSectionContext } from "../generated/StructuredTextParser.js";
import { StructuredTextVisitor } from "../generated/StructuredTextVisitor.js";
import { StModelBuilder } from "./StModelBuilder.js";

export class StVisitor extends StructuredTextVisitor<void> {

    private _documentUri: Uri;
    private _arch: Architecture;
    private _parent: StSymbol | undefined;
    private _declaration: StSymbol | undefined;
    private _type: StType | undefined;
    private _variableKind: StVariableScope = StVariableScope.None;

    constructor(documentUri: Uri, arch: Architecture) {
        super();
        this._documentUri = documentUri;
        this._arch = arch;
    }

    //#region Visit

    public override visitProgram = (ctx: ProgramContext): void => {
        this.createProgram(ctx);
        this.visitChildren(ctx);
    };

    public override visitDutDecl = (ctx: DutDeclContext): void => {

        this._type = undefined;

        const symbol = this.createDut(ctx);
        this.visitChildren(ctx);

        if (symbol?.typeDeclarationDetails) {
            
            let type: StType | undefined = this._type;

            if (!this._type && symbol.kind === StSymbolKind.Enum) {
                type = new StType();
                type.builtinType = new StBuiltinType(StBuiltinTypeCode.INT);
            }

            symbol.typeDeclarationDetails.underlyingType = type;
        }
    };

    public override visitEnumMember = (ctx: EnumMemberContext): void => {
        this.createEnumMember(ctx);
        this.visitChildren(ctx);
    };

    public override visitInitialValue = (ctx: InitialValueContext): void => {
        const idToken = ctx.ID().symbol;
        this.createVariableUsage(ctx, idToken);
    };

    public override visitInterface = (ctx: InterfaceContext): void => {
        this.createInterface(ctx);
        this.visitChildren(ctx);
    };

    public override visitFunctionBlock = (ctx: FunctionBlockContext): void => {
        this.createFunctionBlock(ctx);
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
        this.createProperty(ctx);
        this.visitChildren(ctx);
    };

    public override visitVarDeclSection = (ctx: VarDeclSectionContext): void => {
        this.processVarDeclSection(ctx);
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
        
        const idToken = ctx.ID()?.symbol;

        if (idToken)
            this.createVariableUsage(ctx, idToken);
    };

    public override visitStatement = (ctx: StatementContext): void => {
        StModelBuilder.currentSourceFile.statements.push(ctx);
        this.visitChildren(ctx);
    };

    public override visitType? = (ctx: TypeContext): void | undefined => {
        this.visitChildren(ctx);

        const symbol = this.createTypeUsage(ctx);
        this._type = symbol.type;
    };

    public override visitEnumType? = (ctx: EnumTypeContext): void | undefined => {
        this.visitChildren(ctx);

        const symbol = this.createEnumTypeUsage(ctx);
        this._type = symbol.type;
    };

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

        symbol.typeDeclarationDetails = new StTypeDeclarationDetails();
        symbol.accessModifier = this.getAccessModifier(ctx.accessModifier() ?? undefined);

        this._parent = symbol;
        this.addGlobalObject(symbol);
    }

    private createFunctionBlock(ctx: FunctionBlockContext) {

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, StSymbolKind.FunctionBlock);

        symbol.typeDeclarationDetails = new StTypeDeclarationDetails();
        symbol.accessModifier = this.getAccessModifier(ctx.accessModifier() ?? undefined);

        this.addGlobalObject(symbol);

        this._parent = symbol;
    }

    private createDut(ctx: DutDeclContext): StSymbol | undefined {

        const typeCtx = ctx.type();
        const enumDeclCtx = ctx.enumDecl();
        const structDeclCtx = ctx.structDecl();
        const unionDeclCtx = ctx.unionDecl();

        let symbolKind: StSymbolKind;

        if (typeCtx)
            symbolKind = StSymbolKind.Alias;

        else if (enumDeclCtx)
            symbolKind = StSymbolKind.Enum;

        else if (structDeclCtx)
            symbolKind = StSymbolKind.Struct;

        else if (unionDeclCtx)
            symbolKind = StSymbolKind.Union;
            
        else
            return undefined;

        const idToken = ctx.ID().symbol;
        const symbol = this.create(ctx, idToken, symbolKind);

        symbol.typeDeclarationDetails = new StTypeDeclarationDetails();
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

        let modifier: ModifierContext | null = null;
        
        if (ctx.parent instanceof VarDeclSectionContext)
            modifier = ctx.parent.modifier();

        else if (ctx.parent instanceof VarGlobalSectionContext)
            modifier = ctx.parent.modifier();

        symbol.modifier = getModifier(modifier);

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

        const typeId = ctx.typeId();

        if (typeId) {

            const builtinType = typeId?.builtinType();

            if (builtinType) {

                const typeText = builtinType.start!.text!.toUpperCase();
                const convertedTypeText = convertToPlatformSpecificTypeText(typeText, this._arch);

                if (convertedTypeText in StBuiltinTypeCode) {

                    const code = convertedTypeText as StBuiltinTypeCode;

                    type.builtinType = new StBuiltinType(code, builtinType.SUBRANGE_PARAM() ?? undefined);
                    
                    const nativeTypeDetails = code
                        ? nativeTypesDetails.get(code)
                        : undefined;

                    const builtinTypeKind = nativeTypeDetails?.kind;

                    switch (builtinTypeKind) {

                        case StNativeTypeKind.String:

                            const stringLengthParam = builtinType
                                .STRING_LEN_PARAM()?.getText();

                            type.builtinType.stringLength = stringLengthParam
                                ? Number.parseInt(stringLengthParam.slice(1, -1))
                                : 80;
                         
                            break;
                    }
                }
            }
        }

        // If this is a reference, pointer or array, it must get an underlying type assigned
        else {
            type.referencedOrElementType = this._type;

            if (ctx.POINTER_TO())
                type.builtinType = new StBuiltinType(convertToPlatformSpecificTypeText("PVOID", this._arch) as StBuiltinTypeCode);
        }

        if (this._declaration) {

            if (
                this._declaration.kind === StSymbolKind.Method ||
                this._declaration.kind === StSymbolKind.Function
            ) {
                this._declaration.returnTypeUsage = symbol;
            }

            else {
                this._declaration.typeUsage = symbol;
            }
        }

        symbol.type = type;

        return symbol;
    }

    private createEnumTypeUsage(ctx: EnumTypeContext): StSymbol {
           
        const symbol = this.create(
            ctx,
            undefined,
            StSymbolKind.TypeUsage
        );

        const type = new StType();
        const typeText = ctx._enumTypeId?.text;
        
        const convertedTypeText = typeText
            ? convertToPlatformSpecificTypeText(typeText, this._arch)
            : undefined;

        if (convertedTypeText && convertedTypeText in StBuiltinTypeCode)
            type.builtinType = new StBuiltinType(convertedTypeText as StBuiltinTypeCode, ctx.SUBRANGE_PARAM() ?? undefined);

        symbol.type = type;

        return symbol;
    }

    private create(
        ctx: ParserRuleContext,
        idToken: Token | undefined,
        symbolKind: StSymbolKind
    ): StSymbol {
        
        // Create symbol
        const range = getContextRange(ctx);

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
        StModelBuilder.currentSourceFile.symbolMap.set(ctx, symbol);

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

        if (StModelBuilder.currentSourceFile.globalObjects.has(symbol.id))
            this.SA0027(symbol);
        
        else
            StModelBuilder.currentSourceFile.globalObjects.set(symbol.id, symbol);
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
        StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
    }

    // SA0027: Object name '{name}' already used in this application
    private SA0027(symbol: StSymbol) {

        const diagnostic = new Diagnostic(
            symbol.selectionRange ?? symbol.range,
            `Object name '${symbol.id}' already used in this application`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "SA0027";
        StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
    }

    //#endregion
}