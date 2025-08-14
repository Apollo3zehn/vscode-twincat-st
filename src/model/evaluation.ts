import { ParserRuleContext } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity, Range } from "vscode";
import { StBuiltinType, StBuiltinTypeCode, StModifier, StBuiltinTypeKind, StSymbol, StSymbolKind, StType, StVariableScope, StModel, StBuiltinTypeSuperKind } from "../core/types.js";
import { defaultRange, getContextRange, getNestedTypeOrSelf, getTokenRange, negateBits } from "../core/utils.js";
import { AssignmentOperatorContext, ExprContext, LiteralContext, MemberExpressionContext, PostfixOpContext, PropertyContext } from "../generated/StructuredTextParser.js";
import { StModelBuilder } from "./StModelBuilder.js";
import { findDeclaration } from "./declaration.js";
import { C0001, C0018, C0032, C0035, C0036, C0037, C0046, C0047, C0064, C0066, C0080, C0140, C0143, C0185, M0002, M0003 } from "./diagnostics.js";
import { evaluateLogicalLiteral } from "./literals/evaluateBoolLiteral.js";
import { evaluateDateAndTimeLiteral } from "./literals/evaluateDateAndTimeLiteral.js";
import { evaluateDateLiteral } from "./literals/evaluateDateLiteral.js";
import { convertToSignedIntegerIfRequired, evaluateIntegerLiteral, getSignedIntegerForSize, getSmallestIntegerForValue, getUnsignedIntegerForSize } from "./literals/evaluateIntegerLiteral.js";
import { evaluateLTimeLiteral } from "./literals/evaluateLTimeLiteral.js";
import { evaluateRealLiteral } from "./literals/evaluateRealLiteral.js";
import { evaluateStringLiteral } from "./literals/evaluateStringLiteral.js";
import { evaluateTimeLiteral } from "./literals/evaluateTimeLiteral.js";
import { evaluateTimeOfDayLiteral } from "./literals/evaluateTimeOfDayLiteral.js";
import { evaluateWStringLiteral } from "./literals/evaluateWStringLiteral.js";
import { addBigInt, addNumber, andBigInt, divideBigInt, divideNumber, equalsBigInt, equalsNumber, executeBinaryOperation, greaterThanBigInt, greaterThanNumber, greaterThanOrEqualToBigInt, greaterThanOrEqualToNumber, lessThanBigInt, lessThanNumber, lessThanOrEqualToBigInt, lessThanOrEqualToNumber, moduloBigInt, multiplyBigInt, multiplyNumber, notEqualsBigInt, notEqualsNumber, subtractBigInt, subtractNumber } from "./operations.js";

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
        internalEvaluateAssignment(
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

        // Evaluate operands
        let lhsType = evaluateExpression(expressions[0]);
        let rhsType = evaluateExpression(expressions[1]);

        if (!lhsType || !rhsType)
            return undefined;

        const arithmeticOperatorText = expression._arithmeticOp?.text;
        const equalityOperatorText = expression._equalityOp?.text;
        const bitstringOperatorText = expression._bitstringOp?.text;

        return evaluateBinaryOperation(
            lhsType,
            rhsType,
            arithmeticOperatorText,
            equalityOperatorText,
            bitstringOperatorText,
            expression,
            getContextRange(expressions[0]),
            getContextRange(expressions[1])
        )
    }

    else if (expressions.length === 1) {
        
        let type = evaluateExpression(expressions[0]);

        if (!type)
            return undefined;

        const unaryOpCtx = expression.unaryOp();

        if (unaryOpCtx) {
            const unaryOperatorText = unaryOpCtx.getText();
            return evaluateUnaryOperation(type, unaryOperatorText);
        }

        else {
            // TODO: evaluate bracketed expression
        }
    }

    else if (literal) {
        return evaluateLiteral(literal);
    }

    return undefined;
}

