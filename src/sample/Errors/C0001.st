FUNCTION_BLOCK C0032_Initializer_Literals

    VAR

        // Signed Integer Types
        _int:           INT     := INT#16#8000;

        (* Javascript cannot properly represent 2^64-1 so we get no error here unfortunately. *)
        _int2:          INT     := 18446744073709551616;

        // Floating Point Types
        _real:          REAL    := REAL#3.402824E+38;
        _lreal:         LREAL   := LREAL#1.7976931348623159e+308;
        _lreal2:        LREAL   := 1.7976931348623159e+308;
    END_VAR
END_FUNCTION_BLOCK