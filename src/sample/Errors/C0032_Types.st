TYPE ST_E_C0032 :
STRUCT
    A: USINT := 1024;
END_STRUCT
END_TYPE

TYPE E_C0032_Default :
(
    A
);
END_TYPE

TYPE E_C0032_USINT :
(
    A := 1024
) USINT;
END_TYPE

TYPE C0032_InnerAlias : E_C0032_USINT;
END_TYPE

TYPE C0032_OuterAlias : C0032_InnerAlias;
END_TYPE

FUNCTION_BLOCK C0032_Enums_Aliases

    VAR
        _enum_default:      E_C0032_Default     := 32768;
        _enum_usint:        E_C0032_USINT       := 256;
        _alias:             C0032_OuterAlias    := 256;
        _assign_from_x_1:   USINT               := E_C0032_Default.A;
        _assign_from_x_2:   BOOL;
    END_VAR

    _enum_default       := 32768;
    _enum_usint         := 256;
    _alias              := 256;
    _assign_from_x_1    := E_C0032_Default.A;
    _assign_from_x_1    := _enum_default;
    _assign_from_x_2    := _alias;
END_FUNCTION_BLOCK