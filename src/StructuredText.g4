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
    | typeDecl
    )*
    ;

// =======================
// Program organization units
// =======================
program             : attribute? PROGRAM        accessModifier?             ID                                                  varDeclSection* statementSection    END_PROGRAM ;
function            : attribute? FUNCTION       accessModifier?             ID (':' type)?                                      varDeclSection* statementSection    END_FUNCTION ;
method              : attribute? METHOD         accessModifier? modifier*   ID (':' type)?                                      varDeclSection* statementSection    END_METHOD ;
property            : attribute? PROPERTY       accessModifier? modifier*   ID ':' type                                         varDeclSection* propertyBody        END_PROPERTY ;
functionBlock       : attribute? FUNCTION_BLOCK accessModifier? modifier*   ID              extendsClause? implementsClause?    member*         statementSection    END_FUNCTION_BLOCK ;
interface           : attribute? INTERFACE      accessModifier?             ID              extendsClause?                      member*                             END_INTERFACE ;
varGlobalSection    : attribute? VAR_GLOBAL     accessModifier? modifier*   ID                                                       varDecl+                            END_VAR ;

// =======================
// Type declarations
// =======================
typeDecl
    : attribute* TYPE accessModifier? ID ':' enumDecl END_TYPE
    | attribute* TYPE accessModifier? ID ':' structDecl END_TYPE
    | attribute* TYPE accessModifier? ID ':' type ';' END_TYPE
    ;

enumDecl
    : '(' enumMember (',' enumMember)* ')' (type)? (':=' initialValue)? ';'
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

// =======================
// Implements and extends clauses
// =======================
implementsClause    : IMPLEMENTS type (',' type)* ;
extendsClause       : EXTENDS type (',' type)* ;

// =======================
// Members
// =======================
member              : method | property | varDeclSection ;

// =======================
// Variable declarations
// =======================
varDeclSection      : varSectionType modifier* varDecl+ END_VAR ;
varSectionType      : VAR | VAR_INPUT | VAR_OUTPUT | VAR_IN_OUT | VAR_TEMP | VAR_EXTERNAL | VAR_INST | VAR_STAT ;
varDecl             : attribute? ID ':' type (('REF=' | ':=') exprOrArrayInit)? ';' ;

exprOrArrayInit     : expr | arrayInit ;
arrayInit           : '[' expr (',' expr)* ']' ;

// =======================
// Types
// =======================
type
    : baseType
    | ARRAY '[' NUMBER '..' NUMBER ']' OF type
    | POINTER_TO type
    | REFERENCE_TO type
    ;

baseType
    : ID
    | builtinType
    ;

builtinType
    : 'INT' | 'REAL' | 'BOOL' | 'STRING' | 'DINT' | 'BYTE' | 'WORD' | 'DWORD'
    | 'SINT' | 'USINT' | 'UINT' | 'UDINT' | 'LINT' | 'ULINT' | 'LREAL'
    | 'TIME' | 'DATE' | 'TIME_OF_DAY' | 'DATE_AND_TIME'
    ;

// =======================
// Statements
// =======================
statementSection    : statement* ;
statement           : assignment
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
    : memberQualifier ':=' expr ';'
    | memberQualifier 'REF=' expr ';'
    ;

arrayIndex          : '[' expr ']' ;
callStatement       : (memberQualifier '.')? ID '(' argumentList? ')' ';';
argumentList        : argument (',' argument)* ;
argument            : ID (':=' | '=>') expr | expr ;

// =======================
// Control flow
// =======================
ifStatement         : IF expr THEN statementSection (ELSIF expr THEN statementSection)* (ELSE statementSection)? END_IF ;
caseStatement       : CASE expr OF caseElement+ (ELSE statementSection)? END_CASE ;
caseElement         : (caseValue (',' caseValue)*) ':' statementSection ;
caseValue           : NUMBER | BOOL | STRING_LITERAL | ID ;
whileStatement      : WHILE expr DO statementSection END_WHILE ;
repeatStatement     : REPEAT statementSection UNTIL expr END_REPEAT ;
forStatement        : FOR ID ':=' expr TO expr (BY expr)? DO statementSection END_FOR ;

