// C0140: Reference assign is only allowed to variables of reference type
FUNCTION_BLOCK FB_C0140
    
    VAR
        _a: INT;
    END_VAR

    _a REF= _a;
END_FUNCTION_BLOCK