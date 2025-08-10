import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { findOverflowComponent, TIME_COMPONENTS } from "../../core/utils.js";

const MIN_LTIME_NS = 0n;

const MAX_LTIME_NS = (
    213503n * 24n * 60n * 60n * 1_000_000_000n +    // days to nanoseconds
    23n     * 60n * 60n * 1_000_000_000n +          // hours to nanoseconds
    34n     * 60n * 1_000_000_000n +                // minutes to nanoseconds
    33n     * 1_000_000_000n +                      // seconds to nanoseconds
    709n    * 1_000_000n +                          // milliseconds to nanoseconds
    551n    * 1_000n +                              // microseconds to nanoseconds
    615n                                            // nanoseconds
);

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

    const ltimeInNanoseconds =
        BigInt(TIME_COMPONENTS[0].value) * 24n * 60n * 60n * 1_000_000_000n + // days
        BigInt(TIME_COMPONENTS[1].value) * 60n * 60n * 1_000_000_000n +       // hours
        BigInt(TIME_COMPONENTS[2].value) * 60n * 1_000_000_000n +            // minutes
        BigInt(TIME_COMPONENTS[3].value) * 1_000_000_000n +                  // seconds
        BigInt(TIME_COMPONENTS[4].value) * 1_000_000n +                      // milliseconds
        BigInt(TIME_COMPONENTS[5].value) * 1_000n +                          // microseconds
        BigInt(TIME_COMPONENTS[6].value);                                    // nanoseconds

    // Find index of first overflowing component
    const index = match.slice(1).findIndex(x => x);
    const hasOverflow = findOverflowComponent(index);

    // Validate
    if (!hasOverflow &&
        MIN_LTIME_NS <= ltimeInNanoseconds &&
        ltimeInNanoseconds <= MAX_LTIME_NS
    ) {
        const type = new StType();
        type.builtinType = new StBuiltinType(StBuiltinTypeCode.LTIME);
        type.builtinType.value = ltimeInNanoseconds;

        return [type, undefined];
    }

    else {
        return [undefined, StBuiltinTypeCode.LTIME];
    }
}