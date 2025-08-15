import { ParserRuleContext, TerminalNode, Token } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity, Range } from "vscode";
import { StSymbol } from "../core/types.js";
import { defaultRange, getContextRange, getOriginalText, getTokenRange, getTypeOfType } from "../core/utils.js";
import { ArrayInitContext, PostfixOpContext, UnaryOpContext } from "../generated/StructuredTextParser.js";
import { StModelBuilder } from "./StModelBuilder.js";

// M0001: The subrange parameters are not within the valid range
export function M0001(subRangeToken: TerminalNode) {

    const diagnostic = new Diagnostic(
        getTokenRange(subRangeToken.symbol)!,
        "The subrange parameters are not within the valid range",
        DiagnosticSeverity.Error
    );

    diagnostic.code = "M0001";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// M0002: The '{name}' operator is not defined for the types '{name}' and '{name}'
export function M0002(
    lhsTypeName: string,
    rhsTypeName: string,
    operatorText: string,
    operatorRange: Range | undefined
) {

    const diagnostic = new Diagnostic(
        operatorRange ?? defaultRange,
        `The binary operator '${operatorText}' is not defined for the types '${lhsTypeName}' and '${rhsTypeName}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "M0002";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// M0003: The unary operator '{name}' is not defined for type '{name}'
export function M0003(
    typeName: string,
    operatorString: string,
    operatorRange: Range | undefined
) {

    const diagnostic = new Diagnostic(
        operatorRange ?? defaultRange,
        `The unary operator '${operatorString}' is not defined for type '${typeName}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "M0003";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0001: Constant '{constant}' too large for type '{name}'
export function C0001(ctx: ParserRuleContext, typeName: string) {
    
    const diagnostic = new Diagnostic(
        getContextRange(ctx),
        `Constant '${getOriginalText(ctx)}' too large for type '${typeName}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0001";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0018 '{name}' is no valid assignment target
export function C0018(lastMember: StSymbol) {
    
    const diagnostic = new Diagnostic(
        lastMember.selectionRange ?? lastMember.range,
        `'${lastMember.id}' is no valid assignment target`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0018";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0032: Cannot convert type '{name}' to type '{name}'
export function C0032(
    rhsTypeId: string | undefined,
    lhsTypeId: string | undefined,
    rhsRange?: Range
) {

    const diagnostic = new Diagnostic(
        rhsRange ?? defaultRange,
        `Cannot convert type '${rhsTypeId}' to type '${lhsTypeId}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0032";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0035: Program name, function or function block instance expected instead of '{name}'
export function C0035(member: StSymbol) {

    const diagnostic = new Diagnostic(
        member.selectionRange ?? member.range,
        `Program name, function or function block instance expected instead of '${member.id}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0035";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0036: Cannot call object of type '{name}'
export function C0036(member: StSymbol, declaration: StSymbol) {

    const diagnostic = new Diagnostic(
        member.selectionRange ?? member.range,
        `Cannot call object of type '${getTypeOfType(declaration.kind)}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0036";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0037: '{name}' is no input of '{name}'
export function C0037(member: StSymbol) {

    const diagnostic = new Diagnostic(
        member.selectionRange ?? member.range,
        `'${member.id}' is no input of '${member.declaration?.parent?.id}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0037";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0046: Identifier '{id}' not defined
export function C0046(currentMember: StSymbol) {
    
    const diagnostic = new Diagnostic(
        currentMember.selectionRange ?? currentMember.range,
        `Identifier '${currentMember.id}' not defined`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0046";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0047: Cannot apply indexing with [] to an expression of type '{type}'
export function C0047(postfixOp: PostfixOpContext, typeId: string) {

    const diagnostic = new Diagnostic(
        getContextRange(postfixOp.arrayIndex()),
        `Cannot apply indexing with [] to an expression of type '${typeId}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0047";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0064: Dereference requires a pointer
export function C0064(postfixOp: PostfixOpContext) {

    const diagnostic = new Diagnostic(
        getTokenRange(postfixOp.dereference()?.CARET().symbol),
        `Dereference requires a pointer`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0064";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0066: Cannot compare type '{name}' with type '{name}'
export function C0066(lhsName: string, rhsName: string, operatorRange: Range | undefined) {

    const diagnostic = new Diagnostic(
        operatorRange ?? defaultRange,
        `Cannot compare type '${lhsName}' with type '${rhsName}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0066";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0074: Unexpected array initialisation
export function C0074(ctx: ArrayInitContext) {
    
    const diagnostic = new Diagnostic(
        getContextRange(ctx),
        "Unexpected array initialisation",
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0074";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0077: Unknown type: '{type}'
export function C0077(symbol: StSymbol) {
    
    const diagnostic = new Diagnostic(
        symbol.selectionRange ?? symbol.range,
        `Unknown type: '${symbol.id ?? "?"}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0077";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0080: Function block '{name}' must be instantiated to be accessed
export function C0080(member: StSymbol) {

    const diagnostic = new Diagnostic(
        member.selectionRange ?? member.range,
        `Function block '${member.id}' must be instantiated to be accessed`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0080";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

export function C0140(lhsCtx: ParserRuleContext | undefined) {

    const diagnostic = new Diagnostic(
        getContextRange(lhsCtx),
        "Reference assign is only allowed to variables of reference type",
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0140";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0143: The property '{name}' cannot be used in this context because it lacks the get accessor
export function C0143(member: StSymbol) {
    
    const diagnostic = new Diagnostic(
        member.selectionRange ?? member.range,
        `The property '${member.id}' cannot be used in this context because it lacks the get accessor`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0143";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0185: It is not possible to perform component access '.', index access '[]' or call '()' on result of function call. Assign result to help variable first.
export function C0185(context: ParserRuleContext) {

    const diagnostic = new Diagnostic(
        getContextRange(context),
        "It is not possible to perform component access '.', index access '[]' or call '()' on result of function call. Assign result to help variable first.",
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0185";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}

// C0261: A reference type is not allowed as base type of an array, pointer, or reference
export function C0261(symbol: StSymbol) {
    
    const diagnostic = new Diagnostic(
        symbol.selectionRange ?? symbol.range,
        "A reference type is not allowed as base type of an array, pointer, or reference",
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0261";
    StModelBuilder.currentSourceFile.diagnostics.push(diagnostic);
}