import { CodeLens, CodeLensProvider, Location, TextDocument } from 'vscode';
import { SourceFile, StSymbolKind, VariableKind } from '../core.js';

export class StReferencesCodeLensProvider implements CodeLensProvider {
    
    private _model: Map<string, SourceFile>;

    constructor(model: Map<string, SourceFile>) {
        this._model = model;
    }

    provideCodeLenses(document: TextDocument): CodeLens[] {

        const sourceFile = this._model.get(document.uri.toString());

        if (!sourceFile)
            return [];

        const lenses: CodeLens[] = [];

        for (const symbol of sourceFile.symbolMap.values()) {

            if (
                symbol.kind === StSymbolKind.VariableDeclaration ||
                symbol.kind === StSymbolKind.Method ||
                symbol.kind === StSymbolKind.Function
            ) {
                if (symbol.variableKind == VariableKind.Local)
                    continue;

                // Reference count
                const referenceCount = symbol.referencingSymbols
                    ? symbol.referencingSymbols.length
                    : 0;

                // Reference locations (include declaration itself)
                const locations: Location[] = [];

                // Add declaration location first
                locations.push(
                    new Location(
                        document.uri,
                        symbol.range
                    )
                );

                // Add all referencing symbols
                if (symbol.referencingSymbols) {

                    for (const referencingSymbols of symbol.referencingSymbols) {
                        locations.push(
                            new Location(
                                referencingSymbols.documentUri,
                                referencingSymbols.range
                            )
                        );
                    }
                }

                // Push lens
                lenses.push(
                    new CodeLens(symbol.range, {
                        title: `${referenceCount} reference${referenceCount === 1 ? '' : 's'}`,
                        command: referenceCount > 0 ? 'twincat-st.showReferences' : '',
                        arguments: [
                            document.uri,
                            symbol.range.start,
                            locations
                        ]
                    })
                );
            }
        }

        return lenses;
    }
}