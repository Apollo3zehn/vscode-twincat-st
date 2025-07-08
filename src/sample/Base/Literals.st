FUNCTION_BLOCK Literals
    VAR
        // BOOL
        bool_false:         BOOL    := FALSE;
        bool_true:          BOOL    := TRUE;

        // INT
        int_positive:       INT     := 10;
        int_negative:       INT     := -10;
        int_typed:          INT     := -INT#1;

        // REAL
        real_positive:      REAL    := 1.99;
        real_negative:      REAL    := -1.99;
        real_scientific:    REAL    := 1e-99;

        // HEX
        int_hex:            INT     := 16#0A;
        int_hex_typed:      INT     := INT#16#FF;

        // OCTAL
        int_octal:          INT     := 8#12;
        int_octal_typed:    INT     := INT#8#77;

        // BINARY
        int_binary:         INT     := 2#1010;
        int_binary_typed:   INT     := INT#2#11111111;

        // STRING
        string_quoted_dbl:  STRING  := "The string";
        string_quoted_sgl:  STRING  := 'The string';
    END_VAR
END_FUNCTION_BLOCK