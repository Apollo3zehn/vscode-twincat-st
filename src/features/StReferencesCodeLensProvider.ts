import * as vscode from 'vscode';
import { SourceFile, StSymbolKind, VariableKind } from '../core.js';

export class StReferencesCodeLensProvider implements vscode.CodeLensProvider {
    private _model: Map<string, SourceFile>;

    constructor(model: Map<string, SourceFile>) {
        this._model = model;
    }

    provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {

        const sourceFile = this._model.get(document.uri.toString());

        if (!sourceFile)
            return [];

        const lenses: vscode.CodeLens[] = [];

        for (const symbol of sourceFile.symbolMap.values()) {

            if (
                symbol.kind === StSymbolKind.VariableDeclaration ||
                symbol.kind === StSymbolKind.Method ||
                symbol.kind === StSymbolKind.Function
            ) {
                if (symbol.variableKind == VariableKind.Local)
                    continue;

                const refCount = symbol.referencingSymbols
                    ? symbol.referencingSymbols.length
                    : 0;

                lenses.push(
                    new vscode.CodeLens(symbol.range, {
                        title: `${refCount} reference${refCount === 1 ? '' : 's'}`,
                        command: '', // Optionally implement a command to show references
                        arguments: []
                    })
                );
            }
        }

        return lenses;
    }
}