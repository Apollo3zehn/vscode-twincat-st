import { nativeTypesDetails, StBuiltinTypeCode, StNativeTypeKind, StType } from "../core/types.js";
import { ExprContext } from "../generated/StructuredTextParser.js";
import { getSmallestIntegerForValue } from "./literals/evaluateIntegerNumber.js";

export function promoteMathOperands(
    expression: ExprContext,
    lhsType: StType,
    rhsType: StType
): [StType, StType] {

    const operator = expression._op!.text!;

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

export function promoteAssignmentOperand(
    lhsType: StType,
    rhsType: StType,
    expression: ExprContext | undefined
): StType {

    let rhsBuiltinType = rhsType.builtinType;
    let rhsIsUntypedLiteral = rhsBuiltinType?.code === null;
    
    switch (lhsType.builtinType?.details?.kind) {

        case StNativeTypeKind.Logical:

            const literalText = expression?.getText();
            
            if (
                // Only allow 0 or 1, and nothing else! No type prefix etc
                rhsBuiltinType?.isLiteral /* ONLY literals are allowed here! */ &&
                (
                    literalText === "0" ||
                    literalText === "1"
                )
            ) {
                return lhsType;
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
                return lhsType;
        
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

    return rhsType;
}

export function getLowestCommonDenominator(
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