import { DateTime } from "luxon";
import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { isTimeOfDayInRange } from "../../core/utils.js";

export function evaluateTimeOfDayLiteral(
    prefix: string,
    timeOfDay: string
): [StType | undefined, string | undefined] {
    
    const lhsBuiltinType = prefix as StBuiltinTypeCode;
    const timeOfDayParts = timeOfDay.split(":");

    const hour = Number.parseInt(timeOfDayParts[0]);
    const minute = Number.parseInt(timeOfDayParts[1]);
    const secondAndMoreParts = (timeOfDayParts[2] ?? "").split(".");
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
        hour,
        minute,
        second,
        millisecond: millisecond_rounded
    });

    if (!dateTime.isValid)
        return [undefined, lhsBuiltinType];

    let choosenType: StBuiltinTypeCode | undefined;

    switch (lhsBuiltinType) {
        
        case StBuiltinTypeCode.TIME_OF_DAY:

            if (
                isTimeOfDayInRange(
                    hour, minute, second, millisecond,
                    23, 59, 59, 999
                )
            ) {
                choosenType = StBuiltinTypeCode.TIME_OF_DAY;
            }

            else {
                return [undefined, lhsBuiltinType];
            }

            break;
        
        case StBuiltinTypeCode.LTIME_OF_DAY:

            if (
                isTimeOfDayInRange(
                    hour, minute, second, millisecond,
                    23, 59, 59, 999.999999
                )
            ) {
                choosenType = StBuiltinTypeCode.LTIME_OF_DAY;
            }

            else {
                return [undefined, lhsBuiltinType];
            }

            break;
        
        default:
            return [undefined, lhsBuiltinType];
    }

    const type = new StType();
    type.builtinType = new StBuiltinType(choosenType);

    return [type, undefined];
}