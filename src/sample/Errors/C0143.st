// C0143: The property '{name}' cannot be used in this context because it lacks the get accessor
FUNCTION_BLOCK C0143
    
    VAR
        _a: INT;
        _b: C0143_B;
    END_VAR

    PROPERTY A : C0143_B
        SET
            //
        END_SET
    END_PROPERTY

    _a := A.B;
    A.B := _a;
    _b := A;
END_FUNCTION_BLOCK

FUNCTION_BLOCK C0143_B
    
    PROPERTY B : INT
        GET
            //
        END_GET
        SET
            //
        END_SET
    END_PROPERTY
END_FUNCTION_BLOCK