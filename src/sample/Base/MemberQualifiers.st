VAR_GLOBAL GVL_MemberQualifier
    A: MemberQualifier_A;
END_VAR

FUNCTION_BLOCK MemberQualifier_A
    METHOD Method
        //
    END_METHOD
END_FUNCTION_BLOCK

FUNCTION_BLOCK MemberQualifier_B
    VAR_OUTPUT
        A: MemberQualifier_A;
    END_VAR

    METHOD Method
        //
    END_METHOD
END_FUNCTION_BLOCK

FUNCTION_BLOCK MemberQualifier

    VAR_OUTPUT
        original: MemberQualifier_B;

        ref_B: REFERENCE TO MemberQualifier_B REF= original;
        
        ptr_B: POINTER TO MemberQualifier_B := ADR(original);
    END_VAR

    METHOD Method
        Method();
        THIS^.ref_B.Method();

        ref_B.Method();
        ref_B.A.Method();

        ptr_B^.Method();
        ptr_B^.A.Method();

        GVL_MemberQualifier.A.Method();
    END_METHOD

    Method();
    THIS^.ref_B.Method();

    ref_B.Method();
    ref_B.A.Method();

    ptr_B^.Method();
    ptr_B^.A.Method();

    GVL_MemberQualifier.A.Method();

    // TODO: Enum
    // Semantic token for GVL?
    // TODO: Functions
END_FUNCTION_BLOCK