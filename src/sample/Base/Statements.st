FUNCTION_BLOCK FB_Assignment

    VAR_INPUT
        a: INT;
        b: INT;
    END_VAR
END_FUNCTION_BLOCK

FUNCTION_BLOCK Statements

    VAR
        assigment: FB_Assignment;
    END_VAR

    // Assignment
    assigment.a := b;
END_FUNCTION_BLOCK