// C0032: Cannot convert type '{type}' to type '{type}'

FUNCTION_BLOCK C0032_Literals

    VAR

        _byte:  BYTE;
        _uint:  UINT;
        _udint: UDINT;
        _int:   INT;
        _real:  REAL;
        _lreal: LREAL;
    END_VAR

    _byte := _byte + _real; 	// BYTE + REAL  = REAL
    _byte := _byte + _uint; 	// BYTE + UINT  = UINT 
    _byte := _byte + _udint; 	// BYTE + UDINT = UDINT
    _byte := _byte + 32768;		// BYTE + UINT  = UINT

    _byte := _int + _real; 		// INT + REAL   = REAL
    _byte := _int + _uint; 		// INT + UINT   = INT 
    _byte := _int + _udint;		// INT + UDINT  = DINT
    _byte := _int + 32768;		// INT + DINT   = DINT

    _byte := _real + _lreal;	// REAL + LREAL = LREAL
END_FUNCTION_BLOCK