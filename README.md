# vscode-twincat-st
Experimental TwinCAT Structured Text support

# TODO
- Properly subscribe and unsubscribe events (`context.subscriptions.push`)
- Full qualified name support (e.g. _counter.Reset()) and also for enums;
- attribute
- function
- numbers (hex, dec, oct, bin, float, negative, scientific, complex?)
- var sections
- C-Style mode is optional
- Case insensitivity
- Virtual file system
- TwinCAT remote control (compiling)
- Suggestions / Error tolerant parser

# Var types:

TE1000XAE -> Plc -> Reference programming -> Variables

    Local Variables - VAR
    Input Variables - VAR_INPUT
    Output Variables - VAR_OUTPUT
    Input/Output Variables - VAR_IN_OUT, VAR_IN_OUT CONSTANT
    Global Variables - VAR_GLOBAL
    Temporary Variable - VAR_TEMP
    Static Variables - VAR_STAT
    External Variables - VAR_EXTERNAL
    Instance Variables - VAR_INST
    Constant variables - CONSTANT
    Generic constant variables - VAR_GENERIC CONSTANT
    Remanent Variables - PERSISTENT, RETAIN
    SUPER
    THIS
    Variable types - attribute keywords