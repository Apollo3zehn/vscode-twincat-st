import { nativeTypesDetails, StBuiltinType, StBuiltinTypeCode, StNativeTypeKind, StType } from "../../core/types.js";
import { parseBigIntWithRadix } from "../../core/utils.js";

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
    
    const valueAsString = splittedText[splittedText.length - 1].replaceAll("_", "");
    value = parseBigIntWithRadix(valueAsString, radix);

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

    if (lhsBuiltinType) {

        if (
            value < 0 &&
            lhsBuiltinType &&
            lhsBuiltinType.details?.kind !== StNativeTypeKind.SignedInteger
        ) {
            return [
                undefined,
                lhsBuiltinType?.code ?? undefined
            ];
        }

        const rhsDetails = rhsType.builtinType?.details;
        const lhsDetails = lhsBuiltinType.details;

        if (
            rhsDetails &&
            lhsDetails &&
            lhsDetails.max! < rhsDetails.max!
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
    builtinType.subRangeStart = value;
    builtinType.subRangeStop = value;

    const type = new StType();
    type.builtinType = builtinType;

    return [type, undefined];
}

export function getSmallestIntegerForValue(
    value: bigint,
    allowSigned: boolean,
    allowUnsigned: boolean
): StType | undefined {

    let code: StBuiltinTypeCode | undefined = undefined;

    if (value < 0) {

        if (value >= -Math.pow(2, 7))
            code = StBuiltinTypeCode.SINT;
            
        else if (value >= -Math.pow(2, 15))
            code = StBuiltinTypeCode.INT;
            
        else if (value >= -Math.pow(2, 31))
            code = StBuiltinTypeCode.DINT;
            
        else if (value >= -Math.pow(2, 63))
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
            
        else if (value < Math.pow(2, 64))
            code = StBuiltinTypeCode.ULINT;
    }

    if (!code)
        return undefined; // This can only happen when called via evaluateIntegerNumber, otherwise the type is always defined.

    const type = new StType();
    type.builtinType = new StBuiltinType(code);

    return type;
}

export function getSignedIntegerForSize(size: number): StBuiltinTypeCode {

    for (const [code, nativeDetails] of nativeTypesDetails.entries()) {

        if (
            nativeDetails.signed &&
            nativeDetails.size === size
        ) {
            return code;
        }
    }

    throw Error(`Unsupported signed integer size ${size}`);
}

export function getUnsignedIntegerForSize(size: number): StBuiltinTypeCode {

    for (const [code, nativeDetails] of nativeTypesDetails.entries()) {

        if (
            nativeDetails.kind === StNativeTypeKind.UnsignedInteger &&
            nativeDetails.size === size
        ) {
            return code;
        }
    }

    throw Error(`Unsupported unsigned integer size ${size}`);
}