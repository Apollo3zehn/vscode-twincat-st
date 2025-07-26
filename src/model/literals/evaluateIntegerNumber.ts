import { StBuiltinType, StModel, StNativeTypeKind, StSourceFile, StType } from "../../core.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { C0001 } from "../diagnostics.js";

export function evaluateIntegerNumber(
    literal: LiteralContext,
    sourceFile: StSourceFile,
    typeHint: StBuiltinType | undefined
): StType | undefined {
    
    const typeHintKind = typeHint
        ? StModel.nativeTypes.get(typeHint)?.kind
        : undefined;

    const integerNumber = literal.INTEGER_NUMBER()!;
    let text = integerNumber.getText();

    const isNegative = text.startsWith("-");

    if (isNegative)
        text = text.substring(1);

    const splittedText = text.split('#');

    let requestedType: StBuiltinType | undefined;
    let radix: number = 10;
    let value: number;

    /* Important: Do not convert type to uppercase
        * first because TwinCAT requires the input string 
        * to be uppercase, otherwise it is a syntax error.
        */
    if (splittedText.length === 3) {
        requestedType = splittedText[0] as StBuiltinType;
        radix = parseInt(splittedText[1], 10);
    }

    else if (splittedText.length === 2) {

        if (splittedText[0] in StBuiltinType)
            requestedType = splittedText[0] as StBuiltinType;
            
        else
            radix = parseInt(splittedText[0], 10);
    }

    value = parseInt(splittedText[splittedText.length - 1], radix);

    let fittingType: StBuiltinType;

    if (isNegative) {

        if (-value >= -Math.pow(2, 7))
            fittingType = StBuiltinType.SINT;   // -2^7 .. 2^7-1
            
        else if (-value >= -Math.pow(2, 15))
            fittingType = StBuiltinType.INT;    // -2^15 .. 2^15-1
            
        else if (-value >= -Math.pow(2, 31))
            fittingType = StBuiltinType.DINT;   // -2^31 .. 2^31-1
            
        else if (-value >= -Math.pow(2, 63))
            fittingType = StBuiltinType.LINT;   // -2^63 .. 2^63-1
            
        else {

            if (requestedType)
                C0001(literal, StBuiltinType[requestedType], sourceFile);

            else
                C0001(literal, "ANY_INT", sourceFile);

            return undefined;
        }
    }

    else {

        if (value <= Math.pow(2, 7) - 1)
            fittingType = StBuiltinType.SINT;   // -2^7 .. 2^7-1
            
        else if (value <= Math.pow(2, 8) - 1)
            fittingType = StBuiltinType.USINT;  // 0 .. 2^8-1
            
        else if (value <= Math.pow(2, 15) - 1)
            fittingType = StBuiltinType.INT;    // -2^15 .. 2^15-1
            
        else if (value <= Math.pow(2, 16) - 1)
            fittingType = StBuiltinType.UINT;   // 0 .. 2^16-1
            
        else if (value <= Math.pow(2, 31) - 1)
            fittingType = StBuiltinType.DINT;   // -2^31 .. 2^31-1
            
        else if (value <= Math.pow(2, 32) - 1)
            fittingType = StBuiltinType.UDINT;  // 0 .. 2^32-1
            
        else if (value <= Math.pow(2, 63) - 1)
            fittingType = StBuiltinType.LINT;   // -2^63 .. 2^63-1
            
        else if (value <= Math.pow(2, 64) - 1)
            fittingType = StBuiltinType.ULINT;  // 0 .. 2^64-1
            
        else {
            
            if (requestedType)
                C0001(literal, StBuiltinType[requestedType], sourceFile);

            else
                C0001(literal, "ANY_INT", sourceFile);

            return undefined;
        }
    }

    let choosenType: StBuiltinType | undefined = fittingType;

    if (requestedType) {

        const requestedTypeDetails = StModel.nativeTypes.get(requestedType);
        const fittingTypeDetails = StModel.nativeTypes.get(fittingType);

        if (
            requestedTypeDetails &&
            fittingTypeDetails &&
            requestedTypeDetails.max! < fittingTypeDetails.max!
        ) {
            C0001(literal, StBuiltinType[requestedType], sourceFile);
            return undefined;
        }

        else {
            choosenType = requestedType;
        }
    }

    switch (typeHintKind) {

        case StNativeTypeKind.Logical:

            if (!isNegative && (value === 0 || value === 1))
                choosenType = typeHint;

            break;
        
        case StNativeTypeKind.Bitfield:
        case StNativeTypeKind.UnsignedInteger:

            const choosenTypeDetails = StModel.nativeTypes.get(choosenType);
            const typeHintDetails = StModel.nativeTypes.get(typeHint!);
            
            if (!isNegative && choosenTypeDetails!.size <= typeHintDetails!.size)
                choosenType = typeHint;

            break;
    }

    const type = new StType();
    type.builtinType = choosenType;
    type.subRangeStart = value;
    type.subRangeStop = value;

    return type;
}