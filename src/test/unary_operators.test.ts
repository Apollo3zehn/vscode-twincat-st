import assert from "assert";
import { evaluateUnaryOperation } from "../model/evaluation.js";
import { createType } from "./test_helper.js";
import { evaluateIntegerLiteral } from "../model/literals/evaluateIntegerLiteral.js";
import { evaluateLogicalLiteral } from "../model/literals/evaluateBoolLiteral.js";
import { bigIntToTwosComplement } from "../core/utils.js";

suite("plus", () => {

    // Typed literal
    test(`BYTE#255 => BYTE`, () => {

        // Arrange
        let [type, _] = evaluateIntegerLiteral("BYTE#255");

        assert(type);

        // Act
        const actualType = evaluateUnaryOperation(type, "+");

        // Assert
        assert.strictEqual(
            actualType?.builtinType?.code,
            "BYTE"
        );

        assert.strictEqual(
            actualType?.builtinType.value,
            255n
        );
    });

});

suite("minus", () => {

    const cases_variable = [
        ["BYTE", "INT"],
        ["WORD", "INT"],
        ["DWORD", "DINT"],
        ["LWORD", "LINT"],

        ["USINT", "INT"],
        ["UINT", "INT"],
        ["UDINT", "DINT"],
        ["ULINT", "LINT"],
    ];

    // Typed literal
    test(`-BYTE#255 => BYTE`, () => {

        // Arrange
        let [type, _] = evaluateIntegerLiteral("BYTE#255");

        assert(type);

        // Act
        const actualType = evaluateUnaryOperation(type, "-");

        // Assert
        assert.strictEqual(
            actualType?.builtinType?.code,
            "BYTE"
        );

        assert.strictEqual(
            actualType?.builtinType.value,
            -255n
        );
    });

    // Variable
    cases_variable.forEach(([inputCodeString, expectedCodeString]) => {

        test(`-${inputCodeString} => ${expectedCodeString}`, () => {

            // Arrange
            const type = createType(inputCodeString);

            // Act
            const actualType = evaluateUnaryOperation(type, "-");

            // Assert
            assert.strictEqual(
                actualType?.builtinType?.code,
                expectedCodeString
            );
        });
    });
});

suite("not", () => {

    const cases = [
        ["BIT#0", "1"],
        ["BIT#1", "0"],
        ["BYTE#2#01011010", "10100101"],
        ["LWORD#2#0101101001011010010110100101101001011010010110100101101001011010", "1010010110100101101001011010010110100101101001011010010110100101"],
        ["ULINT#2#0101101001011010010110100101101001011010010110100101101001011010", "1010010110100101101001011010010110100101101001011010010110100101"],
        ["LINT#2#0101101001011010010110100101101001011010010110100101101001011010", "1010010110100101101001011010010110100101101001011010010110100101"]
    ];

    // Variable
    cases.forEach(([inputLiteral, expectedBinaryString]) => {

        test(`${inputLiteral} => ${expectedBinaryString}`, () => {

            // Arrange
            const type = inputLiteral.includes("BOOL") || inputLiteral.includes("BIT")
                ? evaluateLogicalLiteral(inputLiteral)
                : evaluateIntegerLiteral(inputLiteral)[0];

            assert(type);
            
            // Act
            const actualType = evaluateUnaryOperation(type, "NOT");

            // Assert
            const actual = actualType?.builtinType?.value as bigint;
            const bits = type.builtinType?.details?.size!;

            assert.strictEqual(
                bigIntToTwosComplement(actual, bits),
                expectedBinaryString
            );
        });
    });
});