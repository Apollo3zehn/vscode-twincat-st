// C0047: Cannot apply indexing with [] to an expression of type '{type}'
FUNCTION_BLOCK FB_C0047
    
    VAR
        _a: INT;
        _b: POINTER TO INT;
    END_VAR

    _a := _a[0];
    _a := _b^[0];
    GVL_C0047[0];
END_FUNCTION_BLOCK

VAR_GLOBAL GVL_C0047
    dummy: INT;
END_VAR