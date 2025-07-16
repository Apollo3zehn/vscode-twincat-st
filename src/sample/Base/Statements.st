FUNCTION_BLOCK FB_Assignment

    VAR_INPUT
        a: INT;

        b: INT;
    END_VAR

    PROPERTY P_A : INT
        SET
            //
        END_SET
    END_PROPERTY
END_FUNCTION_BLOCK

FUNCTION_BLOCK Statements

    VAR
        assignment: FB_Assignment;
    END_VAR

    // Assignment
    assignment.a := b;
    assignment.P_A := b;
END_FUNCTION_BLOCK