export function evaluateBinaryOperation(
    lhsType: StType,
    rhsType: StType,
    arithmeticOperatorText: string | undefined,
    equalityOperatorText: string | undefined,
    bitstringOperatorText: string | undefined,
    operationExpr?: ExprContext,
    lhsRange?: Range,
    rhsRange?: Range
): StType | undefined {

    // Promote untyped literals
    const lhsIsUntypedIntegerLiteral = lhsType.builtinType?.code === null;
    const rhsIsUntypedIntegerLiteral = rhsType.builtinType?.code === null;

    if (
        lhsIsUntypedIntegerLiteral ||
        rhsIsUntypedIntegerLiteral
    ) {
        const isSubtraction = arithmeticOperatorText === "-";

        [lhsType, rhsType] = promoteUntypedLiterals(
            isSubtraction,
            lhsType,
            lhsIsUntypedIntegerLiteral,
            rhsType,
            rhsIsUntypedIntegerLiteral
        );
    }

    // Evaluate operation
    if (arithmeticOperatorText) {
        return evaluateArithmeticOperation(
            lhsType,
            rhsType,
            arithmeticOperatorText,
            getTokenRange(operationExpr?._arithmeticOp!),
            lhsRange,
            rhsRange
        );
    }

    else if (bitstringOperatorText) {
        return evaluateBitstringOperation(
            lhsType,
            rhsType,
            bitstringOperatorText,
            getTokenRange(operationExpr?._bitstringOp!),
            lhsRange,
            rhsRange
        );
    }

    else if (equalityOperatorText) {
        return evaluateEqualityOperation(
            lhsType,
            rhsType,
            equalityOperatorText,
            getTokenRange(operationExpr?._equalityOp!)
        );
    }

    else {
        return undefined;
    }
}

export function evaluateUnaryOperation(
    type: StType,
    unaryOperatorText: string,
    operatorRange?: Range
): StType | undefined {

    const builtinType = type.builtinType;

    if (!builtinType)
        return undefined;

    let newTypeCode = builtinType.code;
    let newValue = builtinType.value;
    
    const kind = builtinType.details?.kind;
    const superKind = builtinType.details?.superKind;
    
    if (
        (unaryOperatorText === "+" || unaryOperatorText === "-") &&
        (
            builtinType.code === null || // Untyped integer literal
            superKind === StBuiltinTypeSuperKind.Integer ||
            superKind === StBuiltinTypeSuperKind.Float
        )
    ) {
        if (unaryOperatorText === "-") {

            if (
                kind === StBuiltinTypeKind.Bitfield ||
                kind === StBuiltinTypeKind.UnsignedInteger
            ) {

                if (newValue !== undefined) {

                    newValue = -newValue;

                    // It is strange but typed literals like -BYTE#255 
                    // do not change their type in TwinCAT, so there
                    // is nothing else to do here.
                }

                else {

                    // It seems that TwinCAT is translating negated bitfields
                    // or unsigned integer in an irregular and potentially
                    // lossy way:

                    switch (builtinType.code) {

                        case StBuiltinTypeCode.BYTE:
                        case StBuiltinTypeCode.USINT:
                        case StBuiltinTypeCode.WORD:
                        case StBuiltinTypeCode.UINT:
                            newTypeCode = StBuiltinTypeCode.INT;
                            break;
                        
                        case StBuiltinTypeCode.DWORD:
                        case StBuiltinTypeCode.UDINT:
                            newTypeCode = StBuiltinTypeCode.DINT;
                            break;
                        
                        case StBuiltinTypeCode.LWORD:
                        case StBuiltinTypeCode.ULINT:
                            newTypeCode = StBuiltinTypeCode.LINT;
                            break;
                        
                        default:
                            throw Error(`Unexpected type code ${builtinType.code}`);
                    }
                }
            }
        }
    }

    else if (
        unaryOperatorText === "NOT" &&
        (
            superKind === StBuiltinTypeSuperKind.Logical ||
            superKind === StBuiltinTypeSuperKind.Integer
        )
    ) {

        if (superKind === StBuiltinTypeSuperKind.Logical) {
            if (newValue !== undefined) {
                newValue = newValue === 0n
                    ? 1n
                    : 0n;
            }
        }

        else {
            if (newValue !== undefined) {
                const bitWidth = builtinType.details!.size!;
                const isSigned = builtinType.details!.signed!;

                newValue = negateBits(newValue as bigint, bitWidth, isSigned);
            }
        }
    }
        
    else {
        M0003(type.getId(), unaryOperatorText, operatorRange);
        return undefined;
    }

    type = new StType();
    type.builtinType = new StBuiltinType(newTypeCode);
    type.builtinType.value = newValue;

    return type;
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

                    if (!getter) {
                        C0143(currentMember);
                        return undefined;
                    }
                }
            }

            [currentType, noMoreOpsAllowed] = evaluatePostOps(
                currentMember,
                memberAccess.postfixOp()
            );
        }

        else {
            C0046(currentMember);
            return undefined;
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
                        return undefined;
                    }

                    if (lastMemberDeclaration.modifier === StModifier.Constant) {
                        C0018(lastMember);
                        return undefined;
                    }

                    break;
                    
                case StSymbolKind.Property:

                    const propertyCtx = lastMemberDeclaration.context as PropertyContext;
                    const propertyBodyCtx = propertyCtx.propertyBody();
                    const setter = propertyBodyCtx.setter();

                    if (!setter) {
                        C0018(lastMember);
                        return undefined;
                    }

                    break;
                
                default:
                    C0018(lastMember);
                    return undefined;
            }
        }
    }

    return currentType;
}  

