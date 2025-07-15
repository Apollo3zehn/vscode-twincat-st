// C0032: Cannot convert type '{type}' to type '{type}'

// https://infosys.beckhoff.com/english.php?content=../content/1033/tf5100_tc3_nc_i/4188351883.html&id=

// Combination generator (TS):

// const vars = [
//     "_bool", "_byte", "_word", "_dword", "_lword",
//     "_usint", "_uint", "_udint", "_ulint",
//     "_sint", "_int", "_dint", "_lint",
//     "_real", "_lreal"
// ];

// for (const target of vars) {
//     for (const source of vars) {
//         if (target !== source) {
//         console.log(`${target} := ${source};`);
//         }
//     }
// }

FUNCTION_BLOCK C0032_Native

    VAR

        // Boolean Types
        _bool:  BOOL;

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
        _real:  REAL;
        _lreal: LREAL;

        // String Types

        // Character Types

        // Time-Related Types
    END_VAR

    _bool := _byte;
    _bool := _word;
    _bool := _dword;
    _bool := _lword;
    _bool := _usint;
    _bool := _uint;
    _bool := _udint;
    _bool := _ulint;
    _bool := _sint;
    _bool := _int;
    _bool := _dint;
    _bool := _lint;
    _bool := _real;
    _bool := _lreal;

    _byte := _bool;
    _byte := _word;
    _byte := _dword;
    _byte := _lword;
    _byte := _uint;
    _byte := _udint;
    _byte := _ulint;
    _byte := _int;
    _byte := _dint;
    _byte := _lint;
    _byte := _real;
    _byte := _lreal;

    _word := _bool;
    _word := _dword;
    _word := _lword;
    _word := _udint;
    _word := _ulint;
    _word := _dint;
    _word := _lint;
    _word := _real;
    _word := _lreal;

    _dword := _bool;
    _dword := _lword;
    _dword := _ulint;
    _dword := _lint;
    _dword := _real;
    _dword := _lreal;

    _lword := _bool;
    _lword := _real;
    _lword := _lreal;

    _usint := _bool;
    _usint := _word;
    _usint := _dword;
    _usint := _lword;
    _usint := _uint;
    _usint := _udint;
    _usint := _ulint;
    _usint := _int;
    _usint := _dint;
    _usint := _lint;
    _usint := _real;
    _usint := _lreal;

    _uint := _bool;
    _uint := _dword;
    _uint := _lword;
    _uint := _udint;
    _uint := _ulint;
    _uint := _dint;
    _uint := _lint;
    _uint := _real;
    _uint := _lreal;

    _udint := _bool;
    _udint := _lword;
    _udint := _ulint;
    _udint := _lint;
    _udint := _real;
    _udint := _lreal;

    _ulint := _bool;
    _ulint := _real;
    _ulint := _lreal;

    _sint := _bool;
    _sint := _word;
    _sint := _dword;
    _sint := _lword;
    _sint := _uint;
    _sint := _udint;
    _sint := _ulint;
    _sint := _int;
    _sint := _dint;
    _sint := _lint;
    _sint := _real;
    _sint := _lreal;

    _int := _bool;
    _int := _dword;
    _int := _lword;
    _int := _udint;
    _int := _ulint;
    _int := _dint;
    _int := _lint;
    _int := _real;
    _int := _lreal;

    _dint := _bool;
    _dint := _lword;
    _dint := _ulint;
    _dint := _lint;
    _dint := _real;
    _dint := _lreal;

    _lint := _bool;
    _lint := _real;
    _lint := _lreal;

    _real := _bool;
    _lreal := _bool;
END_FUNCTION_BLOCK