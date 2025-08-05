import { Diagnostic, DiagnosticSeverity } from "vscode";
import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { getContextRange } from "../../core/utils.js";
import { StModelBuilder } from "../StModelBuilder.js";

export function evaluateStringLiteral(
    literal: LiteralContext
): StType {
    
    const stringLiteral = literal.STRING_LITERAL()!;
    const text = stringLiteral.getText().slice(1, -1);

    const isLatin1 = /^[\u0000-\u00FF]*$/.test(text);

    if (!isLatin1) {

        const warning = new Diagnostic(
            getContextRange(literal),
            `The string '${text}' contains non-representable characters`,
            DiagnosticSeverity.Warning
        );

        StModelBuilder.currentSourceFile.diagnostics.push(warning);
    }

    const type = new StType();
    type.builtinType = new StBuiltinType(StBuiltinTypeCode.STRING);
    type.builtinType.stringLength = text.length;

    return type;
}