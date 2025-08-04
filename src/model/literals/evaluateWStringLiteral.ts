import { Diagnostic, DiagnosticSeverity } from "vscode";
import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { getContextRange } from "../../core/utils.js";
import { StModelBuilder } from "../StModelBuilder.js";

export function evaluateWStringLiteral(
    literal: LiteralContext
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

        StModelBuilder.currentSourceFile.diagnostics.push(warning);
    }

    const type = new StType();
    type.builtinType = new StBuiltinType(StBuiltinTypeCode.WSTRING);
    type.builtinType.stringLength = text.length;

    return type;
}