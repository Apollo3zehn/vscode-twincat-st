import { ParserRuleContext } from "antlr4ng";
import { StBuiltinType, StModel, StNativeTypeKind, StType } from "../core/types.js";
import { initializeIntegerType } from "../core/utils.js";

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

        // Convert possibly signed constants to the next larger type (which is unsigned)
        case StNativeTypeKind.Bitfield:
        case StNativeTypeKind.UnsignedInteger:

            const isSignedInteger = typeDetails.kind === StNativeTypeKind.SignedInteger;    
            
            if (
                isSignedInteger &&
                type.value! > 0 &&
                typeDetails.nextLargerType
            ) {
                const promotedType = new StType();
                promotedType.builtinType = typeDetails.nextLargerType;

                initializeIntegerType(null, promotedType, undefined);

                return promotedType;
            }
            
            break;
            
        // Convert possibly unsigned constants to the next larger type (which is signed)
        case StNativeTypeKind.SignedInteger:

            const isUnsignedInteger =
                typeDetails.kind === StNativeTypeKind.Bitfield ||
                typeDetails.kind === StNativeTypeKind.UnsignedInteger;

            if (isUnsignedInteger && typeDetails.nextLargerType) {

                const promotedType = new StType();
                promotedType.builtinType = typeDetails.nextLargerType;

                initializeIntegerType(null, promotedType, undefined);

                return promotedType;
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
        if (leftIsSignedInteger && rightIsSignedInteger)
            return leftDetails.size >= rightDetails.size ? left : right;

        // If one is signed and one is unsigned, promote to signed type with larger size
        if (
            (leftIsSignedInteger && rightIsUnsignedInteger) ||
            (leftIsUnsignedInteger && rightIsSignedInteger)
        ) {
            // TODO:
            //  - When one of the operants is signed, create a new signed type with
            //    the size whichever is larger (don't forget to initialize this new
            //    integer type)
            //
            //  - In case of unsigned literal (left or right) + signed non-literal: 
            //    promote the literal to the next larger integer size

            // if (
            //     (leftIsSignedInteger && leftDetails.size >= rightDetails.size) ||
            //     (rightIsSignedInteger && rightDetails.size >= leftDetails.size)
            // ) {
            //     return leftDetails.size >= rightDetails.size ? left : right;
            // }
        }

        // Default: fallback to the larger type
        return leftDetails.size >= rightDetails.size ? left : right;
    }
    
    // Either leftDetails or rightDetails is not defined, so just return any type.
    // The type checking algorithm will then throw an appropriate error.
    return left;
}