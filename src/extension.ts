import { commands, ExtensionContext, languages, SemanticTokensLegend, window, workspace } from 'vscode';
import { documentSelector } from './core/types.js';
import { StCStyleDecorationProvider } from './features/StCStyleDecorationProvider.js';
import { StDefinitionProvider } from './features/StDefinitionProvider.js';
import { StDiagnosticsProvider } from './features/StDiagnosticsProvider.js';
import { StDocumentHighlightProvider } from './features/StDocumentHighlightProvider.js';
import { StDocumentSymbolProvider } from './features/StDocumentSymbolProvider.js';
import { StHoverProvider } from './features/StHoverProvider.js';
import { StReferencesCodeLensProvider as StReferenceCodeLensProvider } from './features/StReferenceCodeLensProvider.js';
import { StReferenceProvider } from './features/StReferenceProvider.js';
import { StRenameProvider } from './features/StRenameProvider.js';
import { StSemanticTokenProvider } from './features/StSemanticTokenProvider.js';
import { StTypeDefinitionProvider } from './features/StTypeDefinitionProvider.js';
import { StTypeHierarchyProvider } from './features/StTypeHierarchyProvider.js';
import { StModelBuilder } from './model/StModelBuilder.js';
import { evaluateDateAndTimeLiteral } from './model/literals/evaluateDateAndTimeLiteral.js';

export async function activate(context: ExtensionContext) {

    

function toDateString(ns: bigint): string {
    // Convert nanoseconds since epoch to date string
    // You may need to adjust this to match your input format
    const epoch = new Date(Date.UTC(1970, 0, 1, 0, 0, 0, 0));
    const ms = Number(ns / 1000000n);
    const date = new Date(epoch.getTime() + ms);
    // Format as "YYYY-M-D-HH:MM:SS.mmmuuuNNN"
    // This is a simplification, you may need to handle micro/nano manually
    return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}-${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}.${String(ms % 1000).padStart(3, "0")}000000`;
}

function findMaxLDateAndTime() {
    const target = 18446744073709551615n;
    let low = 0n;
    let high = target;
    let result = "";

    while (low <= high) {
        const mid = (low + high) / 2n;
        // Convert mid nanoseconds to date string
        const dateStr = toDateString(mid);
        const [type] = evaluateDateAndTimeLiteral("LDATE_AND_TIME", dateStr);
        const value = type?.builtinType?.value;
        console.log(dateStr);
        if (value === target) {
            result = dateStr;
            low = mid + 1n;
        } else if (value && value > target) {
            high = mid - 1n;
        } else {
            low = mid + 1n;
        }
    }
    return result;
}

console.log(findMaxLDateAndTime());

    const modelBuilder = new StModelBuilder();
    await modelBuilder.build();

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
    });

    if (window.activeTextEditor)
        decorationProvider.provideDecorations(window.activeTextEditor.document, window.activeTextEditor);

    context.subscriptions.push(languages.registerHoverProvider(
        documentSelector, new StHoverProvider()
    ));

    context.subscriptions.push(languages.registerTypeHierarchyProvider(
        documentSelector, new StTypeHierarchyProvider()
    ));

    context.subscriptions.push(languages.registerDefinitionProvider(
        documentSelector, new StDefinitionProvider()
    ));

    context.subscriptions.push(languages.registerTypeDefinitionProvider(
        documentSelector, new StTypeDefinitionProvider())
    );

    context.subscriptions.push(languages.registerDocumentSymbolProvider(
        documentSelector, new StDocumentSymbolProvider()
    ));

    context.subscriptions.push(languages.registerCodeLensProvider(
        documentSelector, new StReferenceCodeLensProvider()
    ));

    context.subscriptions.push(languages.registerReferenceProvider(
        documentSelector, new StReferenceProvider())
    );

    context.subscriptions.push(languages.registerDocumentHighlightProvider(
        documentSelector, new StDocumentHighlightProvider())
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

    const diagnosticsProvider = new StDiagnosticsProvider();
    workspace.onDidOpenTextDocument(doc => diagnosticsProvider.updateDiagnostics(doc));
    workspace.onDidChangeTextDocument(e => diagnosticsProvider.updateDiagnostics(e.document));
    workspace.textDocuments.forEach(doc => diagnosticsProvider.updateDiagnostics(doc));

	// context.subscriptions.push(vscode.languages.registerFoldingRangeProvider(
    //     documentSelector, new StFoldingRangeProvider(model)
    // ));

    context.subscriptions.push(
        languages.registerRenameProvider(
            documentSelector,
            new StRenameProvider()
        )
    );

    // TODO: Move to separate file
    const legend = new SemanticTokensLegend(

        // https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#standard-token-types-and-modifiers

        // tokenTypes
        ["class", "enumMember", "function", "variable"],
        
        // tokenModifiers
        ["readonly"]
    );

    context.subscriptions.push(
        languages.registerDocumentSemanticTokensProvider(
            { language: "st" },
            new StSemanticTokenProvider(),
            legend
        )
    );
}

export function deactivate() {}