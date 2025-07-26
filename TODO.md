- syntax highlighting
    - constants (blue)

- case insensitivity
    - symbol resolution (methods, variables, types)
    - syntax highlighting
    - antlr

- native types
    - https://infosys.beckhoff.com/english.php?content=../content/1033/tf5100_tc3_nc_i/4188351883.html&id=
    - support constant value expression in String length and subrange parameters (e.g. STRING(1+1), INT(0..2/1))

- statements (for loop, while loop, ...)

- var types:

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

- Properly subscribe and unsubscribe events (`context.subscriptions.push`)
- attribute (e.g. {attribute 'TcEncoding':='UTF-8'})
- UTF-8 string support (see attribute point right above)
- call arguments
- C-Style mode is optional
- Virtual file system
- TwinCAT remote control (compiling)
- Suggestions / Error tolerant parser
- test explorer
- Clean up extension.ts
- Print out errors and warnings of a specific file and compare that to expected errors and warnings in an automated way