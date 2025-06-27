import { CancellationToken, Definition, DefinitionProvider, Location, Position, ProviderResult, TextDocument } from "vscode";
import { SourceFile, StSymbol, StSymbolKind } from "../core.js";
import { findSymbolAtPosition } from "../utils.js";

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

            foundSymbol = findSymbolAtPosition(symbol, position);

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
}