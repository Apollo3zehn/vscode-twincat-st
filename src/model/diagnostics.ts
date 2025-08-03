import { ParserRuleContext } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity } from "vscode";
import { StSourceFile, StSymbol } from "../core/types.js";
import { LiteralContext, PostfixOpContext } from "../generated/StructuredTextParser.js";
import { getContextRange, getOriginalText, getTokenRange, getTypeOfType } from "../core/utils.js";

// C0001: Constant '{constant}' too large for type '{name}'
export function C0001(literal: LiteralContext, typeName: string, sourceFile: StSourceFile) {
    
    const diagnostic = new Diagnostic(
        getContextRange(literal),
        `Constant '${getOriginalText(literal)}' too large for type '${typeName}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0001";
    sourceFile.diagnostics.push(diagnostic);
}

// C0018 '{name}' is no valid assignment target
export function C0018(lastMember: StSymbol, sourceFile: StSourceFile) {
    
    const diagnostic = new Diagnostic(
        lastMember.selectionRange ?? lastMember.range,
        `'${lastMember.id}' is no valid assignment target`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0018";
    sourceFile.diagnostics.push(diagnostic);
}

// Cannot convert type '{name}' to type '{name}'
export function C0032(
    rhsCtx: ParserRuleContext | undefined,
    rhsTypeId: string | undefined,
    lhsTypeId: string | undefined,
    sourceFile: StSourceFile
) {

    const diagnostic = new Diagnostic(
        getContextRange(rhsCtx),
        `Cannot convert type '${rhsTypeId}' to type '${lhsTypeId}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0032";
    sourceFile.diagnostics.push(diagnostic);
}

// C0035: Program name, function or function block instance expected instead of '{name}'
export function C0035(member: StSymbol, sourceFile: StSourceFile) {

    const diagnostic = new Diagnostic(
        member.selectionRange ?? member.range,
        `Program name, function or function block instance expected instead of '${member.id}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0035";
    sourceFile.diagnostics.push(diagnostic);
}

// C0036: Cannot call object of type '{name}'
export function C0036(member: StSymbol, declaration: StSymbol, sourceFile: StSourceFile) {

    const diagnostic = new Diagnostic(
        member.selectionRange ?? member.range,
        `Cannot call object of type '${getTypeOfType(declaration.kind)}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0036";
    sourceFile.diagnostics.push(diagnostic);
}

// C0037: '{name}' is no input of '{name}'
export function C0037(member: StSymbol, sourceFile: StSourceFile) {

    const diagnostic = new Diagnostic(
        member.selectionRange ?? member.range,
        `'${member.id}' is no input of '${member.declaration?.parent?.id}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0037";
    sourceFile.diagnostics.push(diagnostic);
}

// C0046: Identifier '{id}' not defined
export function C0046(currentMember: StSymbol, sourceFile: StSourceFile) {
    
    const diagnostic = new Diagnostic(
        currentMember.selectionRange ?? currentMember.range,
        `Identifier '${currentMember.id}' not defined`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0046";
    sourceFile.diagnostics.push(diagnostic);
}

// C0047: Cannot apply indexing with [] to an expression of type '{type}'
export function C0047(postfixOp: PostfixOpContext, typeId: string, sourceFile: StSourceFile) {

    const diagnostic = new Diagnostic(
        getContextRange(postfixOp.arrayIndex()),
        `Cannot apply indexing with [] to an expression of type '${typeId}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0047";
    sourceFile.diagnostics.push(diagnostic);
}

// C0064: Dereference requires a pointer
export function C0064(postfixOp: PostfixOpContext, sourceFile: StSourceFile) {

    const diagnostic = new Diagnostic(
        getTokenRange(postfixOp.dereference()?.CARET().symbol),
        `Dereference requires a pointer`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0064";
    sourceFile.diagnostics.push(diagnostic);
}

// C0077: Unknown type: '{type}'
export function C0077(symbol: StSymbol, sourceFile: StSourceFile) {
    
    const diagnostic = new Diagnostic(
        symbol.selectionRange ?? symbol.range,
        `Unknown type: '${symbol.id ?? "?"}'`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0077";
    sourceFile.diagnostics.push(diagnostic);
}

// C0080: Function block '{name}' must be instantiated to be accessed
export function C0080(member: StSymbol, sourceFile: StSourceFile) {

    const diagnostic = new Diagnostic(
        member.selectionRange ?? member.range,
        `Function block '${member.id}' must be instantiated to be accessed`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0080";
    sourceFile.diagnostics.push(diagnostic);
}

export function C0140(lhsCtx: ParserRuleContext | undefined, sourceFile: StSourceFile) {

    const diagnostic = new Diagnostic(
        getContextRange(lhsCtx),
        "Reference assign is only allowed to variables of reference type",
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0140";
    sourceFile.diagnostics.push(diagnostic);
}

// C0143: The property '{name}' cannot be used in this context because it lacks the get accessor
export function C0143(member: StSymbol, sourceFile: StSourceFile) {
    
    const diagnostic = new Diagnostic(
        member.selectionRange ?? member.range,
        `The property '${member.id}' cannot be used in this context because it lacks the get accessor`,
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0143";
    sourceFile.diagnostics.push(diagnostic);
}

// C0185: It is not possible to perform component access '.', index access '[]' or call '()' on result of function call. Assign result to help variable first.
export function C0185(context: ParserRuleContext, sourceFile: StSourceFile) {

    const diagnostic = new Diagnostic(
        getContextRange(context),
        "It is not possible to perform component access '.', index access '[]' or call '()' on result of function call. Assign result to help variable first.",
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0185";
    sourceFile.diagnostics.push(diagnostic);
}

// C0261: A reference type is not allowed as base type of an array, pointer, or reference
export function C0261(symbol: StSymbol, sourceFile: StSourceFile) {
    
    const diagnostic = new Diagnostic(
        symbol.selectionRange ?? symbol.range,
        "A reference type is not allowed as base type of an array, pointer, or reference",
        DiagnosticSeverity.Error
    );

    diagnostic.code = "C0261";
    sourceFile.diagnostics.push(diagnostic);
}