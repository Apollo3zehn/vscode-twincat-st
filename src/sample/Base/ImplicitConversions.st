// https://infosys.beckhoff.com/english.php?content=../content/1033/tf5100_tc3_nc_i/4188351883.html&id=

TYPE E_ImplicitConversions_Default :
(
    A
);
END_TYPE

TYPE E_ImplicitConversions_USINT :
(
    A
) SINT;
END_TYPE

TYPE InnerAlias : E_ImplicitConversions_USINT;
END_TYPE

TYPE OuterAlias : InnerAlias;
END_TYPE

FUNCTION_BLOCK ImplicitConversions

    VAR
        _uint:          UINT;
        _word:          WORD;
        _enum_default:  E_ImplicitConversions_Default   := 1;
        _enum_usint:    E_ImplicitConversions_USINT     := 1;
        _alias:         OuterAlias                      := 1;
        _assign_from_x: INT                             := E_ImplicitConversions_Default.A;
    END_VAR

    _uint           := _word;
    _enum_default   := 1;
    _enum_usint     := 1;
    _alias          := 1;
    _assign_from_x  := E_ImplicitConversions_Default.A;
    _assign_from_x  := _enum_default;
    _assign_from_x  := _alias;
END_FUNCTION_BLOCK