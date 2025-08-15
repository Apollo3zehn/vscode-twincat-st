import { Interval, ParserRuleContext, Token } from "antlr4ng";
import * as fs from "fs";
import path from "path";
import { Position, Range, workspace } from "vscode";
import { ModifierContext } from "../generated/StructuredTextParser.js";
import { Architecture, StBuiltinTypeCode, StModifier, StSymbol, StSymbolKind, StType, TcConfig } from "./types.js";
import { Temporal } from "temporal-polyfill";

export const EPOCH = Temporal.PlainDateTime.from({
    year: 1970,
    month: 1,
    day: 1
});

export const defaultRange = new Range(0, 0, 0, 0);

export const TIME_COMPONENTS = [
    { value: 0, max: undefined },   // days
    { value: 0, max: 23 },          // hours
    { value: 0, max: 59 },          // minutes
    { value: 0, max: 59 },          // seconds
    { value: 0, max: 999 },         // milliseconds
    { value: 0, max: 999 },         // microseconds
    { value: 0, max: 999 }          // nanoseconds
];

export function isInRange(range: Range | undefined, position: Position): boolean {
    
    const isOutOfRange = (
        !range ||
        position.line < range.start.line ||
        position.line > range.end.line ||
        (position.line === range.start.line && position.character < range.start.character) ||
        (position.line === range.end.line && position.character > range.end.character)
    );

    return !isOutOfRange;
}

export function getNestedTypeOrSelf(
    type: StType
): StType {

    let current: StType = type;

    while (current?.declaration?.typeDeclarationDetails?.underlyingType) {
        current = current.declaration.typeDeclarationDetails.underlyingType;
    }

    return current;
}

export function findContextAtPosition(ctx: ParserRuleContext, position: Position): ParserRuleContext | undefined {

    const start = ctx.start;
    const stop = ctx.stop ?? ctx.start;

    if (!start || !stop) {
        return undefined;
    }

    const startsBefore =
        start.line - 1 < position.line ||
        (start.line - 1 === position.line && start.column <= position.character);

    const endsAfter =
        stop.line - 1 > position.line ||
        (stop.line - 1 === position.line && (stop.column + (stop.text?.length ?? 1)) >= position.character);

    if (startsBefore && endsAfter)
        return ctx;

    return undefined;
}

export function getTokenRange(token: Token | undefined): Range {

    if (!token)
        return new Range(0, 0, 0, 0);

    return new Range(
        token.line - 1,
        token.column,
        token.line - 1,
        token.column + token.stop - token.start + 1
    );
}

export function getContextRange(ctx: ParserRuleContext | null | undefined): Range {

    if (!ctx)
        return new Range(0, 0, 0, 0);

    const start = ctx.start!;
    const stop = ctx.stop!;

    return new Range(
        start.line - 1,
        start.column,
        stop.line - 1,
        stop.column + stop.stop - stop.start + 1
    );
}

export function getOriginalText(ctx: ParserRuleContext): string | undefined {

    const start = ctx.start?.start;
    const stop = ctx.stop?.stop ?? ctx.start?.stop;

    if (ctx.start?.inputStream && start && stop)
        return ctx.start.inputStream.getTextFromInterval(Interval.of(start, stop));

    return undefined;
}

export function getTypeOfType(kind: StSymbolKind): string {
    switch (kind) {
        case StSymbolKind.FunctionBlock: return "FUNCTION_BLOCK";
        case StSymbolKind.Gvl: return "VAR_GLOBAL";
        case StSymbolKind.Enum: return "ENUM";
        case StSymbolKind.Struct: return "STRUCT";
        case StSymbolKind.Union: return "UNION";
        case StSymbolKind.Program: return "PROGRAM";
        case StSymbolKind.Alias: return "ALIAS";
        case StSymbolKind.Function: return "FUNCTION";
        case StSymbolKind.Method: return "METHOD";
        case StSymbolKind.Property: return "PROPERTY";
        case StSymbolKind.VariableDeclaration: return "VARIABLE";
        case StSymbolKind.EnumMember: return "ENUM_MEMBER";
        default: return "Unknown";
    }
}

export function findOverflowComponent(startIdx: number): boolean {

    for (let i = startIdx + 1; i < TIME_COMPONENTS.length; ++i) {

        const component = TIME_COMPONENTS[i];

        if (component.value > component.max!)
            return true;
    }

    return false;
}

export function connectDeclaringSymbols(symbol: StSymbol, declaringSymbol: StSymbol) {

    symbol.declaration = declaringSymbol;

    if (!declaringSymbol.references)
        declaringSymbol.references = [];

    declaringSymbol.references.push(symbol);
}

let config: TcConfig | undefined;

export function getTcConfig(): TcConfig | undefined {

    if (config)
        return config;

    const folder = workspace.workspaceFolders?.[0]?.uri.fsPath;
    if (!folder)
        return undefined;

    const configPath = path.join(folder, "twincat-st.json");
    if (!fs.existsSync(configPath))
        return undefined;

    try {
        const raw = fs.readFileSync(configPath, "utf8");
        const parsed = JSON.parse(raw);

        let arch = parsed.architecture in Architecture
            ? parsed.architecture as Architecture
            : undefined;

        config = new TcConfig(arch);
        return config;
    } catch {
        return undefined;
    }
}

export function convertToPlatformSpecificTypeText(typeText: string, arch?: Architecture) {

    switch (typeText) {

        case "XWORD":
        case "__XWORD":

            return arch === Architecture.x64
                ? "LWORD"
                : "DWORD";

        case "UXINT":
        case "__UXINT":
            
            return arch === Architecture.x64
                ? "ULINT"
                : "UDINT";

        case "XINT":
        case "__XINT":
            
            return arch === Architecture.x64
                ? "LINT"
                : "DINT";
        
        case "PVOID":
            
            return arch === Architecture.x64
                ? "LWORD"
                : "DWORD";
        
        case "D":
            return "DATE";
        
        case "LD":
            return "LDATE";
        
        case "TOD":
            return "TIME_OF_DAY";
        
        case "LTOD":
            return "LTIME_OF_DAY";
        
        case "DT":
            return "DATE_AND_TIME";
        
        case "LDT":
            return "LDATE_AND_TIME";
        
        default:
            return typeText;
    }
}

export function getModifier(modifierCtx: ModifierContext | null): StModifier | undefined {

    if (!modifierCtx)
        return undefined;

    const raw = modifierCtx.getText();
    
    if (!raw)
        return undefined;

    const normalized =
        raw.charAt(0).toUpperCase() +
        raw.slice(1).toLowerCase();

    return (normalized in StModifier)
        ? StModifier[normalized as keyof typeof StModifier]
        : undefined;
}

export function parseBigIntWithRadix(value: string, radix: number): bigint {
    
    let prefix = "";

    switch (radix) {

        case 2:
            prefix = "0b";
            break;
        
        case 8:
            prefix = "0o";
            break;
        
        case 10:
            prefix = "";
            break;
        
        case 16:
            prefix = "0x";
            break;
        
        default:
            throw new Error(`Unsupported radix: ${radix}`);
    }

    return BigInt(prefix + value);
}