import { CodeLens, CodeLensProvider, Location, TextDocument } from 'vscode';
import { StAccessModifier, StSymbolKind, StVariableScope } from '../core/types.js';
import { StModelBuilder } from '../model/StModelBuilder.js';

export class StReferencesCodeLensProvider implements CodeLensProvider {
    
    provideCodeLenses(document: TextDocument): CodeLens[] {

        const sourceFile = StModelBuilder.model.sourceFileMap.get(document.uri.toString());

        if (!sourceFile)
            return [];

        const lenses: CodeLens[] = [];

        for (const symbol of sourceFile.symbolMap.values()) {

            if (
                symbol.kind === StSymbolKind.FunctionBlock ||
                symbol.kind === StSymbolKind.Struct ||
                symbol.kind === StSymbolKind.Union ||
                symbol.kind === StSymbolKind.Interface ||
                symbol.kind === StSymbolKind.Function ||
                symbol.kind === StSymbolKind.VariableDeclaration && symbol.variableKind !== StVariableScope.Local ||
                symbol.kind === StSymbolKind.Property ||
                symbol.kind === StSymbolKind.Method ||
                symbol.kind === StSymbolKind.Enum ||
                symbol.kind === StSymbolKind.EnumMember
            ) {
                if (symbol.accessModifier === StAccessModifier.Private)
                    continue;

                // Reference count
                const referenceCount = symbol.references
                    ? symbol.references.length
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
                if (symbol.references) {

                    for (const referencingSymbols of symbol.references) {
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