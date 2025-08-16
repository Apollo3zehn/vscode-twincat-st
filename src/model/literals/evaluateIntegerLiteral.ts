import { builtinTypesDetails, StBuiltinType, StBuiltinTypeCode, StBuiltinTypeDetails, StBuiltinTypeKind, StBuiltinTypeSuperKind, StType } from "../../core/types.js";
import { parseBigIntWithRadix } from "../../core/utils.js";
import { StModelBuilder } from "../StModelBuilder.js";

export function evaluateIntegerLiteral(
    literal: string
): [StType | undefined, string | undefined] {

    const splittedText = literal.split('#');

    let lhsBuiltinType: StBuiltinType | undefined;
    let radix: number = 10;
    let value: bigint;

    /* Important: Do not convert type to uppercase
     * first because TwinCAT requires the input string 
     * to be uppercase, otherwise it is a syntax error.
     */

    // Detect type and radix
    if (splittedText.length === 3) {

        lhsBuiltinType = new StBuiltinType(splittedText[0] as StBuiltinTypeCode);
        radix = parseInt(splittedText[1], 10);
    }
    
    else if (splittedText.length === 2) {

        if (splittedText[0] in StBuiltinTypeCode)
            lhsBuiltinType = new StBuiltinType(splittedText[0] as StBuiltinTypeCode);
            
        else
            radix = parseInt(splittedText[0], 10);
    }

    // Get value
    const valueAsString = splittedText[splittedText.length - 1].replaceAll("_", "");
    value = parseBigIntWithRadix(valueAsString, radix);

    // Get type for value
    let rhsType: StType;

    const integerType = getSmallestIntegerForValue(value, true, true);

    if (integerType) {
        rhsType = integerType;
    }
        
    else {
        return [
            undefined,
            lhsBuiltinType?.code ?? "ANY_INT"
        ];
    }

    // Validate
    if (lhsBuiltinType) {

        if (
            value < 0 &&
            lhsBuiltinType &&
            lhsBuiltinType.details?.kind !== StBuiltinTypeKind.SignedInteger
        ) {
            return [
                undefined,
                lhsBuiltinType?.code ?? undefined
            ];
        }

        const lhsDetails = lhsBuiltinType.details;
        const rhsDetails = rhsType.builtinType?.details;

        if (
            lhsDetails &&
            rhsDetails &&
            lhsDetails.maxExcl! < rhsDetails.maxExcl!
        ) {
            return [
                undefined,
                lhsBuiltinType?.code ?? undefined
            ];
        }
    }

    const builtinType = lhsBuiltinType?.code
        ? lhsBuiltinType
        : new StBuiltinType(null); // Return 'null' for untyped integer literals

    builtinType.value = value;
    builtinType.subRangeStartIncl = value;
    builtinType.subRangeStopExcl = value;

    const type = new StType();
    type.builtinType = builtinType;

    return [type, undefined];
}

export function ensureNoOverflowBigIntWorkaround(
    builtinTypeDetails: StBuiltinTypeDetails,
    value: bigint | number
): bigint | number {
    
    switch (builtinTypeDetails.superKind) {

        case StBuiltinTypeSuperKind.Integer:

            value = value as bigint;
            value = value & builtinTypeDetails.bitmask!;

            if (builtinTypeDetails.kind === StBuiltinTypeKind.SignedInteger) {

                // Check if highest bit is set and then convert to negative number
                const signBit = 1n << BigInt(builtinTypeDetails.size - 1);

                if ((value & signBit) !== 0n) {
                    const maxValue = signBit << BigInt(1);
                    value -= maxValue;
                }
            }

            break;
        
        case StBuiltinTypeSuperKind.Float:

            value = value as number;

            if (value < (builtinTypeDetails.minIncl as number))
                value = -Infinity;

            else if (value >= (builtinTypeDetails.maxExcl as number))
                value = +Infinity;

            break;
       
        case StBuiltinTypeSuperKind.ShortDateOrTime:
        case StBuiltinTypeSuperKind.LongDateOrTime:

            // https://stackoverflow.com/a/4467559
            const maxExcl = builtinTypeDetails.maxExcl as bigint;
            value = ((value as bigint % maxExcl) + maxExcl) % maxExcl;
    
        default:
            break;
    }

    return value;
}

export function getSmallestIntegerForValue(
    value: bigint,
    allowSigned: boolean,
    allowUnsigned: boolean,
    ensureDefined: boolean = false
): StType | undefined {

    let code: StBuiltinTypeCode | undefined = undefined;

    if (value < 0) {

        if (value >= -Math.pow(2, 7))
            code = StBuiltinTypeCode.SINT;
            
        else if (value >= -Math.pow(2, 15))
            code = StBuiltinTypeCode.INT;
            
        else if (value >= -Math.pow(2, 31))
            code = StBuiltinTypeCode.DINT;
            
        else if (value >= -Math.pow(2, 63) || ensureDefined)
            code = StBuiltinTypeCode.LINT;
    }

    else {

        if (allowSigned && value < Math.pow(2, 7))
            code = StBuiltinTypeCode.SINT;
            
        else if (allowUnsigned && value < Math.pow(2, 8))
            code = StBuiltinTypeCode.USINT;
            
        else if (allowSigned && value < Math.pow(2, 15))
            code = StBuiltinTypeCode.INT;
            
        else if (allowUnsigned && value < Math.pow(2, 16))
            code = StBuiltinTypeCode.UINT;
            
        else if (allowSigned && value < Math.pow(2, 31))
            code = StBuiltinTypeCode.DINT;
            
        else if (allowUnsigned && value < Math.pow(2, 32))
            code = StBuiltinTypeCode.UDINT;
            
        else if (allowSigned && value < Math.pow(2, 63))
            code = StBuiltinTypeCode.LINT;
            
        else if (value < Math.pow(2, 64) || ensureDefined)
            code = StBuiltinTypeCode.ULINT;
    }

    if (!code)
        // This can only happen when called via evaluateIntegerNumber or after
        // expression evaluation, otherwise the type is always defined.
        return undefined;

    const type = new StType();
    type.builtinType = new StBuiltinType(code);
    type.builtinType.value = value;

    return type;
}

export function getSignedIntegerForSize(size: number): StBuiltinTypeCode {

    for (const [code, builtinTypeDetails] of builtinTypesDetails.entries()) {

        if (
            builtinTypeDetails.kind === StBuiltinTypeKind.SignedInteger &&
            builtinTypeDetails.size === size
        ) {
            return code;
        }
    }

    throw Error(`Unsupported signed integer size ${size}`);
}

export function getUnsignedIntegerForSize(size: number): StBuiltinTypeCode {

    for (const [code, builtinTypeDetails] of builtinTypesDetails.entries()) {

        if (
            builtinTypeDetails.kind === StBuiltinTypeKind.UnsignedInteger &&
            builtinTypeDetails.size === size
        ) {
            return code;
        }
    }

    throw Error(`Unsupported unsigned integer size ${size}`);
}