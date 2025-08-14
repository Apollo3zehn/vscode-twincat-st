import { Temporal } from "temporal-polyfill";
import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { findOverflowComponent, TIME_COMPONENTS } from "../../core/utils.js";

const MIN_TIME_MS = 0n;

const MAX_TIME_MS = (
    49n * 24n * 60n * 60n * 1000n + // days to ms
    17n * 60n * 60n * 1000n +       // hours to ms
    2n  * 60n * 1000n +             // minutes to ms
    47n * 1000n +                   // seconds to ms
    295n                            // milliseconds
);

export function evaluateTimeLiteral(
    literal: string
): [StType | undefined, string | undefined] {
    
    let timeText = literal.split('#')[1];
    timeText = timeText.replace("MS", "Z"); // Workaround to make regex recognition unambiguous

    // Regex to extract D, H, M, S, MS values
    const timeRegex = /(?:([0-9_]+)D)?(?:([0-9_]+)H)?(?:([0-9_]+)M)?(?:([0-9_]+)S)?(?:([0-9_]+)Z)?/;
    const match = timeText.match(timeRegex)!;

    for (let i = 0; i < 5; ++i) {
        TIME_COMPONENTS[i].value = match[i + 1] ? Number.parseInt(match[i + 1]) : 0;
    }

    TIME_COMPONENTS[5].value = 0; // microseconds
    TIME_COMPONENTS[6].value = 0; // nanoseconds

    const timeInMilliseconds =
        BigInt(TIME_COMPONENTS[0].value) * 24n * 60n * 60n * 1000n +    // days
        BigInt(TIME_COMPONENTS[1].value) * 60n * 60n * 1000n +          // hours
        BigInt(TIME_COMPONENTS[2].value) * 60n * 1000n +                // minutes
        BigInt(TIME_COMPONENTS[3].value) * 1000n +                      // seconds
        BigInt(TIME_COMPONENTS[4].value);                               // milliseconds

    // Find index of first overflowing component
    const index = match.slice(1).findIndex(x => x);
    const hasOverflow = findOverflowComponent(index);

    // Validate
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