import { StBuiltinType, StSourceFile, StType } from "../../core.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { findOverflowComponent, isTimeInRange, TIME_COMPONENTS } from "../../utils.js";
import { C0001 } from "../diagnostics.js";

export function evaluateLTimeLiteral(
    literal: LiteralContext,
    sourceFile: StSourceFile,
): StType | undefined {
    
    const ltimeLiteral = literal.LTIME_LITERAL()!;
    const ltimeText = ltimeLiteral.getText().split('#')[1];

    // Regex to extract D, H, M, S, MS, US, NS values
    const ltimeRegex = /(?:([0-9_]+)D)?(?:([0-9_]+)H)?(?:([0-9_]+)M)?(?:([0-9_]+)S)?(?:([0-9_]+)MS)?(?:([0-9_]+)US)?(?:([0-9_]+)NS)?/;
    const match = ltimeText.match(ltimeRegex)!;

    for (let i = 0; i < 7; ++i) {
        TIME_COMPONENTS[i].value = match[i + 1] ? Number.parseInt(match[i + 1]) : 0;
    }

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
            213503, 23, 34, 33, 709, 551, 615
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