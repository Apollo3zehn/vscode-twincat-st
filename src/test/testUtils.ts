import assert from "assert";
import { StBuiltinType, StBuiltinTypeCode, StType } from "../core/types";

export function createType(typeCodeString: string): StType {

    const type = new StType();
    const typeCode = StBuiltinTypeCode[typeCodeString as keyof typeof StBuiltinTypeCode];

    type.builtinType = new StBuiltinType(typeCode);

    return type;
}

export function bigIntToTwosComplement(value: bigint, bits: number): string {

    const mask = (1n << BigInt(bits)) - 1n;
    const twosComplement = (value & mask).toString(2).padStart(bits, "0");

    return twosComplement;
}

export function assertBigintOrNumberEqual(actual: bigint | number | undefined, expected: bigint | number, epsilon = 1e-10) {

    if (typeof actual === "bigint" && typeof expected === "bigint")
        assert.strictEqual(actual, expected);
    
    else if (typeof actual === "number" && typeof expected === "number")
        assert.ok(Math.abs(actual - expected) < epsilon, `Expected ${actual} to be close to ${expected}`);
    
    else
        throw Error("Actual and expected must be of the same type");
}