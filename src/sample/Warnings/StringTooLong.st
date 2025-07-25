// String type {name} too long for string type {name}: The string will be truncated
FUNCTION_BLOCK StringConstantTooLong

    VAR
        _a: STRING(1) := 'AB';
        _b: STRING(2) := 'AB';
        _c: STRING(1);
    END_VAR

    _c := _b;
END_FUNCTION_BLOCK