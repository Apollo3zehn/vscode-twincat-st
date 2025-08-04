import { CancellationToken, DocumentHighlight, DocumentHighlightKind, DocumentHighlightProvider, Position, ProviderResult, TextDocument } from "vscode";
import { StModel } from "../core/types.js";
import { isInRange } from "../core/utils.js";

export class StDocumentHighlightProvider implements DocumentHighlightProvider {
    constructor(private model: StModel) {}

    provideDocumentHighlights(
        document: TextDocument,
        position: Position,
        token: CancellationToken
    ): ProviderResult<DocumentHighlight[]> {

        const sourceFile = this.model.sourceFileMap.get(document.uri.toString());

        if (!sourceFile)
            return [];

        // Find the symbol at the given position
        const targetSymbol = Array.from(sourceFile.symbolMap.values())
            .find(symbol => isInRange(symbol.selectionRange, position));
    
        if (!targetSymbol)
            return [];

        // Always resolve to the canonical declaration symbol
        const declaringSymbol = targetSymbol.declaration ?? targetSymbol;

        const highlights: DocumentHighlight[] = [];

        // Highlight the declaration
        const declRange = declaringSymbol.selectionRange
            ?? declaringSymbol.range;

        if (declRange)
            highlights.push(new DocumentHighlight(declRange, DocumentHighlightKind.Write));

        // Highlight all references
        if (declaringSymbol.references) {

            for (const ref of declaringSymbol.references) {

                const refRange = ref.selectionRange ?? ref.range;

                if (refRange)
                    highlights.push(new DocumentHighlight(refRange, DocumentHighlightKind.Read));
            }
        }

        return highlights;
    }
}