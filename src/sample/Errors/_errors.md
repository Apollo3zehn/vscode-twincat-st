- assignment: incompatible types

- M_B()[0]; => Warning "The code has no effect. Is this the intent?"

- C0089: Interface of overridden method 'RESET' of interface 'I_PLANTCOMPONENTFIXTURE' doesn't match declaration

- C0538: The number of inputs/outputs of the method 'RESET' does not correspond to the interface 'I_PLANTCOMPONENTFIXTURE'.

- finish native data type support

- repair:
    Do enum members have a "type usage" or something similar? Currently it is undefined which makes C0035 fail partially


- M_A_1().A; => C0061 Bit access on function call is not allowed (M_A_1() => INT)
- C0050: Bit access requires literal or symbolic integer constant
- M_A.A: C0037: 'A' is no input of 'M_A' (M_A => method)
- THIS^.C: C0004: 'C' is no component of 'FB_GdpFixture'
