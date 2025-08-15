import { Temporal } from "temporal-polyfill";
import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { convertToPlatformSpecificTypeText, EPOCH } from "../../core/utils.js";

const MIN_DATE_AND_TIME = Temporal.PlainDateTime.from({
    year: 1970,
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    nanosecond: 0
});

const MAX_DATE_AND_TIME = Temporal.PlainDateTime.from({
    year: 2106,
    month: 2,
    day: 7,
    hour: 6,
    minute: 28,
    second: 15,
    nanosecond: 0
});

const MIN_LDATE_AND_TIME = Temporal.PlainDateTime.from({
    year: 1970,
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    microsecond: 0,
    nanosecond: 0
});

const MAX_LDATE_AND_TIME = Temporal.PlainDateTime.from({
    year: 2554,
    month: 7,
    day: 21,
    hour: 23,
    minute: 34,
    second: 33,
    millisecond: 709,
    microsecond: 551,
    nanosecond: 615
});

export function evaluateDateAndTimeLiteral(
    prefix: string,
    dateAndTime: string
): [StType | undefined, string | undefined] {
    
    const lhsBuiltinType = convertToPlatformSpecificTypeText(prefix) as StBuiltinTypeCode;
    const dateAndTimeParts = dateAndTime.split("-");

    const year = Number.parseInt(dateAndTimeParts[0]);
    const month = Number.parseInt(dateAndTimeParts[1]);
    const day = Number.parseInt(dateAndTimeParts[2]);

    const hoursAndMoreParts = dateAndTimeParts[3].split(":");

    const hour = Number.parseInt(hoursAndMoreParts[0]);
    const minute = Number.parseInt(hoursAndMoreParts[1]);

    const secondAndMoreParts = (hoursAndMoreParts[2] ?? "").split(".");

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

    let dateAndTimeValue: Temporal.PlainDateTime;

    try {
        dateAndTimeValue = Temporal.PlainDateTime.from({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond,
            microsecond,
            nanosecond
        });

        if (
            dateAndTimeValue.year !== year ||
            dateAndTimeValue.month !== month ||
            dateAndTimeValue.day !== day ||
            dateAndTimeValue.hour !== hour ||
            dateAndTimeValue.minute !== minute ||
            dateAndTimeValue.second !== second ||
            dateAndTimeValue.millisecond !== millisecond ||
            dateAndTimeValue.microsecond !== microsecond ||
            dateAndTimeValue.nanosecond !== nanosecond
        ) {
            return [undefined, lhsBuiltinType];
        }
    } catch {
        return [undefined, lhsBuiltinType];
    }

    let choosenType: StBuiltinTypeCode | undefined;
    let value: bigint;

    switch (lhsBuiltinType) {
        
        case StBuiltinTypeCode.DATE_AND_TIME:

            if (
                Temporal.PlainDateTime.compare(MIN_DATE_AND_TIME, dateAndTimeValue) <= 0 &&
                Temporal.PlainDateTime.compare(dateAndTimeValue, MAX_DATE_AND_TIME) <= 0
            ) {
                choosenType = StBuiltinTypeCode.DATE_AND_TIME;
                value = BigInt(dateAndTimeValue.since(EPOCH).total("seconds"));
            }
            
            else {
                return [undefined, lhsBuiltinType];
            }

            break;
        
        case StBuiltinTypeCode.LDATE_AND_TIME:

            if (
                Temporal.PlainDateTime.compare(MIN_LDATE_AND_TIME, dateAndTimeValue) <= 0 &&
                Temporal.PlainDateTime.compare(dateAndTimeValue, MAX_LDATE_AND_TIME) <= 0
            ) {
                choosenType = StBuiltinTypeCode.LDATE_AND_TIME;
                value = BigInt(dateAndTimeValue.since(EPOCH).total("nanoseconds"));
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
    type.builtinType.value = value;

    return [type, undefined];
}