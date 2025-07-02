TYPE E_Color1 :
(
    White   := 0,

    Yellow  := 1
) DWORD := Yellow;
END_TYPE

TYPE E_Color2 :
(
    // White
    White := 0, // White

    Yellow, // Yellow
    
    Blue
) DWORD;
END_TYPE

TYPE E_Color3 :
(
    White := 0
) := White;
END_TYPE

FUNCTION_BLOCK ColorTester

    VAR
        _enum: E_Color1;
    END_VAR

    _enum := E_Color1.Yellow;
END_FUNCTION_BLOCK