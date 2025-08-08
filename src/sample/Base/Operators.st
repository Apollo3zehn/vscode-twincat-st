FUNCTION_BLOCK FB_Operators

    VAR
        // Unary
        _byte1: BYTE := -BYTE#1;
        _byte2: BYTE := +BYTE#1;

        // Binary
        _uint1: UINT := UINT#10 + 3;
        _uint2: UINT := UINT#10 - 3;
        _uint3: UINT := UINT#10 / 3;
        _uint4: UINT := UINT#10 * 3;

        _uint5: UINT := UINT#10 / 0;

        _uint6: UINT := UINT#10 >> 3;
        _uint7: UINT := UINT#10 << 3;
    END_VAR
END_FUNCTION_BLOCK