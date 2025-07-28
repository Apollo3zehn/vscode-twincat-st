import { CancellationToken, DocumentSymbol, DocumentSymbolProvider, ProviderResult, SymbolInformation, SymbolKind, TextDocument } from 'vscode';
import { StModel, StSymbol, StSymbolKind } from '../core/types.js';

export class StDocumentSymbolProvider implements DocumentSymbolProvider {

    private _model: StModel;

    constructor(model: StModel) {
        this._model = model;
    }

    provideDocumentSymbols(
        document: TextDocument,
        token: CancellationToken
    ): ProviderResult<SymbolInformation[] | DocumentSymbol[]> {

        const sourceFile = this._model.sourceFileMap.get(document.uri.toString());

        if (!sourceFile)
            return;

        const symbols: DocumentSymbol[] = [];

        const topLevelUnits = [...sourceFile.symbolMap.values()].filter(x =>
            x.kind === StSymbolKind.Program ||
            x.kind === StSymbolKind.FunctionBlock ||
            x.kind === StSymbolKind.Struct ||
            x.kind === StSymbolKind.Union ||
            x.kind === StSymbolKind.Enum ||
            x.kind === StSymbolKind.Function ||
            x.kind === StSymbolKind.Interface ||
            x.kind === StSymbolKind.Gvl
        );
        
        for (const compilationUnit of topLevelUnits) {

            if (token.isCancellationRequested)
                return;

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
            
            case StSymbolKind.Struct:
                symbolKind = SymbolKind.Struct; break;
            
             case StSymbolKind.Union:
                symbolKind = SymbolKind.Struct; break;
            
            case StSymbolKind.Enum:
                symbolKind = SymbolKind.Enum; break;
            
            case StSymbolKind.EnumMember:
                symbolKind = SymbolKind.EnumMember; break;
            
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
            
            case StSymbolKind.Gvl:
                symbolKind = SymbolKind.Variable; break;
            
            default:
                return undefined;
        }

        const symbol = new DocumentSymbol(
            stSymbol.id ?? "undefined",
            "",
            symbolKind,
            stSymbol.range,
            stSymbol.selectionRange ?? stSymbol.range,
        );

        if (stSymbol.variablesAndProperties) {

            for (const variable of stSymbol.variablesAndProperties.values()) {

                const variableSymbol = this.toSymbol(variable);

                if (variableSymbol)
                    symbol.children.push(variableSymbol);
            }
        }

        if (stSymbol.methods) {
            
            for (const variable of stSymbol.methods.values()) {

                const variableSymbol = this.toSymbol(variable);

                if (variableSymbol)
                    symbol.children.push(variableSymbol);
            }
        }

        return symbol;
    }
}