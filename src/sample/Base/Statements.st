FUNCTION_BLOCK FB_Assignment

    VAR_INPUT
        a: INT;
    END_VAR
END_FUNCTION_BLOCK

FUNCTION_BLOCK Statements

    VAR
        assigment: FB_Assignment;
    END_VAR

    // Assignment
    assigment.a := 0;
    assigment.a := 0.0;
END_FUNCTION_BLOCK