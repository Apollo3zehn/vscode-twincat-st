import { ParserRuleContext } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity } from "vscode";
import { nativeTypesDetails, StBuiltinType, StBuiltinTypeCode, StModifier, StNativeTypeKind, StSymbol, StSymbolKind, StType, StVariableScope } from "../core/types.js";
import { getContextRange, getNestedTypeOrSelf } from "../core/utils.js";
import { AssignmentOperatorContext, ExprContext, LiteralContext, MemberExpressionContext, PostfixOpContext, PropertyContext } from "../generated/StructuredTextParser.js";
import { StModelBuilder } from "./StModelBuilder.js";
import { findDeclaration } from "./declaration.js";
import { C0001, C0018, C0032, C0035, C0036, C0037, C0046, C0047, C0064, C0080, C0140, C0143, C0185 } from "./diagnostics.js";
import { evaluateBoolLiteral } from "./literals/evaluateBoolLiteral.js";
import { evaluateDateAndTimeLiteral } from "./literals/evaluateDateAndTimeLiteral.js";
import { evaluateDateLiteral } from "./literals/evaluateDateLiteral.js";
import { evaluateIntegerLiteral, getSmallestIntegerForValue } from "./literals/evaluateIntegerLiteral.js";
import { evaluateLTimeLiteral } from "./literals/evaluateLTimeLiteral.js";
import { evaluateRealLiteral } from "./literals/evaluateRealLiteral.js";
import { evaluateStringLiteral } from "./literals/evaluateStringLiteral.js";
import { evaluateTimeLiteral } from "./literals/evaluateTimeLiteral.js";
import { evaluateTimeOfDayLiteral } from "./literals/evaluateTimeOfDayLiteral.js";
import { evaluateWStringLiteral } from "./literals/evaluateWStringLiteral.js";

export function evaluateAssignment(
    lhsType: StType | undefined,
    lhsCtx: ParserRuleContext | undefined,
    rhsCtx: ExprContext,
    operatorCtx: AssignmentOperatorContext | undefined
) {
    const rhsType = evaluateExpression(rhsCtx);
    
    const isRefAssignment = operatorCtx
        ? operatorCtx.getText() === 'REF='
        : false;

    if (lhsType && rhsType) {
        evaluateAssignmentOperand(
            lhsType, lhsCtx,
            rhsType, rhsCtx,
            isRefAssignment
        );
    }
}

export function evaluateExpression(
    expression: ExprContext
): StType | undefined {

    const memberExpression = expression.memberExpression();

    if (memberExpression)
        return evaluateMemberExpression(memberExpression, false);

    const expressions = expression.expr();
    const literal = expression.literal();

    if (expressions.length === 2) {

        // Step 1: Evaluate expressions
        var lhsType = evaluateExpression(expressions[0]);
        var rhsType = evaluateExpression(expressions[1]);

        if (!lhsType || !rhsType)
            return undefined;
            
        // Step 2: Get lowest common denominator
        let lcdType: StType | undefined = undefined;
        [lhsType, rhsType, lcdType] = evaluateExpressionWith2Arguments(lhsType, rhsType, expression._op!.text!);

        if (!lcdType)
            return undefined;

        // Step 3: Check assignments of lhs and rhs to LCD
        const lhsResult = checkAssignment(
            lcdType, expression,
            lhsType, expressions[0],
            false
        );

        const rhsResult = checkAssignment(
            lcdType, expression,
            rhsType, expressions[1],
            false
        );

        return lhsResult && rhsResult
            ? lcdType
            : undefined;
    }

    else if (expressions.length === 1) {
        
        const type = evaluateExpression(
            expressions[0]
        );

        if (expression.unaryOp()) {
            // TODO: when minus sign and type = unsigned integer, convert the current type to the next larger integer type
        }

        return type;
    }

    else if (literal) {

        return evaluateLiteral(
            literal
        );
    }

    return undefined;
}

