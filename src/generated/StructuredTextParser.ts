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
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly T__37 = 38;
    public static readonly T__38 = 39;
    public static readonly T__39 = 40;
    public static readonly T__40 = 41;
    public static readonly T__41 = 42;
    public static readonly T__42 = 43;
    public static readonly T__43 = 44;
    public static readonly T__44 = 45;
    public static readonly T__45 = 46;
    public static readonly T__46 = 47;
    public static readonly T__47 = 48;
    public static readonly T__48 = 49;
    public static readonly T__49 = 50;
    public static readonly T__50 = 51;
    public static readonly T__51 = 52;
    public static readonly T__52 = 53;
    public static readonly T__53 = 54;
    public static readonly T__54 = 55;
    public static readonly T__55 = 56;
    public static readonly T__56 = 57;
    public static readonly PROGRAM = 58;
    public static readonly END_PROGRAM = 59;
    public static readonly FUNCTION_BLOCK = 60;
    public static readonly END_FUNCTION_BLOCK = 61;
    public static readonly FUNCTION = 62;
    public static readonly END_FUNCTION = 63;
    public static readonly PROPERTY = 64;
    public static readonly END_PROPERTY = 65;
    public static readonly IMPLEMENTS = 66;
    public static readonly EXTENDS = 67;
    public static readonly GET = 68;
    public static readonly END_GET = 69;
    public static readonly SET = 70;
    public static readonly END_SET = 71;
    public static readonly VAR = 72;
    public static readonly VAR_INPUT = 73;
    public static readonly VAR_OUTPUT = 74;
    public static readonly VAR_IN_OUT = 75;
    public static readonly VAR_TEMP = 76;
    public static readonly VAR_EXTERNAL = 77;
    public static readonly VAR_GLOBAL = 78;
    public static readonly VAR_INST = 79;
    public static readonly VAR_STAT = 80;
    public static readonly END_VAR = 81;
    public static readonly IF = 82;
    public static readonly THEN = 83;
    public static readonly ELSIF = 84;
    public static readonly ELSE = 85;
    public static readonly END_IF = 86;
    public static readonly CASE = 87;
    public static readonly ARRAY = 88;
    public static readonly OF = 89;
    public static readonly END_CASE = 90;
    public static readonly WHILE = 91;
    public static readonly DO = 92;
    public static readonly END_WHILE = 93;
    public static readonly REPEAT = 94;
    public static readonly UNTIL = 95;
    public static readonly END_REPEAT = 96;
    public static readonly FOR = 97;
    public static readonly TO = 98;
    public static readonly BY = 99;
    public static readonly END_FOR = 100;
    public static readonly RETURN = 101;
    public static readonly EXIT = 102;
    public static readonly CONTINUE = 103;
    public static readonly AND = 104;
    public static readonly OR = 105;
    public static readonly XOR = 106;
    public static readonly METHOD = 107;
    public static readonly END_METHOD = 108;
    public static readonly INTERFACE = 109;
    public static readonly END_INTERFACE = 110;
    public static readonly STRUCT = 111;
    public static readonly END_STRUCT = 112;
    public static readonly ENUM = 113;
    public static readonly END_ENUM = 114;
    public static readonly ABSTRACT = 115;
    public static readonly FINAL = 116;
    public static readonly CONSTANT = 117;
    public static readonly PUBLIC = 118;
    public static readonly PRIVATE = 119;
    public static readonly PROTECTED = 120;
    public static readonly INTERNAL = 121;
    public static readonly MOD = 122;
    public static readonly TYPE = 123;
    public static readonly END_TYPE = 124;
    public static readonly CARET = 125;
    public static readonly REFERENCE_TO = 126;
    public static readonly POINTER_TO = 127;
    public static readonly SUBRANGE_PARAM = 128;
    public static readonly STRING_LEN_PARAM = 129;
    public static readonly BOOL = 130;
    public static readonly INTEGER_NUMBER = 131;
    public static readonly REAL_NUMBER = 132;
    public static readonly STRING_LITERAL = 133;
    public static readonly WSTRING_LITERAL = 134;
    public static readonly ID = 135;
    public static readonly TIME_LITERAL = 136;
    public static readonly LTIME_LITERAL = 137;
    public static readonly DATE = 138;
    public static readonly TIME_OF_DAY = 139;
    public static readonly DATETIME = 140;
    public static readonly WS = 141;
    public static readonly COMMENT = 142;
    public static readonly COMMENT_BLOCK = 143;
    public static readonly RULE_compilationUnit = 0;
    public static readonly RULE_program = 1;
    public static readonly RULE_function = 2;
    public static readonly RULE_method = 3;
    public static readonly RULE_property = 4;
    public static readonly RULE_functionBlock = 5;
    public static readonly RULE_interface = 6;
    public static readonly RULE_varGlobalSection = 7;
    public static readonly RULE_typeDecl = 8;
    public static readonly RULE_enumDecl = 9;
    public static readonly RULE_enumMember = 10;
    public static readonly RULE_initialValue = 11;
    public static readonly RULE_structDecl = 12;
    public static readonly RULE_implementsClause = 13;
    public static readonly RULE_extendsClause = 14;
    public static readonly RULE_member = 15;
    public static readonly RULE_varDeclSection = 16;
    public static readonly RULE_varSectionType = 17;
    public static readonly RULE_varDecl = 18;
    public static readonly RULE_exprOrArrayInit = 19;
    public static readonly RULE_arrayInit = 20;
    public static readonly RULE_type = 21;
    public static readonly RULE_typeId = 22;
    public static readonly RULE_builtinType = 23;
    public static readonly RULE_statementSection = 24;
    public static readonly RULE_statement = 25;
    public static readonly RULE_assignment = 26;
    public static readonly RULE_assignmentOperator = 27;
    public static readonly RULE_callStatement = 28;
    public static readonly RULE_argumentList = 29;
    public static readonly RULE_argument = 30;
    public static readonly RULE_ifStatement = 31;
    public static readonly RULE_caseStatement = 32;
    public static readonly RULE_caseElement = 33;
    public static readonly RULE_caseValue = 34;
    public static readonly RULE_whileStatement = 35;
    public static readonly RULE_repeatStatement = 36;
    public static readonly RULE_forStatement = 37;
    public static readonly RULE_returnStatement = 38;
    public static readonly RULE_exitStatement = 39;
    public static readonly RULE_continueStatement = 40;
    public static readonly RULE_memberExpression = 41;
    public static readonly RULE_memberAccess = 42;
    public static readonly RULE_postfixOp = 43;
    public static readonly RULE_dereference = 44;
    public static readonly RULE_arrayIndex = 45;
    public static readonly RULE_call = 46;
    public static readonly RULE_literal = 47;
    public static readonly RULE_dateLiteral = 48;
    public static readonly RULE_dateAndTimeLiteral = 49;
    public static readonly RULE_timeOfDayLiteral = 50;
    public static readonly RULE_expr = 51;
    public static readonly RULE_propertyBody = 52;
    public static readonly RULE_getter = 53;
    public static readonly RULE_setter = 54;
    public static readonly RULE_attribute = 55;
    public static readonly RULE_attributeArgList = 56;
    public static readonly RULE_attributeArg = 57;
    public static readonly RULE_accessModifier = 58;
    public static readonly RULE_modifier = 59;

    public static readonly literalNames = [
        null, "':'", "';'", "'('", "','", "')'", "':='", "'REF='", "'['", 
        "']'", "'..'", "'BOOL'", "'BIT'", "'BYTE'", "'WORD'", "'DWORD'", 
        "'LWORD'", "'USINT'", "'UINT'", "'UDINT'", "'ULINT'", "'SINT'", 
        "'INT'", "'DINT'", "'LINT'", "'REAL'", "'LREAL'", "'TIME'", "'LTIME'", 
        "'DATE'", "'TIME_OF_DAY'", "'TOD'", "'DATE_AND_TIME'", "'DT'", "'LDATE'", 
        "'LTIME_OF_DAY'", "'LTOD'", "'LDATE_AND_TIME'", "'LDT'", "'STRING'", 
        "'WSTRING'", "'=>'", "'.'", "'D'", "'LD'", "'#'", "'*'", "'/'", 
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
        "'ENUM'", "'END_ENUM'", "'ABSTRACT'", "'FINAL'", "'CONSTANT'", "'PUBLIC'", 
        "'PRIVATE'", "'PROTECTED'", "'INTERNAL'", "'MOD'", "'TYPE'", "'END_TYPE'", 
        "'^'", "'REFERENCE TO'", "'POINTER TO'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, "PROGRAM", "END_PROGRAM", "FUNCTION_BLOCK", "END_FUNCTION_BLOCK", 
        "FUNCTION", "END_FUNCTION", "PROPERTY", "END_PROPERTY", "IMPLEMENTS", 
        "EXTENDS", "GET", "END_GET", "SET", "END_SET", "VAR", "VAR_INPUT", 
        "VAR_OUTPUT", "VAR_IN_OUT", "VAR_TEMP", "VAR_EXTERNAL", "VAR_GLOBAL", 
        "VAR_INST", "VAR_STAT", "END_VAR", "IF", "THEN", "ELSIF", "ELSE", 
        "END_IF", "CASE", "ARRAY", "OF", "END_CASE", "WHILE", "DO", "END_WHILE", 
        "REPEAT", "UNTIL", "END_REPEAT", "FOR", "TO", "BY", "END_FOR", "RETURN", 
        "EXIT", "CONTINUE", "AND", "OR", "XOR", "METHOD", "END_METHOD", 
        "INTERFACE", "END_INTERFACE", "STRUCT", "END_STRUCT", "ENUM", "END_ENUM", 
        "ABSTRACT", "FINAL", "CONSTANT", "PUBLIC", "PRIVATE", "PROTECTED", 
        "INTERNAL", "MOD", "TYPE", "END_TYPE", "CARET", "REFERENCE_TO", 
        "POINTER_TO", "SUBRANGE_PARAM", "STRING_LEN_PARAM", "BOOL", "INTEGER_NUMBER", 
        "REAL_NUMBER", "STRING_LITERAL", "WSTRING_LITERAL", "ID", "TIME_LITERAL", 
        "LTIME_LITERAL", "DATE", "TIME_OF_DAY", "DATETIME", "WS", "COMMENT", 
        "COMMENT_BLOCK"
    ];
    public static readonly ruleNames = [
        "compilationUnit", "program", "function", "method", "property", 
        "functionBlock", "interface", "varGlobalSection", "typeDecl", "enumDecl", 
        "enumMember", "initialValue", "structDecl", "implementsClause", 
        "extendsClause", "member", "varDeclSection", "varSectionType", "varDecl", 
        "exprOrArrayInit", "arrayInit", "type", "typeId", "builtinType", 
        "statementSection", "statement", "assignment", "assignmentOperator", 
        "callStatement", "argumentList", "argument", "ifStatement", "caseStatement", 
        "caseElement", "caseValue", "whileStatement", "repeatStatement", 
        "forStatement", "returnStatement", "exitStatement", "continueStatement", 
        "memberExpression", "memberAccess", "postfixOp", "dereference", 
        "arrayIndex", "call", "literal", "dateLiteral", "dateAndTimeLiteral", 
        "timeOfDayLiteral", "expr", "propertyBody", "getter", "setter", 
        "attribute", "attributeArgList", "attributeArg", "accessModifier", 
        "modifier",
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
            this.state = 128;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 4194389) !== 0) || _la === 109 || _la === 123) {
                {
                this.state = 126;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                case 1:
                    {
                    this.state = 120;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 121;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 122;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 123;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 124;
                    this.varGlobalSection();
                    }
                    break;
                case 6:
                    {
                    this.state = 125;
                    this.typeDecl();
                    }
                    break;
                }
                }
                this.state = 130;
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
            this.state = 132;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 131;
                this.attribute();
                }
            }

            this.state = 134;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 136;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 135;
                this.accessModifier();
                }
            }

            this.state = 138;
            this.match(StructuredTextParser.ID);
            this.state = 142;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 447) !== 0)) {
                {
                {
                this.state = 139;
                this.varDeclSection();
                }
                }
                this.state = 144;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 145;
            this.statementSection();
            this.state = 146;
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
            this.state = 149;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 148;
                this.attribute();
                }
            }

            this.state = 151;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 153;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 152;
                this.accessModifier();
                }
            }

            this.state = 155;
            this.match(StructuredTextParser.ID);
            this.state = 158;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 156;
                this.match(StructuredTextParser.T__0);
                this.state = 157;
                this.type_();
                }
            }

            this.state = 163;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 447) !== 0)) {
                {
                {
                this.state = 160;
                this.varDeclSection();
                }
                }
                this.state = 165;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 166;
            this.statementSection();
            this.state = 167;
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
            this.state = 170;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 169;
                this.attribute();
                }
            }

            this.state = 172;
            this.match(StructuredTextParser.METHOD);
            this.state = 174;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 173;
                this.accessModifier();
                }
            }

            this.state = 179;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 7) !== 0)) {
                {
                {
                this.state = 176;
                this.modifier();
                }
                }
                this.state = 181;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 182;
            this.match(StructuredTextParser.ID);
            this.state = 185;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 183;
                this.match(StructuredTextParser.T__0);
                this.state = 184;
                this.type_();
                }
            }

            this.state = 190;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 447) !== 0)) {
                {
                {
                this.state = 187;
                this.varDeclSection();
                }
                }
                this.state = 192;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 193;
            this.statementSection();
            this.state = 194;
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
            this.state = 197;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 196;
                this.attribute();
                }
            }

            this.state = 199;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 201;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 200;
                this.accessModifier();
                }
            }

            this.state = 206;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 7) !== 0)) {
                {
                {
                this.state = 203;
                this.modifier();
                }
                }
                this.state = 208;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 209;
            this.match(StructuredTextParser.ID);
            this.state = 210;
            this.match(StructuredTextParser.T__0);
            this.state = 211;
            this.type_();
            this.state = 215;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 447) !== 0)) {
                {
                {
                this.state = 212;
                this.varDeclSection();
                }
                }
                this.state = 217;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 218;
            this.propertyBody();
            this.state = 219;
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
            this.state = 222;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 221;
                this.attribute();
                }
            }

            this.state = 224;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 226;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 225;
                this.accessModifier();
                }
            }

            this.state = 231;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 7) !== 0)) {
                {
                {
                this.state = 228;
                this.modifier();
                }
                }
                this.state = 233;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 234;
            this.match(StructuredTextParser.ID);
            this.state = 236;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 67) {
                {
                this.state = 235;
                this.extendsClause();
                }
            }

            this.state = 239;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 66) {
                {
                this.state = 238;
                this.implementsClause();
                }
            }

            this.state = 244;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 29294849) !== 0) || _la === 107) {
                {
                {
                this.state = 241;
                this.member();
                }
                }
                this.state = 246;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 247;
            this.statementSection();
            this.state = 248;
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
            this.state = 251;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 250;
                this.attribute();
                }
            }

            this.state = 253;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 255;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 254;
                this.accessModifier();
                }
            }

            this.state = 257;
            this.match(StructuredTextParser.ID);
            this.state = 259;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 67) {
                {
                this.state = 258;
                this.extendsClause();
                }
            }

            this.state = 264;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 29294849) !== 0) || _la === 107) {
                {
                {
                this.state = 261;
                this.member();
                }
                }
                this.state = 266;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 267;
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
            this.state = 270;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 269;
                this.attribute();
                }
            }

            this.state = 272;
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 274;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 273;
                this.accessModifier();
                }
            }

            this.state = 279;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 7) !== 0)) {
                {
                {
                this.state = 276;
                this.modifier();
                }
                }
                this.state = 281;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 282;
            this.match(StructuredTextParser.ID);
            this.state = 284;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 283;
                this.varDecl();
                }
                }
                this.state = 286;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 56 || _la === 135);
            this.state = 288;
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
    public typeDecl(): TypeDeclContext {
        let localContext = new TypeDeclContext(this.context, this.state);
        this.enterRule(localContext, 16, StructuredTextParser.RULE_typeDecl);
        let _la: number;
        try {
            this.state = 336;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 293;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 56) {
                    {
                    {
                    this.state = 290;
                    this.attribute();
                    }
                    }
                    this.state = 295;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 296;
                this.match(StructuredTextParser.TYPE);
                this.state = 298;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                    {
                    this.state = 297;
                    this.accessModifier();
                    }
                }

                this.state = 300;
                this.match(StructuredTextParser.ID);
                this.state = 301;
                this.match(StructuredTextParser.T__0);
                this.state = 302;
                this.enumDecl();
                this.state = 303;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 308;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 56) {
                    {
                    {
                    this.state = 305;
                    this.attribute();
                    }
                    }
                    this.state = 310;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 311;
                this.match(StructuredTextParser.TYPE);
                this.state = 313;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                    {
                    this.state = 312;
                    this.accessModifier();
                    }
                }

                this.state = 315;
                this.match(StructuredTextParser.ID);
                this.state = 316;
                this.match(StructuredTextParser.T__0);
                this.state = 317;
                this.structDecl();
                this.state = 318;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 323;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 56) {
                    {
                    {
                    this.state = 320;
                    this.attribute();
                    }
                    }
                    this.state = 325;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 326;
                this.match(StructuredTextParser.TYPE);
                this.state = 328;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                    {
                    this.state = 327;
                    this.accessModifier();
                    }
                }

                this.state = 330;
                this.match(StructuredTextParser.ID);
                this.state = 331;
                this.match(StructuredTextParser.T__0);
                this.state = 332;
                this.type_();
                this.state = 333;
                this.match(StructuredTextParser.T__1);
                this.state = 334;
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
            this.state = 338;
            this.match(StructuredTextParser.T__2);
            this.state = 339;
            this.enumMember();
            this.state = 344;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 340;
                this.match(StructuredTextParser.T__3);
                this.state = 341;
                this.enumMember();
                }
                }
                this.state = 346;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 347;
            this.match(StructuredTextParser.T__4);
            this.state = 349;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 1073741823) !== 0) || _la === 88 || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 515) !== 0)) {
                {
                this.state = 348;
                this.type_();
                }
            }

            this.state = 353;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 351;
                this.match(StructuredTextParser.T__5);
                this.state = 352;
                this.initialValue();
                }
            }

            this.state = 355;
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
            this.state = 357;
            this.match(StructuredTextParser.ID);
            this.state = 360;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 358;
                this.match(StructuredTextParser.T__5);
                this.state = 359;
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
            this.state = 362;
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
            this.state = 364;
            this.match(StructuredTextParser.STRUCT);
            this.state = 368;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 56 || _la === 135) {
                {
                {
                this.state = 365;
                this.varDecl();
                }
                }
                this.state = 370;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 371;
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
    public implementsClause(): ImplementsClauseContext {
        let localContext = new ImplementsClauseContext(this.context, this.state);
        this.enterRule(localContext, 26, StructuredTextParser.RULE_implementsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 373;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 374;
            this.type_();
            this.state = 379;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 375;
                this.match(StructuredTextParser.T__3);
                this.state = 376;
                this.type_();
                }
                }
                this.state = 381;
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
        this.enterRule(localContext, 28, StructuredTextParser.RULE_extendsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 382;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 383;
            this.type_();
            this.state = 388;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 384;
                this.match(StructuredTextParser.T__3);
                this.state = 385;
                this.type_();
                }
                }
                this.state = 390;
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
        this.enterRule(localContext, 30, StructuredTextParser.RULE_member);
        try {
            this.state = 394;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 391;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 392;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 393;
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
        this.enterRule(localContext, 32, StructuredTextParser.RULE_varDeclSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 396;
            this.varSectionType();
            this.state = 400;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 7) !== 0)) {
                {
                {
                this.state = 397;
                this.modifier();
                }
                }
                this.state = 402;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 404;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 403;
                this.varDecl();
                }
                }
                this.state = 406;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 56 || _la === 135);
            this.state = 408;
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
        this.enterRule(localContext, 34, StructuredTextParser.RULE_varSectionType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 410;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 447) !== 0))) {
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
        this.enterRule(localContext, 36, StructuredTextParser.RULE_varDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 413;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 412;
                this.attribute();
                }
            }

            this.state = 415;
            this.match(StructuredTextParser.ID);
            this.state = 416;
            this.match(StructuredTextParser.T__0);
            this.state = 417;
            this.type_();
            this.state = 420;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6 || _la === 7) {
                {
                this.state = 418;
                _la = this.tokenStream.LA(1);
                if(!(_la === 6 || _la === 7)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 419;
                this.exprOrArrayInit();
                }
            }

            this.state = 422;
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
        this.enterRule(localContext, 38, StructuredTextParser.RULE_exprOrArrayInit);
        try {
            this.state = 426;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__2:
            case StructuredTextParser.T__28:
            case StructuredTextParser.T__29:
            case StructuredTextParser.T__30:
            case StructuredTextParser.T__31:
            case StructuredTextParser.T__32:
            case StructuredTextParser.T__33:
            case StructuredTextParser.T__34:
            case StructuredTextParser.T__35:
            case StructuredTextParser.T__36:
            case StructuredTextParser.T__37:
            case StructuredTextParser.T__42:
            case StructuredTextParser.T__43:
            case StructuredTextParser.BOOL:
            case StructuredTextParser.INTEGER_NUMBER:
            case StructuredTextParser.REAL_NUMBER:
            case StructuredTextParser.STRING_LITERAL:
            case StructuredTextParser.WSTRING_LITERAL:
            case StructuredTextParser.ID:
            case StructuredTextParser.TIME_LITERAL:
            case StructuredTextParser.LTIME_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 424;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__7:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 425;
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
        this.enterRule(localContext, 40, StructuredTextParser.RULE_arrayInit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 428;
            this.match(StructuredTextParser.T__7);
            this.state = 429;
            this.expr(0);
            this.state = 434;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 430;
                this.match(StructuredTextParser.T__3);
                this.state = 431;
                this.expr(0);
                }
                }
                this.state = 436;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 437;
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
        this.enterRule(localContext, 42, StructuredTextParser.RULE_type);
        try {
            this.state = 452;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__10:
            case StructuredTextParser.T__11:
            case StructuredTextParser.T__12:
            case StructuredTextParser.T__13:
            case StructuredTextParser.T__14:
            case StructuredTextParser.T__15:
            case StructuredTextParser.T__16:
            case StructuredTextParser.T__17:
            case StructuredTextParser.T__18:
            case StructuredTextParser.T__19:
            case StructuredTextParser.T__20:
            case StructuredTextParser.T__21:
            case StructuredTextParser.T__22:
            case StructuredTextParser.T__23:
            case StructuredTextParser.T__24:
            case StructuredTextParser.T__25:
            case StructuredTextParser.T__26:
            case StructuredTextParser.T__27:
            case StructuredTextParser.T__28:
            case StructuredTextParser.T__29:
            case StructuredTextParser.T__30:
            case StructuredTextParser.T__31:
            case StructuredTextParser.T__32:
            case StructuredTextParser.T__33:
            case StructuredTextParser.T__34:
            case StructuredTextParser.T__35:
            case StructuredTextParser.T__36:
            case StructuredTextParser.T__37:
            case StructuredTextParser.T__38:
            case StructuredTextParser.T__39:
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 439;
                this.typeId();
                }
                break;
            case StructuredTextParser.ARRAY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 440;
                this.match(StructuredTextParser.ARRAY);
                this.state = 441;
                this.match(StructuredTextParser.T__7);
                this.state = 442;
                this.match(StructuredTextParser.INTEGER_NUMBER);
                this.state = 443;
                this.match(StructuredTextParser.T__9);
                this.state = 444;
                this.match(StructuredTextParser.INTEGER_NUMBER);
                this.state = 445;
                this.match(StructuredTextParser.T__8);
                this.state = 446;
                this.match(StructuredTextParser.OF);
                this.state = 447;
                this.type_();
                }
                break;
            case StructuredTextParser.POINTER_TO:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 448;
                this.match(StructuredTextParser.POINTER_TO);
                this.state = 449;
                this.type_();
                }
                break;
            case StructuredTextParser.REFERENCE_TO:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 450;
                this.match(StructuredTextParser.REFERENCE_TO);
                this.state = 451;
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
        this.enterRule(localContext, 44, StructuredTextParser.RULE_typeId);
        try {
            this.state = 456;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__10:
            case StructuredTextParser.T__11:
            case StructuredTextParser.T__12:
            case StructuredTextParser.T__13:
            case StructuredTextParser.T__14:
            case StructuredTextParser.T__15:
            case StructuredTextParser.T__16:
            case StructuredTextParser.T__17:
            case StructuredTextParser.T__18:
            case StructuredTextParser.T__19:
            case StructuredTextParser.T__20:
            case StructuredTextParser.T__21:
            case StructuredTextParser.T__22:
            case StructuredTextParser.T__23:
            case StructuredTextParser.T__24:
            case StructuredTextParser.T__25:
            case StructuredTextParser.T__26:
            case StructuredTextParser.T__27:
            case StructuredTextParser.T__28:
            case StructuredTextParser.T__29:
            case StructuredTextParser.T__30:
            case StructuredTextParser.T__31:
            case StructuredTextParser.T__32:
            case StructuredTextParser.T__33:
            case StructuredTextParser.T__34:
            case StructuredTextParser.T__35:
            case StructuredTextParser.T__36:
            case StructuredTextParser.T__37:
            case StructuredTextParser.T__38:
            case StructuredTextParser.T__39:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 454;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 455;
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
        this.enterRule(localContext, 46, StructuredTextParser.RULE_builtinType);
        let _la: number;
        try {
            this.state = 490;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__10:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 458;
                this.match(StructuredTextParser.T__10);
                }
                break;
            case StructuredTextParser.T__11:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 459;
                this.match(StructuredTextParser.T__11);
                }
                break;
            case StructuredTextParser.T__12:
            case StructuredTextParser.T__13:
            case StructuredTextParser.T__14:
            case StructuredTextParser.T__15:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 460;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 122880) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 462;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 128) {
                    {
                    this.state = 461;
                    this.match(StructuredTextParser.SUBRANGE_PARAM);
                    }
                }

                }
                }
                break;
            case StructuredTextParser.T__16:
            case StructuredTextParser.T__17:
            case StructuredTextParser.T__18:
            case StructuredTextParser.T__19:
                this.enterOuterAlt(localContext, 4);
                {
                {
                this.state = 464;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1966080) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 466;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 128) {
                    {
                    this.state = 465;
                    this.match(StructuredTextParser.SUBRANGE_PARAM);
                    }
                }

                }
                }
                break;
            case StructuredTextParser.T__20:
            case StructuredTextParser.T__21:
            case StructuredTextParser.T__22:
            case StructuredTextParser.T__23:
                this.enterOuterAlt(localContext, 5);
                {
                {
                this.state = 468;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 31457280) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 470;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 128) {
                    {
                    this.state = 469;
                    this.match(StructuredTextParser.SUBRANGE_PARAM);
                    }
                }

                }
                }
                break;
            case StructuredTextParser.T__24:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 472;
                this.match(StructuredTextParser.T__24);
                }
                break;
            case StructuredTextParser.T__25:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 473;
                this.match(StructuredTextParser.T__25);
                }
                break;
            case StructuredTextParser.T__26:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 474;
                this.match(StructuredTextParser.T__26);
                }
                break;
            case StructuredTextParser.T__27:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 475;
                this.match(StructuredTextParser.T__27);
                }
                break;
            case StructuredTextParser.T__28:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 476;
                this.match(StructuredTextParser.T__28);
                }
                break;
            case StructuredTextParser.T__29:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 477;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case StructuredTextParser.T__30:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 478;
                this.match(StructuredTextParser.T__30);
                }
                break;
            case StructuredTextParser.T__31:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 479;
                this.match(StructuredTextParser.T__31);
                }
                break;
            case StructuredTextParser.T__32:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 480;
                this.match(StructuredTextParser.T__32);
                }
                break;
            case StructuredTextParser.T__33:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 481;
                this.match(StructuredTextParser.T__33);
                }
                break;
            case StructuredTextParser.T__34:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 482;
                this.match(StructuredTextParser.T__34);
                }
                break;
            case StructuredTextParser.T__35:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 483;
                this.match(StructuredTextParser.T__35);
                }
                break;
            case StructuredTextParser.T__36:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 484;
                this.match(StructuredTextParser.T__36);
                }
                break;
            case StructuredTextParser.T__37:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 485;
                this.match(StructuredTextParser.T__37);
                }
                break;
            case StructuredTextParser.T__38:
            case StructuredTextParser.T__39:
                this.enterOuterAlt(localContext, 20);
                {
                {
                this.state = 486;
                _la = this.tokenStream.LA(1);
                if(!(_la === 39 || _la === 40)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 488;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 129) {
                    {
                    this.state = 487;
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
    public statementSection(): StatementSectionContext {
        let localContext = new StatementSectionContext(this.context, this.state);
        this.enterRule(localContext, 48, StructuredTextParser.RULE_statementSection);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 495;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 492;
                    this.statement();
                    }
                    }
                }
                this.state = 497;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
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
        this.enterRule(localContext, 50, StructuredTextParser.RULE_statement);
        try {
            this.state = 509;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 498;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 499;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 500;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 501;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 502;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 503;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 504;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 505;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 506;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 507;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 508;
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
        this.enterRule(localContext, 52, StructuredTextParser.RULE_assignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 511;
            this.memberExpression();
            this.state = 512;
            this.assignmentOperator();
            this.state = 513;
            this.expr(0);
            this.state = 514;
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
        this.enterRule(localContext, 54, StructuredTextParser.RULE_assignmentOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 516;
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
        this.enterRule(localContext, 56, StructuredTextParser.RULE_callStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 518;
            this.memberExpression();
            this.state = 519;
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
        this.enterRule(localContext, 58, StructuredTextParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 521;
            this.argument();
            this.state = 526;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 522;
                this.match(StructuredTextParser.T__3);
                this.state = 523;
                this.argument();
                }
                }
                this.state = 528;
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
        this.enterRule(localContext, 60, StructuredTextParser.RULE_argument);
        let _la: number;
        try {
            this.state = 533;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 63, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 529;
                this.match(StructuredTextParser.ID);
                this.state = 530;
                _la = this.tokenStream.LA(1);
                if(!(_la === 6 || _la === 41)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 531;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 532;
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
        this.enterRule(localContext, 62, StructuredTextParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 535;
            this.match(StructuredTextParser.IF);
            this.state = 536;
            this.expr(0);
            this.state = 537;
            this.match(StructuredTextParser.THEN);
            this.state = 538;
            this.statementSection();
            this.state = 546;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 84) {
                {
                {
                this.state = 539;
                this.match(StructuredTextParser.ELSIF);
                this.state = 540;
                this.expr(0);
                this.state = 541;
                this.match(StructuredTextParser.THEN);
                this.state = 542;
                this.statementSection();
                }
                }
                this.state = 548;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 551;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 85) {
                {
                this.state = 549;
                this.match(StructuredTextParser.ELSE);
                this.state = 550;
                this.statementSection();
                }
            }

            this.state = 553;
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
        this.enterRule(localContext, 64, StructuredTextParser.RULE_caseStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 555;
            this.match(StructuredTextParser.CASE);
            this.state = 556;
            this.expr(0);
            this.state = 557;
            this.match(StructuredTextParser.OF);
            this.state = 559;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 558;
                this.caseElement();
                }
                }
                this.state = 561;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 43) !== 0));
            this.state = 565;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 85) {
                {
                this.state = 563;
                this.match(StructuredTextParser.ELSE);
                this.state = 564;
                this.statementSection();
                }
            }

            this.state = 567;
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
        this.enterRule(localContext, 66, StructuredTextParser.RULE_caseElement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 569;
            this.caseValue();
            this.state = 574;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 570;
                this.match(StructuredTextParser.T__3);
                this.state = 571;
                this.caseValue();
                }
                }
                this.state = 576;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 577;
            this.match(StructuredTextParser.T__0);
            this.state = 578;
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
        this.enterRule(localContext, 68, StructuredTextParser.RULE_caseValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 580;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 43) !== 0))) {
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
        this.enterRule(localContext, 70, StructuredTextParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 582;
            this.match(StructuredTextParser.WHILE);
            this.state = 583;
            this.expr(0);
            this.state = 584;
            this.match(StructuredTextParser.DO);
            this.state = 585;
            this.statementSection();
            this.state = 586;
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
        this.enterRule(localContext, 72, StructuredTextParser.RULE_repeatStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 588;
            this.match(StructuredTextParser.REPEAT);
            this.state = 589;
            this.statementSection();
            this.state = 590;
            this.match(StructuredTextParser.UNTIL);
            this.state = 591;
            this.expr(0);
            this.state = 592;
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
        this.enterRule(localContext, 74, StructuredTextParser.RULE_forStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 594;
            this.match(StructuredTextParser.FOR);
            this.state = 595;
            this.match(StructuredTextParser.ID);
            this.state = 596;
            this.match(StructuredTextParser.T__5);
            this.state = 597;
            this.expr(0);
            this.state = 598;
            this.match(StructuredTextParser.TO);
            this.state = 599;
            this.expr(0);
            this.state = 602;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 99) {
                {
                this.state = 600;
                this.match(StructuredTextParser.BY);
                this.state = 601;
                this.expr(0);
                }
            }

            this.state = 604;
            this.match(StructuredTextParser.DO);
            this.state = 605;
            this.statementSection();
            this.state = 606;
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
        this.enterRule(localContext, 76, StructuredTextParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 608;
            this.match(StructuredTextParser.RETURN);
            this.state = 609;
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
        this.enterRule(localContext, 78, StructuredTextParser.RULE_exitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 611;
            this.match(StructuredTextParser.EXIT);
            this.state = 612;
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
        this.enterRule(localContext, 80, StructuredTextParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 614;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 615;
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
        this.enterRule(localContext, 82, StructuredTextParser.RULE_memberExpression);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 617;
            this.memberAccess();
            this.state = 622;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 70, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 618;
                    this.match(StructuredTextParser.T__41);
                    this.state = 619;
                    this.memberAccess();
                    }
                    }
                }
                this.state = 624;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 70, this.context);
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
        this.enterRule(localContext, 84, StructuredTextParser.RULE_memberAccess);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 625;
            this.match(StructuredTextParser.ID);
            this.state = 629;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 71, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 626;
                    this.postfixOp();
                    }
                    }
                }
                this.state = 631;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 71, this.context);
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
        this.enterRule(localContext, 86, StructuredTextParser.RULE_postfixOp);
        try {
            this.state = 635;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.CARET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 632;
                this.dereference();
                }
                break;
            case StructuredTextParser.T__7:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 633;
                this.arrayIndex();
                }
                break;
            case StructuredTextParser.T__2:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 634;
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
        this.enterRule(localContext, 88, StructuredTextParser.RULE_dereference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 637;
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
        this.enterRule(localContext, 90, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 639;
            this.match(StructuredTextParser.T__7);
            this.state = 640;
            this.expr(0);
            this.state = 641;
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
        this.enterRule(localContext, 92, StructuredTextParser.RULE_call);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 643;
            this.match(StructuredTextParser.T__2);
            this.state = 645;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3758096392) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 6271) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 255) !== 0)) {
                {
                this.state = 644;
                this.argumentList();
                }
            }

            this.state = 647;
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
        this.enterRule(localContext, 94, StructuredTextParser.RULE_literal);
        try {
            this.state = 659;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.INTEGER_NUMBER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 649;
                this.match(StructuredTextParser.INTEGER_NUMBER);
                }
                break;
            case StructuredTextParser.REAL_NUMBER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 650;
                this.match(StructuredTextParser.REAL_NUMBER);
                }
                break;
            case StructuredTextParser.BOOL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 651;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case StructuredTextParser.TIME_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 652;
                this.match(StructuredTextParser.TIME_LITERAL);
                }
                break;
            case StructuredTextParser.LTIME_LITERAL:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 653;
                this.match(StructuredTextParser.LTIME_LITERAL);
                }
                break;
            case StructuredTextParser.T__28:
            case StructuredTextParser.T__33:
            case StructuredTextParser.T__42:
            case StructuredTextParser.T__43:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 654;
                this.dateLiteral();
                }
                break;
            case StructuredTextParser.T__31:
            case StructuredTextParser.T__32:
            case StructuredTextParser.T__36:
            case StructuredTextParser.T__37:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 655;
                this.dateAndTimeLiteral();
                }
                break;
            case StructuredTextParser.T__29:
            case StructuredTextParser.T__30:
            case StructuredTextParser.T__34:
            case StructuredTextParser.T__35:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 656;
                this.timeOfDayLiteral();
                }
                break;
            case StructuredTextParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 657;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            case StructuredTextParser.WSTRING_LITERAL:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 658;
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
        this.enterRule(localContext, 96, StructuredTextParser.RULE_dateLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 661;
            localContext._prefix = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 49185) !== 0))) {
                localContext._prefix = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 662;
            this.match(StructuredTextParser.T__44);
            this.state = 663;
            localContext._date = this.match(StructuredTextParser.DATE);
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
        this.enterRule(localContext, 98, StructuredTextParser.RULE_dateAndTimeLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 665;
            localContext._prefix = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 99) !== 0))) {
                localContext._prefix = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 666;
            this.match(StructuredTextParser.T__44);
            this.state = 667;
            localContext._dateAndTime = this.match(StructuredTextParser.DATETIME);
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
        this.enterRule(localContext, 100, StructuredTextParser.RULE_timeOfDayLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 669;
            localContext._prefix = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 99) !== 0))) {
                localContext._prefix = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 670;
            this.match(StructuredTextParser.T__44);
            this.state = 671;
            localContext._timeOfDay = this.match(StructuredTextParser.TIME_OF_DAY);
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
        let _startState = 102;
        this.enterRecursionRule(localContext, 102, StructuredTextParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 680;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__28:
            case StructuredTextParser.T__29:
            case StructuredTextParser.T__30:
            case StructuredTextParser.T__31:
            case StructuredTextParser.T__32:
            case StructuredTextParser.T__33:
            case StructuredTextParser.T__34:
            case StructuredTextParser.T__35:
            case StructuredTextParser.T__36:
            case StructuredTextParser.T__37:
            case StructuredTextParser.T__42:
            case StructuredTextParser.T__43:
            case StructuredTextParser.BOOL:
            case StructuredTextParser.INTEGER_NUMBER:
            case StructuredTextParser.REAL_NUMBER:
            case StructuredTextParser.STRING_LITERAL:
            case StructuredTextParser.WSTRING_LITERAL:
            case StructuredTextParser.TIME_LITERAL:
            case StructuredTextParser.LTIME_LITERAL:
                {
                this.state = 674;
                this.literal();
                }
                break;
            case StructuredTextParser.ID:
                {
                this.state = 675;
                this.memberExpression();
                }
                break;
            case StructuredTextParser.T__2:
                {
                this.state = 676;
                this.match(StructuredTextParser.T__2);
                this.state = 677;
                this.expr(0);
                this.state = 678;
                this.match(StructuredTextParser.T__4);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 696;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 77, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 694;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 682;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 683;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 46 || _la === 47 || _la === 122)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 684;
                        this.expr(8);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 685;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 686;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 48 || _la === 49)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 687;
                        this.expr(7);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 688;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 689;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & 63) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 690;
                        this.expr(6);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 691;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 692;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 693;
                        this.expr(5);
                        }
                        break;
                    }
                    }
                }
                this.state = 698;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 77, this.context);
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
        this.enterRule(localContext, 104, StructuredTextParser.RULE_propertyBody);
        try {
            this.state = 707;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 699;
                this.getter();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 700;
                this.setter();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 701;
                this.getter();
                this.state = 702;
                this.setter();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 704;
                this.setter();
                this.state = 705;
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
        this.enterRule(localContext, 106, StructuredTextParser.RULE_getter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 709;
            this.match(StructuredTextParser.GET);
            this.state = 711;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 710;
                this.accessModifier();
                }
            }

            this.state = 713;
            this.statementSection();
            this.state = 714;
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
        this.enterRule(localContext, 108, StructuredTextParser.RULE_setter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 716;
            this.match(StructuredTextParser.SET);
            this.state = 718;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 717;
                this.accessModifier();
                }
            }

            this.state = 720;
            this.statementSection();
            this.state = 721;
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
        this.enterRule(localContext, 110, StructuredTextParser.RULE_attribute);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 723;
            this.match(StructuredTextParser.T__55);
            this.state = 724;
            this.match(StructuredTextParser.ID);
            this.state = 726;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 725;
                this.attributeArgList();
                }
            }

            this.state = 728;
            this.match(StructuredTextParser.T__56);
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
        this.enterRule(localContext, 112, StructuredTextParser.RULE_attributeArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 730;
            this.match(StructuredTextParser.T__2);
            this.state = 731;
            this.attributeArg();
            this.state = 736;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 732;
                this.match(StructuredTextParser.T__3);
                this.state = 733;
                this.attributeArg();
                }
                }
                this.state = 738;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 739;
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
        this.enterRule(localContext, 114, StructuredTextParser.RULE_attributeArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 741;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 23) !== 0))) {
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
        this.enterRule(localContext, 116, StructuredTextParser.RULE_accessModifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 743;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0))) {
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
        this.enterRule(localContext, 118, StructuredTextParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 745;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 7) !== 0))) {
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
        case 51:
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
        4,1,143,748,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,1,0,1,0,1,0,1,0,1,0,1,0,5,0,127,8,0,10,0,12,0,130,9,0,1,
        1,3,1,133,8,1,1,1,1,1,3,1,137,8,1,1,1,1,1,5,1,141,8,1,10,1,12,1,
        144,9,1,1,1,1,1,1,1,1,2,3,2,150,8,2,1,2,1,2,3,2,154,8,2,1,2,1,2,
        1,2,3,2,159,8,2,1,2,5,2,162,8,2,10,2,12,2,165,9,2,1,2,1,2,1,2,1,
        3,3,3,171,8,3,1,3,1,3,3,3,175,8,3,1,3,5,3,178,8,3,10,3,12,3,181,
        9,3,1,3,1,3,1,3,3,3,186,8,3,1,3,5,3,189,8,3,10,3,12,3,192,9,3,1,
        3,1,3,1,3,1,4,3,4,198,8,4,1,4,1,4,3,4,202,8,4,1,4,5,4,205,8,4,10,
        4,12,4,208,9,4,1,4,1,4,1,4,1,4,5,4,214,8,4,10,4,12,4,217,9,4,1,4,
        1,4,1,4,1,5,3,5,223,8,5,1,5,1,5,3,5,227,8,5,1,5,5,5,230,8,5,10,5,
        12,5,233,9,5,1,5,1,5,3,5,237,8,5,1,5,3,5,240,8,5,1,5,5,5,243,8,5,
        10,5,12,5,246,9,5,1,5,1,5,1,5,1,6,3,6,252,8,6,1,6,1,6,3,6,256,8,
        6,1,6,1,6,3,6,260,8,6,1,6,5,6,263,8,6,10,6,12,6,266,9,6,1,6,1,6,
        1,7,3,7,271,8,7,1,7,1,7,3,7,275,8,7,1,7,5,7,278,8,7,10,7,12,7,281,
        9,7,1,7,1,7,4,7,285,8,7,11,7,12,7,286,1,7,1,7,1,8,5,8,292,8,8,10,
        8,12,8,295,9,8,1,8,1,8,3,8,299,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,307,
        8,8,10,8,12,8,310,9,8,1,8,1,8,3,8,314,8,8,1,8,1,8,1,8,1,8,1,8,1,
        8,5,8,322,8,8,10,8,12,8,325,9,8,1,8,1,8,3,8,329,8,8,1,8,1,8,1,8,
        1,8,1,8,1,8,3,8,337,8,8,1,9,1,9,1,9,1,9,5,9,343,8,9,10,9,12,9,346,
        9,9,1,9,1,9,3,9,350,8,9,1,9,1,9,3,9,354,8,9,1,9,1,9,1,10,1,10,1,
        10,3,10,361,8,10,1,11,1,11,1,12,1,12,5,12,367,8,12,10,12,12,12,370,
        9,12,1,12,1,12,1,13,1,13,1,13,1,13,5,13,378,8,13,10,13,12,13,381,
        9,13,1,14,1,14,1,14,1,14,5,14,387,8,14,10,14,12,14,390,9,14,1,15,
        1,15,1,15,3,15,395,8,15,1,16,1,16,5,16,399,8,16,10,16,12,16,402,
        9,16,1,16,4,16,405,8,16,11,16,12,16,406,1,16,1,16,1,17,1,17,1,18,
        3,18,414,8,18,1,18,1,18,1,18,1,18,1,18,3,18,421,8,18,1,18,1,18,1,
        19,1,19,3,19,427,8,19,1,20,1,20,1,20,1,20,5,20,433,8,20,10,20,12,
        20,436,9,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,
        21,1,21,1,21,1,21,1,21,3,21,453,8,21,1,22,1,22,3,22,457,8,22,1,23,
        1,23,1,23,1,23,3,23,463,8,23,1,23,1,23,3,23,467,8,23,1,23,1,23,3,
        23,471,8,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
        23,1,23,1,23,1,23,1,23,1,23,3,23,489,8,23,3,23,491,8,23,1,24,5,24,
        494,8,24,10,24,12,24,497,9,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
        1,25,1,25,1,25,1,25,3,25,510,8,25,1,26,1,26,1,26,1,26,1,26,1,27,
        1,27,1,28,1,28,1,28,1,29,1,29,1,29,5,29,525,8,29,10,29,12,29,528,
        9,29,1,30,1,30,1,30,1,30,3,30,534,8,30,1,31,1,31,1,31,1,31,1,31,
        1,31,1,31,1,31,1,31,5,31,545,8,31,10,31,12,31,548,9,31,1,31,1,31,
        3,31,552,8,31,1,31,1,31,1,32,1,32,1,32,1,32,4,32,560,8,32,11,32,
        12,32,561,1,32,1,32,3,32,566,8,32,1,32,1,32,1,33,1,33,1,33,5,33,
        573,8,33,10,33,12,33,576,9,33,1,33,1,33,1,33,1,34,1,34,1,35,1,35,
        1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,
        1,37,1,37,1,37,1,37,1,37,3,37,603,8,37,1,37,1,37,1,37,1,37,1,38,
        1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,40,1,41,1,41,1,41,5,41,621,
        8,41,10,41,12,41,624,9,41,1,42,1,42,5,42,628,8,42,10,42,12,42,631,
        9,42,1,43,1,43,1,43,3,43,636,8,43,1,44,1,44,1,45,1,45,1,45,1,45,
        1,46,1,46,3,46,646,8,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,
        1,47,1,47,1,47,1,47,3,47,660,8,47,1,48,1,48,1,48,1,48,1,49,1,49,
        1,49,1,49,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,1,51,
        3,51,681,8,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,
        1,51,1,51,5,51,695,8,51,10,51,12,51,698,9,51,1,52,1,52,1,52,1,52,
        1,52,1,52,1,52,1,52,3,52,708,8,52,1,53,1,53,3,53,712,8,53,1,53,1,
        53,1,53,1,54,1,54,3,54,719,8,54,1,54,1,54,1,54,1,55,1,55,1,55,3,
        55,727,8,55,1,55,1,55,1,56,1,56,1,56,1,56,5,56,735,8,56,10,56,12,
        56,738,9,56,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,59,0,1,102,
        60,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
        44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,
        88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,0,18,2,
        0,72,77,79,80,1,0,6,7,1,0,13,16,1,0,17,20,1,0,21,24,1,0,39,40,2,
        0,6,6,41,41,3,0,130,131,133,133,135,135,3,0,29,29,34,34,43,44,2,
        0,32,33,37,38,2,0,30,31,35,36,2,0,46,47,122,122,1,0,48,49,1,0,50,
        55,1,0,104,106,2,0,131,133,135,135,1,0,118,121,1,0,115,117,819,0,
        128,1,0,0,0,2,132,1,0,0,0,4,149,1,0,0,0,6,170,1,0,0,0,8,197,1,0,
        0,0,10,222,1,0,0,0,12,251,1,0,0,0,14,270,1,0,0,0,16,336,1,0,0,0,
        18,338,1,0,0,0,20,357,1,0,0,0,22,362,1,0,0,0,24,364,1,0,0,0,26,373,
        1,0,0,0,28,382,1,0,0,0,30,394,1,0,0,0,32,396,1,0,0,0,34,410,1,0,
        0,0,36,413,1,0,0,0,38,426,1,0,0,0,40,428,1,0,0,0,42,452,1,0,0,0,
        44,456,1,0,0,0,46,490,1,0,0,0,48,495,1,0,0,0,50,509,1,0,0,0,52,511,
        1,0,0,0,54,516,1,0,0,0,56,518,1,0,0,0,58,521,1,0,0,0,60,533,1,0,
        0,0,62,535,1,0,0,0,64,555,1,0,0,0,66,569,1,0,0,0,68,580,1,0,0,0,
        70,582,1,0,0,0,72,588,1,0,0,0,74,594,1,0,0,0,76,608,1,0,0,0,78,611,
        1,0,0,0,80,614,1,0,0,0,82,617,1,0,0,0,84,625,1,0,0,0,86,635,1,0,
        0,0,88,637,1,0,0,0,90,639,1,0,0,0,92,643,1,0,0,0,94,659,1,0,0,0,
        96,661,1,0,0,0,98,665,1,0,0,0,100,669,1,0,0,0,102,680,1,0,0,0,104,
        707,1,0,0,0,106,709,1,0,0,0,108,716,1,0,0,0,110,723,1,0,0,0,112,
        730,1,0,0,0,114,741,1,0,0,0,116,743,1,0,0,0,118,745,1,0,0,0,120,
        127,3,2,1,0,121,127,3,10,5,0,122,127,3,4,2,0,123,127,3,12,6,0,124,
        127,3,14,7,0,125,127,3,16,8,0,126,120,1,0,0,0,126,121,1,0,0,0,126,
        122,1,0,0,0,126,123,1,0,0,0,126,124,1,0,0,0,126,125,1,0,0,0,127,
        130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,1,1,0,0,0,130,128,
        1,0,0,0,131,133,3,110,55,0,132,131,1,0,0,0,132,133,1,0,0,0,133,134,
        1,0,0,0,134,136,5,58,0,0,135,137,3,116,58,0,136,135,1,0,0,0,136,
        137,1,0,0,0,137,138,1,0,0,0,138,142,5,135,0,0,139,141,3,32,16,0,
        140,139,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,
        143,145,1,0,0,0,144,142,1,0,0,0,145,146,3,48,24,0,146,147,5,59,0,
        0,147,3,1,0,0,0,148,150,3,110,55,0,149,148,1,0,0,0,149,150,1,0,0,
        0,150,151,1,0,0,0,151,153,5,62,0,0,152,154,3,116,58,0,153,152,1,
        0,0,0,153,154,1,0,0,0,154,155,1,0,0,0,155,158,5,135,0,0,156,157,
        5,1,0,0,157,159,3,42,21,0,158,156,1,0,0,0,158,159,1,0,0,0,159,163,
        1,0,0,0,160,162,3,32,16,0,161,160,1,0,0,0,162,165,1,0,0,0,163,161,
        1,0,0,0,163,164,1,0,0,0,164,166,1,0,0,0,165,163,1,0,0,0,166,167,
        3,48,24,0,167,168,5,63,0,0,168,5,1,0,0,0,169,171,3,110,55,0,170,
        169,1,0,0,0,170,171,1,0,0,0,171,172,1,0,0,0,172,174,5,107,0,0,173,
        175,3,116,58,0,174,173,1,0,0,0,174,175,1,0,0,0,175,179,1,0,0,0,176,
        178,3,118,59,0,177,176,1,0,0,0,178,181,1,0,0,0,179,177,1,0,0,0,179,
        180,1,0,0,0,180,182,1,0,0,0,181,179,1,0,0,0,182,185,5,135,0,0,183,
        184,5,1,0,0,184,186,3,42,21,0,185,183,1,0,0,0,185,186,1,0,0,0,186,
        190,1,0,0,0,187,189,3,32,16,0,188,187,1,0,0,0,189,192,1,0,0,0,190,
        188,1,0,0,0,190,191,1,0,0,0,191,193,1,0,0,0,192,190,1,0,0,0,193,
        194,3,48,24,0,194,195,5,108,0,0,195,7,1,0,0,0,196,198,3,110,55,0,
        197,196,1,0,0,0,197,198,1,0,0,0,198,199,1,0,0,0,199,201,5,64,0,0,
        200,202,3,116,58,0,201,200,1,0,0,0,201,202,1,0,0,0,202,206,1,0,0,
        0,203,205,3,118,59,0,204,203,1,0,0,0,205,208,1,0,0,0,206,204,1,0,
        0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,206,1,0,0,0,209,210,5,135,
        0,0,210,211,5,1,0,0,211,215,3,42,21,0,212,214,3,32,16,0,213,212,
        1,0,0,0,214,217,1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,218,
        1,0,0,0,217,215,1,0,0,0,218,219,3,104,52,0,219,220,5,65,0,0,220,
        9,1,0,0,0,221,223,3,110,55,0,222,221,1,0,0,0,222,223,1,0,0,0,223,
        224,1,0,0,0,224,226,5,60,0,0,225,227,3,116,58,0,226,225,1,0,0,0,
        226,227,1,0,0,0,227,231,1,0,0,0,228,230,3,118,59,0,229,228,1,0,0,
        0,230,233,1,0,0,0,231,229,1,0,0,0,231,232,1,0,0,0,232,234,1,0,0,
        0,233,231,1,0,0,0,234,236,5,135,0,0,235,237,3,28,14,0,236,235,1,
        0,0,0,236,237,1,0,0,0,237,239,1,0,0,0,238,240,3,26,13,0,239,238,
        1,0,0,0,239,240,1,0,0,0,240,244,1,0,0,0,241,243,3,30,15,0,242,241,
        1,0,0,0,243,246,1,0,0,0,244,242,1,0,0,0,244,245,1,0,0,0,245,247,
        1,0,0,0,246,244,1,0,0,0,247,248,3,48,24,0,248,249,5,61,0,0,249,11,
        1,0,0,0,250,252,3,110,55,0,251,250,1,0,0,0,251,252,1,0,0,0,252,253,
        1,0,0,0,253,255,5,109,0,0,254,256,3,116,58,0,255,254,1,0,0,0,255,
        256,1,0,0,0,256,257,1,0,0,0,257,259,5,135,0,0,258,260,3,28,14,0,
        259,258,1,0,0,0,259,260,1,0,0,0,260,264,1,0,0,0,261,263,3,30,15,
        0,262,261,1,0,0,0,263,266,1,0,0,0,264,262,1,0,0,0,264,265,1,0,0,
        0,265,267,1,0,0,0,266,264,1,0,0,0,267,268,5,110,0,0,268,13,1,0,0,
        0,269,271,3,110,55,0,270,269,1,0,0,0,270,271,1,0,0,0,271,272,1,0,
        0,0,272,274,5,78,0,0,273,275,3,116,58,0,274,273,1,0,0,0,274,275,
        1,0,0,0,275,279,1,0,0,0,276,278,3,118,59,0,277,276,1,0,0,0,278,281,
        1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,282,1,0,0,0,281,279,
        1,0,0,0,282,284,5,135,0,0,283,285,3,36,18,0,284,283,1,0,0,0,285,
        286,1,0,0,0,286,284,1,0,0,0,286,287,1,0,0,0,287,288,1,0,0,0,288,
        289,5,81,0,0,289,15,1,0,0,0,290,292,3,110,55,0,291,290,1,0,0,0,292,
        295,1,0,0,0,293,291,1,0,0,0,293,294,1,0,0,0,294,296,1,0,0,0,295,
        293,1,0,0,0,296,298,5,123,0,0,297,299,3,116,58,0,298,297,1,0,0,0,
        298,299,1,0,0,0,299,300,1,0,0,0,300,301,5,135,0,0,301,302,5,1,0,
        0,302,303,3,18,9,0,303,304,5,124,0,0,304,337,1,0,0,0,305,307,3,110,
        55,0,306,305,1,0,0,0,307,310,1,0,0,0,308,306,1,0,0,0,308,309,1,0,
        0,0,309,311,1,0,0,0,310,308,1,0,0,0,311,313,5,123,0,0,312,314,3,
        116,58,0,313,312,1,0,0,0,313,314,1,0,0,0,314,315,1,0,0,0,315,316,
        5,135,0,0,316,317,5,1,0,0,317,318,3,24,12,0,318,319,5,124,0,0,319,
        337,1,0,0,0,320,322,3,110,55,0,321,320,1,0,0,0,322,325,1,0,0,0,323,
        321,1,0,0,0,323,324,1,0,0,0,324,326,1,0,0,0,325,323,1,0,0,0,326,
        328,5,123,0,0,327,329,3,116,58,0,328,327,1,0,0,0,328,329,1,0,0,0,
        329,330,1,0,0,0,330,331,5,135,0,0,331,332,5,1,0,0,332,333,3,42,21,
        0,333,334,5,2,0,0,334,335,5,124,0,0,335,337,1,0,0,0,336,293,1,0,
        0,0,336,308,1,0,0,0,336,323,1,0,0,0,337,17,1,0,0,0,338,339,5,3,0,
        0,339,344,3,20,10,0,340,341,5,4,0,0,341,343,3,20,10,0,342,340,1,
        0,0,0,343,346,1,0,0,0,344,342,1,0,0,0,344,345,1,0,0,0,345,347,1,
        0,0,0,346,344,1,0,0,0,347,349,5,5,0,0,348,350,3,42,21,0,349,348,
        1,0,0,0,349,350,1,0,0,0,350,353,1,0,0,0,351,352,5,6,0,0,352,354,
        3,22,11,0,353,351,1,0,0,0,353,354,1,0,0,0,354,355,1,0,0,0,355,356,
        5,2,0,0,356,19,1,0,0,0,357,360,5,135,0,0,358,359,5,6,0,0,359,361,
        3,102,51,0,360,358,1,0,0,0,360,361,1,0,0,0,361,21,1,0,0,0,362,363,
        5,135,0,0,363,23,1,0,0,0,364,368,5,111,0,0,365,367,3,36,18,0,366,
        365,1,0,0,0,367,370,1,0,0,0,368,366,1,0,0,0,368,369,1,0,0,0,369,
        371,1,0,0,0,370,368,1,0,0,0,371,372,5,112,0,0,372,25,1,0,0,0,373,
        374,5,66,0,0,374,379,3,42,21,0,375,376,5,4,0,0,376,378,3,42,21,0,
        377,375,1,0,0,0,378,381,1,0,0,0,379,377,1,0,0,0,379,380,1,0,0,0,
        380,27,1,0,0,0,381,379,1,0,0,0,382,383,5,67,0,0,383,388,3,42,21,
        0,384,385,5,4,0,0,385,387,3,42,21,0,386,384,1,0,0,0,387,390,1,0,
        0,0,388,386,1,0,0,0,388,389,1,0,0,0,389,29,1,0,0,0,390,388,1,0,0,
        0,391,395,3,6,3,0,392,395,3,8,4,0,393,395,3,32,16,0,394,391,1,0,
        0,0,394,392,1,0,0,0,394,393,1,0,0,0,395,31,1,0,0,0,396,400,3,34,
        17,0,397,399,3,118,59,0,398,397,1,0,0,0,399,402,1,0,0,0,400,398,
        1,0,0,0,400,401,1,0,0,0,401,404,1,0,0,0,402,400,1,0,0,0,403,405,
        3,36,18,0,404,403,1,0,0,0,405,406,1,0,0,0,406,404,1,0,0,0,406,407,
        1,0,0,0,407,408,1,0,0,0,408,409,5,81,0,0,409,33,1,0,0,0,410,411,
        7,0,0,0,411,35,1,0,0,0,412,414,3,110,55,0,413,412,1,0,0,0,413,414,
        1,0,0,0,414,415,1,0,0,0,415,416,5,135,0,0,416,417,5,1,0,0,417,420,
        3,42,21,0,418,419,7,1,0,0,419,421,3,38,19,0,420,418,1,0,0,0,420,
        421,1,0,0,0,421,422,1,0,0,0,422,423,5,2,0,0,423,37,1,0,0,0,424,427,
        3,102,51,0,425,427,3,40,20,0,426,424,1,0,0,0,426,425,1,0,0,0,427,
        39,1,0,0,0,428,429,5,8,0,0,429,434,3,102,51,0,430,431,5,4,0,0,431,
        433,3,102,51,0,432,430,1,0,0,0,433,436,1,0,0,0,434,432,1,0,0,0,434,
        435,1,0,0,0,435,437,1,0,0,0,436,434,1,0,0,0,437,438,5,9,0,0,438,
        41,1,0,0,0,439,453,3,44,22,0,440,441,5,88,0,0,441,442,5,8,0,0,442,
        443,5,131,0,0,443,444,5,10,0,0,444,445,5,131,0,0,445,446,5,9,0,0,
        446,447,5,89,0,0,447,453,3,42,21,0,448,449,5,127,0,0,449,453,3,42,
        21,0,450,451,5,126,0,0,451,453,3,42,21,0,452,439,1,0,0,0,452,440,
        1,0,0,0,452,448,1,0,0,0,452,450,1,0,0,0,453,43,1,0,0,0,454,457,3,
        46,23,0,455,457,5,135,0,0,456,454,1,0,0,0,456,455,1,0,0,0,457,45,
        1,0,0,0,458,491,5,11,0,0,459,491,5,12,0,0,460,462,7,2,0,0,461,463,
        5,128,0,0,462,461,1,0,0,0,462,463,1,0,0,0,463,491,1,0,0,0,464,466,
        7,3,0,0,465,467,5,128,0,0,466,465,1,0,0,0,466,467,1,0,0,0,467,491,
        1,0,0,0,468,470,7,4,0,0,469,471,5,128,0,0,470,469,1,0,0,0,470,471,
        1,0,0,0,471,491,1,0,0,0,472,491,5,25,0,0,473,491,5,26,0,0,474,491,
        5,27,0,0,475,491,5,28,0,0,476,491,5,29,0,0,477,491,5,30,0,0,478,
        491,5,31,0,0,479,491,5,32,0,0,480,491,5,33,0,0,481,491,5,34,0,0,
        482,491,5,35,0,0,483,491,5,36,0,0,484,491,5,37,0,0,485,491,5,38,
        0,0,486,488,7,5,0,0,487,489,5,129,0,0,488,487,1,0,0,0,488,489,1,
        0,0,0,489,491,1,0,0,0,490,458,1,0,0,0,490,459,1,0,0,0,490,460,1,
        0,0,0,490,464,1,0,0,0,490,468,1,0,0,0,490,472,1,0,0,0,490,473,1,
        0,0,0,490,474,1,0,0,0,490,475,1,0,0,0,490,476,1,0,0,0,490,477,1,
        0,0,0,490,478,1,0,0,0,490,479,1,0,0,0,490,480,1,0,0,0,490,481,1,
        0,0,0,490,482,1,0,0,0,490,483,1,0,0,0,490,484,1,0,0,0,490,485,1,
        0,0,0,490,486,1,0,0,0,491,47,1,0,0,0,492,494,3,50,25,0,493,492,1,
        0,0,0,494,497,1,0,0,0,495,493,1,0,0,0,495,496,1,0,0,0,496,49,1,0,
        0,0,497,495,1,0,0,0,498,510,3,52,26,0,499,510,3,62,31,0,500,510,
        3,64,32,0,501,510,3,70,35,0,502,510,3,72,36,0,503,510,3,74,37,0,
        504,510,3,56,28,0,505,510,3,76,38,0,506,510,3,78,39,0,507,510,3,
        80,40,0,508,510,5,2,0,0,509,498,1,0,0,0,509,499,1,0,0,0,509,500,
        1,0,0,0,509,501,1,0,0,0,509,502,1,0,0,0,509,503,1,0,0,0,509,504,
        1,0,0,0,509,505,1,0,0,0,509,506,1,0,0,0,509,507,1,0,0,0,509,508,
        1,0,0,0,510,51,1,0,0,0,511,512,3,82,41,0,512,513,3,54,27,0,513,514,
        3,102,51,0,514,515,5,2,0,0,515,53,1,0,0,0,516,517,7,1,0,0,517,55,
        1,0,0,0,518,519,3,82,41,0,519,520,5,2,0,0,520,57,1,0,0,0,521,526,
        3,60,30,0,522,523,5,4,0,0,523,525,3,60,30,0,524,522,1,0,0,0,525,
        528,1,0,0,0,526,524,1,0,0,0,526,527,1,0,0,0,527,59,1,0,0,0,528,526,
        1,0,0,0,529,530,5,135,0,0,530,531,7,6,0,0,531,534,3,102,51,0,532,
        534,3,102,51,0,533,529,1,0,0,0,533,532,1,0,0,0,534,61,1,0,0,0,535,
        536,5,82,0,0,536,537,3,102,51,0,537,538,5,83,0,0,538,546,3,48,24,
        0,539,540,5,84,0,0,540,541,3,102,51,0,541,542,5,83,0,0,542,543,3,
        48,24,0,543,545,1,0,0,0,544,539,1,0,0,0,545,548,1,0,0,0,546,544,
        1,0,0,0,546,547,1,0,0,0,547,551,1,0,0,0,548,546,1,0,0,0,549,550,
        5,85,0,0,550,552,3,48,24,0,551,549,1,0,0,0,551,552,1,0,0,0,552,553,
        1,0,0,0,553,554,5,86,0,0,554,63,1,0,0,0,555,556,5,87,0,0,556,557,
        3,102,51,0,557,559,5,89,0,0,558,560,3,66,33,0,559,558,1,0,0,0,560,
        561,1,0,0,0,561,559,1,0,0,0,561,562,1,0,0,0,562,565,1,0,0,0,563,
        564,5,85,0,0,564,566,3,48,24,0,565,563,1,0,0,0,565,566,1,0,0,0,566,
        567,1,0,0,0,567,568,5,90,0,0,568,65,1,0,0,0,569,574,3,68,34,0,570,
        571,5,4,0,0,571,573,3,68,34,0,572,570,1,0,0,0,573,576,1,0,0,0,574,
        572,1,0,0,0,574,575,1,0,0,0,575,577,1,0,0,0,576,574,1,0,0,0,577,
        578,5,1,0,0,578,579,3,48,24,0,579,67,1,0,0,0,580,581,7,7,0,0,581,
        69,1,0,0,0,582,583,5,91,0,0,583,584,3,102,51,0,584,585,5,92,0,0,
        585,586,3,48,24,0,586,587,5,93,0,0,587,71,1,0,0,0,588,589,5,94,0,
        0,589,590,3,48,24,0,590,591,5,95,0,0,591,592,3,102,51,0,592,593,
        5,96,0,0,593,73,1,0,0,0,594,595,5,97,0,0,595,596,5,135,0,0,596,597,
        5,6,0,0,597,598,3,102,51,0,598,599,5,98,0,0,599,602,3,102,51,0,600,
        601,5,99,0,0,601,603,3,102,51,0,602,600,1,0,0,0,602,603,1,0,0,0,
        603,604,1,0,0,0,604,605,5,92,0,0,605,606,3,48,24,0,606,607,5,100,
        0,0,607,75,1,0,0,0,608,609,5,101,0,0,609,610,5,2,0,0,610,77,1,0,
        0,0,611,612,5,102,0,0,612,613,5,2,0,0,613,79,1,0,0,0,614,615,5,103,
        0,0,615,616,5,2,0,0,616,81,1,0,0,0,617,622,3,84,42,0,618,619,5,42,
        0,0,619,621,3,84,42,0,620,618,1,0,0,0,621,624,1,0,0,0,622,620,1,
        0,0,0,622,623,1,0,0,0,623,83,1,0,0,0,624,622,1,0,0,0,625,629,5,135,
        0,0,626,628,3,86,43,0,627,626,1,0,0,0,628,631,1,0,0,0,629,627,1,
        0,0,0,629,630,1,0,0,0,630,85,1,0,0,0,631,629,1,0,0,0,632,636,3,88,
        44,0,633,636,3,90,45,0,634,636,3,92,46,0,635,632,1,0,0,0,635,633,
        1,0,0,0,635,634,1,0,0,0,636,87,1,0,0,0,637,638,5,125,0,0,638,89,
        1,0,0,0,639,640,5,8,0,0,640,641,3,102,51,0,641,642,5,9,0,0,642,91,
        1,0,0,0,643,645,5,3,0,0,644,646,3,58,29,0,645,644,1,0,0,0,645,646,
        1,0,0,0,646,647,1,0,0,0,647,648,5,5,0,0,648,93,1,0,0,0,649,660,5,
        131,0,0,650,660,5,132,0,0,651,660,5,130,0,0,652,660,5,136,0,0,653,
        660,5,137,0,0,654,660,3,96,48,0,655,660,3,98,49,0,656,660,3,100,
        50,0,657,660,5,133,0,0,658,660,5,134,0,0,659,649,1,0,0,0,659,650,
        1,0,0,0,659,651,1,0,0,0,659,652,1,0,0,0,659,653,1,0,0,0,659,654,
        1,0,0,0,659,655,1,0,0,0,659,656,1,0,0,0,659,657,1,0,0,0,659,658,
        1,0,0,0,660,95,1,0,0,0,661,662,7,8,0,0,662,663,5,45,0,0,663,664,
        5,138,0,0,664,97,1,0,0,0,665,666,7,9,0,0,666,667,5,45,0,0,667,668,
        5,140,0,0,668,99,1,0,0,0,669,670,7,10,0,0,670,671,5,45,0,0,671,672,
        5,139,0,0,672,101,1,0,0,0,673,674,6,51,-1,0,674,681,3,94,47,0,675,
        681,3,82,41,0,676,677,5,3,0,0,677,678,3,102,51,0,678,679,5,5,0,0,
        679,681,1,0,0,0,680,673,1,0,0,0,680,675,1,0,0,0,680,676,1,0,0,0,
        681,696,1,0,0,0,682,683,10,7,0,0,683,684,7,11,0,0,684,695,3,102,
        51,8,685,686,10,6,0,0,686,687,7,12,0,0,687,695,3,102,51,7,688,689,
        10,5,0,0,689,690,7,13,0,0,690,695,3,102,51,6,691,692,10,4,0,0,692,
        693,7,14,0,0,693,695,3,102,51,5,694,682,1,0,0,0,694,685,1,0,0,0,
        694,688,1,0,0,0,694,691,1,0,0,0,695,698,1,0,0,0,696,694,1,0,0,0,
        696,697,1,0,0,0,697,103,1,0,0,0,698,696,1,0,0,0,699,708,3,106,53,
        0,700,708,3,108,54,0,701,702,3,106,53,0,702,703,3,108,54,0,703,708,
        1,0,0,0,704,705,3,108,54,0,705,706,3,106,53,0,706,708,1,0,0,0,707,
        699,1,0,0,0,707,700,1,0,0,0,707,701,1,0,0,0,707,704,1,0,0,0,708,
        105,1,0,0,0,709,711,5,68,0,0,710,712,3,116,58,0,711,710,1,0,0,0,
        711,712,1,0,0,0,712,713,1,0,0,0,713,714,3,48,24,0,714,715,5,69,0,
        0,715,107,1,0,0,0,716,718,5,70,0,0,717,719,3,116,58,0,718,717,1,
        0,0,0,718,719,1,0,0,0,719,720,1,0,0,0,720,721,3,48,24,0,721,722,
        5,71,0,0,722,109,1,0,0,0,723,724,5,56,0,0,724,726,5,135,0,0,725,
        727,3,112,56,0,726,725,1,0,0,0,726,727,1,0,0,0,727,728,1,0,0,0,728,
        729,5,57,0,0,729,111,1,0,0,0,730,731,5,3,0,0,731,736,3,114,57,0,
        732,733,5,4,0,0,733,735,3,114,57,0,734,732,1,0,0,0,735,738,1,0,0,
        0,736,734,1,0,0,0,736,737,1,0,0,0,737,739,1,0,0,0,738,736,1,0,0,
        0,739,740,5,5,0,0,740,113,1,0,0,0,741,742,7,15,0,0,742,115,1,0,0,
        0,743,744,7,16,0,0,744,117,1,0,0,0,745,746,7,17,0,0,746,119,1,0,
        0,0,83,126,128,132,136,142,149,153,158,163,170,174,179,185,190,197,
        201,206,215,222,226,231,236,239,244,251,255,259,264,270,274,279,
        286,293,298,308,313,323,328,336,344,349,353,360,368,379,388,394,
        400,406,413,420,426,434,452,456,462,466,470,488,490,495,509,526,
        533,546,551,561,565,574,602,622,629,635,645,659,680,694,696,707,
        711,718,726,736
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
    public typeDecl(): TypeDeclContext[];
    public typeDecl(i: number): TypeDeclContext | null;
    public typeDecl(i?: number): TypeDeclContext[] | TypeDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeDeclContext);
        }

        return this.getRuleContext(i, TypeDeclContext);
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


export class TypeDeclContext extends antlr.ParserRuleContext {
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
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_typeDecl;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitTypeDecl) {
            return visitor.visitTypeDecl(this);
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
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
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
    public INTEGER_NUMBER(): antlr.TerminalNode[];
    public INTEGER_NUMBER(i: number): antlr.TerminalNode | null;
    public INTEGER_NUMBER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(StructuredTextParser.INTEGER_NUMBER);
    	} else {
    		return this.getToken(StructuredTextParser.INTEGER_NUMBER, i);
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
    public SUBRANGE_PARAM(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.SUBRANGE_PARAM, 0);
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
    public INTEGER_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.INTEGER_NUMBER, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.BOOL, 0);
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
    public INTEGER_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.INTEGER_NUMBER, 0);
    }
    public REAL_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.REAL_NUMBER, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.BOOL, 0);
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
    public DATE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.DATE, 0)!;
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
    public DATETIME(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.DATETIME, 0)!;
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
    public TIME_OF_DAY(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.TIME_OF_DAY, 0)!;
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
    public INTEGER_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.INTEGER_NUMBER, 0);
    }
    public REAL_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.REAL_NUMBER, 0);
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
