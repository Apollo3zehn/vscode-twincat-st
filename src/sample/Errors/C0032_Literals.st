// C0032: Cannot convert type '{type}' to type '{type}'

FUNCTION_BLOCK C0032_Literals

    VAR

        _a:         BOOL        := 2;
        _subrange:  INT(1..1)   := 2;
    END_VAR

    _a          := 2;
    _subrange   := 2;
END_FUNCTION_BLOCK