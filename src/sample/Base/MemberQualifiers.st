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

    METHOD MyMethod : INT
        //
    END_METHOD
END_FUNCTION_BLOCK

FUNCTION_BLOCK MemberQualifier_B

    VAR_OUTPUT
        A: MemberQualifier_A;
        
        Variable: INT;
    END_VAR

    METHOD MyMethod
        //
    END_METHOD
END_FUNCTION_BLOCK

FUNCTION_BLOCK MemberQualifier

    VAR
        _variable: INT;
        _b1: MemberQualifier_B;
    END_VAR

    METHOD MyMethod

        VAR
            variable: INT;
            _b2: MemberQualifier_B;
        END_VAR

        // Assignments + Expressions
        variable := variable;

        variable := _variable;
        variable := THIS^._variable;

        variable := E_MemberQualifier.Variable;

        // Call statements
        _b1();
        _b2();
        MyMethod();
        THIS^.MyMethod();

        F_MemberQualifier();
    END_METHOD

    // Assignments + Expressions (variable usage and method/function usage)
    _variable := _variable;
    _variable := THIS^._variable;

    _variable := THIS^._b1.Variable;
    _variable := _b1.Variable;
    _variable := _b1.A.Variable;

    _variable := GVL_MemberQualifier.Variable;
    _variable := GVL_MemberQualifier.A.Variable;
    _variable := E_MemberQualifier.Variable;

    _variable := _b1.A.MyMethod();
    _variable := F_MemberQualifier();

    _b1.A.Variable := 1;

    // Call statements
    _b1();
    MyMethod();
    THIS^.MyMethod();

    THIS^._b1.MyMethod();
    _b1.MyMethod();
    _b1.A.MyMethod();

    GVL_MemberQualifier.A.MyMethod();
    F_MemberQualifier();
END_FUNCTION_BLOCK