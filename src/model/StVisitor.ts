import { ParserRuleContext, Token } from "antlr4ng";
import { Range, Uri } from "vscode";
import { SourceFile, StAccessModifier, StSymbol, StSymbolKind, StTypeInfo, VariableKind } from "../core.js";
import { AccessModifierContext, ArgumentContext, AssignmentContext, CallStatementContext, ExprContext, ExtendsClauseContext, FunctionBlockContext, FunctionContext, ImplementsClauseContext, InterfaceContext, MemberContext, MethodContext, ProgramContext, PropertyContext, StructDeclContext, TypeContext, TypeDeclContext, VarDeclContext, VarDeclSectionContext, VarGlobalSectionContext } from "../generated/StructuredTextParser.js";
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
        this.getOrCreateProgram(ctx)
        this.visitChildren(ctx);
    };

    public override visitTypeDecl = (ctx: TypeDeclContext): void => {

        const structDeclCtx = ctx.structDecl();

        if (structDeclCtx) {
            this.getOrCreateStruct(ctx);
            this.visitChildren(structDeclCtx);
        }
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
        this.getOrCreateVarDeclSection(ctx, (ctx as VarDeclSectionContext).varSectionType().start!)
        this.visitChildren(ctx);
    };

    public override visitVarDecl = (ctx: VarDeclContext): void => {
        this.getOrCreateVarDecl(ctx);
        this.visitChildren(ctx);
    };

    public override visitAssignment = (ctx: AssignmentContext): void => {
        this.processAssignment(ctx);
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

        /* Qualified member assignment is not yet supported */
        if (ctx.memberQualifier())
            return;

        const idNode = ctx.ID();

        if (!idNode)
            return;

        const idToken = idNode.symbol;

        this.getOrCreateMethodOrFunctionCall(ctx, idToken);
        this.visitChildren(ctx);
    }

    public override visitArgument? = (ctx: ArgumentContext): void => {
        this.getOrCreateArgument(ctx);
    }

    public override visitType? = (ctx: TypeContext): void | undefined => {
        this.getOrCreateType(ctx)
    }

    //#endregion

    //#region GetOrCreate

    private getOrCreateProgram(ctx: ProgramContext): StSymbol {
        const idToken = ctx.ID().symbol;
        const symbol = this.getOrCreate(ctx, idToken, StSymbolKind.Program);

        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);
        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        return symbol;
    }

    private getOrCreateInterface(ctx: InterfaceContext): StSymbol {

        const idToken = ctx.ID().symbol;
        const symbol = this.getOrCreate(ctx, idToken, StSymbolKind.Interface);

        symbol.typeInfo = new StTypeInfo({ isInterface: true });
        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);

        return symbol;
    }

    private getOrCreateFunctionBlock(ctx: FunctionBlockContext): StSymbol {

        const idToken = ctx.ID().symbol;
        const symbol = this.getOrCreate(ctx, idToken, StSymbolKind.FunctionBlock);

        symbol.typeInfo = new StTypeInfo({ isFunctionBlock: true });
        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);

        return symbol;
    }

    private getOrCreateStruct(ctx: TypeDeclContext): StSymbol {

        const idToken = ctx.ID().symbol;
        const accessModifier = ctx.accessModifier() ?? undefined;
        const symbol = this.getOrCreate(ctx, idToken, StSymbolKind.Struct);
        symbol.accessModifier = this.GetAccessModifier(accessModifier);

        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);

        return symbol;
    }

    private getOrCreateFunction(ctx: FunctionContext): StSymbol {

        const idToken = ctx.ID().symbol;
        const symbol = this.getOrCreate(ctx, idToken, StSymbolKind.Function);

        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        this._sourceFile.typeDeclarationsMap.set(ctx, symbol);

        return symbol;
    }

    private getOrCreateMethod(ctx: MethodContext): StSymbol {
        
        const idToken = ctx.ID().symbol;

        const symbol = this.getOrCreate(
            ctx,
            idToken,
            StSymbolKind.Method,
            () => {
                const grandParent = ctx.parent!.parent!;

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

        symbol.accessModifier = this.GetAccessModifier(ctx.accessModifier() ?? undefined);

        return symbol;
    }

    private getOrCreateProperty(ctx: PropertyContext): StSymbol {
        const idToken = ctx.ID().symbol;

        const symbol = this.getOrCreate(
            ctx,
            idToken,
            StSymbolKind.Property,
            () => {
                const grandParent = ctx.parent!.parent!;

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

    private getOrCreateArgument(ctx: ArgumentContext) {
        const expressionId = ctx.expr().ID();
        const idToken = expressionId?.symbol;

        if (idToken)
            this.getOrCreateVariableUsage(ctx, idToken);
    }

    private getOrCreateVarDeclSection(ctx: ParserRuleContext, nameToken: Token): StSymbol {

        return this.getOrCreate(
            ctx,
            nameToken,
            StSymbolKind.VariableSection,
            () => {

                const parentCtx = ctx.parent!;

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

    private getOrCreateVarDecl(ctx: VarDeclContext): StSymbol {

        const idToken = ctx.ID().symbol;

        const symbol = this.getOrCreate(
            ctx,
            idToken,
            StSymbolKind.Variable,
            () => {

                const parentCtx = ctx.parent!;

                switch (parentCtx.constructor) {

                    case VarDeclSectionContext:
                        return this.getOrCreateVarDeclSection(
                            parentCtx,
                            (parentCtx as VarDeclSectionContext).varSectionType().start!
                        );
                    
                    case VarGlobalSectionContext:

                        const varDeclSectionSymbol = this.getOrCreateVarDeclSection(
                            parentCtx,
                            (parentCtx as VarGlobalSectionContext).VAR_GLOBAL().symbol
                        );

                        this._sourceFile.varGlobalSectionMap.set(parentCtx, varDeclSectionSymbol);

                        return varDeclSectionSymbol;

                    case StructDeclContext:
                        return this.getOrCreateStruct(parentCtx.parent as TypeDeclContext);
                   
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

        this.getOrCreateVariableUsage(ctx, idToken);
        this.visitExpr(ctx.expr());
    }

    private getOrCreateMethodOrFunctionCall(ctx: ParserRuleContext, idToken: Token): StSymbol {
        return this.getOrCreate(
            ctx,
            idToken,
            StSymbolKind.MethodOrFunctionCall,
            () => this.getOrCreateNearestParent(ctx)
        );
    }

    private getOrCreateVariableUsage(ctx: ParserRuleContext, idToken: Token): StSymbol {

        return this.getOrCreate(
            ctx,
            idToken,
            StSymbolKind.VariableUsage,
            () => this.getOrCreateNearestParent(ctx)
        );
    }

    private getOrCreateNearestParent(ctx: ParserRuleContext): StSymbol | undefined {

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
                        return this.getOrCreateProgram(current as ProgramContext);
                    
                    case FunctionBlockContext:
                        return this.getOrCreateFunctionBlock(current as FunctionBlockContext);
                    
                    case FunctionContext:
                        return this.getOrCreateFunction(current as FunctionContext);
                   
                    case MethodContext:
                        return this.getOrCreateMethod(current as MethodContext);
                   
                    case PropertyContext:
                        return this.getOrCreateProperty(current as PropertyContext);
                    
                    case CallStatementContext:

                        const idNode = (current as CallStatementContext).ID();
                        
                        if (idNode) {
                            return this.getOrCreateMethodOrFunctionCall(
                                current,
                                idNode.symbol);
                        }

                        else {
                            return undefined;
                        }
                        
                    default:
                        return undefined;
                   
                }
            }

            current = current.parent ?? undefined;
        }

        return undefined;
    }

    private getOrCreateType(ctx: TypeContext): StSymbol {

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

        return this.getOrCreate(
            ctx,
            idToken,
            StSymbolKind.TypeUsage,
            () => {

                let parentCtx = ctx.parent!;

                switch (parentCtx.constructor) {
                    case ImplementsClauseContext:
                    case ExtendsClauseContext:
                        parentCtx = parentCtx.parent!;
                }

                switch (parentCtx.constructor) {

                    case InterfaceContext:
                        return this.getOrCreateInterface(parentCtx as InterfaceContext);

                    case FunctionBlockContext:
                        return this.getOrCreateFunctionBlock(parentCtx as FunctionBlockContext);
                                       
                    case Function:
                        return this.getOrCreateFunction(parentCtx as FunctionContext);
                                        
                    case MethodContext:
                        return this.getOrCreateMethod(parentCtx as MethodContext);
                   
                    case PropertyContext:
                        return this.getOrCreateProperty(parentCtx as PropertyContext);
                    
                    case VarDeclContext:
                        return this.getOrCreateVarDecl(parentCtx as VarDeclContext);                      
                        
                    default:
                        return undefined;
                   
                }
            }
        );
    }

    private getOrCreate(
        ctx: ParserRuleContext,
        nameToken: Token | undefined,
        symbolKind: StSymbolKind,
        createParentSymbol?: () => StSymbol | undefined
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
                parent = createParentSymbol();
        }
        
        // Create symbol
        const range = this.getRangeFromContext(ctx);

        const selectionRange = nameToken
            ? this.getRangeFromToken(nameToken)
            : undefined;
        
        const name = nameToken
            ? nameToken.text
            : undefined;

        symbol = new StSymbol(
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