import { CommonTokenStream, ParserRuleContext, Token } from "antlr4ng";
import { Diagnostic, Range, Uri, window } from "vscode";
import { StatementContext, TypeContext } from "./generated/StructuredTextParser.js";

export const logger = window.createOutputChannel("TwinCAT Structured Text");

export const documentSelector = [
    { language: "st", pattern: "**/*.st" }
];

export class StSourceFile {
    constructor(
        public readonly uri: Uri,
        public readonly uriAsString: string,
        public readonly tokenStream: CommonTokenStream) {
        //
    }

    public readonly symbolMap = new Map<ParserRuleContext, StSymbol>();
    public readonly globalObjects = new Map<string, StSymbol>();
    public readonly statements: StatementContext[] = [];
    public readonly diagnostics: Diagnostic[] = [];
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

    public accessModifier: StAccessModifier | undefined;                // for many things
    public references: StSymbol[] | undefined;                          // for many things

    public typeHierarchyInfo: StTypeInfo | undefined;                   // for type declarations

    public typeUsage: StSymbol | undefined;                             // for variable declarations
    public variableKind: VariableKind | undefined;                      // for variable declarations
    public parent: StSymbol | undefined;                                // for variable declarations

    public declaration: StSymbol | undefined;                           // for variable and type usages (custom types)

    public underlyingTypeUsage: StSymbol | undefined;                   // for type usage (arrays, references, pointers, enums, aliases)
    public builtinType: StBuiltinType | undefined;                      // for type usage (builtin types)
    
    public variablesAndProperties: Map<string, StSymbol> | undefined;   // for function blocks, functions, methods, global variable lists, enums, structs
    public methods: Map<string, StSymbol> | undefined;                  // for function blocks, interfaces

    public qualifier: StSymbol | undefined;                             // for variable access or call statements

    public children: StSymbol[] | undefined;                            // for hover provider

    // Variables = normal variables + GVL members + Enum members + Struct members

    public addChild(symbol: StSymbol): void {

        if (!this.children)
            this.children = [];

        this.children!.push(symbol);
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

export class StNativeTypeDetails {
    constructor(
        public readonly kind: StNativeTypeKind,
        public readonly size: number,
        public readonly signed: boolean | undefined) {
        //
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

export enum StNativeTypeKind {
    Integer,
    Float,
    Boolean
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
    LWORD = "LWORD",
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

export class StModel {
    
    public readonly sourceFileMap = new Map<string, StSourceFile>();

    public static readonly nativeTypes = new Map<StBuiltinType, StNativeTypeDetails>([
        [StBuiltinType.BOOL,  new StNativeTypeDetails(StNativeTypeKind.Boolean, 1, undefined)],
        
        [StBuiltinType.BYTE,  new StNativeTypeDetails(StNativeTypeKind.Integer, 1, false)],
        [StBuiltinType.WORD,  new StNativeTypeDetails(StNativeTypeKind.Integer, 2, false)],
        [StBuiltinType.DWORD, new StNativeTypeDetails(StNativeTypeKind.Integer, 4, false)],
        [StBuiltinType.LWORD, new StNativeTypeDetails(StNativeTypeKind.Integer, 8, false)],
    
        [StBuiltinType.USINT, new StNativeTypeDetails(StNativeTypeKind.Integer, 1, false)],
        [StBuiltinType.UINT,  new StNativeTypeDetails(StNativeTypeKind.Integer, 2, false)],
        [StBuiltinType.UDINT, new StNativeTypeDetails(StNativeTypeKind.Integer, 4, false)],
        [StBuiltinType.ULINT, new StNativeTypeDetails(StNativeTypeKind.Integer, 8, false)],

        [StBuiltinType.SINT,  new StNativeTypeDetails(StNativeTypeKind.Integer, 1, true)],
        [StBuiltinType.INT,   new StNativeTypeDetails(StNativeTypeKind.Integer, 2, true)],
        [StBuiltinType.DINT,  new StNativeTypeDetails(StNativeTypeKind.Integer, 4, true)],
        [StBuiltinType.LINT,  new StNativeTypeDetails(StNativeTypeKind.Integer, 8, true)],

        [StBuiltinType.REAL,  new StNativeTypeDetails(StNativeTypeKind.Float, 4, undefined)],
        [StBuiltinType.LREAL, new StNativeTypeDetails(StNativeTypeKind.Float, 8, undefined)],
    ]);
}