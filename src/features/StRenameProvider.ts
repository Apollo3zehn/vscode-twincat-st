import { Position, ProviderResult, Range, RenameProvider, TextDocument, WorkspaceEdit } from "vscode";
import { isInRange } from "../core/utils.js";
import { StModelBuilder } from "../model/StModelBuilder.js";

export class StRenameProvider implements RenameProvider {

    provideRenameEdits(
        document: TextDocument,
        position: Position,
        newName: string
    ): ProviderResult<WorkspaceEdit> {

        const sourceFile = StModelBuilder.model.sourceFileMap.get(document.uri.toString());

        if (!sourceFile)
            return;

        // Find the symbol at the position
        const foundSymbol = Array.from(sourceFile.symbolMap.values())
            .find(symbol => isInRange(symbol.selectionRange, position));

        if (!foundSymbol)
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
        const sourceFile = StModelBuilder.model.sourceFileMap.get(document.uri.toString());

        if (!sourceFile)
            return Promise.reject("The element can't be renamed");

        const foundSymbol = Array.from(sourceFile.symbolMap.values())
            .find(symbol => isInRange(symbol.selectionRange, position));

        if (!foundSymbol)
            return Promise.reject("The element can't be renamed");

        return foundSymbol.selectionRange;
    }
}