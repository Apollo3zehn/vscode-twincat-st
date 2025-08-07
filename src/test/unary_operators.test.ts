import assert from "assert";
import { evaluateUnaryOperator } from "../model/evaluation.js";
import { createType } from "./test_helper.js";
import { evaluateIntegerLiteral } from "../model/literals/evaluateIntegerLiteral.js";

suite("unary operators", () => {

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
        const actualType = evaluateUnaryOperator(type, "-");

        // Assert
        assert.strictEqual(
            actualType?.builtinType?.code,
            "BYTE"
        );

        assert.strictEqual(
            actualType?.builtinType.value,
            -255
        );
    });

    // Variable
    cases_variable.forEach(([inputCodeString, expectedCodeString]) => {

        test(`-${inputCodeString} => ${expectedCodeString}`, () => {

            // Arrange
            const type = createType(inputCodeString);

            // Act
            const actualType = evaluateUnaryOperator(type, "-");

            // Assert
            assert.strictEqual(
                actualType?.builtinType?.code,
                expectedCodeString
            );
        });
    });
});