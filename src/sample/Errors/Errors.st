FUNCTION_BLOCK FB_Errors

    VAR
        _tmp: INT;
        _c0064: POINTER TO INT;

        // C0077: Unknown type: '{type}'
        _type: UnknownType;

        // C0261: A reference type is not allowed as base type of an array, pointer, or reference
        _c0261_1: ARRAY [1..2] OF REFERENCE TO INT;
        _c0261_2: POINTER TO REFERENCE TO INT;
        _c0261_3: REFERENCE TO REFERENCE TO INT;
    END_VAR

    // C0046: Identifier '{id}' not defined
    _c0046 := 1;
    THIS^.C0046();
    _tmp := THIS^.C0046();

    // C0047: Cannot apply indexing with [] to an expression of type '{type}'
    _tmp := _tmp[0];
    _tmp := _c0064^[0];

    // C0064: Dereference requires a pointer
    _tmp := _tmp^;
    _tmp := _c0064^^;

    // C0140: Reference assign is only allowed to variables of reference type
    _tmp REF= _tmp;

    // assignment: incompatible types
    // double definition, or method name = variable name
END_FUNCTION_BLOCK