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
        public readonly range: Range,
        public readonly selectionRange: Range | undefined) {
        //
    }

    public accessModifier: StAccessModifier | undefined;    // for many things
    public type: StSymbol | undefined;                      // for variable declarations 
    public isBuiltinType: boolean | undefined;              // for type declarations (TODO: move to TypeInfo?)
    public typeInfo: StTypeInfo | undefined;                // for type declarations
    public declaration: StSymbol | undefined;               // for variable and type usages
    public references: StSymbol[] | undefined;              // for many things
    public variableKind: VariableKind | undefined;          // for variable declarations
    public parent: StSymbol | undefined;                   // for variable declarations
    public variables: StSymbol[] | undefined;               // for function blocks, functions, methods, global variable lists, enums, structs
    public methods: StSymbol[] | undefined;                 // for function blocks, interfaces
    public properties: StSymbol[] | undefined;              // for function blocks, interfaces

    // Variables = normal variables + GVL members + Enum members + Struct members

    public addChild<K extends 'variables' | 'methods' | 'properties'>(key: K, symbol: StSymbol): void {

        if (!this[key])
            this[key] = [];

        this[key]!.push(symbol);
    }
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
    None,
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