import {
    CancellationToken,
    Position,
    ProviderResult,
    SymbolKind,
    TextDocument,
    TypeHierarchyItem,
    TypeHierarchyProvider
} from "vscode";
import { SourceFile, StSymbol, StSymbolKind } from "../core.js";
import { findSymbolAtPosition } from "../utils.js";

export class StTypeHierarchyProvider implements TypeHierarchyProvider {
    
    private _model: Map<string, SourceFile>;

    constructor(model: Map<string, SourceFile>) {
        this._model = model;
    }

    prepareTypeHierarchy(
        document: TextDocument,
        position: Position,
        token: CancellationToken
    ): ProviderResult<TypeHierarchyItem | TypeHierarchyItem[]> {

        const sourceFile = this._model.get(document.uri.toString());

        if (!sourceFile)
            return [];

        let foundSymbol: StSymbol | undefined;
        
        for (const symbol of sourceFile.symbolMap.values()) {
            foundSymbol = findSymbolAtPosition(symbol, position);

            if (foundSymbol)
                break;
        }

        if (
            foundSymbol &&
            (
                foundSymbol.kind === StSymbolKind.FunctionBlock ||
                foundSymbol.kind === StSymbolKind.Interface
            )
        ) {
            return [this.toTypeHierarchyItem(foundSymbol)];
        }

        return [];
    }

    provideTypeHierarchySupertypes(
        item: TypeHierarchyItem,
        token: CancellationToken
    ): ProviderResult<TypeHierarchyItem[]> {
        const symbol = this.findSymbolByItem(item);

        if (!symbol)
            return [];

        const subtypes: TypeHierarchyItem[] = [];
        
        if (symbol.baseTypeSymbol)
            subtypes.push(this.toTypeHierarchyItem(symbol.baseTypeSymbol));

        if (symbol.interfaceSymbols) {
            for (const interfaceSymbol of symbol.interfaceSymbols) {
                subtypes.push(this.toTypeHierarchyItem(interfaceSymbol));
            }
        }

        return subtypes;
    }

    provideTypeHierarchySubtypes(
        item: TypeHierarchyItem,
        token: CancellationToken
    ): ProviderResult<TypeHierarchyItem[]> {
        // TBI
        return [];
    }

    private toTypeHierarchyItem(symbol: StSymbol): TypeHierarchyItem {
        return {
            name: symbol.name!,
            kind: SymbolKind.Class,
            uri: symbol.documentUri,
            range: symbol.range,
            selectionRange: symbol.selectionRange ?? symbol.range
        };
    }

    private findSymbolByItem(item: TypeHierarchyItem): StSymbol | undefined {

        for (const file of this._model.values()) {

            for (const symbol of file.typeDeclarationsMap.values()) {

                if (
                    symbol.name === item.name &&
                    symbol.documentUri.toString() === item.uri.toString()
                ) {
                    return symbol;
                }
            }
        }

        return undefined;
    }
}