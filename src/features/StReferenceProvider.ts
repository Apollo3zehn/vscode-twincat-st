import { CancellationToken, Location, Position, ProviderResult, ReferenceContext, ReferenceProvider, TextDocument } from "vscode";
import { StModel } from "../core.js";
import { isInRange } from "../utils.js";

export class StReferenceProvider implements ReferenceProvider {

    private _model: StModel;

    constructor(model: StModel) {
        this._model = model;
    }

    provideReferences(
        document: TextDocument,
        position: Position,
        context: ReferenceContext,
        token: CancellationToken
    ): ProviderResult<Location[]> {

        const sourceFile = this._model.sourceFileMap.get(document.uri.toString());

        if (!sourceFile)
            return;

        // Find the symbol at the given position
        const foundSymbol = Array.from(sourceFile.symbolMap.values())
            .find(symbol => isInRange(symbol.selectionRange, position));
       
        if (!foundSymbol)
            return;

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
}