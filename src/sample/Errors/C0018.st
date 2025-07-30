// C0018 '{name}' is no valid assignment target
FUNCTION_BLOCK C0018

    VAR CONSTANT
        _a: INT;
    END_VAR

    PROPERTY A : INT
        GET
            //
        END_GET
    END_PROPERTY

    METHOD B
        //
    END_METHOD

    _a  := 1;
    A   := 1;
    B   := 1;
END_FUNCTION_BLOCK