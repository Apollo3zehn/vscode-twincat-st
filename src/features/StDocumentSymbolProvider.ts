import { SourceFile, StSymbol, StSymbolKind } from '../core.js';
import { CancellationToken, DocumentSymbol, DocumentSymbolProvider, ProviderResult, SymbolInformation, SymbolKind, TextDocument } from 'vscode';

export class StDocumentSymbolProvider implements DocumentSymbolProvider {

    private _model: Map<string, SourceFile>;

    constructor(model: Map<string, SourceFile>) {
        this._model = model;
    }

    provideDocumentSymbols(document: TextDocument, token: CancellationToken): ProviderResult<SymbolInformation[] | DocumentSymbol[]> {

        const sourceFile = this._model.get(document.uri.toString());

        if (!sourceFile)
            return;

        const symbols: DocumentSymbol[] = [];

        const topLevelUnit = [...sourceFile.symbolMap.values()].filter(x =>
            x.kind === StSymbolKind.Program ||
            x.kind === StSymbolKind.FunctionBlock ||
            x.kind === StSymbolKind.Function ||
            x.kind === StSymbolKind.Interface
        );
        
        for (const compilationUnit of topLevelUnit) {

            const symbol = this.toSymbol(compilationUnit);

            if (symbol)
                symbols.push(symbol);
        }    
        
        return symbols;
    }

    toSymbol(stSymbol: StSymbol): DocumentSymbol | undefined {

        let symbolKind: SymbolKind;

        switch (stSymbol.kind) {
            
            case StSymbolKind.Program:
                symbolKind = SymbolKind.Module; break;
            
            case StSymbolKind.FunctionBlock:
                symbolKind = SymbolKind.Class; break;
            
            case StSymbolKind.Function:
                symbolKind = SymbolKind.Function; break;
            
            case StSymbolKind.Interface:
                symbolKind = SymbolKind.Interface; break;
            
            case StSymbolKind.Method:
                symbolKind = SymbolKind.Method; break;
            
            case StSymbolKind.Property:
                symbolKind = SymbolKind.Property; break;
            
            case StSymbolKind.VariableDeclaration:
                symbolKind = SymbolKind.Variable; break;
            
            case StSymbolKind.VariableDeclarationSection:
                symbolKind = SymbolKind.Variable; break;
            
            default:
                return undefined;
        }

        const symbol = new DocumentSymbol(
            stSymbol.name ?? "undefined",
            "",
            symbolKind,
            stSymbol.range,
            stSymbol.selectionRange ?? stSymbol.range,
        );

        if (stSymbol.children) {
            for (const childStSymbol of stSymbol.children) {

                const childSymbol = this.toSymbol(childStSymbol);

                if (childSymbol)
                    symbol.children.push(childSymbol);
            }
        }

        return symbol;
    }
}