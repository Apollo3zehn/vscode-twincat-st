import { Interval, ParserRuleContext, TerminalNode, Token } from "antlr4ng";
import * as fs from "fs";
import path from "path";
import { Diagnostic, DiagnosticSeverity, Position, Range, workspace } from "vscode";
import { Architecture, StModel, StModifier, StNativeTypeKind, StSourceFile, StSymbol, StSymbolKind, StType, TcConfig } from "./types.js";
import { ModifierContext } from "../generated/StructuredTextParser.js";

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

// TODO: Simplify these methods somehow
export function isTimeInRange(
    days: number, hours: number, minutes: number, seconds: number,
    milliseconds: number, microseconds: number, nanoseconds: number,
    maxDays: number, maxHours: number, maxMinutes: number, maxSeconds: number,
    maxMilliseconds: number, maxMicroseconds: number, maxNanoseconds: number
): boolean {
    if (days > maxDays) return false;
    if (days === maxDays && hours > maxHours) return false;
    if (days === maxDays && hours === maxHours && minutes > maxMinutes) return false;
    if (days === maxDays && hours === maxHours && minutes === maxMinutes && seconds > maxSeconds) return false;
    if (days === maxDays && hours === maxHours && minutes === maxMinutes && seconds === maxSeconds && milliseconds > maxMilliseconds) return false;
    if (days === maxDays && hours === maxHours && minutes === maxMinutes && seconds === maxSeconds && milliseconds === maxMilliseconds && microseconds > maxMicroseconds) return false;
    if (days === maxDays && hours === maxHours && minutes === maxMinutes && seconds === maxSeconds && milliseconds === maxMilliseconds && microseconds === maxMicroseconds && nanoseconds > maxNanoseconds) return false;
    return true;
}

export function isDateInRange(
    year: number, month: number, day: number,
    year_min: number, month_min: number, day_min: number,
    year_max: number, month_max: number, day_max: number
): boolean {

    if (
        year < year_min ||
        (year === year_min && month < month_min) ||
        (year === year_min && month === month_min && day < day_min)
    ) {
        return false;
    }

    if (
        year > year_max ||
        (year === year_max && month > month_max) ||
        (year === year_max && month === month_max && day > day_max)
    ) {
        return false;
    }

    return true;
}

export function isTimeOfDayInRange(
    hour: number, minute: number, second: number, millisecond: number,
    hour_max: number, minute_max: number, second_max: number, millisecond_max: number
): boolean {

    if (
        hour > hour_max ||
        (hour === hour_max && minute > minute_max) ||
        (hour === hour_max && minute === minute_max && second > second_max) ||
        (hour === hour_max && minute === minute_max && second === second_max && millisecond > millisecond_max)
    ) {
        return false;
    }

    return true;
}

export function isDateAndTimeInRange(
    year: number, month: number, day: number,
    hour: number, minute: number, second: number, millisecond: number,
    year_min: number, month_min: number, day_min: number,
    hour_min: number, minute_min: number, second_min: number, millisecond_min: number,
    year_max: number, month_max: number, day_max: number,
    hour_max: number, minute_max: number, second_max: number, millisecond_max: number
): boolean {

    if (
        year < year_min ||
        (year === year_min && month < month_min) ||
        (year === year_min && month === month_min && day < day_min) ||
        (year === year_min && month === month_min && day === day_min && hour < hour_min) ||
        (year === year_min && month === month_min && day === day_min && hour === hour_min && minute < minute_min) ||
        (year === year_min && month === month_min && day === day_min && hour === hour_min && minute === minute_min && second < second_min) ||
        (year === year_min && month === month_min && day === day_min && hour === hour_min && minute === minute_min && second === second_min && millisecond < millisecond_min)
    ) {
        return false;
    }

    if (
        year > year_max ||
        (year === year_max && month > month_max) ||
        (year === year_max && month === month_max && day > day_max) ||
        (year === year_max && month === month_max && day === day_max && hour > hour_max) ||
        (year === year_max && month === month_max && day === day_max && hour === hour_max && minute > minute_max) ||
        (year === year_max && month === month_max && day === day_max && hour === hour_max && minute === minute_max && second > second_max) ||
        (year === year_max && month === month_max && day === day_max && hour === hour_max && minute === minute_max && second === second_max && millisecond > millisecond_max)
    ) {
        return false;
    }

    return true;
}

export function findOverflowComponent(startIdx: number): boolean {

    for (let i = startIdx + 1; i < TIME_COMPONENTS.length; ++i) {

        const component = TIME_COMPONENTS[i];

        if (component.value > component.max!)
            return true;
    }

    return false;
}

export function ConnectDeclaringSymbols(symbol: StSymbol, declaringSymbol: StSymbol) {

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

export function convertTypeText(typeText: string, arch: Architecture) {

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

export function initializeIntegerType(
    subRangeParamToken: TerminalNode | null,
    type: StType,
    sourceFile: StSourceFile
) {
    const nativeTypeDetails = type.builtinType
        ? StModel.nativeTypesDetails.get(type.builtinType)
        : undefined;
       
    const subRangeParam = subRangeParamToken?.getText();
    const subRangeParts = subRangeParam?.split('..');

    if (subRangeParts) {

        type.subRangeStart = Number.parseInt(subRangeParts[0].slice(1));
        type.subRangeStop = Number.parseInt(subRangeParts[1].slice(0, -1));
        type.isFullRange = false;

        const min = nativeTypeDetails!.min!;
        const max = nativeTypeDetails!.max!;

        if (
            type.subRangeStart !== undefined &&
            type.subRangeStop !== undefined &&
            (
                !(min <= type.subRangeStart && type.subRangeStart <= max) ||
                !(min <= type.subRangeStop && type.subRangeStop <= max)
            )
        ) {
            M0001(subRangeParamToken!, sourceFile);
        }
    }

    else {
        type.subRangeStart = nativeTypeDetails!.min;
        type.subRangeStop = nativeTypeDetails!.max;
        type.isFullRange = true;
    }
}

// M0001: The subrange parameters are not within the valid range
function M0001(subRangeToken: TerminalNode, sourceFile: StSourceFile) {

    const diagnostic = new Diagnostic(
        getTokenRange(subRangeToken.symbol)!,
        `The subrange parameters are not within the valid range`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "M0001";
    sourceFile.diagnostics.push(diagnostic);
}