import { CharStream, CommonTokenStream, ParserRuleContext } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity, TextDocument, Uri, workspace } from "vscode";
import { logger, StBuiltinType, StBuiltinTypeCode, StModel, StModifier, StNativeTypeKind, StSourceFile, StSymbol, StSymbolKind, StType, StVariableScope } from "../core/types.js";
import { ConnectDeclaringSymbols, getContextRange, getNestedTypeOrSelf } from "../core/utils.js";
import { StructuredTextLexer } from "../generated/StructuredTextLexer.js";
import { AssignmentContext, CallStatementContext, EnumMemberContext, ExprContext, ExtendsClauseContext, ImplementsClauseContext, LiteralContext, MemberExpressionContext, MethodContext, PostfixOpContext, PropertyContext, StructuredTextParser, VarDeclContext } from "../generated/StructuredTextParser.js";
import { StVisitor } from "./StVisitor.js";
import { C0018, C0032, C0035, C0036, C0037, C0046, C0047, C0064, C0077, C0080, C0140, C0143, C0185, C0261 } from "./diagnostics.js";
import { evaluateBoolLiteral } from "./literals/evaluateBoolLiteral.js";
import { evaluateDateAndTimeLiteral } from "./literals/evaluateDateAndTimeLiteral.js";
import { evaluateDateLiteral } from "./literals/evaluateDateLiteral.js";
import { evaluateIntegerNumber } from "./literals/evaluateIntegerNumber.js";
import { evaluateLTimeLiteral } from "./literals/evaluateLTimeLiteral.js";
import { evaluateRealNumber } from "./literals/evaluateRealNumber.js";
import { evaluateStringLiteral } from "./literals/evaluateStringLiteral.js";
import { evaluateTimeLiteral } from "./literals/evaluateTimeLiteral.js";
import { evaluateTimeOfDayLiteral } from "./literals/evaluateTimeOfDayLiteral.js";
import { evaluateWStringLiteral } from "./literals/evaluateWStringLiteral.js";
import { getLowestCommonDenominator, promoteAssignmentOperand, promoteMathOperands } from "./promotionHelper.js";

export class StModelBuilder {

    public static currentSourceFile: StSourceFile;

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

        // Resolve types first ...
        this.iterateAndSelectSourceFiles(sourceFile => {

            for (const [ctx, symbol] of sourceFile.symbolMap) {
                
                if (symbol.kind !== StSymbolKind.TypeUsage)
                    continue;

                const type = symbol.type!;
                const isArrayOrPointerOrReference = type.isArray || type.isPointer || type.isReference;

                if (type.isArray) {
                    
                    for (const arrayLimitExpression of type.context!.expr()) {

                        const rhsType = this.evaluateExpression(arrayLimitExpression);

                        // TODO: Ensure that result is constant / Validate value (LHS type = ANY_INT)
                    }
                }

                if (isArrayOrPointerOrReference && type.referencedOrElementType) {

                    const underlyingType = type.referencedOrElementType;

                    if (underlyingType.isReference)
                        C0261(symbol);
                }

                if (!(type.builtinType || isArrayOrPointerOrReference)) {
                       
                    const declaration = this.findTypeDeclaration(symbol);
                    type.declaration = declaration;

                    if (declaration) {

                        // Inheritance
                        if (ctx.parent instanceof ExtendsClauseContext && symbol.parent) {

                            const parentTypeInfo = symbol.parent.typeDeclarationDetails;

                            if (parentTypeInfo) {

                                if (!parentTypeInfo.baseTypes)
                                    parentTypeInfo.baseTypes = [];

                                parentTypeInfo.baseTypes.push(declaration);

                                // Add back reference
                                const declaringSymbolTypeInfo = declaration.typeDeclarationDetails!;

                                if (!declaringSymbolTypeInfo.subTypes)
                                    declaringSymbolTypeInfo.subTypes = [];

                                declaringSymbolTypeInfo.subTypes.push(symbol.parent);
                            }
                        }

                        // Interfaces
                        if (ctx.parent instanceof ImplementsClauseContext && symbol.parent) {

                            const parentTypeInfo = symbol.parent.typeDeclarationDetails;

                            if (parentTypeInfo) {

                                if (!parentTypeInfo.interfaces)
                                    parentTypeInfo.interfaces = [];

                                parentTypeInfo.interfaces.push(declaration);

                                // Add back reference
                                const declaringSymbolTypeInfo = declaration.typeDeclarationDetails!;

                                if (!declaringSymbolTypeInfo.subTypes)
                                    declaringSymbolTypeInfo.subTypes = [];

                                declaringSymbolTypeInfo.subTypes.push(symbol.parent);
                            }
                        }
                    }

                    else {
                        C0077(symbol);
                    }
                }
            }
        });

