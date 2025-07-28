import { DateTime } from "luxon";
import { StBuiltinType, StSourceFile, StType } from "../../core/types.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { isTimeOfDayInRange } from "../../core/utils.js";
import { C0001 } from "../diagnostics.js";

export function evaluateTimeOfDayLiteral(
    literal: LiteralContext,
    sourceFile: StSourceFile,
): StType | undefined {
    
    const timeOfDayLiteral = literal.timeOfDayLiteral()!;
    const requestedType = timeOfDayLiteral._prefix?.text as StBuiltinType;
    const timeOfDayParts = timeOfDayLiteral._timeOfDay!.text!.split(":");

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

    if (!dateTime.isValid) {
        C0001(literal, StBuiltinType[requestedType], sourceFile);
        return undefined;
    }

    let choosenType: StBuiltinType | undefined;

    switch (requestedType) {
        
        case StBuiltinType.TIME_OF_DAY:
        case StBuiltinType.TOD:

            if (
                isTimeOfDayInRange(
                    hour, minute, second, millisecond,
                    23, 59, 59, 999
                )
            ) {
                choosenType = StBuiltinType.TIME_OF_DAY;
            }

            else {
                C0001(literal, StBuiltinType[requestedType], sourceFile);
                return undefined;
            }

            break;
        
        case StBuiltinType.LTIME_OF_DAY:
        case StBuiltinType.LTOD:

            if (
                isTimeOfDayInRange(
                    hour, minute, second, millisecond,
                    23, 59, 59, 999.999999
                )
            ) {
                choosenType = StBuiltinType.LTIME_OF_DAY;
            }

            else {
                C0001(literal, StBuiltinType[requestedType], sourceFile);
                return undefined;
            }

            break;
        
        default:
            return undefined;
    }

    const type = new StType();
    type.builtinType = choosenType;

    return type;
}