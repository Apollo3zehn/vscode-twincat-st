FUNCTION_BLOCK Referenced
    //
END_FUNCTION_BLOCK

FUNCTION_BLOCK References

    VAR
        original: Referenced;
        ref: REFERENCE TO Referenced REF= original;
        ptr: POINTER TO Referenced := ADR(original);
    END_VAR

    ref REF= original;
    ptr := ADR(original);
END_FUNCTION_BLOCK