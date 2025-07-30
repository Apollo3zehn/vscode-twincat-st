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
    public static readonly LOGICAL_TYPE = 100;
    public static readonly BITFIELD_TYPE = 101;
    public static readonly UNSIGNED_INT_TYPE = 102;
    public static readonly SIGNED_INT_TYPE = 103;
    public static readonly FLOATING_POINT_TYPE = 104;
    public static readonly X_TYPE = 105;
    public static readonly POINTER_TYPE = 106;
    public static readonly TIME_TYPE = 107;
    public static readonly DATE_TYPE = 108;
    public static readonly TIME_OF_DAY_TYPE = 109;
    public static readonly DATE_AND_TIME_TYPE = 110;
    public static readonly STRING_TYPE = 111;
    public static readonly SUBRANGE_PARAM = 112;
    public static readonly STRING_LEN_PARAM = 113;
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
    public static readonly ID = 124;
    public static readonly WS = 125;
    public static readonly COMMENT = 126;
    public static readonly COMMENT_BLOCK = 127;
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
        "'POINTER TO'", null, null, null, null, null, null, "'PVOID'"
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
        "CARET", "REFERENCE_TO", "POINTER_TO", "LOGICAL_TYPE", "BITFIELD_TYPE", 
        "UNSIGNED_INT_TYPE", "SIGNED_INT_TYPE", "FLOATING_POINT_TYPE", "X_TYPE", 
        "POINTER_TYPE", "TIME_TYPE", "DATE_TYPE", "TIME_OF_DAY_TYPE", "DATE_AND_TIME_TYPE", 
        "STRING_TYPE", "SUBRANGE_PARAM", "STRING_LEN_PARAM", "BOOL_LITERAL", 
        "INTEGER_LITERAL", "REAL_LITERAL", "STRING_LITERAL", "WSTRING_LITERAL", 
        "TIME_LITERAL", "LTIME_LITERAL", "DATE_LITERAL", "TIME_OF_DAY_LITERAL", 
        "DATETIME_LITERAL", "ID", "WS", "COMMENT", "COMMENT_BLOCK"
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

            this.state = 185;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0)) {
                {
                this.state = 184;
                this.modifier();
                }
            }

            this.state = 187;
            this.match(StructuredTextParser.ID);
            this.state = 190;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 188;
                this.match(StructuredTextParser.T__0);
                this.state = 189;
                this.type_();
                }
            }

            this.state = 195;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 447) !== 0)) {
                {
                {
                this.state = 192;
                this.varDeclSection();
                }
                }
                this.state = 197;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 198;
            this.statementSection();
            this.state = 199;
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
            this.state = 202;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 201;
                this.attribute();
                }
            }

            this.state = 204;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 206;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 205;
                this.accessModifier();
                }
            }

            this.state = 209;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0)) {
                {
                this.state = 208;
                this.modifier();
                }
            }

            this.state = 211;
            this.match(StructuredTextParser.ID);
            this.state = 212;
            this.match(StructuredTextParser.T__0);
            this.state = 213;
            this.type_();
            this.state = 217;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 447) !== 0)) {
                {
                {
                this.state = 214;
                this.varDeclSection();
                }
                }
                this.state = 219;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 220;
            this.propertyBody();
            this.state = 221;
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
            this.state = 224;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 223;
                this.attribute();
                }
            }

            this.state = 226;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 228;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 227;
                this.accessModifier();
                }
            }

            this.state = 231;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0)) {
                {
                this.state = 230;
                this.modifier();
                }
            }

            this.state = 233;
            this.match(StructuredTextParser.ID);
            this.state = 235;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
                {
                this.state = 234;
                this.extendsClause();
                }
            }

            this.state = 238;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 36) {
                {
                this.state = 237;
                this.implementsClause();
                }
            }

            this.state = 243;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & 29294849) !== 0) || _la === 77) {
                {
                {
                this.state = 240;
                this.member();
                }
                }
                this.state = 245;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 246;
            this.statementSection();
            this.state = 247;
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
            this.state = 250;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 249;
                this.attribute();
                }
            }

            this.state = 252;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 254;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 253;
                this.accessModifier();
                }
            }

            this.state = 256;
            this.match(StructuredTextParser.ID);
            this.state = 258;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
                {
                this.state = 257;
                this.extendsClause();
                }
            }

            this.state = 263;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & 29294849) !== 0) || _la === 77) {
                {
                {
                this.state = 260;
                this.member();
                }
                }
                this.state = 265;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 266;
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
            this.state = 269;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 268;
                this.attribute();
                }
            }

            this.state = 271;
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 273;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 272;
                this.accessModifier();
                }
            }

            this.state = 276;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0)) {
                {
                this.state = 275;
                this.modifier();
                }
            }

            this.state = 278;
            this.match(StructuredTextParser.ID);
            this.state = 282;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26 || _la === 124) {
                {
                {
                this.state = 279;
                this.varDecl();
                }
                }
                this.state = 284;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 285;
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
            this.state = 348;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 290;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 26) {
                    {
                    {
                    this.state = 287;
                    this.attribute();
                    }
                    }
                    this.state = 292;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 293;
                this.match(StructuredTextParser.TYPE);
                this.state = 295;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                    {
                    this.state = 294;
                    this.accessModifier();
                    }
                }

                this.state = 297;
                this.match(StructuredTextParser.ID);
                this.state = 298;
                this.match(StructuredTextParser.T__0);
                this.state = 299;
                this.enumDecl();
                this.state = 300;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 305;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 26) {
                    {
                    {
                    this.state = 302;
                    this.attribute();
                    }
                    }
                    this.state = 307;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 308;
                this.match(StructuredTextParser.TYPE);
                this.state = 310;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                    {
                    this.state = 309;
                    this.accessModifier();
                    }
                }

                this.state = 312;
                this.match(StructuredTextParser.ID);
                this.state = 313;
                this.match(StructuredTextParser.T__0);
                this.state = 314;
                this.structDecl();
                this.state = 315;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 320;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 26) {
                    {
                    {
                    this.state = 317;
                    this.attribute();
                    }
                    }
                    this.state = 322;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 323;
                this.match(StructuredTextParser.TYPE);
                this.state = 325;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                    {
                    this.state = 324;
                    this.accessModifier();
                    }
                }

                this.state = 327;
                this.match(StructuredTextParser.ID);
                this.state = 328;
                this.match(StructuredTextParser.T__0);
                this.state = 329;
                this.unionDecl();
                this.state = 330;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 335;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 26) {
                    {
                    {
                    this.state = 332;
                    this.attribute();
                    }
                    }
                    this.state = 337;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 338;
                this.match(StructuredTextParser.TYPE);
                this.state = 340;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                    {
                    this.state = 339;
                    this.accessModifier();
                    }
                }

                this.state = 342;
                this.match(StructuredTextParser.ID);
                this.state = 343;
                this.match(StructuredTextParser.T__0);
                this.state = 344;
                this.type_();
                this.state = 345;
                this.match(StructuredTextParser.T__1);
                this.state = 346;
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
            this.state = 350;
            this.match(StructuredTextParser.T__2);
            this.state = 351;
            this.enumMember();
            this.state = 356;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 352;
                this.match(StructuredTextParser.T__3);
                this.state = 353;
                this.enumMember();
                }
                }
                this.state = 358;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 359;
            this.match(StructuredTextParser.T__4);
            this.state = 361;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 23) !== 0)) {
                {
                this.state = 360;
                this.enumType();
                }
            }

            this.state = 365;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 363;
                this.match(StructuredTextParser.T__5);
                this.state = 364;
                this.initialValue();
                }
            }

            this.state = 367;
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
            this.state = 369;
            this.match(StructuredTextParser.ID);
            this.state = 372;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 370;
                this.match(StructuredTextParser.T__5);
                this.state = 371;
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
            this.state = 374;
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
            this.state = 376;
            this.match(StructuredTextParser.STRUCT);
            this.state = 380;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26 || _la === 124) {
                {
                {
                this.state = 377;
                this.varDecl();
                }
                }
                this.state = 382;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 383;
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
            this.state = 385;
            this.match(StructuredTextParser.UNION);
            this.state = 389;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26 || _la === 124) {
                {
                {
                this.state = 386;
                this.varDecl();
                }
                }
                this.state = 391;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 392;
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
            this.state = 394;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 395;
            this.type_();
            this.state = 400;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 396;
                this.match(StructuredTextParser.T__3);
                this.state = 397;
                this.type_();
                }
                }
                this.state = 402;
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
            this.state = 403;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 404;
            this.type_();
            this.state = 409;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 405;
                this.match(StructuredTextParser.T__3);
                this.state = 406;
                this.type_();
                }
                }
                this.state = 411;
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
            this.state = 415;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 412;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 413;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 414;
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
            this.state = 417;
            this.varSectionType();
            this.state = 419;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0)) {
                {
                this.state = 418;
                this.modifier();
                }
            }

            this.state = 424;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 26 || _la === 124) {
                {
                {
                this.state = 421;
                this.varDecl();
                }
                }
                this.state = 426;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 427;
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
            this.state = 429;
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
            this.state = 432;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 431;
                this.attribute();
                }
            }

            this.state = 434;
            this.match(StructuredTextParser.ID);
            this.state = 435;
            this.match(StructuredTextParser.T__0);
            this.state = 436;
            this.type_();
            this.state = 439;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6 || _la === 7) {
                {
                this.state = 437;
                _la = this.tokenStream.LA(1);
                if(!(_la === 6 || _la === 7)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 438;
                this.exprOrArrayInit();
                }
            }

            this.state = 441;
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
            this.state = 445;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__2:
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
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 443;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__7:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 444;
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
            this.state = 447;
            this.match(StructuredTextParser.T__7);
            this.state = 448;
            this.expr(0);
            this.state = 453;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 449;
                this.match(StructuredTextParser.T__3);
                this.state = 450;
                this.expr(0);
                }
                }
                this.state = 455;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 456;
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
            this.state = 471;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.LOGICAL_TYPE:
            case StructuredTextParser.BITFIELD_TYPE:
            case StructuredTextParser.UNSIGNED_INT_TYPE:
            case StructuredTextParser.SIGNED_INT_TYPE:
            case StructuredTextParser.FLOATING_POINT_TYPE:
            case StructuredTextParser.X_TYPE:
            case StructuredTextParser.POINTER_TYPE:
            case StructuredTextParser.TIME_TYPE:
            case StructuredTextParser.DATE_TYPE:
            case StructuredTextParser.TIME_OF_DAY_TYPE:
            case StructuredTextParser.DATE_AND_TIME_TYPE:
            case StructuredTextParser.STRING_TYPE:
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 458;
                this.typeId();
                }
                break;
            case StructuredTextParser.ARRAY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 459;
                this.match(StructuredTextParser.ARRAY);
                this.state = 460;
                this.match(StructuredTextParser.T__7);
                this.state = 461;
                this.match(StructuredTextParser.INTEGER_LITERAL);
                this.state = 462;
                this.match(StructuredTextParser.T__9);
                this.state = 463;
                this.match(StructuredTextParser.INTEGER_LITERAL);
                this.state = 464;
                this.match(StructuredTextParser.T__8);
                this.state = 465;
                this.match(StructuredTextParser.OF);
                this.state = 466;
                this.type_();
                }
                break;
            case StructuredTextParser.POINTER_TO:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 467;
                this.match(StructuredTextParser.POINTER_TO);
                this.state = 468;
                this.type_();
                }
                break;
            case StructuredTextParser.REFERENCE_TO:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 469;
                this.match(StructuredTextParser.REFERENCE_TO);
                this.state = 470;
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
            this.state = 475;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.LOGICAL_TYPE:
            case StructuredTextParser.BITFIELD_TYPE:
            case StructuredTextParser.UNSIGNED_INT_TYPE:
            case StructuredTextParser.SIGNED_INT_TYPE:
            case StructuredTextParser.FLOATING_POINT_TYPE:
            case StructuredTextParser.X_TYPE:
            case StructuredTextParser.POINTER_TYPE:
            case StructuredTextParser.TIME_TYPE:
            case StructuredTextParser.DATE_TYPE:
            case StructuredTextParser.TIME_OF_DAY_TYPE:
            case StructuredTextParser.DATE_AND_TIME_TYPE:
            case StructuredTextParser.STRING_TYPE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 473;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 474;
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
            this.state = 501;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.LOGICAL_TYPE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 477;
                this.match(StructuredTextParser.LOGICAL_TYPE);
                }
                break;
            case StructuredTextParser.BITFIELD_TYPE:
                this.enterOuterAlt(localContext, 2);
                {
                {
                this.state = 478;
                this.match(StructuredTextParser.BITFIELD_TYPE);
                this.state = 480;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 112) {
                    {
                    this.state = 479;
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
                this.state = 482;
                this.match(StructuredTextParser.UNSIGNED_INT_TYPE);
                this.state = 484;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 112) {
                    {
                    this.state = 483;
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
                this.state = 486;
                this.match(StructuredTextParser.SIGNED_INT_TYPE);
                this.state = 488;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 112) {
                    {
                    this.state = 487;
                    this.match(StructuredTextParser.SUBRANGE_PARAM);
                    }
                }

                }
                }
                break;
            case StructuredTextParser.X_TYPE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 490;
                this.match(StructuredTextParser.X_TYPE);
                }
                break;
            case StructuredTextParser.POINTER_TYPE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 491;
                this.match(StructuredTextParser.POINTER_TYPE);
                }
                break;
            case StructuredTextParser.FLOATING_POINT_TYPE:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 492;
                this.match(StructuredTextParser.FLOATING_POINT_TYPE);
                }
                break;
            case StructuredTextParser.TIME_TYPE:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 493;
                this.match(StructuredTextParser.TIME_TYPE);
                }
                break;
            case StructuredTextParser.DATE_TYPE:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 494;
                this.match(StructuredTextParser.DATE_TYPE);
                }
                break;
            case StructuredTextParser.TIME_OF_DAY_TYPE:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 495;
                this.match(StructuredTextParser.TIME_OF_DAY_TYPE);
                }
                break;
            case StructuredTextParser.DATE_AND_TIME_TYPE:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 496;
                this.match(StructuredTextParser.DATE_AND_TIME_TYPE);
                }
                break;
            case StructuredTextParser.STRING_TYPE:
                this.enterOuterAlt(localContext, 12);
                {
                {
                this.state = 497;
                this.match(StructuredTextParser.STRING_TYPE);
                this.state = 499;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 113) {
                    {
                    this.state = 498;
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
            this.state = 503;
            localContext._enumTypeId = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 23) !== 0))) {
                localContext._enumTypeId = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 505;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 112) {
                {
                this.state = 504;
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
            this.state = 514;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 64, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 511;
                    this.statement();
                    }
                    }
                }
                this.state = 516;
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
            this.state = 528;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 65, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 517;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 518;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 519;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 520;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 521;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 522;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 523;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 524;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 525;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 526;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 527;
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
            this.state = 530;
            this.memberExpression();
            this.state = 531;
            this.assignmentOperator();
            this.state = 532;
            this.expr(0);
            this.state = 533;
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
            this.state = 535;
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
            this.state = 537;
            this.memberExpression();
            this.state = 538;
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
            this.state = 540;
            this.argument();
            this.state = 545;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 541;
                this.match(StructuredTextParser.T__3);
                this.state = 542;
                this.argument();
                }
                }
                this.state = 547;
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
            this.state = 552;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 67, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 548;
                this.match(StructuredTextParser.ID);
                this.state = 549;
                _la = this.tokenStream.LA(1);
                if(!(_la === 6 || _la === 11)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 550;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 551;
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
            this.state = 554;
            this.match(StructuredTextParser.IF);
            this.state = 555;
            this.expr(0);
            this.state = 556;
            this.match(StructuredTextParser.THEN);
            this.state = 557;
            this.statementSection();
            this.state = 565;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 54) {
                {
                {
                this.state = 558;
                this.match(StructuredTextParser.ELSIF);
                this.state = 559;
                this.expr(0);
                this.state = 560;
                this.match(StructuredTextParser.THEN);
                this.state = 561;
                this.statementSection();
                }
                }
                this.state = 567;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 570;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 55) {
                {
                this.state = 568;
                this.match(StructuredTextParser.ELSE);
                this.state = 569;
                this.statementSection();
                }
            }

            this.state = 572;
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
            this.state = 574;
            this.match(StructuredTextParser.CASE);
            this.state = 575;
            this.expr(0);
            this.state = 576;
            this.match(StructuredTextParser.OF);
            this.state = 578;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 577;
                this.caseElement();
                }
                }
                this.state = 580;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & 1035) !== 0));
            this.state = 584;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 55) {
                {
                this.state = 582;
                this.match(StructuredTextParser.ELSE);
                this.state = 583;
                this.statementSection();
                }
            }

            this.state = 586;
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
            this.state = 588;
            this.caseValue();
            this.state = 593;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 589;
                this.match(StructuredTextParser.T__3);
                this.state = 590;
                this.caseValue();
                }
                }
                this.state = 595;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 596;
            this.match(StructuredTextParser.T__0);
            this.state = 597;
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
            this.state = 599;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & 1035) !== 0))) {
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
            this.state = 601;
            this.match(StructuredTextParser.WHILE);
            this.state = 602;
            this.expr(0);
            this.state = 603;
            this.match(StructuredTextParser.DO);
            this.state = 604;
            this.statementSection();
            this.state = 605;
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
            this.state = 607;
            this.match(StructuredTextParser.REPEAT);
            this.state = 608;
            this.statementSection();
            this.state = 609;
            this.match(StructuredTextParser.UNTIL);
            this.state = 610;
            this.expr(0);
            this.state = 611;
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
            this.state = 613;
            this.match(StructuredTextParser.FOR);
            this.state = 614;
            this.match(StructuredTextParser.ID);
            this.state = 615;
            this.match(StructuredTextParser.T__5);
            this.state = 616;
            this.expr(0);
            this.state = 617;
            this.match(StructuredTextParser.TO);
            this.state = 618;
            this.expr(0);
            this.state = 621;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 69) {
                {
                this.state = 619;
                this.match(StructuredTextParser.BY);
                this.state = 620;
                this.expr(0);
                }
            }

            this.state = 623;
            this.match(StructuredTextParser.DO);
            this.state = 624;
            this.statementSection();
            this.state = 625;
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
            this.state = 627;
            this.match(StructuredTextParser.RETURN);
            this.state = 628;
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
            this.state = 630;
            this.match(StructuredTextParser.EXIT);
            this.state = 631;
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
            this.state = 633;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 634;
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
            this.state = 636;
            this.memberAccess();
            this.state = 641;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 637;
                    this.match(StructuredTextParser.T__11);
                    this.state = 638;
                    this.memberAccess();
                    }
                    }
                }
                this.state = 643;
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
            this.state = 644;
            this.match(StructuredTextParser.ID);
            this.state = 648;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 75, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 645;
                    this.postfixOp();
                    }
                    }
                }
                this.state = 650;
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
            this.state = 654;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.CARET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 651;
                this.dereference();
                }
                break;
            case StructuredTextParser.T__7:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 652;
                this.arrayIndex();
                }
                break;
            case StructuredTextParser.T__2:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 653;
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
            this.state = 656;
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
            this.state = 658;
            this.match(StructuredTextParser.T__7);
            this.state = 659;
            this.expr(0);
            this.state = 660;
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
            this.state = 662;
            this.match(StructuredTextParser.T__2);
            this.state = 664;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 24584) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 73671) !== 0)) {
                {
                this.state = 663;
                this.argumentList();
                }
            }

            this.state = 666;
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
            this.state = 678;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.INTEGER_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 668;
                this.match(StructuredTextParser.INTEGER_LITERAL);
                }
                break;
            case StructuredTextParser.REAL_LITERAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 669;
                this.match(StructuredTextParser.REAL_LITERAL);
                }
                break;
            case StructuredTextParser.BOOL_LITERAL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 670;
                this.match(StructuredTextParser.BOOL_LITERAL);
                }
                break;
            case StructuredTextParser.TIME_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 671;
                this.match(StructuredTextParser.TIME_LITERAL);
                }
                break;
            case StructuredTextParser.LTIME_LITERAL:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 672;
                this.match(StructuredTextParser.LTIME_LITERAL);
                }
                break;
            case StructuredTextParser.T__12:
            case StructuredTextParser.T__13:
            case StructuredTextParser.DATE_TYPE:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 673;
                this.dateLiteral();
                }
                break;
            case StructuredTextParser.DATE_AND_TIME_TYPE:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 674;
                this.dateAndTimeLiteral();
                }
                break;
            case StructuredTextParser.TIME_OF_DAY_TYPE:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 675;
                this.timeOfDayLiteral();
                }
                break;
            case StructuredTextParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 676;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            case StructuredTextParser.WSTRING_LITERAL:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 677;
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
            this.state = 680;
            localContext._prefix = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(_la === 13 || _la === 14 || _la === 108)) {
                localContext._prefix = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 681;
            this.match(StructuredTextParser.T__14);
            this.state = 682;
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
            this.state = 684;
            localContext._prefix = this.match(StructuredTextParser.DATE_AND_TIME_TYPE);
            this.state = 685;
            this.match(StructuredTextParser.T__14);
            this.state = 686;
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
            this.state = 688;
            localContext._prefix = this.match(StructuredTextParser.TIME_OF_DAY_TYPE);
            this.state = 689;
            this.match(StructuredTextParser.T__14);
            this.state = 690;
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
            this.state = 699;
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
                this.state = 693;
                this.literal();
                }
                break;
            case StructuredTextParser.ID:
                {
                this.state = 694;
                this.memberExpression();
                }
                break;
            case StructuredTextParser.T__2:
                {
                this.state = 695;
                this.match(StructuredTextParser.T__2);
                this.state = 696;
                this.expr(0);
                this.state = 697;
                this.match(StructuredTextParser.T__4);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 715;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 81, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 713;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 701;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 702;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 16 || _la === 17 || _la === 94)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 703;
                        this.expr(8);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 704;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 705;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 18 || _la === 19)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 706;
                        this.expr(7);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 707;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 708;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 66060288) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 709;
                        this.expr(6);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 710;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 711;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 712;
                        this.expr(5);
                        }
                        break;
                    }
                    }
                }
                this.state = 717;
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
            this.state = 726;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 718;
                this.getter();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 719;
                this.setter();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 720;
                this.getter();
                this.state = 721;
                this.setter();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 723;
                this.setter();
                this.state = 724;
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
            this.state = 728;
            this.match(StructuredTextParser.GET);
            this.state = 730;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 729;
                this.accessModifier();
                }
            }

            this.state = 732;
            this.statementSection();
            this.state = 733;
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
            this.state = 735;
            this.match(StructuredTextParser.SET);
            this.state = 737;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 15) !== 0)) {
                {
                this.state = 736;
                this.accessModifier();
                }
            }

            this.state = 739;
            this.statementSection();
            this.state = 740;
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
            this.state = 742;
            this.match(StructuredTextParser.T__25);
            this.state = 743;
            this.match(StructuredTextParser.ID);
            this.state = 745;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 744;
                this.attributeArgList();
                }
            }

            this.state = 747;
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
            this.state = 749;
            this.match(StructuredTextParser.T__2);
            this.state = 750;
            this.attributeArg();
            this.state = 755;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 751;
                this.match(StructuredTextParser.T__3);
                this.state = 752;
                this.attributeArg();
                }
                }
                this.state = 757;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 758;
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
            this.state = 760;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 519) !== 0))) {
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
            this.state = 762;
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
            this.state = 764;
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
        4,1,127,767,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        3,183,8,3,1,3,3,3,186,8,3,1,3,1,3,1,3,3,3,191,8,3,1,3,5,3,194,8,
        3,10,3,12,3,197,9,3,1,3,1,3,1,3,1,4,3,4,203,8,4,1,4,1,4,3,4,207,
        8,4,1,4,3,4,210,8,4,1,4,1,4,1,4,1,4,5,4,216,8,4,10,4,12,4,219,9,
        4,1,4,1,4,1,4,1,5,3,5,225,8,5,1,5,1,5,3,5,229,8,5,1,5,3,5,232,8,
        5,1,5,1,5,3,5,236,8,5,1,5,3,5,239,8,5,1,5,5,5,242,8,5,10,5,12,5,
        245,9,5,1,5,1,5,1,5,1,6,3,6,251,8,6,1,6,1,6,3,6,255,8,6,1,6,1,6,
        3,6,259,8,6,1,6,5,6,262,8,6,10,6,12,6,265,9,6,1,6,1,6,1,7,3,7,270,
        8,7,1,7,1,7,3,7,274,8,7,1,7,3,7,277,8,7,1,7,1,7,5,7,281,8,7,10,7,
        12,7,284,9,7,1,7,1,7,1,8,5,8,289,8,8,10,8,12,8,292,9,8,1,8,1,8,3,
        8,296,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,304,8,8,10,8,12,8,307,9,8,
        1,8,1,8,3,8,311,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,319,8,8,10,8,12,
        8,322,9,8,1,8,1,8,3,8,326,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,334,8,
        8,10,8,12,8,337,9,8,1,8,1,8,3,8,341,8,8,1,8,1,8,1,8,1,8,1,8,1,8,
        3,8,349,8,8,1,9,1,9,1,9,1,9,5,9,355,8,9,10,9,12,9,358,9,9,1,9,1,
        9,3,9,362,8,9,1,9,1,9,3,9,366,8,9,1,9,1,9,1,10,1,10,1,10,3,10,373,
        8,10,1,11,1,11,1,12,1,12,5,12,379,8,12,10,12,12,12,382,9,12,1,12,
        1,12,1,13,1,13,5,13,388,8,13,10,13,12,13,391,9,13,1,13,1,13,1,14,
        1,14,1,14,1,14,5,14,399,8,14,10,14,12,14,402,9,14,1,15,1,15,1,15,
        1,15,5,15,408,8,15,10,15,12,15,411,9,15,1,16,1,16,1,16,3,16,416,
        8,16,1,17,1,17,3,17,420,8,17,1,17,5,17,423,8,17,10,17,12,17,426,
        9,17,1,17,1,17,1,18,1,18,1,19,3,19,433,8,19,1,19,1,19,1,19,1,19,
        1,19,3,19,440,8,19,1,19,1,19,1,20,1,20,3,20,446,8,20,1,21,1,21,1,
        21,1,21,5,21,452,8,21,10,21,12,21,455,9,21,1,21,1,21,1,22,1,22,1,
        22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,472,8,
        22,1,23,1,23,3,23,476,8,23,1,24,1,24,1,24,3,24,481,8,24,1,24,1,24,
        3,24,485,8,24,1,24,1,24,3,24,489,8,24,1,24,1,24,1,24,1,24,1,24,1,
        24,1,24,1,24,1,24,3,24,500,8,24,3,24,502,8,24,1,25,1,25,3,25,506,
        8,25,1,26,1,26,1,27,1,27,1,28,5,28,513,8,28,10,28,12,28,516,9,28,
        1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,529,
        8,29,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,32,1,32,1,32,1,33,1,33,
        1,33,5,33,544,8,33,10,33,12,33,547,9,33,1,34,1,34,1,34,1,34,3,34,
        553,8,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,5,35,564,8,
        35,10,35,12,35,567,9,35,1,35,1,35,3,35,571,8,35,1,35,1,35,1,36,1,
        36,1,36,1,36,4,36,579,8,36,11,36,12,36,580,1,36,1,36,3,36,585,8,
        36,1,36,1,36,1,37,1,37,1,37,5,37,592,8,37,10,37,12,37,595,9,37,1,
        37,1,37,1,37,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,
        40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,622,
        8,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,43,1,43,1,43,1,44,1,44,
        1,44,1,45,1,45,1,45,5,45,640,8,45,10,45,12,45,643,9,45,1,46,1,46,
        5,46,647,8,46,10,46,12,46,650,9,46,1,47,1,47,1,47,3,47,655,8,47,
        1,48,1,48,1,49,1,49,1,49,1,49,1,50,1,50,3,50,665,8,50,1,50,1,50,
        1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,3,51,679,8,51,
        1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,55,
        1,55,1,55,1,55,1,55,1,55,1,55,3,55,700,8,55,1,55,1,55,1,55,1,55,
        1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,5,55,714,8,55,10,55,12,55,
        717,9,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,3,56,727,8,56,1,
        57,1,57,3,57,731,8,57,1,57,1,57,1,57,1,58,1,58,3,58,738,8,58,1,58,
        1,58,1,58,1,59,1,59,1,59,3,59,746,8,59,1,59,1,59,1,60,1,60,1,60,
        1,60,5,60,754,8,60,10,60,12,60,757,9,60,1,60,1,60,1,61,1,61,1,62,
        1,62,1,63,1,63,1,63,0,1,110,64,0,2,4,6,8,10,12,14,16,18,20,22,24,
        26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,
        70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,
        110,112,114,116,118,120,122,124,126,0,13,2,0,42,47,49,50,1,0,6,7,
        2,0,101,103,105,105,2,0,6,6,11,11,3,0,114,115,117,117,124,124,2,
        0,13,14,108,108,2,0,16,17,94,94,1,0,18,19,1,0,20,25,1,0,74,76,2,
        0,115,117,124,124,1,0,90,93,1,0,87,89,831,0,136,1,0,0,0,2,140,1,
        0,0,0,4,157,1,0,0,0,6,178,1,0,0,0,8,202,1,0,0,0,10,224,1,0,0,0,12,
        250,1,0,0,0,14,269,1,0,0,0,16,348,1,0,0,0,18,350,1,0,0,0,20,369,
        1,0,0,0,22,374,1,0,0,0,24,376,1,0,0,0,26,385,1,0,0,0,28,394,1,0,
        0,0,30,403,1,0,0,0,32,415,1,0,0,0,34,417,1,0,0,0,36,429,1,0,0,0,
        38,432,1,0,0,0,40,445,1,0,0,0,42,447,1,0,0,0,44,471,1,0,0,0,46,475,
        1,0,0,0,48,501,1,0,0,0,50,503,1,0,0,0,52,507,1,0,0,0,54,509,1,0,
        0,0,56,514,1,0,0,0,58,528,1,0,0,0,60,530,1,0,0,0,62,535,1,0,0,0,
        64,537,1,0,0,0,66,540,1,0,0,0,68,552,1,0,0,0,70,554,1,0,0,0,72,574,
        1,0,0,0,74,588,1,0,0,0,76,599,1,0,0,0,78,601,1,0,0,0,80,607,1,0,
        0,0,82,613,1,0,0,0,84,627,1,0,0,0,86,630,1,0,0,0,88,633,1,0,0,0,
        90,636,1,0,0,0,92,644,1,0,0,0,94,654,1,0,0,0,96,656,1,0,0,0,98,658,
        1,0,0,0,100,662,1,0,0,0,102,678,1,0,0,0,104,680,1,0,0,0,106,684,
        1,0,0,0,108,688,1,0,0,0,110,699,1,0,0,0,112,726,1,0,0,0,114,728,
        1,0,0,0,116,735,1,0,0,0,118,742,1,0,0,0,120,749,1,0,0,0,122,760,
        1,0,0,0,124,762,1,0,0,0,126,764,1,0,0,0,128,135,3,2,1,0,129,135,
        3,10,5,0,130,135,3,4,2,0,131,135,3,12,6,0,132,135,3,14,7,0,133,135,
        3,16,8,0,134,128,1,0,0,0,134,129,1,0,0,0,134,130,1,0,0,0,134,131,
        1,0,0,0,134,132,1,0,0,0,134,133,1,0,0,0,135,138,1,0,0,0,136,134,
        1,0,0,0,136,137,1,0,0,0,137,1,1,0,0,0,138,136,1,0,0,0,139,141,3,
        118,59,0,140,139,1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,144,
        5,28,0,0,143,145,3,124,62,0,144,143,1,0,0,0,144,145,1,0,0,0,145,
        146,1,0,0,0,146,150,5,124,0,0,147,149,3,34,17,0,148,147,1,0,0,0,
        149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,153,1,0,0,0,
        152,150,1,0,0,0,153,154,3,56,28,0,154,155,5,29,0,0,155,3,1,0,0,0,
        156,158,3,118,59,0,157,156,1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,
        0,159,161,5,32,0,0,160,162,3,124,62,0,161,160,1,0,0,0,161,162,1,
        0,0,0,162,163,1,0,0,0,163,166,5,124,0,0,164,165,5,1,0,0,165,167,
        3,44,22,0,166,164,1,0,0,0,166,167,1,0,0,0,167,171,1,0,0,0,168,170,
        3,34,17,0,169,168,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,172,
        1,0,0,0,172,174,1,0,0,0,173,171,1,0,0,0,174,175,3,56,28,0,175,176,
        5,33,0,0,176,5,1,0,0,0,177,179,3,118,59,0,178,177,1,0,0,0,178,179,
        1,0,0,0,179,180,1,0,0,0,180,182,5,77,0,0,181,183,3,124,62,0,182,
        181,1,0,0,0,182,183,1,0,0,0,183,185,1,0,0,0,184,186,3,126,63,0,185,
        184,1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,190,5,124,0,0,188,
        189,5,1,0,0,189,191,3,44,22,0,190,188,1,0,0,0,190,191,1,0,0,0,191,
        195,1,0,0,0,192,194,3,34,17,0,193,192,1,0,0,0,194,197,1,0,0,0,195,
        193,1,0,0,0,195,196,1,0,0,0,196,198,1,0,0,0,197,195,1,0,0,0,198,
        199,3,56,28,0,199,200,5,78,0,0,200,7,1,0,0,0,201,203,3,118,59,0,
        202,201,1,0,0,0,202,203,1,0,0,0,203,204,1,0,0,0,204,206,5,34,0,0,
        205,207,3,124,62,0,206,205,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,
        0,208,210,3,126,63,0,209,208,1,0,0,0,209,210,1,0,0,0,210,211,1,0,
        0,0,211,212,5,124,0,0,212,213,5,1,0,0,213,217,3,44,22,0,214,216,
        3,34,17,0,215,214,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,
        1,0,0,0,218,220,1,0,0,0,219,217,1,0,0,0,220,221,3,112,56,0,221,222,
        5,35,0,0,222,9,1,0,0,0,223,225,3,118,59,0,224,223,1,0,0,0,224,225,
        1,0,0,0,225,226,1,0,0,0,226,228,5,30,0,0,227,229,3,124,62,0,228,
        227,1,0,0,0,228,229,1,0,0,0,229,231,1,0,0,0,230,232,3,126,63,0,231,
        230,1,0,0,0,231,232,1,0,0,0,232,233,1,0,0,0,233,235,5,124,0,0,234,
        236,3,30,15,0,235,234,1,0,0,0,235,236,1,0,0,0,236,238,1,0,0,0,237,
        239,3,28,14,0,238,237,1,0,0,0,238,239,1,0,0,0,239,243,1,0,0,0,240,
        242,3,32,16,0,241,240,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,
        244,1,0,0,0,244,246,1,0,0,0,245,243,1,0,0,0,246,247,3,56,28,0,247,
        248,5,31,0,0,248,11,1,0,0,0,249,251,3,118,59,0,250,249,1,0,0,0,250,
        251,1,0,0,0,251,252,1,0,0,0,252,254,5,79,0,0,253,255,3,124,62,0,
        254,253,1,0,0,0,254,255,1,0,0,0,255,256,1,0,0,0,256,258,5,124,0,
        0,257,259,3,30,15,0,258,257,1,0,0,0,258,259,1,0,0,0,259,263,1,0,
        0,0,260,262,3,32,16,0,261,260,1,0,0,0,262,265,1,0,0,0,263,261,1,
        0,0,0,263,264,1,0,0,0,264,266,1,0,0,0,265,263,1,0,0,0,266,267,5,
        80,0,0,267,13,1,0,0,0,268,270,3,118,59,0,269,268,1,0,0,0,269,270,
        1,0,0,0,270,271,1,0,0,0,271,273,5,48,0,0,272,274,3,124,62,0,273,
        272,1,0,0,0,273,274,1,0,0,0,274,276,1,0,0,0,275,277,3,126,63,0,276,
        275,1,0,0,0,276,277,1,0,0,0,277,278,1,0,0,0,278,282,5,124,0,0,279,
        281,3,38,19,0,280,279,1,0,0,0,281,284,1,0,0,0,282,280,1,0,0,0,282,
        283,1,0,0,0,283,285,1,0,0,0,284,282,1,0,0,0,285,286,5,51,0,0,286,
        15,1,0,0,0,287,289,3,118,59,0,288,287,1,0,0,0,289,292,1,0,0,0,290,
        288,1,0,0,0,290,291,1,0,0,0,291,293,1,0,0,0,292,290,1,0,0,0,293,
        295,5,95,0,0,294,296,3,124,62,0,295,294,1,0,0,0,295,296,1,0,0,0,
        296,297,1,0,0,0,297,298,5,124,0,0,298,299,5,1,0,0,299,300,3,18,9,
        0,300,301,5,96,0,0,301,349,1,0,0,0,302,304,3,118,59,0,303,302,1,
        0,0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,306,1,0,0,0,306,308,1,
        0,0,0,307,305,1,0,0,0,308,310,5,95,0,0,309,311,3,124,62,0,310,309,
        1,0,0,0,310,311,1,0,0,0,311,312,1,0,0,0,312,313,5,124,0,0,313,314,
        5,1,0,0,314,315,3,24,12,0,315,316,5,96,0,0,316,349,1,0,0,0,317,319,
        3,118,59,0,318,317,1,0,0,0,319,322,1,0,0,0,320,318,1,0,0,0,320,321,
        1,0,0,0,321,323,1,0,0,0,322,320,1,0,0,0,323,325,5,95,0,0,324,326,
        3,124,62,0,325,324,1,0,0,0,325,326,1,0,0,0,326,327,1,0,0,0,327,328,
        5,124,0,0,328,329,5,1,0,0,329,330,3,26,13,0,330,331,5,96,0,0,331,
        349,1,0,0,0,332,334,3,118,59,0,333,332,1,0,0,0,334,337,1,0,0,0,335,
        333,1,0,0,0,335,336,1,0,0,0,336,338,1,0,0,0,337,335,1,0,0,0,338,
        340,5,95,0,0,339,341,3,124,62,0,340,339,1,0,0,0,340,341,1,0,0,0,
        341,342,1,0,0,0,342,343,5,124,0,0,343,344,5,1,0,0,344,345,3,44,22,
        0,345,346,5,2,0,0,346,347,5,96,0,0,347,349,1,0,0,0,348,290,1,0,0,
        0,348,305,1,0,0,0,348,320,1,0,0,0,348,335,1,0,0,0,349,17,1,0,0,0,
        350,351,5,3,0,0,351,356,3,20,10,0,352,353,5,4,0,0,353,355,3,20,10,
        0,354,352,1,0,0,0,355,358,1,0,0,0,356,354,1,0,0,0,356,357,1,0,0,
        0,357,359,1,0,0,0,358,356,1,0,0,0,359,361,5,5,0,0,360,362,3,50,25,
        0,361,360,1,0,0,0,361,362,1,0,0,0,362,365,1,0,0,0,363,364,5,6,0,
        0,364,366,3,22,11,0,365,363,1,0,0,0,365,366,1,0,0,0,366,367,1,0,
        0,0,367,368,5,2,0,0,368,19,1,0,0,0,369,372,5,124,0,0,370,371,5,6,
        0,0,371,373,3,110,55,0,372,370,1,0,0,0,372,373,1,0,0,0,373,21,1,
        0,0,0,374,375,5,124,0,0,375,23,1,0,0,0,376,380,5,81,0,0,377,379,
        3,38,19,0,378,377,1,0,0,0,379,382,1,0,0,0,380,378,1,0,0,0,380,381,
        1,0,0,0,381,383,1,0,0,0,382,380,1,0,0,0,383,384,5,82,0,0,384,25,
        1,0,0,0,385,389,5,83,0,0,386,388,3,38,19,0,387,386,1,0,0,0,388,391,
        1,0,0,0,389,387,1,0,0,0,389,390,1,0,0,0,390,392,1,0,0,0,391,389,
        1,0,0,0,392,393,5,84,0,0,393,27,1,0,0,0,394,395,5,36,0,0,395,400,
        3,44,22,0,396,397,5,4,0,0,397,399,3,44,22,0,398,396,1,0,0,0,399,
        402,1,0,0,0,400,398,1,0,0,0,400,401,1,0,0,0,401,29,1,0,0,0,402,400,
        1,0,0,0,403,404,5,37,0,0,404,409,3,44,22,0,405,406,5,4,0,0,406,408,
        3,44,22,0,407,405,1,0,0,0,408,411,1,0,0,0,409,407,1,0,0,0,409,410,
        1,0,0,0,410,31,1,0,0,0,411,409,1,0,0,0,412,416,3,6,3,0,413,416,3,
        8,4,0,414,416,3,34,17,0,415,412,1,0,0,0,415,413,1,0,0,0,415,414,
        1,0,0,0,416,33,1,0,0,0,417,419,3,36,18,0,418,420,3,126,63,0,419,
        418,1,0,0,0,419,420,1,0,0,0,420,424,1,0,0,0,421,423,3,38,19,0,422,
        421,1,0,0,0,423,426,1,0,0,0,424,422,1,0,0,0,424,425,1,0,0,0,425,
        427,1,0,0,0,426,424,1,0,0,0,427,428,5,51,0,0,428,35,1,0,0,0,429,
        430,7,0,0,0,430,37,1,0,0,0,431,433,3,118,59,0,432,431,1,0,0,0,432,
        433,1,0,0,0,433,434,1,0,0,0,434,435,5,124,0,0,435,436,5,1,0,0,436,
        439,3,44,22,0,437,438,7,1,0,0,438,440,3,40,20,0,439,437,1,0,0,0,
        439,440,1,0,0,0,440,441,1,0,0,0,441,442,5,2,0,0,442,39,1,0,0,0,443,
        446,3,110,55,0,444,446,3,42,21,0,445,443,1,0,0,0,445,444,1,0,0,0,
        446,41,1,0,0,0,447,448,5,8,0,0,448,453,3,110,55,0,449,450,5,4,0,
        0,450,452,3,110,55,0,451,449,1,0,0,0,452,455,1,0,0,0,453,451,1,0,
        0,0,453,454,1,0,0,0,454,456,1,0,0,0,455,453,1,0,0,0,456,457,5,9,
        0,0,457,43,1,0,0,0,458,472,3,46,23,0,459,460,5,58,0,0,460,461,5,
        8,0,0,461,462,5,115,0,0,462,463,5,10,0,0,463,464,5,115,0,0,464,465,
        5,9,0,0,465,466,5,59,0,0,466,472,3,44,22,0,467,468,5,99,0,0,468,
        472,3,44,22,0,469,470,5,98,0,0,470,472,3,44,22,0,471,458,1,0,0,0,
        471,459,1,0,0,0,471,467,1,0,0,0,471,469,1,0,0,0,472,45,1,0,0,0,473,
        476,3,48,24,0,474,476,5,124,0,0,475,473,1,0,0,0,475,474,1,0,0,0,
        476,47,1,0,0,0,477,502,5,100,0,0,478,480,5,101,0,0,479,481,5,112,
        0,0,480,479,1,0,0,0,480,481,1,0,0,0,481,502,1,0,0,0,482,484,5,102,
        0,0,483,485,5,112,0,0,484,483,1,0,0,0,484,485,1,0,0,0,485,502,1,
        0,0,0,486,488,5,103,0,0,487,489,5,112,0,0,488,487,1,0,0,0,488,489,
        1,0,0,0,489,502,1,0,0,0,490,502,5,105,0,0,491,502,5,106,0,0,492,
        502,5,104,0,0,493,502,5,107,0,0,494,502,5,108,0,0,495,502,5,109,
        0,0,496,502,5,110,0,0,497,499,5,111,0,0,498,500,5,113,0,0,499,498,
        1,0,0,0,499,500,1,0,0,0,500,502,1,0,0,0,501,477,1,0,0,0,501,478,
        1,0,0,0,501,482,1,0,0,0,501,486,1,0,0,0,501,490,1,0,0,0,501,491,
        1,0,0,0,501,492,1,0,0,0,501,493,1,0,0,0,501,494,1,0,0,0,501,495,
        1,0,0,0,501,496,1,0,0,0,501,497,1,0,0,0,502,49,1,0,0,0,503,505,7,
        2,0,0,504,506,5,112,0,0,505,504,1,0,0,0,505,506,1,0,0,0,506,51,1,
        0,0,0,507,508,1,0,0,0,508,53,1,0,0,0,509,510,1,0,0,0,510,55,1,0,
        0,0,511,513,3,58,29,0,512,511,1,0,0,0,513,516,1,0,0,0,514,512,1,
        0,0,0,514,515,1,0,0,0,515,57,1,0,0,0,516,514,1,0,0,0,517,529,3,60,
        30,0,518,529,3,70,35,0,519,529,3,72,36,0,520,529,3,78,39,0,521,529,
        3,80,40,0,522,529,3,82,41,0,523,529,3,64,32,0,524,529,3,84,42,0,
        525,529,3,86,43,0,526,529,3,88,44,0,527,529,5,2,0,0,528,517,1,0,
        0,0,528,518,1,0,0,0,528,519,1,0,0,0,528,520,1,0,0,0,528,521,1,0,
        0,0,528,522,1,0,0,0,528,523,1,0,0,0,528,524,1,0,0,0,528,525,1,0,
        0,0,528,526,1,0,0,0,528,527,1,0,0,0,529,59,1,0,0,0,530,531,3,90,
        45,0,531,532,3,62,31,0,532,533,3,110,55,0,533,534,5,2,0,0,534,61,
        1,0,0,0,535,536,7,1,0,0,536,63,1,0,0,0,537,538,3,90,45,0,538,539,
        5,2,0,0,539,65,1,0,0,0,540,545,3,68,34,0,541,542,5,4,0,0,542,544,
        3,68,34,0,543,541,1,0,0,0,544,547,1,0,0,0,545,543,1,0,0,0,545,546,
        1,0,0,0,546,67,1,0,0,0,547,545,1,0,0,0,548,549,5,124,0,0,549,550,
        7,3,0,0,550,553,3,110,55,0,551,553,3,110,55,0,552,548,1,0,0,0,552,
        551,1,0,0,0,553,69,1,0,0,0,554,555,5,52,0,0,555,556,3,110,55,0,556,
        557,5,53,0,0,557,565,3,56,28,0,558,559,5,54,0,0,559,560,3,110,55,
        0,560,561,5,53,0,0,561,562,3,56,28,0,562,564,1,0,0,0,563,558,1,0,
        0,0,564,567,1,0,0,0,565,563,1,0,0,0,565,566,1,0,0,0,566,570,1,0,
        0,0,567,565,1,0,0,0,568,569,5,55,0,0,569,571,3,56,28,0,570,568,1,
        0,0,0,570,571,1,0,0,0,571,572,1,0,0,0,572,573,5,56,0,0,573,71,1,
        0,0,0,574,575,5,57,0,0,575,576,3,110,55,0,576,578,5,59,0,0,577,579,
        3,74,37,0,578,577,1,0,0,0,579,580,1,0,0,0,580,578,1,0,0,0,580,581,
        1,0,0,0,581,584,1,0,0,0,582,583,5,55,0,0,583,585,3,56,28,0,584,582,
        1,0,0,0,584,585,1,0,0,0,585,586,1,0,0,0,586,587,5,60,0,0,587,73,
        1,0,0,0,588,593,3,76,38,0,589,590,5,4,0,0,590,592,3,76,38,0,591,
        589,1,0,0,0,592,595,1,0,0,0,593,591,1,0,0,0,593,594,1,0,0,0,594,
        596,1,0,0,0,595,593,1,0,0,0,596,597,5,1,0,0,597,598,3,56,28,0,598,
        75,1,0,0,0,599,600,7,4,0,0,600,77,1,0,0,0,601,602,5,61,0,0,602,603,
        3,110,55,0,603,604,5,62,0,0,604,605,3,56,28,0,605,606,5,63,0,0,606,
        79,1,0,0,0,607,608,5,64,0,0,608,609,3,56,28,0,609,610,5,65,0,0,610,
        611,3,110,55,0,611,612,5,66,0,0,612,81,1,0,0,0,613,614,5,67,0,0,
        614,615,5,124,0,0,615,616,5,6,0,0,616,617,3,110,55,0,617,618,5,68,
        0,0,618,621,3,110,55,0,619,620,5,69,0,0,620,622,3,110,55,0,621,619,
        1,0,0,0,621,622,1,0,0,0,622,623,1,0,0,0,623,624,5,62,0,0,624,625,
        3,56,28,0,625,626,5,70,0,0,626,83,1,0,0,0,627,628,5,71,0,0,628,629,
        5,2,0,0,629,85,1,0,0,0,630,631,5,72,0,0,631,632,5,2,0,0,632,87,1,
        0,0,0,633,634,5,73,0,0,634,635,5,2,0,0,635,89,1,0,0,0,636,641,3,
        92,46,0,637,638,5,12,0,0,638,640,3,92,46,0,639,637,1,0,0,0,640,643,
        1,0,0,0,641,639,1,0,0,0,641,642,1,0,0,0,642,91,1,0,0,0,643,641,1,
        0,0,0,644,648,5,124,0,0,645,647,3,94,47,0,646,645,1,0,0,0,647,650,
        1,0,0,0,648,646,1,0,0,0,648,649,1,0,0,0,649,93,1,0,0,0,650,648,1,
        0,0,0,651,655,3,96,48,0,652,655,3,98,49,0,653,655,3,100,50,0,654,
        651,1,0,0,0,654,652,1,0,0,0,654,653,1,0,0,0,655,95,1,0,0,0,656,657,
        5,97,0,0,657,97,1,0,0,0,658,659,5,8,0,0,659,660,3,110,55,0,660,661,
        5,9,0,0,661,99,1,0,0,0,662,664,5,3,0,0,663,665,3,66,33,0,664,663,
        1,0,0,0,664,665,1,0,0,0,665,666,1,0,0,0,666,667,5,5,0,0,667,101,
        1,0,0,0,668,679,5,115,0,0,669,679,5,116,0,0,670,679,5,114,0,0,671,
        679,5,119,0,0,672,679,5,120,0,0,673,679,3,104,52,0,674,679,3,106,
        53,0,675,679,3,108,54,0,676,679,5,117,0,0,677,679,5,118,0,0,678,
        668,1,0,0,0,678,669,1,0,0,0,678,670,1,0,0,0,678,671,1,0,0,0,678,
        672,1,0,0,0,678,673,1,0,0,0,678,674,1,0,0,0,678,675,1,0,0,0,678,
        676,1,0,0,0,678,677,1,0,0,0,679,103,1,0,0,0,680,681,7,5,0,0,681,
        682,5,15,0,0,682,683,5,121,0,0,683,105,1,0,0,0,684,685,5,110,0,0,
        685,686,5,15,0,0,686,687,5,123,0,0,687,107,1,0,0,0,688,689,5,109,
        0,0,689,690,5,15,0,0,690,691,5,122,0,0,691,109,1,0,0,0,692,693,6,
        55,-1,0,693,700,3,102,51,0,694,700,3,90,45,0,695,696,5,3,0,0,696,
        697,3,110,55,0,697,698,5,5,0,0,698,700,1,0,0,0,699,692,1,0,0,0,699,
        694,1,0,0,0,699,695,1,0,0,0,700,715,1,0,0,0,701,702,10,7,0,0,702,
        703,7,6,0,0,703,714,3,110,55,8,704,705,10,6,0,0,705,706,7,7,0,0,
        706,714,3,110,55,7,707,708,10,5,0,0,708,709,7,8,0,0,709,714,3,110,
        55,6,710,711,10,4,0,0,711,712,7,9,0,0,712,714,3,110,55,5,713,701,
        1,0,0,0,713,704,1,0,0,0,713,707,1,0,0,0,713,710,1,0,0,0,714,717,
        1,0,0,0,715,713,1,0,0,0,715,716,1,0,0,0,716,111,1,0,0,0,717,715,
        1,0,0,0,718,727,3,114,57,0,719,727,3,116,58,0,720,721,3,114,57,0,
        721,722,3,116,58,0,722,727,1,0,0,0,723,724,3,116,58,0,724,725,3,
        114,57,0,725,727,1,0,0,0,726,718,1,0,0,0,726,719,1,0,0,0,726,720,
        1,0,0,0,726,723,1,0,0,0,727,113,1,0,0,0,728,730,5,38,0,0,729,731,
        3,124,62,0,730,729,1,0,0,0,730,731,1,0,0,0,731,732,1,0,0,0,732,733,
        3,56,28,0,733,734,5,39,0,0,734,115,1,0,0,0,735,737,5,40,0,0,736,
        738,3,124,62,0,737,736,1,0,0,0,737,738,1,0,0,0,738,739,1,0,0,0,739,
        740,3,56,28,0,740,741,5,41,0,0,741,117,1,0,0,0,742,743,5,26,0,0,
        743,745,5,124,0,0,744,746,3,120,60,0,745,744,1,0,0,0,745,746,1,0,
        0,0,746,747,1,0,0,0,747,748,5,27,0,0,748,119,1,0,0,0,749,750,5,3,
        0,0,750,755,3,122,61,0,751,752,5,4,0,0,752,754,3,122,61,0,753,751,
        1,0,0,0,754,757,1,0,0,0,755,753,1,0,0,0,755,756,1,0,0,0,756,758,
        1,0,0,0,757,755,1,0,0,0,758,759,5,5,0,0,759,121,1,0,0,0,760,761,
        7,10,0,0,761,123,1,0,0,0,762,763,7,11,0,0,763,125,1,0,0,0,764,765,
        7,12,0,0,765,127,1,0,0,0,87,134,136,140,144,150,157,161,166,171,
        178,182,185,190,195,202,206,209,217,224,228,231,235,238,243,250,
        254,258,263,269,273,276,282,290,295,305,310,320,325,335,340,348,
        356,361,365,372,380,389,400,409,415,419,424,432,439,445,453,471,
        475,480,484,488,499,501,505,514,528,545,552,565,570,580,584,593,
        621,641,648,654,664,678,699,713,715,726,730,737,745,755
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
    public modifier(): ModifierContext | null {
        return this.getRuleContext(0, ModifierContext);
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
    public modifier(): ModifierContext | null {
        return this.getRuleContext(0, ModifierContext);
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
    public modifier(): ModifierContext | null {
        return this.getRuleContext(0, ModifierContext);
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
    public modifier(): ModifierContext | null {
        return this.getRuleContext(0, ModifierContext);
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
    public modifier(): ModifierContext | null {
        return this.getRuleContext(0, ModifierContext);
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
    public POINTER_TYPE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.POINTER_TYPE, 0);
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
