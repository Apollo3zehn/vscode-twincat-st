import { CancellationToken, Location, Position, ProviderResult, TextDocument, TypeDefinitionProvider } from "vscode";
import { StModel, StSymbol, StSymbolKind } from "../core.js";
import { isInRange } from "../utils.js";

export class StTypeDefinitionProvider implements TypeDefinitionProvider {

    private _model: StModel;

    constructor(model: StModel) {
        this._model = model;
    }

    public provideTypeDefinition(
        document: TextDocument,
        position: Position,
        token: CancellationToken
    ): ProviderResult<Location | Location[]> {

        // Find the source file
        const sourceFile = this._model.sourceFileMap.get(document.uri.toString());

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

        else if (
            foundSymbol.kind === StSymbolKind.VariableUsage ||
            foundSymbol.kind === StSymbolKind.CallStatement
        ) {
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