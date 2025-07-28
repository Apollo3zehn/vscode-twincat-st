import { CancellationToken, Definition, DefinitionProvider, Location, Position, ProviderResult, TextDocument } from "vscode";
import { StModel, StSymbolKind } from "../core/types.js";
import { isInRange } from "../core/utils.js";

export class StDefinitionProvider implements DefinitionProvider {

    private _model: StModel;

    constructor(model: StModel) {
        this._model = model;
    }

    public provideDefinition(
        document: TextDocument,
        position: Position,
        token: CancellationToken
    ): ProviderResult<Definition> {

        // Find the source file
        const sourceFile = this._model.sourceFileMap.get(document.uri.toString());

        if (!sourceFile)
            return;

        // Find the symbol
        const foundSymbol = Array.from(sourceFile.symbolMap.values())
            .find(symbol => isInRange(symbol.selectionRange, position));

        if (foundSymbol?.declaration) {
    
            switch (foundSymbol.kind) {
                case StSymbolKind.TypeUsage:
                case StSymbolKind.VariableDeclaration:
                case StSymbolKind.VariableUsage:

                    const declaringSymbol = foundSymbol.declaration;

                    return new Location(
                        declaringSymbol.documentUri,
                        declaringSymbol.selectionRange ?? declaringSymbol.range
                    );
            }
        }
    }
}