function evaluateArithmeticOperation(
    lhsType: StType,
    rhsType: StType,
    operatorText: string,
    operatorRange?: Range,
    lhsRange?: Range,
    rhsRange?: Range
): StType | undefined {

    // Get target type code
    const newTypeCode = getTargetTypeCode(
        lhsType,
        rhsType
    );

    if (!newTypeCode)
        return undefined;

    const newType = new StType();
    newType.builtinType = new StBuiltinType(newTypeCode);

    // Validate
    const success = checkArithmeticOperation(
        newType,
        lhsType,
        rhsType,
        operatorText,
        operatorRange,
        lhsRange,
        rhsRange
    );

    if (!success)
        return undefined;

    // Execute operation
    let opNumber: ((a: number, b: number) => number | bigint) | undefined;
    let opBigInt: ((a: bigint, b: bigint) => bigint) | undefined;

    const lhsBuiltinType = lhsType.builtinType;
    const rhsBuiltinType = rhsType.builtinType;

    let lhsValue = lhsBuiltinType!.value;
    let rhsValue = rhsBuiltinType!.value;

    switch (operatorText) {

        case "*":
                        
            opNumber = multiplyNumber;
            opBigInt = multiplyBigInt;
            
            break;
        
        case "/":
            
            opNumber = divideNumber;
            opBigInt = divideBigInt;

            break;
        
        case "MOD":

            opNumber = undefined;
            opBigInt = moduloBigInt;

            break;

        case "+":
            
            // Convert ms to s
            if (
                lhsValue &&
                typeof rhsValue === "bigint" &&
                (
                    lhsBuiltinType?.code === StBuiltinTypeCode.DATE ||
                    lhsBuiltinType?.code === StBuiltinTypeCode.DATE_AND_TIME
                )
            ) {
                rhsValue = rhsValue / 1000n;
            }

            else if (
                rhsValue &&
                typeof lhsValue === "bigint" &&
                (
                    rhsBuiltinType?.code === StBuiltinTypeCode.DATE ||
                    rhsBuiltinType?.code === StBuiltinTypeCode.DATE_AND_TIME
                )
            ) {
                lhsValue = lhsValue / 1000n;
            }
            
            opNumber = addNumber;
            opBigInt = addBigInt;

            break;
        
        case "-":
            
            // Convert ms to s
            if (
                lhsValue &&
                typeof rhsValue === "bigint" &&
                (
                    lhsBuiltinType?.code === StBuiltinTypeCode.DATE ||
                    lhsBuiltinType?.code === StBuiltinTypeCode.DATE_AND_TIME
                )
            ) {
                rhsValue = rhsValue / 1000n;
            }
            
            opNumber = subtractNumber;
            opBigInt = subtractBigInt;

            break;
        
        default:
            throw new Error(`The operator ${operatorText} is not yet implemented.`);
    }

    newType.builtinType.value = executeBinaryOperation(
        lhsValue,
        rhsValue,
        opNumber,
        opBigInt
    );

    return newType;
}

