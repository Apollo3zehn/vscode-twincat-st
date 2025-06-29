FUNCTION_BLOCK FB_Counter IMPLEMENTS I_Counter, I_Reset EXTENDS FB_CounterBase

    VAR_INPUT
        enable: BOOL;
        count:  REFERENCE TO BOOL;
        unused: INT;
    END_VAR

    VAR_OUTPUT
        success: BOOL;
    END_VAR
    
    VAR
        _value:     INT;
        _unused:    BOOL;
    END_VAR

    PROPERTY Value : INT
        GET
            Value := _value;
        END_GET
        SET
            _value := Value;
        END_SET
    END_PROPERTY

    METHOD Reset : BOOL

        VAR_INST
            _resetCount : INT;
        END_VAR

        _value      := DEFAULT_INT;
        _resetCount := _resetCount MOD 5 + 1;
    END_METHOD

    METHOD PRIVATE UnusedMethod : BOOL
        _value := DEFAULT_INT;
    END_METHOD

    METHOD PRIVATE IncreaseByTwo : BOOL
        _value := _value + 1;
    END_METHOD

    IF enable OR FALSE THEN
        IncreaseByTwo();
        count := count + 1;
    END_IF;
END_FUNCTION_BLOCK