        // ... then evaluate all variable declaration initializers and enum member initializers
        this.iterateAndSelectSourceFiles(sourceFile => {

            for (const [ctx, symbol] of sourceFile.symbolMap) {
                
                if (symbol.kind === StSymbolKind.VariableDeclaration) {

                    const varDeclCtx = ctx as VarDeclContext;
                    const lhsCtx = varDeclCtx.type() ?? undefined;
                    const lhsTypeUsage = sourceFile.symbolMap.get(lhsCtx);
                    const lhsType = lhsTypeUsage?.type;

                    let nestedLhsType = lhsType
                        ? getNestedTypeOrSelf(lhsType)
                        : undefined;
                            
                    const rhsCtx = varDeclCtx.exprOrArrayInit()?.expr() ?? undefined;

                    let rhsType: StType | undefined;

                    if (rhsCtx) {
                        rhsType = this.evaluateExpression(rhsCtx);
                    }

                    if (nestedLhsType && rhsType) {

                        rhsType = promoteAssignmentOperand(nestedLhsType, rhsType, rhsCtx);

                        this.CheckAssignment(
                            nestedLhsType, lhsCtx,
                            rhsType, rhsCtx!,
                            false
                        );
                    }
                }

                else if (symbol.kind === StSymbolKind.EnumMember) {
                   
                    let lhsType = symbol?.parent?.typeDeclarationDetails?.underlyingType;
                    
                    const enumMemberCtx = ctx as EnumMemberContext;
                    const rhsCtx = enumMemberCtx.expr() ?? undefined;

                    let rhsType: StType | undefined;

                    if (rhsCtx) {

                        rhsType = this.evaluateExpression(
                            rhsCtx
                        );
                    }

                    if (lhsType && rhsType) {

                        rhsType = promoteAssignmentOperand(lhsType, rhsType, rhsCtx);

                        this.CheckAssignment(
                            lhsType, undefined,
                            rhsType, rhsCtx!,
                            false
                        );
                    }
                }
            }
        });

        // ... then evaluate all statements
        this.iterateAndSelectSourceFiles(sourceFile => {

            for (const statementContext of sourceFile.statements) {
                
                if (statementContext.callStatement())
                    this.evaluateCallStatement(statementContext.callStatement()!);
                
                else if (statementContext.assignment())
                    this.evaluateAssignment(statementContext.assignment()!);
            }
        });

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

        StModelBuilder.currentSourceFile = this.getOrCreateSourceFile(uri, tokenStream);

