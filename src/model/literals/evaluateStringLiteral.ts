import { Diagnostic, DiagnosticSeverity } from "vscode";
import { StBuiltinType, StSourceFile, StType } from "../../core.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { getContextRange } from "../../utils.js";

export function evaluateStringLiteral(
    literal: LiteralContext,
    sourceFile: StSourceFile,
): StType | undefined {
    
    const stringLiteral = literal.STRING_LITERAL()!;
    const text = stringLiteral.getText().slice(1, -1);

    const isLatin1 = /^[\u0000-\u00FF]*$/.test(text);

    if (!isLatin1) {

        const warning = new Diagnostic(
            getContextRange(literal),
            `The string '${text}' contains non-representable characters`,
            DiagnosticSeverity.Warning
        );

        sourceFile.diagnostics.push(warning);
    }

    const type = new StType();
    type.builtinType = StBuiltinType.STRING;
    type.stringLength = text.length;

    return type;
}