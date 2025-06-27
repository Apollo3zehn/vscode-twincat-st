import { CancellationToken, Location, Position, ProviderResult, TextDocument, TypeDefinitionProvider } from "vscode";
import { SourceFile, StSymbol, StSymbolKind } from "../core.js";
import { findSymbolAtPosition } from "../utils.js";

export class StTypeDefinitionProvider implements TypeDefinitionProvider {

    private _model: Map<string, SourceFile>;

    constructor(model: Map<string, SourceFile>) {
        this._model = model;
    }

    public provideTypeDefinition(
        document: TextDocument,
        position: Position,
        token: CancellationToken
    ): ProviderResult<Location | Location[]> {

        // Find the source file
        const sourceFile = this._model.get(document.uri.toString());

        if (!sourceFile)
            return;

        // Find the symbol
        const foundSymbol = Array.from(sourceFile.symbolMap.values())
            .map(symbol => findSymbolAtPosition(symbol, position))
            .find(s => s !== undefined);

        if (!foundSymbol)
            return;

        let typeDeclaringSymbol: StSymbol | undefined;

        if (foundSymbol.kind === StSymbolKind.Variable) {
            typeDeclaringSymbol = foundSymbol.declaringSymbol;
        }

        else if (
            foundSymbol.kind === StSymbolKind.VariableUsage ||
            foundSymbol.kind === StSymbolKind.MethodOrFunctionCall
        ) {
            typeDeclaringSymbol = foundSymbol.declaringSymbol?.declaringSymbol;
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