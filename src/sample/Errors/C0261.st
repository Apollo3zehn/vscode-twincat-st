// C0261: A reference type is not allowed as base type of an array, pointer, or reference
FUNCTION_BLOCK FB_C0261
    
    VAR
        _a: ARRAY [1..2] OF REFERENCE TO INT;
        _b: POINTER TO REFERENCE TO INT;
        _c: REFERENCE TO REFERENCE TO INT;
    END_VAR
END_FUNCTION_BLOCK