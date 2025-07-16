// C0035: Program name, function or function block instance expected instead of '{name}'
FUNCTION_BLOCK FB_C0035
    
    VAR
        _a: INT;
    END_VAR

    PROPERTY A : INT
        GET
            //
        END_GET
    END_PROPERTY

    METHOD M_A : INT
        //
    END_METHOD

    _a();
    _a := _a();
    E_C0035.a();

    _a := A();
    A();

    M_A()();
END_FUNCTION_BLOCK

TYPE E_C0035 :
(
    a
);
END_TYPE