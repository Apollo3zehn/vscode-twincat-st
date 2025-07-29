// Generated from /home/vincent/Documents/Git/GitHub/vscode-twincat-st/src/StructuredText.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { StructuredTextVisitor } from "./StructuredTextVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class StructuredTextParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly PROGRAM = 28;
    public static readonly END_PROGRAM = 29;
    public static readonly FUNCTION_BLOCK = 30;
    public static readonly END_FUNCTION_BLOCK = 31;
    public static readonly FUNCTION = 32;
    public static readonly END_FUNCTION = 33;
    public static readonly PROPERTY = 34;
    public static readonly END_PROPERTY = 35;
    public static readonly IMPLEMENTS = 36;
    public static readonly EXTENDS = 37;
    public static readonly GET = 38;
    public static readonly END_GET = 39;
    public static readonly SET = 40;
    public static readonly END_SET = 41;
    public static readonly VAR = 42;
    public static readonly VAR_INPUT = 43;
    public static readonly VAR_OUTPUT = 44;
    public static readonly VAR_IN_OUT = 45;
    public static readonly VAR_TEMP = 46;
    public static readonly VAR_EXTERNAL = 47;
    public static readonly VAR_GLOBAL = 48;
    public static readonly VAR_INST = 49;
    public static readonly VAR_STAT = 50;
    public static readonly END_VAR = 51;
    public static readonly IF = 52;
    public static readonly THEN = 53;
    public static readonly ELSIF = 54;
    public static readonly ELSE = 55;
    public static readonly END_IF = 56;
    public static readonly CASE = 57;
    public static readonly ARRAY = 58;
    public static readonly OF = 59;
    public static readonly END_CASE = 60;
    public static readonly WHILE = 61;
    public static readonly DO = 62;
    public static readonly END_WHILE = 63;
    public static readonly REPEAT = 64;
    public static readonly UNTIL = 65;
    public static readonly END_REPEAT = 66;
    public static readonly FOR = 67;
    public static readonly TO = 68;
    public static readonly BY = 69;
    public static readonly END_FOR = 70;
    public static readonly RETURN = 71;
    public static readonly EXIT = 72;
    public static readonly CONTINUE = 73;
    public static readonly AND = 74;
    public static readonly OR = 75;
    public static readonly XOR = 76;
    public static readonly METHOD = 77;
    public static readonly END_METHOD = 78;
    public static readonly INTERFACE = 79;
    public static readonly END_INTERFACE = 80;
    public static readonly STRUCT = 81;
    public static readonly END_STRUCT = 82;
    public static readonly UNION = 83;
    public static readonly END_UNION = 84;
    public static readonly ENUM = 85;
    public static readonly END_ENUM = 86;
    public static readonly ABSTRACT = 87;
    public static readonly FINAL = 88;
    public static readonly CONSTANT = 89;
    public static readonly PUBLIC = 90;
    public static readonly PRIVATE = 91;
    public static readonly PROTECTED = 92;
    public static readonly INTERNAL = 93;
    public static readonly MOD = 94;
    public static readonly TYPE = 95;
    public static readonly END_TYPE = 96;
    public static readonly CARET = 97;
    public static readonly REFERENCE_TO = 98;
    public static readonly POINTER_TO = 99;
    public static readonly SUBRANGE_PARAM = 100;
    public static readonly STRING_LEN_PARAM = 101;
    public static readonly LOGICAL_TYPE = 102;
    public static readonly BITFIELD_TYPE = 103;
    public static readonly UNSIGNED_INT_TYPE = 104;
    public static readonly SIGNED_INT_TYPE = 105;
    public static readonly FLOATING_POINT_TYPE = 106;
    public static readonly X_TYPE = 107;
    public static readonly TIME_TYPE = 108;
    public static readonly DATE_TYPE = 109;
    public static readonly TIME_OF_DAY_TYPE = 110;
    public static readonly DATE_AND_TIME_TYPE = 111;
    public static readonly STRING_TYPE = 112;
    public static readonly ID = 113;
    public static readonly BOOL_LITERAL = 114;
    public static readonly INTEGER_LITERAL = 115;
    public static readonly REAL_LITERAL = 116;
    public static readonly STRING_LITERAL = 117;
    public static readonly WSTRING_LITERAL = 118;
    public static readonly TIME_LITERAL = 119;
    public static readonly LTIME_LITERAL = 120;
    public static readonly DATE_LITERAL = 121;
    public static readonly TIME_OF_DAY_LITERAL = 122;
    public static readonly DATETIME_LITERAL = 123;
    public static readonly WS = 124;
    public static readonly COMMENT = 125;
    public static readonly COMMENT_BLOCK = 126;
    public static readonly RULE_compilationUnit = 0;
    public static readonly RULE_program = 1;
    public static readonly RULE_function = 2;
    public static readonly RULE_method = 3;
    public static readonly RULE_property = 4;
    public static readonly RULE_functionBlock = 5;
    public static readonly RULE_interface = 6;
    public static readonly RULE_varGlobalSection = 7;
    public static readonly RULE_dutDecl = 8;
    public static readonly RULE_enumDecl = 9;
    public static readonly RULE_enumMember = 10;
    public static readonly RULE_initialValue = 11;
    public static readonly RULE_structDecl = 12;
    public static readonly RULE_unionDecl = 13;
    public static readonly RULE_implementsClause = 14;
    public static readonly RULE_extendsClause = 15;
    public static readonly RULE_member = 16;
    public static readonly RULE_varDeclSection = 17;
    public static readonly RULE_varSectionType = 18;
    public static readonly RULE_varDecl = 19;
    public static readonly RULE_exprOrArrayInit = 20;
    public static readonly RULE_arrayInit = 21;
    public static readonly RULE_type = 22;
    public static readonly RULE_typeId = 23;
    public static readonly RULE_builtinType = 24;
    public static readonly RULE_enumType = 25;
    public static readonly RULE_signedEnumType = 26;
    public static readonly RULE_bitfieldEnumType = 27;
    public static readonly RULE_statementSection = 28;
    public static readonly RULE_statement = 29;
    public static readonly RULE_assignment = 30;
    public static readonly RULE_assignmentOperator = 31;
    public static readonly RULE_callStatement = 32;
    public static readonly RULE_argumentList = 33;
    public static readonly RULE_argument = 34;
    public static readonly RULE_ifStatement = 35;
    public static readonly RULE_caseStatement = 36;
    public static readonly RULE_caseElement = 37;
    public static readonly RULE_caseValue = 38;
    public static readonly RULE_whileStatement = 39;
    public static readonly RULE_repeatStatement = 40;
    public static readonly RULE_forStatement = 41;
    public static readonly RULE_returnStatement = 42;
    public static readonly RULE_exitStatement = 43;
    public static readonly RULE_continueStatement = 44;
    public static readonly RULE_memberExpression = 45;
    public static readonly RULE_memberAccess = 46;
    public static readonly RULE_postfixOp = 47;
    public static readonly RULE_dereference = 48;
    public static readonly RULE_arrayIndex = 49;
    public static readonly RULE_call = 50;
    public static readonly RULE_literal = 51;
    public static readonly RULE_dateLiteral = 52;
    public static readonly RULE_dateAndTimeLiteral = 53;
    public static readonly RULE_timeOfDayLiteral = 54;
    public static readonly RULE_expr = 55;
    public static readonly RULE_propertyBody = 56;
    public static readonly RULE_getter = 57;
    public static readonly RULE_setter = 58;
    public static readonly RULE_attribute = 59;
    public static readonly RULE_attributeArgList = 60;
    public static readonly RULE_attributeArg = 61;
    public static readonly RULE_accessModifier = 62;
    public static readonly RULE_modifier = 63;

    public static readonly literalNames = [
        null, "':'", "';'", "'('", "','", "')'", "':='", "'REF='", "'['", 
        "']'", "'..'", "'=>'", "'.'", "'D'", "'LD'", "'#'", "'*'", "'/'", 
        "'+'", "'-'", "'='", "'<'", "'>'", "'<='", "'>='", "'<>'", "'{'", 
        "'}'", "'PROGRAM'", "'END_PROGRAM'", "'FUNCTION_BLOCK'", "'END_FUNCTION_BLOCK'", 
        "'FUNCTION'", "'END_FUNCTION'", "'PROPERTY'", "'END_PROPERTY'", 
        "'IMPLEMENTS'", "'EXTENDS'", "'GET'", "'END_GET'", "'SET'", "'END_SET'", 
        "'VAR'", "'VAR_INPUT'", "'VAR_OUTPUT'", "'VAR_IN_OUT'", "'VAR_TEMP'", 
        "'VAR_EXTERNAL'", "'VAR_GLOBAL'", "'VAR_INST'", "'VAR_STAT'", "'END_VAR'", 
        "'IF'", "'THEN'", "'ELSIF'", "'ELSE'", "'END_IF'", "'CASE'", "'ARRAY'", 
        "'OF'", "'END_CASE'", "'WHILE'", "'DO'", "'END_WHILE'", "'REPEAT'", 
        "'UNTIL'", "'END_REPEAT'", "'FOR'", "'TO'", "'BY'", "'END_FOR'", 
        "'RETURN'", "'EXIT'", "'CONTINUE'", "'AND'", "'OR'", "'XOR'", "'METHOD'", 
        "'END_METHOD'", "'INTERFACE'", "'END_INTERFACE'", "'STRUCT'", "'END_STRUCT'", 
        "'UNION'", "'END_UNION'", "'ENUM'", "'END_ENUM'", "'ABSTRACT'", 
        "'FINAL'", "'CONSTANT'", "'PUBLIC'", "'PRIVATE'", "'PROTECTED'", 
        "'INTERNAL'", "'MOD'", "'TYPE'", "'END_TYPE'", "'^'", "'REFERENCE TO'", 
        "'POINTER TO'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "PROGRAM", "END_PROGRAM", "FUNCTION_BLOCK", 
        "END_FUNCTION_BLOCK", "FUNCTION", "END_FUNCTION", "PROPERTY", "END_PROPERTY", 
        "IMPLEMENTS", "EXTENDS", "GET", "END_GET", "SET", "END_SET", "VAR", 
        "VAR_INPUT", "VAR_OUTPUT", "VAR_IN_OUT", "VAR_TEMP", "VAR_EXTERNAL", 
        "VAR_GLOBAL", "VAR_INST", "VAR_STAT", "END_VAR", "IF", "THEN", "ELSIF", 
        "ELSE", "END_IF", "CASE", "ARRAY", "OF", "END_CASE", "WHILE", "DO", 
        "END_WHILE", "REPEAT", "UNTIL", "END_REPEAT", "FOR", "TO", "BY", 
        "END_FOR", "RETURN", "EXIT", "CONTINUE", "AND", "OR", "XOR", "METHOD", 
        "END_METHOD", "INTERFACE", "END_INTERFACE", "STRUCT", "END_STRUCT", 
        "UNION", "END_UNION", "ENUM", "END_ENUM", "ABSTRACT", "FINAL", "CONSTANT", 
        "PUBLIC", "PRIVATE", "PROTECTED", "INTERNAL", "MOD", "TYPE", "END_TYPE", 
        "CARET", "REFERENCE_TO", "POINTER_TO", "SUBRANGE_PARAM", "STRING_LEN_PARAM", 
        "LOGICAL_TYPE", "BITFIELD_TYPE", "UNSIGNED_INT_TYPE", "SIGNED_INT_TYPE", 
        "FLOATING_POINT_TYPE", "X_TYPE", "TIME_TYPE", "DATE_TYPE", "TIME_OF_DAY_TYPE", 
        "DATE_AND_TIME_TYPE", "STRING_TYPE", "ID", "BOOL_LITERAL", "INTEGER_LITERAL", 
        "REAL_LITERAL", "STRING_LITERAL", "WSTRING_LITERAL", "TIME_LITERAL", 
        "LTIME_LITERAL", "DATE_LITERAL", "TIME_OF_DAY_LITERAL", "DATETIME_LITERAL", 
        "WS", "COMMENT", "COMMENT_BLOCK"
    ];
    public static readonly ruleNames = [
        "compilationUnit", "program", "function", "method", "property", 
        "functionBlock", "interface", "varGlobalSection", "dutDecl", "enumDecl", 
        "enumMember", "initialValue", "structDecl", "unionDecl", "implementsClause", 
        "extendsClause", "member", "varDeclSection", "varSectionType", "varDecl", 
        "exprOrArrayInit", "arrayInit", "type", "typeId", "builtinType", 
        "enumType", "signedEnumType", "bitfieldEnumType", "statementSection", 
        "statement", "assignment", "assignmentOperator", "callStatement", 
        "argumentList", "argument", "ifStatement", "caseStatement", "caseElement", 
        "caseValue", "whileStatement", "repeatStatement", "forStatement", 
        "returnStatement", "exitStatement", "continueStatement", "memberExpression", 
        "memberAccess", "postfixOp", "dereference", "arrayIndex", "call", 
        "literal", "dateLiteral", "dateAndTimeLiteral", "timeOfDayLiteral", 
        "expr", "propertyBody", "getter", "setter", "attribute", "attributeArgList", 
        "attributeArg", "accessModifier", "modifier",
    ];

    public get grammarFileName(): string { return "StructuredText.g4"; }
    public get literalNames(): (string | null)[] { return StructuredTextParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return StructuredTextParser.symbolicNames; }
    public get ruleNames(): string[] { return StructuredTextParser.ruleNames; }
    public get serializedATN(): number[] { return StructuredTextParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, StructuredTextParser._ATN, StructuredTextParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public compilationUnit(): CompilationUnitContext {
        let localContext = new CompilationUnitContext(this.context, this.state);
        this.enterRule(localContext, 0, StructuredTextParser.RULE_compilationUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 136;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & 4194389) !== 0) || _la === 79 || _la === 95) {
                {
                this.state = 134;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                case 1:
                    {
                    this.state = 128;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 129;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 130;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 131;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 132;
                    this.varGlobalSection();
                    }
                    break;
                case 6:
                    {
                    this.state = 133;
                    this.dutDecl();
                    }
                    break;
                }
                }
                this.state = 138;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 2, StructuredTextParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 140;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 139;
                this.attribute();
                }
            }

            this.state = 142;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 144;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 143;
                this.accessModifier();
                }
            }

            this.state = 146;
            this.match(StructuredTextParser.ID);
            this.state = 150;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 447) !== 0)) {
                {
                {
                this.state = 147;
                this.varDeclSection();
                }
                }
                this.state = 152;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 153;
            this.statementSection();
            this.state = 154;
            this.match(StructuredTextParser.END_PROGRAM);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public function_(): FunctionContext {
        let localContext = new FunctionContext(this.context, this.state);
        this.enterRule(localContext, 4, StructuredTextParser.RULE_function);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 157;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 156;
                this.attribute();
                }
            }

            this.state = 159;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 160;
                this.accessModifier();
                }
            }

            this.state = 163;
            this.match(StructuredTextParser.ID);
            this.state = 166;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 164;
                this.match(StructuredTextParser.T__0);
                this.state = 165;
                this.type_();
                }
            }

            this.state = 171;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 447) !== 0)) {
                {
                {
                this.state = 168;
                this.varDeclSection();
                }
                }
                this.state = 173;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 174;
            this.statementSection();
            this.state = 175;
            this.match(StructuredTextParser.END_FUNCTION);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public method(): MethodContext {
        let localContext = new MethodContext(this.context, this.state);
        this.enterRule(localContext, 6, StructuredTextParser.RULE_method);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 178;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 177;
                this.attribute();
                }
            }

            this.state = 180;
            this.match(StructuredTextParser.METHOD);
            this.state = 182;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 181;
                this.accessModifier();
                }
            }

            this.state = 187;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0)) {
                {
                {
                this.state = 184;
                this.modifier();
                }
                }
                this.state = 189;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 190;
            this.match(StructuredTextParser.ID);
            this.state = 193;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 191;
                this.match(StructuredTextParser.T__0);
                this.state = 192;
                this.type_();
                }
            }

            this.state = 198;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 447) !== 0)) {
                {
                {
                this.state = 195;
                this.varDeclSection();
                }
                }
                this.state = 200;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 201;
            this.statementSection();
            this.state = 202;
            this.match(StructuredTextParser.END_METHOD);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public property(): PropertyContext {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 8, StructuredTextParser.RULE_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 205;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 204;
                this.attribute();
                }
            }

            this.state = 207;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 209;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 208;
                this.accessModifier();
                }
            }

            this.state = 214;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0)) {
                {
                {
                this.state = 211;
                this.modifier();
                }
                }
                this.state = 216;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 217;
            this.match(StructuredTextParser.ID);
            this.state = 218;
            this.match(StructuredTextParser.T__0);
            this.state = 219;
            this.type_();
            this.state = 223;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 447) !== 0)) {
                {
                {
                this.state = 220;
                this.varDeclSection();
                }
                }
                this.state = 225;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 226;
            this.propertyBody();
            this.state = 227;
            this.match(StructuredTextParser.END_PROPERTY);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionBlock(): FunctionBlockContext {
        let localContext = new FunctionBlockContext(this.context, this.state);
        this.enterRule(localContext, 10, StructuredTextParser.RULE_functionBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 230;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 229;
                this.attribute();
                }
            }

            this.state = 232;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 234;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 233;
                this.accessModifier();
                }
            }

            this.state = 239;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0)) {
                {
                {
                this.state = 236;
                this.modifier();
                }
                }
                this.state = 241;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 242;
            this.match(StructuredTextParser.ID);
            this.state = 244;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
                {
                this.state = 243;
                this.extendsClause();
                }
            }

            this.state = 247;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 36) {
                {
                this.state = 246;
                this.implementsClause();
                }
            }

            this.state = 252;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & 29294849) !== 0) || _la === 77) {
                {
                {
                this.state = 249;
                this.member();
                }
                }
                this.state = 254;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 255;
            this.statementSection();
            this.state = 256;
            this.match(StructuredTextParser.END_FUNCTION_BLOCK);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interface_(): InterfaceContext {
        let localContext = new InterfaceContext(this.context, this.state);
        this.enterRule(localContext, 12, StructuredTextParser.RULE_interface);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 259;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 258;
                this.attribute();
                }
            }

            this.state = 261;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 263;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 262;
                this.accessModifier();
                }
            }

            this.state = 265;
            this.match(StructuredTextParser.ID);
            this.state = 267;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
                {
                this.state = 266;
                this.extendsClause();
                }
            }

            this.state = 272;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & 29294849) !== 0) || _la === 77) {
                {
                {
                this.state = 269;
                this.member();
                }
                }
                this.state = 274;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 275;
            this.match(StructuredTextParser.END_INTERFACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varGlobalSection(): VarGlobalSectionContext {
        let localContext = new VarGlobalSectionContext(this.context, this.state);
        this.enterRule(localContext, 14, StructuredTextParser.RULE_varGlobalSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 278;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 277;
                this.attribute();
                }
            }

            this.state = 280;
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 282;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 281;
                this.accessModifier();
                }
            }

            this.state = 287;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0)) {
                {
                {
                this.state = 284;
                this.modifier();
                }
                }
                this.state = 289;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 290;
            this.match(StructuredTextParser.ID);
            this.state = 292;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 291;
                this.varDecl();
                }
                }
                this.state = 294;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 26 || _la === 113);
            this.state = 296;
            this.match(StructuredTextParser.END_VAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dutDecl(): DutDeclContext {
        let localContext = new DutDeclContext(this.context, this.state);
        this.enterRule(localContext, 16, StructuredTextParser.RULE_dutDecl);
        let _la: number;
        try {
            this.state = 359;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 301;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 26) {
                    {
                    {
                    this.state = 298;
                    this.attribute();
                    }
                    }
                    this.state = 303;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 304;
                this.match(StructuredTextParser.TYPE);
                this.state = 306;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                    {
                    this.state = 305;
                    this.accessModifier();
                    }
                }

                this.state = 308;
                this.match(StructuredTextParser.ID);
                this.state = 309;
                this.match(StructuredTextParser.T__0);
                this.state = 310;
                this.enumDecl();
                this.state = 311;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 316;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 26) {
                    {
                    {
                    this.state = 313;
                    this.attribute();
                    }
                    }
                    this.state = 318;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 319;
                this.match(StructuredTextParser.TYPE);
                this.state = 321;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                    {
                    this.state = 320;
                    this.accessModifier();
                    }
                }

                this.state = 323;
                this.match(StructuredTextParser.ID);
                this.state = 324;
                this.match(StructuredTextParser.T__0);
                this.state = 325;
                this.structDecl();
                this.state = 326;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 331;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 26) {
                    {
                    {
                    this.state = 328;
                    this.attribute();
                    }
                    }
                    this.state = 333;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 334;
                this.match(StructuredTextParser.TYPE);
                this.state = 336;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                    {
                    this.state = 335;
                    this.accessModifier();
                    }
                }

                this.state = 338;
                this.match(StructuredTextParser.ID);
                this.state = 339;
                this.match(StructuredTextParser.T__0);
                this.state = 340;
                this.unionDecl();
                this.state = 341;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 346;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 26) {
                    {
                    {
                    this.state = 343;
                    this.attribute();
                    }
                    }
                    this.state = 348;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 349;
                this.match(StructuredTextParser.TYPE);
                this.state = 351;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                    {
                    this.state = 350;
                    this.accessModifier();
                    }
                }

                this.state = 353;
                this.match(StructuredTextParser.ID);
                this.state = 354;
                this.match(StructuredTextParser.T__0);
                this.state = 355;
                this.type_();
                this.state = 356;
                this.match(StructuredTextParser.T__1);
                this.state = 357;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumDecl(): EnumDeclContext {
        let localContext = new EnumDeclContext(this.context, this.state);
        this.enterRule(localContext, 18, StructuredTextParser.RULE_enumDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 361;
            this.match(StructuredTextParser.T__2);
            this.state = 362;
            this.enumMember();
            this.state = 367;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 363;
                this.match(StructuredTextParser.T__3);
                this.state = 364;
                this.enumMember();
                }
                }
                this.state = 369;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 370;
            this.match(StructuredTextParser.T__4);
            this.state = 372;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 23) !== 0)) {
                {
                this.state = 371;
                this.enumType();
                }
            }

            this.state = 376;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 374;
                this.match(StructuredTextParser.T__5);
                this.state = 375;
                this.initialValue();
                }
            }

            this.state = 378;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumMember(): EnumMemberContext {
        let localContext = new EnumMemberContext(this.context, this.state);
        this.enterRule(localContext, 20, StructuredTextParser.RULE_enumMember);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 380;
            this.match(StructuredTextParser.ID);
            this.state = 383;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 381;
                this.match(StructuredTextParser.T__5);
                this.state = 382;
                this.expr(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public initialValue(): InitialValueContext {
        let localContext = new InitialValueContext(this.context, this.state);
        this.enterRule(localContext, 22, StructuredTextParser.RULE_initialValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 385;
            this.match(StructuredTextParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public structDecl(): StructDeclContext {
        let localContext = new StructDeclContext(this.context, this.state);
        this.enterRule(localContext, 24, StructuredTextParser.RULE_structDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 387;
            this.match(StructuredTextParser.STRUCT);
            this.state = 391;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26 || _la === 113) {
                {
                {
                this.state = 388;
                this.varDecl();
                }
                }
                this.state = 393;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 394;
            this.match(StructuredTextParser.END_STRUCT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unionDecl(): UnionDeclContext {
        let localContext = new UnionDeclContext(this.context, this.state);
        this.enterRule(localContext, 26, StructuredTextParser.RULE_unionDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 396;
            this.match(StructuredTextParser.UNION);
            this.state = 400;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26 || _la === 113) {
                {
                {
                this.state = 397;
                this.varDecl();
                }
                }
                this.state = 402;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 403;
            this.match(StructuredTextParser.END_UNION);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public implementsClause(): ImplementsClauseContext {
        let localContext = new ImplementsClauseContext(this.context, this.state);
        this.enterRule(localContext, 28, StructuredTextParser.RULE_implementsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 405;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 406;
            this.type_();
            this.state = 411;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 407;
                this.match(StructuredTextParser.T__3);
                this.state = 408;
                this.type_();
                }
                }
                this.state = 413;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public extendsClause(): ExtendsClauseContext {
        let localContext = new ExtendsClauseContext(this.context, this.state);
        this.enterRule(localContext, 30, StructuredTextParser.RULE_extendsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 414;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 415;
            this.type_();
            this.state = 420;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 416;
                this.match(StructuredTextParser.T__3);
                this.state = 417;
                this.type_();
                }
                }
                this.state = 422;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public member(): MemberContext {
        let localContext = new MemberContext(this.context, this.state);
        this.enterRule(localContext, 32, StructuredTextParser.RULE_member);
        try {
            this.state = 426;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 423;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 424;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 425;
                this.varDeclSection();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varDeclSection(): VarDeclSectionContext {
        let localContext = new VarDeclSectionContext(this.context, this.state);
        this.enterRule(localContext, 34, StructuredTextParser.RULE_varDeclSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 428;
            this.varSectionType();
            this.state = 432;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0)) {
                {
                {
                this.state = 429;
                this.modifier();
                }
                }
                this.state = 434;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 436;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 435;
                this.varDecl();
                }
                }
                this.state = 438;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 26 || _la === 113);
            this.state = 440;
            this.match(StructuredTextParser.END_VAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varSectionType(): VarSectionTypeContext {
        let localContext = new VarSectionTypeContext(this.context, this.state);
        this.enterRule(localContext, 36, StructuredTextParser.RULE_varSectionType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 442;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 447) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public varDecl(): VarDeclContext {
        let localContext = new VarDeclContext(this.context, this.state);
        this.enterRule(localContext, 38, StructuredTextParser.RULE_varDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 445;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 444;
                this.attribute();
                }
            }

            this.state = 447;
            this.match(StructuredTextParser.ID);
            this.state = 448;
            this.match(StructuredTextParser.T__0);
            this.state = 449;
            this.type_();
            this.state = 452;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6 || _la === 7) {
                {
                this.state = 450;
                _la = this.tokenStream.LA(1);
                if(!(_la === 6 || _la === 7)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 451;
                this.exprOrArrayInit();
                }
            }

            this.state = 454;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exprOrArrayInit(): ExprOrArrayInitContext {
        let localContext = new ExprOrArrayInitContext(this.context, this.state);
        this.enterRule(localContext, 40, StructuredTextParser.RULE_exprOrArrayInit);
        try {
            this.state = 458;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__2:
            case StructuredTextParser.T__12:
            case StructuredTextParser.T__13:
            case StructuredTextParser.DATE_TYPE:
            case StructuredTextParser.TIME_OF_DAY_TYPE:
            case StructuredTextParser.DATE_AND_TIME_TYPE:
            case StructuredTextParser.ID:
            case StructuredTextParser.BOOL_LITERAL:
            case StructuredTextParser.INTEGER_LITERAL:
            case StructuredTextParser.REAL_LITERAL:
            case StructuredTextParser.STRING_LITERAL:
            case StructuredTextParser.WSTRING_LITERAL:
            case StructuredTextParser.TIME_LITERAL:
            case StructuredTextParser.LTIME_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 456;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__7:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 457;
                this.arrayInit();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayInit(): ArrayInitContext {
        let localContext = new ArrayInitContext(this.context, this.state);
        this.enterRule(localContext, 42, StructuredTextParser.RULE_arrayInit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 460;
            this.match(StructuredTextParser.T__7);
            this.state = 461;
            this.expr(0);
            this.state = 466;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 462;
                this.match(StructuredTextParser.T__3);
                this.state = 463;
                this.expr(0);
                }
                }
                this.state = 468;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 469;
            this.match(StructuredTextParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public type_(): TypeContext {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 44, StructuredTextParser.RULE_type);
        try {
            this.state = 484;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.LOGICAL_TYPE:
            case StructuredTextParser.BITFIELD_TYPE:
            case StructuredTextParser.UNSIGNED_INT_TYPE:
            case StructuredTextParser.SIGNED_INT_TYPE:
            case StructuredTextParser.FLOATING_POINT_TYPE:
            case StructuredTextParser.X_TYPE:
            case StructuredTextParser.TIME_TYPE:
            case StructuredTextParser.DATE_TYPE:
            case StructuredTextParser.TIME_OF_DAY_TYPE:
            case StructuredTextParser.DATE_AND_TIME_TYPE:
            case StructuredTextParser.STRING_TYPE:
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 471;
                this.typeId();
                }
                break;
            case StructuredTextParser.ARRAY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 472;
                this.match(StructuredTextParser.ARRAY);
                this.state = 473;
                this.match(StructuredTextParser.T__7);
                this.state = 474;
                this.match(StructuredTextParser.INTEGER_LITERAL);
                this.state = 475;
                this.match(StructuredTextParser.T__9);
                this.state = 476;
                this.match(StructuredTextParser.INTEGER_LITERAL);
                this.state = 477;
                this.match(StructuredTextParser.T__8);
                this.state = 478;
                this.match(StructuredTextParser.OF);
                this.state = 479;
                this.type_();
                }
                break;
            case StructuredTextParser.POINTER_TO:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 480;
                this.match(StructuredTextParser.POINTER_TO);
                this.state = 481;
                this.type_();
                }
                break;
            case StructuredTextParser.REFERENCE_TO:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 482;
                this.match(StructuredTextParser.REFERENCE_TO);
                this.state = 483;
                this.type_();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeId(): TypeIdContext {
        let localContext = new TypeIdContext(this.context, this.state);
        this.enterRule(localContext, 46, StructuredTextParser.RULE_typeId);
        try {
            this.state = 488;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.LOGICAL_TYPE:
            case StructuredTextParser.BITFIELD_TYPE:
            case StructuredTextParser.UNSIGNED_INT_TYPE:
            case StructuredTextParser.SIGNED_INT_TYPE:
            case StructuredTextParser.FLOATING_POINT_TYPE:
            case StructuredTextParser.X_TYPE:
            case StructuredTextParser.TIME_TYPE:
            case StructuredTextParser.DATE_TYPE:
            case StructuredTextParser.TIME_OF_DAY_TYPE:
            case StructuredTextParser.DATE_AND_TIME_TYPE:
            case StructuredTextParser.STRING_TYPE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 486;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 487;
                this.match(StructuredTextParser.ID);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public builtinType(): BuiltinTypeContext {
        let localContext = new BuiltinTypeContext(this.context, this.state);
        this.enterRule(localContext, 48, StructuredTextParser.RULE_builtinType);
        let _la: number;
        try {
            this.state = 513;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.LOGICAL_TYPE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 490;
                this.match(StructuredTextParser.LOGICAL_TYPE);
                }
                break;
            case StructuredTextParser.BITFIELD_TYPE:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 491;
                this.match(StructuredTextParser.BITFIELD_TYPE);
                this.state = 493;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 100) {
                    {
                    this.state = 492;
                    this.match(StructuredTextParser.SUBRANGE_PARAM);
                    }
                }

                }
                }
                break;
            case StructuredTextParser.UNSIGNED_INT_TYPE:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 495;
                this.match(StructuredTextParser.UNSIGNED_INT_TYPE);
                this.state = 497;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 100) {
                    {
                    this.state = 496;
                    this.match(StructuredTextParser.SUBRANGE_PARAM);
                    }
                }

                }
                }
                break;
            case StructuredTextParser.SIGNED_INT_TYPE:
                this.enterOuterAlt(localContext, 4);
                {
                {
                this.state = 499;
                this.match(StructuredTextParser.SIGNED_INT_TYPE);
                this.state = 501;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 100) {
                    {
                    this.state = 500;
                    this.match(StructuredTextParser.SUBRANGE_PARAM);
                    }
                }

                }
                }
                break;
            case StructuredTextParser.X_TYPE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 503;
                this.match(StructuredTextParser.X_TYPE);
                }
                break;
            case StructuredTextParser.FLOATING_POINT_TYPE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 504;
                this.match(StructuredTextParser.FLOATING_POINT_TYPE);
                }
                break;
            case StructuredTextParser.TIME_TYPE:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 505;
                this.match(StructuredTextParser.TIME_TYPE);
                }
                break;
            case StructuredTextParser.DATE_TYPE:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 506;
                this.match(StructuredTextParser.DATE_TYPE);
                }
                break;
            case StructuredTextParser.TIME_OF_DAY_TYPE:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 507;
                this.match(StructuredTextParser.TIME_OF_DAY_TYPE);
                }
                break;
            case StructuredTextParser.DATE_AND_TIME_TYPE:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 508;
                this.match(StructuredTextParser.DATE_AND_TIME_TYPE);
                }
                break;
            case StructuredTextParser.STRING_TYPE:
                this.enterOuterAlt(localContext, 11);
                {
                {
                this.state = 509;
                this.match(StructuredTextParser.STRING_TYPE);
                this.state = 511;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 101) {
                    {
                    this.state = 510;
                    this.match(StructuredTextParser.STRING_LEN_PARAM);
                    }
                }

                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumType(): EnumTypeContext {
        let localContext = new EnumTypeContext(this.context, this.state);
        this.enterRule(localContext, 50, StructuredTextParser.RULE_enumType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 515;
            localContext._enumTypeId = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 23) !== 0))) {
                localContext._enumTypeId = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 517;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 100) {
                {
                this.state = 516;
                this.match(StructuredTextParser.SUBRANGE_PARAM);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public signedEnumType(): SignedEnumTypeContext {
        let localContext = new SignedEnumTypeContext(this.context, this.state);
        this.enterRule(localContext, 52, StructuredTextParser.RULE_signedEnumType);
        try {
            this.enterOuterAlt(localContext, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bitfieldEnumType(): BitfieldEnumTypeContext {
        let localContext = new BitfieldEnumTypeContext(this.context, this.state);
        this.enterRule(localContext, 54, StructuredTextParser.RULE_bitfieldEnumType);
        try {
            this.enterOuterAlt(localContext, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statementSection(): StatementSectionContext {
        let localContext = new StatementSectionContext(this.context, this.state);
        this.enterRule(localContext, 56, StructuredTextParser.RULE_statementSection);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 526;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 64, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 523;
                    this.statement();
                    }
                    }
                }
                this.state = 528;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 64, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 58, StructuredTextParser.RULE_statement);
        try {
            this.state = 540;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 65, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 529;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 530;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 531;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 532;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 533;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 534;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 535;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 536;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 537;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 538;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 539;
                this.match(StructuredTextParser.T__1);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignment(): AssignmentContext {
        let localContext = new AssignmentContext(this.context, this.state);
        this.enterRule(localContext, 60, StructuredTextParser.RULE_assignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 542;
            this.memberExpression();
            this.state = 543;
            this.assignmentOperator();
            this.state = 544;
            this.expr(0);
            this.state = 545;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentOperator(): AssignmentOperatorContext {
        let localContext = new AssignmentOperatorContext(this.context, this.state);
        this.enterRule(localContext, 62, StructuredTextParser.RULE_assignmentOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 547;
            _la = this.tokenStream.LA(1);
            if(!(_la === 6 || _la === 7)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public callStatement(): CallStatementContext {
        let localContext = new CallStatementContext(this.context, this.state);
        this.enterRule(localContext, 64, StructuredTextParser.RULE_callStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 549;
            this.memberExpression();
            this.state = 550;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argumentList(): ArgumentListContext {
        let localContext = new ArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 66, StructuredTextParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 552;
            this.argument();
            this.state = 557;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 553;
                this.match(StructuredTextParser.T__3);
                this.state = 554;
                this.argument();
                }
                }
                this.state = 559;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argument(): ArgumentContext {
        let localContext = new ArgumentContext(this.context, this.state);
        this.enterRule(localContext, 68, StructuredTextParser.RULE_argument);
        let _la: number;
        try {
            this.state = 564;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 67, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 560;
                this.match(StructuredTextParser.ID);
                this.state = 561;
                _la = this.tokenStream.LA(1);
                if(!(_la === 6 || _la === 11)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 562;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 563;
                this.expr(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifStatement(): IfStatementContext {
        let localContext = new IfStatementContext(this.context, this.state);
        this.enterRule(localContext, 70, StructuredTextParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 566;
            this.match(StructuredTextParser.IF);
            this.state = 567;
            this.expr(0);
            this.state = 568;
            this.match(StructuredTextParser.THEN);
            this.state = 569;
            this.statementSection();
            this.state = 577;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 54) {
                {
                {
                this.state = 570;
                this.match(StructuredTextParser.ELSIF);
                this.state = 571;
                this.expr(0);
                this.state = 572;
                this.match(StructuredTextParser.THEN);
                this.state = 573;
                this.statementSection();
                }
                }
                this.state = 579;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 582;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 55) {
                {
                this.state = 580;
                this.match(StructuredTextParser.ELSE);
                this.state = 581;
                this.statementSection();
                }
            }

            this.state = 584;
            this.match(StructuredTextParser.END_IF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caseStatement(): CaseStatementContext {
        let localContext = new CaseStatementContext(this.context, this.state);
        this.enterRule(localContext, 72, StructuredTextParser.RULE_caseStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 586;
            this.match(StructuredTextParser.CASE);
            this.state = 587;
            this.expr(0);
            this.state = 588;
            this.match(StructuredTextParser.OF);
            this.state = 590;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 589;
                this.caseElement();
                }
                }
                this.state = 592;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 23) !== 0));
            this.state = 596;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 55) {
                {
                this.state = 594;
                this.match(StructuredTextParser.ELSE);
                this.state = 595;
                this.statementSection();
                }
            }

            this.state = 598;
            this.match(StructuredTextParser.END_CASE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caseElement(): CaseElementContext {
        let localContext = new CaseElementContext(this.context, this.state);
        this.enterRule(localContext, 74, StructuredTextParser.RULE_caseElement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 600;
            this.caseValue();
            this.state = 605;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 601;
                this.match(StructuredTextParser.T__3);
                this.state = 602;
                this.caseValue();
                }
                }
                this.state = 607;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 608;
            this.match(StructuredTextParser.T__0);
            this.state = 609;
            this.statementSection();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caseValue(): CaseValueContext {
        let localContext = new CaseValueContext(this.context, this.state);
        this.enterRule(localContext, 76, StructuredTextParser.RULE_caseValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 611;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 23) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileStatement(): WhileStatementContext {
        let localContext = new WhileStatementContext(this.context, this.state);
        this.enterRule(localContext, 78, StructuredTextParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 613;
            this.match(StructuredTextParser.WHILE);
            this.state = 614;
            this.expr(0);
            this.state = 615;
            this.match(StructuredTextParser.DO);
            this.state = 616;
            this.statementSection();
            this.state = 617;
            this.match(StructuredTextParser.END_WHILE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public repeatStatement(): RepeatStatementContext {
        let localContext = new RepeatStatementContext(this.context, this.state);
        this.enterRule(localContext, 80, StructuredTextParser.RULE_repeatStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 619;
            this.match(StructuredTextParser.REPEAT);
            this.state = 620;
            this.statementSection();
            this.state = 621;
            this.match(StructuredTextParser.UNTIL);
            this.state = 622;
            this.expr(0);
            this.state = 623;
            this.match(StructuredTextParser.END_REPEAT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forStatement(): ForStatementContext {
        let localContext = new ForStatementContext(this.context, this.state);
        this.enterRule(localContext, 82, StructuredTextParser.RULE_forStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 625;
            this.match(StructuredTextParser.FOR);
            this.state = 626;
            this.match(StructuredTextParser.ID);
            this.state = 627;
            this.match(StructuredTextParser.T__5);
            this.state = 628;
            this.expr(0);
            this.state = 629;
            this.match(StructuredTextParser.TO);
            this.state = 630;
            this.expr(0);
            this.state = 633;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 69) {
                {
                this.state = 631;
                this.match(StructuredTextParser.BY);
                this.state = 632;
                this.expr(0);
                }
            }

            this.state = 635;
            this.match(StructuredTextParser.DO);
            this.state = 636;
            this.statementSection();
            this.state = 637;
            this.match(StructuredTextParser.END_FOR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnStatement(): ReturnStatementContext {
        let localContext = new ReturnStatementContext(this.context, this.state);
        this.enterRule(localContext, 84, StructuredTextParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 639;
            this.match(StructuredTextParser.RETURN);
            this.state = 640;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exitStatement(): ExitStatementContext {
        let localContext = new ExitStatementContext(this.context, this.state);
        this.enterRule(localContext, 86, StructuredTextParser.RULE_exitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 642;
            this.match(StructuredTextParser.EXIT);
            this.state = 643;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public continueStatement(): ContinueStatementContext {
        let localContext = new ContinueStatementContext(this.context, this.state);
        this.enterRule(localContext, 88, StructuredTextParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 645;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 646;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public memberExpression(): MemberExpressionContext {
        let localContext = new MemberExpressionContext(this.context, this.state);
        this.enterRule(localContext, 90, StructuredTextParser.RULE_memberExpression);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 648;
            this.memberAccess();
            this.state = 653;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 649;
                    this.match(StructuredTextParser.T__11);
                    this.state = 650;
                    this.memberAccess();
                    }
                    }
                }
                this.state = 655;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public memberAccess(): MemberAccessContext {
        let localContext = new MemberAccessContext(this.context, this.state);
        this.enterRule(localContext, 92, StructuredTextParser.RULE_memberAccess);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 656;
            this.match(StructuredTextParser.ID);
            this.state = 660;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 75, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 657;
                    this.postfixOp();
                    }
                    }
                }
                this.state = 662;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 75, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public postfixOp(): PostfixOpContext {
        let localContext = new PostfixOpContext(this.context, this.state);
        this.enterRule(localContext, 94, StructuredTextParser.RULE_postfixOp);
        try {
            this.state = 666;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.CARET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 663;
                this.dereference();
                }
                break;
            case StructuredTextParser.T__7:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 664;
                this.arrayIndex();
                }
                break;
            case StructuredTextParser.T__2:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 665;
                this.call();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dereference(): DereferenceContext {
        let localContext = new DereferenceContext(this.context, this.state);
        this.enterRule(localContext, 96, StructuredTextParser.RULE_dereference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 668;
            this.match(StructuredTextParser.CARET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayIndex(): ArrayIndexContext {
        let localContext = new ArrayIndexContext(this.context, this.state);
        this.enterRule(localContext, 98, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 670;
            this.match(StructuredTextParser.T__7);
            this.state = 671;
            this.expr(0);
            this.state = 672;
            this.match(StructuredTextParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public call(): CallContext {
        let localContext = new CallContext(this.context, this.state);
        this.enterRule(localContext, 100, StructuredTextParser.RULE_call);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 674;
            this.match(StructuredTextParser.T__2);
            this.state = 676;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 24584) !== 0) || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & 4087) !== 0)) {
                {
                this.state = 675;
                this.argumentList();
                }
            }

            this.state = 678;
            this.match(StructuredTextParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 102, StructuredTextParser.RULE_literal);
        try {
            this.state = 690;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.INTEGER_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 680;
                this.match(StructuredTextParser.INTEGER_LITERAL);
                }
                break;
            case StructuredTextParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 681;
                this.match(StructuredTextParser.REAL_LITERAL);
                }
                break;
            case StructuredTextParser.BOOL_LITERAL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 682;
                this.match(StructuredTextParser.BOOL_LITERAL);
                }
                break;
            case StructuredTextParser.TIME_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 683;
                this.match(StructuredTextParser.TIME_LITERAL);
                }
                break;
            case StructuredTextParser.LTIME_LITERAL:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 684;
                this.match(StructuredTextParser.LTIME_LITERAL);
                }
                break;
            case StructuredTextParser.T__12:
            case StructuredTextParser.T__13:
            case StructuredTextParser.DATE_TYPE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 685;
                this.dateLiteral();
                }
                break;
            case StructuredTextParser.DATE_AND_TIME_TYPE:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 686;
                this.dateAndTimeLiteral();
                }
                break;
            case StructuredTextParser.TIME_OF_DAY_TYPE:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 687;
                this.timeOfDayLiteral();
                }
                break;
            case StructuredTextParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 688;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            case StructuredTextParser.WSTRING_LITERAL:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 689;
                this.match(StructuredTextParser.WSTRING_LITERAL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dateLiteral(): DateLiteralContext {
        let localContext = new DateLiteralContext(this.context, this.state);
        this.enterRule(localContext, 104, StructuredTextParser.RULE_dateLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 692;
            localContext._prefix = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 13 || _la === 14 || _la === 109)) {
                localContext._prefix = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 693;
            this.match(StructuredTextParser.T__14);
            this.state = 694;
            localContext._date = this.match(StructuredTextParser.DATE_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dateAndTimeLiteral(): DateAndTimeLiteralContext {
        let localContext = new DateAndTimeLiteralContext(this.context, this.state);
        this.enterRule(localContext, 106, StructuredTextParser.RULE_dateAndTimeLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 696;
            localContext._prefix = this.match(StructuredTextParser.DATE_AND_TIME_TYPE);
            this.state = 697;
            this.match(StructuredTextParser.T__14);
            this.state = 698;
            localContext._dateAndTime = this.match(StructuredTextParser.DATETIME_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public timeOfDayLiteral(): TimeOfDayLiteralContext {
        let localContext = new TimeOfDayLiteralContext(this.context, this.state);
        this.enterRule(localContext, 108, StructuredTextParser.RULE_timeOfDayLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 700;
            localContext._prefix = this.match(StructuredTextParser.TIME_OF_DAY_TYPE);
            this.state = 701;
            this.match(StructuredTextParser.T__14);
            this.state = 702;
            localContext._timeOfDay = this.match(StructuredTextParser.TIME_OF_DAY_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expr(): ExprContext;
    public expr(_p: number): ExprContext;
    public expr(_p?: number): ExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 110;
        this.enterRecursionRule(localContext, 110, StructuredTextParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 711;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__12:
            case StructuredTextParser.T__13:
            case StructuredTextParser.DATE_TYPE:
            case StructuredTextParser.TIME_OF_DAY_TYPE:
            case StructuredTextParser.DATE_AND_TIME_TYPE:
            case StructuredTextParser.BOOL_LITERAL:
            case StructuredTextParser.INTEGER_LITERAL:
            case StructuredTextParser.REAL_LITERAL:
            case StructuredTextParser.STRING_LITERAL:
            case StructuredTextParser.WSTRING_LITERAL:
            case StructuredTextParser.TIME_LITERAL:
            case StructuredTextParser.LTIME_LITERAL:
                {
                this.state = 705;
                this.literal();
                }
                break;
            case StructuredTextParser.ID:
                {
                this.state = 706;
                this.memberExpression();
                }
                break;
            case StructuredTextParser.T__2:
                {
                this.state = 707;
                this.match(StructuredTextParser.T__2);
                this.state = 708;
                this.expr(0);
                this.state = 709;
                this.match(StructuredTextParser.T__4);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 727;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 81, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 725;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 713;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 714;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 16 || _la === 17 || _la === 94)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 715;
                        this.expr(8);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 716;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 717;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 18 || _la === 19)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 718;
                        this.expr(7);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 719;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 720;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 66060288) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 721;
                        this.expr(6);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 722;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 723;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 724;
                        this.expr(5);
                        }
                        break;
                    }
                    }
                }
                this.state = 729;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 81, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public propertyBody(): PropertyBodyContext {
        let localContext = new PropertyBodyContext(this.context, this.state);
        this.enterRule(localContext, 112, StructuredTextParser.RULE_propertyBody);
        try {
            this.state = 738;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 730;
                this.getter();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 731;
                this.setter();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 732;
                this.getter();
                this.state = 733;
                this.setter();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 735;
                this.setter();
                this.state = 736;
                this.getter();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getter(): GetterContext {
        let localContext = new GetterContext(this.context, this.state);
        this.enterRule(localContext, 114, StructuredTextParser.RULE_getter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 740;
            this.match(StructuredTextParser.GET);
            this.state = 742;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 741;
                this.accessModifier();
                }
            }

            this.state = 744;
            this.statementSection();
            this.state = 745;
            this.match(StructuredTextParser.END_GET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setter(): SetterContext {
        let localContext = new SetterContext(this.context, this.state);
        this.enterRule(localContext, 116, StructuredTextParser.RULE_setter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 747;
            this.match(StructuredTextParser.SET);
            this.state = 749;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 748;
                this.accessModifier();
                }
            }

            this.state = 751;
            this.statementSection();
            this.state = 752;
            this.match(StructuredTextParser.END_SET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public attribute(): AttributeContext {
        let localContext = new AttributeContext(this.context, this.state);
        this.enterRule(localContext, 118, StructuredTextParser.RULE_attribute);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 754;
            this.match(StructuredTextParser.T__25);
            this.state = 755;
            this.match(StructuredTextParser.ID);
            this.state = 757;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 756;
                this.attributeArgList();
                }
            }

            this.state = 759;
            this.match(StructuredTextParser.T__26);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public attributeArgList(): AttributeArgListContext {
        let localContext = new AttributeArgListContext(this.context, this.state);
        this.enterRule(localContext, 120, StructuredTextParser.RULE_attributeArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 761;
            this.match(StructuredTextParser.T__2);
            this.state = 762;
            this.attributeArg();
            this.state = 767;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 763;
                this.match(StructuredTextParser.T__3);
                this.state = 764;
                this.attributeArg();
                }
                }
                this.state = 769;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 770;
            this.match(StructuredTextParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public attributeArg(): AttributeArgContext {
        let localContext = new AttributeArgContext(this.context, this.state);
        this.enterRule(localContext, 122, StructuredTextParser.RULE_attributeArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 772;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 29) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public accessModifier(): AccessModifierContext {
        let localContext = new AccessModifierContext(this.context, this.state);
        this.enterRule(localContext, 124, StructuredTextParser.RULE_accessModifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 774;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public modifier(): ModifierContext {
        let localContext = new ModifierContext(this.context, this.state);
        this.enterRule(localContext, 126, StructuredTextParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 776;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 55:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 7);
        case 1:
            return this.precpred(this.context, 6);
        case 2:
            return this.precpred(this.context, 5);
        case 3:
            return this.precpred(this.context, 4);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,126,779,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,1,0,1,0,1,0,1,0,
        1,0,1,0,5,0,135,8,0,10,0,12,0,138,9,0,1,1,3,1,141,8,1,1,1,1,1,3,
        1,145,8,1,1,1,1,1,5,1,149,8,1,10,1,12,1,152,9,1,1,1,1,1,1,1,1,2,
        3,2,158,8,2,1,2,1,2,3,2,162,8,2,1,2,1,2,1,2,3,2,167,8,2,1,2,5,2,
        170,8,2,10,2,12,2,173,9,2,1,2,1,2,1,2,1,3,3,3,179,8,3,1,3,1,3,3,
        3,183,8,3,1,3,5,3,186,8,3,10,3,12,3,189,9,3,1,3,1,3,1,3,3,3,194,
        8,3,1,3,5,3,197,8,3,10,3,12,3,200,9,3,1,3,1,3,1,3,1,4,3,4,206,8,
        4,1,4,1,4,3,4,210,8,4,1,4,5,4,213,8,4,10,4,12,4,216,9,4,1,4,1,4,
        1,4,1,4,5,4,222,8,4,10,4,12,4,225,9,4,1,4,1,4,1,4,1,5,3,5,231,8,
        5,1,5,1,5,3,5,235,8,5,1,5,5,5,238,8,5,10,5,12,5,241,9,5,1,5,1,5,
        3,5,245,8,5,1,5,3,5,248,8,5,1,5,5,5,251,8,5,10,5,12,5,254,9,5,1,
        5,1,5,1,5,1,6,3,6,260,8,6,1,6,1,6,3,6,264,8,6,1,6,1,6,3,6,268,8,
        6,1,6,5,6,271,8,6,10,6,12,6,274,9,6,1,6,1,6,1,7,3,7,279,8,7,1,7,
        1,7,3,7,283,8,7,1,7,5,7,286,8,7,10,7,12,7,289,9,7,1,7,1,7,4,7,293,
        8,7,11,7,12,7,294,1,7,1,7,1,8,5,8,300,8,8,10,8,12,8,303,9,8,1,8,
        1,8,3,8,307,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,315,8,8,10,8,12,8,318,
        9,8,1,8,1,8,3,8,322,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,330,8,8,10,8,
        12,8,333,9,8,1,8,1,8,3,8,337,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,345,
        8,8,10,8,12,8,348,9,8,1,8,1,8,3,8,352,8,8,1,8,1,8,1,8,1,8,1,8,1,
        8,3,8,360,8,8,1,9,1,9,1,9,1,9,5,9,366,8,9,10,9,12,9,369,9,9,1,9,
        1,9,3,9,373,8,9,1,9,1,9,3,9,377,8,9,1,9,1,9,1,10,1,10,1,10,3,10,
        384,8,10,1,11,1,11,1,12,1,12,5,12,390,8,12,10,12,12,12,393,9,12,
        1,12,1,12,1,13,1,13,5,13,399,8,13,10,13,12,13,402,9,13,1,13,1,13,
        1,14,1,14,1,14,1,14,5,14,410,8,14,10,14,12,14,413,9,14,1,15,1,15,
        1,15,1,15,5,15,419,8,15,10,15,12,15,422,9,15,1,16,1,16,1,16,3,16,
        427,8,16,1,17,1,17,5,17,431,8,17,10,17,12,17,434,9,17,1,17,4,17,
        437,8,17,11,17,12,17,438,1,17,1,17,1,18,1,18,1,19,3,19,446,8,19,
        1,19,1,19,1,19,1,19,1,19,3,19,453,8,19,1,19,1,19,1,20,1,20,3,20,
        459,8,20,1,21,1,21,1,21,1,21,5,21,465,8,21,10,21,12,21,468,9,21,
        1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
        1,22,1,22,3,22,485,8,22,1,23,1,23,3,23,489,8,23,1,24,1,24,1,24,3,
        24,494,8,24,1,24,1,24,3,24,498,8,24,1,24,1,24,3,24,502,8,24,1,24,
        1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,512,8,24,3,24,514,8,24,1,
        25,1,25,3,25,518,8,25,1,26,1,26,1,27,1,27,1,28,5,28,525,8,28,10,
        28,12,28,528,9,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
        29,1,29,3,29,541,8,29,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,32,1,
        32,1,32,1,33,1,33,1,33,5,33,556,8,33,10,33,12,33,559,9,33,1,34,1,
        34,1,34,1,34,3,34,565,8,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
        35,1,35,5,35,576,8,35,10,35,12,35,579,9,35,1,35,1,35,3,35,583,8,
        35,1,35,1,35,1,36,1,36,1,36,1,36,4,36,591,8,36,11,36,12,36,592,1,
        36,1,36,3,36,597,8,36,1,36,1,36,1,37,1,37,1,37,5,37,604,8,37,10,
        37,12,37,607,9,37,1,37,1,37,1,37,1,38,1,38,1,39,1,39,1,39,1,39,1,
        39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,
        41,1,41,1,41,3,41,634,8,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,
        43,1,43,1,43,1,44,1,44,1,44,1,45,1,45,1,45,5,45,652,8,45,10,45,12,
        45,655,9,45,1,46,1,46,5,46,659,8,46,10,46,12,46,662,9,46,1,47,1,
        47,1,47,3,47,667,8,47,1,48,1,48,1,49,1,49,1,49,1,49,1,50,1,50,3,
        50,677,8,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,
        51,1,51,3,51,691,8,51,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,
        54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,3,55,712,8,
        55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,5,
        55,726,8,55,10,55,12,55,729,9,55,1,56,1,56,1,56,1,56,1,56,1,56,1,
        56,1,56,3,56,739,8,56,1,57,1,57,3,57,743,8,57,1,57,1,57,1,57,1,58,
        1,58,3,58,750,8,58,1,58,1,58,1,58,1,59,1,59,1,59,3,59,758,8,59,1,
        59,1,59,1,60,1,60,1,60,1,60,5,60,766,8,60,10,60,12,60,769,9,60,1,
        60,1,60,1,61,1,61,1,62,1,62,1,63,1,63,1,63,0,1,110,64,0,2,4,6,8,
        10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
        54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,
        98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,0,13,
        2,0,42,47,49,50,1,0,6,7,2,0,103,105,107,107,2,0,6,6,11,11,2,0,113,
        115,117,117,2,0,13,14,109,109,2,0,16,17,94,94,1,0,18,19,1,0,20,25,
        1,0,74,76,2,0,113,113,115,117,1,0,90,93,1,0,87,89,842,0,136,1,0,
        0,0,2,140,1,0,0,0,4,157,1,0,0,0,6,178,1,0,0,0,8,205,1,0,0,0,10,230,
        1,0,0,0,12,259,1,0,0,0,14,278,1,0,0,0,16,359,1,0,0,0,18,361,1,0,
        0,0,20,380,1,0,0,0,22,385,1,0,0,0,24,387,1,0,0,0,26,396,1,0,0,0,
        28,405,1,0,0,0,30,414,1,0,0,0,32,426,1,0,0,0,34,428,1,0,0,0,36,442,
        1,0,0,0,38,445,1,0,0,0,40,458,1,0,0,0,42,460,1,0,0,0,44,484,1,0,
        0,0,46,488,1,0,0,0,48,513,1,0,0,0,50,515,1,0,0,0,52,519,1,0,0,0,
        54,521,1,0,0,0,56,526,1,0,0,0,58,540,1,0,0,0,60,542,1,0,0,0,62,547,
        1,0,0,0,64,549,1,0,0,0,66,552,1,0,0,0,68,564,1,0,0,0,70,566,1,0,
        0,0,72,586,1,0,0,0,74,600,1,0,0,0,76,611,1,0,0,0,78,613,1,0,0,0,
        80,619,1,0,0,0,82,625,1,0,0,0,84,639,1,0,0,0,86,642,1,0,0,0,88,645,
        1,0,0,0,90,648,1,0,0,0,92,656,1,0,0,0,94,666,1,0,0,0,96,668,1,0,
        0,0,98,670,1,0,0,0,100,674,1,0,0,0,102,690,1,0,0,0,104,692,1,0,0,
        0,106,696,1,0,0,0,108,700,1,0,0,0,110,711,1,0,0,0,112,738,1,0,0,
        0,114,740,1,0,0,0,116,747,1,0,0,0,118,754,1,0,0,0,120,761,1,0,0,
        0,122,772,1,0,0,0,124,774,1,0,0,0,126,776,1,0,0,0,128,135,3,2,1,
        0,129,135,3,10,5,0,130,135,3,4,2,0,131,135,3,12,6,0,132,135,3,14,
        7,0,133,135,3,16,8,0,134,128,1,0,0,0,134,129,1,0,0,0,134,130,1,0,
        0,0,134,131,1,0,0,0,134,132,1,0,0,0,134,133,1,0,0,0,135,138,1,0,
        0,0,136,134,1,0,0,0,136,137,1,0,0,0,137,1,1,0,0,0,138,136,1,0,0,
        0,139,141,3,118,59,0,140,139,1,0,0,0,140,141,1,0,0,0,141,142,1,0,
        0,0,142,144,5,28,0,0,143,145,3,124,62,0,144,143,1,0,0,0,144,145,
        1,0,0,0,145,146,1,0,0,0,146,150,5,113,0,0,147,149,3,34,17,0,148,
        147,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,
        153,1,0,0,0,152,150,1,0,0,0,153,154,3,56,28,0,154,155,5,29,0,0,155,
        3,1,0,0,0,156,158,3,118,59,0,157,156,1,0,0,0,157,158,1,0,0,0,158,
        159,1,0,0,0,159,161,5,32,0,0,160,162,3,124,62,0,161,160,1,0,0,0,
        161,162,1,0,0,0,162,163,1,0,0,0,163,166,5,113,0,0,164,165,5,1,0,
        0,165,167,3,44,22,0,166,164,1,0,0,0,166,167,1,0,0,0,167,171,1,0,
        0,0,168,170,3,34,17,0,169,168,1,0,0,0,170,173,1,0,0,0,171,169,1,
        0,0,0,171,172,1,0,0,0,172,174,1,0,0,0,173,171,1,0,0,0,174,175,3,
        56,28,0,175,176,5,33,0,0,176,5,1,0,0,0,177,179,3,118,59,0,178,177,
        1,0,0,0,178,179,1,0,0,0,179,180,1,0,0,0,180,182,5,77,0,0,181,183,
        3,124,62,0,182,181,1,0,0,0,182,183,1,0,0,0,183,187,1,0,0,0,184,186,
        3,126,63,0,185,184,1,0,0,0,186,189,1,0,0,0,187,185,1,0,0,0,187,188,
        1,0,0,0,188,190,1,0,0,0,189,187,1,0,0,0,190,193,5,113,0,0,191,192,
        5,1,0,0,192,194,3,44,22,0,193,191,1,0,0,0,193,194,1,0,0,0,194,198,
        1,0,0,0,195,197,3,34,17,0,196,195,1,0,0,0,197,200,1,0,0,0,198,196,
        1,0,0,0,198,199,1,0,0,0,199,201,1,0,0,0,200,198,1,0,0,0,201,202,
        3,56,28,0,202,203,5,78,0,0,203,7,1,0,0,0,204,206,3,118,59,0,205,
        204,1,0,0,0,205,206,1,0,0,0,206,207,1,0,0,0,207,209,5,34,0,0,208,
        210,3,124,62,0,209,208,1,0,0,0,209,210,1,0,0,0,210,214,1,0,0,0,211,
        213,3,126,63,0,212,211,1,0,0,0,213,216,1,0,0,0,214,212,1,0,0,0,214,
        215,1,0,0,0,215,217,1,0,0,0,216,214,1,0,0,0,217,218,5,113,0,0,218,
        219,5,1,0,0,219,223,3,44,22,0,220,222,3,34,17,0,221,220,1,0,0,0,
        222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,226,1,0,0,0,
        225,223,1,0,0,0,226,227,3,112,56,0,227,228,5,35,0,0,228,9,1,0,0,
        0,229,231,3,118,59,0,230,229,1,0,0,0,230,231,1,0,0,0,231,232,1,0,
        0,0,232,234,5,30,0,0,233,235,3,124,62,0,234,233,1,0,0,0,234,235,
        1,0,0,0,235,239,1,0,0,0,236,238,3,126,63,0,237,236,1,0,0,0,238,241,
        1,0,0,0,239,237,1,0,0,0,239,240,1,0,0,0,240,242,1,0,0,0,241,239,
        1,0,0,0,242,244,5,113,0,0,243,245,3,30,15,0,244,243,1,0,0,0,244,
        245,1,0,0,0,245,247,1,0,0,0,246,248,3,28,14,0,247,246,1,0,0,0,247,
        248,1,0,0,0,248,252,1,0,0,0,249,251,3,32,16,0,250,249,1,0,0,0,251,
        254,1,0,0,0,252,250,1,0,0,0,252,253,1,0,0,0,253,255,1,0,0,0,254,
        252,1,0,0,0,255,256,3,56,28,0,256,257,5,31,0,0,257,11,1,0,0,0,258,
        260,3,118,59,0,259,258,1,0,0,0,259,260,1,0,0,0,260,261,1,0,0,0,261,
        263,5,79,0,0,262,264,3,124,62,0,263,262,1,0,0,0,263,264,1,0,0,0,
        264,265,1,0,0,0,265,267,5,113,0,0,266,268,3,30,15,0,267,266,1,0,
        0,0,267,268,1,0,0,0,268,272,1,0,0,0,269,271,3,32,16,0,270,269,1,
        0,0,0,271,274,1,0,0,0,272,270,1,0,0,0,272,273,1,0,0,0,273,275,1,
        0,0,0,274,272,1,0,0,0,275,276,5,80,0,0,276,13,1,0,0,0,277,279,3,
        118,59,0,278,277,1,0,0,0,278,279,1,0,0,0,279,280,1,0,0,0,280,282,
        5,48,0,0,281,283,3,124,62,0,282,281,1,0,0,0,282,283,1,0,0,0,283,
        287,1,0,0,0,284,286,3,126,63,0,285,284,1,0,0,0,286,289,1,0,0,0,287,
        285,1,0,0,0,287,288,1,0,0,0,288,290,1,0,0,0,289,287,1,0,0,0,290,
        292,5,113,0,0,291,293,3,38,19,0,292,291,1,0,0,0,293,294,1,0,0,0,
        294,292,1,0,0,0,294,295,1,0,0,0,295,296,1,0,0,0,296,297,5,51,0,0,
        297,15,1,0,0,0,298,300,3,118,59,0,299,298,1,0,0,0,300,303,1,0,0,
        0,301,299,1,0,0,0,301,302,1,0,0,0,302,304,1,0,0,0,303,301,1,0,0,
        0,304,306,5,95,0,0,305,307,3,124,62,0,306,305,1,0,0,0,306,307,1,
        0,0,0,307,308,1,0,0,0,308,309,5,113,0,0,309,310,5,1,0,0,310,311,
        3,18,9,0,311,312,5,96,0,0,312,360,1,0,0,0,313,315,3,118,59,0,314,
        313,1,0,0,0,315,318,1,0,0,0,316,314,1,0,0,0,316,317,1,0,0,0,317,
        319,1,0,0,0,318,316,1,0,0,0,319,321,5,95,0,0,320,322,3,124,62,0,
        321,320,1,0,0,0,321,322,1,0,0,0,322,323,1,0,0,0,323,324,5,113,0,
        0,324,325,5,1,0,0,325,326,3,24,12,0,326,327,5,96,0,0,327,360,1,0,
        0,0,328,330,3,118,59,0,329,328,1,0,0,0,330,333,1,0,0,0,331,329,1,
        0,0,0,331,332,1,0,0,0,332,334,1,0,0,0,333,331,1,0,0,0,334,336,5,
        95,0,0,335,337,3,124,62,0,336,335,1,0,0,0,336,337,1,0,0,0,337,338,
        1,0,0,0,338,339,5,113,0,0,339,340,5,1,0,0,340,341,3,26,13,0,341,
        342,5,96,0,0,342,360,1,0,0,0,343,345,3,118,59,0,344,343,1,0,0,0,
        345,348,1,0,0,0,346,344,1,0,0,0,346,347,1,0,0,0,347,349,1,0,0,0,
        348,346,1,0,0,0,349,351,5,95,0,0,350,352,3,124,62,0,351,350,1,0,
        0,0,351,352,1,0,0,0,352,353,1,0,0,0,353,354,5,113,0,0,354,355,5,
        1,0,0,355,356,3,44,22,0,356,357,5,2,0,0,357,358,5,96,0,0,358,360,
        1,0,0,0,359,301,1,0,0,0,359,316,1,0,0,0,359,331,1,0,0,0,359,346,
        1,0,0,0,360,17,1,0,0,0,361,362,5,3,0,0,362,367,3,20,10,0,363,364,
        5,4,0,0,364,366,3,20,10,0,365,363,1,0,0,0,366,369,1,0,0,0,367,365,
        1,0,0,0,367,368,1,0,0,0,368,370,1,0,0,0,369,367,1,0,0,0,370,372,
        5,5,0,0,371,373,3,50,25,0,372,371,1,0,0,0,372,373,1,0,0,0,373,376,
        1,0,0,0,374,375,5,6,0,0,375,377,3,22,11,0,376,374,1,0,0,0,376,377,
        1,0,0,0,377,378,1,0,0,0,378,379,5,2,0,0,379,19,1,0,0,0,380,383,5,
        113,0,0,381,382,5,6,0,0,382,384,3,110,55,0,383,381,1,0,0,0,383,384,
        1,0,0,0,384,21,1,0,0,0,385,386,5,113,0,0,386,23,1,0,0,0,387,391,
        5,81,0,0,388,390,3,38,19,0,389,388,1,0,0,0,390,393,1,0,0,0,391,389,
        1,0,0,0,391,392,1,0,0,0,392,394,1,0,0,0,393,391,1,0,0,0,394,395,
        5,82,0,0,395,25,1,0,0,0,396,400,5,83,0,0,397,399,3,38,19,0,398,397,
        1,0,0,0,399,402,1,0,0,0,400,398,1,0,0,0,400,401,1,0,0,0,401,403,
        1,0,0,0,402,400,1,0,0,0,403,404,5,84,0,0,404,27,1,0,0,0,405,406,
        5,36,0,0,406,411,3,44,22,0,407,408,5,4,0,0,408,410,3,44,22,0,409,
        407,1,0,0,0,410,413,1,0,0,0,411,409,1,0,0,0,411,412,1,0,0,0,412,
        29,1,0,0,0,413,411,1,0,0,0,414,415,5,37,0,0,415,420,3,44,22,0,416,
        417,5,4,0,0,417,419,3,44,22,0,418,416,1,0,0,0,419,422,1,0,0,0,420,
        418,1,0,0,0,420,421,1,0,0,0,421,31,1,0,0,0,422,420,1,0,0,0,423,427,
        3,6,3,0,424,427,3,8,4,0,425,427,3,34,17,0,426,423,1,0,0,0,426,424,
        1,0,0,0,426,425,1,0,0,0,427,33,1,0,0,0,428,432,3,36,18,0,429,431,
        3,126,63,0,430,429,1,0,0,0,431,434,1,0,0,0,432,430,1,0,0,0,432,433,
        1,0,0,0,433,436,1,0,0,0,434,432,1,0,0,0,435,437,3,38,19,0,436,435,
        1,0,0,0,437,438,1,0,0,0,438,436,1,0,0,0,438,439,1,0,0,0,439,440,
        1,0,0,0,440,441,5,51,0,0,441,35,1,0,0,0,442,443,7,0,0,0,443,37,1,
        0,0,0,444,446,3,118,59,0,445,444,1,0,0,0,445,446,1,0,0,0,446,447,
        1,0,0,0,447,448,5,113,0,0,448,449,5,1,0,0,449,452,3,44,22,0,450,
        451,7,1,0,0,451,453,3,40,20,0,452,450,1,0,0,0,452,453,1,0,0,0,453,
        454,1,0,0,0,454,455,5,2,0,0,455,39,1,0,0,0,456,459,3,110,55,0,457,
        459,3,42,21,0,458,456,1,0,0,0,458,457,1,0,0,0,459,41,1,0,0,0,460,
        461,5,8,0,0,461,466,3,110,55,0,462,463,5,4,0,0,463,465,3,110,55,
        0,464,462,1,0,0,0,465,468,1,0,0,0,466,464,1,0,0,0,466,467,1,0,0,
        0,467,469,1,0,0,0,468,466,1,0,0,0,469,470,5,9,0,0,470,43,1,0,0,0,
        471,485,3,46,23,0,472,473,5,58,0,0,473,474,5,8,0,0,474,475,5,115,
        0,0,475,476,5,10,0,0,476,477,5,115,0,0,477,478,5,9,0,0,478,479,5,
        59,0,0,479,485,3,44,22,0,480,481,5,99,0,0,481,485,3,44,22,0,482,
        483,5,98,0,0,483,485,3,44,22,0,484,471,1,0,0,0,484,472,1,0,0,0,484,
        480,1,0,0,0,484,482,1,0,0,0,485,45,1,0,0,0,486,489,3,48,24,0,487,
        489,5,113,0,0,488,486,1,0,0,0,488,487,1,0,0,0,489,47,1,0,0,0,490,
        514,5,102,0,0,491,493,5,103,0,0,492,494,5,100,0,0,493,492,1,0,0,
        0,493,494,1,0,0,0,494,514,1,0,0,0,495,497,5,104,0,0,496,498,5,100,
        0,0,497,496,1,0,0,0,497,498,1,0,0,0,498,514,1,0,0,0,499,501,5,105,
        0,0,500,502,5,100,0,0,501,500,1,0,0,0,501,502,1,0,0,0,502,514,1,
        0,0,0,503,514,5,107,0,0,504,514,5,106,0,0,505,514,5,108,0,0,506,
        514,5,109,0,0,507,514,5,110,0,0,508,514,5,111,0,0,509,511,5,112,
        0,0,510,512,5,101,0,0,511,510,1,0,0,0,511,512,1,0,0,0,512,514,1,
        0,0,0,513,490,1,0,0,0,513,491,1,0,0,0,513,495,1,0,0,0,513,499,1,
        0,0,0,513,503,1,0,0,0,513,504,1,0,0,0,513,505,1,0,0,0,513,506,1,
        0,0,0,513,507,1,0,0,0,513,508,1,0,0,0,513,509,1,0,0,0,514,49,1,0,
        0,0,515,517,7,2,0,0,516,518,5,100,0,0,517,516,1,0,0,0,517,518,1,
        0,0,0,518,51,1,0,0,0,519,520,1,0,0,0,520,53,1,0,0,0,521,522,1,0,
        0,0,522,55,1,0,0,0,523,525,3,58,29,0,524,523,1,0,0,0,525,528,1,0,
        0,0,526,524,1,0,0,0,526,527,1,0,0,0,527,57,1,0,0,0,528,526,1,0,0,
        0,529,541,3,60,30,0,530,541,3,70,35,0,531,541,3,72,36,0,532,541,
        3,78,39,0,533,541,3,80,40,0,534,541,3,82,41,0,535,541,3,64,32,0,
        536,541,3,84,42,0,537,541,3,86,43,0,538,541,3,88,44,0,539,541,5,
        2,0,0,540,529,1,0,0,0,540,530,1,0,0,0,540,531,1,0,0,0,540,532,1,
        0,0,0,540,533,1,0,0,0,540,534,1,0,0,0,540,535,1,0,0,0,540,536,1,
        0,0,0,540,537,1,0,0,0,540,538,1,0,0,0,540,539,1,0,0,0,541,59,1,0,
        0,0,542,543,3,90,45,0,543,544,3,62,31,0,544,545,3,110,55,0,545,546,
        5,2,0,0,546,61,1,0,0,0,547,548,7,1,0,0,548,63,1,0,0,0,549,550,3,
        90,45,0,550,551,5,2,0,0,551,65,1,0,0,0,552,557,3,68,34,0,553,554,
        5,4,0,0,554,556,3,68,34,0,555,553,1,0,0,0,556,559,1,0,0,0,557,555,
        1,0,0,0,557,558,1,0,0,0,558,67,1,0,0,0,559,557,1,0,0,0,560,561,5,
        113,0,0,561,562,7,3,0,0,562,565,3,110,55,0,563,565,3,110,55,0,564,
        560,1,0,0,0,564,563,1,0,0,0,565,69,1,0,0,0,566,567,5,52,0,0,567,
        568,3,110,55,0,568,569,5,53,0,0,569,577,3,56,28,0,570,571,5,54,0,
        0,571,572,3,110,55,0,572,573,5,53,0,0,573,574,3,56,28,0,574,576,
        1,0,0,0,575,570,1,0,0,0,576,579,1,0,0,0,577,575,1,0,0,0,577,578,
        1,0,0,0,578,582,1,0,0,0,579,577,1,0,0,0,580,581,5,55,0,0,581,583,
        3,56,28,0,582,580,1,0,0,0,582,583,1,0,0,0,583,584,1,0,0,0,584,585,
        5,56,0,0,585,71,1,0,0,0,586,587,5,57,0,0,587,588,3,110,55,0,588,
        590,5,59,0,0,589,591,3,74,37,0,590,589,1,0,0,0,591,592,1,0,0,0,592,
        590,1,0,0,0,592,593,1,0,0,0,593,596,1,0,0,0,594,595,5,55,0,0,595,
        597,3,56,28,0,596,594,1,0,0,0,596,597,1,0,0,0,597,598,1,0,0,0,598,
        599,5,60,0,0,599,73,1,0,0,0,600,605,3,76,38,0,601,602,5,4,0,0,602,
        604,3,76,38,0,603,601,1,0,0,0,604,607,1,0,0,0,605,603,1,0,0,0,605,
        606,1,0,0,0,606,608,1,0,0,0,607,605,1,0,0,0,608,609,5,1,0,0,609,
        610,3,56,28,0,610,75,1,0,0,0,611,612,7,4,0,0,612,77,1,0,0,0,613,
        614,5,61,0,0,614,615,3,110,55,0,615,616,5,62,0,0,616,617,3,56,28,
        0,617,618,5,63,0,0,618,79,1,0,0,0,619,620,5,64,0,0,620,621,3,56,
        28,0,621,622,5,65,0,0,622,623,3,110,55,0,623,624,5,66,0,0,624,81,
        1,0,0,0,625,626,5,67,0,0,626,627,5,113,0,0,627,628,5,6,0,0,628,629,
        3,110,55,0,629,630,5,68,0,0,630,633,3,110,55,0,631,632,5,69,0,0,
        632,634,3,110,55,0,633,631,1,0,0,0,633,634,1,0,0,0,634,635,1,0,0,
        0,635,636,5,62,0,0,636,637,3,56,28,0,637,638,5,70,0,0,638,83,1,0,
        0,0,639,640,5,71,0,0,640,641,5,2,0,0,641,85,1,0,0,0,642,643,5,72,
        0,0,643,644,5,2,0,0,644,87,1,0,0,0,645,646,5,73,0,0,646,647,5,2,
        0,0,647,89,1,0,0,0,648,653,3,92,46,0,649,650,5,12,0,0,650,652,3,
        92,46,0,651,649,1,0,0,0,652,655,1,0,0,0,653,651,1,0,0,0,653,654,
        1,0,0,0,654,91,1,0,0,0,655,653,1,0,0,0,656,660,5,113,0,0,657,659,
        3,94,47,0,658,657,1,0,0,0,659,662,1,0,0,0,660,658,1,0,0,0,660,661,
        1,0,0,0,661,93,1,0,0,0,662,660,1,0,0,0,663,667,3,96,48,0,664,667,
        3,98,49,0,665,667,3,100,50,0,666,663,1,0,0,0,666,664,1,0,0,0,666,
        665,1,0,0,0,667,95,1,0,0,0,668,669,5,97,0,0,669,97,1,0,0,0,670,671,
        5,8,0,0,671,672,3,110,55,0,672,673,5,9,0,0,673,99,1,0,0,0,674,676,
        5,3,0,0,675,677,3,66,33,0,676,675,1,0,0,0,676,677,1,0,0,0,677,678,
        1,0,0,0,678,679,5,5,0,0,679,101,1,0,0,0,680,691,5,115,0,0,681,691,
        5,116,0,0,682,691,5,114,0,0,683,691,5,119,0,0,684,691,5,120,0,0,
        685,691,3,104,52,0,686,691,3,106,53,0,687,691,3,108,54,0,688,691,
        5,117,0,0,689,691,5,118,0,0,690,680,1,0,0,0,690,681,1,0,0,0,690,
        682,1,0,0,0,690,683,1,0,0,0,690,684,1,0,0,0,690,685,1,0,0,0,690,
        686,1,0,0,0,690,687,1,0,0,0,690,688,1,0,0,0,690,689,1,0,0,0,691,
        103,1,0,0,0,692,693,7,5,0,0,693,694,5,15,0,0,694,695,5,121,0,0,695,
        105,1,0,0,0,696,697,5,111,0,0,697,698,5,15,0,0,698,699,5,123,0,0,
        699,107,1,0,0,0,700,701,5,110,0,0,701,702,5,15,0,0,702,703,5,122,
        0,0,703,109,1,0,0,0,704,705,6,55,-1,0,705,712,3,102,51,0,706,712,
        3,90,45,0,707,708,5,3,0,0,708,709,3,110,55,0,709,710,5,5,0,0,710,
        712,1,0,0,0,711,704,1,0,0,0,711,706,1,0,0,0,711,707,1,0,0,0,712,
        727,1,0,0,0,713,714,10,7,0,0,714,715,7,6,0,0,715,726,3,110,55,8,
        716,717,10,6,0,0,717,718,7,7,0,0,718,726,3,110,55,7,719,720,10,5,
        0,0,720,721,7,8,0,0,721,726,3,110,55,6,722,723,10,4,0,0,723,724,
        7,9,0,0,724,726,3,110,55,5,725,713,1,0,0,0,725,716,1,0,0,0,725,719,
        1,0,0,0,725,722,1,0,0,0,726,729,1,0,0,0,727,725,1,0,0,0,727,728,
        1,0,0,0,728,111,1,0,0,0,729,727,1,0,0,0,730,739,3,114,57,0,731,739,
        3,116,58,0,732,733,3,114,57,0,733,734,3,116,58,0,734,739,1,0,0,0,
        735,736,3,116,58,0,736,737,3,114,57,0,737,739,1,0,0,0,738,730,1,
        0,0,0,738,731,1,0,0,0,738,732,1,0,0,0,738,735,1,0,0,0,739,113,1,
        0,0,0,740,742,5,38,0,0,741,743,3,124,62,0,742,741,1,0,0,0,742,743,
        1,0,0,0,743,744,1,0,0,0,744,745,3,56,28,0,745,746,5,39,0,0,746,115,
        1,0,0,0,747,749,5,40,0,0,748,750,3,124,62,0,749,748,1,0,0,0,749,
        750,1,0,0,0,750,751,1,0,0,0,751,752,3,56,28,0,752,753,5,41,0,0,753,
        117,1,0,0,0,754,755,5,26,0,0,755,757,5,113,0,0,756,758,3,120,60,
        0,757,756,1,0,0,0,757,758,1,0,0,0,758,759,1,0,0,0,759,760,5,27,0,
        0,760,119,1,0,0,0,761,762,5,3,0,0,762,767,3,122,61,0,763,764,5,4,
        0,0,764,766,3,122,61,0,765,763,1,0,0,0,766,769,1,0,0,0,767,765,1,
        0,0,0,767,768,1,0,0,0,768,770,1,0,0,0,769,767,1,0,0,0,770,771,5,
        5,0,0,771,121,1,0,0,0,772,773,7,10,0,0,773,123,1,0,0,0,774,775,7,
        11,0,0,775,125,1,0,0,0,776,777,7,12,0,0,777,127,1,0,0,0,87,134,136,
        140,144,150,157,161,166,171,178,182,187,193,198,205,209,214,223,
        230,234,239,244,247,252,259,263,267,272,278,282,287,294,301,306,
        316,321,331,336,346,351,359,367,372,376,383,391,400,411,420,426,
        432,438,445,452,458,466,484,488,493,497,501,511,513,517,526,540,
        557,564,577,582,592,596,605,633,653,660,666,676,690,711,725,727,
        738,742,749,757,767
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!StructuredTextParser.__ATN) {
            StructuredTextParser.__ATN = new antlr.ATNDeserializer().deserialize(StructuredTextParser._serializedATN);
        }

        return StructuredTextParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(StructuredTextParser.literalNames, StructuredTextParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return StructuredTextParser.vocabulary;
    }

    private static readonly decisionsToDFA = StructuredTextParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class CompilationUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public program(): ProgramContext[];
    public program(i: number): ProgramContext | null;
    public program(i?: number): ProgramContext[] | ProgramContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ProgramContext);
        }

        return this.getRuleContext(i, ProgramContext);
    }
    public functionBlock(): FunctionBlockContext[];
    public functionBlock(i: number): FunctionBlockContext | null;
    public functionBlock(i?: number): FunctionBlockContext[] | FunctionBlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionBlockContext);
        }

        return this.getRuleContext(i, FunctionBlockContext);
    }
    public function_(): FunctionContext[];
    public function_(i: number): FunctionContext | null;
    public function_(i?: number): FunctionContext[] | FunctionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionContext);
        }

        return this.getRuleContext(i, FunctionContext);
    }
    public interface_(): InterfaceContext[];
    public interface_(i: number): InterfaceContext | null;
    public interface_(i?: number): InterfaceContext[] | InterfaceContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceContext);
        }

        return this.getRuleContext(i, InterfaceContext);
    }
    public varGlobalSection(): VarGlobalSectionContext[];
    public varGlobalSection(i: number): VarGlobalSectionContext | null;
    public varGlobalSection(i?: number): VarGlobalSectionContext[] | VarGlobalSectionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarGlobalSectionContext);
        }

        return this.getRuleContext(i, VarGlobalSectionContext);
    }
    public dutDecl(): DutDeclContext[];
    public dutDecl(i: number): DutDeclContext | null;
    public dutDecl(i?: number): DutDeclContext[] | DutDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DutDeclContext);
        }

        return this.getRuleContext(i, DutDeclContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_compilationUnit;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitCompilationUnit) {
            return visitor.visitCompilationUnit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROGRAM(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.PROGRAM, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public statementSection(): StatementSectionContext {
        return this.getRuleContext(0, StatementSectionContext)!;
    }
    public END_PROGRAM(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_PROGRAM, 0)!;
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
    }
    public accessModifier(): AccessModifierContext | null {
        return this.getRuleContext(0, AccessModifierContext);
    }
    public varDeclSection(): VarDeclSectionContext[];
    public varDeclSection(i: number): VarDeclSectionContext | null;
    public varDeclSection(i?: number): VarDeclSectionContext[] | VarDeclSectionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarDeclSectionContext);
        }

        return this.getRuleContext(i, VarDeclSectionContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_program;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FUNCTION(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.FUNCTION, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public statementSection(): StatementSectionContext {
        return this.getRuleContext(0, StatementSectionContext)!;
    }
    public END_FUNCTION(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_FUNCTION, 0)!;
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
    }
    public accessModifier(): AccessModifierContext | null {
        return this.getRuleContext(0, AccessModifierContext);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public varDeclSection(): VarDeclSectionContext[];
    public varDeclSection(i: number): VarDeclSectionContext | null;
    public varDeclSection(i?: number): VarDeclSectionContext[] | VarDeclSectionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarDeclSectionContext);
        }

        return this.getRuleContext(i, VarDeclSectionContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_function;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MethodContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public METHOD(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.METHOD, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public statementSection(): StatementSectionContext {
        return this.getRuleContext(0, StatementSectionContext)!;
    }
    public END_METHOD(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_METHOD, 0)!;
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
    }
    public accessModifier(): AccessModifierContext | null {
        return this.getRuleContext(0, AccessModifierContext);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public varDeclSection(): VarDeclSectionContext[];
    public varDeclSection(i: number): VarDeclSectionContext | null;
    public varDeclSection(i?: number): VarDeclSectionContext[] | VarDeclSectionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarDeclSectionContext);
        }

        return this.getRuleContext(i, VarDeclSectionContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_method;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitMethod) {
            return visitor.visitMethod(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROPERTY(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.PROPERTY, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public propertyBody(): PropertyBodyContext {
        return this.getRuleContext(0, PropertyBodyContext)!;
    }
    public END_PROPERTY(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_PROPERTY, 0)!;
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
    }
    public accessModifier(): AccessModifierContext | null {
        return this.getRuleContext(0, AccessModifierContext);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public varDeclSection(): VarDeclSectionContext[];
    public varDeclSection(i: number): VarDeclSectionContext | null;
    public varDeclSection(i?: number): VarDeclSectionContext[] | VarDeclSectionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarDeclSectionContext);
        }

        return this.getRuleContext(i, VarDeclSectionContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_property;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FUNCTION_BLOCK(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.FUNCTION_BLOCK, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public statementSection(): StatementSectionContext {
        return this.getRuleContext(0, StatementSectionContext)!;
    }
    public END_FUNCTION_BLOCK(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_FUNCTION_BLOCK, 0)!;
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
    }
    public accessModifier(): AccessModifierContext | null {
        return this.getRuleContext(0, AccessModifierContext);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public extendsClause(): ExtendsClauseContext | null {
        return this.getRuleContext(0, ExtendsClauseContext);
    }
    public implementsClause(): ImplementsClauseContext | null {
        return this.getRuleContext(0, ImplementsClauseContext);
    }
    public member(): MemberContext[];
    public member(i: number): MemberContext | null;
    public member(i?: number): MemberContext[] | MemberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MemberContext);
        }

        return this.getRuleContext(i, MemberContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_functionBlock;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitFunctionBlock) {
            return visitor.visitFunctionBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InterfaceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTERFACE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.INTERFACE, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public END_INTERFACE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_INTERFACE, 0)!;
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
    }
    public accessModifier(): AccessModifierContext | null {
        return this.getRuleContext(0, AccessModifierContext);
    }
    public extendsClause(): ExtendsClauseContext | null {
        return this.getRuleContext(0, ExtendsClauseContext);
    }
    public member(): MemberContext[];
    public member(i: number): MemberContext | null;
    public member(i?: number): MemberContext[] | MemberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MemberContext);
        }

        return this.getRuleContext(i, MemberContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_interface;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitInterface) {
            return visitor.visitInterface(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VarGlobalSectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VAR_GLOBAL(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.VAR_GLOBAL, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public END_VAR(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_VAR, 0)!;
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
    }
    public accessModifier(): AccessModifierContext | null {
        return this.getRuleContext(0, AccessModifierContext);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public varDecl(): VarDeclContext[];
    public varDecl(i: number): VarDeclContext | null;
    public varDecl(i?: number): VarDeclContext[] | VarDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarDeclContext);
        }

        return this.getRuleContext(i, VarDeclContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_varGlobalSection;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitVarGlobalSection) {
            return visitor.visitVarGlobalSection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DutDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.TYPE, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public enumDecl(): EnumDeclContext | null {
        return this.getRuleContext(0, EnumDeclContext);
    }
    public END_TYPE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_TYPE, 0)!;
    }
    public attribute(): AttributeContext[];
    public attribute(i: number): AttributeContext | null;
    public attribute(i?: number): AttributeContext[] | AttributeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AttributeContext);
        }

        return this.getRuleContext(i, AttributeContext);
    }
    public accessModifier(): AccessModifierContext | null {
        return this.getRuleContext(0, AccessModifierContext);
    }
    public structDecl(): StructDeclContext | null {
        return this.getRuleContext(0, StructDeclContext);
    }
    public unionDecl(): UnionDeclContext | null {
        return this.getRuleContext(0, UnionDeclContext);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_dutDecl;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitDutDecl) {
            return visitor.visitDutDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumMember(): EnumMemberContext[];
    public enumMember(i: number): EnumMemberContext | null;
    public enumMember(i?: number): EnumMemberContext[] | EnumMemberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumMemberContext);
        }

        return this.getRuleContext(i, EnumMemberContext);
    }
    public enumType(): EnumTypeContext | null {
        return this.getRuleContext(0, EnumTypeContext);
    }
    public initialValue(): InitialValueContext | null {
        return this.getRuleContext(0, InitialValueContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_enumDecl;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitEnumDecl) {
            return visitor.visitEnumDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumMemberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_enumMember;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitEnumMember) {
            return visitor.visitEnumMember(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InitialValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_initialValue;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitInitialValue) {
            return visitor.visitInitialValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StructDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRUCT(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.STRUCT, 0)!;
    }
    public END_STRUCT(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_STRUCT, 0)!;
    }
    public varDecl(): VarDeclContext[];
    public varDecl(i: number): VarDeclContext | null;
    public varDecl(i?: number): VarDeclContext[] | VarDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarDeclContext);
        }

        return this.getRuleContext(i, VarDeclContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_structDecl;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitStructDecl) {
            return visitor.visitStructDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnionDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNION(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.UNION, 0)!;
    }
    public END_UNION(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_UNION, 0)!;
    }
    public varDecl(): VarDeclContext[];
    public varDecl(i: number): VarDeclContext | null;
    public varDecl(i?: number): VarDeclContext[] | VarDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarDeclContext);
        }

        return this.getRuleContext(i, VarDeclContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_unionDecl;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitUnionDecl) {
            return visitor.visitUnionDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ImplementsClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IMPLEMENTS(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.IMPLEMENTS, 0)!;
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_implementsClause;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitImplementsClause) {
            return visitor.visitImplementsClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExtendsClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXTENDS(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.EXTENDS, 0)!;
    }
    public type_(): TypeContext[];
    public type_(i: number): TypeContext | null;
    public type_(i?: number): TypeContext[] | TypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }

        return this.getRuleContext(i, TypeContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_extendsClause;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitExtendsClause) {
            return visitor.visitExtendsClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MemberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public method(): MethodContext | null {
        return this.getRuleContext(0, MethodContext);
    }
    public property(): PropertyContext | null {
        return this.getRuleContext(0, PropertyContext);
    }
    public varDeclSection(): VarDeclSectionContext | null {
        return this.getRuleContext(0, VarDeclSectionContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_member;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitMember) {
            return visitor.visitMember(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VarDeclSectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public varSectionType(): VarSectionTypeContext {
        return this.getRuleContext(0, VarSectionTypeContext)!;
    }
    public END_VAR(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_VAR, 0)!;
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public varDecl(): VarDeclContext[];
    public varDecl(i: number): VarDeclContext | null;
    public varDecl(i?: number): VarDeclContext[] | VarDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarDeclContext);
        }

        return this.getRuleContext(i, VarDeclContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_varDeclSection;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitVarDeclSection) {
            return visitor.visitVarDeclSection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VarSectionTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VAR(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.VAR, 0);
    }
    public VAR_INPUT(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.VAR_INPUT, 0);
    }
    public VAR_OUTPUT(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.VAR_OUTPUT, 0);
    }
    public VAR_IN_OUT(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.VAR_IN_OUT, 0);
    }
    public VAR_TEMP(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.VAR_TEMP, 0);
    }
    public VAR_EXTERNAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.VAR_EXTERNAL, 0);
    }
    public VAR_INST(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.VAR_INST, 0);
    }
    public VAR_STAT(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.VAR_STAT, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_varSectionType;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitVarSectionType) {
            return visitor.visitVarSectionType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VarDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
    }
    public exprOrArrayInit(): ExprOrArrayInitContext | null {
        return this.getRuleContext(0, ExprOrArrayInitContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_varDecl;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitVarDecl) {
            return visitor.visitVarDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprOrArrayInitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public arrayInit(): ArrayInitContext | null {
        return this.getRuleContext(0, ArrayInitContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_exprOrArrayInit;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitExprOrArrayInit) {
            return visitor.visitExprOrArrayInit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayInitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_arrayInit;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitArrayInit) {
            return visitor.visitArrayInit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeId(): TypeIdContext | null {
        return this.getRuleContext(0, TypeIdContext);
    }
    public ARRAY(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ARRAY, 0);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode[];
    public INTEGER_LITERAL(i: number): antlr.TerminalNode | null;
    public INTEGER_LITERAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(StructuredTextParser.INTEGER_LITERAL);
    	} else {
    		return this.getToken(StructuredTextParser.INTEGER_LITERAL, i);
    	}
    }
    public OF(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.OF, 0);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public POINTER_TO(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.POINTER_TO, 0);
    }
    public REFERENCE_TO(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.REFERENCE_TO, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_type;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitType) {
            return visitor.visitType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeIdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public builtinType(): BuiltinTypeContext | null {
        return this.getRuleContext(0, BuiltinTypeContext);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ID, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_typeId;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitTypeId) {
            return visitor.visitTypeId(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BuiltinTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOGICAL_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.LOGICAL_TYPE, 0);
    }
    public BITFIELD_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.BITFIELD_TYPE, 0);
    }
    public SUBRANGE_PARAM(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.SUBRANGE_PARAM, 0);
    }
    public UNSIGNED_INT_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.UNSIGNED_INT_TYPE, 0);
    }
    public SIGNED_INT_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.SIGNED_INT_TYPE, 0);
    }
    public X_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.X_TYPE, 0);
    }
    public FLOATING_POINT_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.FLOATING_POINT_TYPE, 0);
    }
    public TIME_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.TIME_TYPE, 0);
    }
    public DATE_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.DATE_TYPE, 0);
    }
    public TIME_OF_DAY_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.TIME_OF_DAY_TYPE, 0);
    }
    public DATE_AND_TIME_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.DATE_AND_TIME_TYPE, 0);
    }
    public STRING_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.STRING_TYPE, 0);
    }
    public STRING_LEN_PARAM(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.STRING_LEN_PARAM, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_builtinType;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitBuiltinType) {
            return visitor.visitBuiltinType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumTypeContext extends antlr.ParserRuleContext {
    public _enumTypeId?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BITFIELD_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.BITFIELD_TYPE, 0);
    }
    public UNSIGNED_INT_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.UNSIGNED_INT_TYPE, 0);
    }
    public SIGNED_INT_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.SIGNED_INT_TYPE, 0);
    }
    public X_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.X_TYPE, 0);
    }
    public SUBRANGE_PARAM(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.SUBRANGE_PARAM, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_enumType;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitEnumType) {
            return visitor.visitEnumType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SignedEnumTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_signedEnumType;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitSignedEnumType) {
            return visitor.visitSignedEnumType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BitfieldEnumTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_bitfieldEnumType;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitBitfieldEnumType) {
            return visitor.visitBitfieldEnumType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementSectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_statementSection;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitStatementSection) {
            return visitor.visitStatementSection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public assignment(): AssignmentContext | null {
        return this.getRuleContext(0, AssignmentContext);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public caseStatement(): CaseStatementContext | null {
        return this.getRuleContext(0, CaseStatementContext);
    }
    public whileStatement(): WhileStatementContext | null {
        return this.getRuleContext(0, WhileStatementContext);
    }
    public repeatStatement(): RepeatStatementContext | null {
        return this.getRuleContext(0, RepeatStatementContext);
    }
    public forStatement(): ForStatementContext | null {
        return this.getRuleContext(0, ForStatementContext);
    }
    public callStatement(): CallStatementContext | null {
        return this.getRuleContext(0, CallStatementContext);
    }
    public returnStatement(): ReturnStatementContext | null {
        return this.getRuleContext(0, ReturnStatementContext);
    }
    public exitStatement(): ExitStatementContext | null {
        return this.getRuleContext(0, ExitStatementContext);
    }
    public continueStatement(): ContinueStatementContext | null {
        return this.getRuleContext(0, ContinueStatementContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_statement;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public memberExpression(): MemberExpressionContext {
        return this.getRuleContext(0, MemberExpressionContext)!;
    }
    public assignmentOperator(): AssignmentOperatorContext {
        return this.getRuleContext(0, AssignmentOperatorContext)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_assignment;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_assignmentOperator;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitAssignmentOperator) {
            return visitor.visitAssignmentOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CallStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public memberExpression(): MemberExpressionContext {
        return this.getRuleContext(0, MemberExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_callStatement;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitCallStatement) {
            return visitor.visitCallStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public argument(): ArgumentContext[];
    public argument(i: number): ArgumentContext | null;
    public argument(i?: number): ArgumentContext[] | ArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }

        return this.getRuleContext(i, ArgumentContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_argumentList;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitArgumentList) {
            return visitor.visitArgumentList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ID, 0);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_argument;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitArgument) {
            return visitor.visitArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.IF, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public THEN(): antlr.TerminalNode[];
    public THEN(i: number): antlr.TerminalNode | null;
    public THEN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(StructuredTextParser.THEN);
    	} else {
    		return this.getToken(StructuredTextParser.THEN, i);
    	}
    }
    public statementSection(): StatementSectionContext[];
    public statementSection(i: number): StatementSectionContext | null;
    public statementSection(i?: number): StatementSectionContext[] | StatementSectionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementSectionContext);
        }

        return this.getRuleContext(i, StatementSectionContext);
    }
    public END_IF(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_IF, 0)!;
    }
    public ELSIF(): antlr.TerminalNode[];
    public ELSIF(i: number): antlr.TerminalNode | null;
    public ELSIF(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(StructuredTextParser.ELSIF);
    	} else {
    		return this.getToken(StructuredTextParser.ELSIF, i);
    	}
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ELSE, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_ifStatement;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CaseStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CASE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.CASE, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public OF(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.OF, 0)!;
    }
    public END_CASE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_CASE, 0)!;
    }
    public caseElement(): CaseElementContext[];
    public caseElement(i: number): CaseElementContext | null;
    public caseElement(i?: number): CaseElementContext[] | CaseElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CaseElementContext);
        }

        return this.getRuleContext(i, CaseElementContext);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ELSE, 0);
    }
    public statementSection(): StatementSectionContext | null {
        return this.getRuleContext(0, StatementSectionContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_caseStatement;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitCaseStatement) {
            return visitor.visitCaseStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CaseElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statementSection(): StatementSectionContext {
        return this.getRuleContext(0, StatementSectionContext)!;
    }
    public caseValue(): CaseValueContext[];
    public caseValue(i: number): CaseValueContext | null;
    public caseValue(i?: number): CaseValueContext[] | CaseValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CaseValueContext);
        }

        return this.getRuleContext(i, CaseValueContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_caseElement;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitCaseElement) {
            return visitor.visitCaseElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CaseValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BOOL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.BOOL_LITERAL, 0);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.INTEGER_LITERAL, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.STRING_LITERAL, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ID, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_caseValue;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitCaseValue) {
            return visitor.visitCaseValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHILE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.WHILE, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public DO(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.DO, 0)!;
    }
    public statementSection(): StatementSectionContext {
        return this.getRuleContext(0, StatementSectionContext)!;
    }
    public END_WHILE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_WHILE, 0)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_whileStatement;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RepeatStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public REPEAT(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.REPEAT, 0)!;
    }
    public statementSection(): StatementSectionContext {
        return this.getRuleContext(0, StatementSectionContext)!;
    }
    public UNTIL(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.UNTIL, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public END_REPEAT(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_REPEAT, 0)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_repeatStatement;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitRepeatStatement) {
            return visitor.visitRepeatStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ForStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.FOR, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.TO, 0)!;
    }
    public DO(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.DO, 0)!;
    }
    public statementSection(): StatementSectionContext {
        return this.getRuleContext(0, StatementSectionContext)!;
    }
    public END_FOR(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_FOR, 0)!;
    }
    public BY(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.BY, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_forStatement;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RETURN(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.RETURN, 0)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_returnStatement;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExitStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXIT(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.EXIT, 0)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_exitStatement;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitExitStatement) {
            return visitor.visitExitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ContinueStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CONTINUE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.CONTINUE, 0)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_continueStatement;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MemberExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public memberAccess(): MemberAccessContext[];
    public memberAccess(i: number): MemberAccessContext | null;
    public memberAccess(i?: number): MemberAccessContext[] | MemberAccessContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MemberAccessContext);
        }

        return this.getRuleContext(i, MemberAccessContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_memberExpression;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitMemberExpression) {
            return visitor.visitMemberExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MemberAccessContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public postfixOp(): PostfixOpContext[];
    public postfixOp(i: number): PostfixOpContext | null;
    public postfixOp(i?: number): PostfixOpContext[] | PostfixOpContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PostfixOpContext);
        }

        return this.getRuleContext(i, PostfixOpContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_memberAccess;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitMemberAccess) {
            return visitor.visitMemberAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PostfixOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public dereference(): DereferenceContext | null {
        return this.getRuleContext(0, DereferenceContext);
    }
    public arrayIndex(): ArrayIndexContext | null {
        return this.getRuleContext(0, ArrayIndexContext);
    }
    public call(): CallContext | null {
        return this.getRuleContext(0, CallContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_postfixOp;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitPostfixOp) {
            return visitor.visitPostfixOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DereferenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CARET(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.CARET, 0)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_dereference;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitDereference) {
            return visitor.visitDereference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayIndexContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_arrayIndex;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitArrayIndex) {
            return visitor.visitArrayIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_call;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitCall) {
            return visitor.visitCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.INTEGER_LITERAL, 0);
    }
    public REAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.REAL_LITERAL, 0);
    }
    public BOOL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.BOOL_LITERAL, 0);
    }
    public TIME_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.TIME_LITERAL, 0);
    }
    public LTIME_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.LTIME_LITERAL, 0);
    }
    public dateLiteral(): DateLiteralContext | null {
        return this.getRuleContext(0, DateLiteralContext);
    }
    public dateAndTimeLiteral(): DateAndTimeLiteralContext | null {
        return this.getRuleContext(0, DateAndTimeLiteralContext);
    }
    public timeOfDayLiteral(): TimeOfDayLiteralContext | null {
        return this.getRuleContext(0, TimeOfDayLiteralContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.STRING_LITERAL, 0);
    }
    public WSTRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.WSTRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_literal;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DateLiteralContext extends antlr.ParserRuleContext {
    public _prefix?: Token | null;
    public _date?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DATE_LITERAL(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.DATE_LITERAL, 0)!;
    }
    public DATE_TYPE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.DATE_TYPE, 0)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_dateLiteral;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitDateLiteral) {
            return visitor.visitDateLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DateAndTimeLiteralContext extends antlr.ParserRuleContext {
    public _prefix?: Token | null;
    public _dateAndTime?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DATE_AND_TIME_TYPE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.DATE_AND_TIME_TYPE, 0)!;
    }
    public DATETIME_LITERAL(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.DATETIME_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_dateAndTimeLiteral;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitDateAndTimeLiteral) {
            return visitor.visitDateAndTimeLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TimeOfDayLiteralContext extends antlr.ParserRuleContext {
    public _prefix?: Token | null;
    public _timeOfDay?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TIME_OF_DAY_TYPE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.TIME_OF_DAY_TYPE, 0)!;
    }
    public TIME_OF_DAY_LITERAL(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.TIME_OF_DAY_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_timeOfDayLiteral;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitTimeOfDayLiteral) {
            return visitor.visitTimeOfDayLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public memberExpression(): MemberExpressionContext | null {
        return this.getRuleContext(0, MemberExpressionContext);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.MOD, 0);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.AND, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.OR, 0);
    }
    public XOR(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.XOR, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_expr;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public getter(): GetterContext | null {
        return this.getRuleContext(0, GetterContext);
    }
    public setter(): SetterContext | null {
        return this.getRuleContext(0, SetterContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_propertyBody;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitPropertyBody) {
            return visitor.visitPropertyBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GET(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.GET, 0)!;
    }
    public statementSection(): StatementSectionContext {
        return this.getRuleContext(0, StatementSectionContext)!;
    }
    public END_GET(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_GET, 0)!;
    }
    public accessModifier(): AccessModifierContext | null {
        return this.getRuleContext(0, AccessModifierContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_getter;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitGetter) {
            return visitor.visitGetter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SET(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.SET, 0)!;
    }
    public statementSection(): StatementSectionContext {
        return this.getRuleContext(0, StatementSectionContext)!;
    }
    public END_SET(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_SET, 0)!;
    }
    public accessModifier(): AccessModifierContext | null {
        return this.getRuleContext(0, AccessModifierContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_setter;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitSetter) {
            return visitor.visitSetter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AttributeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public attributeArgList(): AttributeArgListContext | null {
        return this.getRuleContext(0, AttributeArgListContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_attribute;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitAttribute) {
            return visitor.visitAttribute(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AttributeArgListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public attributeArg(): AttributeArgContext[];
    public attributeArg(i: number): AttributeArgContext | null;
    public attributeArg(i?: number): AttributeArgContext[] | AttributeArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AttributeArgContext);
        }

        return this.getRuleContext(i, AttributeArgContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_attributeArgList;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitAttributeArgList) {
            return visitor.visitAttributeArgList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AttributeArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ID, 0);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.INTEGER_LITERAL, 0);
    }
    public REAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.REAL_LITERAL, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_attributeArg;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitAttributeArg) {
            return visitor.visitAttributeArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AccessModifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PUBLIC(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.PUBLIC, 0);
    }
    public PRIVATE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.PRIVATE, 0);
    }
    public PROTECTED(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.PROTECTED, 0);
    }
    public INTERNAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.INTERNAL, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_accessModifier;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitAccessModifier) {
            return visitor.visitAccessModifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ModifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ABSTRACT(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ABSTRACT, 0);
    }
    public FINAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.FINAL, 0);
    }
    public CONSTANT(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.CONSTANT, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_modifier;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitModifier) {
            return visitor.visitModifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
