FUNCTION_BLOCK Literals
    VAR
        // Logical Types
        bool_0:             BOOL    := 0;
        bool_false:         BOOL    := FALSE;
        bool_1:             BOOL    := 1;
        bool_true:          BOOL    := TRUE;

        bit_0:              BOOL    := 0;
        bit_false:          BOOL    := FALSE;
        bit_1:              BOOL    := 1;
        bit_true:           BOOL    := TRUE;

        // Bitstring Types
        _word_1:            WORD    := 1;
        _word_2:            WORD    := 16#FFFF;

        // Unsigned Integer Types
        uint_positive:      UINT    := 010;
        uint_typed:         UINT    := UINT#1;

        int_positive:       INT     := 10;
        int_negative:       INT     := -10;
        int_typed:          INT     := -INT#1;

        // HEX
        int_hex:            INT     := 16#0A;
        int_hex_typed:      INT     := INT#16#FF;

        // DEC
        int_dec:            INT     := 10#10;
        int_hdec_typed:     INT     := INT#10#255;

        // OCTAL
        int_octal:          INT     := 8#12;
        int_octal_typed:    INT     := INT#8#77;

        // BINARY
        int_binary:         INT     := 2#1010;
        int_binary_typed:   INT     := INT#2#11111111;

        // Floating Point Types
        real_int:           REAL    := 199;
        real_positive:      REAL    := 1.99;
        real_negative:      REAL    := -1.99;
        real_scientific:    REAL    := 1e-99;

        // String Types
        string_quoted_dbl:  STRING  := "The string";
        string_quoted_sgl:  STRING  := 'The string';
    END_VAR
END_FUNCTION_BLOCK