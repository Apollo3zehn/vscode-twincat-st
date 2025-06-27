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
    public static readonly CLASS = 96;
    public static readonly END_CLASS = 97;
    public static readonly STRUCT = 98;
    public static readonly END_STRUCT = 99;
    public static readonly ENUM = 100;
    public static readonly END_ENUM = 101;
    public static readonly NAMESPACE = 102;
    public static readonly END_NAMESPACE = 103;
    public static readonly TYPEDEF = 104;
    public static readonly ABSTRACT = 105;
    public static readonly FINAL = 106;
    public static readonly CONSTANT = 107;
    public static readonly READONLY = 108;
    public static readonly PUBLIC = 109;
    public static readonly PRIVATE = 110;
    public static readonly PROTECTED = 111;
    public static readonly INTERNAL = 112;
    public static readonly REFERENCE_TO = 113;
    public static readonly MOD = 114;
    public static readonly BOOL = 115;
    public static readonly ID = 116;
    public static readonly NUMBER = 117;
    public static readonly TIME_LITERAL = 118;
    public static readonly STRING_LITERAL = 119;
    public static readonly WS = 120;
    public static readonly COMMENT = 121;
    public static readonly RULE_program = 0;
    public static readonly RULE_function = 1;
    public static readonly RULE_functionBlock = 2;
    public static readonly RULE_property = 3;
    public static readonly RULE_method = 4;
    public static readonly RULE_interface = 5;
    public static readonly RULE_structDecl = 6;
    public static readonly RULE_enumDecl = 7;
    public static readonly RULE_namespaceDecl = 8;
    public static readonly RULE_typeDefDecl = 9;
    public static readonly RULE_varGlobalSection = 10;
    public static readonly RULE_implementsClause = 11;
    public static readonly RULE_extendsClause = 12;
    public static readonly RULE_member = 13;
    public static readonly RULE_namespaceMember = 14;
    public static readonly RULE_varDeclSection = 15;
    public static readonly RULE_varSectionType = 16;
    public static readonly RULE_varDecl = 17;
    public static readonly RULE_arraySpec = 18;
    public static readonly RULE_exprOrArrayInit = 19;
    public static readonly RULE_arrayInit = 20;
    public static readonly RULE_type = 21;
    public static readonly RULE_builtinType = 22;
    public static readonly RULE_statementSection = 23;
    public static readonly RULE_statement = 24;
    public static readonly RULE_assignment = 25;
    public static readonly RULE_assignTarget = 26;
    public static readonly RULE_arrayIndex = 27;
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
    public static readonly RULE_memberQualifier = 41;
    public static readonly RULE_expr = 42;
    public static readonly RULE_compilationUnit = 43;
    public static readonly RULE_propertyBody = 44;
    public static readonly RULE_getter = 45;
    public static readonly RULE_setter = 46;
    public static readonly RULE_attribute = 47;
    public static readonly RULE_attributeArgList = 48;
    public static readonly RULE_attributeArg = 49;
    public static readonly RULE_accessModifier = 50;
    public static readonly RULE_modifier = 51;
    public static readonly RULE_enumMemberList = 52;

    public static readonly literalNames = [
        null, "':'", "'='", "';'", "','", "':='", "'['", "'..'", "']'", 
        "'INT'", "'REAL'", "'BOOL'", "'STRING'", "'DINT'", "'BYTE'", "'WORD'", 
        "'DWORD'", "'SINT'", "'USINT'", "'UINT'", "'UDINT'", "'LINT'", "'ULINT'", 
        "'LREAL'", "'TIME'", "'DATE'", "'TIME_OF_DAY'", "'DATE_AND_TIME'", 
        "'.'", "'('", "')'", "'=>'", "'*'", "'/'", "'+'", "'-'", "'<'", 
        "'>'", "'<='", "'>='", "'<>'", "'{'", "'}'", "'PROGRAM'", "'END_PROGRAM'", 
        "'FUNCTION_BLOCK'", "'END_FUNCTION_BLOCK'", "'FUNCTION'", "'END_FUNCTION'", 
        "'PROPERTY'", "'END_PROPERTY'", "'IMPLEMENTS'", "'EXTENDS'", "'GET'", 
        "'END_GET'", "'SET'", "'END_SET'", "'VAR'", "'VAR_INPUT'", "'VAR_OUTPUT'", 
        "'VAR_IN_OUT'", "'VAR_TEMP'", "'VAR_EXTERNAL'", "'VAR_GLOBAL'", 
        "'VAR_INST'", "'VAR_STAT'", "'END_VAR'", "'IF'", "'THEN'", "'ELSIF'", 
        "'ELSE'", "'END_IF'", "'CASE'", "'ARRAY'", "'OF'", "'END_CASE'", 
        "'WHILE'", "'DO'", "'END_WHILE'", "'REPEAT'", "'UNTIL'", "'END_REPEAT'", 
        "'FOR'", "'TO'", "'BY'", "'END_FOR'", "'RETURN'", "'EXIT'", "'CONTINUE'", 
        "'AND'", "'OR'", "'XOR'", "'METHOD'", "'END_METHOD'", "'INTERFACE'", 
        "'END_INTERFACE'", "'CLASS'", "'END_CLASS'", "'STRUCT'", "'END_STRUCT'", 
        "'ENUM'", "'END_ENUM'", "'NAMESPACE'", "'END_NAMESPACE'", "'TYPEDEF'", 
        "'ABSTRACT'", "'FINAL'", "'CONSTANT'", "'READONLY'", "'PUBLIC'", 
        "'PRIVATE'", "'PROTECTED'", "'INTERNAL'", "'REFERENCE TO'", "'MOD'"
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
        "END_INTERFACE", "CLASS", "END_CLASS", "STRUCT", "END_STRUCT", "ENUM", 
        "END_ENUM", "NAMESPACE", "END_NAMESPACE", "TYPEDEF", "ABSTRACT", 
        "FINAL", "CONSTANT", "READONLY", "PUBLIC", "PRIVATE", "PROTECTED", 
        "INTERNAL", "REFERENCE_TO", "MOD", "BOOL", "ID", "NUMBER", "TIME_LITERAL", 
        "STRING_LITERAL", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "function", "functionBlock", "property", "method", "interface", 
        "structDecl", "enumDecl", "namespaceDecl", "typeDefDecl", "varGlobalSection", 
        "implementsClause", "extendsClause", "member", "namespaceMember", 
        "varDeclSection", "varSectionType", "varDecl", "arraySpec", "exprOrArrayInit", 
        "arrayInit", "type", "builtinType", "statementSection", "statement", 
        "assignment", "assignTarget", "arrayIndex", "callStatement", "argumentList", 
        "argument", "ifStatement", "caseStatement", "caseElement", "caseValue", 
        "whileStatement", "repeatStatement", "forStatement", "returnStatement", 
        "exitStatement", "continueStatement", "memberQualifier", "expr", 
        "compilationUnit", "propertyBody", "getter", "setter", "attribute", 
        "attributeArgList", "attributeArg", "accessModifier", "modifier", 
        "enumMemberList",
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
            this.state = 106;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 107;
            this.match(StructuredTextParser.ID);
            this.state = 111;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 108;
                this.varDeclSection();
                }
                }
                this.state = 113;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 114;
            this.statementSection();
            this.state = 115;
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
            this.state = 118;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 117;
                this.attribute();
                }
            }

            this.state = 120;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 121;
            this.match(StructuredTextParser.ID);
            this.state = 122;
            this.match(StructuredTextParser.T__0);
            this.state = 123;
            this.type_();
            this.state = 125;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 124;
                this.implementsClause();
                }
            }

            this.state = 128;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 127;
                this.extendsClause();
                }
            }

            this.state = 133;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 130;
                this.varDeclSection();
                }
                }
                this.state = 135;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 136;
            this.statementSection();
            this.state = 137;
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
            this.state = 140;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 139;
                this.attribute();
                }
            }

            this.state = 142;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 146;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 7) !== 0)) {
                {
                {
                this.state = 143;
                this.modifier();
                }
                }
                this.state = 148;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 149;
            this.match(StructuredTextParser.ID);
            this.state = 151;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 150;
                this.implementsClause();
                }
            }

            this.state = 154;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 153;
                this.extendsClause();
                }
            }

            this.state = 159;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 29294849) !== 0) || _la === 92) {
                {
                {
                this.state = 156;
                this.member();
                }
                }
                this.state = 161;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 162;
            this.statementSection();
            this.state = 163;
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
            this.state = 166;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 165;
                this.attribute();
                }
            }

            this.state = 168;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 170;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & 15) !== 0)) {
                {
                this.state = 169;
                this.accessModifier();
                }
            }

            this.state = 175;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 7) !== 0)) {
                {
                {
                this.state = 172;
                this.modifier();
                }
                }
                this.state = 177;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 178;
            this.match(StructuredTextParser.ID);
            this.state = 179;
            this.match(StructuredTextParser.T__0);
            this.state = 180;
            this.type_();
            this.state = 184;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 181;
                this.varDeclSection();
                }
                }
                this.state = 186;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 187;
            this.propertyBody();
            this.state = 188;
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
            this.state = 191;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 190;
                this.attribute();
                }
            }

            this.state = 193;
            this.match(StructuredTextParser.METHOD);
            this.state = 195;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & 15) !== 0)) {
                {
                this.state = 194;
                this.accessModifier();
                }
            }

            this.state = 200;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 7) !== 0)) {
                {
                {
                this.state = 197;
                this.modifier();
                }
                }
                this.state = 202;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 203;
            this.match(StructuredTextParser.ID);
            this.state = 206;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 204;
                this.match(StructuredTextParser.T__0);
                this.state = 205;
                this.type_();
                }
            }

            this.state = 211;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 208;
                this.varDeclSection();
                }
                }
                this.state = 213;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 214;
            this.statementSection();
            this.state = 215;
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
            this.state = 218;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 217;
                this.attribute();
                }
            }

            this.state = 220;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 221;
            this.match(StructuredTextParser.ID);
            this.state = 223;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 222;
                this.extendsClause();
                }
            }

            this.state = 228;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 29294849) !== 0) || _la === 92) {
                {
                {
                this.state = 225;
                this.member();
                }
                }
                this.state = 230;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 231;
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
            this.state = 234;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 233;
                this.attribute();
                }
            }

            this.state = 236;
            this.match(StructuredTextParser.STRUCT);
            this.state = 237;
            this.match(StructuredTextParser.ID);
            this.state = 241;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 238;
                this.varDeclSection();
                }
                }
                this.state = 243;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 244;
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
            this.match(StructuredTextParser.ENUM);
            this.state = 250;
            this.match(StructuredTextParser.ID);
            this.state = 251;
            this.enumMemberList();
            this.state = 252;
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
            this.state = 255;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 254;
                this.attribute();
                }
            }

            this.state = 257;
            this.match(StructuredTextParser.NAMESPACE);
            this.state = 258;
            this.match(StructuredTextParser.ID);
            this.state = 262;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 85) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 81) !== 0)) {
                {
                {
                this.state = 259;
                this.namespaceMember();
                }
                }
                this.state = 264;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 265;
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
    public typeDefDecl(): TypeDefDeclContext {
        let localContext = new TypeDefDeclContext(this.context, this.state);
        this.enterRule(localContext, 18, StructuredTextParser.RULE_typeDefDecl);
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
            this.match(StructuredTextParser.TYPEDEF);
            this.state = 271;
            this.match(StructuredTextParser.ID);
            this.state = 272;
            this.match(StructuredTextParser.T__1);
            this.state = 273;
            this.type_();
            this.state = 274;
            this.match(StructuredTextParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 20, StructuredTextParser.RULE_varGlobalSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 277;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 276;
                this.attribute();
                }
            }

            this.state = 279;
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 283;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 7) !== 0)) {
                {
                {
                this.state = 280;
                this.modifier();
                }
                }
                this.state = 285;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 287;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 286;
                this.varDecl();
                }
                }
                this.state = 289;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 41 || _la === 116);
            this.state = 291;
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
        this.enterRule(localContext, 22, StructuredTextParser.RULE_implementsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 293;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 294;
            this.type_();
            this.state = 299;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 295;
                this.match(StructuredTextParser.T__3);
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
    public extendsClause(): ExtendsClauseContext {
        let localContext = new ExtendsClauseContext(this.context, this.state);
        this.enterRule(localContext, 24, StructuredTextParser.RULE_extendsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 302;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 303;
            this.type_();
            this.state = 308;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 304;
                this.match(StructuredTextParser.T__3);
                this.state = 305;
                this.type_();
                }
                }
                this.state = 310;
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
        this.enterRule(localContext, 26, StructuredTextParser.RULE_member);
        try {
            this.state = 314;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 311;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 312;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 313;
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
        this.enterRule(localContext, 28, StructuredTextParser.RULE_namespaceMember);
        try {
            this.state = 322;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 34, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 316;
                this.program();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 317;
                this.functionBlock();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 318;
                this.function_();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 319;
                this.structDecl();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 320;
                this.enumDecl();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 321;
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
        this.enterRule(localContext, 30, StructuredTextParser.RULE_varDeclSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 324;
            this.varSectionType();
            this.state = 328;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 7) !== 0)) {
                {
                {
                this.state = 325;
                this.modifier();
                }
                }
                this.state = 330;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 332;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 331;
                this.varDecl();
                }
                }
                this.state = 334;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 41 || _la === 116);
            this.state = 336;
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
        this.enterRule(localContext, 32, StructuredTextParser.RULE_varSectionType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 338;
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
        this.enterRule(localContext, 34, StructuredTextParser.RULE_varDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 341;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 340;
                this.attribute();
                }
            }

            this.state = 343;
            this.match(StructuredTextParser.ID);
            this.state = 344;
            this.match(StructuredTextParser.T__0);
            this.state = 346;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 113) {
                {
                this.state = 345;
                this.match(StructuredTextParser.REFERENCE_TO);
                }
            }

            this.state = 349;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 73) {
                {
                this.state = 348;
                this.arraySpec();
                }
            }

            this.state = 351;
            this.type_();
            this.state = 354;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 352;
                this.match(StructuredTextParser.T__4);
                this.state = 353;
                this.exprOrArrayInit();
                }
            }

            this.state = 356;
            this.match(StructuredTextParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 36, StructuredTextParser.RULE_arraySpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 358;
            this.match(StructuredTextParser.ARRAY);
            this.state = 359;
            this.match(StructuredTextParser.T__5);
            this.state = 360;
            this.match(StructuredTextParser.NUMBER);
            this.state = 361;
            this.match(StructuredTextParser.T__6);
            this.state = 362;
            this.match(StructuredTextParser.NUMBER);
            this.state = 363;
            this.match(StructuredTextParser.T__7);
            this.state = 364;
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
        this.enterRule(localContext, 38, StructuredTextParser.RULE_exprOrArrayInit);
        try {
            this.state = 368;
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
                this.state = 366;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__5:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 367;
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
            this.state = 370;
            this.match(StructuredTextParser.T__5);
            this.state = 371;
            this.expr(0);
            this.state = 376;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 372;
                this.match(StructuredTextParser.T__3);
                this.state = 373;
                this.expr(0);
                }
                }
                this.state = 378;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 379;
            this.match(StructuredTextParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 383;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
            case StructuredTextParser.T__26:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 381;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 382;
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
        this.enterRule(localContext, 44, StructuredTextParser.RULE_builtinType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 385;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 268434944) !== 0))) {
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
        this.enterRule(localContext, 46, StructuredTextParser.RULE_statementSection);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 390;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 387;
                    this.statement();
                    }
                    }
                }
                this.state = 392;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 44, this.context);
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
        this.enterRule(localContext, 48, StructuredTextParser.RULE_statement);
        try {
            this.state = 404;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 393;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 394;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 395;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 396;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 397;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 398;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 399;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 400;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 401;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 402;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 403;
                this.match(StructuredTextParser.T__2);
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
        this.enterRule(localContext, 50, StructuredTextParser.RULE_assignment);
        try {
            this.state = 416;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 406;
                this.assignTarget();
                this.state = 407;
                this.match(StructuredTextParser.T__4);
                this.state = 408;
                this.expr(0);
                this.state = 409;
                this.match(StructuredTextParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 411;
                this.assignTarget();
                this.state = 412;
                this.match(StructuredTextParser.T__1);
                this.state = 413;
                this.expr(0);
                this.state = 414;
                this.match(StructuredTextParser.T__2);
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
        this.enterRule(localContext, 52, StructuredTextParser.RULE_assignTarget);
        let _la: number;
        try {
            this.state = 428;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 418;
                this.match(StructuredTextParser.ID);
                this.state = 420;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 6) {
                    {
                    this.state = 419;
                    this.arrayIndex();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 422;
                this.memberQualifier();
                this.state = 423;
                this.match(StructuredTextParser.T__27);
                this.state = 424;
                this.match(StructuredTextParser.ID);
                this.state = 426;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 6) {
                    {
                    this.state = 425;
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
        this.enterRule(localContext, 54, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 430;
            this.match(StructuredTextParser.T__5);
            this.state = 431;
            this.expr(0);
            this.state = 432;
            this.match(StructuredTextParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 439;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
            case 1:
                {
                this.state = 434;
                this.match(StructuredTextParser.ID);
                }
                break;
            case 2:
                {
                this.state = 435;
                this.memberQualifier();
                this.state = 436;
                this.match(StructuredTextParser.T__27);
                this.state = 437;
                this.match(StructuredTextParser.ID);
                }
                break;
            }
            this.state = 441;
            this.match(StructuredTextParser.T__28);
            this.state = 443;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29 || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 31) !== 0)) {
                {
                this.state = 442;
                this.argumentList();
                }
            }

            this.state = 445;
            this.match(StructuredTextParser.T__29);
            this.state = 446;
            this.match(StructuredTextParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 448;
            this.argument();
            this.state = 453;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 449;
                this.match(StructuredTextParser.T__3);
                this.state = 450;
                this.argument();
                }
                }
                this.state = 455;
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
            this.state = 460;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 456;
                this.match(StructuredTextParser.ID);
                this.state = 457;
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 31)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 458;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 459;
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
            this.state = 462;
            this.match(StructuredTextParser.IF);
            this.state = 463;
            this.expr(0);
            this.state = 464;
            this.match(StructuredTextParser.THEN);
            this.state = 465;
            this.statementSection();
            this.state = 473;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 69) {
                {
                {
                this.state = 466;
                this.match(StructuredTextParser.ELSIF);
                this.state = 467;
                this.expr(0);
                this.state = 468;
                this.match(StructuredTextParser.THEN);
                this.state = 469;
                this.statementSection();
                }
                }
                this.state = 475;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 478;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 70) {
                {
                this.state = 476;
                this.match(StructuredTextParser.ELSE);
                this.state = 477;
                this.statementSection();
                }
            }

            this.state = 480;
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
            this.state = 482;
            this.match(StructuredTextParser.CASE);
            this.state = 483;
            this.expr(0);
            this.state = 484;
            this.match(StructuredTextParser.OF);
            this.state = 486;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 485;
                this.caseElement();
                }
                }
                this.state = 488;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 23) !== 0));
            this.state = 492;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 70) {
                {
                this.state = 490;
                this.match(StructuredTextParser.ELSE);
                this.state = 491;
                this.statementSection();
                }
            }

            this.state = 494;
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
            this.state = 496;
            this.caseValue();
            this.state = 501;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 497;
                this.match(StructuredTextParser.T__3);
                this.state = 498;
                this.caseValue();
                }
                }
                this.state = 503;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 504;
            this.match(StructuredTextParser.T__0);
            this.state = 505;
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
            this.state = 507;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 23) !== 0))) {
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
            this.state = 509;
            this.match(StructuredTextParser.WHILE);
            this.state = 510;
            this.expr(0);
            this.state = 511;
            this.match(StructuredTextParser.DO);
            this.state = 512;
            this.statementSection();
            this.state = 513;
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
            this.state = 515;
            this.match(StructuredTextParser.REPEAT);
            this.state = 516;
            this.statementSection();
            this.state = 517;
            this.match(StructuredTextParser.UNTIL);
            this.state = 518;
            this.expr(0);
            this.state = 519;
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
            this.state = 521;
            this.match(StructuredTextParser.FOR);
            this.state = 522;
            this.match(StructuredTextParser.ID);
            this.state = 523;
            this.match(StructuredTextParser.T__4);
            this.state = 524;
            this.expr(0);
            this.state = 525;
            this.match(StructuredTextParser.TO);
            this.state = 526;
            this.expr(0);
            this.state = 529;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 84) {
                {
                this.state = 527;
                this.match(StructuredTextParser.BY);
                this.state = 528;
                this.expr(0);
                }
            }

            this.state = 531;
            this.match(StructuredTextParser.DO);
            this.state = 532;
            this.statementSection();
            this.state = 533;
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
            this.state = 535;
            this.match(StructuredTextParser.RETURN);
            this.state = 536;
            this.match(StructuredTextParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 538;
            this.match(StructuredTextParser.EXIT);
            this.state = 539;
            this.match(StructuredTextParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 541;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 542;
            this.match(StructuredTextParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 82, StructuredTextParser.RULE_memberQualifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 544;
            this.match(StructuredTextParser.ID);
            this.state = 546;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 545;
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
        let _startState = 84;
        this.enterRecursionRule(localContext, 84, StructuredTextParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 582;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 65, this.context) ) {
            case 1:
                {
                this.state = 549;
                this.match(StructuredTextParser.ID);
                this.state = 550;
                this.match(StructuredTextParser.T__28);
                this.state = 552;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 29 || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 31) !== 0)) {
                    {
                    this.state = 551;
                    this.argumentList();
                    }
                }

                this.state = 554;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case 2:
                {
                this.state = 555;
                this.match(StructuredTextParser.ID);
                this.state = 557;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
                case 1:
                    {
                    this.state = 556;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            case 3:
                {
                this.state = 559;
                this.memberQualifier();
                this.state = 560;
                this.match(StructuredTextParser.T__27);
                this.state = 561;
                this.match(StructuredTextParser.ID);
                this.state = 562;
                this.match(StructuredTextParser.T__28);
                this.state = 564;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 29 || ((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 31) !== 0)) {
                    {
                    this.state = 563;
                    this.argumentList();
                    }
                }

                this.state = 566;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case 4:
                {
                this.state = 568;
                this.memberQualifier();
                this.state = 569;
                this.match(StructuredTextParser.T__27);
                this.state = 570;
                this.match(StructuredTextParser.ID);
                this.state = 572;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context) ) {
                case 1:
                    {
                    this.state = 571;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            case 5:
                {
                this.state = 574;
                this.match(StructuredTextParser.T__28);
                this.state = 575;
                this.expr(0);
                this.state = 576;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case 6:
                {
                this.state = 578;
                this.match(StructuredTextParser.NUMBER);
                }
                break;
            case 7:
                {
                this.state = 579;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case 8:
                {
                this.state = 580;
                this.match(StructuredTextParser.TIME_LITERAL);
                }
                break;
            case 9:
                {
                this.state = 581;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 598;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 67, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 596;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 66, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 584;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 585;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 32 || _la === 33 || _la === 114)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 586;
                        this.expr(14);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 587;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 588;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 34 || _la === 35)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 589;
                        this.expr(13);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 590;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 591;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 2 || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 31) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 592;
                        this.expr(12);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 593;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 594;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 595;
                        this.expr(11);
                        }
                        break;
                    }
                    }
                }
                this.state = 600;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 67, this.context);
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
        this.enterRule(localContext, 86, StructuredTextParser.RULE_compilationUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 612;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 4194389) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 1361) !== 0)) {
                {
                this.state = 610;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 68, this.context) ) {
                case 1:
                    {
                    this.state = 601;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 602;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 603;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 604;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 605;
                    this.structDecl();
                    }
                    break;
                case 6:
                    {
                    this.state = 606;
                    this.enumDecl();
                    }
                    break;
                case 7:
                    {
                    this.state = 607;
                    this.namespaceDecl();
                    }
                    break;
                case 8:
                    {
                    this.state = 608;
                    this.typeDefDecl();
                    }
                    break;
                case 9:
                    {
                    this.state = 609;
                    this.varGlobalSection();
                    }
                    break;
                }
                }
                this.state = 614;
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
        this.enterRule(localContext, 88, StructuredTextParser.RULE_propertyBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 623;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context) ) {
            case 1:
                {
                this.state = 615;
                this.getter();
                }
                break;
            case 2:
                {
                this.state = 616;
                this.setter();
                }
                break;
            case 3:
                {
                this.state = 617;
                this.getter();
                this.state = 618;
                this.setter();
                }
                break;
            case 4:
                {
                this.state = 620;
                this.setter();
                this.state = 621;
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
        this.enterRule(localContext, 90, StructuredTextParser.RULE_getter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 625;
            this.match(StructuredTextParser.GET);
            this.state = 627;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & 15) !== 0)) {
                {
                this.state = 626;
                this.accessModifier();
                }
            }

            this.state = 629;
            this.statementSection();
            this.state = 630;
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
        this.enterRule(localContext, 92, StructuredTextParser.RULE_setter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 632;
            this.match(StructuredTextParser.SET);
            this.state = 634;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & 15) !== 0)) {
                {
                this.state = 633;
                this.accessModifier();
                }
            }

            this.state = 636;
            this.statementSection();
            this.state = 637;
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
        this.enterRule(localContext, 94, StructuredTextParser.RULE_attribute);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 639;
            this.match(StructuredTextParser.T__40);
            this.state = 640;
            this.match(StructuredTextParser.ID);
            this.state = 642;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 641;
                this.attributeArgList();
                }
            }

            this.state = 644;
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
        this.enterRule(localContext, 96, StructuredTextParser.RULE_attributeArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 646;
            this.match(StructuredTextParser.T__28);
            this.state = 647;
            this.attributeArg();
            this.state = 652;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 648;
                this.match(StructuredTextParser.T__3);
                this.state = 649;
                this.attributeArg();
                }
                }
                this.state = 654;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 655;
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
        this.enterRule(localContext, 98, StructuredTextParser.RULE_attributeArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 657;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 11) !== 0))) {
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
        this.enterRule(localContext, 100, StructuredTextParser.RULE_accessModifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 659;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & 15) !== 0))) {
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
        this.enterRule(localContext, 102, StructuredTextParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 661;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 7) !== 0))) {
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
        this.enterRule(localContext, 104, StructuredTextParser.RULE_enumMemberList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 663;
            this.match(StructuredTextParser.ID);
            this.state = 668;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 664;
                this.match(StructuredTextParser.T__3);
                this.state = 665;
                this.match(StructuredTextParser.ID);
                }
                }
                this.state = 670;
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
        case 42:
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
        4,1,121,672,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,1,0,1,0,1,0,5,0,110,8,0,10,0,12,0,113,9,0,1,0,1,0,1,0,1,1,3,1,
        119,8,1,1,1,1,1,1,1,1,1,1,1,3,1,126,8,1,1,1,3,1,129,8,1,1,1,5,1,
        132,8,1,10,1,12,1,135,9,1,1,1,1,1,1,1,1,2,3,2,141,8,2,1,2,1,2,5,
        2,145,8,2,10,2,12,2,148,9,2,1,2,1,2,3,2,152,8,2,1,2,3,2,155,8,2,
        1,2,5,2,158,8,2,10,2,12,2,161,9,2,1,2,1,2,1,2,1,3,3,3,167,8,3,1,
        3,1,3,3,3,171,8,3,1,3,5,3,174,8,3,10,3,12,3,177,9,3,1,3,1,3,1,3,
        1,3,5,3,183,8,3,10,3,12,3,186,9,3,1,3,1,3,1,3,1,4,3,4,192,8,4,1,
        4,1,4,3,4,196,8,4,1,4,5,4,199,8,4,10,4,12,4,202,9,4,1,4,1,4,1,4,
        3,4,207,8,4,1,4,5,4,210,8,4,10,4,12,4,213,9,4,1,4,1,4,1,4,1,5,3,
        5,219,8,5,1,5,1,5,1,5,3,5,224,8,5,1,5,5,5,227,8,5,10,5,12,5,230,
        9,5,1,5,1,5,1,6,3,6,235,8,6,1,6,1,6,1,6,5,6,240,8,6,10,6,12,6,243,
        9,6,1,6,1,6,1,7,3,7,248,8,7,1,7,1,7,1,7,1,7,1,7,1,8,3,8,256,8,8,
        1,8,1,8,1,8,5,8,261,8,8,10,8,12,8,264,9,8,1,8,1,8,1,9,3,9,269,8,
        9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,3,10,278,8,10,1,10,1,10,5,10,282,
        8,10,10,10,12,10,285,9,10,1,10,4,10,288,8,10,11,10,12,10,289,1,10,
        1,10,1,11,1,11,1,11,1,11,5,11,298,8,11,10,11,12,11,301,9,11,1,12,
        1,12,1,12,1,12,5,12,307,8,12,10,12,12,12,310,9,12,1,13,1,13,1,13,
        3,13,315,8,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,323,8,14,1,15,1,
        15,5,15,327,8,15,10,15,12,15,330,9,15,1,15,4,15,333,8,15,11,15,12,
        15,334,1,15,1,15,1,16,1,16,1,17,3,17,342,8,17,1,17,1,17,1,17,3,17,
        347,8,17,1,17,3,17,350,8,17,1,17,1,17,1,17,3,17,355,8,17,1,17,1,
        17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,3,19,369,8,
        19,1,20,1,20,1,20,1,20,5,20,375,8,20,10,20,12,20,378,9,20,1,20,1,
        20,1,21,1,21,3,21,384,8,21,1,22,1,22,1,23,5,23,389,8,23,10,23,12,
        23,392,9,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,
        24,3,24,405,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
        25,3,25,417,8,25,1,26,1,26,3,26,421,8,26,1,26,1,26,1,26,1,26,3,26,
        427,8,26,3,26,429,8,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,
        28,3,28,440,8,28,1,28,1,28,3,28,444,8,28,1,28,1,28,1,28,1,29,1,29,
        1,29,5,29,452,8,29,10,29,12,29,455,9,29,1,30,1,30,1,30,1,30,3,30,
        461,8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,5,31,472,8,
        31,10,31,12,31,475,9,31,1,31,1,31,3,31,479,8,31,1,31,1,31,1,32,1,
        32,1,32,1,32,4,32,487,8,32,11,32,12,32,488,1,32,1,32,3,32,493,8,
        32,1,32,1,32,1,33,1,33,1,33,5,33,500,8,33,10,33,12,33,503,9,33,1,
        33,1,33,1,33,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,
        36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,530,
        8,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,
        1,40,1,41,1,41,3,41,547,8,41,1,42,1,42,1,42,1,42,3,42,553,8,42,1,
        42,1,42,1,42,3,42,558,8,42,1,42,1,42,1,42,1,42,1,42,3,42,565,8,42,
        1,42,1,42,1,42,1,42,1,42,1,42,3,42,573,8,42,1,42,1,42,1,42,1,42,
        1,42,1,42,1,42,1,42,3,42,583,8,42,1,42,1,42,1,42,1,42,1,42,1,42,
        1,42,1,42,1,42,1,42,1,42,1,42,5,42,597,8,42,10,42,12,42,600,9,42,
        1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,5,43,611,8,43,10,43,
        12,43,614,9,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,3,44,624,
        8,44,1,45,1,45,3,45,628,8,45,1,45,1,45,1,45,1,46,1,46,3,46,635,8,
        46,1,46,1,46,1,46,1,47,1,47,1,47,3,47,643,8,47,1,47,1,47,1,48,1,
        48,1,48,1,48,5,48,651,8,48,10,48,12,48,654,9,48,1,48,1,48,1,49,1,
        49,1,50,1,50,1,51,1,51,1,52,1,52,1,52,5,52,667,8,52,10,52,12,52,
        670,9,52,1,52,0,1,84,53,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
        30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,
        74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,0,11,2,0,57,62,
        64,65,1,0,9,27,2,0,5,5,31,31,2,0,115,117,119,119,2,0,32,33,114,114,
        1,0,34,35,2,0,2,2,36,40,1,0,89,91,2,0,116,117,119,119,1,0,109,112,
        1,0,105,107,726,0,106,1,0,0,0,2,118,1,0,0,0,4,140,1,0,0,0,6,166,
        1,0,0,0,8,191,1,0,0,0,10,218,1,0,0,0,12,234,1,0,0,0,14,247,1,0,0,
        0,16,255,1,0,0,0,18,268,1,0,0,0,20,277,1,0,0,0,22,293,1,0,0,0,24,
        302,1,0,0,0,26,314,1,0,0,0,28,322,1,0,0,0,30,324,1,0,0,0,32,338,
        1,0,0,0,34,341,1,0,0,0,36,358,1,0,0,0,38,368,1,0,0,0,40,370,1,0,
        0,0,42,383,1,0,0,0,44,385,1,0,0,0,46,390,1,0,0,0,48,404,1,0,0,0,
        50,416,1,0,0,0,52,428,1,0,0,0,54,430,1,0,0,0,56,439,1,0,0,0,58,448,
        1,0,0,0,60,460,1,0,0,0,62,462,1,0,0,0,64,482,1,0,0,0,66,496,1,0,
        0,0,68,507,1,0,0,0,70,509,1,0,0,0,72,515,1,0,0,0,74,521,1,0,0,0,
        76,535,1,0,0,0,78,538,1,0,0,0,80,541,1,0,0,0,82,544,1,0,0,0,84,582,
        1,0,0,0,86,612,1,0,0,0,88,623,1,0,0,0,90,625,1,0,0,0,92,632,1,0,
        0,0,94,639,1,0,0,0,96,646,1,0,0,0,98,657,1,0,0,0,100,659,1,0,0,0,
        102,661,1,0,0,0,104,663,1,0,0,0,106,107,5,43,0,0,107,111,5,116,0,
        0,108,110,3,30,15,0,109,108,1,0,0,0,110,113,1,0,0,0,111,109,1,0,
        0,0,111,112,1,0,0,0,112,114,1,0,0,0,113,111,1,0,0,0,114,115,3,46,
        23,0,115,116,5,44,0,0,116,1,1,0,0,0,117,119,3,94,47,0,118,117,1,
        0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,121,5,47,0,0,121,122,5,
        116,0,0,122,123,5,1,0,0,123,125,3,42,21,0,124,126,3,22,11,0,125,
        124,1,0,0,0,125,126,1,0,0,0,126,128,1,0,0,0,127,129,3,24,12,0,128,
        127,1,0,0,0,128,129,1,0,0,0,129,133,1,0,0,0,130,132,3,30,15,0,131,
        130,1,0,0,0,132,135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,
        136,1,0,0,0,135,133,1,0,0,0,136,137,3,46,23,0,137,138,5,48,0,0,138,
        3,1,0,0,0,139,141,3,94,47,0,140,139,1,0,0,0,140,141,1,0,0,0,141,
        142,1,0,0,0,142,146,5,45,0,0,143,145,3,102,51,0,144,143,1,0,0,0,
        145,148,1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,149,1,0,0,0,
        148,146,1,0,0,0,149,151,5,116,0,0,150,152,3,22,11,0,151,150,1,0,
        0,0,151,152,1,0,0,0,152,154,1,0,0,0,153,155,3,24,12,0,154,153,1,
        0,0,0,154,155,1,0,0,0,155,159,1,0,0,0,156,158,3,26,13,0,157,156,
        1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,159,160,1,0,0,0,160,162,
        1,0,0,0,161,159,1,0,0,0,162,163,3,46,23,0,163,164,5,46,0,0,164,5,
        1,0,0,0,165,167,3,94,47,0,166,165,1,0,0,0,166,167,1,0,0,0,167,168,
        1,0,0,0,168,170,5,49,0,0,169,171,3,100,50,0,170,169,1,0,0,0,170,
        171,1,0,0,0,171,175,1,0,0,0,172,174,3,102,51,0,173,172,1,0,0,0,174,
        177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,178,1,0,0,0,177,
        175,1,0,0,0,178,179,5,116,0,0,179,180,5,1,0,0,180,184,3,42,21,0,
        181,183,3,30,15,0,182,181,1,0,0,0,183,186,1,0,0,0,184,182,1,0,0,
        0,184,185,1,0,0,0,185,187,1,0,0,0,186,184,1,0,0,0,187,188,3,88,44,
        0,188,189,5,50,0,0,189,7,1,0,0,0,190,192,3,94,47,0,191,190,1,0,0,
        0,191,192,1,0,0,0,192,193,1,0,0,0,193,195,5,92,0,0,194,196,3,100,
        50,0,195,194,1,0,0,0,195,196,1,0,0,0,196,200,1,0,0,0,197,199,3,102,
        51,0,198,197,1,0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,
        0,0,201,203,1,0,0,0,202,200,1,0,0,0,203,206,5,116,0,0,204,205,5,
        1,0,0,205,207,3,42,21,0,206,204,1,0,0,0,206,207,1,0,0,0,207,211,
        1,0,0,0,208,210,3,30,15,0,209,208,1,0,0,0,210,213,1,0,0,0,211,209,
        1,0,0,0,211,212,1,0,0,0,212,214,1,0,0,0,213,211,1,0,0,0,214,215,
        3,46,23,0,215,216,5,93,0,0,216,9,1,0,0,0,217,219,3,94,47,0,218,217,
        1,0,0,0,218,219,1,0,0,0,219,220,1,0,0,0,220,221,5,94,0,0,221,223,
        5,116,0,0,222,224,3,24,12,0,223,222,1,0,0,0,223,224,1,0,0,0,224,
        228,1,0,0,0,225,227,3,26,13,0,226,225,1,0,0,0,227,230,1,0,0,0,228,
        226,1,0,0,0,228,229,1,0,0,0,229,231,1,0,0,0,230,228,1,0,0,0,231,
        232,5,95,0,0,232,11,1,0,0,0,233,235,3,94,47,0,234,233,1,0,0,0,234,
        235,1,0,0,0,235,236,1,0,0,0,236,237,5,98,0,0,237,241,5,116,0,0,238,
        240,3,30,15,0,239,238,1,0,0,0,240,243,1,0,0,0,241,239,1,0,0,0,241,
        242,1,0,0,0,242,244,1,0,0,0,243,241,1,0,0,0,244,245,5,99,0,0,245,
        13,1,0,0,0,246,248,3,94,47,0,247,246,1,0,0,0,247,248,1,0,0,0,248,
        249,1,0,0,0,249,250,5,100,0,0,250,251,5,116,0,0,251,252,3,104,52,
        0,252,253,5,101,0,0,253,15,1,0,0,0,254,256,3,94,47,0,255,254,1,0,
        0,0,255,256,1,0,0,0,256,257,1,0,0,0,257,258,5,102,0,0,258,262,5,
        116,0,0,259,261,3,28,14,0,260,259,1,0,0,0,261,264,1,0,0,0,262,260,
        1,0,0,0,262,263,1,0,0,0,263,265,1,0,0,0,264,262,1,0,0,0,265,266,
        5,103,0,0,266,17,1,0,0,0,267,269,3,94,47,0,268,267,1,0,0,0,268,269,
        1,0,0,0,269,270,1,0,0,0,270,271,5,104,0,0,271,272,5,116,0,0,272,
        273,5,2,0,0,273,274,3,42,21,0,274,275,5,3,0,0,275,19,1,0,0,0,276,
        278,3,94,47,0,277,276,1,0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,
        283,5,63,0,0,280,282,3,102,51,0,281,280,1,0,0,0,282,285,1,0,0,0,
        283,281,1,0,0,0,283,284,1,0,0,0,284,287,1,0,0,0,285,283,1,0,0,0,
        286,288,3,34,17,0,287,286,1,0,0,0,288,289,1,0,0,0,289,287,1,0,0,
        0,289,290,1,0,0,0,290,291,1,0,0,0,291,292,5,66,0,0,292,21,1,0,0,
        0,293,294,5,51,0,0,294,299,3,42,21,0,295,296,5,4,0,0,296,298,3,42,
        21,0,297,295,1,0,0,0,298,301,1,0,0,0,299,297,1,0,0,0,299,300,1,0,
        0,0,300,23,1,0,0,0,301,299,1,0,0,0,302,303,5,52,0,0,303,308,3,42,
        21,0,304,305,5,4,0,0,305,307,3,42,21,0,306,304,1,0,0,0,307,310,1,
        0,0,0,308,306,1,0,0,0,308,309,1,0,0,0,309,25,1,0,0,0,310,308,1,0,
        0,0,311,315,3,8,4,0,312,315,3,6,3,0,313,315,3,30,15,0,314,311,1,
        0,0,0,314,312,1,0,0,0,314,313,1,0,0,0,315,27,1,0,0,0,316,323,3,0,
        0,0,317,323,3,4,2,0,318,323,3,2,1,0,319,323,3,12,6,0,320,323,3,14,
        7,0,321,323,3,10,5,0,322,316,1,0,0,0,322,317,1,0,0,0,322,318,1,0,
        0,0,322,319,1,0,0,0,322,320,1,0,0,0,322,321,1,0,0,0,323,29,1,0,0,
        0,324,328,3,32,16,0,325,327,3,102,51,0,326,325,1,0,0,0,327,330,1,
        0,0,0,328,326,1,0,0,0,328,329,1,0,0,0,329,332,1,0,0,0,330,328,1,
        0,0,0,331,333,3,34,17,0,332,331,1,0,0,0,333,334,1,0,0,0,334,332,
        1,0,0,0,334,335,1,0,0,0,335,336,1,0,0,0,336,337,5,66,0,0,337,31,
        1,0,0,0,338,339,7,0,0,0,339,33,1,0,0,0,340,342,3,94,47,0,341,340,
        1,0,0,0,341,342,1,0,0,0,342,343,1,0,0,0,343,344,5,116,0,0,344,346,
        5,1,0,0,345,347,5,113,0,0,346,345,1,0,0,0,346,347,1,0,0,0,347,349,
        1,0,0,0,348,350,3,36,18,0,349,348,1,0,0,0,349,350,1,0,0,0,350,351,
        1,0,0,0,351,354,3,42,21,0,352,353,5,5,0,0,353,355,3,38,19,0,354,
        352,1,0,0,0,354,355,1,0,0,0,355,356,1,0,0,0,356,357,5,3,0,0,357,
        35,1,0,0,0,358,359,5,73,0,0,359,360,5,6,0,0,360,361,5,117,0,0,361,
        362,5,7,0,0,362,363,5,117,0,0,363,364,5,8,0,0,364,365,5,74,0,0,365,
        37,1,0,0,0,366,369,3,84,42,0,367,369,3,40,20,0,368,366,1,0,0,0,368,
        367,1,0,0,0,369,39,1,0,0,0,370,371,5,6,0,0,371,376,3,84,42,0,372,
        373,5,4,0,0,373,375,3,84,42,0,374,372,1,0,0,0,375,378,1,0,0,0,376,
        374,1,0,0,0,376,377,1,0,0,0,377,379,1,0,0,0,378,376,1,0,0,0,379,
        380,5,8,0,0,380,41,1,0,0,0,381,384,3,44,22,0,382,384,5,116,0,0,383,
        381,1,0,0,0,383,382,1,0,0,0,384,43,1,0,0,0,385,386,7,1,0,0,386,45,
        1,0,0,0,387,389,3,48,24,0,388,387,1,0,0,0,389,392,1,0,0,0,390,388,
        1,0,0,0,390,391,1,0,0,0,391,47,1,0,0,0,392,390,1,0,0,0,393,405,3,
        50,25,0,394,405,3,62,31,0,395,405,3,64,32,0,396,405,3,70,35,0,397,
        405,3,72,36,0,398,405,3,74,37,0,399,405,3,56,28,0,400,405,3,76,38,
        0,401,405,3,78,39,0,402,405,3,80,40,0,403,405,5,3,0,0,404,393,1,
        0,0,0,404,394,1,0,0,0,404,395,1,0,0,0,404,396,1,0,0,0,404,397,1,
        0,0,0,404,398,1,0,0,0,404,399,1,0,0,0,404,400,1,0,0,0,404,401,1,
        0,0,0,404,402,1,0,0,0,404,403,1,0,0,0,405,49,1,0,0,0,406,407,3,52,
        26,0,407,408,5,5,0,0,408,409,3,84,42,0,409,410,5,3,0,0,410,417,1,
        0,0,0,411,412,3,52,26,0,412,413,5,2,0,0,413,414,3,84,42,0,414,415,
        5,3,0,0,415,417,1,0,0,0,416,406,1,0,0,0,416,411,1,0,0,0,417,51,1,
        0,0,0,418,420,5,116,0,0,419,421,3,54,27,0,420,419,1,0,0,0,420,421,
        1,0,0,0,421,429,1,0,0,0,422,423,3,82,41,0,423,424,5,28,0,0,424,426,
        5,116,0,0,425,427,3,54,27,0,426,425,1,0,0,0,426,427,1,0,0,0,427,
        429,1,0,0,0,428,418,1,0,0,0,428,422,1,0,0,0,429,53,1,0,0,0,430,431,
        5,6,0,0,431,432,3,84,42,0,432,433,5,8,0,0,433,55,1,0,0,0,434,440,
        5,116,0,0,435,436,3,82,41,0,436,437,5,28,0,0,437,438,5,116,0,0,438,
        440,1,0,0,0,439,434,1,0,0,0,439,435,1,0,0,0,440,441,1,0,0,0,441,
        443,5,29,0,0,442,444,3,58,29,0,443,442,1,0,0,0,443,444,1,0,0,0,444,
        445,1,0,0,0,445,446,5,30,0,0,446,447,5,3,0,0,447,57,1,0,0,0,448,
        453,3,60,30,0,449,450,5,4,0,0,450,452,3,60,30,0,451,449,1,0,0,0,
        452,455,1,0,0,0,453,451,1,0,0,0,453,454,1,0,0,0,454,59,1,0,0,0,455,
        453,1,0,0,0,456,457,5,116,0,0,457,458,7,2,0,0,458,461,3,84,42,0,
        459,461,3,84,42,0,460,456,1,0,0,0,460,459,1,0,0,0,461,61,1,0,0,0,
        462,463,5,67,0,0,463,464,3,84,42,0,464,465,5,68,0,0,465,473,3,46,
        23,0,466,467,5,69,0,0,467,468,3,84,42,0,468,469,5,68,0,0,469,470,
        3,46,23,0,470,472,1,0,0,0,471,466,1,0,0,0,472,475,1,0,0,0,473,471,
        1,0,0,0,473,474,1,0,0,0,474,478,1,0,0,0,475,473,1,0,0,0,476,477,
        5,70,0,0,477,479,3,46,23,0,478,476,1,0,0,0,478,479,1,0,0,0,479,480,
        1,0,0,0,480,481,5,71,0,0,481,63,1,0,0,0,482,483,5,72,0,0,483,484,
        3,84,42,0,484,486,5,74,0,0,485,487,3,66,33,0,486,485,1,0,0,0,487,
        488,1,0,0,0,488,486,1,0,0,0,488,489,1,0,0,0,489,492,1,0,0,0,490,
        491,5,70,0,0,491,493,3,46,23,0,492,490,1,0,0,0,492,493,1,0,0,0,493,
        494,1,0,0,0,494,495,5,75,0,0,495,65,1,0,0,0,496,501,3,68,34,0,497,
        498,5,4,0,0,498,500,3,68,34,0,499,497,1,0,0,0,500,503,1,0,0,0,501,
        499,1,0,0,0,501,502,1,0,0,0,502,504,1,0,0,0,503,501,1,0,0,0,504,
        505,5,1,0,0,505,506,3,46,23,0,506,67,1,0,0,0,507,508,7,3,0,0,508,
        69,1,0,0,0,509,510,5,76,0,0,510,511,3,84,42,0,511,512,5,77,0,0,512,
        513,3,46,23,0,513,514,5,78,0,0,514,71,1,0,0,0,515,516,5,79,0,0,516,
        517,3,46,23,0,517,518,5,80,0,0,518,519,3,84,42,0,519,520,5,81,0,
        0,520,73,1,0,0,0,521,522,5,82,0,0,522,523,5,116,0,0,523,524,5,5,
        0,0,524,525,3,84,42,0,525,526,5,83,0,0,526,529,3,84,42,0,527,528,
        5,84,0,0,528,530,3,84,42,0,529,527,1,0,0,0,529,530,1,0,0,0,530,531,
        1,0,0,0,531,532,5,77,0,0,532,533,3,46,23,0,533,534,5,85,0,0,534,
        75,1,0,0,0,535,536,5,86,0,0,536,537,5,3,0,0,537,77,1,0,0,0,538,539,
        5,87,0,0,539,540,5,3,0,0,540,79,1,0,0,0,541,542,5,88,0,0,542,543,
        5,3,0,0,543,81,1,0,0,0,544,546,5,116,0,0,545,547,3,54,27,0,546,545,
        1,0,0,0,546,547,1,0,0,0,547,83,1,0,0,0,548,549,6,42,-1,0,549,550,
        5,116,0,0,550,552,5,29,0,0,551,553,3,58,29,0,552,551,1,0,0,0,552,
        553,1,0,0,0,553,554,1,0,0,0,554,583,5,30,0,0,555,557,5,116,0,0,556,
        558,3,54,27,0,557,556,1,0,0,0,557,558,1,0,0,0,558,583,1,0,0,0,559,
        560,3,82,41,0,560,561,5,28,0,0,561,562,5,116,0,0,562,564,5,29,0,
        0,563,565,3,58,29,0,564,563,1,0,0,0,564,565,1,0,0,0,565,566,1,0,
        0,0,566,567,5,30,0,0,567,583,1,0,0,0,568,569,3,82,41,0,569,570,5,
        28,0,0,570,572,5,116,0,0,571,573,3,54,27,0,572,571,1,0,0,0,572,573,
        1,0,0,0,573,583,1,0,0,0,574,575,5,29,0,0,575,576,3,84,42,0,576,577,
        5,30,0,0,577,583,1,0,0,0,578,583,5,117,0,0,579,583,5,115,0,0,580,
        583,5,118,0,0,581,583,5,119,0,0,582,548,1,0,0,0,582,555,1,0,0,0,
        582,559,1,0,0,0,582,568,1,0,0,0,582,574,1,0,0,0,582,578,1,0,0,0,
        582,579,1,0,0,0,582,580,1,0,0,0,582,581,1,0,0,0,583,598,1,0,0,0,
        584,585,10,13,0,0,585,586,7,4,0,0,586,597,3,84,42,14,587,588,10,
        12,0,0,588,589,7,5,0,0,589,597,3,84,42,13,590,591,10,11,0,0,591,
        592,7,6,0,0,592,597,3,84,42,12,593,594,10,10,0,0,594,595,7,7,0,0,
        595,597,3,84,42,11,596,584,1,0,0,0,596,587,1,0,0,0,596,590,1,0,0,
        0,596,593,1,0,0,0,597,600,1,0,0,0,598,596,1,0,0,0,598,599,1,0,0,
        0,599,85,1,0,0,0,600,598,1,0,0,0,601,611,3,0,0,0,602,611,3,4,2,0,
        603,611,3,2,1,0,604,611,3,10,5,0,605,611,3,12,6,0,606,611,3,14,7,
        0,607,611,3,16,8,0,608,611,3,18,9,0,609,611,3,20,10,0,610,601,1,
        0,0,0,610,602,1,0,0,0,610,603,1,0,0,0,610,604,1,0,0,0,610,605,1,
        0,0,0,610,606,1,0,0,0,610,607,1,0,0,0,610,608,1,0,0,0,610,609,1,
        0,0,0,611,614,1,0,0,0,612,610,1,0,0,0,612,613,1,0,0,0,613,87,1,0,
        0,0,614,612,1,0,0,0,615,624,3,90,45,0,616,624,3,92,46,0,617,618,
        3,90,45,0,618,619,3,92,46,0,619,624,1,0,0,0,620,621,3,92,46,0,621,
        622,3,90,45,0,622,624,1,0,0,0,623,615,1,0,0,0,623,616,1,0,0,0,623,
        617,1,0,0,0,623,620,1,0,0,0,624,89,1,0,0,0,625,627,5,53,0,0,626,
        628,3,100,50,0,627,626,1,0,0,0,627,628,1,0,0,0,628,629,1,0,0,0,629,
        630,3,46,23,0,630,631,5,54,0,0,631,91,1,0,0,0,632,634,5,55,0,0,633,
        635,3,100,50,0,634,633,1,0,0,0,634,635,1,0,0,0,635,636,1,0,0,0,636,
        637,3,46,23,0,637,638,5,56,0,0,638,93,1,0,0,0,639,640,5,41,0,0,640,
        642,5,116,0,0,641,643,3,96,48,0,642,641,1,0,0,0,642,643,1,0,0,0,
        643,644,1,0,0,0,644,645,5,42,0,0,645,95,1,0,0,0,646,647,5,29,0,0,
        647,652,3,98,49,0,648,649,5,4,0,0,649,651,3,98,49,0,650,648,1,0,
        0,0,651,654,1,0,0,0,652,650,1,0,0,0,652,653,1,0,0,0,653,655,1,0,
        0,0,654,652,1,0,0,0,655,656,5,30,0,0,656,97,1,0,0,0,657,658,7,8,
        0,0,658,99,1,0,0,0,659,660,7,9,0,0,660,101,1,0,0,0,661,662,7,10,
        0,0,662,103,1,0,0,0,663,668,5,116,0,0,664,665,5,4,0,0,665,667,5,
        116,0,0,666,664,1,0,0,0,667,670,1,0,0,0,668,666,1,0,0,0,668,669,
        1,0,0,0,669,105,1,0,0,0,670,668,1,0,0,0,76,111,118,125,128,133,140,
        146,151,154,159,166,170,175,184,191,195,200,206,211,218,223,228,
        234,241,247,255,262,268,277,283,289,299,308,314,322,328,334,341,
        346,349,354,368,376,383,390,404,416,420,426,428,439,443,453,460,
        473,478,488,492,501,529,546,552,557,564,572,582,596,598,610,612,
        623,627,634,642,652,668
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


export class TypeDefDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPEDEF(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.TYPEDEF, 0)!;
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
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_typeDefDecl;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitTypeDefDecl) {
            return visitor.visitTypeDefDecl(this);
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
    public typeDefDecl(): TypeDefDeclContext[];
    public typeDefDecl(i: number): TypeDefDeclContext | null;
    public typeDefDecl(i?: number): TypeDefDeclContext[] | TypeDefDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeDefDeclContext);
        }

        return this.getRuleContext(i, TypeDefDeclContext);
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
