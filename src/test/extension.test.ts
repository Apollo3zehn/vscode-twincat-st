import assert from 'assert';
import { evaluateExpressionWith2Arguments } from '../model/promotionHelper.js';
import { StBuiltinType, StBuiltinTypeCode, StType } from '../core/types.js';

// Left operand: typed variable, right operand: typed variable
const cases_typed_var = [
    // ['BYTE', '-BYTE', '+', 'INT'],
    ['BYTE', 'REAL', '+', 'REAL'],
    ['BYTE', 'UINT', '+', 'UINT'],
    ['BYTE', 'UDINT', '+', 'UDINT'],
    ['INT', 'REAL', '+', 'REAL'],
    ['INT', 'UINT', '+', 'INT'],
    ['INT', 'UDINT', '+', 'DINT'],
    ['INT', 'LINT', '+', 'LINT'],
    ['INT', 'LREAL', '+', 'LREAL'],
    // ['INT_SUBRANGE', 'BYTE', '+', 'INT'],
    ['UDINT', 'DINT', '+', 'DINT'],
    ['ULINT', 'LINT', '+', 'LINT'],
    ['REAL', 'LREAL', '+', 'LREAL'],
];

// Left operand: typed literal, right operand: typed literal
const cases_typed_literal = [
    ['BYTE#1', 'UINT#1', '+', 'UINT'],
    ['UINT#1', 'BYTE#1', '+', 'UINT'],
    // ['USINT#1', '-BYTE#1', '+', 'SINT'],
];

// Left operand: typed literal, right operand: untyped literal
const cases_typed_untyped = [
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

// Left operand: untyped, right operand: untyped
const cases_untyped = [

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
    ['255', '1', '+', 'USINT'],

    // Minus
    ['-128', '1', '-', 'SINT'],
    ['-128', '127', '-', 'SINT'],
    ['-128', '128', '-', 'INT'],
    ['255', '1', '-', 'INT'],
    ['255', '255', '-', 'INT'],
    ['255', '256', '-', 'INT'],
    ['0', '0', '-', 'SINT'],
];

suite('promotion', () => {

	cases_typed_var.forEach(([lhs, rhs, operator, expectedType], idx) => {
		
		test(`Case ${idx + 1}: ${lhs} ${operator} ${rhs} => ${expectedType}`, () => {
			
            // Arrange
            const lhsType = getType(lhs);
            const rhsType = getType(rhs);
			const result = evaluateExpressionWith2Arguments(lhsType, rhsType, operator);
			
            assert(result);
            // assert.strictEqual(result.getId(), expectedType);
        });
    });
});

function getType(typeCodeString: string): StType {

    const type = new StType();
    const typeCode = StBuiltinTypeCode[typeCodeString as keyof typeof StBuiltinTypeCode];

    type.builtinType = new StBuiltinType(typeCode);

    return type;
}