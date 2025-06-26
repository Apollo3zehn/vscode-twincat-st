import { StDocumentSymbolProvider } from './features/StDocumentSymbolProvider.js';
import { buildModel } from './model.js';
import { documentSelector } from './core.js';
import { StDefinitionProvider } from './features/StDefinitionProvider.js';
import { ExtensionContext, languages } from 'vscode';

export async function activate(context: ExtensionContext) {

    const model = await buildModel(context);

    context.subscriptions.push(languages.registerDefinitionProvider(
        documentSelector, new StDefinitionProvider(model)
    ));

    context.subscriptions.push(languages.registerDocumentSymbolProvider(
        documentSelector, new StDocumentSymbolProvider(model)
    ));

	// context.subscriptions.push(vscode.languages.registerFoldingRangeProvider(
    //     documentSelector, new StFoldingRangeProvider(model)
    // ));
}

export function deactivate() {}