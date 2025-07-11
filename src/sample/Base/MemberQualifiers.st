TYPE E_MemberQualifier :
(
    Variable
);
END_TYPE

FUNCTION F_MemberQualifier
    //
END_FUNCTION

VAR_GLOBAL GVL_MemberQualifier
    A: MemberQualifier_A;

    Variable: INT;
END_VAR

FUNCTION_BLOCK MemberQualifier_A

    VAR_OUTPUT
        Variable: INT;
    END_VAR

    METHOD Method
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

    // Variables
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

    // Method & function calls
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
    // Enum member semantic symbol
    // Method call with assignment (expression)
    // Assignment with qualifiers on the left side
END_FUNCTION_BLOCK