// =======================
// Return, exit, continue
// =======================
returnStatement     : RETURN ';' ;
exitStatement       : EXIT ';' ;
continueStatement   : CONTINUE ';' ;

// =======================
// Expressions
// =======================
memberQualifier     : memberQualifier '.' primary
                    | primary
                    ;

primary             : ID derefOrIndex* ;

derefOrIndex
    : CARET
    | arrayIndex
    ;

expr
    : expr op=('*'|'/'|MOD) expr
    | expr op=('+'|'-') expr
    | expr op=('='|'<'|'>'|'<='|'>='|'<>') expr
    | expr op=('AND'|'OR'|'XOR') expr
    | '(' expr ')'
    | NUMBER
    | BOOL
    | TIME_LITERAL
    | STRING_LITERAL
    | memberQualifier                               // a, THIS^.a.b, a[0].b.c, etc.
    | memberQualifier LPAREN argumentList? RPAREN   // function call on member or ID
    ;

// =======================
// Property body
// =======================
propertyBody        : (getter | setter | getter setter | setter getter) ;
getter              : GET accessModifier? statementSection END_GET ;
setter              : SET accessModifier? statementSection END_SET ;

// =======================
// Attribute support
// =======================
attribute           : '{' ID (attributeArgList)? '}' ;
attributeArgList    : '(' attributeArg (',' attributeArg)* ')' ;
attributeArg        : ID | NUMBER | STRING_LITERAL ;

// =======================
// Access modifiers and modifiers
// =======================
accessModifier      : PUBLIC | PRIVATE | PROTECTED | INTERNAL ;
modifier            : ABSTRACT | FINAL | CONSTANT ;

// =======================
// Keywords
// =======================
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
LPAREN              : '(';
RPAREN              : ')';

// =======================
// Literals and identifiers
// =======================
BOOL                : 'TRUE' | 'FALSE' ;
NUMBER              : '-'? (
                        // Typed numbers: INT#1, REAL#1.23, INT#16#FF, etc.
                        [a-zA-Z_][a-zA-Z0-9_]* '#' (
                            [0-9]+ ('.' [0-9]+)? ([eE][+\-]?[0-9]+)?        // decimal or float or scientific
                            | '2#' [01_]+                                   // binary
                            | '8#' [0-7_]+                                  // octal
                            | '16#' [0-9A-Fa-f_]+                           // hex
                        )
                        // Untyped based numbers: 16#0A, 2#1010, etc.
                        | (
                            [0-9]+ ('.' [0-9]+)? ([eE][+\-]?[0-9]+)?        // decimal or float or scientific
                            | '2#' [01_]+                                   // binary
                            | '8#' [0-7_]+                                  // octal
                            | '16#' [0-9A-Fa-f_]+                           // hex
                        )
                        // Plain decimal or float or scientific: 1, -1, 1.23, -1.23, 1e3, -1.23e-2
                        | [0-9]+ ('.' [0-9]+)? ([eE][+\-]?[0-9]+)?
                    )
                    ;
TIME_LITERAL        : 'T#' [0-9]+ ( 'MS' | 'S' | 'M' | 'H' | 'D' ) ;
ID                  : [a-zA-Z_][a-zA-Z0-9_]* ;

// String literal support (double and single quoted)
STRING_LITERAL      : '"' (~["\r\n])* '"' | '\'' (~['\r\n])* '\'' ;

// =======================
// Whitespace and comments
// =======================
WS                  : [ \t\r\n]+ -> skip ;
COMMENT             : '//' ~[\r\n]* -> channel(HIDDEN) ;
COMMENT_BLOCK       : '(*' .*? '*)' -> channel(HIDDEN) ;