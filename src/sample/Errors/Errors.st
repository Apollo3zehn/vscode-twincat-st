FUNCTION_BLOCK FB_Errors

    VAR
        _tmp: INT;

        _c0064: POINTER TO INT;

        // C0077: Unknown type: '{type}'
        _type: UnknownType;
    END_VAR

    // C0064: Dereference requires a pointer
    _tmp := _tmp^;
    _tmp := _c0064^^;

END_FUNCTION_BLOCK