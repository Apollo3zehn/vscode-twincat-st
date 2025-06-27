import { StDocumentSymbolProvider } from './features/StDocumentSymbolProvider.js';
import { documentSelector } from './core.js';
import { StDefinitionProvider } from './features/StDefinitionProvider.js';
import { commands, ExtensionContext, languages, SemanticTokensLegend, workspace } from 'vscode';
import { ModelBuilder } from './model/ModelBuilder.js';
import { StReferencesCodeLensProvider as StReferenceCodeLensProvider } from './features/StReferenceCodeLensProvider.js';
import { StDiagnosticsProvider } from './features/StDiagnosticsProvider.js';
import { StReferenceProvider } from './features/StReferenceProvider.js';
import { StTypeDefinitionProvider } from './features/StTypeDefinitionProvider.js';
import { StTypeHierarchyProvider } from './features/StTypeHierarchyProvider.js';
import { StHoverProvider } from './features/StHoverProvider.js';
import { STSemanticTokenProvider } from './features/StSemanticTokenProvider.js';

export async function activate(context: ExtensionContext) {

    const modelBuilder = new ModelBuilder();
    const model = await modelBuilder.build();

    // TODO: move this into the StSemanticTokensProvider.ts file
    const tokenTypes = ['function'];
    const tokenModifiers: string[] = [];

    context.subscriptions.push(languages.registerDocumentSemanticTokensProvider(
        documentSelector, new STSemanticTokenProvider(model),
        new SemanticTokensLegend(tokenTypes, tokenModifiers)
    ))

    context.subscriptions.push(languages.registerHoverProvider(
        documentSelector, new StHoverProvider(model)
    ));

    context.subscriptions.push(languages.registerTypeHierarchyProvider(
        documentSelector, new StTypeHierarchyProvider(model)
    ));

    context.subscriptions.push(languages.registerDefinitionProvider(
        documentSelector, new StDefinitionProvider(model)
    ));

    context.subscriptions.push(languages.registerTypeDefinitionProvider(
        documentSelector, new StTypeDefinitionProvider(model))
    );

    context.subscriptions.push(languages.registerDocumentSymbolProvider(
        documentSelector, new StDocumentSymbolProvider(model)
    ));

    context.subscriptions.push(languages.registerCodeLensProvider(
        documentSelector, new StReferenceCodeLensProvider(model)
    ));

    context.subscriptions.push(languages.registerReferenceProvider(
        documentSelector, new StReferenceProvider(model))
    );

    context.subscriptions.push(
        commands.registerCommand('twincat-st.showReferences', (uri, position, locations) => {
            commands.executeCommand(
                'editor.action.showReferences',
                uri,
                position,
                locations
            );
        })
    );

    const diagnosticsProvider = new StDiagnosticsProvider(model);
    workspace.onDidOpenTextDocument(doc => diagnosticsProvider.updateDiagnostics(doc));
    workspace.onDidChangeTextDocument(e => diagnosticsProvider.updateDiagnostics(e.document));
    workspace.textDocuments.forEach(doc => diagnosticsProvider.updateDiagnostics(doc));

	// context.subscriptions.push(vscode.languages.registerFoldingRangeProvider(
    //     documentSelector, new StFoldingRangeProvider(model)
    // ));
}

export function deactivate() {}