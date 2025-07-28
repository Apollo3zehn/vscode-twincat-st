import { StBuiltinType, StModel, StSourceFile, StType } from "../../core/types.js";
import { LiteralContext } from "../../generated/StructuredTextParser.js";
import { C0001 } from "../diagnostics.js";

export function evaluateRealNumber(
    literal: LiteralContext,
    sourceFile: StSourceFile,
    typeHint: StBuiltinType | undefined,
): StType | undefined {
    
    const realNumber = literal.REAL_NUMBER()!;
    let text = realNumber.getText();

    const isNegative = text.startsWith("-");

    if (isNegative)
        text = text.substring(1);

    const splittedText = text.split('#');

    let requestedType: StBuiltinType | undefined;
    let value: number;

    /* Important: Do not convert type to uppercase
        * first because TwinCAT requires the input string 
        * to be uppercase, otherwise it is a syntax error.
        */
    if (splittedText.length === 2)
        requestedType = splittedText[0] as StBuiltinType;

    value = parseFloat(splittedText[splittedText.length - 1]);

    let fittingType: StBuiltinType;

    // https://infosys.beckhoff.com/english.php?content=../content/1033/tc3_plc_intro/2529405067.html&id=

    if (isNegative) {

        if (-value >= -3.402823e+38)
            fittingType = StBuiltinType.REAL;

        else if (-value >= -1.7976931348623158e+308)
            fittingType = StBuiltinType.LREAL;
            
        else {
            
            if (requestedType)
                C0001(literal, StBuiltinType[requestedType], sourceFile);

            else
                C0001(literal, "ANY_REAL", sourceFile);

            return undefined;
        }
    }

    else {

        if (value <= 3.402823e+38)
            fittingType = StBuiltinType.REAL;

        else if (value <= 1.7976931348623158e+308)
            fittingType = StBuiltinType.LREAL;
                                
        else {
            
            if (requestedType)
                C0001(literal, StBuiltinType[requestedType], sourceFile);

            else
                C0001(literal, "ANY_REAL", sourceFile);

            return undefined;
        }
    }

    let choosenType: StBuiltinType | undefined = fittingType;
    
    if (requestedType) {

        const requestedTypeDetails = StModel.nativeTypesDetails.get(requestedType);
        const fittingTypeDetails = StModel.nativeTypesDetails.get(fittingType);

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

    else {
        choosenType = StBuiltinType.LREAL;
    }

    switch (typeHint) {

        case StBuiltinType.REAL:

            if (value <= 3.402823e+38)
                choosenType = StBuiltinType.REAL;

            break;
    }

    const type = new StType();
    type.builtinType = choosenType;

    return type;
}