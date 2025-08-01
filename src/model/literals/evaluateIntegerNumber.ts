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

    if (value < 0) {

        if (
            lhsType &&
            lhsTypeDetails &&
            lhsTypeDetails?.kind !== StNativeTypeKind.SignedInteger
        ) {
            C0001(literal, StBuiltinType[lhsType], sourceFile);
            return undefined;
        }

        if (value >= -Math.pow(2, 7))
            rhsType = StBuiltinType.SINT;   // -2^7 .. 2^7-1
            
        else if (value >= -Math.pow(2, 15))
            rhsType = StBuiltinType.INT;    // -2^15 .. 2^15-1
            
        else if (value >= -Math.pow(2, 31))
            rhsType = StBuiltinType.DINT;   // -2^31 .. 2^31-1
            
        else if (value >= -Math.pow(2, 63))
            rhsType = StBuiltinType.LINT;   // -2^63 .. 2^63-1
            
        else {

            if (lhsType)
                C0001(literal, StBuiltinType[lhsType], sourceFile);

            else
                C0001(literal, "ANY_INT", sourceFile);

            return undefined;
        }
    }

    else {

        if (value <= Math.pow(2, 7) - 1)
            rhsType = StBuiltinType.SINT;   // -2^7 .. 2^7-1
            
        else if (value <= Math.pow(2, 8) - 1)
            rhsType = StBuiltinType.USINT;  // 0 .. 2^8-1
            
        else if (value <= Math.pow(2, 15) - 1)
            rhsType = StBuiltinType.INT;    // -2^15 .. 2^15-1
            
        else if (value <= Math.pow(2, 16) - 1)
            rhsType = StBuiltinType.UINT;   // 0 .. 2^16-1
            
        else if (value <= Math.pow(2, 31) - 1)
            rhsType = StBuiltinType.DINT;   // -2^31 .. 2^31-1
            
        else if (value <= Math.pow(2, 32) - 1)
            rhsType = StBuiltinType.UDINT;  // 0 .. 2^32-1
            
        else if (value <= Math.pow(2, 63) - 1)
            rhsType = StBuiltinType.LINT;   // -2^63 .. 2^63-1
            
        else if (value <= Math.pow(2, 64) - 1)
            rhsType = StBuiltinType.ULINT;  // 0 .. 2^64-1
            
        else {
            
            if (lhsType)
                C0001(literal, StBuiltinType[lhsType], sourceFile);

            else
                C0001(literal, "ANY_INT", sourceFile);

            return undefined;
        }
    }

    if (lhsType) {

        const rhsTypeDetails = StModel.nativeTypesDetails.get(rhsType);

        if (
            rhsTypeDetails &&
            lhsTypeDetails &&
            lhsTypeDetails.max! < rhsTypeDetails.max!
        ) {
            C0001(literal, StBuiltinType[lhsType], sourceFile);
            return undefined;
        }

        else {
            rhsType = lhsType;
        }
    }

    const type = new StType();
    type.builtinType = rhsType;
    type.value = value;
    type.subRangeStart = type.value;
    type.subRangeStop = type.value;

    return type;
}