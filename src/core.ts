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

export class StType {

    public builtinType: StBuiltinType | undefined;      // builtin types
    public declaration: StSymbol | undefined;           // custom types

    public underlyingType: StType | undefined;          // arrays, references, pointers, enums, aliases

    public context: TypeContext | undefined;

    public get isArray(): boolean {

        if (!this.context)
            return false;

        return !!this.context.ARRAY();
    }
    
    public get isPointer(): boolean {

        if (!this.context)
            return false;

        return !!this.context.POINTER_TO();
    }

    public get isReference(): boolean {

        if (!this.context)
            return false;

        return !!this.context.REFERENCE_TO();
    }

    public getId(): string {

        if (this.builtinType)
            return StBuiltinType[this.builtinType];

        else if (this.declaration)
            return this.declaration.id
                
        else
            return "Unknown type";
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

    public accessModifier: StAccessModifier | undefined;                // for many things
    public references: StSymbol[] | undefined;                          // for many things

    public typeUsage: StSymbol | undefined;                             // for variable declarations & properties
    public variableKind: StVariableScope | undefined;                      // for variable declarations
    public parent: StSymbol | undefined;                                // for variable declarations

    public typeHierarchyInfo: StTypeHierarchyInfo | undefined;          // for type declarations

    public returnTypeUsage: StSymbol | undefined;                       // for method & function declarations

    public declaration: StSymbol | undefined;                           // for variable usages

    public type: StType | undefined;                                    // for type usages
   
    public variablesAndProperties: Map<string, StSymbol> | undefined;   // for function blocks, functions, methods, global variable lists, enums, structs
    public methods: Map<string, StSymbol> | undefined;                  // for function blocks, interfaces

    public children: StSymbol[] | undefined;                            // for hover provider

    // Variables = normal variables + GVL members + Enum members + Struct members

    public addChild(symbol: StSymbol): void {

        if (!this.children)
            this.children = [];

        this.children!.push(symbol);
    }
}

export class StNativeTypeDetails {
    constructor(
        public readonly kind: StNativeTypeKind,
        public readonly size: number,
        public readonly signed: boolean | undefined,
        public readonly min?: number,
        public readonly max?: number
    ) {
        //
    }
}

export class StTypeHierarchyInfo {

    constructor(init?: Partial<StTypeHierarchyInfo>) {
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
    TypeUsage,
    Gvl,
    Alias,
    Struct,
    Enum,
    EnumMember
}

export enum StNativeTypeKind {
    Bitfield,
    UnsignedInteger,
    SignedInteger,
    Float,
    Logical
}

export enum StVariableScope {
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
    // Logical types
    BOOL = "BOOL",
    BIT = "BIT",

    // Bitstring types
    BYTE = "BYTE",
    WORD = "WORD",
    DWORD = "DWORD",
    LWORD = "LWORD",

    // Unsigned integer types
    USINT = "USINT",
    UINT = "UINT",
    UDINT = "UDINT",
    ULINT = "ULINT",

    // Signed integer types
    SINT = "SINT",
    INT = "INT",
    DINT = "DINT",
    LINT = "LINT",

    // Floating point types
    REAL = "REAL",
    LREAL = "LREAL",

    // Time and date types
    TIME = "TIME",
    DATE = "DATE",
    TIME_OF_DAY = "TIME_OF_DAY",
    DATE_AND_TIME = "DATE_AND_TIME",

    // String types
    STRING = "STRING"
}

export class StModel {
    
    public readonly sourceFileMap = new Map<string, StSourceFile>();

    public static readonly nativeTypes = new Map<StBuiltinType, StNativeTypeDetails>([
        
        [StBuiltinType.BOOL,  new StNativeTypeDetails(StNativeTypeKind.Logical, 1, undefined, 0, 1)],
        [StBuiltinType.BIT,   new StNativeTypeDetails(StNativeTypeKind.Logical, 1, undefined, 0, 1)],

        [StBuiltinType.BYTE,  new StNativeTypeDetails(StNativeTypeKind.Bitfield, 1, false, 0, 0xFF)],
        [StBuiltinType.WORD,  new StNativeTypeDetails(StNativeTypeKind.Bitfield, 2, false, 0, 0xFFFF)],
        [StBuiltinType.DWORD, new StNativeTypeDetails(StNativeTypeKind.Bitfield, 4, false, 0, 0xFFFFFFFF)],
        [StBuiltinType.LWORD, new StNativeTypeDetails(StNativeTypeKind.Bitfield, 8, false, 0, Number.MAX_SAFE_INTEGER)],

        [StBuiltinType.USINT, new StNativeTypeDetails(StNativeTypeKind.UnsignedInteger, 1, false, 0, 0xFF)],
        [StBuiltinType.UINT,  new StNativeTypeDetails(StNativeTypeKind.UnsignedInteger, 2, false, 0, 0xFFFF)],
        [StBuiltinType.UDINT, new StNativeTypeDetails(StNativeTypeKind.UnsignedInteger, 4, false, 0, 0xFFFFFFFF)],
        [StBuiltinType.ULINT, new StNativeTypeDetails(StNativeTypeKind.UnsignedInteger, 8, false, 0, Number.MAX_SAFE_INTEGER)],

        [StBuiltinType.SINT,  new StNativeTypeDetails(StNativeTypeKind.SignedInteger, 1, true, -0x80, 0x7F)],
        [StBuiltinType.INT,   new StNativeTypeDetails(StNativeTypeKind.SignedInteger, 2, true, -0x8000, 0x7FFF)],
        [StBuiltinType.DINT,  new StNativeTypeDetails(StNativeTypeKind.SignedInteger, 4, true, -0x80000000, 0x7FFFFFFF)],
        [StBuiltinType.LINT,  new StNativeTypeDetails(StNativeTypeKind.SignedInteger, 8, true, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)],

        [StBuiltinType.REAL,  new StNativeTypeDetails(StNativeTypeKind.Float, 4, undefined, -3.402823e+38, 3.402823e+38)],
        [StBuiltinType.LREAL, new StNativeTypeDetails(StNativeTypeKind.Float, 8, undefined, -1.7976931348623158e+308, 1.7976931348623158e+308)],
    ]);
}