FUNCTION_BLOCK ABSTRACT FB_CounterBase

    VAR
        _baseInternal: INT;
    END_VAR

    PROPERTY BaseValue : INT
        GET
            BaseValue := _baseInternal;
        END_GET
        SET
            _baseInternal := BaseValue;
        END_SET
    END_PROPERTY

    METHOD ABSTRACT DoSomething : BOOL
    END_METHOD

    METHOD FB_Init

        VAR_INPUT
            bInitRetains : BOOL;
            bInCopyCode  : BOOL;
        END_VAR

        _baseInternal := 0;
    END_METHOD
END_FUNCTION_BLOCK