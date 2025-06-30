PROGRAM MAIN

    VAR
        _counter:   FB_Counter;
        _enable:    BOOL := TRUE;
        _success:   BOOL;
        _count:     INT;
    END_VAR

    _counter(enable := _enable, count := _count, success => _success);
    _counter.Reset();
    _counter.Value = 99;
END_PROGRAM