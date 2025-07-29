// C0037: '{name}' is no input of '{name}'

FUNCTION_BLOCK FB_C0037_2

    VAR_OUTPUT
        b: INT;
    END_VAR
END_FUNCTION_BLOCK

FUNCTION_BLOCK FB_C0037

    VAR
        _a: FB_C0037_2;
    END_VAR

    _a.b := 1;
END_FUNCTION_BLOCK