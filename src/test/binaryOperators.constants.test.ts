import assert from 'assert';
import { Uri } from 'vscode';
import { StSourceFile } from '../core/types.js';
import { evaluateBinaryOperation } from '../model/evaluation.js';
import { StModelBuilder } from '../model/StModelBuilder.js';
import { assertBigIntOrNumberEqual, evaluateLiteralHelper } from './testUtils.js';

const cases_multiplication: [string, string, bigint | number | string][] = [
    ["2", "3", 6n],
    ["BYTE#2", "INT#3", 6n],
    ["REAL#2.5", "INT#2", 5],
    ["INT#2", "REAL#2.5", 5],
    ["REAL#2.5", "REAL#2.5", 6.25],
    ["REAL#2.5", "REAL#-2.5", -6.25],
    ["TIME#2H2M", "2", "TIME#4H4M"],
];

const cases_division: [string, string, bigint | number | string][] = [
    ["10", "3", 3n],
    ["BYTE#10", "INT#3", 3n],
    ["REAL#10.1", "INT#2", 5.05],
    ["INT#2", "REAL#2.5", 0.8],
    ["REAL#2.5", "REAL#2", 1.25],
    ["REAL#2.5", "REAL#-2", -1.25],
    ["TIME#2H2M", "2", "TIME#1H1M"],
];

const cases_modulo: [string, string, bigint | number][] = [
    ["11", "7", 4n],
    ["UINT#11", "UINT#7", 4n],
    ["INT#-11", "UINT#7", -4n],
    ["UINT#11", "INT#-7", 4n]
];

const cases_addition: [string, string, bigint | number | string][] = [
    ["99", "1", 100n],
    ["BYTE#99", "INT#1", 100n],
    ["REAL#99", "INT#1", 100],
    ["INT#99", "REAL#1", 100],
    ["REAL#99.1", "REAL#0.9", 100],
    ["REAL#99.1", "REAL#-0.9", 98.2],

    ["TIME#2H2M", "TIME#2H1M", "TIME#4H3M"],
    ["DATE#2000-01-01", "TIME#1D", "DATE#2000-01-02"],
    ["TIME_OF_DAY#03:30:21", "TIME#2H1M", "TIME_OF_DAY#05:31:21"],
    ["DATE_AND_TIME#2000-01-01-03:30:21", "TIME#2H1M999MS", "DATE_AND_TIME#2000-01-01-05:31:21"],

    ["LTIME#2H2M", "LTIME#2H1M", "LTIME#4H3M"],
    ["LDATE#2000-01-01", "LTIME#1D", "LDATE#2000-01-02"],
    ["LTIME_OF_DAY#03:30:21", "LTIME#2H1M", "LTIME_OF_DAY#05:31:21"],
    ["LDATE_AND_TIME#2000-01-01-03:30:21", "LTIME#2H1M", "LDATE_AND_TIME#2000-01-01-05:31:21"]
];

const cases_subtraction: [string, string, bigint | number | string][] = [
    ["99", "1", 98n],
    ["BYTE#99", "INT#1", 98n],
    ["REAL#99", "INT#1", 98],
    ["INT#99", "REAL#1", 98],
    ["REAL#99.1", "REAL#0.9", 98.2],
    ["REAL#99.1", "REAL#-0.9", 100],

    ["TIME#2H2M", "TIME#2H1M", "TIME#1M"],
    ["DATE#2000-01-01", "TIME#1D", "DATE#1999-12-31"],
    ["TIME_OF_DAY#03:30:21", "TIME#2H1M", "TIME_OF_DAY#01:29:21"],
    ["DATE_AND_TIME#2000-01-01-03:30:21", "TIME#2H1M999MS", "DATE_AND_TIME#2000-01-01-01:29:21"],

    ["LTIME#2H2M", "LTIME#2H1M", "LTIME#1M"],
    ["LDATE#2000-01-01", "LTIME#1D", "LDATE#1999-12-31"],
    ["LTIME_OF_DAY#03:30:21", "LTIME#2H1M", "LTIME_OF_DAY#01:29:21"],
    ["LDATE_AND_TIME#2000-01-01-03:30:21", "LTIME#2H1M", "LDATE_AND_TIME#2000-01-01-01:29:21"]
];

