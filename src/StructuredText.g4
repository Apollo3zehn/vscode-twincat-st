grammar StructuredText;

// =======================
// Top-level entry point
// =======================
compilationUnit
    : (program
    | functionBlock
    | function
    | interface
    | varGlobalSection
    | dutDecl
    )*
    ;

// =======================
// Program organization units
// =======================
program             : attribute? PROGRAM        accessModifier?             ID              varDeclSection*                             statementSection    END_PROGRAM ;
function            : attribute? FUNCTION       accessModifier?             ID (':' type)?  varDeclSection*                             statementSection    END_FUNCTION ;
method              : attribute? METHOD         accessModifier? modifier*   ID (':' type)?  varDeclSection*                             statementSection    END_METHOD ;
property            : attribute? PROPERTY       accessModifier? modifier*   ID ':' type     varDeclSection*                             propertyBody        END_PROPERTY ;
functionBlock       : attribute? FUNCTION_BLOCK accessModifier? modifier*   ID              extendsClause? implementsClause? member*    statementSection    END_FUNCTION_BLOCK ;
interface           : attribute? INTERFACE      accessModifier?             ID              extendsClause? member*                                          END_INTERFACE ;
varGlobalSection    : attribute? VAR_GLOBAL     accessModifier? modifier*   ID              varDecl+                                                        END_VAR ;

// =======================
// DUT declarations
// =======================
dutDecl
    : attribute* TYPE accessModifier? ID ':' enumDecl END_TYPE
    | attribute* TYPE accessModifier? ID ':' structDecl END_TYPE
    | attribute* TYPE accessModifier? ID ':' unionDecl END_TYPE
    | attribute* TYPE accessModifier? ID ':' type ';' END_TYPE
    ;

enumDecl
    : '(' enumMember (',' enumMember)* ')' (enumType)? (':=' initialValue)? ';'
    ;

enumMember
    : ID (':=' expr)?
    ;

initialValue
    : ID
    ;

structDecl
    : STRUCT varDecl* END_STRUCT
    ;

unionDecl
    : UNION varDecl* END_UNION
    ;

// =======================
// Implements and extends clauses
// =======================
implementsClause
    : IMPLEMENTS type (',' type)*
    ;

extendsClause
    : EXTENDS type (',' type)*
    ;

// =======================
// Members
// =======================
member
    : method
    | property
    | varDeclSection
    ;

// =======================
// Variable declarations
// =======================
varDeclSection
    : varSectionType modifier* varDecl+ END_VAR
    ;

varSectionType
    : VAR | VAR_INPUT | VAR_OUTPUT | VAR_IN_OUT | VAR_TEMP | VAR_EXTERNAL | VAR_INST | VAR_STAT
    ;

varDecl
    : attribute? ID ':' type (('REF=' | ':=') exprOrArrayInit)? ';'
    ;

exprOrArrayInit
    : expr | arrayInit
    ;

arrayInit
    : '[' expr (',' expr)* ']'
    ;

// =======================
// Types
// =======================
type
    : typeId
    | ARRAY '[' INTEGER_LITERAL '..' INTEGER_LITERAL ']' OF type
    | POINTER_TO type
    | REFERENCE_TO type
    ;

typeId
    : builtinType
    | ID
    ;

builtinType
    : LOGICAL_TYPE
    | ( BITFIELD_TYPE SUBRANGE_PARAM? )
    | ( UNSIGNED_INT_TYPE SUBRANGE_PARAM? )
    | ( SIGNED_INT_TYPE SUBRANGE_PARAM? )
    | X_TYPE
    | FLOATING_POINT_TYPE
    | TIME_TYPE
    | DATE_TYPE
    | TIME_OF_DAY_TYPE
    | DATE_AND_TIME_TYPE
    | ( STRING_TYPE STRING_LEN_PARAM? )
    ;

enumType
    : enumTypeId=(BITFIELD_TYPE | UNSIGNED_INT_TYPE | SIGNED_INT_TYPE | X_TYPE) SUBRANGE_PARAM?
    ;

signedEnumType
    : 
    ;

bitfieldEnumType
    : 
    ;

// =======================
// Statements
// =======================
statementSection
    : statement*
    ;

statement
    : assignment
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

// =======================
// Assignments and calls
// =======================
assignment
    : memberExpression assignmentOperator expr ';'
    ;

assignmentOperator
    : ':='
    | 'REF='
    ;

callStatement
    : memberExpression ';'
    ;

argumentList
    : argument (',' argument)*
    ;

argument
    : ID (':=' | '=>') expr
    | expr
    ;

