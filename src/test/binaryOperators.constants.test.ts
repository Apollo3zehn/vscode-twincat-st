import assert from 'assert';
import { Uri } from 'vscode';
import { StSourceFile } from '../core/types.js';
import { evaluateBinaryOperation } from '../model/evaluation.js';
import { StModelBuilder } from '../model/StModelBuilder.js';
import { assertBigIntOrNumberEqual, evaluateLiteralHelper } from './testUtils.js';

const cases_multiplication: [string, string, string][] = [
    ["2", "3", "USINT#6"],
    ["BYTE#2", "INT#3", "INT#6"],
    ["REAL#2.5", "INT#2", "REAL#5"],
    ["INT#2", "REAL#2.5", "REAL#5"],
    ["REAL#2.5", "REAL#2.5", "REAL#6.25"],
    ["REAL#2.5", "REAL#-2.5", "REAL#-6.25"],
    ["TIME#2H2M", "2", "TIME#4H4M"],

    // Overflow
    ["2", "9223372036854775808", "ULINT#0"],
    ["TIME#1H", "-2", "TIME#49D15H2M47S296MS"]
];

const cases_division: [string, string, string][] = [
    ["10", "3", "USINT#3"],
    ["BYTE#10", "INT#3", "INT#3"],
    ["REAL#10.1", "INT#2", "REAL#5.05"],
    ["INT#2", "REAL#2.5", "REAL#0.8"],
    ["REAL#2.5", "REAL#2", "REAL#1.25"],
    ["REAL#2.5", "REAL#-2", "REAL#-1.25"],
    ["TIME#2H2M", "2", "TIME#1H1M"],

    // Overflow
    ["TIME#1H", "-2", "TIME#49D16H32M47S296MS"]
];

const cases_modulo: [string, string, string][] = [
    ["11", "7", "USINT#4"],
    ["UINT#11", "UINT#7", "UINT#4"],
    ["INT#-11", "UINT#7", "INT#-4"],
    ["UINT#11", "INT#-7", "INT#4"]
];

const cases_addition: [string, string, string][] = [
    ["99", "1", "USINT#100"],
    ["BYTE#99", "INT#1", "INT#100"],
    ["REAL#99", "INT#1", "REAL#100"],
    ["INT#99", "REAL#1", "REAL#100"],
    ["REAL#99.1", "REAL#0.9", "REAL#100"],
    ["REAL#99.1", "REAL#-0.9", "REAL#98.2"],

    ["TIME#2H2M", "TIME#2H1M", "TIME#4H3M"],
    ["DATE#2000-01-01", "TIME#1D", "DATE#2000-01-02"],
    ["TIME_OF_DAY#03:30:21", "TIME#2H1M", "TIME_OF_DAY#05:31:21"],
    ["DATE_AND_TIME#2000-01-01-03:30:21", "TIME#2H1M999MS", "DATE_AND_TIME#2000-01-01-05:31:21"],

    ["LTIME#2H2M", "LTIME#2H1M", "LTIME#4H3M"],
    ["LDATE#2000-01-01", "LTIME#1D", "LDATE#2000-01-02"],
    ["LTIME_OF_DAY#03:30:21", "LTIME#2H1M", "LTIME_OF_DAY#05:31:21"],
    ["LDATE_AND_TIME#2000-01-01-03:30:21", "LTIME#2H1M", "LDATE_AND_TIME#2000-01-01-05:31:21"],

    // Overflow
    ["REAL#3.402823E+38", "REAL#1E+38", "REAL#Infinity"],
    ["LREAL#1.7976931348623158E+308", "LREAL#1E+308", "LREAL#Infinity"],

    ["TIME#49D17H2M47S295MS", "TIME#1MS", "TIME#0MS"],
    ["DATE#2106-02-07", "TIME#06H28M16S", "DATE#1970-01-01"],
    ["TIME_OF_DAY#23:59:59.999", "TIME#1MS", "TIME_OF_DAY#00:00:00"],
    ["DATE_AND_TIME#2106-02-07-06:28:15", "TIME#1S", "DATE_AND_TIME#1970-1-1-0:0:0"],

    ["LTIME#213503D23H34M33S709MS551US615NS", "LTIME#1NS", "LTIME#0NS"],
    ["LDATE#2554-7-21", "LTIME#23H34M33S709MS551US616NS", "LDATE#1970-01-01"],
    ["LTIME_OF_DAY#23:59:59.999999999", "LTIME#1NS", "LTIME_OF_DAY#00:00:00"],
    /* It looks like Temporal API has rounding errors near the maximum :-( (see also Number.MAX_SAFE_INTEGER) */
    // ["LDATE_AND_TIME#2554-7-21-23:34:33.709551615", "LTIME#1NS", "LDATE_AND_TIME#1970-1-1-0:0:0"]
];

