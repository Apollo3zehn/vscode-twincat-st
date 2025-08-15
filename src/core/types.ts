import { CommonTokenStream, ParserRuleContext, TerminalNode } from "antlr4ng";
import { Diagnostic, Range, Uri, window } from "vscode";
import { StatementContext, TypeContext } from "../generated/StructuredTextParser.js";
import { getOriginalText, getTcConfig, parseBigIntWithRadix } from "./utils.js";
import { M0001 } from "../model/diagnostics.js";

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
    constructor(public readonly uri: Uri) {
        //
    }

    public tokenStream?: CommonTokenStream;
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

            const details = builtinTypesDetails.get(code);

            if (!details)
                throw Error(`Unknown builtin type ${code}`);

            this.details = details;

            if (details.superKind === StBuiltinTypeSuperKind.Integer)
                this.initializeIntegerType(subRangeParamToken);
        }   
    }

    public details?: StBuiltinTypeDetails;  // all
    public subRangeStart?: bigint;          // unsigned and signed integers
    public subRangeStop?: bigint;           // unsigned and signed integers
    public isFullRange?: boolean;           // unsigned and signed integers
    public value?: bigint | number;         // literals or constants (bigint = logical + integers, number = float)
    public isLiteral?: boolean;             // literals
    public stringLength?: number;           // strings

    private initializeIntegerType(
        subRangeParamToken: TerminalNode | undefined
    ) {
        if (!this.details)
            return;

        const subRangeParam = subRangeParamToken?.getText();
        const subRangeParts = subRangeParam?.split('..');

        if (subRangeParts) {

            this.subRangeStart = parseBigIntWithRadix(subRangeParts[0].slice(1), 10);
            this.subRangeStop = parseBigIntWithRadix(subRangeParts[1].slice(0, -1), 10);
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
            this.subRangeStart = this.details.min as bigint;
            this.subRangeStop = this.details.max as bigint;
            this.isFullRange = true;
        }
    }
}

export class StType {

    public builtinType?: StBuiltinType;      // builtin type
    public declaration?: StSymbol;           // custom type
    public referencedOrElementType?: StType; // array, reference, pointer
    public context?: TypeContext;

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

    public accessModifier?: StAccessModifier;                   // for many things
    public modifier?: StModifier;                               // for many things
    public references?: StSymbol[];                             // for many things

    public typeUsage?: StSymbol;                                // for variable declarations & properties
    public variableKind?: StVariableScope;                      // for variable declarations
    public parent?: StSymbol;                                   // for variable declarations

    public typeDeclarationDetails?: StTypeDeclarationDetails;   // for type declarations

    public returnTypeUsage?: StSymbol;                          // for method & function declarations

    public declaration?: StSymbol;                              // for variable usages

    public type?: StType;                                       // for type usages
   
    public variablesAndProperties?: Map<string, StSymbol>;      // for function blocks, functions, methods, global variable lists, enums, structs
    public methods?: Map<string, StSymbol>;                     // for function blocks, interfaces

    public children?: StSymbol[];                               // for document symbol provider

    public addChild(symbol: StSymbol): void {

        if (!this.children)
            this.children = [];

        this.children!.push(symbol);
    }
}

export class StBuiltinTypeDetails {
    constructor(
        public readonly kind: StBuiltinTypeKind,
        public readonly superKind: StBuiltinTypeSuperKind,
        public readonly size: number,
        public readonly signed?: boolean
    ) {
        // Calculate min and max
        if (kind === StBuiltinTypeKind.Float && size === 32) {
            this.min = -3.402823e+38;
            this.max = 3.402823e+38;
        }
        
        else if (kind === StBuiltinTypeKind.Float && size === 64) {
            this.min = -1.7976931348623158e+308;
            this.max = 1.7976931348623158e+308;
        }
        
        else if (kind === StBuiltinTypeKind.SignedInteger) {
            this.min = -1n << BigInt(size - 1);
            this.max = (1n << BigInt(size - 1)) - 1n;
        }
        
        else if (
            kind === StBuiltinTypeKind.UnsignedInteger ||
            kind === StBuiltinTypeKind.Bitfield
        ) {
            this.min = 0n;
            this.max = (1n << BigInt(size)) - 1n;
        }
        
        else {
            this.min = undefined;
            this.max = undefined;
        }

        // Calculate bitmask if size is positive
        if (size > 0)
            this.bitmask = (1n << BigInt(size)) - 1n;
    }

    public readonly min?: bigint | number;
    public readonly max?: bigint | number;
    public readonly bitmask?: bigint;
}

export class StTypeDeclarationDetails {

    constructor(init?: Partial<StTypeDeclarationDetails>) {
        Object.assign(this, init);
    }

