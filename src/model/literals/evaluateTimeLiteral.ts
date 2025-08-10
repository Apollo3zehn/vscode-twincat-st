import { Temporal } from "temporal-polyfill";
import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { findOverflowComponent, TIME_COMPONENTS } from "../../core/utils.js";

const MIN_TIME_MS = Temporal.Duration.from({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
}).total("milliseconds");

const MAX_TIME_MS = Temporal.Duration.from({
    days: 49,
    hours: 17,
    minutes: 2,
    seconds: 47,
    milliseconds: 295
}).total("milliseconds");

export function evaluateTimeLiteral(
    literal: string
): [StType | undefined, string | undefined] {
    
    const timeText = literal.split('#')[1];

    // Regex to extract D, H, M, S, MS values
    const timeRegex = /(?:([0-9_]+)D)?(?:([0-9_]+)H)?(?:([0-9_]+)M)?(?:([0-9_]+)S)?(?:([0-9_]+)MS)?/;
    const match = timeText.match(timeRegex)!;

    for (let i = 0; i < 5; ++i) {
        TIME_COMPONENTS[i].value = match[i + 1] ? Number.parseInt(match[i + 1]) : 0;
    }

    TIME_COMPONENTS[5].value = 0; // microseconds
    TIME_COMPONENTS[6].value = 0; // nanoseconds

    let time: Temporal.Duration;

    try {
        time = Temporal.Duration.from({
            days: TIME_COMPONENTS[0].value,
            hours: TIME_COMPONENTS[1].value,
            minutes: TIME_COMPONENTS[2].value,
            seconds: TIME_COMPONENTS[3].value,
            milliseconds: TIME_COMPONENTS[4].value,
        });
    } catch {
        return [undefined, StBuiltinTypeCode.TIME];
    }

    // Find index of first overflowing component
    const index = match.slice(1).findIndex(x => x);
    const hasOverflow = findOverflowComponent(index);

    // Validate
    const timeInMilliseconds = BigInt(time.total("milliseconds"));

    if (
        !hasOverflow &&
        MIN_TIME_MS <= timeInMilliseconds &&
        timeInMilliseconds <= MAX_TIME_MS
    ) {
        const type = new StType();
        type.builtinType = new StBuiltinType(StBuiltinTypeCode.TIME);
        type.builtinType.value = timeInMilliseconds;

        return [type, undefined];
    }
    
    else {
        return [undefined, StBuiltinTypeCode.TIME];
    }
}