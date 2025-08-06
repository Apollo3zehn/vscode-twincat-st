// C0140: Reference assign is only allowed to variables of reference type
FUNCTION_BLOCK FB_C0140
    
    VAR
        _a: INT;
        _b: INT REF= _a;
    END_VAR

    _b REF= _a;
END_FUNCTION_BLOCK