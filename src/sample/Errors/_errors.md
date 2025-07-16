- assignment: incompatible types

- Assignment to VAR_OUTPUT C0018?

- M_B()[0]; => Warning "The code has no effect. Is this the intent?"

- C0089: Interface of overridden method 'RESET' of interface 'I_PLANTCOMPONENTFIXTURE' doesn't match declaration

- C0538: The number of inputs/outputs of the method 'RESET' does not correspond to the interface 'I_PLANTCOMPONENTFIXTURE'.

- Fix C0035 (fix syntax error, double method call) and C0185 (fix syntax error + Colorization )

- finish native data type support

- repair:
    Do enum members have a "type usage" or something similar? Currently it is undefined which makes C0035 fail partially