export function evaluateMemberExpression(
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

        findDeclaration(currentMember, currentQualifier);

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

            [currentType, noMoreOpsAllowed] = evaluatePostOps(
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

export function evaluateExpressionWith2Arguments(
    lhsType: StType,
    rhsType: StType,
    operator: string
): [StType, StType, StType | undefined] {

    // Step 1: Promote possible constants (literals and constant expressions)
    [lhsType, rhsType] = promoteMathOperands(operator, lhsType, rhsType);

    if (!lhsType.builtinType || !rhsType.builtinType)
        return [lhsType, rhsType, undefined];
    
    // Step 2: Get lowest common denominator
    const lcdBuiltinTypeCode = getLowestCommonDenominator(
        lhsType,
        rhsType
    );

    if (!lcdBuiltinTypeCode)
        return [lhsType, rhsType, undefined];

    const lcdType = new StType();
    lcdType.builtinType = new StBuiltinType(lcdBuiltinTypeCode);

    return [lhsType, rhsType, lcdType];
}

function evaluateAssignmentOperand(
    lhsType: StType,
    lhsCtx: ParserRuleContext | undefined,
    rhsType: StType,
    rhsCtx: ParserRuleContext | undefined,
    isRefAssignment: boolean
) {
    let rhsBuiltinType = rhsType.builtinType;
    let rhsIsUntypedLiteral = rhsBuiltinType?.code === null;
    
    switch (lhsType.builtinType?.details?.kind) {

        case StNativeTypeKind.Logical:
           
            /* ONLY literals are allowed here! */
            if (rhsBuiltinType?.isLiteral) {

                const literalText = rhsCtx?.getText();
                
                // Only allow 0 or 1, and nothing else! No type prefix etc
                if (literalText === "0" || literalText === "1")
                    return;
            }
            
            break;
              
        case StNativeTypeKind.Bitfield:
        case StNativeTypeKind.UnsignedInteger:
           
            // Promote the rhs type to the smallest unsigned integer type that can represent its value
            if (rhsBuiltinType?.value !== undefined && rhsIsUntypedLiteral)
                rhsType = getSmallestIntegerForValue(rhsBuiltinType.value, false, true)!;

            break;
        
        case StNativeTypeKind.SignedInteger:
           
            // Promote the rhs type to the smallest signed integer type that can represent its value
            if (rhsBuiltinType?.value !== undefined && rhsIsUntypedLiteral)
                rhsType = getSmallestIntegerForValue(rhsBuiltinType.value, true, false)!;

            break;
            
        case StNativeTypeKind.Float:
           
            const isFloat = rhsBuiltinType?.details?.kind === StNativeTypeKind.Float;
            
            if (isFloat && Math.abs(rhsBuiltinType!.value!) <= 3.402823e+38)
                return;
        
        default:
            break;
    }

    // Fallback
    rhsBuiltinType = rhsType.builtinType;
    rhsIsUntypedLiteral = rhsBuiltinType?.code === null;

    if (rhsIsUntypedLiteral) {
        
        // Promote the rhs type to the smallest integer type that can represent its value
        if (rhsBuiltinType?.value !== undefined && rhsIsUntypedLiteral)
            rhsType = getSmallestIntegerForValue(rhsBuiltinType.value, true, true)!;
    }

    // Check assignment
    checkAssignment(
        lhsType, lhsCtx,
        rhsType, rhsCtx,
        isRefAssignment
    );
}

function checkAssignment(
    lhsType: StType,
    lhsCtx: ParserRuleContext | undefined,
    rhsType: StType,
    rhsCtx: ParserRuleContext | undefined,
    isRefAssignment: boolean
): boolean {
    
    if (isRefAssignment && !lhsType.isReference)
        C0140(lhsCtx);

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

    C0032(
        rhsCtx,
        rhsType.getId(),
        lhsType.getId()
    );

    return false;
}

function promoteMathOperands(
    operator: string,
    lhsType: StType,
    rhsType: StType
): [StType, StType] {

    const lhsBuiltinType = lhsType.builtinType;
    const lhsIsUntypedLiteral = lhsBuiltinType?.code === null;

    const rhsBuiltinType = rhsType.builtinType;
    const rhsIsUntypedLiteral = rhsBuiltinType?.code === null;

    if (lhsIsUntypedLiteral && rhsIsUntypedLiteral) {

        // Promote both literals to the smallest signed integer type that can represent their values
        if (operator === "-" || lhsBuiltinType.value! < 0 || rhsBuiltinType.value! < 0) {
            lhsType = getSmallestIntegerForValue(lhsBuiltinType.value!, true, false)!;
            rhsType = getSmallestIntegerForValue(rhsBuiltinType.value!, true, false)!;
        }

        // Promote both literals to the smallest unsigned integer type that can represent their values
        else {
            lhsType = getSmallestIntegerForValue(lhsBuiltinType.value!, false, true)!;
            rhsType = getSmallestIntegerForValue(rhsBuiltinType.value!, false, true)!;
        }
    }

    else {

        const lhsIsSigned = lhsBuiltinType?.details?.signed;
        const rhsIsSigned = rhsBuiltinType?.details?.signed;

        if (lhsIsSigned || rhsIsSigned) {

            // Promote the lhs type to the smallest signed integer type that can represent its value
            if (lhsBuiltinType!.value !== undefined && lhsIsUntypedLiteral)
                lhsType = getSmallestIntegerForValue(lhsBuiltinType.value, true, false)!;

            // Promote the rhs type to the smallest signed integer type that can represent its value
            if (rhsBuiltinType!.value !== undefined && rhsIsUntypedLiteral)
                rhsType = getSmallestIntegerForValue(rhsBuiltinType.value, true, false)!;
        }

        else {

            // Promote the lhs type to the smallest unsigned integer type that can represent its value
            if (lhsBuiltinType?.value !== undefined && lhsIsUntypedLiteral)
                lhsType = getSmallestIntegerForValue(lhsBuiltinType.value, false, true)!;

            // Promote the rhs type to the smallest unsigned integer type that can represent its value
            if (rhsBuiltinType?.value !== undefined && rhsIsUntypedLiteral)
                rhsType = getSmallestIntegerForValue(rhsBuiltinType.value, false, true)!;
        }
    }
    
    return [lhsType, rhsType];
}

function getLowestCommonDenominator(
    lhsType: StType,
    rhsType: StType
): StBuiltinTypeCode | undefined {

    /* The calling method ensures that both values are defined */
    const leftCode = lhsType.builtinType?.code!;
    const rightCode = rhsType.builtinType?.code!;

    // Prefer REAL / LREAL
    if (leftCode === StBuiltinTypeCode.LREAL || rightCode === StBuiltinTypeCode.LREAL)
        return StBuiltinTypeCode.LREAL;

    if (leftCode === StBuiltinTypeCode.REAL || rightCode === StBuiltinTypeCode.REAL)
        return StBuiltinTypeCode.REAL;

    const leftDetails = lhsType.builtinType?.details;
    const rightDetails = rhsType.builtinType?.details;

    if (leftDetails && rightDetails) {

        const leftIsUnsignedInteger = leftDetails.kind === StNativeTypeKind.Bitfield || leftDetails.kind === StNativeTypeKind.UnsignedInteger;
        const leftIsSignedInteger = leftDetails.kind === StNativeTypeKind.SignedInteger;

        const rightIsUnsignedInteger = rightDetails.kind === StNativeTypeKind.Bitfield || rightDetails.kind === StNativeTypeKind.UnsignedInteger;
        const rightIsSignedInteger = rightDetails.kind === StNativeTypeKind.SignedInteger;

        // If both are unsigned, promote to the larger unsigned type
        if (leftIsUnsignedInteger && rightIsUnsignedInteger)
            return leftDetails.size >= rightDetails.size ? leftCode : rightCode;

        // If both are signed, promote to the larger signed type
        else if (leftIsSignedInteger && rightIsSignedInteger)
            return leftDetails.size >= rightDetails.size ? leftCode : rightCode;

        // If one is signed and one is unsigned, promote to signed type with larger size
        else if (
            (leftIsSignedInteger && rightIsUnsignedInteger) ||
            (leftIsUnsignedInteger && rightIsSignedInteger)
        ) {
            const maxSize = Math.max(leftDetails.size, rightDetails.size);

            for (const [builtinType, details] of nativeTypesDetails.entries()) {
                if (
                    details.kind === StNativeTypeKind.SignedInteger &&
                    details.size === maxSize
                ) {
                    return builtinType;
                }
            }
        }

        // Default: fallback to the larger type
        return leftDetails.size >= rightDetails.size ? leftCode : rightCode;
    }
    
    // Neither leftDetails or rightDetails is defined, so just return any type.
    // The type checking algorithm will then throw an appropriate error.
    return leftCode;
}

function evaluateLiteral(literal: LiteralContext): StType | undefined {

    let type: StType | undefined;
    let lhsType: string | undefined;

    if (literal.BOOL_LITERAL())
        type = evaluateBoolLiteral();

    else if (literal.INTEGER_LITERAL())
        [type, lhsType] = evaluateIntegerLiteral(literal.INTEGER_LITERAL()?.getText()!);

    else if (literal.REAL_LITERAL())
        [type, lhsType] = evaluateRealLiteral(literal.REAL_LITERAL()?.getText()!);
        
    else if (literal.TIME_LITERAL())
        [type, lhsType] = evaluateTimeLiteral(literal.TIME_LITERAL()?.getText()!);
        
    else if (literal.LTIME_LITERAL())
        [type, lhsType] = evaluateLTimeLiteral(literal.LTIME_LITERAL()?.getText()!);

    else if (literal.dateLiteral()) {

        const dateLiteral = literal.dateLiteral();

        [type, lhsType] = evaluateDateLiteral(
            dateLiteral!._prefix?.text!,
            dateLiteral!._date!.text!
        );
    }

    else if (literal.timeOfDayLiteral()) {

        const timeOfDayLiteral = literal.timeOfDayLiteral();

        [type, lhsType] = evaluateTimeOfDayLiteral(
            timeOfDayLiteral!._prefix?.text!,
            timeOfDayLiteral!._timeOfDay!.text!
        );
    }

    else if (literal.dateAndTimeLiteral()) {

        const dateAndTimeLiteral = literal.dateAndTimeLiteral();

        [type, lhsType] = evaluateDateAndTimeLiteral(
            dateAndTimeLiteral!._prefix?.text!,
            dateAndTimeLiteral!._dateAndTime?.text!
        );
    }

    else if (literal.STRING_LITERAL())
        type = evaluateStringLiteral(literal);

    else if (literal.WSTRING_LITERAL())
        type = evaluateWStringLiteral(literal);

    else
        cannotEvaluateExpression(literal);

    if (!type) {

        if (lhsType)
            C0001(literal, lhsType);

        return undefined;
    }

    else {
        type.builtinType!.isLiteral = true;

        return type;
    }
}

function evaluatePostOps(
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

function cannotEvaluateExpression(expression: ParserRuleContext) {
    
    const diagnostic = new Diagnostic(
        getContextRange(expression),
        `Unable to evaluate expression. Please create a new issue with a minimal sample here: https://github.com/Apollo3zehn/vscode-twincat-st`,
        DiagnosticSeverity.Error
    );

    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}