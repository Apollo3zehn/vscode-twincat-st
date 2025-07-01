import { Hover, HoverProvider, MarkdownString, Position, ProviderResult, TextDocument } from "vscode";
import { SourceFile, StSymbol, StSymbolKind, VariableKind } from "../core.js";
import { findSymbolAtPosition, isInRange } from "../utils.js";
import { EnumDeclContext, EnumMemberContext } from "../generated/StructuredTextParser.js";

export class StHoverProvider implements HoverProvider {

    private _model: Map<string, SourceFile>;
    
    constructor(model: Map<string, SourceFile>) {
        this._model = model;
    }

    provideHover(document: TextDocument, position: Position): ProviderResult<Hover> {
        
        const sourceFile = this._model.get(document.uri.toString());

        if (!sourceFile)
            return;

        // Find the symbol at the given position
        const foundSymbol = Array.from(sourceFile.symbolMap.values())
            .map(symbol => findSymbolAtPosition(symbol, position))
            .find(s => s !== undefined);
    
        if (!foundSymbol)
            return;

        if (!isInRange(foundSymbol.selectionRange, position))
            return;

        // Build hover content
        const markdown = new MarkdownString();
        markdown.appendCodeblock(this.getSymbolSignature(foundSymbol), 'st');

        const tokenStream = sourceFile.tokenStream;
        const declarationSymbol = foundSymbol.declaration ?? foundSymbol;

        let comment: String | undefined;

        if (declarationSymbol.context.start) {
            
            const startTokenIndex = declarationSymbol.context.start.tokenIndex;
            const endTokenIndex = declarationSymbol.context.stop?.tokenIndex;

            // Look for a comment that prefixes the current token
            const previous = tokenStream.get(startTokenIndex - 1);

            if (previous.channel === 1 && previous.text !== undefined)
                comment = previous.text;

            // Look for a comment that starts on the same line
            if (endTokenIndex) {
                const next = tokenStream.get(endTokenIndex + 1);

                if (
                    next.channel === 1 &&
                    next.line - 1 === declarationSymbol.range.end.line &&
                    next.text !== undefined
                ) {
                    comment = next.text;
                }
            }
        }

        if (comment) {

            const sanitizedComment = comment
                .replace("(*", "")
                .replace("*)", "")
                .replace(/^\/\//, "")
                .trim();
            
            markdown.appendMarkdown('\n\n' + sanitizedComment);
        }

        return new Hover(markdown, foundSymbol.selectionRange ?? foundSymbol.range);
    }

    private getSymbolSignature(symbol: StSymbol): string {

        switch (symbol.kind) {

            case StSymbolKind.Variable:

                const variableKind1 = symbol.variableKind;

                const variableKindString1 = variableKind1 !== undefined
                    ? ("VAR_" + VariableKind[variableKind1].toUpperCase()).replace("_LOCAL", "")
                    : "?"
                
                return `${variableKindString1} ${symbol.name}: ${symbol.type?.name ?? "?"}`;
            
            case StSymbolKind.VariableUsage:

                const variableKind2 = symbol.declaration?.variableKind;

                const variableKindString2 = variableKind2 !== undefined
                    ? ("VAR_" + VariableKind[variableKind2].toUpperCase()).replace("_LOCAL", "")
                    : "?"
                
                return `${variableKindString2} ${symbol.name}: ${symbol.declaration?.type?.name ?? "?"}`;
            
            case StSymbolKind.Method:
                return `METHOD ${symbol.name} : ${symbol.type?.name ?? "?"}`;
            
            case StSymbolKind.Function:
                return `FUNCTION ${symbol.name} : ${symbol.type?.name ?? "?"}`;
            
            case StSymbolKind.MethodOrFunctionCall:
                return `${symbol.name} : ${symbol.declaration?.type?.name ?? "?"}`;
            
            case StSymbolKind.Property:
                return `PROPERTY ${symbol.name}`;
            
            case StSymbolKind.FunctionBlock:
                return `FUNCTION_BLOCK ${symbol.name}`;
            
            case StSymbolKind.Struct:
                return `STRUCT ${symbol.name}`;
            
            case StSymbolKind.EnumMember:
                const enumMemberCtx = symbol.context as EnumMemberContext;
                const expr = enumMemberCtx.expr();

                return expr
                    ? `${symbol.parent!.name}.${enumMemberCtx.ID()} := ${expr.getText()}`
                    : `${symbol.parent!.name}.${enumMemberCtx.ID()}`;
            
            default:
                return symbol.name ?? "";
        }
    }
}