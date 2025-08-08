import { nativeTypesDetails, StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";

export function evaluateRealLiteral(
    literal: string
): [StType | undefined, string | undefined] {
    
    const splittedText = literal.split('#');

    let lhsTypeCode: StBuiltinTypeCode | undefined;
    let value: number;

    /* Important: Do not convert type to uppercase
        * first because TwinCAT requires the input string 
        * to be uppercase, otherwise it is a syntax error.
        */
    if (splittedText.length === 2)
        lhsTypeCode = splittedText[0] as StBuiltinTypeCode;

    value = parseFloat(splittedText[splittedText.length - 1].replaceAll("_", ""));

    let rhsTypeCode: StBuiltinTypeCode;

    // https://infosys.beckhoff.com/english.php?content=../content/1033/tc3_plc_intro/2529405067.html&id=

    if (value < 0) {

        if (-value >= -3.402823e+38)
            rhsTypeCode = StBuiltinTypeCode.REAL;

        else if (-value >= -1.7976931348623158e+308)
            rhsTypeCode = StBuiltinTypeCode.LREAL;
            
        else {
            return [
                undefined,
                lhsTypeCode ?? "ANY_REAL"
            ];
        }
    }

    else {

        if (value <= 3.402823e+38)
            rhsTypeCode = StBuiltinTypeCode.REAL;

        else if (value <= 1.7976931348623158e+308)
            rhsTypeCode = StBuiltinTypeCode.LREAL;
                                
        else {
            return [
                undefined,
                lhsTypeCode ?? "ANY_REAL"
            ];
        }
    }

    let choosenType: StBuiltinTypeCode | undefined = rhsTypeCode;
    
    if (lhsTypeCode) {

        const lhsTypeDetails = nativeTypesDetails.get(lhsTypeCode);
        const rhsTypeDetails = nativeTypesDetails.get(rhsTypeCode);

        if (
            lhsTypeDetails &&
            rhsTypeDetails &&
            lhsTypeDetails.max! < rhsTypeDetails.max!
        ) {
            return [undefined, lhsTypeCode];
        }

        else {
            choosenType = lhsTypeCode;
        }
    }

    else {
        choosenType = StBuiltinTypeCode.LREAL;
    }

    const type = new StType();
    type.builtinType = new StBuiltinType(choosenType);
    type.builtinType.value = value;

    return [type, undefined];
}