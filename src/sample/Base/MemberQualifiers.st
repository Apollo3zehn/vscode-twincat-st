TYPE E_MemberQualifier :
(
    Variable
);
END_TYPE

FUNCTION F_MemberQualifier : INT
    //
END_FUNCTION

VAR_GLOBAL GVL_MemberQualifier
    A: MemberQualifier_A;

    Variable: INT;
END_VAR

FUNCTION_BLOCK MemberQualifier_A

    VAR_INPUT
        Variable: INT;
    END_VAR

    METHOD Method : INT
        //
    END_METHOD
END_FUNCTION_BLOCK

FUNCTION_BLOCK MemberQualifier_B

    VAR_OUTPUT
        A: MemberQualifier_A;
        
        Variable: INT;
    END_VAR

    METHOD Method
        //
    END_METHOD
END_FUNCTION_BLOCK

FUNCTION_BLOCK MemberQualifier

    VAR
        _variable: INT;

        original: MemberQualifier_B;

        ref: REFERENCE TO MemberQualifier_B REF= original;
        
        ptr: POINTER TO MemberQualifier_B := ADR(original);
    END_VAR

    METHOD Method

        VAR
            variable: INT;
        END_VAR

        // Variables (reduced test count)
        variable := variable;

        variable := _variable;
        variable := THIS^._variable;

        variable := E_MemberQualifier.Variable;

        // Method & function calls (reduced test count)
        Method();
        THIS^.Method();

        F_MemberQualifier();
    END_METHOD

    // Assigments + Expressions (variable usage and method/function usage)
    variable := _variable;
    variable := THIS^._variable;

    variable := THIS^.ref.Variable;
    variable := ref.Variable;
    variable := ref.A.Variable;

    variable := ptr^.Variable;
    variable := ptr^.A.Variable;

    variable := GVL_MemberQualifier.Variable;
    variable := GVL_MemberQualifier.A.Variable;
    variable := E_MemberQualifier.Variable;

    variable := ref.A.Method();
    variable := F_MemberQualifier();

    ref.A.Variable := 1;

    // Call statements
    Method();
    THIS^.Method();

    THIS^.ref.Method();
    ref.Method();
    ref.A.Method();

    ptr^.Method();
    ptr^.A.Method();

    GVL_MemberQualifier.A.Method();
    F_MemberQualifier();

    // TODO: REF, PTR
    // Array Index
    // Hover: Prettify
END_FUNCTION_BLOCK