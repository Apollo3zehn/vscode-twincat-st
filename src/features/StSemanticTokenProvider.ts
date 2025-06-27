import { DocumentSemanticTokensProvider, SemanticTokens, SemanticTokensBuilder, TextDocument } from 'vscode';
import { SourceFile, StSymbolKind } from '../core.js';

export class STSemanticTokenProvider implements DocumentSemanticTokensProvider {

    private _model: Map<string, SourceFile>;

    constructor(model: Map<string, SourceFile>) {
        this._model = model;
    }

    async provideDocumentSemanticTokens(document: TextDocument): Promise<SemanticTokens> {
        
        const sourceFile = this._model.get(document.uri.toString());
        const builder = new SemanticTokensBuilder();

        if (!sourceFile)
            return builder.build();

        for (const symbol of sourceFile.symbolMap.values()) {
            if (
                symbol.kind === StSymbolKind.Function ||
                symbol.kind === StSymbolKind.Method
            ) {
                const range = symbol.selectionRange ?? symbol.range;

                builder.push(
                    range.start.line,
                    range.start.character,
                    symbol.name?.length ?? 0,
                    0, // function token type (index of array 'tokenTypes')
                    0  // no modifiers (index of array 'tokenModifiers')
                );
            }
        }

        return builder.build();
    }
}