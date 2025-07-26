// C0018 '{name}' is no valid assignment target
FUNCTION_BLOCK C0018

    PROPERTY A : INT
        GET
            //
        END_GET
    END_PROPERTY

    METHOD B
        //
    END_METHOD

    A := 1;
    B := 1;
END_FUNCTION_BLOCK