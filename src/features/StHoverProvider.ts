import { Hover, HoverProvider, MarkdownString, Position, ProviderResult, TextDocument } from "vscode";
import { StAccessModifier, StBuiltinType, StModel, StSymbol, StSymbolKind } from "../core.js";
import { EnumDeclContext, EnumMemberContext, FunctionBlockContext, PropertyContext, StructDeclContext, VarDeclContext, VarDeclSectionContext, VarGlobalSectionContext } from "../generated/StructuredTextParser.js";
import { isInRange } from "../utils.js";

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
            .find(symbol => isInRange(symbol.selectionRange, position));
    
        if (!foundSymbol)
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
            ? `${StAccessModifier[symbol.accessModifier].toUpperCase()} `
            : "";

        switch (symbol.kind) {

            case StSymbolKind.VariableDeclaration:
                
                const context = symbol.context;
                
                let prefix = "";
                let qualifier = "";

                if (context.parent instanceof StructDeclContext)
                    qualifier = `${symbol.parent?.id ?? "??"}.`;
                    
                else if (context.parent instanceof VarGlobalSectionContext) {
                    prefix = "VAR_GLOBAL ";
                    qualifier = `${symbol.parent?.id ?? "??"}.`;
                }
                    
                else if (context.parent instanceof VarDeclSectionContext) {
                    
                    prefix = context.parent.varSectionType().getText() + " ";

                    if (prefix.startsWith("VAR_INST"))
                        qualifier = `${symbol.parent?.parent?.id ?? "??"}.`;

                    else if (symbol.parent?.kind === StSymbolKind.FunctionBlock)
                        qualifier = `${symbol.parent?.id ?? "??"}.`;
                }

                return `${prefix}${accessModifier}${qualifier}${symbol.id}: ${symbol.typeUsage?.id ?? "?"}`;
            
            case StSymbolKind.VariableUsage:

                if (symbol.declaration)
                    return this.getSymbolSignature(symbol.declaration);

                else
                    return symbol.id ?? "";
            
            case StSymbolKind.TypeUsage:

                if (symbol.declaration)
                    return this.getSymbolSignature(symbol.declaration);

                else
                    return symbol.id ?? "";
                       
            case StSymbolKind.Method:

                let suffix1 = symbol.typeUsage?.id
                    ? ` : ${symbol.typeUsage?.id}`
                    : "";
                
                return `METHOD ${accessModifier}${symbol.id}${suffix1}`;
            
            case StSymbolKind.Function:

                let suffix2 = symbol.typeUsage?.id
                    ? ` : ${symbol.typeUsage?.id}`
                    : "";
                
                return `FUNCTION ${accessModifier}${symbol.id}${suffix2}`;
            
            case StSymbolKind.Property:
                return `PROPERTY ${accessModifier}${symbol.id} : ${symbol.typeUsage?.id ?? "?"}`;
            
            case StSymbolKind.FunctionBlock:
                return `FUNCTION_BLOCK ${accessModifier}${symbol.id}`;
            
            case StSymbolKind.Interface:
                return `INTERFACE ${accessModifier}${symbol.id}`;
            
            case StSymbolKind.Program:
                return `PROGRAM ${accessModifier}${symbol.id}`;
            
            case StSymbolKind.Gvl:
                return `VAR_GLOBAL ${accessModifier}${symbol.id}`;
            
            case StSymbolKind.Alias:
                return `ALIAS ${accessModifier}${symbol.id} : ${this.getTypeId(symbol)}`;
            
            case StSymbolKind.Struct:
                return `STRUCT ${accessModifier}${symbol.id}`;
            
            case StSymbolKind.Enum:
                return `ENUM ${accessModifier}${symbol.id} : ${this.getTypeId(symbol)}`;
            
            case StSymbolKind.EnumMember:

                const enumMemberCtx = symbol.context as EnumMemberContext;
                const expr = enumMemberCtx.expr();

                return expr
                    ? `${symbol.parent!.id}.${enumMemberCtx.ID()}: ${symbol.parent!.id} := ${expr.getText()}`
                    : `${symbol.parent!.id}.${enumMemberCtx.ID()}: ${symbol.parent!.id}`;
        }

        return symbol.id ?? "";
    }

    private getTypeId(symbol: StSymbol): string {
        
        if (symbol.builtinType)
            return StBuiltinType[symbol.builtinType];

        else
            return symbol.underlyingTypeUsage?.id ?? "??"
    }
}