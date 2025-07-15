import { CommonTokenStream, ParserRuleContext, Token } from "antlr4ng";
import { Range, Uri, window } from "vscode";
import { TypeContext } from "./generated/StructuredTextParser.js";

export const logger = window.createOutputChannel("TwinCAT Structured Text");

export const documentSelector = [
    { language: "st", pattern: "**/*.st" }
];

export class StModel {
    public readonly sourceFileMap = new Map<string, StSourceFile>()
    public readonly variablesMap = new Map<ParserRuleContext, StSymbol>()
    public readonly functionsMap = new Map<ParserRuleContext, StSymbol>()
    public readonly typesMap = new Map<ParserRuleContext, StSymbol>()
}

export class StSourceFile {
    constructor(
        public readonly uri: Uri,
        public readonly uriAsString: string,
        public readonly tokenStream: CommonTokenStream,
        public readonly symbolMap: Map<ParserRuleContext, StSymbol>) {
        //
    }
}

export class StSymbol {

    constructor(
        public readonly documentUri: Uri,
        public readonly id: string,
        public readonly kind: StSymbolKind,
        public readonly context: ParserRuleContext,
        public readonly range: Range,
        public readonly selectionRange: Range | undefined) {
        //
    }

    public accessModifier: StAccessModifier | undefined;    // for many things
    public references: StSymbol[] | undefined;              // for many things

    public typeHierarchyInfo: StTypeInfo | undefined;       // for type declarations

    public type: StSymbol | undefined;                      // for variable declarations
    public variableKind: VariableKind | undefined;          // for variable declarations
    public parent: StSymbol | undefined;                    // for variable declarations

    public declaration: StSymbol | undefined;               // for variable and type usages (custom types)

    public underlyingTypeUsage: StSymbol | undefined;       // for type usage (arrays, references, pointers, enums, aliases)
    public builtinType: StBuiltinType | undefined;          // for type usage (builtin types)
    
    public variables: StSymbol[] | undefined;               // for function blocks, functions, methods, global variable lists, enums, structs
    public methods: StSymbol[] | undefined;                 // for function blocks, interfaces
    public properties: StSymbol[] | undefined;              // for function blocks, interfaces

    public qualifier: StSymbol | undefined;                 // for variable access or call statements

    public children: StSymbol[] | undefined;                // for hover provider

    // Variables = normal variables + GVL members + Enum members + Struct members

    public addChild(symbol: StSymbol): void {

        if (!this.children)
            this.children = [];

        this.children!.push(symbol);
    }

    public add<K extends 'variables' | 'methods' | 'properties'>(key: K, symbol: StSymbol): void {

        if (!this[key])
            this[key] = [];

        this[key]!.push(symbol);
    }

    // For variable declarations
    get isArray(): boolean {
        if (this.kind !== StSymbolKind.TypeUsage)
            throw new Error("StSymbolKind is not TypeUsage");

        return !!(this.context as TypeContext).ARRAY();
    }
    
    get isPointer(): boolean {
        if (this.kind !== StSymbolKind.TypeUsage)
            throw new Error("StSymbolKind is not TypeUsage");

        return !!(this.context as TypeContext).POINTER_TO();
    }

    get isReference(): boolean {
        if (this.kind !== StSymbolKind.TypeUsage)
            throw new Error("StSymbolKind is not TypeUsage");

        return !!(this.context as TypeContext).REFERENCE_TO();
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
    VariableDeclaration,
    Program,
    Function,
    Method,
    Property,
    FunctionBlock,
    Interface,
    VariableUsage,
    CallStatement,
    TypeUsage,
    Gvl,
    Alias,
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

export enum StBuiltinType {
    INT = "INT",
    REAL = "REAL",
    BOOL = "BOOL",
    STRING = "STRING",
    DINT = "DINT",
    BYTE = "BYTE",
    WORD = "WORD",
    DWORD = "DWORD",
    SINT = "SINT",
    USINT = "USINT",
    UINT = "UINT",
    UDINT = "UDINT",
    LINT = "LINT",
    ULINT = "ULINT",
    LREAL = "LREAL",
    TIME = "TIME",
    DATE = "DATE",
    TIME_OF_DAY = "TIME_OF_DAY",
    DATE_AND_TIME = "DATE_AND_TIME"
}