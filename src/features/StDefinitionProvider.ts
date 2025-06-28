import { CancellationToken, Definition, DefinitionProvider, Location, Position, ProviderResult, TextDocument } from "vscode";
import { SourceFile, StSymbolKind } from "../core.js";
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
        const foundSymbol = Array.from(sourceFile.symbolMap.values())
            .map(symbol => findSymbolAtPosition(symbol, position))
            .find(x => x !== undefined);

        if (foundSymbol?.declaration) {
    
            switch (foundSymbol.kind) {
                case StSymbolKind.TypeUsage:
                case StSymbolKind.Variable:
                case StSymbolKind.VariableUsage:
                case StSymbolKind.MethodOrFunctionCall:

                    const declaringSymbol = foundSymbol.declaration;

                    return new Location(
                        declaringSymbol.documentUri,
                        declaringSymbol.selectionRange ?? declaringSymbol.range
                    );
            }
        }
    }
}