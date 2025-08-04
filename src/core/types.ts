import { CommonTokenStream, ParserRuleContext, TerminalNode } from "antlr4ng";
import { Diagnostic, Range, Uri, window } from "vscode";
import { StatementContext, TypeContext } from "../generated/StructuredTextParser.js";
import { getOriginalText, getTcConfig } from "./utils.js";
import { M0001 } from "../model/diagnostics.js"

export const logger = window.createOutputChannel("TwinCAT Structured Text");

export enum Architecture {
    x64 = "x64",
    x86 = "x86"
}

export class TcConfig {
    constructor(
        public architecture: Architecture = Architecture.x64
    ) {}
}

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

export class StBuiltinType {

    constructor(
        public readonly code: StBuiltinTypeCode | null, // null = untyped integer literal
        public subRangeParamToken?: TerminalNode,
    ) {
        if (code) {

            const details = nativeTypesDetails.get(code);

            if (!details)
            throw Error(`Unknown native type ${code}`);

            this.details = details;

            if (
                details.kind === StNativeTypeKind.Bitfield ||
                details.kind === StNativeTypeKind.UnsignedInteger ||
                details.kind === StNativeTypeKind.SignedInteger
            ) {
                this.initializeIntegerType(subRangeParamToken);
            }
        }   
    }

    public details: StNativeTypeDetails | undefined;        // all
    public subRangeStart: number | undefined;               // unsigned and signed integers
    public subRangeStop: number | undefined;                // unsigned and signed integers
    public isFullRange: boolean | undefined;                // unsigned and signed integers
    public value: number | undefined;                       // literals or constants
    public isLiteral: boolean | undefined;                  // literals
    public stringLength: number | undefined;                // strings

    private initializeIntegerType(
        subRangeParamToken: TerminalNode | undefined
    ) {
        if (!this.details)
            return;

        const subRangeParam = subRangeParamToken?.getText();
        const subRangeParts = subRangeParam?.split('..');

        if (subRangeParts) {

            this.subRangeStart = Number.parseInt(subRangeParts[0].slice(1));
            this.subRangeStop = Number.parseInt(subRangeParts[1].slice(0, -1));
            this.isFullRange = false;

            const min = this.details.min!;
            const max = this.details.max!;

            if (
                this.subRangeStart !== undefined &&
                this.subRangeStop !== undefined &&
                (
                    !(min <= this.subRangeStart && this.subRangeStart <= max) ||
                    !(min <= this.subRangeStop && this.subRangeStop <= max)
                )
            ) {
                M0001(subRangeParamToken!);
            }
        }

        else {
            this.subRangeStart = this.details.min;
            this.subRangeStop = this.details.max;
            this.isFullRange = true;
        }
    }
}

export class StType {

    public builtinType: StBuiltinType | undefined;      // builtin type
    public declaration: StSymbol | undefined;           // custom type
    public referencedOrElementType: StType | undefined; // array, reference, pointer
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

        if (this.builtinType?.code) {

            const typeString = StBuiltinTypeCode[this.builtinType.code];

            if (!this.builtinType.isFullRange && this.builtinType.subRangeStart && this.builtinType.subRangeStop)
                return typeString + `(${this.builtinType.subRangeStart}..${this.builtinType.subRangeStop})`;

            else
                return typeString;
        }
            
        else if (this.declaration) {
            return this.declaration.id;
        }
        
        else if (this.context) {
            return getOriginalText(this.context)!;
        }
            
        else {
            return "Unknown type";
        }
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

    public accessModifier: StAccessModifier | undefined;                    // for many things
    public modifier: StModifier | undefined;                                // for many things
    public references: StSymbol[] | undefined;                              // for many things

    public typeUsage: StSymbol | undefined;                                 // for variable declarations & properties
    public variableKind: StVariableScope | undefined;                       // for variable declarations
    public parent: StSymbol | undefined;                                    // for variable declarations

    public typeDeclarationDetails: StTypeDeclarationDetails | undefined;    // for type declarations

    public returnTypeUsage: StSymbol | undefined;                           // for method & function declarations

    public declaration: StSymbol | undefined;                               // for variable usages

    public type: StType | undefined;                                        // for type usages
   
    public variablesAndProperties: Map<string, StSymbol> | undefined;       // for function blocks, functions, methods, global variable lists, enums, structs
    public methods: Map<string, StSymbol> | undefined;                      // for function blocks, interfaces

    public children: StSymbol[] | undefined;                                // for document symbol provider

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
        public readonly signed?: boolean,
        public readonly min?: number,
        public readonly max?: number,
        public readonly nextLargerType?: StBuiltinTypeCode
    ) {
        //
    }
}

export class StTypeDeclarationDetails {

    constructor(init?: Partial<StTypeDeclarationDetails>) {
        Object.assign(this, init);
    }

    public underlyingType: StType | undefined;
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
    Union,
    Enum,
    EnumMember
}

export enum StNativeTypeKind {
    Bitfield,
    UnsignedInteger,
    SignedInteger,
    Float,
    Logical,
    String,
    Time,
    Date,
    TimeOfDay,
    DateAndTime
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

export enum StModifier {
    Abstract,
    Final,
    Constant
}

export enum StBuiltinTypeCode {

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

    // String types
    STRING = "STRING",
    WSTRING = "WSTRING",

    // Time types
    TIME = "TIME",
    LTIME = "LTIME",

