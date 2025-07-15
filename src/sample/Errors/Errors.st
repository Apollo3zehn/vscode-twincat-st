FUNCTION_BLOCK FB_Errors

    VAR
        _c0035:     INT;
        _c0064_1:   INT;
        _c0064_2:   POINTER TO INT;

        // C0077: Unknown type: '{type}'
        _c0077: UnknownType;

        // C0142: A local variable named 'myRef' is already defined in 'FB_GdpFixture'
        _c0142: INT;
        _c0142: INT;

        // C0261: A reference type is not allowed as base type of an array, pointer, or reference
        _c0261_1: ARRAY [1..2] OF REFERENCE TO INT;
        _c0261_2: POINTER TO REFERENCE TO INT;
        _c0261_3: REFERENCE TO REFERENCE TO INT;
    END_VAR

    // C0035: Program name, function or function block instance expected instead of 'name'
    _c0035();
    _c0035 := _c0035();

    // C0046: Identifier '{id}' not defined
    _c0046 := 1;
    THIS^.C0046();
    _c0064_1 := THIS^.C0046();

    // C0047: Cannot apply indexing with [] to an expression of type '{type}'
    _c0064_1 := _c0064_1[0];
    _c0064_1 := _c0064_2^[0];

    // C0064: Dereference requires a pointer
    _c0064_1 := _c0064_1^;
    _c0064_1 := _c0064_2^^;

    // C0140: Reference assign is only allowed to variables of reference type
    _c0064_1 REF= _c0064_1;

    // assignment: incompatible types
    // FB_GdpFixture();  C0080: Function block 'FB_GdpFixture' must be instantiated to be accessed
    // C0036: Cannot call object of type 'VAR_GLOBAL'
END_FUNCTION_BLOCK

// SA0027: Object name '{name}' already used in this application
FUNCTION_BLOCK SA0027
    //
END_FUNCTION_BLOCK

FUNCTION_BLOCK SA0027
    // 
END_FUNCTION_BLOCK

FUNCTION SA0027
    // 
END_FUNCTION