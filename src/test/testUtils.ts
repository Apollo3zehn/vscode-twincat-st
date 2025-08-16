import assert from "assert";
import { StBuiltinType, StBuiltinTypeCode, StType } from "../core/types";
import { evaluateRealLiteral } from "../model/literals/evaluateRealLiteral";
import { evaluateIntegerLiteral } from "../model/literals/evaluateIntegerLiteral";
import { evaluateTimeLiteral } from "../model/literals/evaluateTimeLiteral";
import { evaluateLTimeLiteral } from "../model/literals/evaluateLTimeLiteral";
import { evaluateDateLiteral } from "../model/literals/evaluateDateLiteral";
import { evaluateTimeOfDayLiteral } from "../model/literals/evaluateTimeOfDayLiteral";
import { evaluateDateAndTimeLiteral } from "../model/literals/evaluateDateAndTimeLiteral";
import { evaluateLogicalLiteral } from "../model/literals/evaluateBoolLiteral";

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

export function assertBigIntOrNumberEqual(
    actual: bigint | number | undefined,
    expected: bigint | number,
    epsilon = 1e-10
) {

    if (typeof actual === "bigint" && typeof expected === "bigint") {
        assert.strictEqual(actual, expected);
    }
    
    else if (typeof actual === "number" && typeof expected === "number") {

        if (actual === Infinity && expected === Infinity)
            return;

        else if (actual === -Infinity && expected === -Infinity)
            return;

        else
            assert.ok(Math.abs(actual - expected) < epsilon, `Expected ${actual} to be close to ${expected}`);
    }
    
    else {
        throw Error("Actual and expected must be of the same type");
    }
}

export function evaluateLiteralHelper(literal: string): StType | undefined {

    if (literal.startsWith("BIT") || literal.startsWith("BOOL"))
        return evaluateLogicalLiteral(literal);

    else if (literal.startsWith("REAL") || literal.startsWith("LREAL"))
        return evaluateRealLiteral(literal)[0];

    else if (literal.startsWith("TIME#"))
        return evaluateTimeLiteral(literal)[0];

    else if (literal.startsWith("LTIME#"))
        return evaluateLTimeLiteral(literal)[0];

    else if (literal.startsWith("DATE#") || literal.startsWith("LDATE#"))
        return evaluateDateLiteral(literal.split('#')[0], literal.split('#')[1])[0];

    else if (literal.startsWith("TIME_OF_DAY#") || literal.startsWith("LTIME_OF_DAY#"))
        return evaluateTimeOfDayLiteral(literal.split('#')[0], literal.split('#')[1])[0];

    else if (literal.startsWith("DATE_AND_TIME#") || literal.startsWith("LDATE_AND_TIME#"))
        return evaluateDateAndTimeLiteral(literal.split('#')[0], literal.split('#')[1])[0];

    // fallback to integer
    return evaluateIntegerLiteral(literal)[0];
}