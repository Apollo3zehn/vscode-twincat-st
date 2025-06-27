import { StDocumentSymbolProvider } from './features/StDocumentSymbolProvider.js';
import { documentSelector } from './core.js';
import { StDefinitionProvider } from './features/StDefinitionProvider.js';
import { ExtensionContext, languages, workspace } from 'vscode';
import { ModelBuilder } from './model/ModelBuilder.js';
import { StReferencesCodeLensProvider } from './features/StReferencesCodeLensProvider.js';
import { StDiagnosticsProvider } from './features/StDiagnosticsProvider.js';

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

    const diagnosticsProvider = new StDiagnosticsProvider(model);
    workspace.onDidOpenTextDocument(doc => diagnosticsProvider.updateDiagnostics(doc));
    workspace.onDidChangeTextDocument(e => diagnosticsProvider.updateDiagnostics(e.document));
    workspace.textDocuments.forEach(doc => diagnosticsProvider.updateDiagnostics(doc));

	// context.subscriptions.push(vscode.languages.registerFoldingRangeProvider(
    //     documentSelector, new StFoldingRangeProvider(model)
    // ));
}

export function deactivate() {}