// M0002: The '{name}' operator is not defined for the type combination '{name}' and '{name}'
FUNCTION_BLOCK M0002

    VAR
        _bool: BOOL;
    END_VAR

    _bool := _bool + _bool;
END_FUNCTION_BLOCK