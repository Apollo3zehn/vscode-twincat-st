import { commands, ExtensionContext, languages, SemanticTokensLegend, window, workspace } from 'vscode';
import { documentSelector } from './core.js';
import { StCStyleDecorationProvider } from './features/StCStyleDecorationProvider.js';
import { StDefinitionProvider } from './features/StDefinitionProvider.js';
import { StDiagnosticsProvider } from './features/StDiagnosticsProvider.js';
import { StDocumentSymbolProvider } from './features/StDocumentSymbolProvider.js';
import { StHoverProvider } from './features/StHoverProvider.js';
import { StReferencesCodeLensProvider as StReferenceCodeLensProvider } from './features/StReferenceCodeLensProvider.js';
import { StReferenceProvider } from './features/StReferenceProvider.js';
import { StRenameProvider } from './features/StRenameProvider.js';
import { StSemanticTokenProvider } from './features/StSemanticTokenProvider.js';
import { StTypeDefinitionProvider } from './features/StTypeDefinitionProvider.js';
import { StTypeHierarchyProvider } from './features/StTypeHierarchyProvider.js';
import { SemanticModelBuilder } from './model/StModelBuilder.js';

export async function activate(context: ExtensionContext) {

    const modelBuilder = new SemanticModelBuilder();
    const model = await modelBuilder.build();

    // TODO: move this into the StEndBlockDecorationProvider.ts file
    const decorationProvider = new StCStyleDecorationProvider();
    
    window.onDidChangeActiveTextEditor(editor => {
        if (editor && editor.document.languageId === 'st') {
            decorationProvider.provideDecorations(editor.document, editor);
        }
    });

    workspace.onDidChangeTextDocument(event => {

        const editor = window.activeTextEditor;

        if (editor && event.document === editor.document && editor.document.languageId === 'st') {
            decorationProvider.provideDecorations(editor.document, editor);
        }
    });

    window.onDidChangeTextEditorSelection(event => {

        const editor = event.textEditor;

        if (editor && editor.document.languageId === 'st') {
            decorationProvider.provideDecorations(editor.document, editor);
        }
    })

    if (window.activeTextEditor)
        decorationProvider.provideDecorations(window.activeTextEditor.document, window.activeTextEditor)

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

    context.subscriptions.push(
        languages.registerRenameProvider(
            documentSelector,
            new StRenameProvider(model)
        )
    );

    // TODO: Move to separate file
    const legend = new SemanticTokensLegend(
        ["class"],  // tokenTypes
        []          // tokenModifiers
    );

    context.subscriptions.push(
        languages.registerDocumentSemanticTokensProvider(
            { language: "st" },
            new StSemanticTokenProvider(model),
            legend
        )
    );
}

export function deactivate() {}