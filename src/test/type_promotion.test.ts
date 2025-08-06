import assert from 'assert';
import { Uri } from 'vscode';
import { StBuiltinType, StBuiltinTypeCode, StSourceFile, StType } from '../core/types.js';
import { evaluateExpressionWith2Arguments, internalEvaluateAssignment } from '../model/evaluation.js';
import { evaluateIntegerLiteral } from '../model/literals/evaluateIntegerLiteral.js';
import { StModelBuilder } from '../model/StModelBuilder.js';

// Assignment of untyped literals to bit
const cases_assignment = [
    ['BIT', '2', 'SINT'],
    ['BIT', '128', 'USINT']
];

// Left operand: typed variable, right operand: typed variable
const cases_typed_variables = [
    ['BYTE', 'REAL', '+', 'REAL'],
    ['BYTE', 'UINT', '+', 'UINT'],
    ['BYTE', 'UDINT', '+', 'UDINT'],
    ['INT', 'REAL', '+', 'REAL'],
    ['INT', 'UINT', '+', 'INT'],
    ['INT', 'UDINT', '+', 'DINT'],
    ['INT', 'LINT', '+', 'LINT'],
    ['INT', 'LREAL', '+', 'LREAL'],
    ['UDINT', 'DINT', '+', 'DINT'],
    ['ULINT', 'LINT', '+', 'LINT'],
    ['REAL', 'LREAL', '+', 'LREAL'],
];

// Left operand: typed literal, right operand: typed literal
const cases_typed_literals = [
    ['BYTE#1', 'UINT#1', '+', 'UINT'],
    ['UINT#1', 'BYTE#1', '+', 'UINT']
];

// Left operand: typed literal, right operand: untyped literal
const cases_typed_untyped_literals = [
    ['SINT#1', '1', '+', 'SINT'],
    ['SINT#1', '127', '+', 'SINT'],
    ['SINT#1', '128', '+', 'INT'],
    ['SINT#1', '1', '-', 'SINT'],
    ['SINT#1', '127', '-', 'SINT'],
    ['SINT#1', '128', '-', 'INT'],
    ['SINT#1', '-1', '+', 'SINT'],
    ['SINT#1', '-128', '+', 'SINT'],
    ['SINT#1', '-129', '+', 'INT'],
    ['USINT#1', '1', '+', 'USINT'],
    ['USINT#1', '255', '+', 'USINT'],
    ['USINT#1', '256', '+', 'UINT'],
    ['USINT#1', '1', '-', 'USINT'],
    ['USINT#1', '255', '-', 'USINT'],
    ['USINT#1', '256', '-', 'UINT'],
    ['USINT#1', '-1', '+', 'SINT'],
    ['USINT#1', '-128', '+', 'SINT'],
    ['USINT#1', '-129', '+', 'INT'],
];

// Left operand: untyped literal, right operand: untyped literal
const cases_untyped_literals = [

    // Plus
    ['-128', '1', '+', 'SINT'],
    ['-128', '127', '+', 'SINT'],
    ['-128', '128', '+', 'INT'],
    ['-128', '-1', '+', 'SINT'],
    ['-128', '-128', '+', 'SINT'],
    ['-128', '-129', '+', 'INT'],
    ['255', '1', '+', 'USINT'],
    ['255', '255', '+', 'USINT'],
    ['255', '256', '+', 'UINT'],
    ['255', '-1', '+', 'INT'],
    ['255', '-128', '+', 'INT'],
    ['255', '-129', '+', 'INT'],
    ['0', '0', '+', 'USINT'],
    ['-1', '0', '+', 'SINT'],
    ['127', '1', '+', 'USINT'],

    // Minus
    ['-128', '1', '-', 'SINT'],
    ['-128', '127', '-', 'SINT'],
    ['-128', '128', '-', 'INT'],
    ['255', '1', '-', 'INT'],
    ['255', '255', '-', 'INT'],
    ['255', '256', '-', 'INT'],
    ['0', '0', '-', 'SINT'],
];

suite('type promotion', () => {

    // Assignment of untyped literal to bit
    cases_assignment.forEach(([lhs, rhs, expectedType]) => {
        
        StModelBuilder.currentSourceFile = new StSourceFile(Uri.parse("file:///dummy"));

        test(`Assignment: ${lhs} := ${rhs} => ${expectedType}`, () => {
            
            // Arrange
            let lhsType: StType | undefined = getType(lhs);
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
    
    // Left operand: typed variable, right operand: typed variable
    cases_typed_variables.forEach(([lhs, rhs, operator, expectedType]) => {
        
        test(`Typed variables: ${lhs} ${operator} ${rhs} => ${expectedType}`, () => {
            
            // Arrange
            const lhsType = getType(lhs);
            const rhsType = getType(rhs);

            // Act
            const result = evaluateExpressionWith2Arguments(lhsType, rhsType, operator);
            
            // Assert
            assert(result);
            assert.strictEqual(result[2]?.getId(), expectedType);
        });
    });

    // Left operand: typed literal, right operand: typed literal
    cases_typed_literals.forEach(([lhs, rhs, operator, expectedType]) => {
        
        test(`Typed literals: ${lhs} ${operator} ${rhs} => ${expectedType}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateIntegerLiteral(lhs);
            const [rhsType, _2] = evaluateIntegerLiteral(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateExpressionWith2Arguments(lhsType, rhsType, operator);
            
            // Assert
            assert(result);
            assert.strictEqual(result[2]?.getId(), expectedType);
        });
    });

    // Left operand: typed literal, right operand: untyped literal
    cases_typed_untyped_literals.forEach(([lhs, rhs, operator, expectedType]) => {
        
        test(`Typed + untyped literals: ${lhs} ${operator} ${rhs} => ${expectedType}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateIntegerLiteral(lhs);
            const [rhsType, _2] = evaluateIntegerLiteral(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateExpressionWith2Arguments(lhsType, rhsType, operator);
            
            // Assert
            assert(result);
            assert.strictEqual(result[2]?.getId(), expectedType);
        });
    });

    // Left operand: untyped literal, right operand: untyped literal
    cases_untyped_literals.forEach(([lhs, rhs, operator, expectedType]) => {
        
        test(`Untyped literals: ${lhs} ${operator} ${rhs} => ${expectedType}`, () => {
            
            // Arrange
            const [lhsType, _1] = evaluateIntegerLiteral(lhs);
            const [rhsType, _2] = evaluateIntegerLiteral(rhs);

            assert(lhsType);
            assert(rhsType);

            // Act
            const result = evaluateExpressionWith2Arguments(lhsType, rhsType, operator);
            
            // Assert
            assert(result);
            assert.strictEqual(result[2]?.getId(), expectedType);
        });
    });
});

function getType(typeCodeString: string): StType {

    const type = new StType();
    const typeCode = StBuiltinTypeCode[typeCodeString as keyof typeof StBuiltinTypeCode];

    type.builtinType = new StBuiltinType(typeCode);

    return type;
}
