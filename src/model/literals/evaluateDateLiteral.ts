import { Temporal } from "temporal-polyfill";
import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";
import { convertToPlatformSpecificTypeText } from "../../core/utils.js";

const MIN_DATE = Temporal.PlainDate.from({ year: 1970, month: 1, day: 1 });
const MAX_DATE = Temporal.PlainDate.from({ year: 2106, month: 2, day: 7 });
const MIN_LDATE = Temporal.PlainDate.from({ year: 1970, month: 1, day: 1 });
const MAX_LDATE = Temporal.PlainDate.from({ year: 2554, month: 7, day: 21 });

export function evaluateDateLiteral(
    prefix: string,
    date: string
): [StType | undefined, string | undefined] {
    
    const lhsBuiltinType = convertToPlatformSpecificTypeText(prefix) as StBuiltinTypeCode;

    const dateParts = date.split("-");
    const year = Number.parseInt(dateParts[0]);
    const month = Number.parseInt(dateParts[1]);
    const day = Number.parseInt(dateParts[2]);

    let dateValue: Temporal.PlainDate;

    try {
        dateValue = Temporal.PlainDate.from({ year, month, day });

        if (
            dateValue.year !== year ||
            dateValue.month !== month ||
            dateValue.day !== day
        ) {
            return [undefined, lhsBuiltinType];
        }
    } catch {
        return [undefined, lhsBuiltinType];
    }

    let choosenType: StBuiltinTypeCode | undefined;

    switch (lhsBuiltinType) {

        case StBuiltinTypeCode.DATE:

            if (
                Temporal.PlainDate.compare(MIN_DATE, dateValue) <= 0 &&
                Temporal.PlainDate.compare(dateValue, MAX_DATE) <= 0
            ) {
                choosenType = StBuiltinTypeCode.DATE;
            }
                
            else {
                return [undefined, lhsBuiltinType];
            }

            break;
        
        case StBuiltinTypeCode.LDATE:

            if (
                Temporal.PlainDate.compare(MIN_LDATE, dateValue) <= 0 &&
                Temporal.PlainDate.compare(dateValue, MAX_LDATE) <= 0
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