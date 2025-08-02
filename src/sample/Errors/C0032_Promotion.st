// C0032: Cannot convert type '{type}' to type '{type}'

FUNCTION_BLOCK C0032_Promotion

    VAR
        _bit: BIT;
    END_VAR

    // 1. Untyped integer literals do not have a fixed type; only their value is stored.
    //
    // 2. If one operand* is a signed integer and the other is not (unsigned, bitfield, or untyped),
    //    promote the other operand to the smallest signed integer type that can represent its value.
    //
    // 3. If one operand* is an unsigned integer or bitfield and the other is untyped,
    //    promote the untyped operand to the smallest unsigned integer or bitfield type that can represent its value.
    //
    // 4. If both operands are untyped literals, promote both to the smallest integer type that can represent their values:
    //    4a. For addition: use signed types if either operand is negative; otherwise, use unsigned types.
    //    4b. For subtraction: always use signed types.
    //
    // 5. If both operands are of compatible types, the result is the type of the larger operand.
    //    When combining unsigned integer and bitfield types, the result is unsigned integer.
    //
    // * For assignments, the first operand refers to the variable being assigned to.

    // Left operand: typed, right operand: typed
    _bit := BYTE#1 + UINT#1;	// UINT
    _bit := UINT#1 + BYTE#1;	// UINT

    // Left operand: typed, right operand: untyped
    _bit := SINT#1 + 1;			// SINT
    _bit := SINT#1 + 127;		// SINT
    _bit := SINT#1 + 128;		// INT

    _bit := SINT#1 - 1;			// SINT
    _bit := SINT#1 - 127;		// SINT
    _bit := SINT#1 - 128;		// INT

    _bit := SINT#1 + -1;		// SINT
    _bit := SINT#1 + -128;		// SINT
    _bit := SINT#1 + -129;		// INT

    _bit := USINT#1 + 1;		// USINT
    _bit := USINT#1 + 255; 		// USINT
    _bit := USINT#1 + 256; 		// UINT

    _bit := USINT#1 - 1;		// USINT
    _bit := USINT#1 - 255; 		// USINT
    _bit := USINT#1 - 256; 		// UINT

    _bit := USINT#1 + -1;		// SINT
    _bit := USINT#1 + -128;		// SINT
    _bit := USINT#1 + -129;		// INT

    // Left operand: untyped, right operand: untyped
    _bit := -128 + 1;			// SINT
    _bit := -128 + 127;			// SINT
    _bit := -128 + 128;			// INT

    _bit := -128 - 1;			// SINT
    _bit := -128 - 127;			// SINT
    _bit := -128 - 128;			// INT

    _bit := -128 + -1;			// SINT
    _bit := -128 + -128;		// SINT
    _bit := -128 + -129;		// INT 

    _bit := 255 + 1;			// USINT
    _bit := 255 + 255; 			// USINT
    _bit := 255 + 256; 			// UINT

    _bit := 255 - 1;			// INT
    _bit := 255 - 255; 			// INT
    _bit := 255 - 256; 			// INT

    _bit := 255 + -1;			// INT
    _bit := 255 + -128;			// INT
    _bit := 255 + -129;			// INT

    _bit := 0 + 0;				// USINT
    _bit := 0 - 0;				// SINT
    _bit := -1 + 0;				// SINT
        
    _bit := 127 + 1;     		// USINT
    _bit := 255 + 1;     		// USINT

    // No operand, just assignment
    _bit := 2;					// SINT
    _bit := 128;				// USINT
END_FUNCTION_BLOCK