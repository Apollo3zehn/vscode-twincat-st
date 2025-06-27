import { Position } from "vscode";
import { StSymbol } from "./core.js";

/**
 * Recursively finds the most specific StSymbol at the given position.
 */
export function findSymbolAtPosition(symbol: StSymbol, position: Position): StSymbol | undefined {

    const start = symbol.range.start;
    const end = symbol.range.end;

    const startsBefore =
        start.line < position.line ||
        (start.line === position.line && start.character <= position.character);

    const endsAfter =
        end.line > position.line ||
        (end.line === position.line && end.character >= position.character);

    if (startsBefore && endsAfter) {
        
        if (symbol.children) {
            for (const child of symbol.children) {
                const found = findSymbolAtPosition(child, position);
                if (found) return found;
            }
        }

        return symbol;
    }

    return undefined;
}