suite("arithmetic", () => {
    
    setup(() => {
        StModelBuilder.currentSourceFile = new StSourceFile(Uri.parse("file:///dummy"));
    });

    // Multiplication
    cases_multiplication.forEach(([lhs, rhs, expected]) => {
        
        test(`multiplication: ${lhs} * ${rhs} = ${expected}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateLiteralHelper(lhs);
            const [rhsType, _2] = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "*", undefined, undefined);
            
            // Assert
            assert(result);

            if (typeof expected === "string")
                expected = evaluateLiteralHelper(expected)[0]?.builtinType?.value!;
            
            assertBigIntOrNumberEqual(result.builtinType?.value, expected, 0.1);
        });
    });

    // Division
    cases_division.forEach(([lhs, rhs, expected]) => {
        
        test(`division: ${lhs} / ${rhs} = ${expected}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateLiteralHelper(lhs);
            const [rhsType, _2] = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "/", undefined, undefined);
            
            // Assert
            assert(result);

            if (typeof expected === "string")
                expected = evaluateLiteralHelper(expected)[0]?.builtinType?.value!;

            assertBigIntOrNumberEqual(result.builtinType?.value, expected, 0.1);
        });
    });

    // Modulo
    cases_modulo.forEach(([lhs, rhs, expected]) => {
        
        test(`modulo: ${lhs} MOD ${rhs} = ${expected}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateLiteralHelper(lhs);
            const [rhsType, _2] = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "MOD", undefined, undefined);
            
            // Assert
            assert(result);

            assertBigIntOrNumberEqual(result.builtinType?.value, expected, 0.1);
        });
    });

    // Addition
    cases_addition.forEach(([lhs, rhs, expected]) => {
        
        test(`addition: ${lhs} + ${rhs} = ${expected}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateLiteralHelper(lhs);
            const [rhsType, _2] = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "+", undefined, undefined);
            
            // Assert
            assert(result);

            if (typeof expected === "string")
                expected = evaluateLiteralHelper(expected)[0]?.builtinType?.value!;

            assertBigIntOrNumberEqual(result.builtinType?.value, expected);
        });
    });

    // Subtraction
    cases_subtraction.forEach(([lhs, rhs, expected]) => {
        
        test(`subtraction: ${lhs} - ${rhs} = ${expected}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateLiteralHelper(lhs);
            const [rhsType, _2] = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "-", undefined, undefined);
            
            // Assert
            assert(result);

            if (typeof expected === "string")
                expected = evaluateLiteralHelper(expected)[0]?.builtinType?.value!;

            assertBigIntOrNumberEqual(result.builtinType?.value, expected, 0.1);
        });
    });
});

const cases_equals: [string, string][] = [
    ["1", "1"],
    ["BIT#1", "BIT#1"],
    ["BIT#1", "BOOL#1"],
    ["BOOL#1", "BOOL#1"],
    ["BYTE#2", "BYTE#2"],
    ["BYTE#2", "REAL#2.0"],
    ["REAL#2.3e-2", "REAL#2.3e-2"],
    ["TIME#2H20M", "TIME#2H20M"],
    ["LTIME#2H20M", "LTIME#2H20M"],
    ["DATE#2000-01-01", "DATE#2000-01-01"],
    ["LDATE#2000-01-01", "LDATE#2000-01-01"],
    ["TIME_OF_DAY#11:22:33", "TIME_OF_DAY#11:22:33"],
    ["LTIME_OF_DAY#11:22:33.123", "LTIME_OF_DAY#11:22:33.123"],
    ["DATE_AND_TIME#2000-01-01-11:22:33", "DATE_AND_TIME#2000-01-01-11:22:33"],
    ["LDATE_AND_TIME#2000-01-01-11:22:33", "LDATE_AND_TIME#2000-01-01-11:22:33"],
];

const cases_not_equals: [string, string][] = [
    ["1", "2"],
    ["BIT#1", "BIT#2"],
    ["BIT#1", "BOOL#2"],
    ["BOOL#1", "BOOL#2"],
    ["BYTE#2", "BYTE#1"],
    ["BYTE#2", "REAL#2.1"],
    ["REAL#2.3e-2", "REAL#2.2e-2"],
    ["TIME#2H20M", "TIME#1D"],
    ["LTIME#2H20M", "LTIME#1D"],
    ["DATE#2000-01-01", "DATE#2000-01-02"],
    ["LDATE#2000-01-01", "LDATE#2000-01-02"],
    ["TIME_OF_DAY#11:22:33", "TIME_OF_DAY#11:22:34"],
    ["LTIME_OF_DAY#11:22:33.123", "LTIME_OF_DAY#11:22:33.124"],
    ["DATE_AND_TIME#2000-01-01-11:22:33", "DATE_AND_TIME#2000-01-01-11:22:34"],
    ["LDATE_AND_TIME#2000-01-01-11:22:33", "LDATE_AND_TIME#2000-01-01-11:22:34"],
];

const cases_greater_than: [string, string][] = [
    ["2", "1"],
    ["BIT#2", "BIT#1"],
    ["BIT#2", "BOOL#1"],
    ["BOOL#2", "BOOL#1"],
    ["BYTE#3", "BYTE#2"],
    ["BYTE#3", "REAL#2.0"],
    ["REAL#2.4e-2", "REAL#2.3e-2"],
    ["TIME#1D", "TIME#2H20M"],
    ["LTIME#1D", "LTIME#2H20M"],
    ["DATE#2000-01-02", "DATE#2000-01-01"],
    ["LDATE#2000-01-02", "LDATE#2000-01-01"],
    ["TIME_OF_DAY#11:22:34", "TIME_OF_DAY#11:22:33"],
    ["LTIME_OF_DAY#11:22:33.124", "LTIME_OF_DAY#11:22:33.123"],
    ["DATE_AND_TIME#2000-01-01-11:22:34", "DATE_AND_TIME#2000-01-01-11:22:33"],
    ["LDATE_AND_TIME#2000-01-01-11:22:34", "LDATE_AND_TIME#2000-01-01-11:22:33"],
];

const cases_greater_equal: [string, string][] = [
    ["2", "1"],
    ["BIT#2", "BIT#1"],
    ["BIT#2", "BOOL#1"],
    ["BOOL#2", "BOOL#1"],
    ["BYTE#2", "BYTE#2"],
    ["BYTE#2", "REAL#2.0"],
    ["REAL#2.3e-2", "REAL#2.3e-2"],
    ["TIME#2H20M", "TIME#2H20M"],
    ["LTIME#2H20M", "LTIME#2H20M"],
    ["DATE#2000-01-01", "DATE#2000-01-01"],
    ["LDATE#2000-01-01", "LDATE#2000-01-01"],
    ["TIME_OF_DAY#11:22:33", "TIME_OF_DAY#11:22:33"],
    ["LTIME_OF_DAY#11:22:33.123", "LTIME_OF_DAY#11:22:33.123"],
    ["DATE_AND_TIME#2000-01-01-11:22:33", "DATE_AND_TIME#2000-01-01-11:22:33"],
    ["LDATE_AND_TIME#2000-01-01-11:22:33", "LDATE_AND_TIME#2000-01-01-11:22:33"],

    ["1", "1"],
    ["BIT#1", "BIT#1"],
    ["BIT#1", "BOOL#1"],
    ["BOOL#1", "BOOL#1"],
    ["BYTE#3", "BYTE#2"],
    ["BYTE#3", "REAL#2.0"],
    ["REAL#2.4e-2", "REAL#2.3e-2"],
    ["TIME#1D", "TIME#2H20M"],
    ["LTIME#1D", "LTIME#2H20M"],
    ["DATE#2000-01-02", "DATE#2000-01-01"],
    ["LDATE#2000-01-02", "LDATE#2000-01-01"],
    ["TIME_OF_DAY#11:22:34", "TIME_OF_DAY#11:22:33"],
    ["LTIME_OF_DAY#11:22:33.124", "LTIME_OF_DAY#11:22:33.123"],
    ["DATE_AND_TIME#2000-01-01-11:22:34", "DATE_AND_TIME#2000-01-01-11:22:33"],
    ["LDATE_AND_TIME#2000-01-01-11:22:34", "LDATE_AND_TIME#2000-01-01-11:22:33"],
];

const cases_less_than: [string, string][] = [
    ["1", "2"],
    ["BIT#1", "BIT#2"],
    ["BIT#1", "BOOL#2"],
    ["BOOL#1", "BOOL#2"],
    ["BYTE#1", "BYTE#2"],
    ["BYTE#1", "REAL#2.0"],
    ["REAL#2.2e-2", "REAL#2.3e-2"],
    ["TIME#2H19M", "TIME#2H20M"],
    ["LTIME#2H19M", "LTIME#2H20M"],
    ["DATE#1999-01-01", "DATE#2000-01-01"],
    ["LDATE#1999-01-01", "LDATE#2000-01-01"],
    ["TIME_OF_DAY#11:22:32", "TIME_OF_DAY#11:22:33"],
    ["LTIME_OF_DAY#11:22:33.122", "LTIME_OF_DAY#11:22:33.123"],
    ["DATE_AND_TIME#2000-01-01-11:22:32", "DATE_AND_TIME#2000-01-01-11:22:33"],
    ["LDATE_AND_TIME#2000-01-01-11:22:32", "LDATE_AND_TIME#2000-01-01-11:22:33"],
];

const cases_less_equal: [string, string][] = [
    ["1", "2"],
    ["BIT#1", "BIT#2"],
    ["BIT#1", "BOOL#2"],
    ["BOOL#1", "BOOL#2"],
    ["BYTE#2", "BYTE#2"],
    ["BYTE#2", "REAL#2.0"],
    ["REAL#2.3e-2", "REAL#2.3e-2"],
    ["TIME#2H20M", "TIME#2H20M"],
    ["LTIME#2H20M", "LTIME#2H20M"],
    ["DATE#2000-01-01", "DATE#2000-01-01"],
    ["LDATE#2000-01-01", "LDATE#2000-01-01"],
    ["TIME_OF_DAY#11:22:33", "TIME_OF_DAY#11:22:33"],
    ["LTIME_OF_DAY#11:22:33.123", "LTIME_OF_DAY#11:22:33.123"],
    ["DATE_AND_TIME#2000-01-01-11:22:33", "DATE_AND_TIME#2000-01-01-11:22:33"],
    ["LDATE_AND_TIME#2000-01-01-11:22:33", "LDATE_AND_TIME#2000-01-01-11:22:33"],

    ["1", "1"],
    ["BIT#1", "BIT#1"],
    ["BIT#1", "BOOL#1"],
    ["BOOL#1", "BOOL#1"],
    ["BYTE#1", "BYTE#2"],
    ["BYTE#1", "REAL#2.0"],
    ["REAL#2.2e-2", "REAL#2.3e-2"],
    ["TIME#2H19M", "TIME#2H20M"],
    ["LTIME#2H19M", "LTIME#2H20M"],
    ["DATE#1999-01-01", "DATE#2000-01-01"],
    ["LDATE#1999-01-01", "LDATE#2000-01-01"],
    ["TIME_OF_DAY#11:22:32", "TIME_OF_DAY#11:22:33"],
    ["LTIME_OF_DAY#11:22:33.122", "LTIME_OF_DAY#11:22:33.123"],
    ["DATE_AND_TIME#2000-01-01-11:22:32", "DATE_AND_TIME#2000-01-01-11:22:33"],
    ["LDATE_AND_TIME#2000-01-01-11:22:32", "LDATE_AND_TIME#2000-01-01-11:22:33"],
];

suite("equality", () => {
    
    setup(() => {
        StModelBuilder.currentSourceFile = new StSourceFile(Uri.parse("file:///dummy"));
    });

    // Equal
    cases_equals.forEach(([lhs, rhs]) => {
        
        test(`equals: ${lhs} = ${rhs}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateLiteralHelper(lhs);
            const [rhsType, _2] = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, undefined, "=", undefined);
            
            // Assert
            assert(result);
            assert.strictEqual(result.builtinType?.value, 1n);
        });
    });

    // Not equal
    cases_not_equals.forEach(([lhs, rhs]) => {
        
        test(`not equals: ${lhs} = ${rhs}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateLiteralHelper(lhs);
            const [rhsType, _2] = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, undefined, "<>", undefined);
            
            // Assert
            assert(result);
            assert.strictEqual(result.builtinType?.value, 1n);
        });
    });

    // Greater than
    cases_greater_than.forEach(([lhs, rhs]) => {
        
        test(`greater than: ${lhs} > ${rhs}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateLiteralHelper(lhs);
            const [rhsType, _2] = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, undefined, ">", undefined);
            
            // Assert
            assert(result);
            assert.strictEqual(result.builtinType?.value, 1n);
        });
    });

    // Greater than or equal to
    cases_greater_equal.forEach(([lhs, rhs]) => {
        
        test(`greater than or equal to: ${lhs} >= ${rhs}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateLiteralHelper(lhs);
            const [rhsType, _2] = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, undefined, ">=", undefined);
            
            // Assert
            assert(result);
            assert.strictEqual(result.builtinType?.value, 1n);
        });
    });

    // Less than
    cases_less_than.forEach(([lhs, rhs]) => {
        
        test(`less than: ${lhs} < ${rhs}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateLiteralHelper(lhs);
            const [rhsType, _2] = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, undefined, "<", undefined);
            
            // Assert
            assert(result);
            assert.strictEqual(result.builtinType?.value, 1n);
        });
    });

    // Less than or equal to
    cases_less_equal.forEach(([lhs, rhs]) => {
        
        test(`less than or equal to: ${lhs} <= ${rhs}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateLiteralHelper(lhs);
            const [rhsType, _2] = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, undefined, "<=", undefined);
            
            // Assert
            assert(result);
            assert.strictEqual(result.builtinType?.value, 1n);
        });
    });
});