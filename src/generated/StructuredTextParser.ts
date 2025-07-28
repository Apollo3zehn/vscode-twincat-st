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
    public static readonly RULE_enumType = 24;
    public static readonly RULE_signedEnumType = 25;
    public static readonly RULE_bitfieldEnumType = 26;
    public static readonly RULE_statementSection = 27;
    public static readonly RULE_statement = 28;
    public static readonly RULE_assignment = 29;
    public static readonly RULE_assignmentOperator = 30;
    public static readonly RULE_callStatement = 31;
    public static readonly RULE_argumentList = 32;
    public static readonly RULE_argument = 33;
    public static readonly RULE_ifStatement = 34;
    public static readonly RULE_caseStatement = 35;
    public static readonly RULE_caseElement = 36;
    public static readonly RULE_caseValue = 37;
    public static readonly RULE_whileStatement = 38;
    public static readonly RULE_repeatStatement = 39;
    public static readonly RULE_forStatement = 40;
    public static readonly RULE_returnStatement = 41;
    public static readonly RULE_exitStatement = 42;
    public static readonly RULE_continueStatement = 43;
    public static readonly RULE_memberExpression = 44;
    public static readonly RULE_memberAccess = 45;
    public static readonly RULE_postfixOp = 46;
    public static readonly RULE_dereference = 47;
    public static readonly RULE_arrayIndex = 48;
    public static readonly RULE_call = 49;
    public static readonly RULE_literal = 50;
    public static readonly RULE_dateLiteral = 51;
    public static readonly RULE_dateAndTimeLiteral = 52;
    public static readonly RULE_timeOfDayLiteral = 53;
    public static readonly RULE_expr = 54;
    public static readonly RULE_propertyBody = 55;
    public static readonly RULE_getter = 56;
    public static readonly RULE_setter = 57;
    public static readonly RULE_attribute = 58;
    public static readonly RULE_attributeArgList = 59;
    public static readonly RULE_attributeArg = 60;
    public static readonly RULE_accessModifier = 61;
    public static readonly RULE_modifier = 62;

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
            this.state = 134;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 4194389) !== 0) || _la === 109 || _la === 123) {
                {
                this.state = 132;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                case 1:
                    {
                    this.state = 126;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 127;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 128;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 129;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 130;
                    this.varGlobalSection();
                    }
                    break;
                case 6:
                    {
                    this.state = 131;
                    this.typeDecl();
                    }
                    break;
                }
                }
                this.state = 136;
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
            this.state = 138;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 137;
                this.attribute();
                }
            }

            this.state = 140;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 142;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 141;
                this.accessModifier();
                }
            }

            this.state = 144;
            this.match(StructuredTextParser.ID);
            this.state = 148;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 447) !== 0)) {
                {
                {
                this.state = 145;
                this.varDeclSection();
                }
                }
                this.state = 150;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 151;
            this.statementSection();
            this.state = 152;
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
            this.state = 155;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 154;
                this.attribute();
                }
            }

            this.state = 157;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 159;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 158;
                this.accessModifier();
                }
            }

            this.state = 161;
            this.match(StructuredTextParser.ID);
            this.state = 164;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 162;
                this.match(StructuredTextParser.T__0);
                this.state = 163;
                this.type_();
                }
            }

            this.state = 169;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 447) !== 0)) {
                {
                {
                this.state = 166;
                this.varDeclSection();
                }
                }
                this.state = 171;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 172;
            this.statementSection();
            this.state = 173;
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
            this.state = 176;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 175;
                this.attribute();
                }
            }

            this.state = 178;
            this.match(StructuredTextParser.METHOD);
            this.state = 180;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 179;
                this.accessModifier();
                }
            }

            this.state = 185;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 7) !== 0)) {
                {
                {
                this.state = 182;
                this.modifier();
                }
                }
                this.state = 187;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 188;
            this.match(StructuredTextParser.ID);
            this.state = 191;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 189;
                this.match(StructuredTextParser.T__0);
                this.state = 190;
                this.type_();
                }
            }

            this.state = 196;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 447) !== 0)) {
                {
                {
                this.state = 193;
                this.varDeclSection();
                }
                }
                this.state = 198;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 199;
            this.statementSection();
            this.state = 200;
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
            this.state = 203;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 202;
                this.attribute();
                }
            }

            this.state = 205;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 207;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 206;
                this.accessModifier();
                }
            }

            this.state = 212;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 7) !== 0)) {
                {
                {
                this.state = 209;
                this.modifier();
                }
                }
                this.state = 214;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 215;
            this.match(StructuredTextParser.ID);
            this.state = 216;
            this.match(StructuredTextParser.T__0);
            this.state = 217;
            this.type_();
            this.state = 221;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 447) !== 0)) {
                {
                {
                this.state = 218;
                this.varDeclSection();
                }
                }
                this.state = 223;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 224;
            this.propertyBody();
            this.state = 225;
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
            this.state = 228;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 227;
                this.attribute();
                }
            }

            this.state = 230;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 232;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 231;
                this.accessModifier();
                }
            }

            this.state = 237;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 7) !== 0)) {
                {
                {
                this.state = 234;
                this.modifier();
                }
                }
                this.state = 239;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 240;
            this.match(StructuredTextParser.ID);
            this.state = 242;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 67) {
                {
                this.state = 241;
                this.extendsClause();
                }
            }

            this.state = 245;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 66) {
                {
                this.state = 244;
                this.implementsClause();
                }
            }

            this.state = 250;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 29294849) !== 0) || _la === 107) {
                {
                {
                this.state = 247;
                this.member();
                }
                }
                this.state = 252;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 253;
            this.statementSection();
            this.state = 254;
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
            this.state = 257;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 256;
                this.attribute();
                }
            }

            this.state = 259;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 261;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 260;
                this.accessModifier();
                }
            }

            this.state = 263;
            this.match(StructuredTextParser.ID);
            this.state = 265;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 67) {
                {
                this.state = 264;
                this.extendsClause();
                }
            }

            this.state = 270;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 29294849) !== 0) || _la === 107) {
                {
                {
                this.state = 267;
                this.member();
                }
                }
                this.state = 272;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 273;
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
            this.state = 276;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 275;
                this.attribute();
                }
            }

            this.state = 278;
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 280;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 279;
                this.accessModifier();
                }
            }

            this.state = 285;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 7) !== 0)) {
                {
                {
                this.state = 282;
                this.modifier();
                }
                }
                this.state = 287;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 288;
            this.match(StructuredTextParser.ID);
            this.state = 290;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 289;
                this.varDecl();
                }
                }
                this.state = 292;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 56 || _la === 135);
            this.state = 294;
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
            this.state = 342;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 299;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 56) {
                    {
                    {
                    this.state = 296;
                    this.attribute();
                    }
                    }
                    this.state = 301;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 302;
                this.match(StructuredTextParser.TYPE);
                this.state = 304;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                    {
                    this.state = 303;
                    this.accessModifier();
                    }
                }

                this.state = 306;
                this.match(StructuredTextParser.ID);
                this.state = 307;
                this.match(StructuredTextParser.T__0);
                this.state = 308;
                this.enumDecl();
                this.state = 309;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 314;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 56) {
                    {
                    {
                    this.state = 311;
                    this.attribute();
                    }
                    }
                    this.state = 316;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 317;
                this.match(StructuredTextParser.TYPE);
                this.state = 319;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                    {
                    this.state = 318;
                    this.accessModifier();
                    }
                }

                this.state = 321;
                this.match(StructuredTextParser.ID);
                this.state = 322;
                this.match(StructuredTextParser.T__0);
                this.state = 323;
                this.structDecl();
                this.state = 324;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 329;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 56) {
                    {
                    {
                    this.state = 326;
                    this.attribute();
                    }
                    }
                    this.state = 331;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 332;
                this.match(StructuredTextParser.TYPE);
                this.state = 334;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                    {
                    this.state = 333;
                    this.accessModifier();
                    }
                }

                this.state = 336;
                this.match(StructuredTextParser.ID);
                this.state = 337;
                this.match(StructuredTextParser.T__0);
                this.state = 338;
                this.type_();
                this.state = 339;
                this.match(StructuredTextParser.T__1);
                this.state = 340;
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
            this.state = 344;
            this.match(StructuredTextParser.T__2);
            this.state = 345;
            this.enumMember();
            this.state = 350;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 346;
                this.match(StructuredTextParser.T__3);
                this.state = 347;
                this.enumMember();
                }
                }
                this.state = 352;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 353;
            this.match(StructuredTextParser.T__4);
            this.state = 355;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33546240) !== 0)) {
                {
                this.state = 354;
                this.enumType();
                }
            }

            this.state = 359;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 357;
                this.match(StructuredTextParser.T__5);
                this.state = 358;
                this.initialValue();
                }
            }

            this.state = 361;
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
            this.state = 363;
            this.match(StructuredTextParser.ID);
            this.state = 366;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 364;
                this.match(StructuredTextParser.T__5);
                this.state = 365;
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
            this.state = 368;
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
            this.state = 370;
            this.match(StructuredTextParser.STRUCT);
            this.state = 374;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 56 || _la === 135) {
                {
                {
                this.state = 371;
                this.varDecl();
                }
                }
                this.state = 376;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 377;
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
            this.state = 379;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 380;
            this.type_();
            this.state = 385;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 381;
                this.match(StructuredTextParser.T__3);
                this.state = 382;
                this.type_();
                }
                }
                this.state = 387;
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
            this.state = 388;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 389;
            this.type_();
            this.state = 394;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 390;
                this.match(StructuredTextParser.T__3);
                this.state = 391;
                this.type_();
                }
                }
                this.state = 396;
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
            this.state = 400;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 397;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 398;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 399;
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
            this.state = 402;
            this.varSectionType();
            this.state = 406;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 7) !== 0)) {
                {
                {
                this.state = 403;
                this.modifier();
                }
                }
                this.state = 408;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 410;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 409;
                this.varDecl();
                }
                }
                this.state = 412;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 56 || _la === 135);
            this.state = 414;
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
            this.state = 416;
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
            this.state = 419;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 56) {
                {
                this.state = 418;
                this.attribute();
                }
            }

            this.state = 421;
            this.match(StructuredTextParser.ID);
            this.state = 422;
            this.match(StructuredTextParser.T__0);
            this.state = 423;
            this.type_();
            this.state = 426;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6 || _la === 7) {
                {
                this.state = 424;
                _la = this.tokenStream.LA(1);
                if(!(_la === 6 || _la === 7)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 425;
                this.exprOrArrayInit();
                }
            }

            this.state = 428;
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
            this.state = 432;
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
                this.state = 430;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__7:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 431;
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
            this.state = 434;
            this.match(StructuredTextParser.T__7);
            this.state = 435;
            this.expr(0);
            this.state = 440;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 436;
                this.match(StructuredTextParser.T__3);
                this.state = 437;
                this.expr(0);
                }
                }
                this.state = 442;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 443;
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
            this.state = 458;
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
                this.state = 445;
                this.typeId();
                }
                break;
            case StructuredTextParser.ARRAY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 446;
                this.match(StructuredTextParser.ARRAY);
                this.state = 447;
                this.match(StructuredTextParser.T__7);
                this.state = 448;
                this.match(StructuredTextParser.INTEGER_NUMBER);
                this.state = 449;
                this.match(StructuredTextParser.T__9);
                this.state = 450;
                this.match(StructuredTextParser.INTEGER_NUMBER);
                this.state = 451;
                this.match(StructuredTextParser.T__8);
                this.state = 452;
                this.match(StructuredTextParser.OF);
                this.state = 453;
                this.type_();
                }
                break;
            case StructuredTextParser.POINTER_TO:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 454;
                this.match(StructuredTextParser.POINTER_TO);
                this.state = 455;
                this.type_();
                }
                break;
            case StructuredTextParser.REFERENCE_TO:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 456;
                this.match(StructuredTextParser.REFERENCE_TO);
                this.state = 457;
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
            this.state = 462;
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
                this.state = 460;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 461;
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
            this.state = 496;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__10:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 464;
                this.match(StructuredTextParser.T__10);
                }
                break;
            case StructuredTextParser.T__11:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 465;
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
                this.state = 466;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 122880) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 468;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 128) {
                    {
                    this.state = 467;
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
                this.state = 470;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1966080) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 472;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 128) {
                    {
                    this.state = 471;
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
                this.state = 474;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 31457280) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 476;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 128) {
                    {
                    this.state = 475;
                    this.match(StructuredTextParser.SUBRANGE_PARAM);
                    }
                }

                }
                }
                break;
            case StructuredTextParser.T__24:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 478;
                this.match(StructuredTextParser.T__24);
                }
                break;
            case StructuredTextParser.T__25:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 479;
                this.match(StructuredTextParser.T__25);
                }
                break;
            case StructuredTextParser.T__26:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 480;
                this.match(StructuredTextParser.T__26);
                }
                break;
            case StructuredTextParser.T__27:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 481;
                this.match(StructuredTextParser.T__27);
                }
                break;
            case StructuredTextParser.T__28:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 482;
                this.match(StructuredTextParser.T__28);
                }
                break;
            case StructuredTextParser.T__29:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 483;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case StructuredTextParser.T__30:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 484;
                this.match(StructuredTextParser.T__30);
                }
                break;
            case StructuredTextParser.T__31:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 485;
                this.match(StructuredTextParser.T__31);
                }
                break;
            case StructuredTextParser.T__32:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 486;
                this.match(StructuredTextParser.T__32);
                }
                break;
            case StructuredTextParser.T__33:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 487;
                this.match(StructuredTextParser.T__33);
                }
                break;
            case StructuredTextParser.T__34:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 488;
                this.match(StructuredTextParser.T__34);
                }
                break;
            case StructuredTextParser.T__35:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 489;
                this.match(StructuredTextParser.T__35);
                }
                break;
            case StructuredTextParser.T__36:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 490;
                this.match(StructuredTextParser.T__36);
                }
                break;
            case StructuredTextParser.T__37:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 491;
                this.match(StructuredTextParser.T__37);
                }
                break;
            case StructuredTextParser.T__38:
            case StructuredTextParser.T__39:
                this.enterOuterAlt(localContext, 20);
                {
                {
                this.state = 492;
                _la = this.tokenStream.LA(1);
                if(!(_la === 39 || _la === 40)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 494;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 129) {
                    {
                    this.state = 493;
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
        this.enterRule(localContext, 48, StructuredTextParser.RULE_enumType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 498;
            localContext._enumTypeId = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 33546240) !== 0))) {
                localContext._enumTypeId = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 500;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 128) {
                {
                this.state = 499;
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
        this.enterRule(localContext, 50, StructuredTextParser.RULE_signedEnumType);
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
        this.enterRule(localContext, 52, StructuredTextParser.RULE_bitfieldEnumType);
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
        this.enterRule(localContext, 54, StructuredTextParser.RULE_statementSection);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 509;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 61, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 506;
                    this.statement();
                    }
                    }
                }
                this.state = 511;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 61, this.context);
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
        this.enterRule(localContext, 56, StructuredTextParser.RULE_statement);
        try {
            this.state = 523;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 512;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 513;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 514;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 515;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 516;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 517;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 518;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 519;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 520;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 521;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 522;
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
        this.enterRule(localContext, 58, StructuredTextParser.RULE_assignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 525;
            this.memberExpression();
            this.state = 526;
            this.assignmentOperator();
            this.state = 527;
            this.expr(0);
            this.state = 528;
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
        this.enterRule(localContext, 60, StructuredTextParser.RULE_assignmentOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 530;
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
        this.enterRule(localContext, 62, StructuredTextParser.RULE_callStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 532;
            this.memberExpression();
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
    public argumentList(): ArgumentListContext {
        let localContext = new ArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 64, StructuredTextParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 535;
            this.argument();
            this.state = 540;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 536;
                this.match(StructuredTextParser.T__3);
                this.state = 537;
                this.argument();
                }
                }
                this.state = 542;
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
        this.enterRule(localContext, 66, StructuredTextParser.RULE_argument);
        let _la: number;
        try {
            this.state = 547;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 543;
                this.match(StructuredTextParser.ID);
                this.state = 544;
                _la = this.tokenStream.LA(1);
                if(!(_la === 6 || _la === 41)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 545;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 546;
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
        this.enterRule(localContext, 68, StructuredTextParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 549;
            this.match(StructuredTextParser.IF);
            this.state = 550;
            this.expr(0);
            this.state = 551;
            this.match(StructuredTextParser.THEN);
            this.state = 552;
            this.statementSection();
            this.state = 560;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 84) {
                {
                {
                this.state = 553;
                this.match(StructuredTextParser.ELSIF);
                this.state = 554;
                this.expr(0);
                this.state = 555;
                this.match(StructuredTextParser.THEN);
                this.state = 556;
                this.statementSection();
                }
                }
                this.state = 562;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
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
        this.enterRule(localContext, 70, StructuredTextParser.RULE_caseStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 569;
            this.match(StructuredTextParser.CASE);
            this.state = 570;
            this.expr(0);
            this.state = 571;
            this.match(StructuredTextParser.OF);
            this.state = 573;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 572;
                this.caseElement();
                }
                }
                this.state = 575;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 43) !== 0));
            this.state = 579;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 85) {
                {
                this.state = 577;
                this.match(StructuredTextParser.ELSE);
                this.state = 578;
                this.statementSection();
                }
            }

            this.state = 581;
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
        this.enterRule(localContext, 72, StructuredTextParser.RULE_caseElement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 583;
            this.caseValue();
            this.state = 588;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 584;
                this.match(StructuredTextParser.T__3);
                this.state = 585;
                this.caseValue();
                }
                }
                this.state = 590;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 591;
            this.match(StructuredTextParser.T__0);
            this.state = 592;
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
        this.enterRule(localContext, 74, StructuredTextParser.RULE_caseValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 594;
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
        this.enterRule(localContext, 76, StructuredTextParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 596;
            this.match(StructuredTextParser.WHILE);
            this.state = 597;
            this.expr(0);
            this.state = 598;
            this.match(StructuredTextParser.DO);
            this.state = 599;
            this.statementSection();
            this.state = 600;
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
        this.enterRule(localContext, 78, StructuredTextParser.RULE_repeatStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 602;
            this.match(StructuredTextParser.REPEAT);
            this.state = 603;
            this.statementSection();
            this.state = 604;
            this.match(StructuredTextParser.UNTIL);
            this.state = 605;
            this.expr(0);
            this.state = 606;
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
        this.enterRule(localContext, 80, StructuredTextParser.RULE_forStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 608;
            this.match(StructuredTextParser.FOR);
            this.state = 609;
            this.match(StructuredTextParser.ID);
            this.state = 610;
            this.match(StructuredTextParser.T__5);
            this.state = 611;
            this.expr(0);
            this.state = 612;
            this.match(StructuredTextParser.TO);
            this.state = 613;
            this.expr(0);
            this.state = 616;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 99) {
                {
                this.state = 614;
                this.match(StructuredTextParser.BY);
                this.state = 615;
                this.expr(0);
                }
            }

            this.state = 618;
            this.match(StructuredTextParser.DO);
            this.state = 619;
            this.statementSection();
            this.state = 620;
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
        this.enterRule(localContext, 82, StructuredTextParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 622;
            this.match(StructuredTextParser.RETURN);
            this.state = 623;
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
        this.enterRule(localContext, 84, StructuredTextParser.RULE_exitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 625;
            this.match(StructuredTextParser.EXIT);
            this.state = 626;
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
        this.enterRule(localContext, 86, StructuredTextParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 628;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 629;
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
        this.enterRule(localContext, 88, StructuredTextParser.RULE_memberExpression);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 631;
            this.memberAccess();
            this.state = 636;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 71, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 632;
                    this.match(StructuredTextParser.T__41);
                    this.state = 633;
                    this.memberAccess();
                    }
                    }
                }
                this.state = 638;
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
    public memberAccess(): MemberAccessContext {
        let localContext = new MemberAccessContext(this.context, this.state);
        this.enterRule(localContext, 90, StructuredTextParser.RULE_memberAccess);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 639;
            this.match(StructuredTextParser.ID);
            this.state = 643;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 72, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 640;
                    this.postfixOp();
                    }
                    }
                }
                this.state = 645;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 72, this.context);
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
        this.enterRule(localContext, 92, StructuredTextParser.RULE_postfixOp);
        try {
            this.state = 649;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.CARET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 646;
                this.dereference();
                }
                break;
            case StructuredTextParser.T__7:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 647;
                this.arrayIndex();
                }
                break;
            case StructuredTextParser.T__2:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 648;
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
        this.enterRule(localContext, 94, StructuredTextParser.RULE_dereference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 651;
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
        this.enterRule(localContext, 96, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 653;
            this.match(StructuredTextParser.T__7);
            this.state = 654;
            this.expr(0);
            this.state = 655;
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
        this.enterRule(localContext, 98, StructuredTextParser.RULE_call);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 657;
            this.match(StructuredTextParser.T__2);
            this.state = 659;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3758096392) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 6271) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 255) !== 0)) {
                {
                this.state = 658;
                this.argumentList();
                }
            }

            this.state = 661;
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
        this.enterRule(localContext, 100, StructuredTextParser.RULE_literal);
        try {
            this.state = 673;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.INTEGER_NUMBER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 663;
                this.match(StructuredTextParser.INTEGER_NUMBER);
                }
                break;
            case StructuredTextParser.REAL_NUMBER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 664;
                this.match(StructuredTextParser.REAL_NUMBER);
                }
                break;
            case StructuredTextParser.BOOL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 665;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case StructuredTextParser.TIME_LITERAL:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 666;
                this.match(StructuredTextParser.TIME_LITERAL);
                }
                break;
            case StructuredTextParser.LTIME_LITERAL:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 667;
                this.match(StructuredTextParser.LTIME_LITERAL);
                }
                break;
            case StructuredTextParser.T__28:
            case StructuredTextParser.T__33:
            case StructuredTextParser.T__42:
            case StructuredTextParser.T__43:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 668;
                this.dateLiteral();
                }
                break;
            case StructuredTextParser.T__31:
            case StructuredTextParser.T__32:
            case StructuredTextParser.T__36:
            case StructuredTextParser.T__37:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 669;
                this.dateAndTimeLiteral();
                }
                break;
            case StructuredTextParser.T__29:
            case StructuredTextParser.T__30:
            case StructuredTextParser.T__34:
            case StructuredTextParser.T__35:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 670;
                this.timeOfDayLiteral();
                }
                break;
            case StructuredTextParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 671;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            case StructuredTextParser.WSTRING_LITERAL:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 672;
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
        this.enterRule(localContext, 102, StructuredTextParser.RULE_dateLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 675;
            localContext._prefix = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 49185) !== 0))) {
                localContext._prefix = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 676;
            this.match(StructuredTextParser.T__44);
            this.state = 677;
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
        this.enterRule(localContext, 104, StructuredTextParser.RULE_dateAndTimeLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 679;
            localContext._prefix = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 99) !== 0))) {
                localContext._prefix = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 680;
            this.match(StructuredTextParser.T__44);
            this.state = 681;
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
        this.enterRule(localContext, 106, StructuredTextParser.RULE_timeOfDayLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 683;
            localContext._prefix = this.tokenStream.LT(1);
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 99) !== 0))) {
                localContext._prefix = this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 684;
            this.match(StructuredTextParser.T__44);
            this.state = 685;
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
        let _startState = 108;
        this.enterRecursionRule(localContext, 108, StructuredTextParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 694;
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
                this.state = 688;
                this.literal();
                }
                break;
            case StructuredTextParser.ID:
                {
                this.state = 689;
                this.memberExpression();
                }
                break;
            case StructuredTextParser.T__2:
                {
                this.state = 690;
                this.match(StructuredTextParser.T__2);
                this.state = 691;
                this.expr(0);
                this.state = 692;
                this.match(StructuredTextParser.T__4);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 710;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 78, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 708;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 77, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 696;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 697;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 46 || _la === 47 || _la === 122)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 698;
                        this.expr(8);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 699;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 700;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 48 || _la === 49)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 701;
                        this.expr(7);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 702;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 703;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & 63) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 704;
                        this.expr(6);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 705;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 706;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 707;
                        this.expr(5);
                        }
                        break;
                    }
                    }
                }
                this.state = 712;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 78, this.context);
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
        this.enterRule(localContext, 110, StructuredTextParser.RULE_propertyBody);
        try {
            this.state = 721;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 79, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 713;
                this.getter();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 714;
                this.setter();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 715;
                this.getter();
                this.state = 716;
                this.setter();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 718;
                this.setter();
                this.state = 719;
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
        this.enterRule(localContext, 112, StructuredTextParser.RULE_getter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 723;
            this.match(StructuredTextParser.GET);
            this.state = 725;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 724;
                this.accessModifier();
                }
            }

            this.state = 727;
            this.statementSection();
            this.state = 728;
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
        this.enterRule(localContext, 114, StructuredTextParser.RULE_setter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 730;
            this.match(StructuredTextParser.SET);
            this.state = 732;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 15) !== 0)) {
                {
                this.state = 731;
                this.accessModifier();
                }
            }

            this.state = 734;
            this.statementSection();
            this.state = 735;
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
        this.enterRule(localContext, 116, StructuredTextParser.RULE_attribute);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 737;
            this.match(StructuredTextParser.T__55);
            this.state = 738;
            this.match(StructuredTextParser.ID);
            this.state = 740;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 739;
                this.attributeArgList();
                }
            }

            this.state = 742;
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
        this.enterRule(localContext, 118, StructuredTextParser.RULE_attributeArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 744;
            this.match(StructuredTextParser.T__2);
            this.state = 745;
            this.attributeArg();
            this.state = 750;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 746;
                this.match(StructuredTextParser.T__3);
                this.state = 747;
                this.attributeArg();
                }
                }
                this.state = 752;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 753;
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
        this.enterRule(localContext, 120, StructuredTextParser.RULE_attributeArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 755;
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
        this.enterRule(localContext, 122, StructuredTextParser.RULE_accessModifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 757;
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
        this.enterRule(localContext, 124, StructuredTextParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 759;
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
        case 54:
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
        4,1,143,762,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,1,0,1,0,1,0,1,0,1,0,1,0,5,
        0,133,8,0,10,0,12,0,136,9,0,1,1,3,1,139,8,1,1,1,1,1,3,1,143,8,1,
        1,1,1,1,5,1,147,8,1,10,1,12,1,150,9,1,1,1,1,1,1,1,1,2,3,2,156,8,
        2,1,2,1,2,3,2,160,8,2,1,2,1,2,1,2,3,2,165,8,2,1,2,5,2,168,8,2,10,
        2,12,2,171,9,2,1,2,1,2,1,2,1,3,3,3,177,8,3,1,3,1,3,3,3,181,8,3,1,
        3,5,3,184,8,3,10,3,12,3,187,9,3,1,3,1,3,1,3,3,3,192,8,3,1,3,5,3,
        195,8,3,10,3,12,3,198,9,3,1,3,1,3,1,3,1,4,3,4,204,8,4,1,4,1,4,3,
        4,208,8,4,1,4,5,4,211,8,4,10,4,12,4,214,9,4,1,4,1,4,1,4,1,4,5,4,
        220,8,4,10,4,12,4,223,9,4,1,4,1,4,1,4,1,5,3,5,229,8,5,1,5,1,5,3,
        5,233,8,5,1,5,5,5,236,8,5,10,5,12,5,239,9,5,1,5,1,5,3,5,243,8,5,
        1,5,3,5,246,8,5,1,5,5,5,249,8,5,10,5,12,5,252,9,5,1,5,1,5,1,5,1,
        6,3,6,258,8,6,1,6,1,6,3,6,262,8,6,1,6,1,6,3,6,266,8,6,1,6,5,6,269,
        8,6,10,6,12,6,272,9,6,1,6,1,6,1,7,3,7,277,8,7,1,7,1,7,3,7,281,8,
        7,1,7,5,7,284,8,7,10,7,12,7,287,9,7,1,7,1,7,4,7,291,8,7,11,7,12,
        7,292,1,7,1,7,1,8,5,8,298,8,8,10,8,12,8,301,9,8,1,8,1,8,3,8,305,
        8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,313,8,8,10,8,12,8,316,9,8,1,8,1,
        8,3,8,320,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,328,8,8,10,8,12,8,331,
        9,8,1,8,1,8,3,8,335,8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,343,8,8,1,9,
        1,9,1,9,1,9,5,9,349,8,9,10,9,12,9,352,9,9,1,9,1,9,3,9,356,8,9,1,
        9,1,9,3,9,360,8,9,1,9,1,9,1,10,1,10,1,10,3,10,367,8,10,1,11,1,11,
        1,12,1,12,5,12,373,8,12,10,12,12,12,376,9,12,1,12,1,12,1,13,1,13,
        1,13,1,13,5,13,384,8,13,10,13,12,13,387,9,13,1,14,1,14,1,14,1,14,
        5,14,393,8,14,10,14,12,14,396,9,14,1,15,1,15,1,15,3,15,401,8,15,
        1,16,1,16,5,16,405,8,16,10,16,12,16,408,9,16,1,16,4,16,411,8,16,
        11,16,12,16,412,1,16,1,16,1,17,1,17,1,18,3,18,420,8,18,1,18,1,18,
        1,18,1,18,1,18,3,18,427,8,18,1,18,1,18,1,19,1,19,3,19,433,8,19,1,
        20,1,20,1,20,1,20,5,20,439,8,20,10,20,12,20,442,9,20,1,20,1,20,1,
        21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,
        21,459,8,21,1,22,1,22,3,22,463,8,22,1,23,1,23,1,23,1,23,3,23,469,
        8,23,1,23,1,23,3,23,473,8,23,1,23,1,23,3,23,477,8,23,1,23,1,23,1,
        23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
        23,3,23,495,8,23,3,23,497,8,23,1,24,1,24,3,24,501,8,24,1,25,1,25,
        1,26,1,26,1,27,5,27,508,8,27,10,27,12,27,511,9,27,1,28,1,28,1,28,
        1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,524,8,28,1,29,1,29,
        1,29,1,29,1,29,1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,32,5,32,539,
        8,32,10,32,12,32,542,9,32,1,33,1,33,1,33,1,33,3,33,548,8,33,1,34,
        1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,5,34,559,8,34,10,34,12,34,
        562,9,34,1,34,1,34,3,34,566,8,34,1,34,1,34,1,35,1,35,1,35,1,35,4,
        35,574,8,35,11,35,12,35,575,1,35,1,35,3,35,580,8,35,1,35,1,35,1,
        36,1,36,1,36,5,36,587,8,36,10,36,12,36,590,9,36,1,36,1,36,1,36,1,
        37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,
        39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,3,40,617,8,40,1,40,1,
        40,1,40,1,40,1,41,1,41,1,41,1,42,1,42,1,42,1,43,1,43,1,43,1,44,1,
        44,1,44,5,44,635,8,44,10,44,12,44,638,9,44,1,45,1,45,5,45,642,8,
        45,10,45,12,45,645,9,45,1,46,1,46,1,46,3,46,650,8,46,1,47,1,47,1,
        48,1,48,1,48,1,48,1,49,1,49,3,49,660,8,49,1,49,1,49,1,50,1,50,1,
        50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,674,8,50,1,51,1,51,1,
        51,1,51,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,
        54,1,54,1,54,1,54,3,54,695,8,54,1,54,1,54,1,54,1,54,1,54,1,54,1,
        54,1,54,1,54,1,54,1,54,1,54,5,54,709,8,54,10,54,12,54,712,9,54,1,
        55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,3,55,722,8,55,1,56,1,56,3,
        56,726,8,56,1,56,1,56,1,56,1,57,1,57,3,57,733,8,57,1,57,1,57,1,57,
        1,58,1,58,1,58,3,58,741,8,58,1,58,1,58,1,59,1,59,1,59,1,59,5,59,
        749,8,59,10,59,12,59,752,9,59,1,59,1,59,1,60,1,60,1,61,1,61,1,62,
        1,62,1,62,0,1,108,63,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
        32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
        76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,
        114,116,118,120,122,124,0,19,2,0,72,77,79,80,1,0,6,7,1,0,13,16,1,
        0,17,20,1,0,21,24,1,0,39,40,1,0,13,24,2,0,6,6,41,41,3,0,130,131,
        133,133,135,135,3,0,29,29,34,34,43,44,2,0,32,33,37,38,2,0,30,31,
        35,36,2,0,46,47,122,122,1,0,48,49,1,0,50,55,1,0,104,106,2,0,131,
        133,135,135,1,0,118,121,1,0,115,117,831,0,134,1,0,0,0,2,138,1,0,
        0,0,4,155,1,0,0,0,6,176,1,0,0,0,8,203,1,0,0,0,10,228,1,0,0,0,12,
        257,1,0,0,0,14,276,1,0,0,0,16,342,1,0,0,0,18,344,1,0,0,0,20,363,
        1,0,0,0,22,368,1,0,0,0,24,370,1,0,0,0,26,379,1,0,0,0,28,388,1,0,
        0,0,30,400,1,0,0,0,32,402,1,0,0,0,34,416,1,0,0,0,36,419,1,0,0,0,
        38,432,1,0,0,0,40,434,1,0,0,0,42,458,1,0,0,0,44,462,1,0,0,0,46,496,
        1,0,0,0,48,498,1,0,0,0,50,502,1,0,0,0,52,504,1,0,0,0,54,509,1,0,
        0,0,56,523,1,0,0,0,58,525,1,0,0,0,60,530,1,0,0,0,62,532,1,0,0,0,
        64,535,1,0,0,0,66,547,1,0,0,0,68,549,1,0,0,0,70,569,1,0,0,0,72,583,
        1,0,0,0,74,594,1,0,0,0,76,596,1,0,0,0,78,602,1,0,0,0,80,608,1,0,
        0,0,82,622,1,0,0,0,84,625,1,0,0,0,86,628,1,0,0,0,88,631,1,0,0,0,
        90,639,1,0,0,0,92,649,1,0,0,0,94,651,1,0,0,0,96,653,1,0,0,0,98,657,
        1,0,0,0,100,673,1,0,0,0,102,675,1,0,0,0,104,679,1,0,0,0,106,683,
        1,0,0,0,108,694,1,0,0,0,110,721,1,0,0,0,112,723,1,0,0,0,114,730,
        1,0,0,0,116,737,1,0,0,0,118,744,1,0,0,0,120,755,1,0,0,0,122,757,
        1,0,0,0,124,759,1,0,0,0,126,133,3,2,1,0,127,133,3,10,5,0,128,133,
        3,4,2,0,129,133,3,12,6,0,130,133,3,14,7,0,131,133,3,16,8,0,132,126,
        1,0,0,0,132,127,1,0,0,0,132,128,1,0,0,0,132,129,1,0,0,0,132,130,
        1,0,0,0,132,131,1,0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,135,
        1,0,0,0,135,1,1,0,0,0,136,134,1,0,0,0,137,139,3,116,58,0,138,137,
        1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,142,5,58,0,0,141,143,
        3,122,61,0,142,141,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,148,
        5,135,0,0,145,147,3,32,16,0,146,145,1,0,0,0,147,150,1,0,0,0,148,
        146,1,0,0,0,148,149,1,0,0,0,149,151,1,0,0,0,150,148,1,0,0,0,151,
        152,3,54,27,0,152,153,5,59,0,0,153,3,1,0,0,0,154,156,3,116,58,0,
        155,154,1,0,0,0,155,156,1,0,0,0,156,157,1,0,0,0,157,159,5,62,0,0,
        158,160,3,122,61,0,159,158,1,0,0,0,159,160,1,0,0,0,160,161,1,0,0,
        0,161,164,5,135,0,0,162,163,5,1,0,0,163,165,3,42,21,0,164,162,1,
        0,0,0,164,165,1,0,0,0,165,169,1,0,0,0,166,168,3,32,16,0,167,166,
        1,0,0,0,168,171,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,172,
        1,0,0,0,171,169,1,0,0,0,172,173,3,54,27,0,173,174,5,63,0,0,174,5,
        1,0,0,0,175,177,3,116,58,0,176,175,1,0,0,0,176,177,1,0,0,0,177,178,
        1,0,0,0,178,180,5,107,0,0,179,181,3,122,61,0,180,179,1,0,0,0,180,
        181,1,0,0,0,181,185,1,0,0,0,182,184,3,124,62,0,183,182,1,0,0,0,184,
        187,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,188,1,0,0,0,187,
        185,1,0,0,0,188,191,5,135,0,0,189,190,5,1,0,0,190,192,3,42,21,0,
        191,189,1,0,0,0,191,192,1,0,0,0,192,196,1,0,0,0,193,195,3,32,16,
        0,194,193,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,197,1,0,0,
        0,197,199,1,0,0,0,198,196,1,0,0,0,199,200,3,54,27,0,200,201,5,108,
        0,0,201,7,1,0,0,0,202,204,3,116,58,0,203,202,1,0,0,0,203,204,1,0,
        0,0,204,205,1,0,0,0,205,207,5,64,0,0,206,208,3,122,61,0,207,206,
        1,0,0,0,207,208,1,0,0,0,208,212,1,0,0,0,209,211,3,124,62,0,210,209,
        1,0,0,0,211,214,1,0,0,0,212,210,1,0,0,0,212,213,1,0,0,0,213,215,
        1,0,0,0,214,212,1,0,0,0,215,216,5,135,0,0,216,217,5,1,0,0,217,221,
        3,42,21,0,218,220,3,32,16,0,219,218,1,0,0,0,220,223,1,0,0,0,221,
        219,1,0,0,0,221,222,1,0,0,0,222,224,1,0,0,0,223,221,1,0,0,0,224,
        225,3,110,55,0,225,226,5,65,0,0,226,9,1,0,0,0,227,229,3,116,58,0,
        228,227,1,0,0,0,228,229,1,0,0,0,229,230,1,0,0,0,230,232,5,60,0,0,
        231,233,3,122,61,0,232,231,1,0,0,0,232,233,1,0,0,0,233,237,1,0,0,
        0,234,236,3,124,62,0,235,234,1,0,0,0,236,239,1,0,0,0,237,235,1,0,
        0,0,237,238,1,0,0,0,238,240,1,0,0,0,239,237,1,0,0,0,240,242,5,135,
        0,0,241,243,3,28,14,0,242,241,1,0,0,0,242,243,1,0,0,0,243,245,1,
        0,0,0,244,246,3,26,13,0,245,244,1,0,0,0,245,246,1,0,0,0,246,250,
        1,0,0,0,247,249,3,30,15,0,248,247,1,0,0,0,249,252,1,0,0,0,250,248,
        1,0,0,0,250,251,1,0,0,0,251,253,1,0,0,0,252,250,1,0,0,0,253,254,
        3,54,27,0,254,255,5,61,0,0,255,11,1,0,0,0,256,258,3,116,58,0,257,
        256,1,0,0,0,257,258,1,0,0,0,258,259,1,0,0,0,259,261,5,109,0,0,260,
        262,3,122,61,0,261,260,1,0,0,0,261,262,1,0,0,0,262,263,1,0,0,0,263,
        265,5,135,0,0,264,266,3,28,14,0,265,264,1,0,0,0,265,266,1,0,0,0,
        266,270,1,0,0,0,267,269,3,30,15,0,268,267,1,0,0,0,269,272,1,0,0,
        0,270,268,1,0,0,0,270,271,1,0,0,0,271,273,1,0,0,0,272,270,1,0,0,
        0,273,274,5,110,0,0,274,13,1,0,0,0,275,277,3,116,58,0,276,275,1,
        0,0,0,276,277,1,0,0,0,277,278,1,0,0,0,278,280,5,78,0,0,279,281,3,
        122,61,0,280,279,1,0,0,0,280,281,1,0,0,0,281,285,1,0,0,0,282,284,
        3,124,62,0,283,282,1,0,0,0,284,287,1,0,0,0,285,283,1,0,0,0,285,286,
        1,0,0,0,286,288,1,0,0,0,287,285,1,0,0,0,288,290,5,135,0,0,289,291,
        3,36,18,0,290,289,1,0,0,0,291,292,1,0,0,0,292,290,1,0,0,0,292,293,
        1,0,0,0,293,294,1,0,0,0,294,295,5,81,0,0,295,15,1,0,0,0,296,298,
        3,116,58,0,297,296,1,0,0,0,298,301,1,0,0,0,299,297,1,0,0,0,299,300,
        1,0,0,0,300,302,1,0,0,0,301,299,1,0,0,0,302,304,5,123,0,0,303,305,
        3,122,61,0,304,303,1,0,0,0,304,305,1,0,0,0,305,306,1,0,0,0,306,307,
        5,135,0,0,307,308,5,1,0,0,308,309,3,18,9,0,309,310,5,124,0,0,310,
        343,1,0,0,0,311,313,3,116,58,0,312,311,1,0,0,0,313,316,1,0,0,0,314,
        312,1,0,0,0,314,315,1,0,0,0,315,317,1,0,0,0,316,314,1,0,0,0,317,
        319,5,123,0,0,318,320,3,122,61,0,319,318,1,0,0,0,319,320,1,0,0,0,
        320,321,1,0,0,0,321,322,5,135,0,0,322,323,5,1,0,0,323,324,3,24,12,
        0,324,325,5,124,0,0,325,343,1,0,0,0,326,328,3,116,58,0,327,326,1,
        0,0,0,328,331,1,0,0,0,329,327,1,0,0,0,329,330,1,0,0,0,330,332,1,
        0,0,0,331,329,1,0,0,0,332,334,5,123,0,0,333,335,3,122,61,0,334,333,
        1,0,0,0,334,335,1,0,0,0,335,336,1,0,0,0,336,337,5,135,0,0,337,338,
        5,1,0,0,338,339,3,42,21,0,339,340,5,2,0,0,340,341,5,124,0,0,341,
        343,1,0,0,0,342,299,1,0,0,0,342,314,1,0,0,0,342,329,1,0,0,0,343,
        17,1,0,0,0,344,345,5,3,0,0,345,350,3,20,10,0,346,347,5,4,0,0,347,
        349,3,20,10,0,348,346,1,0,0,0,349,352,1,0,0,0,350,348,1,0,0,0,350,
        351,1,0,0,0,351,353,1,0,0,0,352,350,1,0,0,0,353,355,5,5,0,0,354,
        356,3,48,24,0,355,354,1,0,0,0,355,356,1,0,0,0,356,359,1,0,0,0,357,
        358,5,6,0,0,358,360,3,22,11,0,359,357,1,0,0,0,359,360,1,0,0,0,360,
        361,1,0,0,0,361,362,5,2,0,0,362,19,1,0,0,0,363,366,5,135,0,0,364,
        365,5,6,0,0,365,367,3,108,54,0,366,364,1,0,0,0,366,367,1,0,0,0,367,
        21,1,0,0,0,368,369,5,135,0,0,369,23,1,0,0,0,370,374,5,111,0,0,371,
        373,3,36,18,0,372,371,1,0,0,0,373,376,1,0,0,0,374,372,1,0,0,0,374,
        375,1,0,0,0,375,377,1,0,0,0,376,374,1,0,0,0,377,378,5,112,0,0,378,
        25,1,0,0,0,379,380,5,66,0,0,380,385,3,42,21,0,381,382,5,4,0,0,382,
        384,3,42,21,0,383,381,1,0,0,0,384,387,1,0,0,0,385,383,1,0,0,0,385,
        386,1,0,0,0,386,27,1,0,0,0,387,385,1,0,0,0,388,389,5,67,0,0,389,
        394,3,42,21,0,390,391,5,4,0,0,391,393,3,42,21,0,392,390,1,0,0,0,
        393,396,1,0,0,0,394,392,1,0,0,0,394,395,1,0,0,0,395,29,1,0,0,0,396,
        394,1,0,0,0,397,401,3,6,3,0,398,401,3,8,4,0,399,401,3,32,16,0,400,
        397,1,0,0,0,400,398,1,0,0,0,400,399,1,0,0,0,401,31,1,0,0,0,402,406,
        3,34,17,0,403,405,3,124,62,0,404,403,1,0,0,0,405,408,1,0,0,0,406,
        404,1,0,0,0,406,407,1,0,0,0,407,410,1,0,0,0,408,406,1,0,0,0,409,
        411,3,36,18,0,410,409,1,0,0,0,411,412,1,0,0,0,412,410,1,0,0,0,412,
        413,1,0,0,0,413,414,1,0,0,0,414,415,5,81,0,0,415,33,1,0,0,0,416,
        417,7,0,0,0,417,35,1,0,0,0,418,420,3,116,58,0,419,418,1,0,0,0,419,
        420,1,0,0,0,420,421,1,0,0,0,421,422,5,135,0,0,422,423,5,1,0,0,423,
        426,3,42,21,0,424,425,7,1,0,0,425,427,3,38,19,0,426,424,1,0,0,0,
        426,427,1,0,0,0,427,428,1,0,0,0,428,429,5,2,0,0,429,37,1,0,0,0,430,
        433,3,108,54,0,431,433,3,40,20,0,432,430,1,0,0,0,432,431,1,0,0,0,
        433,39,1,0,0,0,434,435,5,8,0,0,435,440,3,108,54,0,436,437,5,4,0,
        0,437,439,3,108,54,0,438,436,1,0,0,0,439,442,1,0,0,0,440,438,1,0,
        0,0,440,441,1,0,0,0,441,443,1,0,0,0,442,440,1,0,0,0,443,444,5,9,
        0,0,444,41,1,0,0,0,445,459,3,44,22,0,446,447,5,88,0,0,447,448,5,
        8,0,0,448,449,5,131,0,0,449,450,5,10,0,0,450,451,5,131,0,0,451,452,
        5,9,0,0,452,453,5,89,0,0,453,459,3,42,21,0,454,455,5,127,0,0,455,
        459,3,42,21,0,456,457,5,126,0,0,457,459,3,42,21,0,458,445,1,0,0,
        0,458,446,1,0,0,0,458,454,1,0,0,0,458,456,1,0,0,0,459,43,1,0,0,0,
        460,463,3,46,23,0,461,463,5,135,0,0,462,460,1,0,0,0,462,461,1,0,
        0,0,463,45,1,0,0,0,464,497,5,11,0,0,465,497,5,12,0,0,466,468,7,2,
        0,0,467,469,5,128,0,0,468,467,1,0,0,0,468,469,1,0,0,0,469,497,1,
        0,0,0,470,472,7,3,0,0,471,473,5,128,0,0,472,471,1,0,0,0,472,473,
        1,0,0,0,473,497,1,0,0,0,474,476,7,4,0,0,475,477,5,128,0,0,476,475,
        1,0,0,0,476,477,1,0,0,0,477,497,1,0,0,0,478,497,5,25,0,0,479,497,
        5,26,0,0,480,497,5,27,0,0,481,497,5,28,0,0,482,497,5,29,0,0,483,
        497,5,30,0,0,484,497,5,31,0,0,485,497,5,32,0,0,486,497,5,33,0,0,
        487,497,5,34,0,0,488,497,5,35,0,0,489,497,5,36,0,0,490,497,5,37,
        0,0,491,497,5,38,0,0,492,494,7,5,0,0,493,495,5,129,0,0,494,493,1,
        0,0,0,494,495,1,0,0,0,495,497,1,0,0,0,496,464,1,0,0,0,496,465,1,
        0,0,0,496,466,1,0,0,0,496,470,1,0,0,0,496,474,1,0,0,0,496,478,1,
        0,0,0,496,479,1,0,0,0,496,480,1,0,0,0,496,481,1,0,0,0,496,482,1,
        0,0,0,496,483,1,0,0,0,496,484,1,0,0,0,496,485,1,0,0,0,496,486,1,
        0,0,0,496,487,1,0,0,0,496,488,1,0,0,0,496,489,1,0,0,0,496,490,1,
        0,0,0,496,491,1,0,0,0,496,492,1,0,0,0,497,47,1,0,0,0,498,500,7,6,
        0,0,499,501,5,128,0,0,500,499,1,0,0,0,500,501,1,0,0,0,501,49,1,0,
        0,0,502,503,1,0,0,0,503,51,1,0,0,0,504,505,1,0,0,0,505,53,1,0,0,
        0,506,508,3,56,28,0,507,506,1,0,0,0,508,511,1,0,0,0,509,507,1,0,
        0,0,509,510,1,0,0,0,510,55,1,0,0,0,511,509,1,0,0,0,512,524,3,58,
        29,0,513,524,3,68,34,0,514,524,3,70,35,0,515,524,3,76,38,0,516,524,
        3,78,39,0,517,524,3,80,40,0,518,524,3,62,31,0,519,524,3,82,41,0,
        520,524,3,84,42,0,521,524,3,86,43,0,522,524,5,2,0,0,523,512,1,0,
        0,0,523,513,1,0,0,0,523,514,1,0,0,0,523,515,1,0,0,0,523,516,1,0,
        0,0,523,517,1,0,0,0,523,518,1,0,0,0,523,519,1,0,0,0,523,520,1,0,
        0,0,523,521,1,0,0,0,523,522,1,0,0,0,524,57,1,0,0,0,525,526,3,88,
        44,0,526,527,3,60,30,0,527,528,3,108,54,0,528,529,5,2,0,0,529,59,
        1,0,0,0,530,531,7,1,0,0,531,61,1,0,0,0,532,533,3,88,44,0,533,534,
        5,2,0,0,534,63,1,0,0,0,535,540,3,66,33,0,536,537,5,4,0,0,537,539,
        3,66,33,0,538,536,1,0,0,0,539,542,1,0,0,0,540,538,1,0,0,0,540,541,
        1,0,0,0,541,65,1,0,0,0,542,540,1,0,0,0,543,544,5,135,0,0,544,545,
        7,7,0,0,545,548,3,108,54,0,546,548,3,108,54,0,547,543,1,0,0,0,547,
        546,1,0,0,0,548,67,1,0,0,0,549,550,5,82,0,0,550,551,3,108,54,0,551,
        552,5,83,0,0,552,560,3,54,27,0,553,554,5,84,0,0,554,555,3,108,54,
        0,555,556,5,83,0,0,556,557,3,54,27,0,557,559,1,0,0,0,558,553,1,0,
        0,0,559,562,1,0,0,0,560,558,1,0,0,0,560,561,1,0,0,0,561,565,1,0,
        0,0,562,560,1,0,0,0,563,564,5,85,0,0,564,566,3,54,27,0,565,563,1,
        0,0,0,565,566,1,0,0,0,566,567,1,0,0,0,567,568,5,86,0,0,568,69,1,
        0,0,0,569,570,5,87,0,0,570,571,3,108,54,0,571,573,5,89,0,0,572,574,
        3,72,36,0,573,572,1,0,0,0,574,575,1,0,0,0,575,573,1,0,0,0,575,576,
        1,0,0,0,576,579,1,0,0,0,577,578,5,85,0,0,578,580,3,54,27,0,579,577,
        1,0,0,0,579,580,1,0,0,0,580,581,1,0,0,0,581,582,5,90,0,0,582,71,
        1,0,0,0,583,588,3,74,37,0,584,585,5,4,0,0,585,587,3,74,37,0,586,
        584,1,0,0,0,587,590,1,0,0,0,588,586,1,0,0,0,588,589,1,0,0,0,589,
        591,1,0,0,0,590,588,1,0,0,0,591,592,5,1,0,0,592,593,3,54,27,0,593,
        73,1,0,0,0,594,595,7,8,0,0,595,75,1,0,0,0,596,597,5,91,0,0,597,598,
        3,108,54,0,598,599,5,92,0,0,599,600,3,54,27,0,600,601,5,93,0,0,601,
        77,1,0,0,0,602,603,5,94,0,0,603,604,3,54,27,0,604,605,5,95,0,0,605,
        606,3,108,54,0,606,607,5,96,0,0,607,79,1,0,0,0,608,609,5,97,0,0,
        609,610,5,135,0,0,610,611,5,6,0,0,611,612,3,108,54,0,612,613,5,98,
        0,0,613,616,3,108,54,0,614,615,5,99,0,0,615,617,3,108,54,0,616,614,
        1,0,0,0,616,617,1,0,0,0,617,618,1,0,0,0,618,619,5,92,0,0,619,620,
        3,54,27,0,620,621,5,100,0,0,621,81,1,0,0,0,622,623,5,101,0,0,623,
        624,5,2,0,0,624,83,1,0,0,0,625,626,5,102,0,0,626,627,5,2,0,0,627,
        85,1,0,0,0,628,629,5,103,0,0,629,630,5,2,0,0,630,87,1,0,0,0,631,
        636,3,90,45,0,632,633,5,42,0,0,633,635,3,90,45,0,634,632,1,0,0,0,
        635,638,1,0,0,0,636,634,1,0,0,0,636,637,1,0,0,0,637,89,1,0,0,0,638,
        636,1,0,0,0,639,643,5,135,0,0,640,642,3,92,46,0,641,640,1,0,0,0,
        642,645,1,0,0,0,643,641,1,0,0,0,643,644,1,0,0,0,644,91,1,0,0,0,645,
        643,1,0,0,0,646,650,3,94,47,0,647,650,3,96,48,0,648,650,3,98,49,
        0,649,646,1,0,0,0,649,647,1,0,0,0,649,648,1,0,0,0,650,93,1,0,0,0,
        651,652,5,125,0,0,652,95,1,0,0,0,653,654,5,8,0,0,654,655,3,108,54,
        0,655,656,5,9,0,0,656,97,1,0,0,0,657,659,5,3,0,0,658,660,3,64,32,
        0,659,658,1,0,0,0,659,660,1,0,0,0,660,661,1,0,0,0,661,662,5,5,0,
        0,662,99,1,0,0,0,663,674,5,131,0,0,664,674,5,132,0,0,665,674,5,130,
        0,0,666,674,5,136,0,0,667,674,5,137,0,0,668,674,3,102,51,0,669,674,
        3,104,52,0,670,674,3,106,53,0,671,674,5,133,0,0,672,674,5,134,0,
        0,673,663,1,0,0,0,673,664,1,0,0,0,673,665,1,0,0,0,673,666,1,0,0,
        0,673,667,1,0,0,0,673,668,1,0,0,0,673,669,1,0,0,0,673,670,1,0,0,
        0,673,671,1,0,0,0,673,672,1,0,0,0,674,101,1,0,0,0,675,676,7,9,0,
        0,676,677,5,45,0,0,677,678,5,138,0,0,678,103,1,0,0,0,679,680,7,10,
        0,0,680,681,5,45,0,0,681,682,5,140,0,0,682,105,1,0,0,0,683,684,7,
        11,0,0,684,685,5,45,0,0,685,686,5,139,0,0,686,107,1,0,0,0,687,688,
        6,54,-1,0,688,695,3,100,50,0,689,695,3,88,44,0,690,691,5,3,0,0,691,
        692,3,108,54,0,692,693,5,5,0,0,693,695,1,0,0,0,694,687,1,0,0,0,694,
        689,1,0,0,0,694,690,1,0,0,0,695,710,1,0,0,0,696,697,10,7,0,0,697,
        698,7,12,0,0,698,709,3,108,54,8,699,700,10,6,0,0,700,701,7,13,0,
        0,701,709,3,108,54,7,702,703,10,5,0,0,703,704,7,14,0,0,704,709,3,
        108,54,6,705,706,10,4,0,0,706,707,7,15,0,0,707,709,3,108,54,5,708,
        696,1,0,0,0,708,699,1,0,0,0,708,702,1,0,0,0,708,705,1,0,0,0,709,
        712,1,0,0,0,710,708,1,0,0,0,710,711,1,0,0,0,711,109,1,0,0,0,712,
        710,1,0,0,0,713,722,3,112,56,0,714,722,3,114,57,0,715,716,3,112,
        56,0,716,717,3,114,57,0,717,722,1,0,0,0,718,719,3,114,57,0,719,720,
        3,112,56,0,720,722,1,0,0,0,721,713,1,0,0,0,721,714,1,0,0,0,721,715,
        1,0,0,0,721,718,1,0,0,0,722,111,1,0,0,0,723,725,5,68,0,0,724,726,
        3,122,61,0,725,724,1,0,0,0,725,726,1,0,0,0,726,727,1,0,0,0,727,728,
        3,54,27,0,728,729,5,69,0,0,729,113,1,0,0,0,730,732,5,70,0,0,731,
        733,3,122,61,0,732,731,1,0,0,0,732,733,1,0,0,0,733,734,1,0,0,0,734,
        735,3,54,27,0,735,736,5,71,0,0,736,115,1,0,0,0,737,738,5,56,0,0,
        738,740,5,135,0,0,739,741,3,118,59,0,740,739,1,0,0,0,740,741,1,0,
        0,0,741,742,1,0,0,0,742,743,5,57,0,0,743,117,1,0,0,0,744,745,5,3,
        0,0,745,750,3,120,60,0,746,747,5,4,0,0,747,749,3,120,60,0,748,746,
        1,0,0,0,749,752,1,0,0,0,750,748,1,0,0,0,750,751,1,0,0,0,751,753,
        1,0,0,0,752,750,1,0,0,0,753,754,5,5,0,0,754,119,1,0,0,0,755,756,
        7,16,0,0,756,121,1,0,0,0,757,758,7,17,0,0,758,123,1,0,0,0,759,760,
        7,18,0,0,760,125,1,0,0,0,84,132,134,138,142,148,155,159,164,169,
        176,180,185,191,196,203,207,212,221,228,232,237,242,245,250,257,
        261,265,270,276,280,285,292,299,304,314,319,329,334,342,350,355,
        359,366,374,385,394,400,406,412,419,426,432,440,458,462,468,472,
        476,494,496,500,509,523,540,547,560,565,575,579,588,616,636,643,
        649,659,673,694,708,710,721,725,732,740,750
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


export class EnumTypeContext extends antlr.ParserRuleContext {
    public _enumTypeId?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
