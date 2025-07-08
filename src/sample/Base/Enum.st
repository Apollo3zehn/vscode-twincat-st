TYPE MyEnum1 :
(
    White   := 0,

    Yellow  := 1
) DWORD := Yellow;
END_TYPE

TYPE INTERNAL MyEnum2 :
(
    White := 0,

    Yellow,
    
    Blue
) DWORD;
END_TYPE

TYPE MyEnum3 :
(
    White := 0
) := White;
END_TYPE