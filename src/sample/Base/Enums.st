TYPE MyEnum1 :
(
    White := 0
);
END_TYPE

TYPE MyEnum2 :
(
    White   := 0,

    Yellow  := 1
) DWORD := Yellow;
END_TYPE

TYPE INTERNAL MyEnum3 :
(
    White := 0,
    
    Yellow
) DWORD;
END_TYPE

TYPE MyEnum4 :
(
    White := 0
) := White;
END_TYPE