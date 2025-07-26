import { DateTime } from "luxon";
import { StBuiltinType, StSourceFile, StType } from "../../core.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { isDateInRange } from "../../utils.js";
import { C0001 } from "../diagnostics.js";

export function evaluateDateLiteral(
    literal: LiteralContext,
    sourceFile: StSourceFile,
): StType | undefined {
    
    const dateLiteral = literal.dateLiteral()!;
    const requestedType = dateLiteral._prefix?.text as StBuiltinType;
    const dateParts = dateLiteral._date!.text!.split("-");

    const year = Number.parseInt(dateParts[0]);
    const month = Number.parseInt(dateParts[1]);
    const day = Number.parseInt(dateParts[2]);
    const dateTime = DateTime.fromObject({ year, month, day });

    if (!dateTime.isValid) {
        C0001(literal, StBuiltinType[requestedType], sourceFile);
        return undefined;
    }

    let choosenType: StBuiltinType | undefined;

    switch (requestedType) {
        
        case StBuiltinType.DATE:
        case StBuiltinType.D:

            if (
                isDateInRange(
                    year, month, day,
                    1970, 1, 1,
                    2106, 2, 7
                )
            ) {
                choosenType = StBuiltinType.DATE;
            }

            else {
                C0001(literal, StBuiltinType[requestedType], sourceFile);
                return undefined;
            }

            break;
        
        case StBuiltinType.LDATE:
        case StBuiltinType.LD:

            if (
                isDateInRange(
                    year, month, day,
                    1970, 1, 1,
                    2554, 7, 21
                )
            ) {
                choosenType = StBuiltinType.LDATE;
            }

            else {
                C0001(literal, StBuiltinType[requestedType], sourceFile);
                return undefined;
            }

            break;
        
        default:
            return undefined;
    }

    const type = new StType();
    type.builtinType = choosenType;

    return type;
}