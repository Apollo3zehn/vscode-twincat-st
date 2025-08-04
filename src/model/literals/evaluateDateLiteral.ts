import { DateTime } from "luxon";
import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { isDateInRange } from "../../core/utils.js";
import { C0001 } from "../diagnostics.js";

export function evaluateDateLiteral(
    literal: LiteralContext
): StType | undefined {
    
    const dateLiteral = literal.dateLiteral()!;
    const requestedType = dateLiteral._prefix?.text as StBuiltinTypeCode;
    const dateParts = dateLiteral._date!.text!.split("-");

    const year = Number.parseInt(dateParts[0]);
    const month = Number.parseInt(dateParts[1]);
    const day = Number.parseInt(dateParts[2]);
    const dateTime = DateTime.fromObject({ year, month, day });

    if (!dateTime.isValid) {
        C0001(literal, StBuiltinTypeCode[requestedType]);
        return undefined;
    }

    let choosenType: StBuiltinTypeCode | undefined;

    switch (requestedType) {
        
        case StBuiltinTypeCode.DATE:

            if (
                isDateInRange(
                    year, month, day,
                    1970, 1, 1,
                    2106, 2, 7
                )
            ) {
                choosenType = StBuiltinTypeCode.DATE;
            }

            else {
                C0001(literal, StBuiltinTypeCode[requestedType]);
                return undefined;
            }

            break;
        
        case StBuiltinTypeCode.LDATE:

            if (
                isDateInRange(
                    year, month, day,
                    1970, 1, 1,
                    2554, 7, 21
                )
            ) {
                choosenType = StBuiltinTypeCode.LDATE;
            }

            else {
                C0001(literal, StBuiltinTypeCode[requestedType]);
                return undefined;
            }

            break;
        
        default:
            return undefined;
    }

    const type = new StType();
    type.builtinType = new StBuiltinType(choosenType);

    return type;
}