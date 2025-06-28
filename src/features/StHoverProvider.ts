import { Hover, HoverProvider, MarkdownString, Position, ProviderResult, TextDocument } from "vscode";
import { SourceFile, StSymbol, StSymbolKind } from "../core.js";
import { findSymbolAtPosition } from "../utils.js";

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

        // Build hover content
        const markdown = new MarkdownString();
        markdown.appendCodeblock(this.getSymbolSignature(foundSymbol), 'st');

        // if (symbol.documentation) {
        //     markdown.appendMarkdown('\n\n' + symbol.documentation);
        // }

        return new Hover(markdown, foundSymbol.selectionRange ?? foundSymbol.range);
    }

    private getSymbolSignature(symbol: StSymbol): string {

        switch (symbol.kind) {

            case StSymbolKind.Variable:
                return `${symbol.name}: ${symbol.type?.name ?? "?"}`;
            
            case StSymbolKind.VariableUsage:
                return `${symbol.name}: ${symbol.declaration?.type?.name ?? "?"}`;
            
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
            
            default:
                return symbol.name ?? "";
        }
    }
}