function evaluateBitstringOperation(
    lhsType: StType,
    rhsType: StType,
    operatorText: string,
    operatorRange?: Range,
    lhsRange?: Range,
    rhsRange?: Range
): StType | undefined {
    
    // Get target type code
    const newTypeCode = getTargetTypeCode(
        lhsType,
        rhsType
    );

    if (!newTypeCode)
        return undefined;

    const newType = new StType();
    const newBuiltinType = new StBuiltinType(newTypeCode);
    newType.builtinType = newBuiltinType;

    // Validate
    const success = checkBitstringOperation(
        newType,
        lhsType,
        rhsType,
        operatorText,
        operatorRange,
        lhsRange,
        rhsRange
    );

    if (!success)
        return undefined;

    // Execute operation
    let opBigInt: ((a: bigint, b: bigint) => bigint) | undefined;

    let lhsValue = lhsType.builtinType!.value;
    let rhsValue = rhsType.builtinType!.value;

    switch (operatorText) {

        case "AND":
                        
            opBigInt = andBigInt;
            
            break;
                
        default:
            throw new Error(`The operator ${operatorText} is not yet implemented.`);
    }

    newBuiltinType.value = executeBinaryOperation(
        lhsValue,
        rhsValue,
        undefined,
        opBigInt
    );

    if (newBuiltinType.value)
        newBuiltinType.value = convertToSignedIntegerIfRequired(newBuiltinType.details!, newBuiltinType.value as bigint);

    return newType;
}

function evaluateEqualityOperation(
    lhsType: StType,
    rhsType: StType,
    operatorText: string,
    operatorRange?: Range
): StType | undefined {
    
    // Validate
    const success = checkEqualityOperation(
        lhsType,
        rhsType,
        operatorRange
    );

    if (!success)
        return undefined;

    // Execute operation
    let opNumber: ((a: number, b: number) => number | bigint) | undefined;
    let opBigInt: ((a: bigint, b: bigint) => bigint) | undefined;

    switch (operatorText) {
        
        case "=":

            opNumber = equalsNumber;
            opBigInt = equalsBigInt;

            break;
        
        case "<>":

            opNumber = notEqualsNumber;
            opBigInt = notEqualsBigInt;

            break;
        
        case ">":

            opNumber = greaterThanNumber;
            opBigInt = greaterThanBigInt;

            break;
        
        case ">=":

            opNumber = greaterThanOrEqualToNumber;
            opBigInt = greaterThanOrEqualToBigInt;

            break;
        
        case "<":

            opNumber = lessThanNumber;
            opBigInt = lessThanBigInt;

            break;
        
        case "<=":

            opNumber = lessThanOrEqualToNumber;
            opBigInt = lessThanOrEqualToBigInt;

            break;
        
        default:
            throw new Error(`The operator ${operatorText} is not yet implemented.`);
    }

    const newType = new StType();
    newType.builtinType = new StBuiltinType(StBuiltinTypeCode.BOOL);

    newType.builtinType.value = executeBinaryOperation(
        lhsType.builtinType!.value,
        rhsType.builtinType!.value,
        opNumber,
        opBigInt
    );

    return newType;
}

