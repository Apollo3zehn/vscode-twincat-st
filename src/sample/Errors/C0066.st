// C0066: Cannot compare type '{name}' with type '{name}'
FUNCTION_BLOCK FB_C0066
    
    VAR
        _a:     INT;
        _b:     TIME;
        _c:     BOOL;
    END_VAR

    _c := _a > _b;
END_FUNCTION_BLOCK