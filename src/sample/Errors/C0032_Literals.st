FUNCTION_BLOCK C0032_Literals

    VAR

        // Logical Types
        _bool_pos2:     BOOL        := 2;
        _bool_neg1:     BOOL        := -1;
        _bool_real:     BOOL        := 1.0;

        _bit_pos2:      BIT         := 2;
        _bit_neg1:      BIT         := -1;
        _bit_real:      BIT         := 1.0;

        // Bitstring Types
        _word:          WORD        := 16#FFFFFF;

        // Unsigned Integer Types
        _uint:          UINT        := 16#FFFFFF;

        // Signed Integer Types
        _int:           INT         := 16#FFFFFFFF;
        _int2:          INT         := 18446744073709551615;

        // Subrange Types
        _int_subrange:  INT(1..1)   := 2;
    END_VAR

    // Logical Types
    _bool_pos2  := 2;
    _bool_neg1  := -1;
    _bool_real  := 1.0;

    _bit_pos2   := 2;
    _bit_neg1   := -1;
    _bit_real   := 1.0;

    // Bitstring Types
    _word       := 16#FFFFFF;

    // Unsigned Integer Types
    _uint       := 16#FFFFFF;

    // Signed Integer Types
    _int        := 16#FFFFFFFF;
    _int2       := 18446744073709551615;
END_FUNCTION_BLOCK