import { ParserRuleContext, Token, Interval } from "antlr4ng";
import { Position, Range } from "vscode";
import { StBuiltinType, StSourceFile, StSymbol, StSymbolKind, StType } from "./core.js";
import { AssignmentContext, ExprContext } from "./generated/StructuredTextParser.js";

export function isInRange(range: Range | undefined, position: Position): boolean {
    
    const isOutOfRange = (
        !range ||
        position.line < range.start.line ||
        position.line > range.end.line ||
        (position.line === range.start.line && position.character < range.start.character) ||
        (position.line === range.end.line && position.character > range.end.character)
    );

    return !isOutOfRange;
}

export function findContextAtPosition(ctx: ParserRuleContext, position: Position): ParserRuleContext | undefined {

    const start = ctx.start;
    const stop = ctx.stop ?? ctx.start;

    if (!start || !stop) {
        return undefined;
    }

    const startsBefore =
        start.line - 1 < position.line ||
        (start.line - 1 === position.line && start.column <= position.character);

    const endsAfter =
        stop.line - 1 > position.line ||
        (stop.line - 1 === position.line && (stop.column + (stop.text?.length ?? 1)) >= position.character);

    if (startsBefore && endsAfter)
        return ctx;

    return undefined;
}

export function getTokenRange(token: Token | undefined): Range | undefined {

    if (!token)
        return undefined;

    return new Range(
        token.line - 1,
        token.column,
        token.line - 1,
        token.column + token.stop - token.start + 1
    );
}

export function getContextRange(ctx: ParserRuleContext | null | undefined): Range | undefined {

    if (!ctx)
        return undefined;

    const start = ctx.start!;
    const stop = ctx.stop!;

    return new Range(
        start.line - 1,
        start.column,
        stop.line - 1,
        stop.column + stop.stop - stop.start + 1
    );
}

export function getOriginalText(ctx: ParserRuleContext): string | undefined {

    const start = ctx.start?.start;
    const stop = ctx.stop?.stop ?? ctx.start?.stop;

    if (ctx.start?.inputStream && start && stop)
        return ctx.start.inputStream.getTextFromInterval(Interval.of(start, stop));

    return undefined;
}

export function getTypeOfType(kind: StSymbolKind): string {
    switch (kind) {
        case StSymbolKind.FunctionBlock: return "FUNCTION_BLOCK";
        case StSymbolKind.Gvl: return "VAR_GLOBAL";
        case StSymbolKind.Enum: return "ENUM";
        case StSymbolKind.Struct: return "STRUCT";
        case StSymbolKind.Program: return "PROGRAM";
        case StSymbolKind.Alias: return "ALIAS";
        case StSymbolKind.Function: return "FUNCTION";
        case StSymbolKind.Method: return "METHOD";
        case StSymbolKind.Property: return "PROPERTY";
        case StSymbolKind.VariableDeclaration: return "VARIABLE";
        case StSymbolKind.EnumMember: return "ENUM_MEMBER";
        default: return "UNKNOWN";
    }
}