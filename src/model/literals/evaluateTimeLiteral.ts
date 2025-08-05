import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { findOverflowComponent, isTimeInRange, TIME_COMPONENTS } from "../../core/utils.js";

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

    // Find index of first overflowing component
    const index = match.slice(1).findIndex(x => x);
    const hasOverflow = findOverflowComponent(index);

    // Validate
    if (
        !hasOverflow &&
        isTimeInRange(
            TIME_COMPONENTS[0].value,
            TIME_COMPONENTS[1].value,
            TIME_COMPONENTS[2].value,
            TIME_COMPONENTS[3].value,
            TIME_COMPONENTS[4].value,
            TIME_COMPONENTS[5].value,
            TIME_COMPONENTS[6].value,
            49, 17, 2, 47, 295, 0, 0
        )
    ) {
        const type = new StType();
        type.builtinType = new StBuiltinType(StBuiltinTypeCode.TIME);

        return [type, undefined];
    }
    
    else {
        return [undefined, StBuiltinTypeCode.TIME];
    }
}