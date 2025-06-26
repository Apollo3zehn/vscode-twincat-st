import { StDocumentSymbolProvider } from './features/StDocumentSymbolProvider.js';
import { documentSelector } from './core.js';
import { StDefinitionProvider } from './features/StDefinitionProvider.js';
import { ExtensionContext, languages } from 'vscode';
import { ModelBuilder } from './model/ModelBuilder.js';
import { StReferencesCodeLensProvider } from './features/StReferencesCodeLensProvider.js';

export async function activate(context: ExtensionContext) {

    const modelBuilder = new ModelBuilder();
    const model = await modelBuilder.build();

    context.subscriptions.push(languages.registerDefinitionProvider(
        documentSelector, new StDefinitionProvider(model)
    ));

    context.subscriptions.push(languages.registerDocumentSymbolProvider(
        documentSelector, new StDocumentSymbolProvider(model)
    ));

    context.subscriptions.push(languages.registerCodeLensProvider(
        documentSelector, new StReferencesCodeLensProvider(model)
    ));

	// context.subscriptions.push(vscode.languages.registerFoldingRangeProvider(
    //     documentSelector, new StFoldingRangeProvider(model)
    // ));
}

export function deactivate() {}