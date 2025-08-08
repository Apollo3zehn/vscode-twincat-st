FUNCTION_BLOCK FB_Operators

    VAR
        // Unary
        _minus: BYTE := -BYTE#1;
        _plus:  BYTE := +BYTE#1;
        _not:   BYTE := NOT BYTE#1;

        // Binary
        _uint1: UINT := UINT#10 + 3;
        _uint2: UINT := UINT#10 - 3;
        _uint3: UINT := UINT#10 / 3;
        _uint4: UINT := UINT#10 * 3;

        // _uint5: UINT := UINT#10 / 0;
    END_VAR
END_FUNCTION_BLOCK