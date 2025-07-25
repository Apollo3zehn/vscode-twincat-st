// The string xxx contains non-representable characters
FUNCTION_BLOCK NonRepresentableCharacters

    VAR
        _a: STRING(2) := 'Ā';
        _b: WSTRING(2) := '😊';
    END_VAR
END_FUNCTION_BLOCK