import { DateTime } from "luxon";
import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { isDateAndTimeInRange } from "../../core/utils.js";
import { C0001 } from "../diagnostics.js";

export function evaluateDateAndTimeLiteral(
    literal: LiteralContext
): StType | undefined {
    
    const dateAndTimeLiteral = literal.dateAndTimeLiteral()!;
    const requestedType = dateAndTimeLiteral._prefix?.text as StBuiltinTypeCode;
    const dateAndTimeParts = dateAndTimeLiteral._dateAndTime!.text!.split("-");

    const year = Number.parseInt(dateAndTimeParts[0]);
    const month = Number.parseInt(dateAndTimeParts[1]);
    const day = Number.parseInt(dateAndTimeParts[2]);

    const hoursAndMoreParts = dateAndTimeParts[3].split(":");

    const hour = Number.parseInt(hoursAndMoreParts[0]);
    const minute = Number.parseInt(hoursAndMoreParts[1]);

    const secondAndMoreParts = (hoursAndMoreParts[2] ?? "").split(".");

    const secondRaw = Number.parseInt(secondAndMoreParts[0]);
    const second = Number.isNaN(secondRaw) ? 0 : secondRaw;
    const millisecondRaw = Number.parseInt(secondAndMoreParts[1]);

    let millisecond = Number.isNaN(millisecondRaw) ? 0 : millisecondRaw;
    let millisecond_rounded = millisecond;

    if (millisecond > 999) {
        // If input is e.g. 999999999 (nanoseconds), convert to 999.999999 ms
        millisecond = millisecond / Math.pow(10, millisecond.toString().length - 3);
        millisecond_rounded = 999;
    }

    const dateTime = DateTime.fromObject({
        day,
        month,
        year,
        hour,
        minute,
        second,
        millisecond: millisecond_rounded
    });

    if (!dateTime.isValid) {
        C0001(literal, StBuiltinTypeCode[requestedType]);
        return undefined;
    }

    let choosenType: StBuiltinTypeCode | undefined;

    switch (requestedType) {
        
        case StBuiltinTypeCode.DATE_AND_TIME:

            if (
                isDateAndTimeInRange(
                    year, month, day, hour, minute, second, millisecond,
                    1970, 1, 1, 0, 0, 0, 0,
                    2106, 2, 7, 6, 28, 15, 0,
                )
            ) {
                choosenType = StBuiltinTypeCode.DATE_AND_TIME;
            }

            else {
                C0001(literal, StBuiltinTypeCode[requestedType]);
                return undefined;
            }

            break;
        
        case StBuiltinTypeCode.LDATE_AND_TIME:

            if (
                isDateAndTimeInRange(
                    year, month, day, hour, minute, second, millisecond,
                    1970, 1, 1, 0, 0, 0, 0,
                    2554, 7, 21, 23, 34, 33, 709.551615
                )
            ) {
                choosenType = StBuiltinTypeCode.LDATE_AND_TIME;
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