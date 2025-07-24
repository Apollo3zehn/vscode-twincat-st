FUNCTION_BLOCK C0001

    VAR

        // Signed Integer Types
        _int:                   INT             := INT#16#8000;

        (* Javascript cannot properly represent 2^64-1 so we get no correct error here unfortunately. *)
        _int2:                  INT             := 18446744073709551616;

        // Floating Point Types
        _real:                  REAL            := REAL#3.402824E+38;
        _lreal:                 LREAL           := LREAL#1.7976931348623159e+308;
        _lreal2:                LREAL           := 1.7976931348623159e+308;

        // Time-Related Types
        date_under:             DATE            := DATE#1969-12-31;
		date_over:              DATE            := DATE#2106-02-08;
        date_min_invalid:       DATE            := D#1970-01-40;

        date_and_time_under:    DATE_AND_TIME   := DATE_AND_TIME#1969-12-31-23:59:59;
        date_and_time_over:     DATE_AND_TIME   := DATE_AND_TIME#2106-02-07-06:28:16;

        time_of_day_over:       TIME_OF_DAY     := TIME_OF_DAY#24:00:00.000;

        l_date_under:           LDATE           := LDATE#0000-12-31;
		l_date_over:            LDATE           := LDATE#10000-01-01;

        l_date_and_time_under:  LDATE_AND_TIME  := LDATE_AND_TIME#0000-12-31-23:59:59;
        l_date_and_time_over:   LDATE_AND_TIME  := LDATE_AND_TIME#10000-01-01-00:00:00.0;

        l_time_of_day_over:     LTIME_OF_DAY    := LTIME_OF_DAY#24:00:00.000;
    END_VAR
END_FUNCTION_BLOCK