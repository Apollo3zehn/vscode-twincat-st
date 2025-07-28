import { StBuiltinType, StSourceFile, StType } from "../../core/types.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { findOverflowComponent, isTimeInRange, TIME_COMPONENTS } from "../../core/utils.js";
import { C0001 } from "../diagnostics.js";

export function evaluateTimeLiteral(
    literal: LiteralContext,
    sourceFile: StSourceFile,
): StType | undefined {
    
    const timeLiteral = literal.TIME_LITERAL()!;
    const timeText = timeLiteral.getText().split('#')[1];

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
    const hasOverflow = findOverflowComponent(index)

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
        type.builtinType = StBuiltinType.TIME;
        return type;
    }
    
    else {
        C0001(literal, StBuiltinType.TIME, sourceFile);
        return undefined;
    }
}