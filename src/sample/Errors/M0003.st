// M0003: The unary operator '{name}' is not defined for type '{name}'
FUNCTION_BLOCK M0003

    VAR
        _a: M0003;
    END_VAR

    _a := -_a;
END_FUNCTION_BLOCK