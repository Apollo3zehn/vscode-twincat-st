export function executeBinaryOperation(
    lhsValue: number | bigint | undefined,
    rhsValue: number | bigint | undefined,
    opNumber: (a: number, b: number) => number,
    opBigInt: (a: bigint, b: bigint) => bigint
): number | bigint | undefined {

    if (typeof lhsValue === "bigint") {

        if (typeof rhsValue === "bigint")
            return opBigInt(lhsValue, rhsValue);

        else if (typeof rhsValue === "number")
            return opNumber(Number(lhsValue), rhsValue);

    } else if (typeof lhsValue === "number") {

        if (typeof rhsValue === "bigint")
            return opNumber(lhsValue, Number(rhsValue));

        else if (typeof rhsValue === "number")
            return opNumber(lhsValue, rhsValue);
    }
    return undefined;
}

// Number operations
export function addNumber(a: number, b: number): number {
    return a + b;
}

export function subtractNumber(a: number, b: number): number {
    return a - b;
}

export function multiplyNumber(a: number, b: number): number {
    return a * b;
}

export function divideNumber(a: number, b: number): number {
    return a / b;
}

// BigInt operations
export function addBigInt(a: bigint, b: bigint): bigint {
    return a + b;
}

export function subtractBigInt(a: bigint, b: bigint): bigint {
    return a - b;
}

export function multiplyBigInt(a: bigint, b: bigint): bigint {
    return a * b;
}

export function divideBigInt(a: bigint, b: bigint): bigint {
    return a / b;
}