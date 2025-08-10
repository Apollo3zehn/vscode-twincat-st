FUNCTION_BLOCK C0001

    VAR

        // Signed Integer Types
        _int:                   INT             := INT#16#8000;

        // Unsigned Integer Types
        _uint:                  UINT            := UINT#-1;
        _int2:                  INT             := 18446744073709551616;

        // Floating Point Types
        _real:                  REAL            := REAL#3.402824E+38;
        _lreal:                 LREAL           := LREAL#1.7976931348623159e+308;
        _lreal2:                LREAL           := 1.7976931348623159e+308;

        // Time-Related Types
        time_over1:             TIME            := TIME#1M61S;
        time_over2:             TIME            := TIME#49D17H2M47S296MS;

        date_under:             DATE            := DATE#1969-12-31;
		date_over:              DATE            := DATE#2106-02-08;
        date_invalid:           DATE            := D#1970-01-40;

        date_and_time_under:    DATE_AND_TIME   := DATE_AND_TIME#1969-12-31-23:59:59;
        date_and_time_over:     DATE_AND_TIME   := DATE_AND_TIME#2106-02-07-06:28:16;
        date_and_time_invalid:  DATE_AND_TIME   := DATE_AND_TIME#1970-01-40-00:00:00;

        time_of_day_over:       TIME_OF_DAY     := TIME_OF_DAY#24:00:00.000;
        time_of_day_invalid:    TIME_OF_DAY     := TIME_OF_DAY#23:00:72.000;

        l_time_over1:           LTIME           := LTIME#1M61S;
        l_time_over2:           LTIME           := LTIME#213503D23H34M33S709MS551US616NS;

        l_date_under:           LDATE           := LDATE#1969-12-31;
		l_date_over:            LDATE           := LDATE#2554-07-22;

        l_date_and_time_under:  LDATE_AND_TIME  := LDATE_AND_TIME#1969-12-31-23:59:59;
        l_date_and_time_over:   LDATE_AND_TIME  := LDATE_AND_TIME#2554-7-21-23:34:33.709551616;

        l_time_of_day_over:     LTIME_OF_DAY    := LTIME_OF_DAY#24:00:00.000;
    END_VAR
END_FUNCTION_BLOCK