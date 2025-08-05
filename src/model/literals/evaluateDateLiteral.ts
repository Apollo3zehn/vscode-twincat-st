import { DateTime } from "luxon";
import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { isDateInRange } from "../../core/utils.js";

export function evaluateDateLiteral(
    prefix: string,
    date: string
): [StType | undefined, string | undefined] {
    
    const lhsBuiltinType = prefix as StBuiltinTypeCode;
    const dateParts = date.split("-");

    const year = Number.parseInt(dateParts[0]);
    const month = Number.parseInt(dateParts[1]);
    const day = Number.parseInt(dateParts[2]);
    const dateTime = DateTime.fromObject({ year, month, day });

    if (!dateTime.isValid)
        return [undefined, lhsBuiltinType];

    let choosenType: StBuiltinTypeCode | undefined;

    switch (lhsBuiltinType) {
        
        case StBuiltinTypeCode.DATE:

            if (
                isDateInRange(
                    year, month, day,
                    1970, 1, 1,
                    2106, 2, 7
                )
            ) {
                choosenType = StBuiltinTypeCode.DATE;
            }

            else {
                return [undefined, lhsBuiltinType];
            }

            break;
        
        case StBuiltinTypeCode.LDATE:

            if (
                isDateInRange(
                    year, month, day,
                    1970, 1, 1,
                    2554, 7, 21
                )
            ) {
                choosenType = StBuiltinTypeCode.LDATE;
            }

            else {
                return [undefined, lhsBuiltinType];
            }

            break;
        
        default:
            return [undefined, lhsBuiltinType];
    }

    const type = new StType();
    type.builtinType = new StBuiltinType(choosenType);

    return [type, undefined];
}