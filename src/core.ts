import { CommonTokenStream, ParserRuleContext, Token } from "antlr4ng";
import { Range, Uri, window } from "vscode";

export const logger = window.createOutputChannel('TwinCAT Structured Text');

export const documentSelector = [
    { language: "st", pattern: "**/*.st" }
];

export class SourceFile {
    constructor(
        public readonly uri: Uri,
        public readonly uriAsString: string,
        public readonly tokenStream: CommonTokenStream,
        public readonly symbolMap: Map<ParserRuleContext, StSymbol>,
        public readonly typeDeclarationsMap: Map<ParserRuleContext, StSymbol>,
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

    public accessModifier: StAccessModifier | undefined;
    public type: StSymbol | undefined;
    public isBuiltinType: boolean | undefined;
    public typeInfo: StTypeInfo | undefined;
    public declaration: StSymbol | undefined;
    public references: StSymbol[] | undefined;
    public variableKind: VariableKind | undefined;
    public children: StSymbol[] | undefined
}

export class StTypeInfo {

    constructor(init?: Partial<StTypeInfo>) {
        Object.assign(this, init);
    }

    public baseTypes: StSymbol[] | undefined;
    public interfaces: StSymbol[] | undefined;
    public subTypes: StSymbol[] | undefined;
}

export enum StSymbolKind {
    Unknown,
    Variable,
    VariableSection,
    Program,
    Function,
    Method,
    Property,
    FunctionBlock,
    Interface,
    VariableUsage,
    MethodOrFunctionCall,
    TypeUsage,
    Struct,
    Enum,
    EnumMember
}

export enum VariableKind {
    Local,
    Global,
    Input,
    Output,
    InOut
}

export enum StAccessModifier {
    Public,
    Internal,
    Protected,
    Private
}