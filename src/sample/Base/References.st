FUNCTION_BLOCK Referenced

    METHOD MyMethod
    
        VAR_INPUT
            a: REFERENCE TO INT;
        END_VAR
    END_METHOD
END_FUNCTION_BLOCK

FUNCTION_BLOCK References

    VAR
        original: Referenced;
        ref: REFERENCE TO Referenced REF= original;
        ptr: POINTER TO Referenced := ADR(original);

        myInt: INT;
        crazy1: POINTER TO ARRAY [0..1] OF POINTER TO ARRAY [0..1] OF ARRAY [0..1] OF POINTER TO POINTER TO INT;
        crazy2: POINTER TO ARRAY [0..1] OF POINTER TO ARRAY [0..1] OF ARRAY [0..1] OF POINTER TO POINTER TO Referenced;
    END_VAR

    // Referencing
    ref REF= original;
    ptr := ADR(original);

    original.MyMethod(a := myInt);

    // Dereferencing
    original    := ref;
    original    := ptr^;
    myInt       := crazy1^[0]^[0][0]^^;
    original    := crazy2^[0]^[0][0]^^;
END_FUNCTION_BLOCK