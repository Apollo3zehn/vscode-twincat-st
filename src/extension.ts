import * as vscode from 'vscode';
import { StDocumentSymbolProvider } from './StDocumentSymbolProvider.js';
import { buildModel } from './model.js';

export async function activate(context: vscode.ExtensionContext) {

    const model = await buildModel(context);

	context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(
        { language: "st", pattern: "**/*.st" }, new StDocumentSymbolProvider(model)
    ));
}

export function deactivate() {}