const cases_subtraction: [string, string, string][] = [
    ["99", "1", "SINT#98"],
    ["256", "256", "INT#0"],
    ["BYTE#99", "INT#1", "INT#98"],
    ["REAL#99", "INT#1", "REAL#98"],
    ["INT#99", "REAL#1", "REAL#98"],
    ["REAL#99.1", "REAL#0.9", "REAL#98.2"],
    ["REAL#99.1", "REAL#-0.9", "REAL#100"],

    ["TIME#2H2M", "TIME#2H1M", "TIME#1M"],
    ["DATE#2000-01-01", "TIME#1D", "DATE#1999-12-31"],
    ["TIME_OF_DAY#03:30:21", "TIME#2H1M", "TIME_OF_DAY#01:29:21"],
    ["DATE_AND_TIME#2000-01-01-03:30:21", "TIME#2H1M999MS", "DATE_AND_TIME#2000-01-01-01:29:21"],

    ["LTIME#2H2M", "LTIME#2H1M", "LTIME#1M"],
    ["LDATE#2000-01-01", "LTIME#1D", "LDATE#1999-12-31"],
    ["LTIME_OF_DAY#03:30:21", "LTIME#2H1M", "LTIME_OF_DAY#01:29:21"],
    ["LDATE_AND_TIME#2000-01-01-03:30:21", "LTIME#2H1M", "LDATE_AND_TIME#2000-01-01-01:29:21"],

    // Overflow
    ["REAL#-3.402823E+38", "REAL#1E+38", "REAL#-Infinity"],
    ["LREAL#-1.7976931348623158E+308", "LREAL#1E+308", "LREAL#-Infinity"],

    ["TIME#1H", "TIME#2H", "TIME#49D16H2M47S296MS"],
    ["DATE#1970-01-01", "TIME#06H28M16S", "DATE#2106-02-07"],
    ["TIME_OF_DAY#00:00:00", "TIME#1MS", "TIME_OF_DAY#23:59:59.999"],
    ["DATE_AND_TIME#1970-1-1-0:0:0", "TIME#1S", "DATE_AND_TIME#2106-02-07-06:28:15"],

    ["LTIME#0NS", "LTIME#1NS", "LTIME#213503D23H34M33S709MS551US615NS"],
    ["LDATE#1970-01-01", "LTIME#23H34M33S709MS551US616NS", "LDATE#2554-7-21"],
    ["LTIME_OF_DAY#00:00:00", "LTIME#1NS", "LTIME_OF_DAY#23:59:59.999999999"],
    /* It looks like Temporal API has rounding errors near the maximum :-( (see also Number.MAX_SAFE_INTEGER) */
    // ["LDATE_AND_TIME#1970-1-1-0:0:0", "LTIME#1NS", "LDATE_AND_TIME#2554-7-21-23:34:33.709551615"]
];

