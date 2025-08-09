import assert from 'assert';
import { Uri } from 'vscode';
import { StSourceFile } from '../core/types.js';
import { evaluateBinaryOperation } from '../model/evaluation.js';
import { evaluateIntegerLiteral } from '../model/literals/evaluateIntegerLiteral.js';
import { StModelBuilder } from '../model/StModelBuilder.js';
import { evaluateRealLiteral } from '../model/literals/evaluateRealLiteral.js';
import { assertBigintOrNumberEqual } from './testUtils.js';

const cases_plus: [string, string, bigint | number][] = [
    ['BYTE#99', 'INT#1', 100n],
    ['REAL#99', 'INT#1', 100],
    ['INT#99', 'REAL#1', 100],
    ['REAL#99.1', 'REAL#0.9', 100],
    ['REAL#99.1', 'REAL#-0.9', 98.2]
];

const cases_minus: [string, string, bigint | number][] = [
    ['BYTE#99', 'INT#1', 98n],
    ['REAL#99', 'INT#1', 98],
    ['INT#99', 'REAL#1', 98],
    ['REAL#99.1', 'REAL#0.9', 98.2],
    ['REAL#99.1', 'REAL#-0.9', 100]
];

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

suite("plus", () => {
    
    setup(() => {
        StModelBuilder.currentSourceFile = new StSourceFile(Uri.parse("file:///dummy"));
    });

    // Plus
    cases_plus.forEach(([lhs, rhs, expected]) => {
        
        test(`${lhs} + ${rhs} = ${expected}`, () => {
            
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

    // Minus
    cases_minus.forEach(([lhs, rhs, expected]) => {
        
        test(`${lhs} - ${rhs} = ${expected}`, () => {
            
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

    // Multiplication
    cases_multiplication.forEach(([lhs, rhs, expected]) => {
        
        test(`${lhs} * ${rhs} = ${expected}`, () => {
            
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
        
        test(`${lhs} / ${rhs} = ${expected}`, () => {
            
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
});
