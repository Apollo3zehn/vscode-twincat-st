// C0032: Cannot convert type '{type}' to type '{type}'

FUNCTION_BLOCK C0032_Promotion

    VAR
        _bit:           BIT;
        _byte:          BYTE;
        _uint:          UINT;
        _udint:         UDINT;
        _ulint:         ULINT;
        _int:           INT;
        _int_subrange:  INT(0..1);
        _dint:          DINT;
        _lint:          LINT;
        _real:          REAL;
        _lreal:         LREAL;
    END_VAR

    // Left operand: typed variable, right operand: typed variable
    _bit := _byte + -_byte;	        // INT
    _bit := _byte + _real; 	        // REAL
    _bit := _byte + _uint; 	        // UINT 
    _bit := _byte + _udint; 	    // UDINT

    _bit := _int + _real; 		    // REAL
    _bit := _int + _uint; 		    // INT 
    _bit := _int + _udint;		    // DINT
    _bit := _int_subrange + _byte;  // INT

    _bit := _udint + _dint;         // DINT
    _bit := _ulint + _lint;         // LINT

    _bit := _real + _lreal;	        // LREAL

    // Left operand: typed literal, right operand: typed literal
    _bit := BYTE#1 + UINT#1;	    // UINT
    _bit := UINT#1 + BYTE#1;	    // UINT
    _bit := USINT#1 + -BYTE#1;	    // SINT

    // Left operand: typed literal, right operand: untyped literal
    _bit := SINT#1 + 1;			    // SINT
    _bit := SINT#1 + 127;		    // SINT
    _bit := SINT#1 + 128;		    // INT

    _bit := SINT#1 - 1;			    // SINT
    _bit := SINT#1 - 127;		    // SINT
    _bit := SINT#1 - 128;		    // INT

    _bit := SINT#1 + -1;		    // SINT
    _bit := SINT#1 + -128;		    // SINT
    _bit := SINT#1 + -129;		    // INT

    _bit := USINT#1 + 1;		    // USINT
    _bit := USINT#1 + 255; 		    // USINT
    _bit := USINT#1 + 256; 		    // UINT

    _bit := USINT#1 - 1;		    // USINT
    _bit := USINT#1 - 255; 		    // USINT
    _bit := USINT#1 - 256; 		    // UINT

    _bit := USINT#1 + -1;		    // SINT
    _bit := USINT#1 + -128;		    // SINT
    _bit := USINT#1 + -129;		    // INT

    // Left operand: untyped, right operand: untyped
    _bit := -128 + 1;			    // SINT
    _bit := -128 + 127;			    // SINT
    _bit := -128 + 128;			    // INT

    _bit := -128 - 1;			    // SINT
    _bit := -128 - 127;			    // SINT
    _bit := -128 - 128;			    // INT

    _bit := -128 + -1;			    // SINT
    _bit := -128 + -128;		    // SINT
    _bit := -128 + -129;		    // INT 

    _bit := 255 + 1;			    // USINT
    _bit := 255 + 255; 			    // USINT
    _bit := 255 + 256; 			    // UINT

    _bit := 255 - 1;			    // INT
    _bit := 255 - 255; 			    // INT
    _bit := 255 - 256; 			    // INT

    _bit := 255 + -1;			    // INT
    _bit := 255 + -128;			    // INT
    _bit := 255 + -129;			    // INT

    _bit := 0 + 0;				    // USINT
    _bit := 0 - 0;				    // SINT
    _bit := -1 + 0;				    // SINT
        
    _bit := 127 + 1;     		    // USINT
    _bit := 255 + 1;     		    // USINT

    // No operand, just assignment
    _bit := 2;					    // SINT
    _bit := 128;				    // USINT
END_FUNCTION_BLOCK