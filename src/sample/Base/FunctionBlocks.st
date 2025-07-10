FUNCTION_BLOCK MyFunctionBlock
    
    VAR_INPUT
        var_a: BOOL := FALSE;
    END_VAR

    PROPERTY MyValue : INT
        GET
            //
        END_GET
        SET
            //
        END_SET
    END_PROPERTY

    METHOD MyMethod : BOOL
        //
    END_METHOD

    var_a := TRUE;
END_FUNCTION_BLOCK