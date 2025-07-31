// C0032: Cannot convert type '{type}' to type '{type}'

FUNCTION_BLOCK C0032_Literals

    VAR

        _bool:          BOOL;
        _byte:          BYTE;
        _uint:          UINT;
        _udint:         UDINT;
        _ulint:         ULINT;
        _int:           INT;
        _int_subrange:  INT(0..1);
        _dint:          DINT;
        _lint:          LINT;
        _real:          REAL;
        _lreal:         LREAL;
    END_VAR

    // Compatible addition
    _byte := _byte + _real; 	    // BYTE + REAL          = REAL
    _byte := _byte + _uint; 	    // BYTE + UINT          = UINT 
    _byte := _byte + _udint; 	    // BYTE + UDINT         = UDINT
    _byte := _byte + 32768;		    // BYTE + UINT Literal  = UINT

    _byte := _int + _real; 		    // INT + REAL           = REAL
    _byte := _int + _uint; 		    // INT + UINT           = INT 
    _byte := _int + _udint;		    // INT + UDINT          = DINT
    _byte := _int + 32768;		    // INT + UINT Literal   = DINT
    _byte := _int_subrange + _byte; // INT(0..1) + BYTE     = INT

    _byte := _udint + _dint;        // UDINT + DINT         = DINT
    _byte := _ulint + _lint;        // LINT + ULINT         = LINT

    _byte := 32768 + 32768;         // 2x UINT Literal      = UINT

    _byte := _real + _lreal;	    // REAL + LREAL         = LREAL

    // Incompatible addition
    _byte := _bool + _uint;
END_FUNCTION_BLOCK