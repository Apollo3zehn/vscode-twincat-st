import * as vscode from 'vscode';
import { SourceFile, StSymbolKind } from './core.js';

export class StDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

    private _model: Map<string, SourceFile>;

    constructor(model: Map<string, SourceFile>) {
        this._model = model;
    }

    provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SymbolInformation[] | vscode.DocumentSymbol[]> {

        const sourceFile = this._model.get(document.uri.toJSON());

        if (!sourceFile)
            return;

        const symbols: vscode.DocumentSymbol[] = [];

        const compilationUnits = [...sourceFile.symbols.values()].filter(x =>
            x.type === StSymbolKind.Program ||
            x.type === StSymbolKind.FunctionBlock ||
            x.type === StSymbolKind.Function);
        
        for (const unit of compilationUnits) {

            const symbol = new vscode.DocumentSymbol(
                unit.name ?? "undefined",
                "",
                vscode.SymbolKind.Class,
                new vscode.Range(0, 0, 0, 0),
                new vscode.Range(0, 0, 0, 0)
            );

            symbols.push(symbol);
        }
        
        return symbols;
    }
}