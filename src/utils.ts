import { Position, Range } from "vscode";
import { StSymbol } from "./core.js";
import { ParserRuleContext } from "antlr4ng";

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

export function findSymbolAtPosition(symbol: StSymbol, position: Position): StSymbol | undefined {

    // const start = symbol.range.start;
    // const end = symbol.range.end;

    // const startsBefore =
    //     start.line < position.line ||
    //     (start.line === position.line && start.character <= position.character);

    // const endsAfter =
    //     end.line > position.line ||
    //     (end.line === position.line && end.character >= position.character);

    // if (startsBefore && endsAfter) {
        
    //     if (symbol.children) {
            
    //         for (const child of symbol.children) {
    //             const found = findSymbolAtPosition(child, position);

    //             if (found)
    //                 return found;
    //         }
    //     }

    //     return symbol;
    // }

    return undefined;
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