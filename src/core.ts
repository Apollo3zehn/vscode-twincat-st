import { ParserRuleContext, Token } from "antlr4ng";
import { Range, Uri, window } from "vscode";

export const logger = window.createOutputChannel('TwinCAT Structured Text');

export const documentSelector = [
    { language: "st", pattern: "**/*.st" }
];

export class SourceFile {
    constructor(
        public readonly uri: Uri,
        public readonly uriAsString: string,
        public readonly symbolMap: Map<ParserRuleContext, StSymbol>,
        public readonly varGlobalSectionMap: Map<ParserRuleContext, StSymbol>) {
        //
    }
}

export class StSymbol {

    constructor(
        public readonly documentUri: Uri,
        public readonly id: Token | undefined,
        public readonly name: string | undefined,
        public readonly kind: StSymbolKind,
        public readonly context: ParserRuleContext,
        public readonly parent: StSymbol | undefined,
        public readonly range: Range,
        public readonly selectionRange: Range | undefined) {
        //
    }

    public declaringSymbol: StSymbol | undefined;
    public referencingSymbols: StSymbol[] | undefined;
    public variableKind: VariableKind | undefined;
    public children: StSymbol[] | undefined
}

export enum StSymbolKind {
    Unknown,
    VariableDeclaration,
    VariableDeclarationSection,
    Program,
    Function,
    Method,
    Property,
    FunctionBlock,
    Interface,
    VariableUsage,
    MethodOrFunctionCall
}

export enum VariableKind {
    Local,
    Global,
    Input,
    Output,
    InOut
}