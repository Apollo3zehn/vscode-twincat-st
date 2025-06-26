import * as vscode from 'vscode';
import { SourceFile, StSymbolKind } from '../core.js';

export class StReferencesCodeLensProvider implements vscode.CodeLensProvider {
    private _model: Map<string, SourceFile>;

    constructor(model: Map<string, SourceFile>) {
        this._model = model;
    }

    provideCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
        const sourceFile = this._model.get(document.uri.toString());
        if (!sourceFile) return [];

        const lenses: vscode.CodeLens[] = [];

        // Dummy implementation! More effient one is need by simply creating back references in declaring symbols
        for (const symbol of sourceFile.symbolMap.values()) {

            if (
                symbol.kind === StSymbolKind.VariableDeclaration ||
                symbol.kind === StSymbolKind.Method ||
                symbol.kind === StSymbolKind.Function
            ) {
                let refCount = 0;

                for (const sf of this._model.values()) {
                    for (const usage of sf.symbolMap.values()) {
                        if (
                            (usage.kind === StSymbolKind.VariableUsage || usage.kind === StSymbolKind.MethodOrFunctionCall) &&
                            usage.declaringSymbol === symbol
                        ) {
                            refCount++;
                        }
                    }
                }

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