// C0074: Unexpected array initialisation
FUNCTION_BLOCK FB_C0074
    
    VAR
       _a: ARRAY [0..1] OF INT;
    END_VAR

    _a := [0, 1];
END_FUNCTION_BLOCK