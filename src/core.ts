import { ParserRuleContext } from "antlr4ng";
import { Uri, window } from "vscode";

export const logger = window.createOutputChannel('TwinCAT Structured Text');

export class SourceFile {
    constructor(
        public readonly uri: Uri,
        public readonly uriAsString: string,
        public readonly symbols: Map<ParserRuleContext, StSymbol>) {
        //
    }
}

export class StSymbol {
    constructor(
        public readonly name: string | undefined,
        public readonly type: StSymbolKind,
        public readonly context: ParserRuleContext,
        public readonly parent: StSymbol | undefined,
        public children: StSymbol[] | undefined) {
        //
    }
}

export enum StSymbolKind {
    Unknown,
    VariableDeclaration,
    VariableDeclarationSection,
    Program,
    Function,
    Method,
    Property,
    FunctionBlock
}