suite("arithmetic", () => {
    
    setup(() => {
        StModelBuilder.currentSourceFile = new StSourceFile(Uri.parse("file:///dummy"));
    });

    // Multiplication
    cases_multiplication.forEach(([lhs, rhs, expectedString]) => {
        
        test(`multiplication: ${lhs} * ${rhs} = ${expectedString}`, () => {
            
            // Arrange
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "*", undefined, undefined);
            
            // Assert
            assert(result);

            const expected = evaluateLiteralHelper(expectedString)?.builtinType;

            assert.strictEqual(result.builtinType?.code, expected?.code);
            assertBigIntOrNumberEqual(result.builtinType?.value, expected?.value!, 0.1);
        });
    });

    // Division
    cases_division.forEach(([lhs, rhs, expectedString]) => {
        
        test(`division: ${lhs} / ${rhs} = ${expectedString}`, () => {
            
            // Arrange
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "/", undefined, undefined);
            
            // Assert
            assert(result);

            const expected = evaluateLiteralHelper(expectedString)?.builtinType;

            assert.strictEqual(result.builtinType?.code, expected?.code);
            assertBigIntOrNumberEqual(result.builtinType?.value, expected?.value!, 0.1);
        });
    });

    // Modulo
    cases_modulo.forEach(([lhs, rhs, expectedString]) => {
        
        test(`modulo: ${lhs} MOD ${rhs} = ${expectedString}`, () => {
            
            // Arrange
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "MOD", undefined, undefined);
            
            // Assert
            assert(result);

            const expected = evaluateLiteralHelper(expectedString)?.builtinType;

            assert.strictEqual(result.builtinType?.code, expected?.code);
            assertBigIntOrNumberEqual(result.builtinType?.value, expected?.value!, 0.1);
        });
    });

    // Addition
    cases_addition.forEach(([lhs, rhs, expectedString]) => {
        
        test(`addition: ${lhs} + ${rhs} = ${expectedString}`, () => {
            
            // Arrange
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "+", undefined, undefined);
            
            // Assert
            assert(result);

            const expected = evaluateLiteralHelper(expectedString)?.builtinType;

            assert.strictEqual(result.builtinType?.code, expected?.code);
            assertBigIntOrNumberEqual(result.builtinType?.value, expected?.value!, 0.1);
        });
    });

    // Subtraction
    cases_subtraction.forEach(([lhs, rhs, expectedString]) => {
        
        test(`subtraction: ${lhs} - ${rhs} = ${expectedString}`, () => {
            
            // Arrange
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "-", undefined, undefined);
            
            // Assert
            assert(result);

            const expected = evaluateLiteralHelper(expectedString)?.builtinType;

            assert.strictEqual(result.builtinType?.code, expected?.code);
            assertBigIntOrNumberEqual(result.builtinType?.value, expected?.value!, 0.1);
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
    ["LDATE_AND_TIME#2000-01-01-11:22:33", "LDATE_AND_TIME#2000-01-01-11:22:33"]
];

const cases_not_equals: [string, string][] = [
    ["1", "2"],
    ["BIT#1", "BIT#0"],
    ["BIT#1", "BOOL#0"],
    ["BOOL#1", "BOOL#0"],
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
    ["LDATE_AND_TIME#2000-01-01-11:22:33", "LDATE_AND_TIME#2000-01-01-11:22:34"]
];

const cases_greater_than: [string, string][] = [
    ["2", "1"],
    ["BIT#1", "BIT#0"],
    ["BIT#1", "BOOL#0"],
    ["BOOL#1", "BOOL#0"],
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
    ["LDATE_AND_TIME#2000-01-01-11:22:34", "LDATE_AND_TIME#2000-01-01-11:22:33"]
];

const cases_greater_equal: [string, string][] = [
    ["2", "1"],
    ["BIT#1", "BIT#0"],
    ["BIT#1", "BOOL#0"],
    ["BOOL#1", "BOOL#0"],
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
    ["LDATE_AND_TIME#2000-01-01-11:22:34", "LDATE_AND_TIME#2000-01-01-11:22:33"]
];

const cases_less_than: [string, string][] = [
    ["1", "2"],
    ["BIT#0", "BIT#1"],
    ["BIT#0", "BOOL#1"],
    ["BOOL#0", "BOOL#1"],
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
    ["LDATE_AND_TIME#2000-01-01-11:22:32", "LDATE_AND_TIME#2000-01-01-11:22:33"]
];

const cases_less_equal: [string, string][] = [
    ["1", "2"],
    ["BIT#0", "BIT#1"],
    ["BIT#0", "BOOL#1"],
    ["BOOL#0", "BOOL#1"],
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
    ["LDATE_AND_TIME#2000-01-01-11:22:32", "LDATE_AND_TIME#2000-01-01-11:22:33"]
];

suite("equality", () => {
    
    setup(() => {
        StModelBuilder.currentSourceFile = new StSourceFile(Uri.parse("file:///dummy"));
    });

    // Equal
    cases_equals.forEach(([lhs, rhs]) => {
        
        test(`equals: ${lhs} = ${rhs}`, () => {
            
            // Arrange
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

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
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

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
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

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
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

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
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

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
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

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

const cases_and: [string, string, string][] = [
    ["BIT#0", "BIT#0", "BOOL#0"],
    ["BIT#0", "BIT#1", "BOOL#0"],
    ["BIT#1", "BIT#0", "BOOL#0"],
    ["BIT#1", "BIT#1", "BOOL#1"],
    ["BIT#0", "BOOL#0", "BOOL#0"],
    ["BIT#0", "BOOL#1", "BOOL#0"],
    ["BIT#1", "BOOL#0", "BOOL#0"],
    ["BIT#1", "BOOL#1", "BOOL#1"],
    ["BYTE#2#10101010", "BYTE#2#00101001", "USINT#2#00101000"],
    ["BYTE#2#10101010", "INT#2#0010100100101001", "UINT#2#0000000000101000"],
    ["BYTE#2#10101010", "-1", "USINT#2#10101010"]
];

const cases_or: [string, string, string][] = [
    ["BIT#0", "BIT#0", "BOOL#0"],
    ["BIT#0", "BIT#1", "BOOL#1"],
    ["BIT#1", "BIT#0", "BOOL#1"],
    ["BIT#1", "BIT#1", "BOOL#1"],
    ["BIT#0", "BOOL#0", "BOOL#0"],
    ["BIT#0", "BOOL#1", "BOOL#1"],
    ["BIT#1", "BOOL#0", "BOOL#1"],
    ["BIT#1", "BOOL#1", "BOOL#1"],
    ["BYTE#2#10101010", "BYTE#2#00101001", "USINT#2#10101011"],
    ["BYTE#2#10101010", "INT#2#0010100100101001", "UINT#2#0010100110101011"],
    ["BYTE#2#10101010", "-1", "USINT#2#11111111"]
];

const cases_xor: [string, string, string][] = [
    ["BIT#0", "BIT#0", "BOOL#0"],
    ["BIT#0", "BIT#1", "BOOL#1"],
    ["BIT#1", "BIT#0", "BOOL#1"],
    ["BIT#1", "BIT#1", "BOOL#0"],
    ["BIT#0", "BOOL#0", "BOOL#0"],
    ["BIT#0", "BOOL#1", "BOOL#1"],
    ["BIT#1", "BOOL#0", "BOOL#1"],
    ["BIT#1", "BOOL#1", "BOOL#0"],
    ["BYTE#2#10101010", "BYTE#2#00101001", "USINT#2#10000011"],
    ["BYTE#2#10101010", "INT#2#0010100100101001", "UINT#2#0010100110000011"],
    ["BYTE#2#10101010", "-1", "USINT#2#01010101"]
];

suite("bitstring", () => {
    
    setup(() => {
        StModelBuilder.currentSourceFile = new StSourceFile(Uri.parse("file:///dummy"));
    });

    // AND
    cases_and.forEach(([lhs, rhs, expectedString]) => {
        
        test(`and: ${lhs} AND ${rhs} = ${expectedString}`, () => {
            
            // Arrange
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, undefined, undefined, "AND");
            
            // Assert
            assert(result);

            const expected = evaluateLiteralHelper(expectedString)?.builtinType;

            assert.strictEqual(result.builtinType?.code, expected?.code);
            assert.strictEqual(result.builtinType?.value, expected?.value);
        });
    });

    // OR
    cases_or.forEach(([lhs, rhs, expectedString]) => {
        
        test(`or: ${lhs} OR ${rhs} = ${expectedString}`, () => {
            
            // Arrange
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, undefined, undefined, "OR");
            
            // Assert
            assert(result);

            const expected = evaluateLiteralHelper(expectedString)?.builtinType;

            assert.strictEqual(result.builtinType?.code, expected?.code);
            assert.strictEqual(result.builtinType?.value, expected?.value);
        });
    });

    // XOR
    cases_xor.forEach(([lhs, rhs, expectedString]) => {
        
        test(`xor: ${lhs} XOR ${rhs} = ${expectedString}`, () => {
            
            // Arrange
            const lhsType = evaluateLiteralHelper(lhs);
            const rhsType = evaluateLiteralHelper(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, undefined, undefined, "XOR");
            
            // Assert
            assert(result);

            const expected = evaluateLiteralHelper(expectedString)?.builtinType;

            assert.strictEqual(result.builtinType?.code, expected?.code);
            assert.strictEqual(result.builtinType?.value, expected?.value);
        });
    });
});