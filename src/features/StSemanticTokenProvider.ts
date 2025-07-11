import {
    CancellationToken,
    DocumentSemanticTokensProvider,
    ProviderResult,
    SemanticTokens,
    SemanticTokensBuilder,
    TextDocument
} from "vscode";
import { StModel, StSymbolKind } from "../core.js";

export class StSemanticTokenProvider implements DocumentSemanticTokensProvider {

    private _model: StModel;

    constructor(model: StModel) {
        this._model = model;
    }

    provideDocumentSemanticTokens(
        document: TextDocument,
        token: CancellationToken
    ): ProviderResult<SemanticTokens> {

        const builder = new SemanticTokensBuilder();
        const sourceFile = this._model.sourceFileMap.get(document.uri.toString());

        if (!sourceFile)
            return builder.build();

        for (const symbol of sourceFile.symbolMap.values()) {

            // Colorize GVL and Enum names as function block (token type 0)
            if (
                symbol.kind === StSymbolKind.VariableUsage &&
                (
                    symbol.declaration?.kind === StSymbolKind.Gvl ||
                    symbol.declaration?.kind === StSymbolKind.Enum
                )
            ) {
                builder.push(
                    symbol.range.start.line,
                    symbol.range.start.character,
                    symbol.name.length,
                    0, // class token type
                    0
                );
            }

            // Colorize Enum members as enumMember (token type 1)
            if (
                symbol.kind === StSymbolKind.VariableUsage &&
                symbol.declaration?.kind === StSymbolKind.EnumMember
            ) {
                builder.push(
                    symbol.range.start.line,
                    symbol.range.start.character,
                    symbol.name.length,
                    1, // enumMember token type
                    0
                );
            }
        }

        return builder.build();
    }
}