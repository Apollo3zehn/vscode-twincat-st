import { Temporal } from "temporal-polyfill";
import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { convertToPlatformSpecificTypeText } from "../../core/utils.js";

const MIN_TIME_OF_DAY = Temporal.PlainTime.from({
    hour: 0,
    minute: 0,
    second: 0,
    nanosecond: 0
});

const MAX_TIME_OF_DAY = Temporal.PlainTime.from({
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 999
});

const MIN_LTIME_OF_DAY = Temporal.PlainTime.from({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    microsecond: 0,
    nanosecond: 0
});

const MAX_LTIME_OF_DAY = Temporal.PlainTime.from({
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 999,
    microsecond: 999,
    nanosecond: 999
});

export function evaluateTimeOfDayLiteral(
    prefix: string,
    timeOfDay: string
): [StType | undefined, string | undefined] {
    
    const lhsBuiltinType = convertToPlatformSpecificTypeText(prefix) as StBuiltinTypeCode;
    const timeOfDayParts = timeOfDay.split(":");

    const hour = Number.parseInt(timeOfDayParts[0]);
    const minute = Number.parseInt(timeOfDayParts[1]);
    const secondAndMoreParts = (timeOfDayParts[2] ?? "").split(".");
    const secondRaw = Number.parseInt(secondAndMoreParts[0]);
    const second = Number.isNaN(secondRaw) ? 0 : secondRaw;
    const fractionalRaw = secondAndMoreParts[1];

    let nanosecondTotal = 0;
    let millisecond = 0;
    let microsecond = 0;
    let nanosecond = 0;

    if (fractionalRaw) {

        let nanosecondString = fractionalRaw.padEnd(9, "0").slice(0, 9);

        nanosecondTotal = Number.parseInt(nanosecondString, 10);
        millisecond = Math.floor(nanosecondTotal / 1e6);
        microsecond = Math.floor((nanosecondTotal % 1e6) / 1e3);
        nanosecond = nanosecondTotal % 1e3;
    }

    let timeValue: Temporal.PlainTime;

    try {
        timeValue = Temporal.PlainTime.from({
            hour,
            minute,
            second,
            millisecond,
            microsecond,
            nanosecond
        });

        if (
            timeValue.hour !== hour ||
            timeValue.minute !== minute ||
            timeValue.second !== second ||
            timeValue.millisecond !== millisecond ||
            timeValue.microsecond !== microsecond ||
            timeValue.nanosecond !== nanosecond
        ) {
            return [undefined, lhsBuiltinType];
        }
    } catch {
        return [undefined, lhsBuiltinType];
    }

    let choosenType: StBuiltinTypeCode | undefined;

    switch (lhsBuiltinType) {

        case StBuiltinTypeCode.TIME_OF_DAY:
        
            if (
                Temporal.PlainTime.compare(MIN_TIME_OF_DAY, timeValue) <= 0 &&
                Temporal.PlainTime.compare(timeValue, MAX_TIME_OF_DAY) <= 0
            ) {
                choosenType = StBuiltinTypeCode.TIME_OF_DAY;
            }
                
            else {
                return [undefined, lhsBuiltinType];
            }

            break;
        
        case StBuiltinTypeCode.LTIME_OF_DAY:

            if (
                Temporal.PlainTime.compare(MIN_LTIME_OF_DAY, timeValue) <= 0 &&
                Temporal.PlainTime.compare(timeValue, MAX_LTIME_OF_DAY) <= 0
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