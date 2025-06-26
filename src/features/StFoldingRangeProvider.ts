import { SourceFile, StSymbol } from '../core.js';
import { CancellationToken, FoldingContext, FoldingRange, FoldingRangeProvider, ProviderResult, TextDocument } from 'vscode';

export class StFoldingRangeProvider implements FoldingRangeProvider {

    private _model: Map<string, SourceFile>;

    constructor(model: Map<string, SourceFile>) {
        this._model = model;
    }

    provideFoldingRanges(
        document: TextDocument,
        context: FoldingContext,
        token: CancellationToken
    ): ProviderResult<FoldingRange[]> {

        const sourceFile = this._model.get(document.uri.toString());

        if (!sourceFile)
            return;

        const foldingRanges: FoldingRange[] = [];

        for (const symbol of sourceFile.symbolMap.values()) {
            this.collectFoldingRanges(symbol, foldingRanges);
        }

        return foldingRanges;
    }

    private collectFoldingRanges(stSymbol: StSymbol, foldingRanges: FoldingRange[]) {

        if (stSymbol.range.start.line < stSymbol.range.end.line) {
            foldingRanges.push(
                new FoldingRange(
                    stSymbol.range.start.line,
                    stSymbol.range.end.line
                )
            );
        }

        if (stSymbol.children) {
            for (const child of stSymbol.children) {
                this.collectFoldingRanges(child, foldingRanges);
            }
        }
    }
}