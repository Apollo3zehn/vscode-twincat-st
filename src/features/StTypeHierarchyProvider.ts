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

        const superTypes: TypeHierarchyItem[] = [];
        
        if (symbol.typeInfo?.baseTypes) {
            for (const baseTypeSymbol of symbol.typeInfo?.baseTypes) {
                superTypes.push(this.toTypeHierarchyItem(baseTypeSymbol));
            }
        }

        if (symbol.typeInfo?.interfaces) {
            for (const interfaceSymbol of symbol.typeInfo?.interfaces) {
                superTypes.push(this.toTypeHierarchyItem(interfaceSymbol));
            }
        }

        return superTypes;
    }

    provideTypeHierarchySubtypes(
        item: TypeHierarchyItem,
        token: CancellationToken
    ): ProviderResult<TypeHierarchyItem[]> {
        
        const symbol = this.findSymbolByItem(item);

        if (!symbol)
            return [];

        const subTypes: TypeHierarchyItem[] = [];
        
        if (symbol.typeInfo?.subTypes) {
            for (const subTypeSymbol of symbol.typeInfo?.subTypes) {
                subTypes.push(this.toTypeHierarchyItem(subTypeSymbol));
            }
        }

        return subTypes;
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