export function internalEvaluateAssignment(
    lhsType: StType,
    lhsCtx: ParserRuleContext | undefined,
    rhsType: StType,
    rhsCtx: ParserRuleContext | undefined,
    isRefAssignment: boolean
): [StType | undefined, StType | undefined] {

    let rhsBuiltinType = rhsType.builtinType;
    let rhsIsUntypedIntegerLiteral = rhsBuiltinType?.code === null;
    
    switch (lhsType.builtinType?.details?.kind) {

        case StBuiltinTypeKind.Logical:
           
            /* ONLY literals are allowed here! */
            if (rhsBuiltinType?.isLiteral) {

                const literalText = rhsCtx?.getText();
                
                // Only allow 0 or 1, and nothing else! No type prefix etc
                if (literalText === "0" || literalText === "1")
                    return [lhsType, lhsType];
            }
            
            break;
              
        case StBuiltinTypeKind.Bitfield:
        case StBuiltinTypeKind.UnsignedInteger:
           
            // Promote the rhs type to the smallest unsigned integer type that can represent its value
            if (rhsBuiltinType?.value !== undefined && rhsIsUntypedIntegerLiteral)
                rhsType = getSmallestIntegerForValue(rhsBuiltinType.value as bigint, false, true)!;

            break;
        
        case StBuiltinTypeKind.SignedInteger:
           
            // Promote the rhs type to the smallest signed integer type that can represent its value
            if (rhsBuiltinType?.value !== undefined && rhsIsUntypedIntegerLiteral)
                rhsType = getSmallestIntegerForValue(rhsBuiltinType.value as bigint, true, false)!;

            break;
            
        case StBuiltinTypeKind.Float:
           
            const isFloat = rhsBuiltinType?.details?.superKind === StBuiltinTypeSuperKind.Float;
            
            if (isFloat && Math.abs(rhsBuiltinType!.value! as number) <= 3.402823e+38)
                return [lhsType, lhsType];
        
        default:
            break;
    }

    // Fallback
    rhsBuiltinType = rhsType.builtinType;
    rhsIsUntypedIntegerLiteral = rhsBuiltinType?.code === null;

    if (rhsIsUntypedIntegerLiteral) {
        
        // Promote the rhs type to the smallest integer type that can represent its value
        if (rhsBuiltinType?.value !== undefined && rhsIsUntypedIntegerLiteral)
            rhsType = getSmallestIntegerForValue(rhsBuiltinType.value as bigint, true, true)!;
    }

    // Check assignment
    if (isRefAssignment && !lhsType.isReference) {
        C0140(lhsCtx);
        return [undefined, undefined];
    }
    
    checkAssignment(lhsType, rhsType, getContextRange(rhsCtx));

    return [lhsType, rhsType];
}

function checkArithmeticOperation(
    newType: StType,
    lhsType: StType,
    rhsType: StType,
    operatorText: string,
    operatorRange?: Range,
    lhsRange?: Range,
    rhsRange?: Range
): boolean {

    const lhsBuiltinType = lhsType.builtinType;
    const rhsBuiltinType = rhsType.builtinType;

    if (lhsBuiltinType && rhsBuiltinType) {

        const lhsSuperKind = lhsBuiltinType.details!.superKind;
        const lhsIsNumber = lhsSuperKind === StBuiltinTypeSuperKind.Integer || lhsSuperKind === StBuiltinTypeSuperKind.Float;

        const rhsSuperKind = rhsBuiltinType.details!.superKind;
        const rhsIsNumber = rhsSuperKind === StBuiltinTypeSuperKind.Integer || rhsSuperKind === StBuiltinTypeSuperKind.Float;

        if (lhsIsNumber && rhsIsNumber) {

            if (
                checkAssignment(newType, lhsType, lhsRange) &&
                checkAssignment(newType, rhsType, rhsRange)
            ) {
                return true;
            }
        }

        else if (
            (operatorText === "*" || operatorText === "/") &&
            lhsBuiltinType &&
            rhsBuiltinType &&
            (
                lhsBuiltinType.details?.kind === StBuiltinTypeKind.Time && rhsBuiltinType.details?.superKind === StBuiltinTypeSuperKind.Integer ||
                rhsBuiltinType.details?.kind === StBuiltinTypeKind.Time && lhsBuiltinType.details?.superKind === StBuiltinTypeSuperKind.Integer
            )
        ) {
            return true;
        }
        
        else if (
            operatorText === "+" &&
            lhsBuiltinType &&
            rhsBuiltinType &&
            (
                lhsBuiltinType.details?.superKind === StBuiltinTypeSuperKind.ShortDateOrTime && rhsBuiltinType.code === StBuiltinTypeCode.TIME ||
                lhsBuiltinType.details?.superKind === StBuiltinTypeSuperKind.LongDateOrTime && rhsBuiltinType.code === StBuiltinTypeCode.LTIME ||
                rhsBuiltinType.details?.superKind === StBuiltinTypeSuperKind.ShortDateOrTime && lhsBuiltinType.code === StBuiltinTypeCode.TIME ||
                rhsBuiltinType.details?.superKind === StBuiltinTypeSuperKind.LongDateOrTime && lhsBuiltinType.code === StBuiltinTypeCode.LTIME
            )
        ) {
            return true;
        }
            
        else if (
            operatorText === "-" &&
            lhsBuiltinType &&
            rhsBuiltinType &&
            (
                lhsBuiltinType.details?.superKind === StBuiltinTypeSuperKind.ShortDateOrTime && rhsBuiltinType.code === StBuiltinTypeCode.TIME ||
                lhsBuiltinType.details?.superKind === StBuiltinTypeSuperKind.LongDateOrTime && rhsBuiltinType.code === StBuiltinTypeCode.LTIME
            )
        ) {
            return true;
        }
    }

    M0002(lhsType.getId(), rhsType.getId(), operatorText, operatorRange);
    return false;
}

