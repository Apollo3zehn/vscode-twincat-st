import { nativeTypesDetails, StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { C0001 } from "../diagnostics.js";

export function evaluateRealNumber(
    literal: LiteralContext
): StType | undefined {
    
    const realLiteral = literal.REAL_LITERAL()!;
    let text = realLiteral.getText();

    const splittedText = text.split('#');

    let lhsTypeCode: StBuiltinTypeCode | undefined;
    let value: number;

    /* Important: Do not convert type to uppercase
        * first because TwinCAT requires the input string 
        * to be uppercase, otherwise it is a syntax error.
        */
    if (splittedText.length === 2)
        lhsTypeCode = splittedText[0] as StBuiltinTypeCode;

    value = parseFloat(splittedText[splittedText.length - 1]);

    let rhsTypeCode: StBuiltinTypeCode;

    // https://infosys.beckhoff.com/english.php?content=../content/1033/tc3_plc_intro/2529405067.html&id=

    if (value < 0) {

        if (-value >= -3.402823e+38)
            rhsTypeCode = StBuiltinTypeCode.REAL;

        else if (-value >= -1.7976931348623158e+308)
            rhsTypeCode = StBuiltinTypeCode.LREAL;
            
        else {
            
            if (lhsTypeCode)
                C0001(literal, StBuiltinTypeCode[lhsTypeCode]);

            else
                C0001(literal, "ANY_REAL");

            return undefined;
        }
    }

    else {

        if (value <= 3.402823e+38)
            rhsTypeCode = StBuiltinTypeCode.REAL;

        else if (value <= 1.7976931348623158e+308)
            rhsTypeCode = StBuiltinTypeCode.LREAL;
                                
        else {
            
            if (lhsTypeCode)
                C0001(literal, StBuiltinTypeCode[lhsTypeCode]);

            else
                C0001(literal, "ANY_REAL");

            return undefined;
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
            C0001(literal, StBuiltinTypeCode[lhsTypeCode]);
            return undefined;
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

    return type;
}