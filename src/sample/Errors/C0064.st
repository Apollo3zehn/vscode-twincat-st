// C0064: Dereference requires a pointer
FUNCTION_BLOCK FB_C0064
    
    VAR
        _a:   INT;
        _b:   POINTER TO INT;
    END_VAR

    _a := _a^;
    _a := _b^^;
END_FUNCTION_BLOCK