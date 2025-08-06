import {
    CancellationToken,
    Position,
    ProviderResult,
    SymbolKind,
    TextDocument,
    TypeHierarchyItem,
    TypeHierarchyProvider
} from "vscode";
import { StSymbol, StSymbolKind } from "../core/types.js";
import { isInRange } from "../core/utils.js";
import { StModelBuilder } from "../model/StModelBuilder.js";

export class StTypeHierarchyProvider implements TypeHierarchyProvider {
    
    prepareTypeHierarchy(
        document: TextDocument,
        position: Position,
        token: CancellationToken
    ): ProviderResult<TypeHierarchyItem | TypeHierarchyItem[]> {

        const sourceFile = StModelBuilder.model.sourceFileMap.get(document.uri.toString());

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
        
        if (symbol.typeDeclarationDetails?.baseTypes) {
            for (const baseTypeSymbol of symbol.typeDeclarationDetails?.baseTypes) {
                superTypes.push(this.toTypeHierarchyItem(baseTypeSymbol));
            }
        }

        if (symbol.typeDeclarationDetails?.interfaces) {
            for (const interfaceSymbol of symbol.typeDeclarationDetails?.interfaces) {
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
        
        if (symbol.typeDeclarationDetails?.subTypes) {
            for (const subTypeSymbol of symbol.typeDeclarationDetails?.subTypes) {
                subTypes.push(this.toTypeHierarchyItem(subTypeSymbol));
            }
        }

        return subTypes;
    }

    private toTypeHierarchyItem(symbol: StSymbol): TypeHierarchyItem {
        return {
            name: symbol.id!,
            kind: SymbolKind.Class,
            uri: symbol.documentUri,
            range: symbol.range,
            selectionRange: symbol.selectionRange ?? symbol.range
        };
    }

    private findSymbolByItem(item: TypeHierarchyItem): StSymbol | undefined {

        for (const sourceFile of StModelBuilder.model.sourceFileMap.values()) {

            for (const symbol of sourceFile.symbolMap.values()) {
                
                if (
                    symbol.id === item.name &&
                    symbol.documentUri.toString() === item.uri.toString()
                ) {
                    return symbol;
                }
            }
        }

        return undefined;
    }
}