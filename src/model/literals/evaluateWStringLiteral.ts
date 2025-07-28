import { Diagnostic, DiagnosticSeverity } from "vscode";
import { StBuiltinType, StSourceFile, StType } from "../../core.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { getContextRange } from "../../utils.js";

export function evaluateWStringLiteral(
    literal: LiteralContext,
    sourceFile: StSourceFile,
): StType | undefined {
    
    const stringLiteral = literal.WSTRING_LITERAL()!;
    const text = stringLiteral.getText().slice(1, -1);

    const isUcs2 = /^[\u0000-\uD7FF\uE000-\uFFFF]*$/.test(text);

    if (!isUcs2) {

        const warning = new Diagnostic(
            getContextRange(literal),
            `The string '${text}' contains non-representable characters`,
            DiagnosticSeverity.Warning
        );

        sourceFile.diagnostics.push(warning);
    }

    const type = new StType();
    type.builtinType = StBuiltinType.WSTRING;
    type.stringLength = text.length;

    return type;
}