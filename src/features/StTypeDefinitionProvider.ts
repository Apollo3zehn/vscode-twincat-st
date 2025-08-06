import { CancellationToken, Location, Position, ProviderResult, TextDocument, TypeDefinitionProvider } from "vscode";
import { StSymbol, StSymbolKind } from "../core/types.js";
import { isInRange } from "../core/utils.js";
import { StModelBuilder } from "../model/StModelBuilder.js";

export class StTypeDefinitionProvider implements TypeDefinitionProvider {

    public provideTypeDefinition(
        document: TextDocument,
        position: Position,
        token: CancellationToken
    ): ProviderResult<Location | Location[]> {

        // Find the source file
        const sourceFile = StModelBuilder.model.sourceFileMap.get(document.uri.toString());

        if (!sourceFile)
            return;

        // Find the symbol
        const foundSymbol = Array.from(sourceFile.symbolMap.values())
            .find(symbol => isInRange(symbol.selectionRange, position));

        if (!foundSymbol)
            return;

        let typeDeclaringSymbol: StSymbol | null | undefined;

        if (foundSymbol.kind === StSymbolKind.VariableDeclaration) {
            typeDeclaringSymbol = foundSymbol.typeUsage?.declaration;
        }

        else if (foundSymbol.kind === StSymbolKind.VariableUsage) {
            typeDeclaringSymbol = foundSymbol.declaration?.typeUsage?.declaration;
        }

        if (typeDeclaringSymbol) {
            return new Location(
                typeDeclaringSymbol.documentUri,
                typeDeclaringSymbol.selectionRange ?? typeDeclaringSymbol.range
            );
        }

        return;
    }
}