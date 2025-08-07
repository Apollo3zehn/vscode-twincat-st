import { StBuiltinType, StBuiltinTypeCode, StType } from "../core/types";

export function createType(typeCodeString: string): StType {

    const type = new StType();
    const typeCode = StBuiltinTypeCode[typeCodeString as keyof typeof StBuiltinTypeCode];

    type.builtinType = new StBuiltinType(typeCode);

    return type;
}