import { StBuiltinType, StModel, StNativeTypeKind, StType } from "../core/types.js";
import { initializeIntegerType } from "../core/utils.js";
import { ExprContext } from "../generated/StructuredTextParser.js";
import { getSmallestIntegerForValue } from "./literals/evaluateIntegerNumber.js";


export function promoteIntegerConstant(value: number): StType {

    const type = new StType();
    type.builtinType = getSmallestIntegerForValue(value, true, true);

    initializeIntegerType(null, type, undefined);

    return type;
}

export function promoteSignedIntegerConstant(value: number): StType {

    const type = new StType();
    type.builtinType = getSmallestIntegerForValue(value, true, false);

    initializeIntegerType(null, type, undefined);

    return type;
}

export function promoteUnsignedIntegerConstant(value: number) {

    const type = new StType();
    type.builtinType = getSmallestIntegerForValue(value, false, true);

    initializeIntegerType(null, type, undefined);

    return type;
}

export function promoteMathOperands(
    expression: ExprContext,
    lhsType: StType,
    rhsType: StType
): [StType, StType] {

    const operator = expression._op!.text!;

    const lhsIsUntypedLiteral = lhsType.builtinType === null;
    const rhsIsUntypedLiteral = rhsType.builtinType === null;

    if (lhsIsUntypedLiteral && rhsIsUntypedLiteral) {

        // Promote both literals to the smallest signed integer type that can represent their values
        if (operator === "-" || lhsType.value! < 0 || rhsType.value! < 0) {
            lhsType = promoteSignedIntegerConstant(lhsType.value!);
            rhsType = promoteSignedIntegerConstant(rhsType.value!);
        }

        // Promote both literals to the smallest unsigned integer type that can represent their values
        else {
            lhsType = promoteUnsignedIntegerConstant(lhsType.value!);
            rhsType = promoteUnsignedIntegerConstant(rhsType.value!);
        }
    }

    else {

        const lhsTypeDetails = lhsType.builtinType
            ? StModel.nativeTypesDetails.get(lhsType.builtinType)
            : undefined;

        const rhsTypeDetails = rhsType.builtinType
            ? StModel.nativeTypesDetails.get(rhsType.builtinType)
            : undefined;

        const lhsIsSigned = lhsTypeDetails?.kind === StNativeTypeKind.SignedInteger;
        const rhsIsSigned = rhsTypeDetails?.kind === StNativeTypeKind.SignedInteger;

        if (lhsIsSigned || rhsIsSigned) {

            // Promote the lhs type to the smallest signed integer type that can represent its value
            if (lhsType.value !== undefined && lhsIsUntypedLiteral)
                lhsType = promoteSignedIntegerConstant(lhsType.value);

            // Promote the rhs type to the smallest signed integer type that can represent its value
            if (rhsType.value !== undefined && rhsIsUntypedLiteral)
                rhsType = promoteSignedIntegerConstant(rhsType.value);
        }

        else {

            // Promote the lhs type to the smallest unsigned integer type that can represent its value
            if (lhsType.value !== undefined && lhsIsUntypedLiteral)
                lhsType = promoteUnsignedIntegerConstant(lhsType.value);

            // Promote the rhs type to the smallest unsigned integer type that can represent its value
            if (rhsType.value !== undefined && rhsIsUntypedLiteral)
                rhsType = promoteUnsignedIntegerConstant(rhsType.value);
        }
    }
    
    return [lhsType, rhsType];
}

export function promoteAssignmentOperand(
    lhsType: StType,
    rhsType: StType,
    expression: ExprContext | undefined
): StType {

    const lhsTypeDetails = lhsType.builtinType
        ? StModel.nativeTypesDetails.get(lhsType.builtinType)
        : undefined;

    let rhsIsUntypedLiteral = rhsType.builtinType === null;
    
    switch (lhsTypeDetails?.kind) {

        case StNativeTypeKind.Logical:

            const literalText = expression?.getText();
            
            if (
                // Only allow 0 or 1, and nothing else! No type prefix etc
                rhsType.isLiteral /* ONLY literals are allowed here! */ &&
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
                if (rhsType.value !== undefined && rhsIsUntypedLiteral)
                    rhsType = promoteUnsignedIntegerConstant(rhsType.value);
        
        case StNativeTypeKind.SignedInteger:
           
            // Promote the rhs type to the smallest signed integer type that can represent its value
                if (rhsType.value !== undefined && rhsIsUntypedLiteral)
                    rhsType = promoteSignedIntegerConstant(rhsType.value);
            
        case StNativeTypeKind.Float:

            const typeDetails = rhsType
                ? StModel.nativeTypesDetails.get(rhsType.builtinType!)
                : undefined;
            
            const isFloat = typeDetails?.kind === StNativeTypeKind.Float;
            
            if (isFloat && Math.abs(rhsType.value!) <= 3.402823e+38)
                return lhsType;
        
        default:
            break;
    }

    // Fallback
    rhsIsUntypedLiteral = rhsType.builtinType === null;

    if (rhsIsUntypedLiteral) {
        
        // Promote the rhs type to the smallest integer type that can represent its value
        if (rhsType.value !== undefined && rhsIsUntypedLiteral)
            rhsType = promoteIntegerConstant(rhsType.value);
    }

    return rhsType;
}

export function getLowestCommonDenominator(
    lhsType: StType,
    rhsType: StType
): StBuiltinType | undefined {

    /* The calling method ensures that both values are defined */
    const left = lhsType.builtinType!;
    const right = rhsType.builtinType!;

    // Prefer REAL / LREAL
    if (left === StBuiltinType.LREAL || right === StBuiltinType.LREAL)
        return StBuiltinType.LREAL;

    if (left === StBuiltinType.REAL || right === StBuiltinType.REAL)
        return StBuiltinType.REAL;

    const leftDetails = StModel.nativeTypesDetails.get(left);
    const rightDetails = StModel.nativeTypesDetails.get(right);

    if (leftDetails && rightDetails) {

        const leftIsUnsignedInteger = leftDetails.kind === StNativeTypeKind.Bitfield || leftDetails.kind === StNativeTypeKind.UnsignedInteger;
        const leftIsSignedInteger = leftDetails.kind === StNativeTypeKind.SignedInteger;

        const rightIsUnsignedInteger = rightDetails.kind === StNativeTypeKind.Bitfield || rightDetails.kind === StNativeTypeKind.UnsignedInteger;
        const rightIsSignedInteger = rightDetails.kind === StNativeTypeKind.SignedInteger;

        // If both are unsigned, promote to the larger unsigned type
        if (leftIsUnsignedInteger && rightIsUnsignedInteger)
            return leftDetails.size >= rightDetails.size ? left : right;

        // If both are signed, promote to the larger signed type
        else if (leftIsSignedInteger && rightIsSignedInteger)
            return leftDetails.size >= rightDetails.size ? left : right;

        // If one is signed and one is unsigned, promote to signed type with larger size
        else if (
            (leftIsSignedInteger && rightIsUnsignedInteger) ||
            (leftIsUnsignedInteger && rightIsSignedInteger)
        ) {
            const maxSize = Math.max(leftDetails.size, rightDetails.size);

            for (const [builtinType, details] of StModel.nativeTypesDetails.entries()) {
                if (
                    details.kind === StNativeTypeKind.SignedInteger &&
                    details.size === maxSize
                ) {
                    return builtinType;
                }
            }
        }

        // Default: fallback to the larger type
        return leftDetails.size >= rightDetails.size ? left : right;
    }
    
    // Neither leftDetails or rightDetails is defined, so just return any type.
    // The type checking algorithm will then throw an appropriate error.
    return left;
}