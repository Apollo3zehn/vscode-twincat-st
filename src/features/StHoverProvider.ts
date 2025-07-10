import { Hover, HoverProvider, MarkdownString, Position, ProviderResult, TextDocument } from "vscode";
import { StAccessModifier, StModel, StSymbol, StSymbolKind } from "../core.js";
import { EnumMemberContext } from "../generated/StructuredTextParser.js";
import { findSymbolAtPosition, isInRange } from "../utils.js";

export class StHoverProvider implements HoverProvider {

    private _model: StModel;
    
    constructor(model: StModel) {
        this._model = model;
    }

    provideHover(document: TextDocument, position: Position): ProviderResult<Hover> {
        
        const sourceFile = this._model.sourceFileMap.get(document.uri.toString());

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

            if (previous && previous.channel === 1 && previous.text !== undefined)
                comment = previous.text;

            // Look for a comment that starts on the same line
            if (endTokenIndex) {
                const next = tokenStream.get(endTokenIndex + 1);

                if (
                    next &&
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

        const accessModifier = symbol.accessModifier
            ? ` ${StAccessModifier[symbol.accessModifier].toUpperCase()}`
            : "";

        switch (symbol.kind) {

            case StSymbolKind.Variable:
                return `${symbol.parent!.name}.${symbol.name}: ${symbol.type?.name ?? "?"}`;
            
            case StSymbolKind.VariableUsage:                
                const declaration = symbol.declaration;
                return `${declaration?.parent?.name ?? "?"}.${symbol.name}: ${declaration?.type?.name ?? "?"}`;
            
            case StSymbolKind.TypeUsage:

                if (symbol.declaration)
                    return this.getSymbolSignature(symbol.declaration);

                else
                    return symbol.name ?? "";
            
            case StSymbolKind.MethodOrFunctionCall:
                return `${symbol.name} : ${symbol.declaration?.type?.name ?? "?"}`;
            
            case StSymbolKind.Method:
                return `METHOD${accessModifier} ${symbol.name} : ${symbol.type?.name ?? "?"}`;
            
            case StSymbolKind.Function:
                return `FUNCTION${accessModifier} ${symbol.name} : ${symbol.type?.name ?? "?"}`;
            
            case StSymbolKind.Property:
                return `PROPERTY${accessModifier} ${symbol.name} : ${symbol.type?.name ?? "?"}`;
            
            case StSymbolKind.FunctionBlock:
                return `FUNCTION_BLOCK${accessModifier} ${symbol.name}`;
            
            case StSymbolKind.Interface:
                return `INTERFACE${accessModifier} ${symbol.name}`;
            
            case StSymbolKind.Program:
                return `PROGRAM${accessModifier} ${symbol.name}`;
            
            case StSymbolKind.Struct:
                return `TYPE${accessModifier} ${symbol.name}`;
            
            case StSymbolKind.Enum:
                return `TYPE${accessModifier} ${symbol.name} : ${symbol.type?.name ?? "INT"}`;
            
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