// =======================
// Control flow
// =======================
ifStatement
    : IF expr THEN statementSection (ELSIF expr THEN statementSection)* (ELSE statementSection)? END_IF
    ;

caseStatement
    : CASE expr OF caseElement+ (ELSE statementSection)? END_CASE
    ;

caseElement
    : (caseValue (',' caseValue)*) ':' statementSection
    ;

caseValue
    : BOOL_LITERAL | INTEGER_LITERAL | STRING_LITERAL | ID
    ;

whileStatement
    : WHILE expr DO statementSection END_WHILE
    ;

repeatStatement
    : REPEAT statementSection UNTIL expr END_REPEAT
    ;

forStatement
    : FOR ID ':=' expr TO expr (BY expr)? DO statementSection END_FOR
    ;

// =======================
// Return, exit, continue
// =======================
returnStatement
    : RETURN ';'
    ;

exitStatement
    : EXIT ';'
    ;

continueStatement
    : CONTINUE ';'
    ;

// =======================
// Expressions
// =======================
memberExpression
    : memberAccess ('.' memberAccess)*
    ;

memberAccess
    : ID postfixOp*
    ;

postfixOp
    : dereference
    | arrayIndex
    | call
    ;

dereference
    : CARET
    ;

arrayIndex
    : '[' expr ']'
    ;

call
    : '(' argumentList? ')'
    ;

literal
    : INTEGER_LITERAL
    | REAL_LITERAL
    | BOOL_LITERAL
    | TIME_LITERAL
    | LTIME_LITERAL
    | dateLiteral
    | dateAndTimeLiteral
    | timeOfDayLiteral
    | STRING_LITERAL
    | WSTRING_LITERAL
    ;

dateLiteral
    : prefix=(DATE_TYPE | 'D' | 'LD') '#' date=DATE_LITERAL
    ;

dateAndTimeLiteral
    : prefix=DATE_AND_TIME_TYPE '#' dateAndTime=DATETIME_LITERAL
    ;

timeOfDayLiteral
    : prefix=TIME_OF_DAY_TYPE '#' timeOfDay=TIME_OF_DAY_LITERAL
    ;

expr
    : expr op=('*'|'/'|MOD) expr
    | expr op=('+'|'-') expr
    | expr op=('='|'<'|'>'|'<='|'>='|'<>') expr
    | expr op=('AND'|'OR'|'XOR') expr
    | literal
    | memberExpression
    | '(' expr ')'
    ;

// =======================
// Property body
// =======================
propertyBody
    : getter
    | setter
    | getter setter
    | setter getter
    ;

getter
    : GET accessModifier? statementSection END_GET
    ;

setter
    : SET accessModifier? statementSection END_SET
    ;

// =======================
// Attribute support
// =======================
attribute
    : '{' ID (attributeArgList)? '}'
    ;

attributeArgList
    : '(' attributeArg (',' attributeArg)* ')'
    ;

attributeArg
    : ID | INTEGER_LITERAL | REAL_LITERAL | STRING_LITERAL
    ;

// =======================
// Access modifiers and modifiers
// =======================
accessModifier
    : PUBLIC | PRIVATE | PROTECTED | INTERNAL
    ;
    
modifier
    : ABSTRACT | FINAL | CONSTANT
    ;

// =======================
// Lexer rules (keywords, symbols, literals, etc.)
// =======================

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
VAR_INST            : 'VAR_INST' ;
VAR_STAT            : 'VAR_STAT' ;
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
INTERFACE           : 'INTERFACE' ;
END_INTERFACE       : 'END_INTERFACE' ;
STRUCT              : 'STRUCT' ;
END_STRUCT          : 'END_STRUCT' ;
UNION               : 'UNION' ;
END_UNION           : 'END_UNION' ;
ENUM                : 'ENUM' ;
END_ENUM            : 'END_ENUM' ;
ABSTRACT            : 'ABSTRACT' ;
FINAL               : 'FINAL' ;
CONSTANT            : 'CONSTANT' ;
PUBLIC              : 'PUBLIC' ;
PRIVATE             : 'PRIVATE' ;
PROTECTED           : 'PROTECTED' ;
INTERNAL            : 'INTERNAL' ;
MOD                 : 'MOD' ;
TYPE                : 'TYPE' ;
END_TYPE            : 'END_TYPE' ;
CARET               : '^' ;
REFERENCE_TO        : 'REFERENCE TO' ;
POINTER_TO          : 'POINTER TO' ;

// Types
SUBRANGE_PARAM      : '(' '-'? [0-9]+ '..' '-'? [0-9]+ ')' ;
STRING_LEN_PARAM    : '(' [0-9]+ ')' ;