        const visitor = new StVisitor(uri, this._model.tcConfig.architecture);

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
                tokenStream
            );
           
            this._model.sourceFileMap.set(fileUriAsString, sourceFile);
        }

        return sourceFile;
    }

    //#region Type usage

    private findTypeDeclaration(symbol: StSymbol): StSymbol | undefined {

        for (const sourceFile of this._model.sourceFileMap.values()) {

            const globalObject = sourceFile.globalObjects.get(symbol.id);

            if (!globalObject)
                continue;

            if (!globalObject.references)
                globalObject.references = [];

            globalObject.references.push(symbol);
            
            return globalObject;
        }
    }

    //#region Variable usages or call statements

    private findDeclaration(member: StSymbol, qualifier: StSymbol | undefined) {

        // Find scope
        let scope: StSymbol | undefined;

        if (qualifier) {

            const declaration = qualifier.declaration;
            const declarationKind = declaration?.kind;

            const isType =
                declarationKind === StSymbolKind.Enum ||
                declarationKind === StSymbolKind.Gvl ||
                qualifier.id === "THIS";
            
            const isMethodOrFunction =
                declarationKind === StSymbolKind.Method ||
                declarationKind === StSymbolKind.Function;

            if (isType)
                scope = declaration;

            else if (isMethodOrFunction)
                scope = declaration?.returnTypeUsage?.type?.declaration;
            
            else
                scope = declaration?.typeUsage?.type?.declaration;
        }

        else {
            scope = member.parent;
        }

        // Find declaring symbol
        let declaration: StSymbol | undefined;

        declaration = member.id === "THIS"
            
            // THIS
            ? member.parent?.context instanceof MethodContext
                ? member.parent?.parent
                : member.parent
            
            // Everything else
            : this.resolveDeclaration(scope, member.id);

        if (declaration)
            ConnectDeclaringSymbols(member, declaration);
    }

    private resolveDeclaration(
        scope: StSymbol | undefined,
        id: string
    ): StSymbol | undefined {
       
        // Current scope or ancestor scopes
        while (scope) {

            // A test showed that TwinCAT resolves variables/properties first ...
            if (scope.variablesAndProperties) {

                const varOrPropDeclaration = scope.variablesAndProperties.get(id);

                if (varOrPropDeclaration)
                    return varOrPropDeclaration;
            }

            // ... then methods
            if (scope.methods) {

                const methodDeclaration = scope.methods.get(id);

                if (methodDeclaration)
                    return methodDeclaration;
            }
            
            scope = scope.parent;
        }

        // Global scope
        for (const sourceFile of this._model.sourceFileMap.values()) {
            
            const globalObject = sourceFile.globalObjects.get(id);

            if (globalObject)
                return globalObject;
        }

        return undefined;
    };

    //#endregion

    //#region Statements

    private evaluateCallStatement(callStatement: CallStatementContext) {
        this.evaluateMemberExpression(callStatement.memberExpression(), false);
    }

    private evaluateAssignment(assignment: AssignmentContext) {
        
        const lhsCtx = assignment.memberExpression();
        let lhsType = this.evaluateMemberExpression(lhsCtx, true);
                
        const rhsCtx = assignment.expr();
        let rhsType = this.evaluateExpression(rhsCtx);

        const operatorCtx = assignment.assignmentOperator();
        const operatorText = operatorCtx.getText();
        const isRefAssignment = operatorText === 'REF=';

        if (lhsType && rhsType) {

            rhsType = promoteAssignmentOperand(lhsType, rhsType, rhsCtx);

            this.CheckAssignment(
                lhsType, lhsCtx,
                rhsType, rhsCtx,
                isRefAssignment
            );
        }
    }

    private evaluateExpression(
        expression: ExprContext
    ): StType | undefined {

        const memberExpression = expression.memberExpression();

        if (memberExpression)
            return this.evaluateMemberExpression(memberExpression, false);

        const expressions = expression.expr();
        const literal = expression.literal();

        if (expressions.length == 2) {

            // Step 1: Evaluate both expressions
            var lhsType = this.evaluateExpression(expressions[0]);
            var rhsType = this.evaluateExpression(expressions[1]);

            if (!lhsType || !rhsType)
                return undefined;
               
            // Step 2: Promote possible constants (literals and constant expressions)
            [lhsType, rhsType] = promoteMathOperands(expression, lhsType, rhsType);

            if (!lhsType.builtinType || !rhsType.builtinType)
                return undefined;
            
            // Step 3: Get lowest common denominator type
            const lcdBuiltinTypeCode = getLowestCommonDenominator(
                lhsType,
                rhsType
            );

            if (!lcdBuiltinTypeCode)
                return undefined;

            const lcdType = new StType();
            lcdType.builtinType = new StBuiltinType(lcdBuiltinTypeCode);

            // Step 4: Check assignments of lhs and rhs to LCD
            const lhsResult = this.CheckAssignment(
                lcdType, expression,
                lhsType, expressions[0],
                false
            );

            const rhsResult = this.CheckAssignment(
                lcdType, expression,
                rhsType, expressions[1],
                false
            );

            return lhsResult && rhsResult
                ? lcdType
                : undefined;
        }

        else if (expressions.length === 1) {
          
            const type = this.evaluateExpression(
                expressions[0]
            );

            if (expression.unaryOp()) {
                // TODO: when minus sign and type = unsigned integer, convert the current type to the next larger integer type
            }

            return type;
        }

        else if (literal) {

            return this.evaluateLiteral(
                literal
            );
        }

        return undefined;
    }

    private evaluateLiteral(literal: LiteralContext): StType | undefined {

        let type: StType | undefined;

        if (literal.BOOL_LITERAL())
            type = evaluateBoolLiteral();

        else if (literal.INTEGER_LITERAL())
            type = evaluateIntegerNumber(literal);

        else if (literal.REAL_LITERAL())
            type = evaluateRealNumber(literal);
            
        else if (literal.TIME_LITERAL())
            type = evaluateTimeLiteral(literal);
            
        else if (literal.LTIME_LITERAL())
            type = evaluateLTimeLiteral(literal);

        else if (literal.dateLiteral())
            type = evaluateDateLiteral(literal);

        else if (literal.timeOfDayLiteral())
            type = evaluateTimeOfDayLiteral(literal);

        else if (literal.dateAndTimeLiteral())
            type = evaluateDateAndTimeLiteral(literal);

        else if (literal.STRING_LITERAL())
            type = evaluateStringLiteral(literal);

        else if (literal.WSTRING_LITERAL())
            type = evaluateWStringLiteral(literal);

        else
            this.cannotEvaluateExpression(literal);

        if (type?.builtinType)
            type.builtinType.isLiteral = true;

        return type;
    }

    private evaluateMemberExpression(
        memberExpression: MemberExpressionContext,
        isAssignment: boolean
    ): StType | undefined {

        const memberAccesses = memberExpression.memberAccess();

        let currentMember: StSymbol | undefined = undefined;
        let currentType: StType | undefined = undefined;
        let currentQualifier: StSymbol | undefined = undefined;
        let noMoreOpsAllowed: boolean = false; 

        for (const memberAccess of memberAccesses) {

            if (noMoreOpsAllowed) {
                C0185(memberAccess);
                return undefined;
            }

            currentMember = StModelBuilder.currentSourceFile.symbolMap.get(memberAccess);

            if (!currentMember)
                return undefined;

            this.findDeclaration(currentMember, currentQualifier);

            if (currentMember.declaration) {

                if (currentMember.declaration.kind === StSymbolKind.Property) {

                    const isLastMemberAccess = memberAccesses[memberAccesses.length - 1] === memberAccess;

                    if (!(isAssignment && isLastMemberAccess)) {

                        const propertyCtx = currentMember.declaration.context as PropertyContext;
                        const propertyBodyCtx = propertyCtx.propertyBody();
                        const getter = propertyBodyCtx.getter();

                        if (!getter)                           
                            C0143(currentMember);
                    }
                }

                [currentType, noMoreOpsAllowed] = this.evaluatePostOps(
                    currentMember,
                    memberAccess.postfixOp()
                );
            }

            else {
                C0046(currentMember);
            }

            currentQualifier = currentMember;
        }

        const lastMember = currentMember!;
        const lastMemberDeclaration = lastMember?.declaration;

        if (isAssignment) {

            if (lastMemberDeclaration) {

                switch (lastMemberDeclaration.kind) {

                    case StSymbolKind.VariableDeclaration:

                        if (memberAccesses.length > 1 &&
                            !(
                                lastMemberDeclaration?.variableKind === StVariableScope.Input ||
                                lastMemberDeclaration?.variableKind === StVariableScope.InOut
                            )
                        ) {
                            C0037(lastMember);
                        }

                        if (lastMemberDeclaration.modifier === StModifier.Constant)
                            C0018(lastMember);

                        break;
                        
                    case StSymbolKind.Property:

                        const propertyCtx = lastMemberDeclaration.context as PropertyContext;
                        const propertyBodyCtx = propertyCtx.propertyBody();
                        const setter = propertyBodyCtx.setter();

                        if (!setter)
                            C0018(lastMember);

                        break;
                    
                    default:
                        C0018(lastMember);
                }
            }
        }

        return currentType;
    }  

    private evaluatePostOps(
        member: StSymbol,
        postfixOps: PostfixOpContext[]
    ): [StType | undefined, boolean] {

        // The calling method ensures that declaration is defined
        const memberDeclaration = member.declaration!;

        let noMoreOpsAllowed = false;

        let currentType = memberDeclaration.kind === StSymbolKind.EnumMember
            ? memberDeclaration.parent?.typeDeclarationDetails?.underlyingType
            : memberDeclaration.typeUsage?.type;

        if (currentType)
            currentType = getNestedTypeOrSelf(currentType);
        
        for (const postfixOp of postfixOps) {

            if (noMoreOpsAllowed) {
                C0185(postfixOp);
                return [undefined, noMoreOpsAllowed];
            }

            if (postfixOp.dereference()) {
                
                if (member.id === "THIS") {
                    currentType = currentType?.referencedOrElementType;
                }
                
                else {

                    if (!currentType?.isPointer) {
                        C0064(postfixOp);
                        return [undefined, noMoreOpsAllowed];
                    }

                    currentType = currentType.referencedOrElementType;
                }
            }
            
            else if (postfixOp.arrayIndex()) {
                
                if (!currentType?.isArray) {
                    
                    const id = currentType
                        ? currentType.getId()
                        : memberDeclaration.id;

                    C0047(postfixOp, id);

                    return [undefined, noMoreOpsAllowed];
                }

                currentType = currentType.referencedOrElementType;
            }

            else if (postfixOp.call()) {

                /* Hint: Calls are always standalone, the following is
                 * not possible in Structured Text:
                 *
                 * - MyArrayOfMethods[0]()          (because of C0261)
                 * - MyMethodWhichReturnsArray()[0] (because of C0185)
                 */

                noMoreOpsAllowed = true;

                // Member declaration is a variable declaration
                if (currentType) {

                    if (currentType!.declaration?.kind === StSymbolKind.FunctionBlock) {
                        currentType = undefined;
                        continue;
                    }

                    C0035(member);
                }

                // Member declaration is something else
                else {

                    /* The following is valid syntax, but will not compile:
                     * MyArrayOfMethods[0]();
                     * This means that this branch is only ever executed when
                     * the call is the very first postfix operation, which
                     * in turn means we can make use of memberDeclaration instead
                     * of trying to work with currentType.
                     */

                    switch (memberDeclaration.kind) {

                        case StSymbolKind.Method:
                        case StSymbolKind.Function:
                            currentType = memberDeclaration.returnTypeUsage?.type;
                            break;
                            
                        case StSymbolKind.FunctionBlock:
                            C0080(member);
                            return [undefined, noMoreOpsAllowed];

                        case StSymbolKind.EnumMember:
                            C0035(member);
                            return [undefined, noMoreOpsAllowed];
                        
                        default:
                            C0036(member, memberDeclaration);
                            return [undefined, noMoreOpsAllowed];
                    }
                }
            }

            if (currentType)
                currentType = getNestedTypeOrSelf(currentType);
        }

        return [currentType, noMoreOpsAllowed];
    }

    private cannotEvaluateExpression(expression: ParserRuleContext) {
        
        const diagnostic = new Diagnostic(
            getContextRange(expression),
            `Unable to evaluate expression. Please create a new issue with a minimal sample here: https://github.com/Apollo3zehn/vscode-twincat-st`,
            DiagnosticSeverity.Error
        );

        StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
    }

    private CheckAssignment(
        lhsType: StType,
        lhsCtx: ParserRuleContext | undefined,
        rhsType: StType,
        rhsCtx: ParserRuleContext,
        isRefAssignment: boolean
    ): boolean {
        
        if (isRefAssignment) {
            if (!lhsType.isReference)
                C0140(lhsCtx);
        }

        if (lhsType.isReference)
            lhsType = lhsType.referencedOrElementType!;

        if (rhsType.isReference)
            rhsType = rhsType.referencedOrElementType!;

        if (lhsType.declaration && lhsType.declaration === rhsType.declaration)
            return true;
        
        if (lhsType.builtinType?.code && rhsType.builtinType?.code) {

            const lhsBuiltinType = lhsType.builtinType;
            const lhsDetails = lhsType.builtinType.details;

            const rhsBuiltinType = rhsType.builtinType;
            const rhsDetails = rhsType.builtinType.details;
            
            if (!lhsDetails || !rhsDetails)
                return false;

            if (lhsBuiltinType.code === rhsBuiltinType.code) {

                if (
                    rhsDetails.kind === StNativeTypeKind.String &&
                    lhsBuiltinType.stringLength! < rhsBuiltinType.stringLength!
                ) {

                    const warning = new Diagnostic(
                        getContextRange(rhsCtx),
                        `String type '${StBuiltinTypeCode[rhsBuiltinType.code!]}(${rhsBuiltinType.stringLength})' too long for string type '${StBuiltinTypeCode[lhsBuiltinType.code!]}(${rhsBuiltinType.stringLength})': The string will be truncated`,
                        DiagnosticSeverity.Warning
                    );

                    StModelBuilder.currentSourceFile.diagnostics.push(warning);
                }

                return true;
            }

            const rhsIsInteger =
                rhsDetails.kind === StNativeTypeKind.Bitfield ||
                rhsDetails.kind === StNativeTypeKind.UnsignedInteger ||
                rhsDetails.kind === StNativeTypeKind.SignedInteger;

            switch (lhsDetails.kind) {

                case StNativeTypeKind.Logical:

                    if (rhsDetails.kind === StNativeTypeKind.Logical)
                        return true;

                    break;

                case StNativeTypeKind.Bitfield:
                case StNativeTypeKind.UnsignedInteger:
                case StNativeTypeKind.SignedInteger:

                    if (rhsIsInteger) {

                        if (rhsDetails.size <= lhsDetails.size) {

                            let subRangeIsOK = lhsBuiltinType.isFullRange && rhsBuiltinType.isFullRange;

                            if (!subRangeIsOK) {

                                const lhsStart = lhsBuiltinType.subRangeStart! < lhsBuiltinType.subRangeStop!
                                    ? lhsBuiltinType.subRangeStart!
                                    : lhsBuiltinType.subRangeStop!;
                                
                                const lhsStop = lhsBuiltinType.subRangeStart! < lhsBuiltinType.subRangeStop!
                                    ? lhsBuiltinType.subRangeStop!
                                    : lhsBuiltinType.subRangeStart!;
                                
                                const rhsStart = rhsBuiltinType.subRangeStart! < rhsBuiltinType.subRangeStop!
                                    ? rhsBuiltinType.subRangeStart!
                                    : rhsBuiltinType.subRangeStop!;
                                
                                const rhsStop = rhsBuiltinType.subRangeStart! < rhsBuiltinType.subRangeStop!
                                    ? rhsBuiltinType.subRangeStop!
                                    : rhsBuiltinType.subRangeStart!;

                                subRangeIsOK =
                                    lhsStart <= rhsStart && rhsStart <= lhsStop &&
                                    lhsStart <= rhsStop && rhsStop <= lhsStop;
                            }

                            if (subRangeIsOK) {

                                if (rhsDetails.signed && !lhsDetails.signed) {

                                    const warning = new Diagnostic(
                                        getContextRange(rhsCtx),
                                        `Implicit conversion from signed type '${StBuiltinTypeCode[rhsBuiltinType.code!]}' to unsigned type '${StBuiltinTypeCode[lhsBuiltinType.code!]}': Possible change of sign`,
                                        DiagnosticSeverity.Warning
                                    );

                                    StModelBuilder.currentSourceFile.diagnostics.push(warning);
                                }

                                else if (!rhsDetails.signed && lhsDetails.signed) {

                                    const warning = new Diagnostic(
                                        getContextRange(rhsCtx),
                                        `Implicit conversion from unsigned type '${StBuiltinTypeCode[rhsBuiltinType.code!]}' to signed type '${StBuiltinTypeCode[lhsBuiltinType.code!]}': Possible change of sign`,
                                        DiagnosticSeverity.Warning
                                    );

                                    StModelBuilder.currentSourceFile.diagnostics.push(warning);
                                }

                                return true;
                            }
                        }
                    }

                    break;

                case StNativeTypeKind.Float:

                    if (
                        rhsDetails.kind === StNativeTypeKind.Float ||
                        rhsIsInteger
                    ) {
                        if (
                            (
                                rhsDetails.kind === StNativeTypeKind.Float &&
                                rhsDetails.size > lhsDetails.size
                            ) ||
                            (
                                rhsIsInteger &&
                                rhsDetails.size >= lhsDetails.size
                            )
                        ) {
                            const warning = new Diagnostic(
                                getContextRange(rhsCtx),
                                `Implicit conversion from '${StBuiltinTypeCode[rhsBuiltinType.code!]}' to '${StBuiltinTypeCode[rhsBuiltinType.code!]}': Possible loss of information`,
                                DiagnosticSeverity.Warning
                            );

                            StModelBuilder.currentSourceFile.diagnostics.push(warning);
                        }

                        return true;
                    }

                    break;
            }
        }

        C0032(rhsCtx, rhsType.getId(), lhsType.getId());
        return false;
    }

    //#endregion

    private iterateAndSelectSourceFiles(callback: (sourceFile: StSourceFile) => void): void {
        for (const sourceFile of this._model.sourceFileMap.values()) {
            StModelBuilder.currentSourceFile = sourceFile;
            callback(sourceFile);
        }
    }
}