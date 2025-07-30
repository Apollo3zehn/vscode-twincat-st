VAR_GLOBAL CONSTANT GVL_Constants
	A: INT;
END_VAR

FUNCTION_BLOCK FB_Constants

    VAR
        _a: INT;
    END_VAR

    VAR_INPUT CONSTANT
        A: INT;
    END_VAR

    _a := A;
    _a := GVL_Constants.A;
END_FUNCTION_BLOCK