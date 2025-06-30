// This is my struct.
TYPE ST_MyStruct :
STRUCT
    // a
    a: BOOL;

    // unused

    (* b
    b *)
    b: BOOL;

	c:  BOOL; (*c
    c*)
END_STRUCT
END_TYPE

// This is my function block.
FUNCTION_BLOCK FB_MyFunctionBlock

    VAR_INPUT
        // a
        a: BOOL;
        b: INT := 1; (* b *)
    END_VAR
END_FUNCTION_BLOCK