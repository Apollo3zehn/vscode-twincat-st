import { CancellationToken, Definition, DefinitionProvider, Location, Position, ProviderResult, TextDocument } from "vscode";
import { SourceFile, StSymbol, StSymbolKind } from "../core.js";

export class StDefinitionProvider implements DefinitionProvider {

    private _model: Map<string, SourceFile>;

    constructor(model: Map<string, SourceFile>) {
        this._model = model;
    }

    public provideDefinition(
        document: TextDocument,
        position: Position,
        token: CancellationToken
    ): ProviderResult<Definition> {

        // Find the source file
        const sourceFile = this._model.get(document.uri.toString());

        if (!sourceFile)
            return;

        // Find the symbol
        let foundSymbol: StSymbol | undefined;

        for (const symbol of sourceFile.symbolMap.values()) {

            foundSymbol = this.findChildOrSelf(symbol, position);

            if (foundSymbol)
                break;
        }

        if (
            (foundSymbol?.kind == StSymbolKind.VariableUsage || foundSymbol?.kind == StSymbolKind.MethodOrFunctionCall) &&
            foundSymbol.declaringSymbol
        ) {
            const declaringSymbol = foundSymbol.declaringSymbol;

            return new Location(
                declaringSymbol.documentUri,
                declaringSymbol.selectionRange ?? declaringSymbol.range
            );
        }

        return;
    }

    private findChildOrSelf(symbol: StSymbol, position: Position): StSymbol | undefined {

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

                    const found = this.findChildOrSelf(child, position);

                    if (found)
                        return found;
                }
            }

            return symbol;
        }

        return undefined;
    }
}