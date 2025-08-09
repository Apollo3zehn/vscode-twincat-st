import assert from 'assert';
import { Uri } from 'vscode';
import { StSourceFile } from '../core/types.js';
import { evaluateBinaryOperation } from '../model/evaluation.js';
import { evaluateIntegerLiteral } from '../model/literals/evaluateIntegerLiteral.js';
import { StModelBuilder } from '../model/StModelBuilder.js';
import { evaluateRealLiteral } from '../model/literals/evaluateRealLiteral.js';
import { assertBigintOrNumberEqual } from './testUtils.js';

const cases_multiplication: [string, string, bigint | number][] = [
    ['BYTE#2', 'INT#3', 6n],
    ['REAL#2.5', 'INT#2', 5],
    ['INT#2', 'REAL#2.5', 5],
    ['REAL#2.5', 'REAL#2.5', 6.25],
    ['REAL#2.5', 'REAL#-2.5', -6.25]
];

const cases_division: [string, string, bigint | number][] = [
    ['BYTE#10', 'INT#3', 3n],
    ['REAL#10.1', 'INT#2', 5.05],
    ['INT#2', 'REAL#2.5', 0.8],
    ['REAL#2.5', 'REAL#2', 1.25],
    ['REAL#2.5', 'REAL#-2', -1.25]
];

const cases_modulo: [string, string, bigint | number][] = [
    ['UINT#11', 'UINT#7', 4n],
    ['INT#-11', 'UINT#7', -4n],
    ['UINT#11', 'INT#-7', 4n]
];

const cases_addition: [string, string, bigint | number][] = [
    ['BYTE#99', 'INT#1', 100n],
    ['REAL#99', 'INT#1', 100],
    ['INT#99', 'REAL#1', 100],
    ['REAL#99.1', 'REAL#0.9', 100],
    ['REAL#99.1', 'REAL#-0.9', 98.2]
];

const cases_subtraction: [string, string, bigint | number][] = [
    ['BYTE#99', 'INT#1', 98n],
    ['REAL#99', 'INT#1', 98],
    ['INT#99', 'REAL#1', 98],
    ['REAL#99.1', 'REAL#0.9', 98.2],
    ['REAL#99.1', 'REAL#-0.9', 100]
];

suite("arithmetic", () => {
    
    setup(() => {
        StModelBuilder.currentSourceFile = new StSourceFile(Uri.parse("file:///dummy"));
    });

    // Multiplication
    cases_multiplication.forEach(([lhs, rhs, expected]) => {
        
        test(`multiplication: ${lhs} * ${rhs} = ${expected}`, () => {
            
            // Arrange
            const [lhsType, _1] = lhs.includes("REAL") ? evaluateRealLiteral(lhs) : evaluateIntegerLiteral(lhs);
            const [rhsType, _2] = rhs.includes("REAL") ? evaluateRealLiteral(rhs) : evaluateIntegerLiteral(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "*");
            
            // Assert
            assert(result);
            assertBigintOrNumberEqual(result.builtinType?.value, expected, 0.1);
        });
    });

    // Division
    cases_division.forEach(([lhs, rhs, expected]) => {
        
        test(`division: ${lhs} / ${rhs} = ${expected}`, () => {
            
            // Arrange
            const [lhsType, _1] = lhs.includes("REAL") ? evaluateRealLiteral(lhs) : evaluateIntegerLiteral(lhs);
            const [rhsType, _2] = rhs.includes("REAL") ? evaluateRealLiteral(rhs) : evaluateIntegerLiteral(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "/");
            
            // Assert
            assert(result);
            assertBigintOrNumberEqual(result.builtinType?.value, expected, 0.1);
        });
    });

    // Modulo
    cases_modulo.forEach(([lhs, rhs, expected]) => {
        
        test(`modulo: ${lhs} MOD ${rhs} = ${expected}`, () => {
            
            // Arrange
            const [lhsType, _1] = lhs.includes("REAL") ? evaluateRealLiteral(lhs) : evaluateIntegerLiteral(lhs);
            const [rhsType, _2] = rhs.includes("REAL") ? evaluateRealLiteral(rhs) : evaluateIntegerLiteral(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "MOD");
            
            // Assert
            assert(result);
            assertBigintOrNumberEqual(result.builtinType?.value, expected, 0.1);
        });
    });

    // Addition
    cases_addition.forEach(([lhs, rhs, expected]) => {
        
        test(`addition: ${lhs} + ${rhs} = ${expected}`, () => {
            
            // Arrange
            const [lhsType, _1] = lhs.includes("REAL") ? evaluateRealLiteral(lhs) : evaluateIntegerLiteral(lhs);
            const [rhsType, _2] = rhs.includes("REAL") ? evaluateRealLiteral(rhs) : evaluateIntegerLiteral(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "+");
            
            // Assert
            assert(result);
            assertBigintOrNumberEqual(result.builtinType?.value, expected);
        });
    });

    // Subtraction
    cases_subtraction.forEach(([lhs, rhs, expected]) => {
        
        test(`subtraction: ${lhs} - ${rhs} = ${expected}`, () => {
            
            // Arrange
            const [lhsType, _1] = lhs.includes("REAL") ? evaluateRealLiteral(lhs) : evaluateIntegerLiteral(lhs);
            const [rhsType, _2] = rhs.includes("REAL") ? evaluateRealLiteral(rhs) : evaluateIntegerLiteral(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "-");
            
            // Assert
            assert(result);
            assertBigintOrNumberEqual(result.builtinType?.value, expected, 0.1);
        });
    });
});

const cases_equals: [string, string, boolean][] = [
    ['BYTE#2', 'BYTE#2', true],
    ['BYTE#2', 'BYTE#1', false]
];

suite("equality", () => {
    
    setup(() => {
        StModelBuilder.currentSourceFile = new StSourceFile(Uri.parse("file:///dummy"));
    });

    // Equal
    cases_equals.forEach(([lhs, rhs, expected]) => {
        
        test(`equals: ${lhs} = ${rhs} => ${expected}`, () => {
            
            // Arrange
            const [lhsType, _1] = lhs.includes("REAL") ? evaluateRealLiteral(lhs) : evaluateIntegerLiteral(lhs);
            const [rhsType, _2] = rhs.includes("REAL") ? evaluateRealLiteral(rhs) : evaluateIntegerLiteral(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateBinaryOperation(lhsType, rhsType, "=");
            
            // Assert
            assert(result);
            assert.strictEqual(result.builtinType?.value, expected ? 1n : 0n);
        });
    });
});