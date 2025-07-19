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

FUNCTION_BLOCK ImplicitConversions

    VAR

        // Bitstring Types
        _bool:  BOOL;   // Contrary to the documentation, bool cannot be implicitly converted to other bitstring types
        _bit:   BIT;    // BIT is not even mentioned in the documentation but it exists in TwinCAT ...
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

    _bool := _bool;
    _bool := _bit;

    _bit  := _bool;
    _bit  := _bit;

    _byte := _byte;
    _byte := _usint;

    _word := _byte;
    _word := _word;
    _word := _usint;
    _word := _uint;

    _dword := _byte;
    _dword := _word;
    _dword := _dword;
    _dword := _usint;
    _dword := _uint;
    _dword := _udint;

    _lword := _byte;
    _lword := _word;
    _lword := _dword;
    _lword := _lword;
    _lword := _usint;
    _lword := _uint;
    _lword := _udint;
    _lword := _ulint;

    _usint := _byte;
    _usint := _usint;

    _uint := _byte;
    _uint := _word;
    _uint := _usint;
    _uint := _uint;

    _udint := _byte;
    _udint := _word;
    _udint := _dword;
    _udint := _usint;
    _udint := _uint;
    _udint := _udint;

    _ulint := _byte;
    _ulint := _word;
    _ulint := _dword;
    _ulint := _lword;
    _ulint := _usint;
    _ulint := _uint;
    _ulint := _udint;
    _ulint := _ulint;

    _int := _sint;
    _int := _int;

    _dint := _sint;
    _dint := _int;
    _dint := _dint;

    _lint := _sint;
    _lint := _int;
    _lint := _dint;
    _lint := _lint;

    _real := _byte;
    _real := _word;
    _real := _usint;
    _real := _uint;
    _real := _sint;
    _real := _int;
    _real := _real;

    _lreal := _byte;
    _lreal := _word;
    _lreal := _dword;
    _lreal := _usint;
    _lreal := _uint;
    _lreal := _udint;
    _lreal := _sint;
    _lreal := _int;
    _lreal := _dint;
    _lreal := _real;
    _lreal := _real;
END_FUNCTION_BLOCK