function checkBitstringOperation(
    newType: StType,
    lhsType: StType,
    rhsType: StType,
    operatorText: string,
    operatorRange?: Range,
    lhsRange?: Range,
    rhsRange?: Range
): boolean {

    const lhsBuiltinType = lhsType.builtinType;
    const rhsBuiltinType = rhsType.builtinType;

    if (lhsBuiltinType && rhsBuiltinType) {

        const lhsSuperKind = lhsBuiltinType.details!.superKind;
        const lhsIsLogical = lhsSuperKind === StBuiltinTypeSuperKind.Logical;
        const lhsIsInteger = lhsSuperKind === StBuiltinTypeSuperKind.Integer;

        const rhsSuperKind = rhsBuiltinType.details!.superKind;
        const rhsIsLogical = rhsSuperKind === StBuiltinTypeSuperKind.Logical;
        const rhsIsInteger = rhsSuperKind === StBuiltinTypeSuperKind.Integer;

        if (
            lhsIsLogical && rhsIsLogical ||
            lhsIsInteger && rhsIsInteger
        ) {

            if (
                checkAssignment(newType, lhsType, lhsRange) &&
                checkAssignment(newType, rhsType, rhsRange)
            ) {
                return true;
            }
        }
    }

    M0002(lhsType.getId(), rhsType.getId(), operatorText, operatorRange);
    return false;
}

function checkEqualityOperation(
    lhsType: StType,
    rhsType: StType,
    operatorRange?: Range,
): boolean {

    const lhsBuiltinType = lhsType.builtinType;
    const rhsBuiltinType = rhsType.builtinType;

    if (lhsBuiltinType && rhsBuiltinType) {

        const lhsCode = lhsBuiltinType.code;
        const lhsSuperKind = lhsBuiltinType.details!.superKind;
        const lhsIsLogical = lhsSuperKind === StBuiltinTypeSuperKind.Logical;
        const lhsIsNumber = lhsSuperKind === StBuiltinTypeSuperKind.Integer || lhsSuperKind === StBuiltinTypeSuperKind.Float;

        const rhsCode = rhsBuiltinType.code;
        const rhsSuperKind = rhsBuiltinType.details!.superKind;
        const rhsIsLogical = rhsSuperKind === StBuiltinTypeSuperKind.Logical;
        const rhsIsNumber = rhsSuperKind === StBuiltinTypeSuperKind.Integer || rhsSuperKind === StBuiltinTypeSuperKind.Float;

        if (
            lhsIsLogical && rhsIsLogical ||
            lhsIsNumber && rhsIsNumber ||
            lhsCode === rhsCode
        ) {
            return true;
        }
    }

    C0066(lhsType.getId(), rhsType.getId(), operatorRange);
    return false;
}

