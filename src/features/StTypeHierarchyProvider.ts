import {
    CancellationToken,
    Position,
    ProviderResult,
    SymbolKind,
    TextDocument,
    TypeHierarchyItem,
    TypeHierarchyProvider
} from "vscode";
import { StModel, StSymbol, StSymbolKind } from "../core.js";
import { isInRange } from "../utils.js";

export class StTypeHierarchyProvider implements TypeHierarchyProvider {
    
    private _model: StModel;

    constructor(model: StModel) {
        this._model = model;
    }

    prepareTypeHierarchy(
        document: TextDocument,
        position: Position,
        token: CancellationToken
    ): ProviderResult<TypeHierarchyItem | TypeHierarchyItem[]> {

        const sourceFile = this._model.sourceFileMap.get(document.uri.toString());

        if (!sourceFile)
            return [];

        // Find the symbol
        const foundSymbol = Array.from(sourceFile.symbolMap.values())
            .find(symbol => isInRange(symbol.selectionRange, position));

        if (!foundSymbol)
            return [];

        if (
            foundSymbol.kind === StSymbolKind.FunctionBlock ||
            foundSymbol.kind === StSymbolKind.Interface
        ) {
            return [this.toTypeHierarchyItem(foundSymbol)];
        }

        else if (foundSymbol.kind === StSymbolKind.TypeUsage && foundSymbol.declaration) {
            return [this.toTypeHierarchyItem(foundSymbol.declaration)];
        }
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

        for (const symbol of this._model.typeDeclarationsMap.values()) {
            if (
                symbol.name === item.name &&
                symbol.documentUri.toString() === item.uri.toString()
            ) {
                return symbol;
            }
        }

        return undefined;
    }
}