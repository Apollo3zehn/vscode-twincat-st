import { CancellationToken, Location, Position, ProviderResult, ReferenceContext, ReferenceProvider, TextDocument } from "vscode";
import { SourceFile } from "../core.js";
import { findSymbolAtPosition } from "../utils.js";

export class StReferenceProvider implements ReferenceProvider {

    private _model: Map<string, SourceFile>;

    constructor(model: Map<string, SourceFile>) {
        this._model = model;
    }

    provideReferences(
        document: TextDocument,
        position: Position,
        context: ReferenceContext,
        token: CancellationToken
    ): ProviderResult<Location[]> {

        const sourceFile = this._model.get(document.uri.toString());

        if (!sourceFile)
            return;

        // Find the symbol at the given position
        const foundSymbol = Array.from(sourceFile.symbolMap.values())
            .map(symbol => findSymbolAtPosition(symbol, position))
            .find(s => s !== undefined);
       
        if (foundSymbol) {

            // Ensure we really hit the selection range
            const range = foundSymbol.selectionRange;

            if (
                !range ||
                position.line < range.start.line ||
                position.line > range.end.line ||
                (position.line === range.start.line && position.character < range.start.character) ||
                (position.line === range.end.line && position.character > range.end.character)
            ) {
                return;
            }

            const declaringSymbol = foundSymbol.declaration ?? foundSymbol;
            const locations: Location[] = [];

            if (declaringSymbol.references) {

                for (const referencingSymbol of declaringSymbol.references) {

                    locations.push(
                        new Location(
                            referencingSymbol.documentUri,
                            referencingSymbol.selectionRange ?? referencingSymbol.range
                        )
                    );
                }
            }

            if (context.includeDeclaration) {

                locations.unshift(
                    new Location(
                        declaringSymbol.documentUri,
                        declaringSymbol.selectionRange ?? declaringSymbol.range
                    )
                );
            }

            return locations;
        }

        return;
    }
}