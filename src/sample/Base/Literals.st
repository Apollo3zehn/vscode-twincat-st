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
        real_positive:      REAL    := REAL#1.99;
        real_negative:      REAL    := -1.99;
        real_scientific:    REAL    := 1e-99;

        // String Types
        string_narrow:          STRING          := 'A';
        string_narrow2:         STRING(1)       := 'A';
        string_wide:            WSTRING         := "Ā";
        string_wide2:           WSTRING(1)      := "Ā";

        // Time-Related Types

        // TIME
        time_max:               TIME            := TIME#49D17H2M47S295MS;
        time_firstover:         TIME            := TIME#90H10MS;
        time_alt:               TIME            := T#05H10MS;

        // => DATE: Nothing is optional
        date_min:               DATE            := DATE#1970-01-01;
        date_max:               DATE            := DATE#2106-02-07;
        date_min_alt:           DATE            := D#1970-01-001;

        // => TIME_OF_DAY: Milliseconds and seconds are optional
        time_of_day_min:        TIME_OF_DAY     := TIME_OF_DAY#0:0:0;
        time_of_day_max:        TIME_OF_DAY     := TIME_OF_DAY#23:59:59.999;
        time_of_day_alt:        TOD             := TOD#0:0;

        // => DATE_AND_TIME: Seconds are optional
        date_and_time_min:      DATE_AND_TIME   := DATE_AND_TIME#1970-1-1-0:0:0;
        date_and_time_max:      DATE_AND_TIME   := DATE_AND_TIME#2106-02-07-06:28:15;
        date_and_time_alt:      DT              := DT#1970-1-001-0:0;

        // LTIME
        l_time_max:             LTIME           := LTIME#213503D23H34M33S709MS551US615NS;
        l_time_firstover:       LTIME           := LTIME#90H10MS;
        l_time_alt:             LTIME           := LTIME#05H10MS;

        // => LDATE: Nothing is optional
        l_date_min:             LDATE           := LDATE#1970-01-01;
        l_date_max:             LDATE           := LDATE#2554-7-21;
        l_date_min_alt:         LDATE           := LD#1970-1-001;

        // => LTIME_OF_DAY: Milliseconds and seconds are optional
        l_time_of_day_min:      LTIME_OF_DAY    := LTIME_OF_DAY#0:0:0;
        l_time_of_day_max:      LTIME_OF_DAY    := LTIME_OF_DAY#23:59:59.999999999;
        l_time_of_day_alt:      LTOD            := LTOD#0:0;

        // => LDATE_AND_TIME: Milliseconds and seconds are optional
        l_date_and_time_min:    LDATE_AND_TIME  := LDATE_AND_TIME#1970-01-01-00:00:00;
        l_date_and_time_max:    LDATE_AND_TIME  := LDATE_AND_TIME#2554-7-21-23:34:33.709551615;
        l_date_and_time_alt:    LDT             := LDT#1970-1-001-0:0;
    END_VAR
END_FUNCTION_BLOCK