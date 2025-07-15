// C0046: Identifier '{id}' not defined
FUNCTION_BLOCK FB_C0046
    _a := 1;
    THIS^._a();
    _a := THIS^._a();
END_FUNCTION_BLOCK