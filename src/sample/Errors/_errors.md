- Use BigInt here: _int2:                  INT             := 18446744073709551616;
- Is utf-8 allowed for var names?

- C0018: When trying to assign to a const variable

- assignment: incompatible types, (inheritance, interfaces)

- Colorization single line: TYPE InnerAlias : UDINT; END_TYPE

- M_B()[0]; => Warning "The code has no effect. Is this the intent?"

- C0089: Interface of overridden method 'RESET' of interface 'I_PLANTCOMPONENTFIXTURE' doesn't match declaration

- C0538: The number of inputs/outputs of the method 'RESET' does not correspond to the interface 'I_PLANTCOMPONENTFIXTURE'.

- Warning: "No initial value for constant variable '{name}'"

VAR CONSTANT
	_a: USINT (1..2);
END_VAR

- M_A_1().A; => C0061 Bit access on function call is not allowed (M_A_1() => INT)
- C0050: Bit access requires literal or symbolic integer constant

- _a := M_C(); where M_C() is a method which has no return value: C0032: Cannot convert type 'Unknown type: 'M_C()'' to type 'INT'


- STRICT:
    Attribut 'strict'

    Das Attribut 'strict' bewirkt, dass in folgenden Fällen Übersetzungsfehler entstehen:

        - C0359: Arithmetische Operation mit Variablen des Enumerationstyps
        - Zuweisung eines konstanten Werts, der nicht einem Enumerationswert entspricht, zu einer Variablen des Enumerationstyps
        - Zuweisung eines nicht-konstanten Werts, der einen anderen Datentyp hat als der Enumerationstyp, zu einer Variablen des Enumerationstyps

    Syntax: {attribute 'strict'}

- C0436: String length '(1 + inty)' is no constant value
  inty: INT := 1;
  sVarB : STRING(1+inty) := 'AB';

- Copilot generated list of known error codes and descriptons:

  C0001: Syntax error
  C0002: Unexpected end of file
  C0003: Identifier expected
  C0004: Unexpected symbol
  C0018: Assignment to constant or invalid target
  C0032: Cannot convert type '{type}' to type '{type}'
  C0035: Program name, function, or function block instance expected
  C0036: Cannot call object of type '{type}'
  C0037: '{name}' is not an input of '{function block}'
  C0046: Identifier '{id}' not defined
  C0047: Cannot apply indexing with [] to an expression of type '{type}'
  C0050: Bit access requires literal or symbolic integer constant
  C0061: Bit access on function call is not allowed
  C0064: Dereference requires a pointer
  C0077: Unknown type: '{type}'
  C0080: Function block '{name}' must be instantiated to be accessed
  C0089: Interface of overridden method '{method}' of interface '{interface}' doesn't match declaration
  C0140: Reference assignment is only allowed to variables of reference type
  C0143: The property '{name}' cannot be used in this context because it lacks the get accessor
  C0185: It is not possible to perform component access '.', index access '[]', or call '()' on result of function call. Assign result to help variable first.
  C0261: A reference type is not allowed as base type of an array, pointer, or reference
  C0538: The number of inputs/outputs of the method '{method}' does not correspond to the interface '{interface}'