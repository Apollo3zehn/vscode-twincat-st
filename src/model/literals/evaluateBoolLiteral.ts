import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";

export function evaluateBoolLiteral(): StType | undefined {
    
    const type = new StType();
    type.builtinType = new StBuiltinType(StBuiltinTypeCode.BOOL);

    return type;
}