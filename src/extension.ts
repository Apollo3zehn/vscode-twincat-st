import * as vscode from 'vscode';
import { MyDocumentSymbolProvider } from './MyDocumentSymbolProvider.js';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(
        { language: "st", pattern: "**/*.st" }, new MyDocumentSymbolProvider()
    ));
}

export function deactivate() {}