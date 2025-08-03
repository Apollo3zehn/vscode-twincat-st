import { ParserRuleContext } from "antlr4ng";
import { StBuiltinType, StModel, StNativeTypeKind, StType } from "../core/types.js";
import { getSmallestIntegerForValue } from "./literals/evaluateIntegerNumber.js";
import { initializeIntegerType } from "../core/utils.js";

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

export function promoteConstant(
    contextTypeKind: StNativeTypeKind,
    type: StType,
    expression: ParserRuleContext | undefined
): StType | null {
    
    const isConstant = type.value !== undefined;
    const isBuiltinType = type.builtinType !== undefined;

    if (!isConstant || !isBuiltinType)
        return type;

    const typeDetails = type
        ? StModel.nativeTypesDetails.get(type.builtinType!)
        : undefined;

    if (!typeDetails)
        return type;

    switch (contextTypeKind) {

        case StNativeTypeKind.Logical:

            const literalText = expression?.getText();
            
            if (
                // Only allow 0 or 1, and nothing else! No type prefix etc
                type.isLiteral /* ONLY literals are allowed here! */ &&
                (
                    literalText === "0" ||
                    literalText === "1"
                )
            ) {
                return null; // Null means the calling function should just continue with the context type
            }
            
            break;
    
        case StNativeTypeKind.Float:

            const isFloat = typeDetails.kind === StNativeTypeKind.Float;
            
            if (isFloat && Math.abs(type.value!) <= 3.402823e+38)
                return null // Null means the calling function should just continue with the context type
        
        default:
            break;
    }

    return type;
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