    public underlyingType?: StType;
    public baseTypes?: StSymbol[];
    public interfaces?: StSymbol[];
    public subTypes?: StSymbol[];
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

export enum StBuiltinTypeSuperKind {
    Integer,
    Float,
    Logical,
    String,
    ShortDateOrTime,
    LongDateOrTime
}

export enum StBuiltinTypeKind {
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

export const builtinTypesDetails = new Map<StBuiltinTypeCode, StBuiltinTypeDetails>([

    // Logical Types
    [StBuiltinTypeCode.BOOL,            new StBuiltinTypeDetails(StBuiltinTypeKind.Logical, StBuiltinTypeSuperKind.Logical, 1)],
    [StBuiltinTypeCode.BIT,             new StBuiltinTypeDetails(StBuiltinTypeKind.Logical, StBuiltinTypeSuperKind.Logical, 1)],

    // Bitstring Types
    [StBuiltinTypeCode.BYTE,            new StBuiltinTypeDetails(StBuiltinTypeKind.Bitfield, StBuiltinTypeSuperKind.Integer, 8, false)],
    [StBuiltinTypeCode.WORD,            new StBuiltinTypeDetails(StBuiltinTypeKind.Bitfield, StBuiltinTypeSuperKind.Integer, 16, false)],
    [StBuiltinTypeCode.DWORD,           new StBuiltinTypeDetails(StBuiltinTypeKind.Bitfield, StBuiltinTypeSuperKind.Integer, 32, false)],
    [StBuiltinTypeCode.LWORD,           new StBuiltinTypeDetails(StBuiltinTypeKind.Bitfield, StBuiltinTypeSuperKind.Integer, 64, false)],

    // Unsigned Integer Types
    [StBuiltinTypeCode.USINT,           new StBuiltinTypeDetails(StBuiltinTypeKind.UnsignedInteger, StBuiltinTypeSuperKind.Integer, 8, false)],
    [StBuiltinTypeCode.UINT,            new StBuiltinTypeDetails(StBuiltinTypeKind.UnsignedInteger, StBuiltinTypeSuperKind.Integer, 16, false)],
    [StBuiltinTypeCode.UDINT,           new StBuiltinTypeDetails(StBuiltinTypeKind.UnsignedInteger, StBuiltinTypeSuperKind.Integer, 32, false)],
    [StBuiltinTypeCode.ULINT,           new StBuiltinTypeDetails(StBuiltinTypeKind.UnsignedInteger, StBuiltinTypeSuperKind.Integer, 64, false)],

    // Signed Integer Types
    [StBuiltinTypeCode.SINT,            new StBuiltinTypeDetails(StBuiltinTypeKind.SignedInteger, StBuiltinTypeSuperKind.Integer, 8, true)],
    [StBuiltinTypeCode.INT,             new StBuiltinTypeDetails(StBuiltinTypeKind.SignedInteger, StBuiltinTypeSuperKind.Integer, 16, true)],
    [StBuiltinTypeCode.DINT,            new StBuiltinTypeDetails(StBuiltinTypeKind.SignedInteger, StBuiltinTypeSuperKind.Integer, 32, true)],
    [StBuiltinTypeCode.LINT,            new StBuiltinTypeDetails(StBuiltinTypeKind.SignedInteger, StBuiltinTypeSuperKind.Integer, 64, true)],

    // Floating Point Types
    [StBuiltinTypeCode.REAL,            new StBuiltinTypeDetails(StBuiltinTypeKind.Float, StBuiltinTypeSuperKind.Float, 32, undefined)],
    [StBuiltinTypeCode.LREAL,           new StBuiltinTypeDetails(StBuiltinTypeKind.Float, StBuiltinTypeSuperKind.Float, 64, undefined)],

    // String Types
    [StBuiltinTypeCode.STRING,          new StBuiltinTypeDetails(StBuiltinTypeKind.String, StBuiltinTypeSuperKind.String, -1)],
    [StBuiltinTypeCode.WSTRING,         new StBuiltinTypeDetails(StBuiltinTypeKind.String, StBuiltinTypeSuperKind.String, -1)],

    // Time types
    [StBuiltinTypeCode.TIME,            new StBuiltinTypeDetails(StBuiltinTypeKind.Time, StBuiltinTypeSuperKind.ShortDateOrTime, 32)],
    [StBuiltinTypeCode.LTIME,           new StBuiltinTypeDetails(StBuiltinTypeKind.Time, StBuiltinTypeSuperKind.LongDateOrTime, 64)],
    
    // Date types
    [StBuiltinTypeCode.DATE,            new StBuiltinTypeDetails(StBuiltinTypeKind.Date, StBuiltinTypeSuperKind.ShortDateOrTime, 32)],
    [StBuiltinTypeCode.LDATE,           new StBuiltinTypeDetails(StBuiltinTypeKind.Date, StBuiltinTypeSuperKind.LongDateOrTime, 64)],
    
    // Time-of-day types
    [StBuiltinTypeCode.TIME_OF_DAY,     new StBuiltinTypeDetails(StBuiltinTypeKind.TimeOfDay, StBuiltinTypeSuperKind.ShortDateOrTime, 32)],
    [StBuiltinTypeCode.LTIME_OF_DAY,    new StBuiltinTypeDetails(StBuiltinTypeKind.TimeOfDay, StBuiltinTypeSuperKind.LongDateOrTime, 64)],
    
    // Date-and-time types
    [StBuiltinTypeCode.DATE_AND_TIME,   new StBuiltinTypeDetails(StBuiltinTypeKind.DateAndTime, StBuiltinTypeSuperKind.ShortDateOrTime, 32)],
    [StBuiltinTypeCode.LDATE_AND_TIME,  new StBuiltinTypeDetails(StBuiltinTypeKind.DateAndTime, StBuiltinTypeSuperKind.LongDateOrTime, 64)],
]);