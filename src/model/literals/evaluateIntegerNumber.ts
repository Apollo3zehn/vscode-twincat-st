import { StBuiltinType, StModel, StNativeTypeKind, StSourceFile, StType } from "../../core/types.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { C0001 } from "../diagnostics.js";

export function evaluateIntegerNumber(
    literal: LiteralContext,
    sourceFile: StSourceFile
): StType | undefined {
    
    const integerLiteral = literal.INTEGER_LITERAL()!;
    let text = integerLiteral.getText();

    const splittedText = text.split('#');

    let lhsType: StBuiltinType | undefined;
    let radix: number = 10;
    let value: number;

    /* Important: Do not convert type to uppercase
     * first because TwinCAT requires the input string 
     * to be uppercase, otherwise it is a syntax error.
     */
    if (splittedText.length === 3) {
        lhsType = splittedText[0] as StBuiltinType;
        radix = parseInt(splittedText[1], 10);
    }

    else if (splittedText.length === 2) {

        if (splittedText[0] in StBuiltinType)
            lhsType = splittedText[0] as StBuiltinType;
            
        else
            radix = parseInt(splittedText[0], 10);
    }

    const lhsTypeDetails = lhsType
        ? StModel.nativeTypesDetails.get(lhsType)
        : undefined;
    
    value = parseInt(splittedText[splittedText.length - 1], radix);

    let rhsType: StBuiltinType;

    const integerType = getSmallestIntegerForValue(value, true, true);

    if (integerType) {
        rhsType = integerType;
    }
        
    else {
        
        if (lhsType)
            C0001(literal, StBuiltinType[lhsType], sourceFile);

        else
            C0001(literal, "ANY_INT", sourceFile);

        return undefined;
    }

    if (lhsType) {

        if (
            value < 0 &&
            lhsTypeDetails &&
            lhsTypeDetails?.kind !== StNativeTypeKind.SignedInteger
        ) {
            C0001(literal, StBuiltinType[lhsType], sourceFile);
            return undefined;
        }

        const rhsTypeDetails = StModel.nativeTypesDetails.get(rhsType);

        if (
            rhsTypeDetails &&
            lhsTypeDetails &&
            lhsTypeDetails.max! < rhsTypeDetails.max!
        ) {
            C0001(literal, StBuiltinType[lhsType], sourceFile);
            return undefined;
        }
    }

    const type = new StType();
    type.builtinType = lhsType ?? null; // Return 'null' for untyped integer literals
    type.value = value;
    type.subRangeStart = type.value;
    type.subRangeStop = type.value;

    return type;
}

export function getSmallestIntegerForValue(
    value: number,
    allowSigned: boolean,
    allowUnsigned: boolean
): StBuiltinType | undefined {

    if (value < 0) {

        if (value >= -Math.pow(2, 7))
            return StBuiltinType.SINT;
            
        else if (value >= -Math.pow(2, 15))
            return StBuiltinType.INT;
            
        else if (value >= -Math.pow(2, 31))
            return StBuiltinType.DINT;
            
        else if (value >= -Math.pow(2, 63))
            return StBuiltinType.LINT;
    }

    else {

        if (allowSigned && value < Math.pow(2, 7))
            return StBuiltinType.SINT;
            
        else if (allowUnsigned && value < Math.pow(2, 8))
            return StBuiltinType.USINT;
            
        else if (allowSigned && value < Math.pow(2, 15))
            return StBuiltinType.INT;
            
        else if (allowUnsigned && value < Math.pow(2, 16))
            return StBuiltinType.UINT;
            
        else if (allowSigned && value < Math.pow(2, 31))
            return StBuiltinType.DINT;
            
        else if (allowUnsigned && value < Math.pow(2, 32))
            return StBuiltinType.UDINT;
            
        else if (allowSigned && value < Math.pow(2, 63))
            return StBuiltinType.LINT;
            
        else if (allowUnsigned && value < Math.pow(2, 64))
            return StBuiltinType.ULINT;
    }

    return undefined;
}