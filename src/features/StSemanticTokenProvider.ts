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

            if (token.isCancellationRequested)
                return;

            if (symbol.kind === StSymbolKind.VariableUsage) {

                // Colorize tyües as class (token type 0)
                if (
                    (
                        symbol.id !== "THIS" &&
                        symbol.declaration?.kind === StSymbolKind.FunctionBlock ||
                        symbol.declaration?.kind === StSymbolKind.Gvl ||
                        symbol.declaration?.kind === StSymbolKind.Enum ||
                        symbol.declaration?.kind === StSymbolKind.Struct
                    )
                ) {
                    builder.push(
                        symbol.range.start.line,
                        symbol.range.start.character,
                        symbol.id.length,
                        0, // class token type
                        0
                    );
                }

                // Colorize Enum members as enumMember (token type 1)
                if (symbol.declaration?.kind === StSymbolKind.EnumMember) {

                    builder.push(
                        symbol.range.start.line,
                        symbol.range.start.character,
                        symbol.id.length,
                        1, // enumMember token type
                        0
                    );
                }

                // Colorize usages of methods/functions as function (token type 2)
                if (
                    symbol.declaration?.kind === StSymbolKind.Method ||
                    symbol.declaration?.kind === StSymbolKind.Function
                ) {
                    
                    builder.push(
                        symbol.range.start.line,
                        symbol.range.start.character,
                        symbol.id.length,
                        2, // function token type
                        0
                    );
                }
            }
        }

        return builder.build();
    }
}