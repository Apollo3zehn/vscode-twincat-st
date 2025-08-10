import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { findOverflowComponent, TIME_COMPONENTS } from "../../core/utils.js";
import { Temporal } from "temporal-polyfill";

const MIN_LTIME = Temporal.Duration.from({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    microseconds: 0,
    nanoseconds: 0
}).total("nanoseconds");

const MAX_LTIME = Temporal.Duration.from({
    days: 213503,
    hours: 23,
    minutes: 34,
    seconds: 33,
    milliseconds: 709,
    microseconds: 551,
    nanoseconds: 615
}).total("nanoseconds");

export function evaluateLTimeLiteral(
    literal: string
): [StType | undefined, string | undefined] {
    
    const ltimeText = literal.split('#')[1];

    // Regex to extract D, H, M, S, MS, US, NS values
    const ltimeRegex = /(?:([0-9_]+)D)?(?:([0-9_]+)H)?(?:([0-9_]+)M)?(?:([0-9_]+)S)?(?:([0-9_]+)MS)?(?:([0-9_]+)US)?(?:([0-9_]+)NS)?/;
    const match = ltimeText.match(ltimeRegex)!;

    for (let i = 0; i < 7; ++i) {
        TIME_COMPONENTS[i].value = match[i + 1] ? Number.parseInt(match[i + 1]) : 0;
    }

    let ltime: Temporal.Duration;

    try {
        ltime = Temporal.Duration.from({
            days: TIME_COMPONENTS[0].value,
            hours: TIME_COMPONENTS[1].value,
            minutes: TIME_COMPONENTS[2].value,
            seconds: TIME_COMPONENTS[3].value,
            milliseconds: TIME_COMPONENTS[4].value,
            microseconds: TIME_COMPONENTS[5].value,
            nanoseconds: TIME_COMPONENTS[6].value,
        });
    } catch {
        return [undefined, StBuiltinTypeCode.TIME];
    }

    // Find index of first overflowing component
    const index = match.slice(1).findIndex(x => x);
    const hasOverflow = findOverflowComponent(index);

    // Validate
    const ltimeInNanoseconds = ltime.total("nanosecond");

    if (!hasOverflow &&
        MIN_LTIME <= ltimeInNanoseconds &&
        ltimeInNanoseconds <= MAX_LTIME
    ) {
        const type = new StType();
        type.builtinType = new StBuiltinType(StBuiltinTypeCode.LTIME);

        return [type, undefined];
    }
    
    else {
        return [undefined, StBuiltinTypeCode.LTIME];
    }
}