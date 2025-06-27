import { Location, Position, ReferenceContext, ReferenceProvider, TextDocument, CancellationToken, ProviderResult } from "vscode";
import { SourceFile, StSymbol, StSymbolKind } from "../core.js";
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
            return [];

        // Find the symbol at the given position
        let foundSymbol: StSymbol | undefined;
        
        for (const symbol of sourceFile.symbolMap.values()) {
            
            foundSymbol = findSymbolAtPosition(symbol, position);

            if (foundSymbol)
                break;
        }

        // Only provide references for variable usages, declarations, methods, functions, etc.
        if (
            foundSymbol &&
            (
                foundSymbol.kind === StSymbolKind.VariableUsage ||
                foundSymbol.kind === StSymbolKind.MethodOrFunctionCall ||
                foundSymbol.kind === StSymbolKind.VariableDeclaration ||
                foundSymbol.kind === StSymbolKind.Method ||
                foundSymbol.kind === StSymbolKind.Function
            )
        ) {
            const declaringSymbol = foundSymbol.declaringSymbol ?? foundSymbol;
            const locations: Location[] = [];

            if (declaringSymbol.referencingSymbols) {
                for (const ref of declaringSymbol.referencingSymbols) {
                    locations.push(
                        new Location(
                            ref.documentUri,
                            ref.selectionRange ?? ref.range
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

        return [];
    }
}