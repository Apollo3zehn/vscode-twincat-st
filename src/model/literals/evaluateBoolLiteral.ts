import { StBuiltinType, StBuiltinTypeCode, StType } from "../../core/types.js";

export function evaluateLogicalLiteral(literal: string): StType | undefined {
    
    const splittedText = literal.split('#');

    let lhsBuiltinType: StBuiltinType | undefined;
    let value: bigint;

    /* Important: Do not convert type to uppercase
     * first because TwinCAT requires the input string 
     * to be uppercase, otherwise it is a syntax error.
     */
    if (splittedText.length === 2) {
        lhsBuiltinType = new StBuiltinType(splittedText[0] as StBuiltinTypeCode);
        value = BigInt(splittedText[1]);
    }

    else {

        lhsBuiltinType = new StBuiltinType(StBuiltinTypeCode.BOOL);

        value = literal === "TRUE"
            ? 1n
            : 0n;
    }
    
    const type = new StType();
    type.builtinType = lhsBuiltinType;
    type.builtinType.value = value;

    return type;
}