LOGICAL_TYPE        : 'BOOL' | 'BIT' ;
BITFIELD_TYPE       : 'BYTE' | 'WORD' | 'DWORD' | 'LWORD' ;
UNSIGNED_INT_TYPE   : 'USINT' | 'UINT' | 'UDINT' | 'ULINT' ;
SIGNED_INT_TYPE     : 'SINT' | 'INT' | 'DINT' | 'LINT' ;
FLOATING_POINT_TYPE : 'REAL' | 'LREAL' ;
X_TYPE              : 'XWORD' | '__XWORD' | 'UXINT' | '__UXINT' | 'XINT' | '__XINT' ;

TIME_TYPE           : 'TIME' | 'LTIME' ;
DATE_TYPE           : 'DATE' | 'LDATE';
TIME_OF_DAY_TYPE    : 'TIME_OF_DAY' | 'TOD' | 'LTIME_OF_DAY' | 'LTOD' ;
DATE_AND_TIME_TYPE  : 'DATE_AND_TIME' | 'DT' | 'LDATE_AND_TIME' | 'LDT' ;

STRING_TYPE         : 'STRING' | 'WSTRING' ;

// Identifiers and literals
BOOL_LITERAL        : 'TRUE' | 'FALSE' ;

INTEGER_LITERAL
                    : '-'? (
                        ( 
                            BITFIELD_TYPE
                            | UNSIGNED_INT_TYPE
                            | SIGNED_INT_TYPE
                        ) '#' (
                            DEC_DIGIT+
                            | '2#' BIN_DIGIT+
                            | '8#' OCT_DIGIT+
                            | '10#' DEC_DIGIT+
                            | '16#' HEX_DIGIT+
                        )
                        | (
                            DEC_DIGIT+
                            | '2#' BIN_DIGIT+
                            | '8#' OCT_DIGIT+
                            | '10#' DEC_DIGIT+
                            | '16#' HEX_DIGIT+
                        )
                        | DEC_DIGIT+
                    )
                    ;

REAL_LITERAL
                    : '-'? FLOATING_POINT_TYPE '#' DEC_DIGIT+ ('.' DEC_DIGIT+)? ([eE][+\-]?DEC_DIGIT+)?
                    ;

STRING_LITERAL      : '\'' (~['\r\n])* '\'' ;
WSTRING_LITERAL     : '"' (~["\r\n])* '"' ;

TIME_LITERAL
                    : 
                    ('TIME' | 'T') '#'
                    (
                          DAY HOUR? MIN? SEC? MS?
                        | HOUR MIN? SEC? MS?
                        | MIN SEC? MS?
                        | SEC MS?
                        | MS
                    )
                    ;

LTIME_LITERAL
                    : 
                    'LTIME#'
                    (
                          DAY HOUR? MIN? SEC? MS? US? NS?
                        | HOUR MIN? SEC? MS? US? NS?
                        | MIN SEC? MS? US? NS?
                        | SEC MS? US? NS?
                        | MS US? NS?
                        | US NS?
                        | NS
                    )
                    ;

DATE_LITERAL        : DEC_DIGIT+ '-' DEC_DIGIT+ '-' DEC_DIGIT+ ;
TIME_OF_DAY_LITERAL : DEC_DIGIT+ ':' DEC_DIGIT+ (':' DEC_DIGIT+ ('.' DEC_DIGIT+)? )? ;
DATETIME_LITERAL    : DATE_LITERAL '-' TIME_OF_DAY_LITERAL ;

ID                  : ID_START ID_PART* ;

// Symbols
WS                  : [ \t\r\n]+ -> skip ;
COMMENT             : '//' ~[\r\n]* -> channel(HIDDEN) ;
COMMENT_BLOCK       : '(*' .*? '*)' -> channel(HIDDEN) ;

// Fragments
fragment BIN_DIGIT  : [01_] ;
fragment OCT_DIGIT  : [0-7_] ;
fragment DEC_DIGIT  : [0-9_] ;
fragment HEX_DIGIT  : [0-9A-Fa-f_] ;

fragment LETTER     : [a-zA-Z] ;
fragment ID_START   : LETTER | '_' ;
fragment ID_PART    : LETTER | DEC_DIGIT | '_' ;

fragment DAY        : DEC_DIGIT+ 'D' ;
fragment HOUR       : DEC_DIGIT+ 'H' ;
fragment MIN        : DEC_DIGIT+ 'M' ;
fragment SEC        : DEC_DIGIT+ 'S' ;
fragment MS         : DEC_DIGIT+ 'MS' ;
fragment US         : DEC_DIGIT+ 'US' ;
fragment NS         : DEC_DIGIT+ 'NS' ;