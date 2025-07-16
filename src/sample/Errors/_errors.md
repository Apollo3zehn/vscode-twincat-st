- assignment: incompatible types
    - assign to method-> C0032
    - assign to get-only property: C0018 'Reset' is no valid assignment target

- function call on property: C0185: It is not possible to perform component access '.', index access '[]' or call '()' on result of function call. Assign result to help variable first.

- function call on property: C0143 The property 'Reset' cannot be used in this context because it lacks the get accessor

- When Reset is defined multiples times (as variable and method): Warning: Amiguous use of name 'Reset' on field

- When Reset is defined multiples times (as variable and property): Error: C0142 A local variable named 'Reset' is already defined in xxx

- When Function FB_GdpTests and FunctoionBlock FB_GdpTests are defined: C0136: Ambiguous use of name 'FB_GdpTests' in var declaration: "gdpTests: FB_GdpTests;" + SA0027 (already fine)

- Use VAR_GLOBAL as type: C0177 'Constants' is of type VAR_GLOBAL and cannot be instantiated
- Use function as type: C0177 'Interpolate' is of type FUNCTION and cannot be instantiated