grammar StructuredText;

// =======================
// Program organization units
// =======================
program             : PROGRAM ID implementsClause? extendsClause? varDeclSection* statementSection END_PROGRAM ;
function            : attribute? FUNCTION ID ':' type implementsClause? extendsClause? varDeclSection* statementSection END_FUNCTION ;
functionBlock       : attribute? FUNCTION_BLOCK accessModifier? modifier* ID implementsClause? extendsClause? member* statementSection END_FUNCTION_BLOCK ;
property            : attribute? PROPERTY accessModifier? modifier* ID ':' type varDeclSection* propertyBody END_PROPERTY ;
method              : attribute? METHOD accessModifier? modifier* ID (':' type)? varDeclSection* statementSection END_METHOD ;
interface           : attribute? INTERFACE accessModifier? modifier* ID (extendsClause)? member* END_INTERFACE ;
classDecl           : attribute? CLASS accessModifier? modifier* ID (extendsClause)? (implementsClause)? member* END_CLASS ;
structDecl          : attribute? STRUCT ID varDeclSection* END_STRUCT ;
enumDecl            : attribute? ENUM ID enumMemberList END_ENUM ;
namespaceDecl       : attribute? NAMESPACE ID namespaceMember* END_NAMESPACE ;
typeDefDecl         : attribute? TYPEDEF ID '=' type ';' ;
varGlobalSection    : attribute? VAR_GLOBAL modifier* varDecl+ END_VAR ;

// =======================
// Implements and extends clauses
// =======================
implementsClause    : IMPLEMENTS ID (',' ID)* ;
extendsClause       : EXTENDS ID ;

// =======================
// Members
// =======================
member              : method | property | varDeclSection ;
namespaceMember     : program | functionBlock | function | classDecl | structDecl | enumDecl | interface ;

// =======================
// Variable declarations
// =======================
varDeclSection      : varSectionType modifier* varDecl+ END_VAR ;
varSectionType      : VAR | VAR_INPUT | VAR_OUTPUT | VAR_IN_OUT | VAR_TEMP | VAR_EXTERNAL | VAR_INST ;
varDecl             : attribute? accessModifier? modifier* ID ':' (REFERENCE_TO)? arraySpec? type (':=' exprOrArrayInit)? ';' ;
arraySpec           : ARRAY '[' NUMBER '..' NUMBER ']' OF ;
exprOrArrayInit     : expr | arrayInit ;
arrayInit           : '[' expr (',' expr)* ']' ;

// =======================
// Types
// =======================
type
    : builtinType
    | ID
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
assignment          : ID (arrayIndex)? ':=' expr ';' ;
arrayIndex          : '[' expr ']' ;
callStatement       : ID '(' argumentList? ')' (';' | ) ;
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
    | ID (arrayIndex)?
    ;

// =======================
// Top-level entry point
// =======================
compilationUnit
    : (program
    | functionBlock
    | function
    | interface
    | classDecl
    | structDecl
    | enumDecl
    | namespaceDecl
    | typeDefDecl
    | varGlobalSection
    )*
    ;

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
CLASS               : 'CLASS' ;
END_CLASS           : 'END_CLASS' ;
STRUCT              : 'STRUCT' ;
END_STRUCT          : 'END_STRUCT' ;
ENUM                : 'ENUM' ;
END_ENUM            : 'END_ENUM' ;
NAMESPACE           : 'NAMESPACE' ;
END_NAMESPACE       : 'END_NAMESPACE' ;
TYPEDEF             : 'TYPEDEF' ;
ABSTRACT            : 'ABSTRACT' ;
FINAL               : 'FINAL' ;
SEALED              : 'SEALED' ;
OVERRIDE            : 'OVERRIDE' ;
STATIC              : 'STATIC' ;
CONSTANT            : 'CONSTANT' ;
READONLY            : 'READONLY' ;
PUBLIC              : 'PUBLIC' ;
PRIVATE             : 'PRIVATE' ;
PROTECTED           : 'PROTECTED' ;
INTERNAL            : 'INTERNAL' ;
REFERENCE_TO        : 'REFERENCE TO' ;
MOD                 : 'MOD' ;

// =======================
// Literals and identifiers
// =======================
BOOL                : 'TRUE' | 'FALSE' ;
ID                  : [a-zA-Z_][a-zA-Z0-9_]* ;
NUMBER              : [0-9]+ ('.' [0-9]+)? ;

// Time literal support (e.g., T#10S, T#2.5MS, etc.)
TIME_LITERAL        : 'T#' [0-9]+ ('.' [0-9]+)? ( 'MS' | 'S' | 'M' | 'H' | 'D' ) ;

// =======================
// String literal support
// =======================
STRING_LITERAL      : '"' (~["\r\n])* '"' ;

// =======================
// Whitespace and comments
// =======================
WS                  : [ \t\r\n]+ -> skip ;
COMMENT             : '//' ~[\r\n]* -> skip ;

// =======================
// Property body
// =======================
propertyBody        : (getter | setter | getter setter | setter getter) ;
getter              : GET statementSection END_GET ;
setter              : SET statementSection END_SET ;

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
modifier            : ABSTRACT | FINAL | SEALED | OVERRIDE | STATIC | CONSTANT | READONLY ;

// =======================
// Enum member list
// =======================
enumMemberList      : ID (',' ID)* ;