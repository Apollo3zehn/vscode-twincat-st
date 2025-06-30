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
    public static readonly PROGRAM = 43;
    public static readonly END_PROGRAM = 44;
    public static readonly FUNCTION_BLOCK = 45;
    public static readonly END_FUNCTION_BLOCK = 46;
    public static readonly FUNCTION = 47;
    public static readonly END_FUNCTION = 48;
    public static readonly PROPERTY = 49;
    public static readonly END_PROPERTY = 50;
    public static readonly IMPLEMENTS = 51;
    public static readonly EXTENDS = 52;
    public static readonly GET = 53;
    public static readonly END_GET = 54;
    public static readonly SET = 55;
    public static readonly END_SET = 56;
    public static readonly VAR = 57;
    public static readonly VAR_INPUT = 58;
    public static readonly VAR_OUTPUT = 59;
    public static readonly VAR_IN_OUT = 60;
    public static readonly VAR_TEMP = 61;
    public static readonly VAR_EXTERNAL = 62;
    public static readonly VAR_GLOBAL = 63;
    public static readonly VAR_INST = 64;
    public static readonly VAR_STAT = 65;
    public static readonly END_VAR = 66;
    public static readonly IF = 67;
    public static readonly THEN = 68;
    public static readonly ELSIF = 69;
    public static readonly ELSE = 70;
    public static readonly END_IF = 71;
    public static readonly CASE = 72;
    public static readonly ARRAY = 73;
    public static readonly OF = 74;
    public static readonly END_CASE = 75;
    public static readonly WHILE = 76;
    public static readonly DO = 77;
    public static readonly END_WHILE = 78;
    public static readonly REPEAT = 79;
    public static readonly UNTIL = 80;
    public static readonly END_REPEAT = 81;
    public static readonly FOR = 82;
    public static readonly TO = 83;
    public static readonly BY = 84;
    public static readonly END_FOR = 85;
    public static readonly RETURN = 86;
    public static readonly EXIT = 87;
    public static readonly CONTINUE = 88;
    public static readonly AND = 89;
    public static readonly OR = 90;
    public static readonly XOR = 91;
    public static readonly METHOD = 92;
    public static readonly END_METHOD = 93;
    public static readonly INTERFACE = 94;
    public static readonly END_INTERFACE = 95;
    public static readonly STRUCT = 96;
    public static readonly END_STRUCT = 97;
    public static readonly ENUM = 98;
    public static readonly END_ENUM = 99;
    public static readonly ABSTRACT = 100;
    public static readonly FINAL = 101;
    public static readonly CONSTANT = 102;
    public static readonly PUBLIC = 103;
    public static readonly PRIVATE = 104;
    public static readonly PROTECTED = 105;
    public static readonly INTERNAL = 106;
    public static readonly REFERENCE_TO = 107;
    public static readonly MOD = 108;
    public static readonly TYPE = 109;
    public static readonly END_TYPE = 110;
    public static readonly BOOL = 111;
    public static readonly ID = 112;
    public static readonly NUMBER = 113;
    public static readonly TIME_LITERAL = 114;
    public static readonly STRING_LITERAL = 115;
    public static readonly WS = 116;
    public static readonly COMMENT = 117;
    public static readonly COMMENT_BLOCK = 118;
    public static readonly RULE_program = 0;
    public static readonly RULE_function = 1;
    public static readonly RULE_functionBlock = 2;
    public static readonly RULE_property = 3;
    public static readonly RULE_method = 4;
    public static readonly RULE_interface = 5;
    public static readonly RULE_typeDecl = 6;
    public static readonly RULE_enumDecl = 7;
    public static readonly RULE_varGlobalSection = 8;
    public static readonly RULE_implementsClause = 9;
    public static readonly RULE_extendsClause = 10;
    public static readonly RULE_member = 11;
    public static readonly RULE_varDeclSection = 12;
    public static readonly RULE_varSectionType = 13;
    public static readonly RULE_varDecl = 14;
    public static readonly RULE_arraySpec = 15;
    public static readonly RULE_exprOrArrayInit = 16;
    public static readonly RULE_arrayInit = 17;
    public static readonly RULE_type = 18;
    public static readonly RULE_builtinType = 19;
    public static readonly RULE_statementSection = 20;
    public static readonly RULE_statement = 21;
    public static readonly RULE_assignment = 22;
    public static readonly RULE_assignTarget = 23;
    public static readonly RULE_arrayIndex = 24;
    public static readonly RULE_callStatement = 25;
    public static readonly RULE_argumentList = 26;
    public static readonly RULE_argument = 27;
    public static readonly RULE_ifStatement = 28;
    public static readonly RULE_caseStatement = 29;
    public static readonly RULE_caseElement = 30;
    public static readonly RULE_caseValue = 31;
    public static readonly RULE_whileStatement = 32;
    public static readonly RULE_repeatStatement = 33;
    public static readonly RULE_forStatement = 34;
    public static readonly RULE_returnStatement = 35;
    public static readonly RULE_exitStatement = 36;
    public static readonly RULE_continueStatement = 37;
    public static readonly RULE_memberQualifier = 38;
    public static readonly RULE_expr = 39;
    public static readonly RULE_structDecl = 40;
    public static readonly RULE_compilationUnit = 41;
    public static readonly RULE_propertyBody = 42;
    public static readonly RULE_getter = 43;
    public static readonly RULE_setter = 44;
    public static readonly RULE_attribute = 45;
    public static readonly RULE_attributeArgList = 46;
    public static readonly RULE_attributeArg = 47;
    public static readonly RULE_accessModifier = 48;
    public static readonly RULE_modifier = 49;
    public static readonly RULE_enumMemberList = 50;

    public static readonly literalNames = [
        null, "':'", "','", "':='", "';'", "'['", "'..'", "']'", "'INT'", 
        "'REAL'", "'BOOL'", "'STRING'", "'DINT'", "'BYTE'", "'WORD'", "'DWORD'", 
        "'SINT'", "'USINT'", "'UINT'", "'UDINT'", "'LINT'", "'ULINT'", "'LREAL'", 
        "'TIME'", "'DATE'", "'TIME_OF_DAY'", "'DATE_AND_TIME'", "'='", "'.'", 
        "'('", "')'", "'=>'", "'*'", "'/'", "'+'", "'-'", "'<'", "'>'", 
        "'<='", "'>='", "'<>'", "'{'", "'}'", "'PROGRAM'", "'END_PROGRAM'", 
        "'FUNCTION_BLOCK'", "'END_FUNCTION_BLOCK'", "'FUNCTION'", "'END_FUNCTION'", 
        "'PROPERTY'", "'END_PROPERTY'", "'IMPLEMENTS'", "'EXTENDS'", "'GET'", 
        "'END_GET'", "'SET'", "'END_SET'", "'VAR'", "'VAR_INPUT'", "'VAR_OUTPUT'", 
        "'VAR_IN_OUT'", "'VAR_TEMP'", "'VAR_EXTERNAL'", "'VAR_GLOBAL'", 
        "'VAR_INST'", "'VAR_STAT'", "'END_VAR'", "'IF'", "'THEN'", "'ELSIF'", 
        "'ELSE'", "'END_IF'", "'CASE'", "'ARRAY'", "'OF'", "'END_CASE'", 
        "'WHILE'", "'DO'", "'END_WHILE'", "'REPEAT'", "'UNTIL'", "'END_REPEAT'", 
        "'FOR'", "'TO'", "'BY'", "'END_FOR'", "'RETURN'", "'EXIT'", "'CONTINUE'", 
        "'AND'", "'OR'", "'XOR'", "'METHOD'", "'END_METHOD'", "'INTERFACE'", 
        "'END_INTERFACE'", "'STRUCT'", "'END_STRUCT'", "'ENUM'", "'END_ENUM'", 
        "'ABSTRACT'", "'FINAL'", "'CONSTANT'", "'PUBLIC'", "'PRIVATE'", 
        "'PROTECTED'", "'INTERNAL'", "'REFERENCE TO'", "'MOD'", "'TYPE'", 
        "'END_TYPE'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, "PROGRAM", 
        "END_PROGRAM", "FUNCTION_BLOCK", "END_FUNCTION_BLOCK", "FUNCTION", 
        "END_FUNCTION", "PROPERTY", "END_PROPERTY", "IMPLEMENTS", "EXTENDS", 
        "GET", "END_GET", "SET", "END_SET", "VAR", "VAR_INPUT", "VAR_OUTPUT", 
        "VAR_IN_OUT", "VAR_TEMP", "VAR_EXTERNAL", "VAR_GLOBAL", "VAR_INST", 
        "VAR_STAT", "END_VAR", "IF", "THEN", "ELSIF", "ELSE", "END_IF", 
        "CASE", "ARRAY", "OF", "END_CASE", "WHILE", "DO", "END_WHILE", "REPEAT", 
        "UNTIL", "END_REPEAT", "FOR", "TO", "BY", "END_FOR", "RETURN", "EXIT", 
        "CONTINUE", "AND", "OR", "XOR", "METHOD", "END_METHOD", "INTERFACE", 
        "END_INTERFACE", "STRUCT", "END_STRUCT", "ENUM", "END_ENUM", "ABSTRACT", 
        "FINAL", "CONSTANT", "PUBLIC", "PRIVATE", "PROTECTED", "INTERNAL", 
        "REFERENCE_TO", "MOD", "TYPE", "END_TYPE", "BOOL", "ID", "NUMBER", 
        "TIME_LITERAL", "STRING_LITERAL", "WS", "COMMENT", "COMMENT_BLOCK"
    ];
    public static readonly ruleNames = [
        "program", "function", "functionBlock", "property", "method", "interface", 
        "typeDecl", "enumDecl", "varGlobalSection", "implementsClause", 
        "extendsClause", "member", "varDeclSection", "varSectionType", "varDecl", 
        "arraySpec", "exprOrArrayInit", "arrayInit", "type", "builtinType", 
        "statementSection", "statement", "assignment", "assignTarget", "arrayIndex", 
        "callStatement", "argumentList", "argument", "ifStatement", "caseStatement", 
        "caseElement", "caseValue", "whileStatement", "repeatStatement", 
        "forStatement", "returnStatement", "exitStatement", "continueStatement", 
        "memberQualifier", "expr", "structDecl", "compilationUnit", "propertyBody", 
        "getter", "setter", "attribute", "attributeArgList", "attributeArg", 
        "accessModifier", "modifier", "enumMemberList",
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
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, StructuredTextParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 103;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 102;
                this.attribute();
                }
            }

            this.state = 105;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 107;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 106;
                this.accessModifier();
                }
            }

            this.state = 109;
            this.match(StructuredTextParser.ID);
            this.state = 113;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 110;
                this.varDeclSection();
                }
                }
                this.state = 115;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 116;
            this.statementSection();
            this.state = 117;
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
        this.enterRule(localContext, 2, StructuredTextParser.RULE_function);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 120;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 119;
                this.attribute();
                }
            }

            this.state = 122;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 124;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 123;
                this.accessModifier();
                }
            }

            this.state = 126;
            this.match(StructuredTextParser.ID);
            this.state = 127;
            this.match(StructuredTextParser.T__0);
            this.state = 128;
            this.type_();
            this.state = 130;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 129;
                this.implementsClause();
                }
            }

            this.state = 133;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 132;
                this.extendsClause();
                }
            }

            this.state = 138;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 135;
                this.varDeclSection();
                }
                }
                this.state = 140;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 141;
            this.statementSection();
            this.state = 142;
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
    public functionBlock(): FunctionBlockContext {
        let localContext = new FunctionBlockContext(this.context, this.state);
        this.enterRule(localContext, 4, StructuredTextParser.RULE_functionBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 145;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 144;
                this.attribute();
                }
            }

            this.state = 147;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 149;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 148;
                this.accessModifier();
                }
            }

            this.state = 154;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 151;
                this.modifier();
                }
                }
                this.state = 156;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 157;
            this.match(StructuredTextParser.ID);
            this.state = 159;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 158;
                this.implementsClause();
                }
            }

            this.state = 162;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 161;
                this.extendsClause();
                }
            }

            this.state = 167;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 29294849) !== 0) || _la === 92) {
                {
                {
                this.state = 164;
                this.member();
                }
                }
                this.state = 169;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 170;
            this.statementSection();
            this.state = 171;
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
    public property(): PropertyContext {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 6, StructuredTextParser.RULE_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 174;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 173;
                this.attribute();
                }
            }

            this.state = 176;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 178;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 177;
                this.accessModifier();
                }
            }

            this.state = 183;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 180;
                this.modifier();
                }
                }
                this.state = 185;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 186;
            this.match(StructuredTextParser.ID);
            this.state = 187;
            this.match(StructuredTextParser.T__0);
            this.state = 188;
            this.type_();
            this.state = 192;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 189;
                this.varDeclSection();
                }
                }
                this.state = 194;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 195;
            this.propertyBody();
            this.state = 196;
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
    public method(): MethodContext {
        let localContext = new MethodContext(this.context, this.state);
        this.enterRule(localContext, 8, StructuredTextParser.RULE_method);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 199;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 198;
                this.attribute();
                }
            }

            this.state = 201;
            this.match(StructuredTextParser.METHOD);
            this.state = 203;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 202;
                this.accessModifier();
                }
            }

            this.state = 208;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 205;
                this.modifier();
                }
                }
                this.state = 210;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 211;
            this.match(StructuredTextParser.ID);
            this.state = 214;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 212;
                this.match(StructuredTextParser.T__0);
                this.state = 213;
                this.type_();
                }
            }

            this.state = 219;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 216;
                this.varDeclSection();
                }
                }
                this.state = 221;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 222;
            this.statementSection();
            this.state = 223;
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
    public interface_(): InterfaceContext {
        let localContext = new InterfaceContext(this.context, this.state);
        this.enterRule(localContext, 10, StructuredTextParser.RULE_interface);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 225;
                this.attribute();
                }
            }

            this.state = 228;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 230;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 229;
                this.accessModifier();
                }
            }

            this.state = 232;
            this.match(StructuredTextParser.ID);
            this.state = 234;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 233;
                this.extendsClause();
                }
            }

            this.state = 239;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 29294849) !== 0) || _la === 92) {
                {
                {
                this.state = 236;
                this.member();
                }
                }
                this.state = 241;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 242;
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
    public typeDecl(): TypeDeclContext {
        let localContext = new TypeDeclContext(this.context, this.state);
        this.enterRule(localContext, 12, StructuredTextParser.RULE_typeDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 245;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 244;
                this.attribute();
                }
            }

            this.state = 247;
            this.match(StructuredTextParser.TYPE);
            this.state = 249;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 248;
                this.accessModifier();
                }
            }

            this.state = 251;
            this.match(StructuredTextParser.ID);
            this.state = 252;
            this.match(StructuredTextParser.T__0);
            this.state = 253;
            this.structDecl();
            this.state = 254;
            this.match(StructuredTextParser.END_TYPE);
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
        this.enterRule(localContext, 14, StructuredTextParser.RULE_enumDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 257;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 256;
                this.attribute();
                }
            }

            this.state = 259;
            this.match(StructuredTextParser.ENUM);
            this.state = 261;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 260;
                this.accessModifier();
                }
            }

            this.state = 263;
            this.match(StructuredTextParser.ID);
            this.state = 264;
            this.enumMemberList();
            this.state = 265;
            this.match(StructuredTextParser.END_ENUM);
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
        this.enterRule(localContext, 16, StructuredTextParser.RULE_varGlobalSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 268;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 267;
                this.attribute();
                }
            }

            this.state = 270;
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 274;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 271;
                this.modifier();
                }
                }
                this.state = 276;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 278;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 277;
                this.varDecl();
                }
                }
                this.state = 280;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 41 || _la === 112);
            this.state = 282;
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
    public implementsClause(): ImplementsClauseContext {
        let localContext = new ImplementsClauseContext(this.context, this.state);
        this.enterRule(localContext, 18, StructuredTextParser.RULE_implementsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 284;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 285;
            this.type_();
            this.state = 290;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 286;
                this.match(StructuredTextParser.T__1);
                this.state = 287;
                this.type_();
                }
                }
                this.state = 292;
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
        this.enterRule(localContext, 20, StructuredTextParser.RULE_extendsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 293;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 294;
            this.type_();
            this.state = 299;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 295;
                this.match(StructuredTextParser.T__1);
                this.state = 296;
                this.type_();
                }
                }
                this.state = 301;
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
        this.enterRule(localContext, 22, StructuredTextParser.RULE_member);
        try {
            this.state = 305;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 302;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 303;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 304;
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
        this.enterRule(localContext, 24, StructuredTextParser.RULE_varDeclSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 307;
            this.varSectionType();
            this.state = 311;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 308;
                this.modifier();
                }
                }
                this.state = 313;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 315;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 314;
                this.varDecl();
                }
                }
                this.state = 317;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 41 || _la === 112);
            this.state = 319;
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
        this.enterRule(localContext, 26, StructuredTextParser.RULE_varSectionType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 321;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0))) {
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
        this.enterRule(localContext, 28, StructuredTextParser.RULE_varDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 324;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 323;
                this.attribute();
                }
            }

            this.state = 326;
            this.match(StructuredTextParser.ID);
            this.state = 327;
            this.match(StructuredTextParser.T__0);
            this.state = 329;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 107) {
                {
                this.state = 328;
                this.match(StructuredTextParser.REFERENCE_TO);
                }
            }

            this.state = 332;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 73) {
                {
                this.state = 331;
                this.arraySpec();
                }
            }

            this.state = 334;
            this.type_();
            this.state = 337;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 335;
                this.match(StructuredTextParser.T__2);
                this.state = 336;
                this.exprOrArrayInit();
                }
            }

            this.state = 339;
            this.match(StructuredTextParser.T__3);
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
    public arraySpec(): ArraySpecContext {
        let localContext = new ArraySpecContext(this.context, this.state);
        this.enterRule(localContext, 30, StructuredTextParser.RULE_arraySpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 341;
            this.match(StructuredTextParser.ARRAY);
            this.state = 342;
            this.match(StructuredTextParser.T__4);
            this.state = 343;
            this.match(StructuredTextParser.NUMBER);
            this.state = 344;
            this.match(StructuredTextParser.T__5);
            this.state = 345;
            this.match(StructuredTextParser.NUMBER);
            this.state = 346;
            this.match(StructuredTextParser.T__6);
            this.state = 347;
            this.match(StructuredTextParser.OF);
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
        this.enterRule(localContext, 32, StructuredTextParser.RULE_exprOrArrayInit);
        try {
            this.state = 351;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__28:
            case StructuredTextParser.BOOL:
            case StructuredTextParser.ID:
            case StructuredTextParser.NUMBER:
            case StructuredTextParser.TIME_LITERAL:
            case StructuredTextParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 349;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__4:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 350;
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
        this.enterRule(localContext, 34, StructuredTextParser.RULE_arrayInit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 353;
            this.match(StructuredTextParser.T__4);
            this.state = 354;
            this.expr(0);
            this.state = 359;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 355;
                this.match(StructuredTextParser.T__1);
                this.state = 356;
                this.expr(0);
                }
                }
                this.state = 361;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 362;
            this.match(StructuredTextParser.T__6);
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
        this.enterRule(localContext, 36, StructuredTextParser.RULE_type);
        try {
            this.state = 366;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__7:
            case StructuredTextParser.T__8:
            case StructuredTextParser.T__9:
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
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 364;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 365;
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
        this.enterRule(localContext, 38, StructuredTextParser.RULE_builtinType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 368;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 134217472) !== 0))) {
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
    public statementSection(): StatementSectionContext {
        let localContext = new StatementSectionContext(this.context, this.state);
        this.enterRule(localContext, 40, StructuredTextParser.RULE_statementSection);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 373;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 46, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 370;
                    this.statement();
                    }
                    }
                }
                this.state = 375;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 46, this.context);
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
        this.enterRule(localContext, 42, StructuredTextParser.RULE_statement);
        try {
            this.state = 387;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 376;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 377;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 378;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 379;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 380;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 381;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 382;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 383;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 384;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 385;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 386;
                this.match(StructuredTextParser.T__3);
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
        this.enterRule(localContext, 44, StructuredTextParser.RULE_assignment);
        try {
            this.state = 399;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 389;
                this.assignTarget();
                this.state = 390;
                this.match(StructuredTextParser.T__2);
                this.state = 391;
                this.expr(0);
                this.state = 392;
                this.match(StructuredTextParser.T__3);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 394;
                this.assignTarget();
                this.state = 395;
                this.match(StructuredTextParser.T__26);
                this.state = 396;
                this.expr(0);
                this.state = 397;
                this.match(StructuredTextParser.T__3);
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
    public assignTarget(): AssignTargetContext {
        let localContext = new AssignTargetContext(this.context, this.state);
        this.enterRule(localContext, 46, StructuredTextParser.RULE_assignTarget);
        let _la: number;
        try {
            this.state = 411;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 51, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 401;
                this.match(StructuredTextParser.ID);
                this.state = 403;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                    this.state = 402;
                    this.arrayIndex();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 405;
                this.memberQualifier();
                this.state = 406;
                this.match(StructuredTextParser.T__27);
                this.state = 407;
                this.match(StructuredTextParser.ID);
                this.state = 409;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                    this.state = 408;
                    this.arrayIndex();
                    }
                }

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
    public arrayIndex(): ArrayIndexContext {
        let localContext = new ArrayIndexContext(this.context, this.state);
        this.enterRule(localContext, 48, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 413;
            this.match(StructuredTextParser.T__4);
            this.state = 414;
            this.expr(0);
            this.state = 415;
            this.match(StructuredTextParser.T__6);
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
        this.enterRule(localContext, 50, StructuredTextParser.RULE_callStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 422;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
            case 1:
                {
                this.state = 417;
                this.match(StructuredTextParser.ID);
                }
                break;
            case 2:
                {
                this.state = 418;
                this.memberQualifier();
                this.state = 419;
                this.match(StructuredTextParser.T__27);
                this.state = 420;
                this.match(StructuredTextParser.ID);
                }
                break;
            }
            this.state = 424;
            this.match(StructuredTextParser.T__28);
            this.state = 426;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 31) !== 0)) {
                {
                this.state = 425;
                this.argumentList();
                }
            }

            this.state = 428;
            this.match(StructuredTextParser.T__29);
            this.state = 429;
            this.match(StructuredTextParser.T__3);
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
        this.enterRule(localContext, 52, StructuredTextParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 431;
            this.argument();
            this.state = 436;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 432;
                this.match(StructuredTextParser.T__1);
                this.state = 433;
                this.argument();
                }
                }
                this.state = 438;
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
        this.enterRule(localContext, 54, StructuredTextParser.RULE_argument);
        let _la: number;
        try {
            this.state = 443;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 439;
                this.match(StructuredTextParser.ID);
                this.state = 440;
                _la = this.tokenStream.LA(1);
                if(!(_la === 3 || _la === 31)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 441;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 442;
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
        this.enterRule(localContext, 56, StructuredTextParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 445;
            this.match(StructuredTextParser.IF);
            this.state = 446;
            this.expr(0);
            this.state = 447;
            this.match(StructuredTextParser.THEN);
            this.state = 448;
            this.statementSection();
            this.state = 456;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 69) {
                {
                {
                this.state = 449;
                this.match(StructuredTextParser.ELSIF);
                this.state = 450;
                this.expr(0);
                this.state = 451;
                this.match(StructuredTextParser.THEN);
                this.state = 452;
                this.statementSection();
                }
                }
                this.state = 458;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 461;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 70) {
                {
                this.state = 459;
                this.match(StructuredTextParser.ELSE);
                this.state = 460;
                this.statementSection();
                }
            }

            this.state = 463;
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
        this.enterRule(localContext, 58, StructuredTextParser.RULE_caseStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 465;
            this.match(StructuredTextParser.CASE);
            this.state = 466;
            this.expr(0);
            this.state = 467;
            this.match(StructuredTextParser.OF);
            this.state = 469;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 468;
                this.caseElement();
                }
                }
                this.state = 471;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 23) !== 0));
            this.state = 475;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 70) {
                {
                this.state = 473;
                this.match(StructuredTextParser.ELSE);
                this.state = 474;
                this.statementSection();
                }
            }

            this.state = 477;
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
        this.enterRule(localContext, 60, StructuredTextParser.RULE_caseElement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 479;
            this.caseValue();
            this.state = 484;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 480;
                this.match(StructuredTextParser.T__1);
                this.state = 481;
                this.caseValue();
                }
                }
                this.state = 486;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 487;
            this.match(StructuredTextParser.T__0);
            this.state = 488;
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
        this.enterRule(localContext, 62, StructuredTextParser.RULE_caseValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 490;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 23) !== 0))) {
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
        this.enterRule(localContext, 64, StructuredTextParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 492;
            this.match(StructuredTextParser.WHILE);
            this.state = 493;
            this.expr(0);
            this.state = 494;
            this.match(StructuredTextParser.DO);
            this.state = 495;
            this.statementSection();
            this.state = 496;
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
        this.enterRule(localContext, 66, StructuredTextParser.RULE_repeatStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 498;
            this.match(StructuredTextParser.REPEAT);
            this.state = 499;
            this.statementSection();
            this.state = 500;
            this.match(StructuredTextParser.UNTIL);
            this.state = 501;
            this.expr(0);
            this.state = 502;
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
        this.enterRule(localContext, 68, StructuredTextParser.RULE_forStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 504;
            this.match(StructuredTextParser.FOR);
            this.state = 505;
            this.match(StructuredTextParser.ID);
            this.state = 506;
            this.match(StructuredTextParser.T__2);
            this.state = 507;
            this.expr(0);
            this.state = 508;
            this.match(StructuredTextParser.TO);
            this.state = 509;
            this.expr(0);
            this.state = 512;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 84) {
                {
                this.state = 510;
                this.match(StructuredTextParser.BY);
                this.state = 511;
                this.expr(0);
                }
            }

            this.state = 514;
            this.match(StructuredTextParser.DO);
            this.state = 515;
            this.statementSection();
            this.state = 516;
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
        this.enterRule(localContext, 70, StructuredTextParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 518;
            this.match(StructuredTextParser.RETURN);
            this.state = 519;
            this.match(StructuredTextParser.T__3);
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
        this.enterRule(localContext, 72, StructuredTextParser.RULE_exitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 521;
            this.match(StructuredTextParser.EXIT);
            this.state = 522;
            this.match(StructuredTextParser.T__3);
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
        this.enterRule(localContext, 74, StructuredTextParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 524;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 525;
            this.match(StructuredTextParser.T__3);
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
    public memberQualifier(): MemberQualifierContext {
        let localContext = new MemberQualifierContext(this.context, this.state);
        this.enterRule(localContext, 76, StructuredTextParser.RULE_memberQualifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 527;
            this.match(StructuredTextParser.ID);
            this.state = 529;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 528;
                this.arrayIndex();
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
        let _startState = 78;
        this.enterRecursionRule(localContext, 78, StructuredTextParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 565;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 67, this.context) ) {
            case 1:
                {
                this.state = 532;
                this.match(StructuredTextParser.ID);
                this.state = 533;
                this.match(StructuredTextParser.T__28);
                this.state = 535;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 29 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 31) !== 0)) {
                    {
                    this.state = 534;
                    this.argumentList();
                    }
                }

                this.state = 537;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case 2:
                {
                this.state = 538;
                this.match(StructuredTextParser.ID);
                this.state = 540;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context) ) {
                case 1:
                    {
                    this.state = 539;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            case 3:
                {
                this.state = 542;
                this.memberQualifier();
                this.state = 543;
                this.match(StructuredTextParser.T__27);
                this.state = 544;
                this.match(StructuredTextParser.ID);
                this.state = 545;
                this.match(StructuredTextParser.T__28);
                this.state = 547;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 29 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 31) !== 0)) {
                    {
                    this.state = 546;
                    this.argumentList();
                    }
                }

                this.state = 549;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case 4:
                {
                this.state = 551;
                this.memberQualifier();
                this.state = 552;
                this.match(StructuredTextParser.T__27);
                this.state = 553;
                this.match(StructuredTextParser.ID);
                this.state = 555;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 66, this.context) ) {
                case 1:
                    {
                    this.state = 554;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            case 5:
                {
                this.state = 557;
                this.match(StructuredTextParser.T__28);
                this.state = 558;
                this.expr(0);
                this.state = 559;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case 6:
                {
                this.state = 561;
                this.match(StructuredTextParser.NUMBER);
                }
                break;
            case 7:
                {
                this.state = 562;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case 8:
                {
                this.state = 563;
                this.match(StructuredTextParser.TIME_LITERAL);
                }
                break;
            case 9:
                {
                this.state = 564;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 581;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 69, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 579;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 68, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 567;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 568;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 32 || _la === 33 || _la === 108)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 569;
                        this.expr(14);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 570;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 571;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 34 || _la === 35)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 572;
                        this.expr(13);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 573;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 574;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 15873) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 575;
                        this.expr(12);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 576;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 577;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 578;
                        this.expr(11);
                        }
                        break;
                    }
                    }
                }
                this.state = 583;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 69, this.context);
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
    public structDecl(): StructDeclContext {
        let localContext = new StructDeclContext(this.context, this.state);
        this.enterRule(localContext, 80, StructuredTextParser.RULE_structDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 584;
            this.match(StructuredTextParser.STRUCT);
            this.state = 588;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 41 || _la === 112) {
                {
                {
                this.state = 585;
                this.varDecl();
                }
                }
                this.state = 590;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 591;
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
    public compilationUnit(): CompilationUnitContext {
        let localContext = new CompilationUnitContext(this.context, this.state);
        this.enterRule(localContext, 82, StructuredTextParser.RULE_compilationUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 601;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 4194389) !== 0) || _la === 94 || _la === 109) {
                {
                this.state = 599;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
                case 1:
                    {
                    this.state = 593;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 594;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 595;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 596;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 597;
                    this.varGlobalSection();
                    }
                    break;
                case 6:
                    {
                    this.state = 598;
                    this.typeDecl();
                    }
                    break;
                }
                }
                this.state = 603;
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
    public propertyBody(): PropertyBodyContext {
        let localContext = new PropertyBodyContext(this.context, this.state);
        this.enterRule(localContext, 84, StructuredTextParser.RULE_propertyBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 612;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
            case 1:
                {
                this.state = 604;
                this.getter();
                }
                break;
            case 2:
                {
                this.state = 605;
                this.setter();
                }
                break;
            case 3:
                {
                this.state = 606;
                this.getter();
                this.state = 607;
                this.setter();
                }
                break;
            case 4:
                {
                this.state = 609;
                this.setter();
                this.state = 610;
                this.getter();
                }
                break;
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
    public getter(): GetterContext {
        let localContext = new GetterContext(this.context, this.state);
        this.enterRule(localContext, 86, StructuredTextParser.RULE_getter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 614;
            this.match(StructuredTextParser.GET);
            this.state = 616;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 615;
                this.accessModifier();
                }
            }

            this.state = 618;
            this.statementSection();
            this.state = 619;
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
        this.enterRule(localContext, 88, StructuredTextParser.RULE_setter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 621;
            this.match(StructuredTextParser.SET);
            this.state = 623;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 622;
                this.accessModifier();
                }
            }

            this.state = 625;
            this.statementSection();
            this.state = 626;
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
        this.enterRule(localContext, 90, StructuredTextParser.RULE_attribute);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 628;
            this.match(StructuredTextParser.T__40);
            this.state = 629;
            this.match(StructuredTextParser.ID);
            this.state = 631;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 630;
                this.attributeArgList();
                }
            }

            this.state = 633;
            this.match(StructuredTextParser.T__41);
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
        this.enterRule(localContext, 92, StructuredTextParser.RULE_attributeArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 635;
            this.match(StructuredTextParser.T__28);
            this.state = 636;
            this.attributeArg();
            this.state = 641;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 637;
                this.match(StructuredTextParser.T__1);
                this.state = 638;
                this.attributeArg();
                }
                }
                this.state = 643;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 644;
            this.match(StructuredTextParser.T__29);
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
        this.enterRule(localContext, 94, StructuredTextParser.RULE_attributeArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 646;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 11) !== 0))) {
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
        this.enterRule(localContext, 96, StructuredTextParser.RULE_accessModifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 648;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0))) {
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
        this.enterRule(localContext, 98, StructuredTextParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 650;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0))) {
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
    public enumMemberList(): EnumMemberListContext {
        let localContext = new EnumMemberListContext(this.context, this.state);
        this.enterRule(localContext, 100, StructuredTextParser.RULE_enumMemberList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 652;
            this.match(StructuredTextParser.ID);
            this.state = 657;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 653;
                this.match(StructuredTextParser.T__1);
                this.state = 654;
                this.match(StructuredTextParser.ID);
                }
                }
                this.state = 659;
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

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 39:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 13);
        case 1:
            return this.precpred(this.context, 12);
        case 2:
            return this.precpred(this.context, 11);
        case 3:
            return this.precpred(this.context, 10);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,118,661,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,1,0,3,0,104,8,0,
        1,0,1,0,3,0,108,8,0,1,0,1,0,5,0,112,8,0,10,0,12,0,115,9,0,1,0,1,
        0,1,0,1,1,3,1,121,8,1,1,1,1,1,3,1,125,8,1,1,1,1,1,1,1,1,1,3,1,131,
        8,1,1,1,3,1,134,8,1,1,1,5,1,137,8,1,10,1,12,1,140,9,1,1,1,1,1,1,
        1,1,2,3,2,146,8,2,1,2,1,2,3,2,150,8,2,1,2,5,2,153,8,2,10,2,12,2,
        156,9,2,1,2,1,2,3,2,160,8,2,1,2,3,2,163,8,2,1,2,5,2,166,8,2,10,2,
        12,2,169,9,2,1,2,1,2,1,2,1,3,3,3,175,8,3,1,3,1,3,3,3,179,8,3,1,3,
        5,3,182,8,3,10,3,12,3,185,9,3,1,3,1,3,1,3,1,3,5,3,191,8,3,10,3,12,
        3,194,9,3,1,3,1,3,1,3,1,4,3,4,200,8,4,1,4,1,4,3,4,204,8,4,1,4,5,
        4,207,8,4,10,4,12,4,210,9,4,1,4,1,4,1,4,3,4,215,8,4,1,4,5,4,218,
        8,4,10,4,12,4,221,9,4,1,4,1,4,1,4,1,5,3,5,227,8,5,1,5,1,5,3,5,231,
        8,5,1,5,1,5,3,5,235,8,5,1,5,5,5,238,8,5,10,5,12,5,241,9,5,1,5,1,
        5,1,6,3,6,246,8,6,1,6,1,6,3,6,250,8,6,1,6,1,6,1,6,1,6,1,6,1,7,3,
        7,258,8,7,1,7,1,7,3,7,262,8,7,1,7,1,7,1,7,1,7,1,8,3,8,269,8,8,1,
        8,1,8,5,8,273,8,8,10,8,12,8,276,9,8,1,8,4,8,279,8,8,11,8,12,8,280,
        1,8,1,8,1,9,1,9,1,9,1,9,5,9,289,8,9,10,9,12,9,292,9,9,1,10,1,10,
        1,10,1,10,5,10,298,8,10,10,10,12,10,301,9,10,1,11,1,11,1,11,3,11,
        306,8,11,1,12,1,12,5,12,310,8,12,10,12,12,12,313,9,12,1,12,4,12,
        316,8,12,11,12,12,12,317,1,12,1,12,1,13,1,13,1,14,3,14,325,8,14,
        1,14,1,14,1,14,3,14,330,8,14,1,14,3,14,333,8,14,1,14,1,14,1,14,3,
        14,338,8,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
        16,1,16,3,16,352,8,16,1,17,1,17,1,17,1,17,5,17,358,8,17,10,17,12,
        17,361,9,17,1,17,1,17,1,18,1,18,3,18,367,8,18,1,19,1,19,1,20,5,20,
        372,8,20,10,20,12,20,375,9,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
        1,21,1,21,1,21,1,21,3,21,388,8,21,1,22,1,22,1,22,1,22,1,22,1,22,
        1,22,1,22,1,22,1,22,3,22,400,8,22,1,23,1,23,3,23,404,8,23,1,23,1,
        23,1,23,1,23,3,23,410,8,23,3,23,412,8,23,1,24,1,24,1,24,1,24,1,25,
        1,25,1,25,1,25,1,25,3,25,423,8,25,1,25,1,25,3,25,427,8,25,1,25,1,
        25,1,25,1,26,1,26,1,26,5,26,435,8,26,10,26,12,26,438,9,26,1,27,1,
        27,1,27,1,27,3,27,444,8,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,
        28,1,28,5,28,455,8,28,10,28,12,28,458,9,28,1,28,1,28,3,28,462,8,
        28,1,28,1,28,1,29,1,29,1,29,1,29,4,29,470,8,29,11,29,12,29,471,1,
        29,1,29,3,29,476,8,29,1,29,1,29,1,30,1,30,1,30,5,30,483,8,30,10,
        30,12,30,486,9,30,1,30,1,30,1,30,1,31,1,31,1,32,1,32,1,32,1,32,1,
        32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,
        34,1,34,1,34,3,34,513,8,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,
        36,1,36,1,36,1,37,1,37,1,37,1,38,1,38,3,38,530,8,38,1,39,1,39,1,
        39,1,39,3,39,536,8,39,1,39,1,39,1,39,3,39,541,8,39,1,39,1,39,1,39,
        1,39,1,39,3,39,548,8,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,556,8,
        39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,566,8,39,1,39,1,
        39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,5,39,580,8,
        39,10,39,12,39,583,9,39,1,40,1,40,5,40,587,8,40,10,40,12,40,590,
        9,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,5,41,600,8,41,10,41,
        12,41,603,9,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,613,
        8,42,1,43,1,43,3,43,617,8,43,1,43,1,43,1,43,1,44,1,44,3,44,624,8,
        44,1,44,1,44,1,44,1,45,1,45,1,45,3,45,632,8,45,1,45,1,45,1,46,1,
        46,1,46,1,46,5,46,640,8,46,10,46,12,46,643,9,46,1,46,1,46,1,47,1,
        47,1,48,1,48,1,49,1,49,1,50,1,50,1,50,5,50,656,8,50,10,50,12,50,
        659,9,50,1,50,0,1,78,51,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
        30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,
        74,76,78,80,82,84,86,88,90,92,94,96,98,100,0,11,2,0,57,62,64,65,
        1,0,8,26,2,0,3,3,31,31,2,0,111,113,115,115,2,0,32,33,108,108,1,0,
        34,35,2,0,27,27,36,40,1,0,89,91,2,0,112,113,115,115,1,0,103,106,
        1,0,100,102,713,0,103,1,0,0,0,2,120,1,0,0,0,4,145,1,0,0,0,6,174,
        1,0,0,0,8,199,1,0,0,0,10,226,1,0,0,0,12,245,1,0,0,0,14,257,1,0,0,
        0,16,268,1,0,0,0,18,284,1,0,0,0,20,293,1,0,0,0,22,305,1,0,0,0,24,
        307,1,0,0,0,26,321,1,0,0,0,28,324,1,0,0,0,30,341,1,0,0,0,32,351,
        1,0,0,0,34,353,1,0,0,0,36,366,1,0,0,0,38,368,1,0,0,0,40,373,1,0,
        0,0,42,387,1,0,0,0,44,399,1,0,0,0,46,411,1,0,0,0,48,413,1,0,0,0,
        50,422,1,0,0,0,52,431,1,0,0,0,54,443,1,0,0,0,56,445,1,0,0,0,58,465,
        1,0,0,0,60,479,1,0,0,0,62,490,1,0,0,0,64,492,1,0,0,0,66,498,1,0,
        0,0,68,504,1,0,0,0,70,518,1,0,0,0,72,521,1,0,0,0,74,524,1,0,0,0,
        76,527,1,0,0,0,78,565,1,0,0,0,80,584,1,0,0,0,82,601,1,0,0,0,84,612,
        1,0,0,0,86,614,1,0,0,0,88,621,1,0,0,0,90,628,1,0,0,0,92,635,1,0,
        0,0,94,646,1,0,0,0,96,648,1,0,0,0,98,650,1,0,0,0,100,652,1,0,0,0,
        102,104,3,90,45,0,103,102,1,0,0,0,103,104,1,0,0,0,104,105,1,0,0,
        0,105,107,5,43,0,0,106,108,3,96,48,0,107,106,1,0,0,0,107,108,1,0,
        0,0,108,109,1,0,0,0,109,113,5,112,0,0,110,112,3,24,12,0,111,110,
        1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,116,
        1,0,0,0,115,113,1,0,0,0,116,117,3,40,20,0,117,118,5,44,0,0,118,1,
        1,0,0,0,119,121,3,90,45,0,120,119,1,0,0,0,120,121,1,0,0,0,121,122,
        1,0,0,0,122,124,5,47,0,0,123,125,3,96,48,0,124,123,1,0,0,0,124,125,
        1,0,0,0,125,126,1,0,0,0,126,127,5,112,0,0,127,128,5,1,0,0,128,130,
        3,36,18,0,129,131,3,18,9,0,130,129,1,0,0,0,130,131,1,0,0,0,131,133,
        1,0,0,0,132,134,3,20,10,0,133,132,1,0,0,0,133,134,1,0,0,0,134,138,
        1,0,0,0,135,137,3,24,12,0,136,135,1,0,0,0,137,140,1,0,0,0,138,136,
        1,0,0,0,138,139,1,0,0,0,139,141,1,0,0,0,140,138,1,0,0,0,141,142,
        3,40,20,0,142,143,5,48,0,0,143,3,1,0,0,0,144,146,3,90,45,0,145,144,
        1,0,0,0,145,146,1,0,0,0,146,147,1,0,0,0,147,149,5,45,0,0,148,150,
        3,96,48,0,149,148,1,0,0,0,149,150,1,0,0,0,150,154,1,0,0,0,151,153,
        3,98,49,0,152,151,1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,
        1,0,0,0,155,157,1,0,0,0,156,154,1,0,0,0,157,159,5,112,0,0,158,160,
        3,18,9,0,159,158,1,0,0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,163,
        3,20,10,0,162,161,1,0,0,0,162,163,1,0,0,0,163,167,1,0,0,0,164,166,
        3,22,11,0,165,164,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,167,168,
        1,0,0,0,168,170,1,0,0,0,169,167,1,0,0,0,170,171,3,40,20,0,171,172,
        5,46,0,0,172,5,1,0,0,0,173,175,3,90,45,0,174,173,1,0,0,0,174,175,
        1,0,0,0,175,176,1,0,0,0,176,178,5,49,0,0,177,179,3,96,48,0,178,177,
        1,0,0,0,178,179,1,0,0,0,179,183,1,0,0,0,180,182,3,98,49,0,181,180,
        1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,186,
        1,0,0,0,185,183,1,0,0,0,186,187,5,112,0,0,187,188,5,1,0,0,188,192,
        3,36,18,0,189,191,3,24,12,0,190,189,1,0,0,0,191,194,1,0,0,0,192,
        190,1,0,0,0,192,193,1,0,0,0,193,195,1,0,0,0,194,192,1,0,0,0,195,
        196,3,84,42,0,196,197,5,50,0,0,197,7,1,0,0,0,198,200,3,90,45,0,199,
        198,1,0,0,0,199,200,1,0,0,0,200,201,1,0,0,0,201,203,5,92,0,0,202,
        204,3,96,48,0,203,202,1,0,0,0,203,204,1,0,0,0,204,208,1,0,0,0,205,
        207,3,98,49,0,206,205,1,0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,208,
        209,1,0,0,0,209,211,1,0,0,0,210,208,1,0,0,0,211,214,5,112,0,0,212,
        213,5,1,0,0,213,215,3,36,18,0,214,212,1,0,0,0,214,215,1,0,0,0,215,
        219,1,0,0,0,216,218,3,24,12,0,217,216,1,0,0,0,218,221,1,0,0,0,219,
        217,1,0,0,0,219,220,1,0,0,0,220,222,1,0,0,0,221,219,1,0,0,0,222,
        223,3,40,20,0,223,224,5,93,0,0,224,9,1,0,0,0,225,227,3,90,45,0,226,
        225,1,0,0,0,226,227,1,0,0,0,227,228,1,0,0,0,228,230,5,94,0,0,229,
        231,3,96,48,0,230,229,1,0,0,0,230,231,1,0,0,0,231,232,1,0,0,0,232,
        234,5,112,0,0,233,235,3,20,10,0,234,233,1,0,0,0,234,235,1,0,0,0,
        235,239,1,0,0,0,236,238,3,22,11,0,237,236,1,0,0,0,238,241,1,0,0,
        0,239,237,1,0,0,0,239,240,1,0,0,0,240,242,1,0,0,0,241,239,1,0,0,
        0,242,243,5,95,0,0,243,11,1,0,0,0,244,246,3,90,45,0,245,244,1,0,
        0,0,245,246,1,0,0,0,246,247,1,0,0,0,247,249,5,109,0,0,248,250,3,
        96,48,0,249,248,1,0,0,0,249,250,1,0,0,0,250,251,1,0,0,0,251,252,
        5,112,0,0,252,253,5,1,0,0,253,254,3,80,40,0,254,255,5,110,0,0,255,
        13,1,0,0,0,256,258,3,90,45,0,257,256,1,0,0,0,257,258,1,0,0,0,258,
        259,1,0,0,0,259,261,5,98,0,0,260,262,3,96,48,0,261,260,1,0,0,0,261,
        262,1,0,0,0,262,263,1,0,0,0,263,264,5,112,0,0,264,265,3,100,50,0,
        265,266,5,99,0,0,266,15,1,0,0,0,267,269,3,90,45,0,268,267,1,0,0,
        0,268,269,1,0,0,0,269,270,1,0,0,0,270,274,5,63,0,0,271,273,3,98,
        49,0,272,271,1,0,0,0,273,276,1,0,0,0,274,272,1,0,0,0,274,275,1,0,
        0,0,275,278,1,0,0,0,276,274,1,0,0,0,277,279,3,28,14,0,278,277,1,
        0,0,0,279,280,1,0,0,0,280,278,1,0,0,0,280,281,1,0,0,0,281,282,1,
        0,0,0,282,283,5,66,0,0,283,17,1,0,0,0,284,285,5,51,0,0,285,290,3,
        36,18,0,286,287,5,2,0,0,287,289,3,36,18,0,288,286,1,0,0,0,289,292,
        1,0,0,0,290,288,1,0,0,0,290,291,1,0,0,0,291,19,1,0,0,0,292,290,1,
        0,0,0,293,294,5,52,0,0,294,299,3,36,18,0,295,296,5,2,0,0,296,298,
        3,36,18,0,297,295,1,0,0,0,298,301,1,0,0,0,299,297,1,0,0,0,299,300,
        1,0,0,0,300,21,1,0,0,0,301,299,1,0,0,0,302,306,3,8,4,0,303,306,3,
        6,3,0,304,306,3,24,12,0,305,302,1,0,0,0,305,303,1,0,0,0,305,304,
        1,0,0,0,306,23,1,0,0,0,307,311,3,26,13,0,308,310,3,98,49,0,309,308,
        1,0,0,0,310,313,1,0,0,0,311,309,1,0,0,0,311,312,1,0,0,0,312,315,
        1,0,0,0,313,311,1,0,0,0,314,316,3,28,14,0,315,314,1,0,0,0,316,317,
        1,0,0,0,317,315,1,0,0,0,317,318,1,0,0,0,318,319,1,0,0,0,319,320,
        5,66,0,0,320,25,1,0,0,0,321,322,7,0,0,0,322,27,1,0,0,0,323,325,3,
        90,45,0,324,323,1,0,0,0,324,325,1,0,0,0,325,326,1,0,0,0,326,327,
        5,112,0,0,327,329,5,1,0,0,328,330,5,107,0,0,329,328,1,0,0,0,329,
        330,1,0,0,0,330,332,1,0,0,0,331,333,3,30,15,0,332,331,1,0,0,0,332,
        333,1,0,0,0,333,334,1,0,0,0,334,337,3,36,18,0,335,336,5,3,0,0,336,
        338,3,32,16,0,337,335,1,0,0,0,337,338,1,0,0,0,338,339,1,0,0,0,339,
        340,5,4,0,0,340,29,1,0,0,0,341,342,5,73,0,0,342,343,5,5,0,0,343,
        344,5,113,0,0,344,345,5,6,0,0,345,346,5,113,0,0,346,347,5,7,0,0,
        347,348,5,74,0,0,348,31,1,0,0,0,349,352,3,78,39,0,350,352,3,34,17,
        0,351,349,1,0,0,0,351,350,1,0,0,0,352,33,1,0,0,0,353,354,5,5,0,0,
        354,359,3,78,39,0,355,356,5,2,0,0,356,358,3,78,39,0,357,355,1,0,
        0,0,358,361,1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,360,362,1,0,
        0,0,361,359,1,0,0,0,362,363,5,7,0,0,363,35,1,0,0,0,364,367,3,38,
        19,0,365,367,5,112,0,0,366,364,1,0,0,0,366,365,1,0,0,0,367,37,1,
        0,0,0,368,369,7,1,0,0,369,39,1,0,0,0,370,372,3,42,21,0,371,370,1,
        0,0,0,372,375,1,0,0,0,373,371,1,0,0,0,373,374,1,0,0,0,374,41,1,0,
        0,0,375,373,1,0,0,0,376,388,3,44,22,0,377,388,3,56,28,0,378,388,
        3,58,29,0,379,388,3,64,32,0,380,388,3,66,33,0,381,388,3,68,34,0,
        382,388,3,50,25,0,383,388,3,70,35,0,384,388,3,72,36,0,385,388,3,
        74,37,0,386,388,5,4,0,0,387,376,1,0,0,0,387,377,1,0,0,0,387,378,
        1,0,0,0,387,379,1,0,0,0,387,380,1,0,0,0,387,381,1,0,0,0,387,382,
        1,0,0,0,387,383,1,0,0,0,387,384,1,0,0,0,387,385,1,0,0,0,387,386,
        1,0,0,0,388,43,1,0,0,0,389,390,3,46,23,0,390,391,5,3,0,0,391,392,
        3,78,39,0,392,393,5,4,0,0,393,400,1,0,0,0,394,395,3,46,23,0,395,
        396,5,27,0,0,396,397,3,78,39,0,397,398,5,4,0,0,398,400,1,0,0,0,399,
        389,1,0,0,0,399,394,1,0,0,0,400,45,1,0,0,0,401,403,5,112,0,0,402,
        404,3,48,24,0,403,402,1,0,0,0,403,404,1,0,0,0,404,412,1,0,0,0,405,
        406,3,76,38,0,406,407,5,28,0,0,407,409,5,112,0,0,408,410,3,48,24,
        0,409,408,1,0,0,0,409,410,1,0,0,0,410,412,1,0,0,0,411,401,1,0,0,
        0,411,405,1,0,0,0,412,47,1,0,0,0,413,414,5,5,0,0,414,415,3,78,39,
        0,415,416,5,7,0,0,416,49,1,0,0,0,417,423,5,112,0,0,418,419,3,76,
        38,0,419,420,5,28,0,0,420,421,5,112,0,0,421,423,1,0,0,0,422,417,
        1,0,0,0,422,418,1,0,0,0,423,424,1,0,0,0,424,426,5,29,0,0,425,427,
        3,52,26,0,426,425,1,0,0,0,426,427,1,0,0,0,427,428,1,0,0,0,428,429,
        5,30,0,0,429,430,5,4,0,0,430,51,1,0,0,0,431,436,3,54,27,0,432,433,
        5,2,0,0,433,435,3,54,27,0,434,432,1,0,0,0,435,438,1,0,0,0,436,434,
        1,0,0,0,436,437,1,0,0,0,437,53,1,0,0,0,438,436,1,0,0,0,439,440,5,
        112,0,0,440,441,7,2,0,0,441,444,3,78,39,0,442,444,3,78,39,0,443,
        439,1,0,0,0,443,442,1,0,0,0,444,55,1,0,0,0,445,446,5,67,0,0,446,
        447,3,78,39,0,447,448,5,68,0,0,448,456,3,40,20,0,449,450,5,69,0,
        0,450,451,3,78,39,0,451,452,5,68,0,0,452,453,3,40,20,0,453,455,1,
        0,0,0,454,449,1,0,0,0,455,458,1,0,0,0,456,454,1,0,0,0,456,457,1,
        0,0,0,457,461,1,0,0,0,458,456,1,0,0,0,459,460,5,70,0,0,460,462,3,
        40,20,0,461,459,1,0,0,0,461,462,1,0,0,0,462,463,1,0,0,0,463,464,
        5,71,0,0,464,57,1,0,0,0,465,466,5,72,0,0,466,467,3,78,39,0,467,469,
        5,74,0,0,468,470,3,60,30,0,469,468,1,0,0,0,470,471,1,0,0,0,471,469,
        1,0,0,0,471,472,1,0,0,0,472,475,1,0,0,0,473,474,5,70,0,0,474,476,
        3,40,20,0,475,473,1,0,0,0,475,476,1,0,0,0,476,477,1,0,0,0,477,478,
        5,75,0,0,478,59,1,0,0,0,479,484,3,62,31,0,480,481,5,2,0,0,481,483,
        3,62,31,0,482,480,1,0,0,0,483,486,1,0,0,0,484,482,1,0,0,0,484,485,
        1,0,0,0,485,487,1,0,0,0,486,484,1,0,0,0,487,488,5,1,0,0,488,489,
        3,40,20,0,489,61,1,0,0,0,490,491,7,3,0,0,491,63,1,0,0,0,492,493,
        5,76,0,0,493,494,3,78,39,0,494,495,5,77,0,0,495,496,3,40,20,0,496,
        497,5,78,0,0,497,65,1,0,0,0,498,499,5,79,0,0,499,500,3,40,20,0,500,
        501,5,80,0,0,501,502,3,78,39,0,502,503,5,81,0,0,503,67,1,0,0,0,504,
        505,5,82,0,0,505,506,5,112,0,0,506,507,5,3,0,0,507,508,3,78,39,0,
        508,509,5,83,0,0,509,512,3,78,39,0,510,511,5,84,0,0,511,513,3,78,
        39,0,512,510,1,0,0,0,512,513,1,0,0,0,513,514,1,0,0,0,514,515,5,77,
        0,0,515,516,3,40,20,0,516,517,5,85,0,0,517,69,1,0,0,0,518,519,5,
        86,0,0,519,520,5,4,0,0,520,71,1,0,0,0,521,522,5,87,0,0,522,523,5,
        4,0,0,523,73,1,0,0,0,524,525,5,88,0,0,525,526,5,4,0,0,526,75,1,0,
        0,0,527,529,5,112,0,0,528,530,3,48,24,0,529,528,1,0,0,0,529,530,
        1,0,0,0,530,77,1,0,0,0,531,532,6,39,-1,0,532,533,5,112,0,0,533,535,
        5,29,0,0,534,536,3,52,26,0,535,534,1,0,0,0,535,536,1,0,0,0,536,537,
        1,0,0,0,537,566,5,30,0,0,538,540,5,112,0,0,539,541,3,48,24,0,540,
        539,1,0,0,0,540,541,1,0,0,0,541,566,1,0,0,0,542,543,3,76,38,0,543,
        544,5,28,0,0,544,545,5,112,0,0,545,547,5,29,0,0,546,548,3,52,26,
        0,547,546,1,0,0,0,547,548,1,0,0,0,548,549,1,0,0,0,549,550,5,30,0,
        0,550,566,1,0,0,0,551,552,3,76,38,0,552,553,5,28,0,0,553,555,5,112,
        0,0,554,556,3,48,24,0,555,554,1,0,0,0,555,556,1,0,0,0,556,566,1,
        0,0,0,557,558,5,29,0,0,558,559,3,78,39,0,559,560,5,30,0,0,560,566,
        1,0,0,0,561,566,5,113,0,0,562,566,5,111,0,0,563,566,5,114,0,0,564,
        566,5,115,0,0,565,531,1,0,0,0,565,538,1,0,0,0,565,542,1,0,0,0,565,
        551,1,0,0,0,565,557,1,0,0,0,565,561,1,0,0,0,565,562,1,0,0,0,565,
        563,1,0,0,0,565,564,1,0,0,0,566,581,1,0,0,0,567,568,10,13,0,0,568,
        569,7,4,0,0,569,580,3,78,39,14,570,571,10,12,0,0,571,572,7,5,0,0,
        572,580,3,78,39,13,573,574,10,11,0,0,574,575,7,6,0,0,575,580,3,78,
        39,12,576,577,10,10,0,0,577,578,7,7,0,0,578,580,3,78,39,11,579,567,
        1,0,0,0,579,570,1,0,0,0,579,573,1,0,0,0,579,576,1,0,0,0,580,583,
        1,0,0,0,581,579,1,0,0,0,581,582,1,0,0,0,582,79,1,0,0,0,583,581,1,
        0,0,0,584,588,5,96,0,0,585,587,3,28,14,0,586,585,1,0,0,0,587,590,
        1,0,0,0,588,586,1,0,0,0,588,589,1,0,0,0,589,591,1,0,0,0,590,588,
        1,0,0,0,591,592,5,97,0,0,592,81,1,0,0,0,593,600,3,0,0,0,594,600,
        3,4,2,0,595,600,3,2,1,0,596,600,3,10,5,0,597,600,3,16,8,0,598,600,
        3,12,6,0,599,593,1,0,0,0,599,594,1,0,0,0,599,595,1,0,0,0,599,596,
        1,0,0,0,599,597,1,0,0,0,599,598,1,0,0,0,600,603,1,0,0,0,601,599,
        1,0,0,0,601,602,1,0,0,0,602,83,1,0,0,0,603,601,1,0,0,0,604,613,3,
        86,43,0,605,613,3,88,44,0,606,607,3,86,43,0,607,608,3,88,44,0,608,
        613,1,0,0,0,609,610,3,88,44,0,610,611,3,86,43,0,611,613,1,0,0,0,
        612,604,1,0,0,0,612,605,1,0,0,0,612,606,1,0,0,0,612,609,1,0,0,0,
        613,85,1,0,0,0,614,616,5,53,0,0,615,617,3,96,48,0,616,615,1,0,0,
        0,616,617,1,0,0,0,617,618,1,0,0,0,618,619,3,40,20,0,619,620,5,54,
        0,0,620,87,1,0,0,0,621,623,5,55,0,0,622,624,3,96,48,0,623,622,1,
        0,0,0,623,624,1,0,0,0,624,625,1,0,0,0,625,626,3,40,20,0,626,627,
        5,56,0,0,627,89,1,0,0,0,628,629,5,41,0,0,629,631,5,112,0,0,630,632,
        3,92,46,0,631,630,1,0,0,0,631,632,1,0,0,0,632,633,1,0,0,0,633,634,
        5,42,0,0,634,91,1,0,0,0,635,636,5,29,0,0,636,641,3,94,47,0,637,638,
        5,2,0,0,638,640,3,94,47,0,639,637,1,0,0,0,640,643,1,0,0,0,641,639,
        1,0,0,0,641,642,1,0,0,0,642,644,1,0,0,0,643,641,1,0,0,0,644,645,
        5,30,0,0,645,93,1,0,0,0,646,647,7,8,0,0,647,95,1,0,0,0,648,649,7,
        9,0,0,649,97,1,0,0,0,650,651,7,10,0,0,651,99,1,0,0,0,652,657,5,112,
        0,0,653,654,5,2,0,0,654,656,5,112,0,0,655,653,1,0,0,0,656,659,1,
        0,0,0,657,655,1,0,0,0,657,658,1,0,0,0,658,101,1,0,0,0,659,657,1,
        0,0,0,79,103,107,113,120,124,130,133,138,145,149,154,159,162,167,
        174,178,183,192,199,203,208,214,219,226,230,234,239,245,249,257,
        261,268,274,280,290,299,305,311,317,324,329,332,337,351,359,366,
        373,387,399,403,409,411,422,426,436,443,456,461,471,475,484,512,
        529,535,540,547,555,565,579,581,588,599,601,612,616,623,631,641,
        657
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
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
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
    public implementsClause(): ImplementsClauseContext | null {
        return this.getRuleContext(0, ImplementsClauseContext);
    }
    public extendsClause(): ExtendsClauseContext | null {
        return this.getRuleContext(0, ExtendsClauseContext);
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
    public implementsClause(): ImplementsClauseContext | null {
        return this.getRuleContext(0, ImplementsClauseContext);
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
    public structDecl(): StructDeclContext {
        return this.getRuleContext(0, StructDeclContext)!;
    }
    public END_TYPE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_TYPE, 0)!;
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
    }
    public accessModifier(): AccessModifierContext | null {
        return this.getRuleContext(0, AccessModifierContext);
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
    public ENUM(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ENUM, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public enumMemberList(): EnumMemberListContext {
        return this.getRuleContext(0, EnumMemberListContext)!;
    }
    public END_ENUM(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_ENUM, 0)!;
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
    }
    public accessModifier(): AccessModifierContext | null {
        return this.getRuleContext(0, AccessModifierContext);
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


export class VarGlobalSectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VAR_GLOBAL(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.VAR_GLOBAL, 0)!;
    }
    public END_VAR(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_VAR, 0)!;
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
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
    public REFERENCE_TO(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.REFERENCE_TO, 0);
    }
    public arraySpec(): ArraySpecContext | null {
        return this.getRuleContext(0, ArraySpecContext);
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


export class ArraySpecContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ARRAY(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ARRAY, 0)!;
    }
    public NUMBER(): antlr.TerminalNode[];
    public NUMBER(i: number): antlr.TerminalNode | null;
    public NUMBER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(StructuredTextParser.NUMBER);
    	} else {
    		return this.getToken(StructuredTextParser.NUMBER, i);
    	}
    }
    public OF(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.OF, 0)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_arraySpec;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitArraySpec) {
            return visitor.visitArraySpec(this);
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
    public builtinType(): BuiltinTypeContext | null {
        return this.getRuleContext(0, BuiltinTypeContext);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ID, 0);
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


export class BuiltinTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
    public assignTarget(): AssignTargetContext {
        return this.getRuleContext(0, AssignTargetContext)!;
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


export class AssignTargetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public arrayIndex(): ArrayIndexContext | null {
        return this.getRuleContext(0, ArrayIndexContext);
    }
    public memberQualifier(): MemberQualifierContext | null {
        return this.getRuleContext(0, MemberQualifierContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_assignTarget;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitAssignTarget) {
            return visitor.visitAssignTarget(this);
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


export class CallStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ID, 0);
    }
    public memberQualifier(): MemberQualifierContext | null {
        return this.getRuleContext(0, MemberQualifierContext);
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
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
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.NUMBER, 0);
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


export class MemberQualifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public arrayIndex(): ArrayIndexContext | null {
        return this.getRuleContext(0, ArrayIndexContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_memberQualifier;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitMemberQualifier) {
            return visitor.visitMemberQualifier(this);
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ID, 0);
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
    }
    public arrayIndex(): ArrayIndexContext | null {
        return this.getRuleContext(0, ArrayIndexContext);
    }
    public memberQualifier(): MemberQualifierContext | null {
        return this.getRuleContext(0, MemberQualifierContext);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.NUMBER, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.BOOL, 0);
    }
    public TIME_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.TIME_LITERAL, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.STRING_LITERAL, 0);
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
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.NUMBER, 0);
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


export class EnumMemberListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(StructuredTextParser.ID);
    	} else {
    		return this.getToken(StructuredTextParser.ID, i);
    	}
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_enumMemberList;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitEnumMemberList) {
            return visitor.visitEnumMemberList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
