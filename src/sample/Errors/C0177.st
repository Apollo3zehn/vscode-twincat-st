// C0177: '{name}' is of type {name} and cannot be instantiated
FUNCTION_BLOCK C0177

    VAR
        _a: PRG_C0177;
        _b: GVL_C0177;
        _c: F_C0177;
    END_VAR
END_FUNCTION_BLOCK

PROGRAM PRG_C0177
    //
END_PROGRAM

VAR_GLOBAL GVL_C0177
    dummy: INT;
END_VAR

FUNCTION F_C0177
    //
END_FUNCTION