export function executeBinaryOperation(
    lhsValue: number | bigint | undefined,
    rhsValue: number | bigint | undefined,
    opNumber: ((a: number, b: number) => number | bigint) | undefined,
    opBigInt: ((a: bigint, b: bigint) => bigint) | undefined
): number | bigint | undefined {

    if (typeof lhsValue === "bigint") {

        if (opBigInt && typeof rhsValue === "bigint")
            return opBigInt(lhsValue, rhsValue);

        else if (opNumber && typeof rhsValue === "number")
            return opNumber(Number(lhsValue), rhsValue);

    } else if (typeof lhsValue === "number") {

        if (opNumber && typeof rhsValue === "bigint")
            return opNumber(lhsValue, Number(rhsValue));

        else if (opNumber && typeof rhsValue === "number")
            return opNumber(lhsValue, rhsValue);
    }

    return undefined;
}

// Number operations
export function multiplyNumber(a: number, b: number): number {
    return a * b;
}

export function divideNumber(a: number, b: number): number {
    return a / b;
}

export function moduloNumber(a: number, b: number): number {
    return a % b;
}

export function addNumber(a: number, b: number): number {
    return a + b;
}

export function subtractNumber(a: number, b: number): number {
    return a - b;
}

export function equalsNumber(a: number, b: number): bigint {
    return a === b
        ? 1n
        : 0n;
}

// BigInt operations
export function multiplyBigInt(a: bigint, b: bigint): bigint {
    return a * b;
}

export function divideBigInt(a: bigint, b: bigint): bigint {
    return a / b;
}

export function moduloBigInt(a: bigint, b: bigint): bigint {
    return a % b;
}

export function addBigInt(a: bigint, b: bigint): bigint {
    return a + b;
}

export function subtractBigInt(a: bigint, b: bigint): bigint {
    return a - b;
}

export function equalsBigInt(a: bigint, b: bigint): bigint {
    return a === b
        ? 1n
        : 0n;
}