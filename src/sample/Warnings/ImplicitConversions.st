// https://infosys.beckhoff.com/english.php?content=../content/1033/tf5100_tc3_nc_i/4188351883.html&id=
FUNCTION_BLOCK ImplicitConversions_Warnings

    VAR

        // Bitstring Types
        _byte:  BYTE;
        _word:  WORD;
        _dword: DWORD;
        _lword: LWORD;

        // Unsigned Integer Types
        _usint: USINT;
        _uint:  UINT;
        _udint: UDINT;
        _ulint: ULINT;

        // Signed Integer Types
        _sint:  SINT;
        _int:   INT;
        _dint:  DINT;
        _lint:  LINT;

        // Floating Point Types
        _real:  REAL := 1e39;
        _lreal: LREAL;
    END_VAR

    _byte := _sint;

    _word := _sint;
    _word := _int;

    _dword := _sint;
    _dword := _int;
    _dword := _dint;

    _lword := _sint;
    _lword := _int;
    _lword := _dint;
    _lword := _lint;

    _usint := _sint;

    _uint := _sint;
    _uint := _int;

    _udint := _sint;
    _udint := _int;
    _udint := _dint;

    _ulint := _sint;
    _ulint := _int;
    _ulint := _dint;
    _ulint := _lint;

    _sint := _byte;
    _sint := _usint;

    _int := _byte;
    _int := _word;
    _int := _usint;
    _int := _uint;

    _dint := _byte;
    _dint := _word;
    _dint := _dword;
    _dint := _usint;
    _dint := _uint;
    _dint := _udint;

    _lint := _byte;
    _lint := _word;
    _lint := _dword;
    _lint := _lword;
    _lint := _usint;
    _lint := _uint;
    _lint := _udint;
    _lint := _ulint;

    _real := _dword;
    _real := _lword;
    _real := _udint;
    _real := _ulint;
    _real := _dint;
    _real := _lint;
    _real := _lreal;

    _lreal := _lword;
    _lreal := _ulint;
    _lreal := _lint;
END_FUNCTION_BLOCK