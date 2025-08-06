// C0032: Cannot convert type '{type}' to type '{type}'
// https://infosys.beckhoff.com/english.php?content=../content/1033/tf5100_tc3_nc_i/4188351883.html&id=
FUNCTION_BLOCK C0032_Assignment_Native

    VAR
        _bool:  BOOL;
        _byte:  BYTE;
    END_VAR

    _bool := _byte;
END_FUNCTION_BLOCK