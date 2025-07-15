// C0035: Program name, function or function block instance expected instead of '{name}'
FUNCTION_BLOCK FB_C0035
    
    VAR
        _a: INT;
    END_VAR

    _a();
    _a := _a();
    E_C0035.a();
END_FUNCTION_BLOCK

TYPE E_C0035 :
(
    a
);
END_TYPE