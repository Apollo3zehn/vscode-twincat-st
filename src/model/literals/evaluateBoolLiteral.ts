import { StBuiltinType, StType } from "../../core.js";

export function evaluateBoolLiteral(): StType | undefined {
    
    const type = new StType();
    type.builtinType = StBuiltinType.BOOL;

    return type;
}