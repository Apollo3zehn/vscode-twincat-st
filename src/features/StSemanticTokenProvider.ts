import {
    CancellationToken,
    DocumentSemanticTokensProvider,
    ProviderResult,
    SemanticTokens,
    SemanticTokensBuilder,
    TextDocument
} from "vscode";
import { StModel, StModifier, StSymbolKind } from "../core/types.js";

export class StSemanticTokenProvider implements DocumentSemanticTokensProvider {

    readonly abC: number = 1;

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

                // Colorize types as class (token type 0)
                if (
                    (
                        symbol.id !== "THIS" &&
                        symbol.declaration?.kind === StSymbolKind.FunctionBlock ||
                        symbol.declaration?.kind === StSymbolKind.Gvl ||
                        symbol.declaration?.kind === StSymbolKind.Enum ||
                        symbol.declaration?.kind === StSymbolKind.Struct ||
                        symbol.declaration?.kind === StSymbolKind.Union
                    )
                ) {
                    builder.push(
                        symbol.range.start.line,
                        symbol.range.start.character,
                        symbol.id.length,
                        0, // class token type
                        undefined
                    );
                }

                // Colorize Enum members as enumMember (token type 1)
                if (symbol.declaration?.kind === StSymbolKind.EnumMember) {

                    builder.push(
                        symbol.range.start.line,
                        symbol.range.start.character,
                        symbol.id.length,
                        1, // enumMember token type
                        undefined
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
                        undefined
                    );
                }

                // Colorize constants
                if (
                    symbol.declaration?.kind === StSymbolKind.VariableDeclaration &&
                    symbol.declaration.modifier === StModifier.Constant
                ) {
                    builder.push(
                        symbol.range.start.line,
                        symbol.range.start.character,
                        symbol.id.length,
                        3,      // variable token type
                        1 << 0  // readonly token modifier
                    );
                }
            }

            else if (symbol.kind === StSymbolKind.VariableDeclaration) {

                // Colorize constants
                if (symbol.modifier === StModifier.Constant) {
                    builder.push(
                        symbol.range.start.line,
                        symbol.range.start.character,
                        symbol.id.length,
                        3,      // variable token type
                        1 << 0  // readonly token modifier
                    );
                }
            }
        }

        return builder.build();
    }
}