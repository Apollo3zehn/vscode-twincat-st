FUNCTION_BLOCK FB_TypeUsage
    //
END_FUNCTION_BLOCK

TYPE ST_TypeUsage :
STRUCT
    A: BOOL;
END_STRUCT
END_TYPE

TYPE E_TypeUsage :
(
    A
);
END_TYPE

INTERFACE I_TypeUsage
    //
END_INTERFACE

FUNCTION_BLOCK TypeUsage

    VAR
        _functionBlock: FB_TypeUsage;
        _struct: ST_TypeUsage;
        _enum: E_TypeUsage;
        _interface: I_TypeUsage;
        _bool: BOOL;
    END_VAR
END_FUNCTION_BLOCK