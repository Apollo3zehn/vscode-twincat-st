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
    public static readonly NAMESPACE = 100;
    public static readonly END_NAMESPACE = 101;
    public static readonly ABSTRACT = 102;
    public static readonly FINAL = 103;
    public static readonly CONSTANT = 104;
    public static readonly PUBLIC = 105;
    public static readonly PRIVATE = 106;
    public static readonly PROTECTED = 107;
    public static readonly INTERNAL = 108;
    public static readonly REFERENCE_TO = 109;
    public static readonly MOD = 110;
    public static readonly BOOL = 111;
    public static readonly ID = 112;
    public static readonly NUMBER = 113;
    public static readonly TIME_LITERAL = 114;
    public static readonly STRING_LITERAL = 115;
    public static readonly WS = 116;
    public static readonly COMMENT = 117;
    public static readonly RULE_program = 0;
    public static readonly RULE_function = 1;
    public static readonly RULE_functionBlock = 2;
    public static readonly RULE_property = 3;
    public static readonly RULE_method = 4;
    public static readonly RULE_interface = 5;
    public static readonly RULE_structDecl = 6;
    public static readonly RULE_enumDecl = 7;
    public static readonly RULE_namespaceDecl = 8;
    public static readonly RULE_varGlobalSection = 9;
    public static readonly RULE_implementsClause = 10;
    public static readonly RULE_extendsClause = 11;
    public static readonly RULE_member = 12;
    public static readonly RULE_namespaceMember = 13;
    public static readonly RULE_varDeclSection = 14;
    public static readonly RULE_varSectionType = 15;
    public static readonly RULE_varDecl = 16;
    public static readonly RULE_arraySpec = 17;
    public static readonly RULE_exprOrArrayInit = 18;
    public static readonly RULE_arrayInit = 19;
    public static readonly RULE_type = 20;
    public static readonly RULE_builtinType = 21;
    public static readonly RULE_statementSection = 22;
    public static readonly RULE_statement = 23;
    public static readonly RULE_assignment = 24;
    public static readonly RULE_assignTarget = 25;
    public static readonly RULE_arrayIndex = 26;
    public static readonly RULE_callStatement = 27;
    public static readonly RULE_argumentList = 28;
    public static readonly RULE_argument = 29;
    public static readonly RULE_ifStatement = 30;
    public static readonly RULE_caseStatement = 31;
    public static readonly RULE_caseElement = 32;
    public static readonly RULE_caseValue = 33;
    public static readonly RULE_whileStatement = 34;
    public static readonly RULE_repeatStatement = 35;
    public static readonly RULE_forStatement = 36;
    public static readonly RULE_returnStatement = 37;
    public static readonly RULE_exitStatement = 38;
    public static readonly RULE_continueStatement = 39;
    public static readonly RULE_memberQualifier = 40;
    public static readonly RULE_expr = 41;
    public static readonly RULE_compilationUnit = 42;
    public static readonly RULE_propertyBody = 43;
    public static readonly RULE_getter = 44;
    public static readonly RULE_setter = 45;
    public static readonly RULE_attribute = 46;
    public static readonly RULE_attributeArgList = 47;
    public static readonly RULE_attributeArg = 48;
    public static readonly RULE_accessModifier = 49;
    public static readonly RULE_modifier = 50;
    public static readonly RULE_enumMemberList = 51;

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
        "'NAMESPACE'", "'END_NAMESPACE'", "'ABSTRACT'", "'FINAL'", "'CONSTANT'", 
        "'PUBLIC'", "'PRIVATE'", "'PROTECTED'", "'INTERNAL'", "'REFERENCE TO'", 
        "'MOD'"
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
        "END_INTERFACE", "STRUCT", "END_STRUCT", "ENUM", "END_ENUM", "NAMESPACE", 
        "END_NAMESPACE", "ABSTRACT", "FINAL", "CONSTANT", "PUBLIC", "PRIVATE", 
        "PROTECTED", "INTERNAL", "REFERENCE_TO", "MOD", "BOOL", "ID", "NUMBER", 
        "TIME_LITERAL", "STRING_LITERAL", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "function", "functionBlock", "property", "method", "interface", 
        "structDecl", "enumDecl", "namespaceDecl", "varGlobalSection", "implementsClause", 
        "extendsClause", "member", "namespaceMember", "varDeclSection", 
        "varSectionType", "varDecl", "arraySpec", "exprOrArrayInit", "arrayInit", 
        "type", "builtinType", "statementSection", "statement", "assignment", 
        "assignTarget", "arrayIndex", "callStatement", "argumentList", "argument", 
        "ifStatement", "caseStatement", "caseElement", "caseValue", "whileStatement", 
        "repeatStatement", "forStatement", "returnStatement", "exitStatement", 
        "continueStatement", "memberQualifier", "expr", "compilationUnit", 
        "propertyBody", "getter", "setter", "attribute", "attributeArgList", 
        "attributeArg", "accessModifier", "modifier", "enumMemberList",
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
            this.state = 105;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 104;
                this.attribute();
                }
            }

            this.state = 107;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 109;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 15) !== 0)) {
                {
                this.state = 108;
                this.accessModifier();
                }
            }

            this.state = 111;
            this.match(StructuredTextParser.ID);
            this.state = 115;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 112;
                this.varDeclSection();
                }
                }
                this.state = 117;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 118;
            this.statementSection();
            this.state = 119;
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
            this.state = 122;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 121;
                this.attribute();
                }
            }

            this.state = 124;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 126;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 15) !== 0)) {
                {
                this.state = 125;
                this.accessModifier();
                }
            }

            this.state = 128;
            this.match(StructuredTextParser.ID);
            this.state = 129;
            this.match(StructuredTextParser.T__0);
            this.state = 130;
            this.type_();
            this.state = 132;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 131;
                this.implementsClause();
                }
            }

            this.state = 135;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 134;
                this.extendsClause();
                }
            }

            this.state = 140;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 137;
                this.varDeclSection();
                }
                }
                this.state = 142;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 143;
            this.statementSection();
            this.state = 144;
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
            this.state = 147;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 146;
                this.attribute();
                }
            }

            this.state = 149;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 151;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 15) !== 0)) {
                {
                this.state = 150;
                this.accessModifier();
                }
            }

            this.state = 156;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 7) !== 0)) {
                {
                {
                this.state = 153;
                this.modifier();
                }
                }
                this.state = 158;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 159;
            this.match(StructuredTextParser.ID);
            this.state = 161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 160;
                this.implementsClause();
                }
            }

            this.state = 164;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 163;
                this.extendsClause();
                }
            }

            this.state = 169;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 29294849) !== 0) || _la === 92) {
                {
                {
                this.state = 166;
                this.member();
                }
                }
                this.state = 171;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 172;
            this.statementSection();
            this.state = 173;
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
            this.state = 176;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 175;
                this.attribute();
                }
            }

            this.state = 178;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 180;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 15) !== 0)) {
                {
                this.state = 179;
                this.accessModifier();
                }
            }

            this.state = 185;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 7) !== 0)) {
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
            this.state = 189;
            this.match(StructuredTextParser.T__0);
            this.state = 190;
            this.type_();
            this.state = 194;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 191;
                this.varDeclSection();
                }
                }
                this.state = 196;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 197;
            this.propertyBody();
            this.state = 198;
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
            this.state = 201;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 200;
                this.attribute();
                }
            }

            this.state = 203;
            this.match(StructuredTextParser.METHOD);
            this.state = 205;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 15) !== 0)) {
                {
                this.state = 204;
                this.accessModifier();
                }
            }

            this.state = 210;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 7) !== 0)) {
                {
                {
                this.state = 207;
                this.modifier();
                }
                }
                this.state = 212;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 213;
            this.match(StructuredTextParser.ID);
            this.state = 216;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 214;
                this.match(StructuredTextParser.T__0);
                this.state = 215;
                this.type_();
                }
            }

            this.state = 221;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
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
            this.statementSection();
            this.state = 225;
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
            this.state = 228;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 227;
                this.attribute();
                }
            }

            this.state = 230;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 232;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 15) !== 0)) {
                {
                this.state = 231;
                this.accessModifier();
                }
            }

            this.state = 234;
            this.match(StructuredTextParser.ID);
            this.state = 236;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 235;
                this.extendsClause();
                }
            }

            this.state = 241;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 29294849) !== 0) || _la === 92) {
                {
                {
                this.state = 238;
                this.member();
                }
                }
                this.state = 243;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 244;
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
    public structDecl(): StructDeclContext {
        let localContext = new StructDeclContext(this.context, this.state);
        this.enterRule(localContext, 12, StructuredTextParser.RULE_structDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 247;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 246;
                this.attribute();
                }
            }

            this.state = 249;
            this.match(StructuredTextParser.STRUCT);
            this.state = 251;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 15) !== 0)) {
                {
                this.state = 250;
                this.accessModifier();
                }
            }

            this.state = 253;
            this.match(StructuredTextParser.ID);
            this.state = 257;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 254;
                this.varDeclSection();
                }
                }
                this.state = 259;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 260;
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
    public enumDecl(): EnumDeclContext {
        let localContext = new EnumDeclContext(this.context, this.state);
        this.enterRule(localContext, 14, StructuredTextParser.RULE_enumDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 263;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 262;
                this.attribute();
                }
            }

            this.state = 265;
            this.match(StructuredTextParser.ENUM);
            this.state = 267;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 15) !== 0)) {
                {
                this.state = 266;
                this.accessModifier();
                }
            }

            this.state = 269;
            this.match(StructuredTextParser.ID);
            this.state = 270;
            this.enumMemberList();
            this.state = 271;
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
    public namespaceDecl(): NamespaceDeclContext {
        let localContext = new NamespaceDeclContext(this.context, this.state);
        this.enterRule(localContext, 16, StructuredTextParser.RULE_namespaceDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 274;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 273;
                this.attribute();
                }
            }

            this.state = 276;
            this.match(StructuredTextParser.NAMESPACE);
            this.state = 277;
            this.match(StructuredTextParser.ID);
            this.state = 281;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 85) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 21) !== 0)) {
                {
                {
                this.state = 278;
                this.namespaceMember();
                }
                }
                this.state = 283;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 284;
            this.match(StructuredTextParser.END_NAMESPACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 18, StructuredTextParser.RULE_varGlobalSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 287;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 286;
                this.attribute();
                }
            }

            this.state = 289;
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 293;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 7) !== 0)) {
                {
                {
                this.state = 290;
                this.modifier();
                }
                }
                this.state = 295;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 297;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 296;
                this.varDecl();
                }
                }
                this.state = 299;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 41 || _la === 112);
            this.state = 301;
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
        this.enterRule(localContext, 20, StructuredTextParser.RULE_implementsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 303;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 304;
            this.type_();
            this.state = 309;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 305;
                this.match(StructuredTextParser.T__1);
                this.state = 306;
                this.type_();
                }
                }
                this.state = 311;
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
        this.enterRule(localContext, 22, StructuredTextParser.RULE_extendsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 312;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 313;
            this.type_();
            this.state = 318;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 314;
                this.match(StructuredTextParser.T__1);
                this.state = 315;
                this.type_();
                }
                }
                this.state = 320;
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
        this.enterRule(localContext, 24, StructuredTextParser.RULE_member);
        try {
            this.state = 324;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 321;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 322;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 323;
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
    public namespaceMember(): NamespaceMemberContext {
        let localContext = new NamespaceMemberContext(this.context, this.state);
        this.enterRule(localContext, 26, StructuredTextParser.RULE_namespaceMember);
        try {
            this.state = 332;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 326;
                this.program();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 327;
                this.functionBlock();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 328;
                this.function_();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 329;
                this.structDecl();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 330;
                this.enumDecl();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 331;
                this.interface_();
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
        this.enterRule(localContext, 28, StructuredTextParser.RULE_varDeclSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 334;
            this.varSectionType();
            this.state = 338;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 7) !== 0)) {
                {
                {
                this.state = 335;
                this.modifier();
                }
                }
                this.state = 340;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 342;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 341;
                this.varDecl();
                }
                }
                this.state = 344;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 41 || _la === 112);
            this.state = 346;
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
        this.enterRule(localContext, 30, StructuredTextParser.RULE_varSectionType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 348;
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
        this.enterRule(localContext, 32, StructuredTextParser.RULE_varDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 351;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 350;
                this.attribute();
                }
            }

            this.state = 353;
            this.match(StructuredTextParser.ID);
            this.state = 354;
            this.match(StructuredTextParser.T__0);
            this.state = 356;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 109) {
                {
                this.state = 355;
                this.match(StructuredTextParser.REFERENCE_TO);
                }
            }

            this.state = 359;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 73) {
                {
                this.state = 358;
                this.arraySpec();
                }
            }

            this.state = 361;
            this.type_();
            this.state = 364;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 362;
                this.match(StructuredTextParser.T__2);
                this.state = 363;
                this.exprOrArrayInit();
                }
            }

            this.state = 366;
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
        this.enterRule(localContext, 34, StructuredTextParser.RULE_arraySpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 368;
            this.match(StructuredTextParser.ARRAY);
            this.state = 369;
            this.match(StructuredTextParser.T__4);
            this.state = 370;
            this.match(StructuredTextParser.NUMBER);
            this.state = 371;
            this.match(StructuredTextParser.T__5);
            this.state = 372;
            this.match(StructuredTextParser.NUMBER);
            this.state = 373;
            this.match(StructuredTextParser.T__6);
            this.state = 374;
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
        this.enterRule(localContext, 36, StructuredTextParser.RULE_exprOrArrayInit);
        try {
            this.state = 378;
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
                this.state = 376;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__4:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 377;
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
        this.enterRule(localContext, 38, StructuredTextParser.RULE_arrayInit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 380;
            this.match(StructuredTextParser.T__4);
            this.state = 381;
            this.expr(0);
            this.state = 386;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 382;
                this.match(StructuredTextParser.T__1);
                this.state = 383;
                this.expr(0);
                }
                }
                this.state = 388;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 389;
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
        this.enterRule(localContext, 40, StructuredTextParser.RULE_type);
        try {
            this.state = 393;
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
                this.state = 391;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 392;
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
        this.enterRule(localContext, 42, StructuredTextParser.RULE_builtinType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 395;
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
        this.enterRule(localContext, 44, StructuredTextParser.RULE_statementSection);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 400;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 50, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 397;
                    this.statement();
                    }
                    }
                }
                this.state = 402;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 50, this.context);
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
        this.enterRule(localContext, 46, StructuredTextParser.RULE_statement);
        try {
            this.state = 414;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 51, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 403;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 404;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 405;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 406;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 407;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 408;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 409;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 410;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 411;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 412;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 413;
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
        this.enterRule(localContext, 48, StructuredTextParser.RULE_assignment);
        try {
            this.state = 426;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 416;
                this.assignTarget();
                this.state = 417;
                this.match(StructuredTextParser.T__2);
                this.state = 418;
                this.expr(0);
                this.state = 419;
                this.match(StructuredTextParser.T__3);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 421;
                this.assignTarget();
                this.state = 422;
                this.match(StructuredTextParser.T__26);
                this.state = 423;
                this.expr(0);
                this.state = 424;
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
        this.enterRule(localContext, 50, StructuredTextParser.RULE_assignTarget);
        let _la: number;
        try {
            this.state = 438;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 428;
                this.match(StructuredTextParser.ID);
                this.state = 430;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                    this.state = 429;
                    this.arrayIndex();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 432;
                this.memberQualifier();
                this.state = 433;
                this.match(StructuredTextParser.T__27);
                this.state = 434;
                this.match(StructuredTextParser.ID);
                this.state = 436;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                    this.state = 435;
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
        this.enterRule(localContext, 52, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 440;
            this.match(StructuredTextParser.T__4);
            this.state = 441;
            this.expr(0);
            this.state = 442;
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
        this.enterRule(localContext, 54, StructuredTextParser.RULE_callStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 449;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
            case 1:
                {
                this.state = 444;
                this.match(StructuredTextParser.ID);
                }
                break;
            case 2:
                {
                this.state = 445;
                this.memberQualifier();
                this.state = 446;
                this.match(StructuredTextParser.T__27);
                this.state = 447;
                this.match(StructuredTextParser.ID);
                }
                break;
            }
            this.state = 451;
            this.match(StructuredTextParser.T__28);
            this.state = 453;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 31) !== 0)) {
                {
                this.state = 452;
                this.argumentList();
                }
            }

            this.state = 455;
            this.match(StructuredTextParser.T__29);
            this.state = 456;
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
        this.enterRule(localContext, 56, StructuredTextParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 458;
            this.argument();
            this.state = 463;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 459;
                this.match(StructuredTextParser.T__1);
                this.state = 460;
                this.argument();
                }
                }
                this.state = 465;
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
        this.enterRule(localContext, 58, StructuredTextParser.RULE_argument);
        let _la: number;
        try {
            this.state = 470;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 466;
                this.match(StructuredTextParser.ID);
                this.state = 467;
                _la = this.tokenStream.LA(1);
                if(!(_la === 3 || _la === 31)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 468;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 469;
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
        this.enterRule(localContext, 60, StructuredTextParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 472;
            this.match(StructuredTextParser.IF);
            this.state = 473;
            this.expr(0);
            this.state = 474;
            this.match(StructuredTextParser.THEN);
            this.state = 475;
            this.statementSection();
            this.state = 483;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 69) {
                {
                {
                this.state = 476;
                this.match(StructuredTextParser.ELSIF);
                this.state = 477;
                this.expr(0);
                this.state = 478;
                this.match(StructuredTextParser.THEN);
                this.state = 479;
                this.statementSection();
                }
                }
                this.state = 485;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 488;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 70) {
                {
                this.state = 486;
                this.match(StructuredTextParser.ELSE);
                this.state = 487;
                this.statementSection();
                }
            }

            this.state = 490;
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
        this.enterRule(localContext, 62, StructuredTextParser.RULE_caseStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 492;
            this.match(StructuredTextParser.CASE);
            this.state = 493;
            this.expr(0);
            this.state = 494;
            this.match(StructuredTextParser.OF);
            this.state = 496;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 495;
                this.caseElement();
                }
                }
                this.state = 498;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 23) !== 0));
            this.state = 502;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 70) {
                {
                this.state = 500;
                this.match(StructuredTextParser.ELSE);
                this.state = 501;
                this.statementSection();
                }
            }

            this.state = 504;
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
        this.enterRule(localContext, 64, StructuredTextParser.RULE_caseElement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 506;
            this.caseValue();
            this.state = 511;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 507;
                this.match(StructuredTextParser.T__1);
                this.state = 508;
                this.caseValue();
                }
                }
                this.state = 513;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 514;
            this.match(StructuredTextParser.T__0);
            this.state = 515;
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
        this.enterRule(localContext, 66, StructuredTextParser.RULE_caseValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 517;
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
        this.enterRule(localContext, 68, StructuredTextParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 519;
            this.match(StructuredTextParser.WHILE);
            this.state = 520;
            this.expr(0);
            this.state = 521;
            this.match(StructuredTextParser.DO);
            this.state = 522;
            this.statementSection();
            this.state = 523;
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
        this.enterRule(localContext, 70, StructuredTextParser.RULE_repeatStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 525;
            this.match(StructuredTextParser.REPEAT);
            this.state = 526;
            this.statementSection();
            this.state = 527;
            this.match(StructuredTextParser.UNTIL);
            this.state = 528;
            this.expr(0);
            this.state = 529;
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
        this.enterRule(localContext, 72, StructuredTextParser.RULE_forStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 531;
            this.match(StructuredTextParser.FOR);
            this.state = 532;
            this.match(StructuredTextParser.ID);
            this.state = 533;
            this.match(StructuredTextParser.T__2);
            this.state = 534;
            this.expr(0);
            this.state = 535;
            this.match(StructuredTextParser.TO);
            this.state = 536;
            this.expr(0);
            this.state = 539;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 84) {
                {
                this.state = 537;
                this.match(StructuredTextParser.BY);
                this.state = 538;
                this.expr(0);
                }
            }

            this.state = 541;
            this.match(StructuredTextParser.DO);
            this.state = 542;
            this.statementSection();
            this.state = 543;
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
        this.enterRule(localContext, 74, StructuredTextParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 545;
            this.match(StructuredTextParser.RETURN);
            this.state = 546;
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
        this.enterRule(localContext, 76, StructuredTextParser.RULE_exitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 548;
            this.match(StructuredTextParser.EXIT);
            this.state = 549;
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
        this.enterRule(localContext, 78, StructuredTextParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 551;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 552;
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
        this.enterRule(localContext, 80, StructuredTextParser.RULE_memberQualifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 554;
            this.match(StructuredTextParser.ID);
            this.state = 556;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 555;
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
        let _startState = 82;
        this.enterRecursionRule(localContext, 82, StructuredTextParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 592;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                {
                this.state = 559;
                this.match(StructuredTextParser.ID);
                this.state = 560;
                this.match(StructuredTextParser.T__28);
                this.state = 562;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 29 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 31) !== 0)) {
                    {
                    this.state = 561;
                    this.argumentList();
                    }
                }

                this.state = 564;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case 2:
                {
                this.state = 565;
                this.match(StructuredTextParser.ID);
                this.state = 567;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 68, this.context) ) {
                case 1:
                    {
                    this.state = 566;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            case 3:
                {
                this.state = 569;
                this.memberQualifier();
                this.state = 570;
                this.match(StructuredTextParser.T__27);
                this.state = 571;
                this.match(StructuredTextParser.ID);
                this.state = 572;
                this.match(StructuredTextParser.T__28);
                this.state = 574;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 29 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 31) !== 0)) {
                    {
                    this.state = 573;
                    this.argumentList();
                    }
                }

                this.state = 576;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case 4:
                {
                this.state = 578;
                this.memberQualifier();
                this.state = 579;
                this.match(StructuredTextParser.T__27);
                this.state = 580;
                this.match(StructuredTextParser.ID);
                this.state = 582;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context) ) {
                case 1:
                    {
                    this.state = 581;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            case 5:
                {
                this.state = 584;
                this.match(StructuredTextParser.T__28);
                this.state = 585;
                this.expr(0);
                this.state = 586;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case 6:
                {
                this.state = 588;
                this.match(StructuredTextParser.NUMBER);
                }
                break;
            case 7:
                {
                this.state = 589;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case 8:
                {
                this.state = 590;
                this.match(StructuredTextParser.TIME_LITERAL);
                }
                break;
            case 9:
                {
                this.state = 591;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 608;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 73, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 606;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 594;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 595;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 32 || _la === 33 || _la === 110)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 596;
                        this.expr(14);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 597;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 598;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 34 || _la === 35)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 599;
                        this.expr(13);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 600;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 601;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 15873) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 602;
                        this.expr(12);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 603;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 604;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 605;
                        this.expr(11);
                        }
                        break;
                    }
                    }
                }
                this.state = 610;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 73, this.context);
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
    public compilationUnit(): CompilationUnitContext {
        let localContext = new CompilationUnitContext(this.context, this.state);
        this.enterRule(localContext, 84, StructuredTextParser.RULE_compilationUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 621;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 4194389) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 85) !== 0)) {
                {
                this.state = 619;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
                case 1:
                    {
                    this.state = 611;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 612;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 613;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 614;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 615;
                    this.structDecl();
                    }
                    break;
                case 6:
                    {
                    this.state = 616;
                    this.enumDecl();
                    }
                    break;
                case 7:
                    {
                    this.state = 617;
                    this.namespaceDecl();
                    }
                    break;
                case 8:
                    {
                    this.state = 618;
                    this.varGlobalSection();
                    }
                    break;
                }
                }
                this.state = 623;
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
        this.enterRule(localContext, 86, StructuredTextParser.RULE_propertyBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 632;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context) ) {
            case 1:
                {
                this.state = 624;
                this.getter();
                }
                break;
            case 2:
                {
                this.state = 625;
                this.setter();
                }
                break;
            case 3:
                {
                this.state = 626;
                this.getter();
                this.state = 627;
                this.setter();
                }
                break;
            case 4:
                {
                this.state = 629;
                this.setter();
                this.state = 630;
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
        this.enterRule(localContext, 88, StructuredTextParser.RULE_getter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 634;
            this.match(StructuredTextParser.GET);
            this.state = 636;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 15) !== 0)) {
                {
                this.state = 635;
                this.accessModifier();
                }
            }

            this.state = 638;
            this.statementSection();
            this.state = 639;
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
        this.enterRule(localContext, 90, StructuredTextParser.RULE_setter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 641;
            this.match(StructuredTextParser.SET);
            this.state = 643;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 15) !== 0)) {
                {
                this.state = 642;
                this.accessModifier();
                }
            }

            this.state = 645;
            this.statementSection();
            this.state = 646;
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
        this.enterRule(localContext, 92, StructuredTextParser.RULE_attribute);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 648;
            this.match(StructuredTextParser.T__40);
            this.state = 649;
            this.match(StructuredTextParser.ID);
            this.state = 651;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 650;
                this.attributeArgList();
                }
            }

            this.state = 653;
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
        this.enterRule(localContext, 94, StructuredTextParser.RULE_attributeArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 655;
            this.match(StructuredTextParser.T__28);
            this.state = 656;
            this.attributeArg();
            this.state = 661;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 657;
                this.match(StructuredTextParser.T__1);
                this.state = 658;
                this.attributeArg();
                }
                }
                this.state = 663;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 664;
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
        this.enterRule(localContext, 96, StructuredTextParser.RULE_attributeArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 666;
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
        this.enterRule(localContext, 98, StructuredTextParser.RULE_accessModifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 668;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 15) !== 0))) {
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
        this.enterRule(localContext, 100, StructuredTextParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 670;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 7) !== 0))) {
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
        this.enterRule(localContext, 102, StructuredTextParser.RULE_enumMemberList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 672;
            this.match(StructuredTextParser.ID);
            this.state = 677;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 673;
                this.match(StructuredTextParser.T__1);
                this.state = 674;
                this.match(StructuredTextParser.ID);
                }
                }
                this.state = 679;
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
        case 41:
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
        4,1,117,681,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,1,0,3,
        0,106,8,0,1,0,1,0,3,0,110,8,0,1,0,1,0,5,0,114,8,0,10,0,12,0,117,
        9,0,1,0,1,0,1,0,1,1,3,1,123,8,1,1,1,1,1,3,1,127,8,1,1,1,1,1,1,1,
        1,1,3,1,133,8,1,1,1,3,1,136,8,1,1,1,5,1,139,8,1,10,1,12,1,142,9,
        1,1,1,1,1,1,1,1,2,3,2,148,8,2,1,2,1,2,3,2,152,8,2,1,2,5,2,155,8,
        2,10,2,12,2,158,9,2,1,2,1,2,3,2,162,8,2,1,2,3,2,165,8,2,1,2,5,2,
        168,8,2,10,2,12,2,171,9,2,1,2,1,2,1,2,1,3,3,3,177,8,3,1,3,1,3,3,
        3,181,8,3,1,3,5,3,184,8,3,10,3,12,3,187,9,3,1,3,1,3,1,3,1,3,5,3,
        193,8,3,10,3,12,3,196,9,3,1,3,1,3,1,3,1,4,3,4,202,8,4,1,4,1,4,3,
        4,206,8,4,1,4,5,4,209,8,4,10,4,12,4,212,9,4,1,4,1,4,1,4,3,4,217,
        8,4,1,4,5,4,220,8,4,10,4,12,4,223,9,4,1,4,1,4,1,4,1,5,3,5,229,8,
        5,1,5,1,5,3,5,233,8,5,1,5,1,5,3,5,237,8,5,1,5,5,5,240,8,5,10,5,12,
        5,243,9,5,1,5,1,5,1,6,3,6,248,8,6,1,6,1,6,3,6,252,8,6,1,6,1,6,5,
        6,256,8,6,10,6,12,6,259,9,6,1,6,1,6,1,7,3,7,264,8,7,1,7,1,7,3,7,
        268,8,7,1,7,1,7,1,7,1,7,1,8,3,8,275,8,8,1,8,1,8,1,8,5,8,280,8,8,
        10,8,12,8,283,9,8,1,8,1,8,1,9,3,9,288,8,9,1,9,1,9,5,9,292,8,9,10,
        9,12,9,295,9,9,1,9,4,9,298,8,9,11,9,12,9,299,1,9,1,9,1,10,1,10,1,
        10,1,10,5,10,308,8,10,10,10,12,10,311,9,10,1,11,1,11,1,11,1,11,5,
        11,317,8,11,10,11,12,11,320,9,11,1,12,1,12,1,12,3,12,325,8,12,1,
        13,1,13,1,13,1,13,1,13,1,13,3,13,333,8,13,1,14,1,14,5,14,337,8,14,
        10,14,12,14,340,9,14,1,14,4,14,343,8,14,11,14,12,14,344,1,14,1,14,
        1,15,1,15,1,16,3,16,352,8,16,1,16,1,16,1,16,3,16,357,8,16,1,16,3,
        16,360,8,16,1,16,1,16,1,16,3,16,365,8,16,1,16,1,16,1,17,1,17,1,17,
        1,17,1,17,1,17,1,17,1,17,1,18,1,18,3,18,379,8,18,1,19,1,19,1,19,
        1,19,5,19,385,8,19,10,19,12,19,388,9,19,1,19,1,19,1,20,1,20,3,20,
        394,8,20,1,21,1,21,1,22,5,22,399,8,22,10,22,12,22,402,9,22,1,23,
        1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,415,8,23,
        1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,427,8,24,
        1,25,1,25,3,25,431,8,25,1,25,1,25,1,25,1,25,3,25,437,8,25,3,25,439,
        8,25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,3,27,450,8,27,
        1,27,1,27,3,27,454,8,27,1,27,1,27,1,27,1,28,1,28,1,28,5,28,462,8,
        28,10,28,12,28,465,9,28,1,29,1,29,1,29,1,29,3,29,471,8,29,1,30,1,
        30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,5,30,482,8,30,10,30,12,30,
        485,9,30,1,30,1,30,3,30,489,8,30,1,30,1,30,1,31,1,31,1,31,1,31,4,
        31,497,8,31,11,31,12,31,498,1,31,1,31,3,31,503,8,31,1,31,1,31,1,
        32,1,32,1,32,5,32,510,8,32,10,32,12,32,513,9,32,1,32,1,32,1,32,1,
        33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,
        35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,540,8,36,1,36,1,
        36,1,36,1,36,1,37,1,37,1,37,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,
        40,3,40,557,8,40,1,41,1,41,1,41,1,41,3,41,563,8,41,1,41,1,41,1,41,
        3,41,568,8,41,1,41,1,41,1,41,1,41,1,41,3,41,575,8,41,1,41,1,41,1,
        41,1,41,1,41,1,41,3,41,583,8,41,1,41,1,41,1,41,1,41,1,41,1,41,1,
        41,1,41,3,41,593,8,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,
        41,1,41,1,41,1,41,5,41,607,8,41,10,41,12,41,610,9,41,1,42,1,42,1,
        42,1,42,1,42,1,42,1,42,1,42,5,42,620,8,42,10,42,12,42,623,9,42,1,
        43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,633,8,43,1,44,1,44,3,
        44,637,8,44,1,44,1,44,1,44,1,45,1,45,3,45,644,8,45,1,45,1,45,1,45,
        1,46,1,46,1,46,3,46,652,8,46,1,46,1,46,1,47,1,47,1,47,1,47,5,47,
        660,8,47,10,47,12,47,663,9,47,1,47,1,47,1,48,1,48,1,49,1,49,1,50,
        1,50,1,51,1,51,1,51,5,51,676,8,51,10,51,12,51,679,9,51,1,51,0,1,
        82,52,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
        42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
        86,88,90,92,94,96,98,100,102,0,11,2,0,57,62,64,65,1,0,8,26,2,0,3,
        3,31,31,2,0,111,113,115,115,2,0,32,33,110,110,1,0,34,35,2,0,27,27,
        36,40,1,0,89,91,2,0,112,113,115,115,1,0,105,108,1,0,102,104,741,
        0,105,1,0,0,0,2,122,1,0,0,0,4,147,1,0,0,0,6,176,1,0,0,0,8,201,1,
        0,0,0,10,228,1,0,0,0,12,247,1,0,0,0,14,263,1,0,0,0,16,274,1,0,0,
        0,18,287,1,0,0,0,20,303,1,0,0,0,22,312,1,0,0,0,24,324,1,0,0,0,26,
        332,1,0,0,0,28,334,1,0,0,0,30,348,1,0,0,0,32,351,1,0,0,0,34,368,
        1,0,0,0,36,378,1,0,0,0,38,380,1,0,0,0,40,393,1,0,0,0,42,395,1,0,
        0,0,44,400,1,0,0,0,46,414,1,0,0,0,48,426,1,0,0,0,50,438,1,0,0,0,
        52,440,1,0,0,0,54,449,1,0,0,0,56,458,1,0,0,0,58,470,1,0,0,0,60,472,
        1,0,0,0,62,492,1,0,0,0,64,506,1,0,0,0,66,517,1,0,0,0,68,519,1,0,
        0,0,70,525,1,0,0,0,72,531,1,0,0,0,74,545,1,0,0,0,76,548,1,0,0,0,
        78,551,1,0,0,0,80,554,1,0,0,0,82,592,1,0,0,0,84,621,1,0,0,0,86,632,
        1,0,0,0,88,634,1,0,0,0,90,641,1,0,0,0,92,648,1,0,0,0,94,655,1,0,
        0,0,96,666,1,0,0,0,98,668,1,0,0,0,100,670,1,0,0,0,102,672,1,0,0,
        0,104,106,3,92,46,0,105,104,1,0,0,0,105,106,1,0,0,0,106,107,1,0,
        0,0,107,109,5,43,0,0,108,110,3,98,49,0,109,108,1,0,0,0,109,110,1,
        0,0,0,110,111,1,0,0,0,111,115,5,112,0,0,112,114,3,28,14,0,113,112,
        1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,118,
        1,0,0,0,117,115,1,0,0,0,118,119,3,44,22,0,119,120,5,44,0,0,120,1,
        1,0,0,0,121,123,3,92,46,0,122,121,1,0,0,0,122,123,1,0,0,0,123,124,
        1,0,0,0,124,126,5,47,0,0,125,127,3,98,49,0,126,125,1,0,0,0,126,127,
        1,0,0,0,127,128,1,0,0,0,128,129,5,112,0,0,129,130,5,1,0,0,130,132,
        3,40,20,0,131,133,3,20,10,0,132,131,1,0,0,0,132,133,1,0,0,0,133,
        135,1,0,0,0,134,136,3,22,11,0,135,134,1,0,0,0,135,136,1,0,0,0,136,
        140,1,0,0,0,137,139,3,28,14,0,138,137,1,0,0,0,139,142,1,0,0,0,140,
        138,1,0,0,0,140,141,1,0,0,0,141,143,1,0,0,0,142,140,1,0,0,0,143,
        144,3,44,22,0,144,145,5,48,0,0,145,3,1,0,0,0,146,148,3,92,46,0,147,
        146,1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,151,5,45,0,0,150,
        152,3,98,49,0,151,150,1,0,0,0,151,152,1,0,0,0,152,156,1,0,0,0,153,
        155,3,100,50,0,154,153,1,0,0,0,155,158,1,0,0,0,156,154,1,0,0,0,156,
        157,1,0,0,0,157,159,1,0,0,0,158,156,1,0,0,0,159,161,5,112,0,0,160,
        162,3,20,10,0,161,160,1,0,0,0,161,162,1,0,0,0,162,164,1,0,0,0,163,
        165,3,22,11,0,164,163,1,0,0,0,164,165,1,0,0,0,165,169,1,0,0,0,166,
        168,3,24,12,0,167,166,1,0,0,0,168,171,1,0,0,0,169,167,1,0,0,0,169,
        170,1,0,0,0,170,172,1,0,0,0,171,169,1,0,0,0,172,173,3,44,22,0,173,
        174,5,46,0,0,174,5,1,0,0,0,175,177,3,92,46,0,176,175,1,0,0,0,176,
        177,1,0,0,0,177,178,1,0,0,0,178,180,5,49,0,0,179,181,3,98,49,0,180,
        179,1,0,0,0,180,181,1,0,0,0,181,185,1,0,0,0,182,184,3,100,50,0,183,
        182,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,
        188,1,0,0,0,187,185,1,0,0,0,188,189,5,112,0,0,189,190,5,1,0,0,190,
        194,3,40,20,0,191,193,3,28,14,0,192,191,1,0,0,0,193,196,1,0,0,0,
        194,192,1,0,0,0,194,195,1,0,0,0,195,197,1,0,0,0,196,194,1,0,0,0,
        197,198,3,86,43,0,198,199,5,50,0,0,199,7,1,0,0,0,200,202,3,92,46,
        0,201,200,1,0,0,0,201,202,1,0,0,0,202,203,1,0,0,0,203,205,5,92,0,
        0,204,206,3,98,49,0,205,204,1,0,0,0,205,206,1,0,0,0,206,210,1,0,
        0,0,207,209,3,100,50,0,208,207,1,0,0,0,209,212,1,0,0,0,210,208,1,
        0,0,0,210,211,1,0,0,0,211,213,1,0,0,0,212,210,1,0,0,0,213,216,5,
        112,0,0,214,215,5,1,0,0,215,217,3,40,20,0,216,214,1,0,0,0,216,217,
        1,0,0,0,217,221,1,0,0,0,218,220,3,28,14,0,219,218,1,0,0,0,220,223,
        1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,224,1,0,0,0,223,221,
        1,0,0,0,224,225,3,44,22,0,225,226,5,93,0,0,226,9,1,0,0,0,227,229,
        3,92,46,0,228,227,1,0,0,0,228,229,1,0,0,0,229,230,1,0,0,0,230,232,
        5,94,0,0,231,233,3,98,49,0,232,231,1,0,0,0,232,233,1,0,0,0,233,234,
        1,0,0,0,234,236,5,112,0,0,235,237,3,22,11,0,236,235,1,0,0,0,236,
        237,1,0,0,0,237,241,1,0,0,0,238,240,3,24,12,0,239,238,1,0,0,0,240,
        243,1,0,0,0,241,239,1,0,0,0,241,242,1,0,0,0,242,244,1,0,0,0,243,
        241,1,0,0,0,244,245,5,95,0,0,245,11,1,0,0,0,246,248,3,92,46,0,247,
        246,1,0,0,0,247,248,1,0,0,0,248,249,1,0,0,0,249,251,5,96,0,0,250,
        252,3,98,49,0,251,250,1,0,0,0,251,252,1,0,0,0,252,253,1,0,0,0,253,
        257,5,112,0,0,254,256,3,28,14,0,255,254,1,0,0,0,256,259,1,0,0,0,
        257,255,1,0,0,0,257,258,1,0,0,0,258,260,1,0,0,0,259,257,1,0,0,0,
        260,261,5,97,0,0,261,13,1,0,0,0,262,264,3,92,46,0,263,262,1,0,0,
        0,263,264,1,0,0,0,264,265,1,0,0,0,265,267,5,98,0,0,266,268,3,98,
        49,0,267,266,1,0,0,0,267,268,1,0,0,0,268,269,1,0,0,0,269,270,5,112,
        0,0,270,271,3,102,51,0,271,272,5,99,0,0,272,15,1,0,0,0,273,275,3,
        92,46,0,274,273,1,0,0,0,274,275,1,0,0,0,275,276,1,0,0,0,276,277,
        5,100,0,0,277,281,5,112,0,0,278,280,3,26,13,0,279,278,1,0,0,0,280,
        283,1,0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,284,1,0,0,0,283,
        281,1,0,0,0,284,285,5,101,0,0,285,17,1,0,0,0,286,288,3,92,46,0,287,
        286,1,0,0,0,287,288,1,0,0,0,288,289,1,0,0,0,289,293,5,63,0,0,290,
        292,3,100,50,0,291,290,1,0,0,0,292,295,1,0,0,0,293,291,1,0,0,0,293,
        294,1,0,0,0,294,297,1,0,0,0,295,293,1,0,0,0,296,298,3,32,16,0,297,
        296,1,0,0,0,298,299,1,0,0,0,299,297,1,0,0,0,299,300,1,0,0,0,300,
        301,1,0,0,0,301,302,5,66,0,0,302,19,1,0,0,0,303,304,5,51,0,0,304,
        309,3,40,20,0,305,306,5,2,0,0,306,308,3,40,20,0,307,305,1,0,0,0,
        308,311,1,0,0,0,309,307,1,0,0,0,309,310,1,0,0,0,310,21,1,0,0,0,311,
        309,1,0,0,0,312,313,5,52,0,0,313,318,3,40,20,0,314,315,5,2,0,0,315,
        317,3,40,20,0,316,314,1,0,0,0,317,320,1,0,0,0,318,316,1,0,0,0,318,
        319,1,0,0,0,319,23,1,0,0,0,320,318,1,0,0,0,321,325,3,8,4,0,322,325,
        3,6,3,0,323,325,3,28,14,0,324,321,1,0,0,0,324,322,1,0,0,0,324,323,
        1,0,0,0,325,25,1,0,0,0,326,333,3,0,0,0,327,333,3,4,2,0,328,333,3,
        2,1,0,329,333,3,12,6,0,330,333,3,14,7,0,331,333,3,10,5,0,332,326,
        1,0,0,0,332,327,1,0,0,0,332,328,1,0,0,0,332,329,1,0,0,0,332,330,
        1,0,0,0,332,331,1,0,0,0,333,27,1,0,0,0,334,338,3,30,15,0,335,337,
        3,100,50,0,336,335,1,0,0,0,337,340,1,0,0,0,338,336,1,0,0,0,338,339,
        1,0,0,0,339,342,1,0,0,0,340,338,1,0,0,0,341,343,3,32,16,0,342,341,
        1,0,0,0,343,344,1,0,0,0,344,342,1,0,0,0,344,345,1,0,0,0,345,346,
        1,0,0,0,346,347,5,66,0,0,347,29,1,0,0,0,348,349,7,0,0,0,349,31,1,
        0,0,0,350,352,3,92,46,0,351,350,1,0,0,0,351,352,1,0,0,0,352,353,
        1,0,0,0,353,354,5,112,0,0,354,356,5,1,0,0,355,357,5,109,0,0,356,
        355,1,0,0,0,356,357,1,0,0,0,357,359,1,0,0,0,358,360,3,34,17,0,359,
        358,1,0,0,0,359,360,1,0,0,0,360,361,1,0,0,0,361,364,3,40,20,0,362,
        363,5,3,0,0,363,365,3,36,18,0,364,362,1,0,0,0,364,365,1,0,0,0,365,
        366,1,0,0,0,366,367,5,4,0,0,367,33,1,0,0,0,368,369,5,73,0,0,369,
        370,5,5,0,0,370,371,5,113,0,0,371,372,5,6,0,0,372,373,5,113,0,0,
        373,374,5,7,0,0,374,375,5,74,0,0,375,35,1,0,0,0,376,379,3,82,41,
        0,377,379,3,38,19,0,378,376,1,0,0,0,378,377,1,0,0,0,379,37,1,0,0,
        0,380,381,5,5,0,0,381,386,3,82,41,0,382,383,5,2,0,0,383,385,3,82,
        41,0,384,382,1,0,0,0,385,388,1,0,0,0,386,384,1,0,0,0,386,387,1,0,
        0,0,387,389,1,0,0,0,388,386,1,0,0,0,389,390,5,7,0,0,390,39,1,0,0,
        0,391,394,3,42,21,0,392,394,5,112,0,0,393,391,1,0,0,0,393,392,1,
        0,0,0,394,41,1,0,0,0,395,396,7,1,0,0,396,43,1,0,0,0,397,399,3,46,
        23,0,398,397,1,0,0,0,399,402,1,0,0,0,400,398,1,0,0,0,400,401,1,0,
        0,0,401,45,1,0,0,0,402,400,1,0,0,0,403,415,3,48,24,0,404,415,3,60,
        30,0,405,415,3,62,31,0,406,415,3,68,34,0,407,415,3,70,35,0,408,415,
        3,72,36,0,409,415,3,54,27,0,410,415,3,74,37,0,411,415,3,76,38,0,
        412,415,3,78,39,0,413,415,5,4,0,0,414,403,1,0,0,0,414,404,1,0,0,
        0,414,405,1,0,0,0,414,406,1,0,0,0,414,407,1,0,0,0,414,408,1,0,0,
        0,414,409,1,0,0,0,414,410,1,0,0,0,414,411,1,0,0,0,414,412,1,0,0,
        0,414,413,1,0,0,0,415,47,1,0,0,0,416,417,3,50,25,0,417,418,5,3,0,
        0,418,419,3,82,41,0,419,420,5,4,0,0,420,427,1,0,0,0,421,422,3,50,
        25,0,422,423,5,27,0,0,423,424,3,82,41,0,424,425,5,4,0,0,425,427,
        1,0,0,0,426,416,1,0,0,0,426,421,1,0,0,0,427,49,1,0,0,0,428,430,5,
        112,0,0,429,431,3,52,26,0,430,429,1,0,0,0,430,431,1,0,0,0,431,439,
        1,0,0,0,432,433,3,80,40,0,433,434,5,28,0,0,434,436,5,112,0,0,435,
        437,3,52,26,0,436,435,1,0,0,0,436,437,1,0,0,0,437,439,1,0,0,0,438,
        428,1,0,0,0,438,432,1,0,0,0,439,51,1,0,0,0,440,441,5,5,0,0,441,442,
        3,82,41,0,442,443,5,7,0,0,443,53,1,0,0,0,444,450,5,112,0,0,445,446,
        3,80,40,0,446,447,5,28,0,0,447,448,5,112,0,0,448,450,1,0,0,0,449,
        444,1,0,0,0,449,445,1,0,0,0,450,451,1,0,0,0,451,453,5,29,0,0,452,
        454,3,56,28,0,453,452,1,0,0,0,453,454,1,0,0,0,454,455,1,0,0,0,455,
        456,5,30,0,0,456,457,5,4,0,0,457,55,1,0,0,0,458,463,3,58,29,0,459,
        460,5,2,0,0,460,462,3,58,29,0,461,459,1,0,0,0,462,465,1,0,0,0,463,
        461,1,0,0,0,463,464,1,0,0,0,464,57,1,0,0,0,465,463,1,0,0,0,466,467,
        5,112,0,0,467,468,7,2,0,0,468,471,3,82,41,0,469,471,3,82,41,0,470,
        466,1,0,0,0,470,469,1,0,0,0,471,59,1,0,0,0,472,473,5,67,0,0,473,
        474,3,82,41,0,474,475,5,68,0,0,475,483,3,44,22,0,476,477,5,69,0,
        0,477,478,3,82,41,0,478,479,5,68,0,0,479,480,3,44,22,0,480,482,1,
        0,0,0,481,476,1,0,0,0,482,485,1,0,0,0,483,481,1,0,0,0,483,484,1,
        0,0,0,484,488,1,0,0,0,485,483,1,0,0,0,486,487,5,70,0,0,487,489,3,
        44,22,0,488,486,1,0,0,0,488,489,1,0,0,0,489,490,1,0,0,0,490,491,
        5,71,0,0,491,61,1,0,0,0,492,493,5,72,0,0,493,494,3,82,41,0,494,496,
        5,74,0,0,495,497,3,64,32,0,496,495,1,0,0,0,497,498,1,0,0,0,498,496,
        1,0,0,0,498,499,1,0,0,0,499,502,1,0,0,0,500,501,5,70,0,0,501,503,
        3,44,22,0,502,500,1,0,0,0,502,503,1,0,0,0,503,504,1,0,0,0,504,505,
        5,75,0,0,505,63,1,0,0,0,506,511,3,66,33,0,507,508,5,2,0,0,508,510,
        3,66,33,0,509,507,1,0,0,0,510,513,1,0,0,0,511,509,1,0,0,0,511,512,
        1,0,0,0,512,514,1,0,0,0,513,511,1,0,0,0,514,515,5,1,0,0,515,516,
        3,44,22,0,516,65,1,0,0,0,517,518,7,3,0,0,518,67,1,0,0,0,519,520,
        5,76,0,0,520,521,3,82,41,0,521,522,5,77,0,0,522,523,3,44,22,0,523,
        524,5,78,0,0,524,69,1,0,0,0,525,526,5,79,0,0,526,527,3,44,22,0,527,
        528,5,80,0,0,528,529,3,82,41,0,529,530,5,81,0,0,530,71,1,0,0,0,531,
        532,5,82,0,0,532,533,5,112,0,0,533,534,5,3,0,0,534,535,3,82,41,0,
        535,536,5,83,0,0,536,539,3,82,41,0,537,538,5,84,0,0,538,540,3,82,
        41,0,539,537,1,0,0,0,539,540,1,0,0,0,540,541,1,0,0,0,541,542,5,77,
        0,0,542,543,3,44,22,0,543,544,5,85,0,0,544,73,1,0,0,0,545,546,5,
        86,0,0,546,547,5,4,0,0,547,75,1,0,0,0,548,549,5,87,0,0,549,550,5,
        4,0,0,550,77,1,0,0,0,551,552,5,88,0,0,552,553,5,4,0,0,553,79,1,0,
        0,0,554,556,5,112,0,0,555,557,3,52,26,0,556,555,1,0,0,0,556,557,
        1,0,0,0,557,81,1,0,0,0,558,559,6,41,-1,0,559,560,5,112,0,0,560,562,
        5,29,0,0,561,563,3,56,28,0,562,561,1,0,0,0,562,563,1,0,0,0,563,564,
        1,0,0,0,564,593,5,30,0,0,565,567,5,112,0,0,566,568,3,52,26,0,567,
        566,1,0,0,0,567,568,1,0,0,0,568,593,1,0,0,0,569,570,3,80,40,0,570,
        571,5,28,0,0,571,572,5,112,0,0,572,574,5,29,0,0,573,575,3,56,28,
        0,574,573,1,0,0,0,574,575,1,0,0,0,575,576,1,0,0,0,576,577,5,30,0,
        0,577,593,1,0,0,0,578,579,3,80,40,0,579,580,5,28,0,0,580,582,5,112,
        0,0,581,583,3,52,26,0,582,581,1,0,0,0,582,583,1,0,0,0,583,593,1,
        0,0,0,584,585,5,29,0,0,585,586,3,82,41,0,586,587,5,30,0,0,587,593,
        1,0,0,0,588,593,5,113,0,0,589,593,5,111,0,0,590,593,5,114,0,0,591,
        593,5,115,0,0,592,558,1,0,0,0,592,565,1,0,0,0,592,569,1,0,0,0,592,
        578,1,0,0,0,592,584,1,0,0,0,592,588,1,0,0,0,592,589,1,0,0,0,592,
        590,1,0,0,0,592,591,1,0,0,0,593,608,1,0,0,0,594,595,10,13,0,0,595,
        596,7,4,0,0,596,607,3,82,41,14,597,598,10,12,0,0,598,599,7,5,0,0,
        599,607,3,82,41,13,600,601,10,11,0,0,601,602,7,6,0,0,602,607,3,82,
        41,12,603,604,10,10,0,0,604,605,7,7,0,0,605,607,3,82,41,11,606,594,
        1,0,0,0,606,597,1,0,0,0,606,600,1,0,0,0,606,603,1,0,0,0,607,610,
        1,0,0,0,608,606,1,0,0,0,608,609,1,0,0,0,609,83,1,0,0,0,610,608,1,
        0,0,0,611,620,3,0,0,0,612,620,3,4,2,0,613,620,3,2,1,0,614,620,3,
        10,5,0,615,620,3,12,6,0,616,620,3,14,7,0,617,620,3,16,8,0,618,620,
        3,18,9,0,619,611,1,0,0,0,619,612,1,0,0,0,619,613,1,0,0,0,619,614,
        1,0,0,0,619,615,1,0,0,0,619,616,1,0,0,0,619,617,1,0,0,0,619,618,
        1,0,0,0,620,623,1,0,0,0,621,619,1,0,0,0,621,622,1,0,0,0,622,85,1,
        0,0,0,623,621,1,0,0,0,624,633,3,88,44,0,625,633,3,90,45,0,626,627,
        3,88,44,0,627,628,3,90,45,0,628,633,1,0,0,0,629,630,3,90,45,0,630,
        631,3,88,44,0,631,633,1,0,0,0,632,624,1,0,0,0,632,625,1,0,0,0,632,
        626,1,0,0,0,632,629,1,0,0,0,633,87,1,0,0,0,634,636,5,53,0,0,635,
        637,3,98,49,0,636,635,1,0,0,0,636,637,1,0,0,0,637,638,1,0,0,0,638,
        639,3,44,22,0,639,640,5,54,0,0,640,89,1,0,0,0,641,643,5,55,0,0,642,
        644,3,98,49,0,643,642,1,0,0,0,643,644,1,0,0,0,644,645,1,0,0,0,645,
        646,3,44,22,0,646,647,5,56,0,0,647,91,1,0,0,0,648,649,5,41,0,0,649,
        651,5,112,0,0,650,652,3,94,47,0,651,650,1,0,0,0,651,652,1,0,0,0,
        652,653,1,0,0,0,653,654,5,42,0,0,654,93,1,0,0,0,655,656,5,29,0,0,
        656,661,3,96,48,0,657,658,5,2,0,0,658,660,3,96,48,0,659,657,1,0,
        0,0,660,663,1,0,0,0,661,659,1,0,0,0,661,662,1,0,0,0,662,664,1,0,
        0,0,663,661,1,0,0,0,664,665,5,30,0,0,665,95,1,0,0,0,666,667,7,8,
        0,0,667,97,1,0,0,0,668,669,7,9,0,0,669,99,1,0,0,0,670,671,7,10,0,
        0,671,101,1,0,0,0,672,677,5,112,0,0,673,674,5,2,0,0,674,676,5,112,
        0,0,675,673,1,0,0,0,676,679,1,0,0,0,677,675,1,0,0,0,677,678,1,0,
        0,0,678,103,1,0,0,0,679,677,1,0,0,0,82,105,109,115,122,126,132,135,
        140,147,151,156,161,164,169,176,180,185,194,201,205,210,216,221,
        228,232,236,241,247,251,257,263,267,274,281,287,293,299,309,318,
        324,332,338,344,351,356,359,364,378,386,393,400,414,426,430,436,
        438,449,453,463,470,483,488,498,502,511,539,556,562,567,574,582,
        592,606,608,619,621,632,636,643,651,661,677
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


