FUNCTION_BLOCK MemberQualifier_A
    METHOD Method
        //
    END_METHOD
END_FUNCTION_BLOCK

FUNCTION_BLOCK MemberQualifier_B
    VAR
        A: MemberQualifier_A;
    END_VAR

    METHOD Method
        //
    END_METHOD
END_FUNCTION_BLOCK

FUNCTION_BLOCK MemberQualifier

    VAR
        original: MemberQualifier_B;
        ref_B: REFERENCE TO MemberQualifier_B REF= original;
        ptr_B: POINTER TO MemberQualifier_B := ADR(original);
    END_VAR

    METHOD Method
        //
    END_METHOD

    // Method calls
    ref_B.Method();
    ref_B.A.Method();

    ptr_B^.Method();
    ptr_B^.A.Method();

    THIS^.Method();

    // Assignments
    ref_B REF= original;
    ptr_B := ADR(original);

    // TODO nested assignments
END_FUNCTION_BLOCK