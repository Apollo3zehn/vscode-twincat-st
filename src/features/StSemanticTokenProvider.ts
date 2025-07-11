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

            // Only interested in variable usages with a qualifier chain
            if (
                symbol.kind === StSymbolKind.VariableUsage &&
                (
                    symbol.declaration?.kind === StSymbolKind.Gvl ||
                    symbol.declaration?.kind === StSymbolKind.Enum
                )
            ) {
                // Colorize the GVL name as a function block
                builder.push(
                    symbol.range.start.line,
                    symbol.range.start.character,
                    symbol.name.length,
                    0, // custom token type
                    0
                );
            }
        }

        return builder.build();
    }
}