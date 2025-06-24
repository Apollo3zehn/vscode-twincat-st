FUNCTION_BLOCK FB_Sensor IMPLEMENTS I_Sensor

    VAR
        _value: REAL;
        
        _module: 	I_PlantAnalogInputModule;
        _channel:	INT;
        _slope:		REAL;
        _offset:	REAL;
    END_VAR

    METHOD FB_Init: BOOL

        VAR_INPUT
            bInitRetains: 	BOOL;
            bInCopyCode: 	BOOL;

            module: 		I_PlantAnalogInputModule;
            channel: 		INT;
            valueAt4mA: 	REAL;
            valueAt20mA: 	REAL;
        END_VAR

        _module		:= module;
        _channel	:= channel;

        // Calculate slope, but take into account the ~107% extended range (https://download.beckhoff.com/download/Document/io/ethercat-terminals/el31xx_de.pdf)
        _slope 	:= (valueAt20mA - valueAt4mA) / (32767 / 1.0737 - 0);
        _offset := valueAt4mA;

    END_METHOD

    METHOD Update

        VAR
            x: REAL;
        END_VAR

        x := _module.getValueAtChannel;

        _value := x * _slope + _offset;

    END_METHOD

    PROPERTY Value : REAL

        GET : REAL
            Value := _value;
        END_GET

    END_PROPERTY

END_FUNCTION_BLOCK