function checkAssignment(
    lhsType: StType,
    rhsType: StType,
    rhsRange?: Range
): boolean {
    
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
                rhsDetails.superKind === StBuiltinTypeSuperKind.String &&
                lhsBuiltinType.stringLength! < rhsBuiltinType.stringLength!
            ) {

                const warning = new Diagnostic(
                    rhsRange ?? defaultRange,
                    `String type '${StBuiltinTypeCode[rhsBuiltinType.code!]}(${rhsBuiltinType.stringLength})' too long for string type '${StBuiltinTypeCode[lhsBuiltinType.code!]}(${rhsBuiltinType.stringLength})': The string will be truncated`,
                    DiagnosticSeverity.Warning
                );

                StModelBuilder.currentSourceFile.diagnostics.push(warning);
            }

            return true;
        }

        const rhsIsInteger = rhsDetails.superKind === StBuiltinTypeSuperKind.Integer;

        switch (lhsDetails.superKind) {

            case StBuiltinTypeSuperKind.Logical:

                if (rhsDetails.superKind === StBuiltinTypeSuperKind.Logical)
                    return true;

                break;

            case StBuiltinTypeSuperKind.Integer:

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
                                    rhsRange ?? defaultRange,
                                    `Implicit conversion from signed type '${StBuiltinTypeCode[rhsBuiltinType.code!]}' to unsigned type '${StBuiltinTypeCode[lhsBuiltinType.code!]}': Possible change of sign`,
                                    DiagnosticSeverity.Warning
                                );

                                StModelBuilder.currentSourceFile.diagnostics.push(warning);
                            }

                            else if (!rhsDetails.signed && lhsDetails.signed) {

                                const warning = new Diagnostic(
                                    rhsRange ?? defaultRange,
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

            case StBuiltinTypeSuperKind.Float:

                if (
                    rhsDetails.superKind === StBuiltinTypeSuperKind.Float ||
                    rhsIsInteger
                ) {
                    if (
                        (
                            rhsDetails.superKind === StBuiltinTypeSuperKind.Float &&
                            rhsDetails.size > lhsDetails.size
                        ) ||
                        (
                            rhsIsInteger &&
                            rhsDetails.size >= lhsDetails.size
                        )
                    ) {
                        const warning = new Diagnostic(
                            rhsRange ?? defaultRange,
                            `Implicit conversion from '${StBuiltinTypeCode[rhsBuiltinType.code!]}' to '${StBuiltinTypeCode[lhsBuiltinType.code!]}': Possible loss of information`,
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
        rhsType.getId(),
        lhsType.getId(),
        rhsRange
    );

    return false;
}

function promoteUntypedLiterals(
    isSubtraction: boolean,
    lhsType: StType,
    lhsIsUntypedIntegerLiteral: boolean,
    rhsType: StType,
    rhsIsUntypedIntegerLiteral: boolean
): [StType, StType] {
    
    const lhsBuiltinType = lhsType.builtinType!;
    const rhsBuiltinType = rhsType.builtinType!;

    if (lhsIsUntypedIntegerLiteral && rhsIsUntypedIntegerLiteral) {

        // Promote both literals to the smallest signed integer type that can represent their values
        if (isSubtraction || lhsBuiltinType.value! < 0 || rhsBuiltinType.value! < 0) {
            lhsType = getSmallestIntegerForValue(lhsBuiltinType.value! as bigint, true, false)!;
            rhsType = getSmallestIntegerForValue(rhsBuiltinType.value! as bigint, true, false)!;
        }

        // Promote both literals to the smallest unsigned integer type that can represent their values
        else {
            lhsType = getSmallestIntegerForValue(lhsBuiltinType.value! as bigint, false, true)!;
            rhsType = getSmallestIntegerForValue(rhsBuiltinType.value! as bigint, false, true)!;
        }
    }

    else {

        const lhsIsSigned = lhsBuiltinType?.details?.signed;
        const rhsIsSigned = rhsBuiltinType?.details?.signed;

        if (lhsIsSigned || rhsIsSigned) {

            // Promote the lhs type to the smallest signed integer type that can represent its value
            if (lhsBuiltinType!.value !== undefined && lhsIsUntypedIntegerLiteral)
                lhsType = getSmallestIntegerForValue(lhsBuiltinType.value as bigint, true, false)!;

            // Promote the rhs type to the smallest signed integer type that can represent its value
            if (rhsBuiltinType!.value !== undefined && rhsIsUntypedIntegerLiteral)
                rhsType = getSmallestIntegerForValue(rhsBuiltinType.value as bigint, true, false)!;
        }

        else {

            // Promote the lhs type to the smallest unsigned integer type that can represent its value
            if (lhsBuiltinType?.value !== undefined && lhsIsUntypedIntegerLiteral)
                lhsType = getSmallestIntegerForValue(lhsBuiltinType.value as bigint, false, true)!;

            // Promote the rhs type to the smallest unsigned integer type that can represent its value
            if (rhsBuiltinType?.value !== undefined && rhsIsUntypedIntegerLiteral)
                rhsType = getSmallestIntegerForValue(rhsBuiltinType.value as bigint, false, true)!;
        }
    }
    
    return [lhsType, rhsType];
}

function getTargetTypeCode(
    lhsType: StType,
    rhsType: StType
): StBuiltinTypeCode | undefined {

    const lhsBuiltinType = lhsType.builtinType;
    const rhsBuiltinType = rhsType.builtinType;

    if (!lhsBuiltinType || !rhsBuiltinType)
        return undefined;

    const leftCode = lhsBuiltinType.code;
    const rightCode = rhsBuiltinType.code;

    // Prefer REAL / LREAL
    if (leftCode === StBuiltinTypeCode.LREAL || rightCode === StBuiltinTypeCode.LREAL)
        return StBuiltinTypeCode.LREAL;

    if (leftCode === StBuiltinTypeCode.REAL || rightCode === StBuiltinTypeCode.REAL)
        return StBuiltinTypeCode.REAL;

    // TIME
    if (leftCode === StBuiltinTypeCode.TIME) {
        return rhsBuiltinType.details!.superKind === StBuiltinTypeSuperKind.ShortDateOrTime
            ? rightCode ?? undefined
            : leftCode;
    }

    else if (rightCode === StBuiltinTypeCode.TIME) {
        return lhsBuiltinType.details!.superKind === StBuiltinTypeSuperKind.ShortDateOrTime
            ? leftCode ?? undefined
            : rightCode;
    }

    // LTIME
    if (leftCode === StBuiltinTypeCode.LTIME) {
        return rhsBuiltinType.details!.superKind === StBuiltinTypeSuperKind.LongDateOrTime
            ? rightCode ?? undefined
            : leftCode;
    }

    else if (rightCode === StBuiltinTypeCode.LTIME) {
        return lhsBuiltinType.details!.superKind === StBuiltinTypeSuperKind.LongDateOrTime
            ? leftCode ?? undefined
            : rightCode;
    }

    //
    const leftDetails = lhsBuiltinType.details!;
    const rightDetails = rhsBuiltinType.details!;

    const leftIsUnsignedInteger = leftDetails.signed === false;
    const leftIsSignedInteger = leftDetails.signed === true;

    const rightIsUnsignedInteger = rightDetails.signed === false;
    const rightIsSignedInteger = rightDetails.signed === true;

    // If both are unsigned, promote to the larger unsigned type
    if (leftIsUnsignedInteger && rightIsUnsignedInteger)
        return getUnsignedIntegerForSize(Math.max(leftDetails.size, rightDetails.size));

    // If both are signed, promote to the larger signed type
    else if (leftIsSignedInteger && rightIsSignedInteger)
        return getSignedIntegerForSize(Math.max(leftDetails.size, rightDetails.size));

    // If one is signed and one is unsigned, promote to signed type with larger size
    else if (
        (leftIsSignedInteger && rightIsUnsignedInteger) ||
        (leftIsUnsignedInteger && rightIsSignedInteger)
    ) {
        return getSignedIntegerForSize(Math.max(leftDetails.size, rightDetails.size));
    }

    // Default: fallback to the larger type
    return (leftDetails.size >= rightDetails.size ? leftCode : rightCode) ?? undefined;
}

function evaluateLiteral(literal: LiteralContext): StType | undefined {

    let type: StType | undefined;
    let lhsType: string | undefined;

    if (literal.LOGICAL_LITERAL())
        type = evaluateLogicalLiteral(literal.LOGICAL_LITERAL()?.getText()!);

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
            dateLiteral!._value!.text!
        );
    }

    else if (literal.timeOfDayLiteral()) {

        const timeOfDayLiteral = literal.timeOfDayLiteral();

        [type, lhsType] = evaluateTimeOfDayLiteral(
            timeOfDayLiteral!._prefix?.text!,
            timeOfDayLiteral!._value!.text!
        );
    }

    else if (literal.dateAndTimeLiteral()) {

        const dateAndTimeLiteral = literal.dateAndTimeLiteral();

        [type, lhsType] = evaluateDateAndTimeLiteral(
            dateAndTimeLiteral!._prefix?.text!,
            dateAndTimeLiteral!._value?.text!
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