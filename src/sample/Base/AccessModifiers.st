PROGRAM INTERNAL AccessModifier
    //
END_PROGRAM

INTERFACE INTERNAL I_AccessModifier
    //
END_INTERFACE

FUNCTION_BLOCK INTERNAL FB_AccessModifier
 
    METHOD PRIVATE M_AccessModifier : INT
        //
    END_METHOD

    PROPERTY INTERNAL P_AccessModifier : INT
        GET PRIVATE
            //
        END_GET
        SET PRIVATE
            //
        END_SET
    END_PROPERTY
END_FUNCTION_BLOCK

FUNCTION INTERNAL F_AccessModifier : BOOL
    //
END_FUNCTION

TYPE INTERNAL A_AccessModifier : INT;
    //
END_TYPE

TYPE INTERNAL E_AccessModifier :
(
    dummy
);
END_TYPE

TYPE INTERNAL ST_AccessModifier :
STRUCT
    //
END_STRUCT
END_TYPE

VAR_GLOBAL INTERNAL GVL_AccessModifier
    dummy: BOOL;
END_VAR