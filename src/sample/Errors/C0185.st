// C0185: It is not possible to perform component access '.', index access '[]' or call '()' on result of function call. Assign result to help variable first.
FUNCTION_BLOCK C0185
    
    VAR
        _a: INT;
    END_VAR

    PROPERTY A : C0185
        GET
            //
        END_GET
    END_PROPERTY

    PROPERTY B : ARRAY [0..1] OF C0185
        GET
            //
        END_GET
    END_PROPERTY

    METHOD M_A : C0185
        //
    END_METHOD

    METHOD M_B : ARRAY [0..1] OF C0185
        //
    END_METHOD

    // Methods

        // Component access
        M_A().A;

        // Index access
        M_B()[0];

        // Call
        M_A()();
    
    // Properties

        // Component access
        A.A;

        // Index access
        B[0];

        // Call
        A();
END_FUNCTION_BLOCK