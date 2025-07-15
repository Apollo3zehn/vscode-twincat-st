FUNCTION_BLOCK FB_C0036
    // C0036: Cannot call object of type 'VAR_GLOBAL'
    GVL_C0036();
    E_C0036();

    // C0036: Cannot call object of type 'TYPE'
    MyStruct();
END_FUNCTION_BLOCK

VAR_GLOBAL GVL_C0036
    dummy: INT;
END_VAR

TYPE E_C0036 :
(
    dummy
);
END_TYPE

TYPE MyStruct :
STRUCT
    //
END_STRUCT
END_TYPE