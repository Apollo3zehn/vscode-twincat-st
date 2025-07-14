FUNCTION_BLOCK FB_Errors

    VAR
        _tmp: INT;

        _c0064: POINTER TO INT;

        // C0077: Unknown type: '{type}'
        _type: UnknownType;
    END_VAR

    // C0047: Cannot apply indexing with [] to an expression of type '{type}'
    _tmp := _tmp[0];
    _tmp := _c0064^[0];

    // C0064: Dereference requires a pointer
    _tmp := _tmp^;
    _tmp := _c0064^^;

    // variable usage: no variable declaration
    // assignment: incompatible types
END_FUNCTION_BLOCK