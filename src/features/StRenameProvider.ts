import { Position, ProviderResult, Range, RenameProvider, TextDocument, WorkspaceEdit } from "vscode";
import { SourceFile } from "../core.js";
import { findSymbolAtPosition, isInRange } from "../utils.js";

export class StRenameProvider implements RenameProvider {

    private _model: Map<string, SourceFile>;

    constructor(model: Map<string, SourceFile>) {
        this._model = model;
    }

    provideRenameEdits(
        document: TextDocument,
        position: Position,
        newName: string
    ): ProviderResult<WorkspaceEdit> {

        const sourceFile = this._model.get(document.uri.toString());

        if (!sourceFile)
            return;

        // Find the symbol at the position
        const foundSymbol = Array.from(sourceFile.symbolMap.values())
            .map(symbol => findSymbolAtPosition(symbol, position))
            .find(s => s !== undefined);

        if (!foundSymbol)
            return;

        if (!isInRange(foundSymbol.selectionRange, position))
            return;

        // Get all references (including declaration)
        const allRefs = (foundSymbol.declaration?.references ?? foundSymbol.references) ?? [];
        const allSymbols = [foundSymbol.declaration ?? foundSymbol, ...allRefs];

        const edit = new WorkspaceEdit();

        for (const symbol of allSymbols) {

            if (!symbol.selectionRange)
                continue;

            edit.replace(symbol.documentUri, symbol.selectionRange, newName);
        }

        return edit;
    }

    prepareRename(
        document: TextDocument,
        position: Position
    ): ProviderResult<Range | { range: Range; placeholder: string }> {
        const sourceFile = this._model.get(document.uri.toString());

        if (!sourceFile)
            return Promise.reject("The element can't be renamed");

        const foundSymbol = Array.from(sourceFile.symbolMap.values())
            .map(symbol => findSymbolAtPosition(symbol, position))
            .find(symbol => symbol !== undefined);

        if (!foundSymbol)
            return Promise.reject("The element can't be renamed");

        if (!foundSymbol.selectionRange)
            return Promise.reject("The element can't be renamed");

        if (!isInRange(foundSymbol.selectionRange, position))
            return Promise.reject("The element can't be renamed");

        return {
            range: foundSymbol.selectionRange
        };
    }
}