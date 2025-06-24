grammar StructuredText;

// Program organization units
program         : PROGRAM ID implementsClause? extendsClause? varDeclSection* statementSection END_PROGRAM ;
function        : FUNCTION ID ':' type implementsClause? extendsClause? varDeclSection* statementSection END_FUNCTION ;
property        : PROPERTY ID implementsClause? extendsClause? varDeclSection* propertyBody END_PROPERTY ;

implementsClause: IMPLEMENTS ID (',' ID)* ;
extendsClause   : EXTENDS ID ;

// Variable declarations
varDeclSection  : varSectionType varDecl+ END_VAR ;
varSectionType  : VAR | VAR_INPUT | VAR_OUTPUT | VAR_IN_OUT | VAR_TEMP | VAR_EXTERNAL | VAR_GLOBAL ;
varDecl         : ID ':' arraySpec? type ('=' exprOrArrayInit)? ';' ;
arraySpec       : ARRAY '[' NUMBER '..' NUMBER ']' OF ;
exprOrArrayInit : expr | arrayInit ;
arrayInit       : '[' expr (',' expr)* ']' ;

// Types
type
    : builtinType
    | ID // Allow custom/user-defined types
    ;

builtinType
    : 'INT' | 'REAL' | 'BOOL' | 'STRING' | 'DINT' | 'BYTE' | 'WORD' | 'DWORD'
    | 'SINT' | 'USINT' | 'UINT' | 'UDINT' | 'LINT' | 'ULINT' | 'LREAL'
    | 'TIME' | 'DATE' | 'TIME_OF_DAY' | 'DATE_AND_TIME'
    ;

// Statements
statementSection: statement* ;
statement       : assignment
                | ifStatement
                | caseStatement
                | whileStatement
                | repeatStatement
                | forStatement
                | callStatement
                | returnStatement
                | exitStatement
                | continueStatement
                | ';'
                ;

// Assignments and calls
assignment      : ID (arrayIndex)? ':=' expr ';' ;
arrayIndex      : '[' expr ']' ;
callStatement   : ID '(' (expr (',' expr)*)? ')' ';' ;

// Control flow
ifStatement     : IF expr THEN statementSection (ELSIF expr THEN statementSection)* (ELSE statementSection)? END_IF ;
caseStatement   : CASE expr OF caseElement+ (ELSE statementSection)? END_CASE ;
caseElement     : (caseValue (',' caseValue)*) ':' statementSection ;
caseValue       : NUMBER | BOOL | STRING_LITERAL | ID ;
whileStatement  : WHILE expr DO statementSection END_WHILE ;
repeatStatement : REPEAT statementSection UNTIL expr END_REPEAT ;
forStatement    : FOR ID ':=' expr TO expr (BY expr)? DO statementSection END_FOR ;

// Return, exit, continue
returnStatement : RETURN ';' ;
exitStatement   : EXIT ';' ;
continueStatement : CONTINUE ';' ;

// Expressions
expr            : expr op=('*'|'/') expr
                | expr op=('+'|'-') expr
                | expr op=('='|'<'|'>'|'<='|'>='|'<>') expr
                | expr op=('AND'|'OR'|'XOR') expr
                | '(' expr ')'
                | NUMBER
                | BOOL
                | STRING_LITERAL
                | ID (arrayIndex)?
                ;

// Top-level entry point (optional, for clarity)
compilationUnit : (program | functionBlock | function | property)* ;

// Keywords
PROGRAM             : 'PROGRAM' ;
END_PROGRAM         : 'END_PROGRAM' ;
FUNCTION_BLOCK      : 'FUNCTION_BLOCK' ;
END_FUNCTION_BLOCK  : 'END_FUNCTION_BLOCK' ;
FUNCTION            : 'FUNCTION' ;
END_FUNCTION        : 'END_FUNCTION' ;
PROPERTY            : 'PROPERTY' ;
END_PROPERTY        : 'END_PROPERTY' ;
IMPLEMENTS          : 'IMPLEMENTS' ;
EXTENDS             : 'EXTENDS' ;
GET                 : 'GET' ;
END_GET             : 'END_GET' ;
SET                 : 'SET' ;
END_SET             : 'END_SET' ;
VAR                 : 'VAR' ;
VAR_INPUT           : 'VAR_INPUT' ;
VAR_OUTPUT          : 'VAR_OUTPUT' ;
VAR_IN_OUT          : 'VAR_IN_OUT' ;
VAR_TEMP            : 'VAR_TEMP' ;
VAR_EXTERNAL        : 'VAR_EXTERNAL' ;
VAR_GLOBAL          : 'VAR_GLOBAL' ;
END_VAR             : 'END_VAR' ;
IF                  : 'IF' ;
THEN                : 'THEN' ;
ELSIF               : 'ELSIF' ;
ELSE                : 'ELSE' ;
END_IF              : 'END_IF' ;
CASE                : 'CASE' ;
ARRAY               : 'ARRAY' ;
OF                  : 'OF' ;
END_CASE            : 'END_CASE' ;
WHILE               : 'WHILE' ;
DO                  : 'DO' ;
END_WHILE           : 'END_WHILE' ;
REPEAT              : 'REPEAT' ;
UNTIL               : 'UNTIL' ;
END_REPEAT          : 'END_REPEAT' ;
FOR                 : 'FOR' ;
TO                  : 'TO' ;
BY                  : 'BY' ;
END_FOR             : 'END_FOR' ;
RETURN              : 'RETURN' ;
EXIT                : 'EXIT' ;
CONTINUE            : 'CONTINUE' ;
AND                 : 'AND' ;
OR                  : 'OR' ;
XOR                 : 'XOR' ;
METHOD              : 'METHOD' ;
END_METHOD          : 'END_METHOD' ;

// Literals and identifiers
BOOL                : 'TRUE' | 'FALSE' ;
ID                  : [a-zA-Z_][a-zA-Z0-9_]* ;
NUMBER              : [0-9]+ ('.' [0-9]+)? ;
STRING_LITERAL      : '"' (~["\r\n])* '"' ;

// Whitespace and comments
WS                  : [ \t\r\n]+ -> skip ;
COMMENT             : '//' ~[\r\n]* -> skip ;

propertyBody    : (getter | setter | getter setter | setter getter) ;
getter          : GET statementSection END_GET ;
setter          : SET statementSection END_SET ;

functionBlock
    : FUNCTION_BLOCK ID implementsClause? extendsClause?
      functionBlockMember+
      statementSection
      END_FUNCTION_BLOCK
    ;
    
functionBlockMember
    : varDeclSection
    | method
    | property
    ;

// Example method rule (simplified, adjust as needed)
method
    : METHOD ID (':' type)? varDeclSection* statementSection END_METHOD
    ;