    // Date types
    DATE = "DATE",
    LDATE = "LDATE",

    // Time-of-day types
    TIME_OF_DAY = "TIME_OF_DAY",
    LTIME_OF_DAY = "LTIME_OF_DAY",

    // Date-and-time types
    DATE_AND_TIME = "DATE_AND_TIME",
    LDATE_AND_TIME = "LDATE_AND_TIME",
}

export class StModel {
    
    public readonly tcConfig: TcConfig;
    public readonly sourceFileMap = new Map<string, StSourceFile>();

    constructor() {
        this.tcConfig = getTcConfig() ?? new TcConfig();
    }
}

export const nativeTypesDetails = new Map<StBuiltinTypeCode, StNativeTypeDetails>([

    // Logical Types
    [StBuiltinTypeCode.BOOL,            new StNativeTypeDetails(StNativeTypeKind.Logical, 1)],
    [StBuiltinTypeCode.BIT,             new StNativeTypeDetails(StNativeTypeKind.Logical, 1)],

    // Bitstring Types
    [StBuiltinTypeCode.BYTE,            new StNativeTypeDetails(StNativeTypeKind.Bitfield, 1, false, 0, 0xFF, StBuiltinTypeCode.INT)],
    [StBuiltinTypeCode.WORD,            new StNativeTypeDetails(StNativeTypeKind.Bitfield, 2, false, 0, 0xFFFF, StBuiltinTypeCode.DINT)],
    [StBuiltinTypeCode.DWORD,           new StNativeTypeDetails(StNativeTypeKind.Bitfield, 4, false, 0, 0xFFFFFFFF, StBuiltinTypeCode.LINT)],
    [StBuiltinTypeCode.LWORD,           new StNativeTypeDetails(StNativeTypeKind.Bitfield, 8, false, 0, Number.MAX_SAFE_INTEGER)],

    // Unsigned Integer Types
    [StBuiltinTypeCode.USINT,           new StNativeTypeDetails(StNativeTypeKind.UnsignedInteger, 1, false, 0, 0xFF, StBuiltinTypeCode.INT)],
    [StBuiltinTypeCode.UINT,            new StNativeTypeDetails(StNativeTypeKind.UnsignedInteger, 2, false, 0, 0xFFFF, StBuiltinTypeCode.DINT)],
    [StBuiltinTypeCode.UDINT,           new StNativeTypeDetails(StNativeTypeKind.UnsignedInteger, 4, false, 0, 0xFFFFFFFF, StBuiltinTypeCode.LINT)],
    [StBuiltinTypeCode.ULINT,           new StNativeTypeDetails(StNativeTypeKind.UnsignedInteger, 8, false, 0, Number.MAX_SAFE_INTEGER)],

    // Signed Integer Types
    [StBuiltinTypeCode.SINT,            new StNativeTypeDetails(StNativeTypeKind.SignedInteger, 1, true, -0x80, 0x7F, StBuiltinTypeCode.UINT)],
    [StBuiltinTypeCode.INT,             new StNativeTypeDetails(StNativeTypeKind.SignedInteger, 2, true, -0x8000, 0x7FFF, StBuiltinTypeCode.UDINT)],
    [StBuiltinTypeCode.DINT,            new StNativeTypeDetails(StNativeTypeKind.SignedInteger, 4, true, -0x80000000, 0x7FFFFFFF, StBuiltinTypeCode.ULINT)],
    [StBuiltinTypeCode.LINT,            new StNativeTypeDetails(StNativeTypeKind.SignedInteger, 8, true, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)],

    // Floating Point Types
    [StBuiltinTypeCode.REAL,            new StNativeTypeDetails(StNativeTypeKind.Float, 4, undefined, -3.402823e+38, 3.402823e+38, StBuiltinTypeCode.LREAL)],
    [StBuiltinTypeCode.LREAL,           new StNativeTypeDetails(StNativeTypeKind.Float, 8, undefined, -1.7976931348623158e+308, 1.7976931348623158e+308)],

    // String Types
    [StBuiltinTypeCode.STRING,          new StNativeTypeDetails(StNativeTypeKind.String, -1)],
    [StBuiltinTypeCode.WSTRING,         new StNativeTypeDetails(StNativeTypeKind.String, -1)],

    // Time types
    [StBuiltinTypeCode.TIME,            new StNativeTypeDetails(StNativeTypeKind.Time, 4)],
    [StBuiltinTypeCode.LTIME,           new StNativeTypeDetails(StNativeTypeKind.Time, 8)],
    
    // Date types
    [StBuiltinTypeCode.DATE,            new StNativeTypeDetails(StNativeTypeKind.Date, 4)],
    [StBuiltinTypeCode.LDATE,           new StNativeTypeDetails(StNativeTypeKind.Date, 8)],
    
    // Time-of-day types
    [StBuiltinTypeCode.TIME_OF_DAY,     new StNativeTypeDetails(StNativeTypeKind.TimeOfDay, 4)],
    [StBuiltinTypeCode.LTIME_OF_DAY,    new StNativeTypeDetails(StNativeTypeKind.TimeOfDay, 8)],
    
    // Date-and-time types
    [StBuiltinTypeCode.DATE_AND_TIME,   new StNativeTypeDetails(StNativeTypeKind.DateAndTime, 4)],
    [StBuiltinTypeCode.LDATE_AND_TIME,  new StNativeTypeDetails(StNativeTypeKind.DateAndTime, 8)],
]);