export class StructDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRUCT(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.STRUCT, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public END_STRUCT(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_STRUCT, 0)!;
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


export class NamespaceDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NAMESPACE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.NAMESPACE, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public END_NAMESPACE(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_NAMESPACE, 0)!;
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
    }
    public namespaceMember(): NamespaceMemberContext[];
    public namespaceMember(i: number): NamespaceMemberContext | null;
    public namespaceMember(i?: number): NamespaceMemberContext[] | NamespaceMemberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamespaceMemberContext);
        }

        return this.getRuleContext(i, NamespaceMemberContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_namespaceDecl;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitNamespaceDecl) {
            return visitor.visitNamespaceDecl(this);
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


export class NamespaceMemberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public program(): ProgramContext | null {
        return this.getRuleContext(0, ProgramContext);
    }
    public functionBlock(): FunctionBlockContext | null {
        return this.getRuleContext(0, FunctionBlockContext);
    }
    public function(): FunctionContext | null {
        return this.getRuleContext(0, FunctionContext);
    }
    public structDecl(): StructDeclContext | null {
        return this.getRuleContext(0, StructDeclContext);
    }
    public enumDecl(): EnumDeclContext | null {
        return this.getRuleContext(0, EnumDeclContext);
    }
    public interface(): InterfaceContext | null {
        return this.getRuleContext(0, InterfaceContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_namespaceMember;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitNamespaceMember) {
            return visitor.visitNamespaceMember(this);
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
    public structDecl(): StructDeclContext[];
    public structDecl(i: number): StructDeclContext | null;
    public structDecl(i?: number): StructDeclContext[] | StructDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StructDeclContext);
        }

        return this.getRuleContext(i, StructDeclContext);
    }
    public enumDecl(): EnumDeclContext[];
    public enumDecl(i: number): EnumDeclContext | null;
    public enumDecl(i?: number): EnumDeclContext[] | EnumDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumDeclContext);
        }

        return this.getRuleContext(i, EnumDeclContext);
    }
    public namespaceDecl(): NamespaceDeclContext[];
    public namespaceDecl(i: number): NamespaceDeclContext | null;
    public namespaceDecl(i?: number): NamespaceDeclContext[] | NamespaceDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamespaceDeclContext);
        }

        return this.getRuleContext(i, NamespaceDeclContext);
    }
    public varGlobalSection(): VarGlobalSectionContext[];
    public varGlobalSection(i: number): VarGlobalSectionContext | null;
    public varGlobalSection(i?: number): VarGlobalSectionContext[] | VarGlobalSectionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VarGlobalSectionContext);
        }

        return this.getRuleContext(i, VarGlobalSectionContext);
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
