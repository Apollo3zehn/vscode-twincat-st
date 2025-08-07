import assert from "assert";
import { Uri } from "vscode";
import { StSourceFile, StType } from "../core/types.js";
import { internalEvaluateAssignment } from "../model/evaluation.js";
import { evaluateIntegerLiteral } from "../model/literals/evaluateIntegerLiteral.js";
import { StModelBuilder } from "../model/StModelBuilder.js";
import { createType } from "./test_helper.js";

const cases_literal = [
    ['2', 'SINT'],
    ['128', 'USINT']
];

const cases_variable = [
    
    // BOOL assignments
    ["BOOL", "BYTE"],
    ["BOOL", "WORD"],
    ["BOOL", "DWORD"],
    ["BOOL", "LWORD"],
    ["BOOL", "USINT"],
    ["BOOL", "UINT"],
    ["BOOL", "UDINT"],
    ["BOOL", "ULINT"],
    ["BOOL", "SINT"],
    ["BOOL", "INT"],
    ["BOOL", "DINT"],
    ["BOOL", "LINT"],
    ["BOOL", "REAL"],
    ["BOOL", "LREAL"],

    // BIT assignments
    ["BIT", "BYTE"],
    ["BIT", "WORD"],
    ["BIT", "DWORD"],
    ["BIT", "LWORD"],
    ["BIT", "USINT"],
    ["BIT", "UINT"],
    ["BIT", "UDINT"],
    ["BIT", "ULINT"],
    ["BIT", "SINT"],
    ["BIT", "INT"],
    ["BIT", "DINT"],
    ["BIT", "LINT"],
    ["BIT", "REAL"],
    ["BIT", "LREAL"],

    // BYTE assignments
    ["BYTE", "BOOL"],
    ["BYTE", "BIT"],
    ["BYTE", "WORD"],
    ["BYTE", "DWORD"],
    ["BYTE", "LWORD"],
    ["BYTE", "UINT"],
    ["BYTE", "UDINT"],
    ["BYTE", "ULINT"],
    ["BYTE", "INT"],
    ["BYTE", "DINT"],
    ["BYTE", "LINT"],
    ["BYTE", "REAL"],
    ["BYTE", "LREAL"],

    // WORD assignments
    ["WORD", "BOOL"],
    ["WORD", "BIT"],
    ["WORD", "DWORD"],
    ["WORD", "LWORD"],
    ["WORD", "UDINT"],
    ["WORD", "ULINT"],
    ["WORD", "DINT"],
    ["WORD", "LINT"],
    ["WORD", "REAL"],
    ["WORD", "LREAL"],

    // DWORD assignments
    ["DWORD", "BOOL"],
    ["DWORD", "BIT"],
    ["DWORD", "LWORD"],
    ["DWORD", "ULINT"],
    ["DWORD", "LINT"],
    ["DWORD", "REAL"],
    ["DWORD", "LREAL"],

    // LWORD assignments
    ["LWORD", "BOOL"],
    ["LWORD", "BIT"],
    ["LWORD", "REAL"],
    ["LWORD", "LREAL"],

    // USINT assignments
    ["USINT", "BOOL"],
    ["USINT", "BIT"],
    ["USINT", "WORD"],
    ["USINT", "DWORD"],
    ["USINT", "LWORD"],
    ["USINT", "UINT"],
    ["USINT", "UDINT"],
    ["USINT", "ULINT"],
    ["USINT", "INT"],
    ["USINT", "DINT"],
    ["USINT", "LINT"],
    ["USINT", "REAL"],
    ["USINT", "LREAL"],

    // UINT assignments
    ["UINT", "BOOL"],
    ["UINT", "BIT"],
    ["UINT", "DWORD"],
    ["UINT", "LWORD"],
    ["UINT", "UDINT"],
    ["UINT", "ULINT"],
    ["UINT", "DINT"],
    ["UINT", "LINT"],
    ["UINT", "REAL"],
    ["UINT", "LREAL"],

    // UDINT assignments
    ["UDINT", "BOOL"],
    ["UDINT", "BIT"],
    ["UDINT", "LWORD"],
    ["UDINT", "ULINT"],
    ["UDINT", "LINT"],
    ["UDINT", "REAL"],
    ["UDINT", "LREAL"],

    // ULINT assignments
    ["ULINT", "BOOL"],
    ["ULINT", "BIT"],
    ["ULINT", "REAL"],
    ["ULINT", "LREAL"],

    // SINT assignments
    ["SINT", "BOOL"],
    ["SINT", "BIT"],
    ["SINT", "WORD"],
    ["SINT", "DWORD"],
    ["SINT", "LWORD"],
    ["SINT", "UINT"],
    ["SINT", "UDINT"],
    ["SINT", "ULINT"],
    ["SINT", "INT"],
    ["SINT", "DINT"],
    ["SINT", "LINT"],
    ["SINT", "REAL"],
    ["SINT", "LREAL"],

    // INT assignments
    ["INT", "BOOL"],
    ["INT", "BIT"],
    ["INT", "DWORD"],
    ["INT", "LWORD"],
    ["INT", "UDINT"],
    ["INT", "ULINT"],
    ["INT", "DINT"],
    ["INT", "LINT"],
    ["INT", "REAL"],
    ["INT", "LREAL"],

    // DINT assignments
    ["DINT", "BOOL"],
    ["DINT", "BIT"],
    ["DINT", "LWORD"],
    ["DINT", "ULINT"],
    ["DINT", "LINT"],
    ["DINT", "REAL"],
    ["DINT", "LREAL"],

    // LINT assignments
    ["LINT", "BOOL"],
    ["LINT", "BIT"],
    ["LINT", "REAL"],
    ["LINT", "LREAL"],

    // REAL assignments
    ["REAL", "BOOL"],
    ["REAL", "BIT"],

    // LREAL assignments
    ["LREAL", "BOOL"],
    ["LREAL", "BIT"],
];

suite('assignment (invalid)', () => {

    setup(() => {
        StModelBuilder.currentSourceFile = new StSourceFile(Uri.parse("file:///dummy"));
    });

    // Literals
    cases_literal.forEach(([rhs, expectedType]) => {
        
        StModelBuilder.currentSourceFile = new StSourceFile(Uri.parse("file:///dummy"));
        const lhs = "BIT";

        test(`assignment: ${lhs} := ${rhs} => ${expectedType}`, () => {
            
            // Arrange
            let lhsType: StType | undefined = createType(lhs);
            let [rhsType, _1] = evaluateIntegerLiteral(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            [lhsType, rhsType] = internalEvaluateAssignment(
                lhsType, undefined,
                rhsType, undefined,
                false
            );

            // Assert
            assert(rhsType);
            assert.strictEqual(rhsType.getId(), expectedType);
        });
    });

    // Variables
    cases_variable.forEach(([lhs, rhs]) => {

        test(`assignment ${lhs} := ${rhs}`, () => {
            
            const lhsType = createType(lhs);
            const rhsType = createType(rhs);

            internalEvaluateAssignment(lhsType, undefined, rhsType, undefined, false);

            const diagnostics = StModelBuilder.currentSourceFile.diagnostics;
            assert.strictEqual(diagnostics.length, 1);
            assert.strictEqual(diagnostics[0].code, "C0032");
        });
    });
});