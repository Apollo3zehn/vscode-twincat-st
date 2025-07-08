FUNCTION_BLOCK Referenced
    METHOD Method
        //
    END_METHOD
END_FUNCTION_BLOCK

FUNCTION_BLOCK References

    VAR
        original: Referenced;
        ref: REFERENCE TO Referenced REF= original;
        ptr: POINTER TO Referenced := ADR(original);
    END_VAR

    ref REF= original;
    ref.Method();

    ptr := ADR(original);
    ptr^.Method();
END_FUNCTION_BLOCK