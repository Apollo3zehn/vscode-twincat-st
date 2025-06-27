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
    public static readonly END_VAR = 65;
    public static readonly IF = 66;
    public static readonly THEN = 67;
    public static readonly ELSIF = 68;
    public static readonly ELSE = 69;
    public static readonly END_IF = 70;
    public static readonly CASE = 71;
    public static readonly ARRAY = 72;
    public static readonly OF = 73;
    public static readonly END_CASE = 74;
    public static readonly WHILE = 75;
    public static readonly DO = 76;
    public static readonly END_WHILE = 77;
    public static readonly REPEAT = 78;
    public static readonly UNTIL = 79;
    public static readonly END_REPEAT = 80;
    public static readonly FOR = 81;
    public static readonly TO = 82;
    public static readonly BY = 83;
    public static readonly END_FOR = 84;
    public static readonly RETURN = 85;
    public static readonly EXIT = 86;
    public static readonly CONTINUE = 87;
    public static readonly AND = 88;
    public static readonly OR = 89;
    public static readonly XOR = 90;
    public static readonly METHOD = 91;
    public static readonly END_METHOD = 92;
    public static readonly INTERFACE = 93;
    public static readonly END_INTERFACE = 94;
    public static readonly CLASS = 95;
    public static readonly END_CLASS = 96;
    public static readonly STRUCT = 97;
    public static readonly END_STRUCT = 98;
    public static readonly ENUM = 99;
    public static readonly END_ENUM = 100;
    public static readonly NAMESPACE = 101;
    public static readonly END_NAMESPACE = 102;
    public static readonly TYPEDEF = 103;
    public static readonly ABSTRACT = 104;
    public static readonly FINAL = 105;
    public static readonly SEALED = 106;
    public static readonly OVERRIDE = 107;
    public static readonly STATIC = 108;
    public static readonly CONSTANT = 109;
    public static readonly READONLY = 110;
    public static readonly PUBLIC = 111;
    public static readonly PRIVATE = 112;
    public static readonly PROTECTED = 113;
    public static readonly INTERNAL = 114;
    public static readonly REFERENCE_TO = 115;
    public static readonly MOD = 116;
    public static readonly BOOL = 117;
    public static readonly ID = 118;
    public static readonly NUMBER = 119;
    public static readonly TIME_LITERAL = 120;
    public static readonly STRING_LITERAL = 121;
    public static readonly WS = 122;
    public static readonly COMMENT = 123;
    public static readonly RULE_program = 0;
    public static readonly RULE_function = 1;
    public static readonly RULE_functionBlock = 2;
    public static readonly RULE_property = 3;
    public static readonly RULE_method = 4;
    public static readonly RULE_interface = 5;
    public static readonly RULE_classDecl = 6;
    public static readonly RULE_structDecl = 7;
    public static readonly RULE_enumDecl = 8;
    public static readonly RULE_namespaceDecl = 9;
    public static readonly RULE_typeDefDecl = 10;
    public static readonly RULE_varGlobalSection = 11;
    public static readonly RULE_implementsClause = 12;
    public static readonly RULE_extendsClause = 13;
    public static readonly RULE_member = 14;
    public static readonly RULE_namespaceMember = 15;
    public static readonly RULE_varDeclSection = 16;
    public static readonly RULE_varSectionType = 17;
    public static readonly RULE_varDecl = 18;
    public static readonly RULE_arraySpec = 19;
    public static readonly RULE_exprOrArrayInit = 20;
    public static readonly RULE_arrayInit = 21;
    public static readonly RULE_type = 22;
    public static readonly RULE_builtinType = 23;
    public static readonly RULE_statementSection = 24;
    public static readonly RULE_statement = 25;
    public static readonly RULE_assignment = 26;
    public static readonly RULE_assignTarget = 27;
    public static readonly RULE_arrayIndex = 28;
    public static readonly RULE_callStatement = 29;
    public static readonly RULE_argumentList = 30;
    public static readonly RULE_argument = 31;
    public static readonly RULE_ifStatement = 32;
    public static readonly RULE_caseStatement = 33;
    public static readonly RULE_caseElement = 34;
    public static readonly RULE_caseValue = 35;
    public static readonly RULE_whileStatement = 36;
    public static readonly RULE_repeatStatement = 37;
    public static readonly RULE_forStatement = 38;
    public static readonly RULE_returnStatement = 39;
    public static readonly RULE_exitStatement = 40;
    public static readonly RULE_continueStatement = 41;
    public static readonly RULE_memberQualifier = 42;
    public static readonly RULE_expr = 43;
    public static readonly RULE_compilationUnit = 44;
    public static readonly RULE_propertyBody = 45;
    public static readonly RULE_getter = 46;
    public static readonly RULE_setter = 47;
    public static readonly RULE_attribute = 48;
    public static readonly RULE_attributeArgList = 49;
    public static readonly RULE_attributeArg = 50;
    public static readonly RULE_accessModifier = 51;
    public static readonly RULE_modifier = 52;
    public static readonly RULE_enumMemberList = 53;

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
        "'VAR_INST'", "'END_VAR'", "'IF'", "'THEN'", "'ELSIF'", "'ELSE'", 
        "'END_IF'", "'CASE'", "'ARRAY'", "'OF'", "'END_CASE'", "'WHILE'", 
        "'DO'", "'END_WHILE'", "'REPEAT'", "'UNTIL'", "'END_REPEAT'", "'FOR'", 
        "'TO'", "'BY'", "'END_FOR'", "'RETURN'", "'EXIT'", "'CONTINUE'", 
        "'AND'", "'OR'", "'XOR'", "'METHOD'", "'END_METHOD'", "'INTERFACE'", 
        "'END_INTERFACE'", "'CLASS'", "'END_CLASS'", "'STRUCT'", "'END_STRUCT'", 
        "'ENUM'", "'END_ENUM'", "'NAMESPACE'", "'END_NAMESPACE'", "'TYPEDEF'", 
        "'ABSTRACT'", "'FINAL'", "'SEALED'", "'OVERRIDE'", "'STATIC'", "'CONSTANT'", 
        "'READONLY'", "'PUBLIC'", "'PRIVATE'", "'PROTECTED'", "'INTERNAL'", 
        "'REFERENCE TO'", "'MOD'"
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
        "END_VAR", "IF", "THEN", "ELSIF", "ELSE", "END_IF", "CASE", "ARRAY", 
        "OF", "END_CASE", "WHILE", "DO", "END_WHILE", "REPEAT", "UNTIL", 
        "END_REPEAT", "FOR", "TO", "BY", "END_FOR", "RETURN", "EXIT", "CONTINUE", 
        "AND", "OR", "XOR", "METHOD", "END_METHOD", "INTERFACE", "END_INTERFACE", 
        "CLASS", "END_CLASS", "STRUCT", "END_STRUCT", "ENUM", "END_ENUM", 
        "NAMESPACE", "END_NAMESPACE", "TYPEDEF", "ABSTRACT", "FINAL", "SEALED", 
        "OVERRIDE", "STATIC", "CONSTANT", "READONLY", "PUBLIC", "PRIVATE", 
        "PROTECTED", "INTERNAL", "REFERENCE_TO", "MOD", "BOOL", "ID", "NUMBER", 
        "TIME_LITERAL", "STRING_LITERAL", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "function", "functionBlock", "property", "method", "interface", 
        "classDecl", "structDecl", "enumDecl", "namespaceDecl", "typeDefDecl", 
        "varGlobalSection", "implementsClause", "extendsClause", "member", 
        "namespaceMember", "varDeclSection", "varSectionType", "varDecl", 
        "arraySpec", "exprOrArrayInit", "arrayInit", "type", "builtinType", 
        "statementSection", "statement", "assignment", "assignTarget", "arrayIndex", 
        "callStatement", "argumentList", "argument", "ifStatement", "caseStatement", 
        "caseElement", "caseValue", "whileStatement", "repeatStatement", 
        "forStatement", "returnStatement", "exitStatement", "continueStatement", 
        "memberQualifier", "expr", "compilationUnit", "propertyBody", "getter", 
        "setter", "attribute", "attributeArgList", "attributeArg", "accessModifier", 
        "modifier", "enumMemberList",
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
            this.state = 108;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 109;
            this.match(StructuredTextParser.ID);
            this.state = 111;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 110;
                this.implementsClause();
                }
            }

            this.state = 114;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 113;
                this.extendsClause();
                }
            }

            this.state = 119;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 191) !== 0)) {
                {
                {
                this.state = 116;
                this.varDeclSection();
                }
                }
                this.state = 121;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 122;
            this.statementSection();
            this.state = 123;
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
            this.state = 126;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 125;
                this.attribute();
                }
            }

            this.state = 128;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 129;
            this.match(StructuredTextParser.ID);
            this.state = 130;
            this.match(StructuredTextParser.T__0);
            this.state = 131;
            this.type_();
            this.state = 133;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 132;
                this.implementsClause();
                }
            }

            this.state = 136;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 135;
                this.extendsClause();
                }
            }

            this.state = 141;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 191) !== 0)) {
                {
                {
                this.state = 138;
                this.varDeclSection();
                }
                }
                this.state = 143;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 144;
            this.statementSection();
            this.state = 145;
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
            this.state = 148;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 147;
                this.attribute();
                }
            }

            this.state = 150;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 152;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 15) !== 0)) {
                {
                this.state = 151;
                this.accessModifier();
                }
            }

            this.state = 157;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 127) !== 0)) {
                {
                {
                this.state = 154;
                this.modifier();
                }
                }
                this.state = 159;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 160;
            this.match(StructuredTextParser.ID);
            this.state = 162;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 161;
                this.implementsClause();
                }
            }

            this.state = 165;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 164;
                this.extendsClause();
                }
            }

            this.state = 170;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 12517633) !== 0) || _la === 91) {
                {
                {
                this.state = 167;
                this.member();
                }
                }
                this.state = 172;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 173;
            this.statementSection();
            this.state = 174;
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
            this.state = 177;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 176;
                this.attribute();
                }
            }

            this.state = 179;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 181;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 15) !== 0)) {
                {
                this.state = 180;
                this.accessModifier();
                }
            }

            this.state = 186;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 127) !== 0)) {
                {
                {
                this.state = 183;
                this.modifier();
                }
                }
                this.state = 188;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 189;
            this.match(StructuredTextParser.ID);
            this.state = 190;
            this.match(StructuredTextParser.T__0);
            this.state = 191;
            this.type_();
            this.state = 195;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 191) !== 0)) {
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
            this.propertyBody();
            this.state = 199;
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
            this.state = 202;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 201;
                this.attribute();
                }
            }

            this.state = 204;
            this.match(StructuredTextParser.METHOD);
            this.state = 206;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 15) !== 0)) {
                {
                this.state = 205;
                this.accessModifier();
                }
            }

            this.state = 211;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 127) !== 0)) {
                {
                {
                this.state = 208;
                this.modifier();
                }
                }
                this.state = 213;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 214;
            this.match(StructuredTextParser.ID);
            this.state = 217;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 215;
                this.match(StructuredTextParser.T__0);
                this.state = 216;
                this.type_();
                }
            }

            this.state = 222;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 191) !== 0)) {
                {
                {
                this.state = 219;
                this.varDeclSection();
                }
                }
                this.state = 224;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 225;
            this.statementSection();
            this.state = 226;
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
            this.state = 229;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 228;
                this.attribute();
                }
            }

            this.state = 231;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 233;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 15) !== 0)) {
                {
                this.state = 232;
                this.accessModifier();
                }
            }

            this.state = 238;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 127) !== 0)) {
                {
                {
                this.state = 235;
                this.modifier();
                }
                }
                this.state = 240;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 241;
            this.match(StructuredTextParser.ID);
            this.state = 243;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 242;
                this.extendsClause();
                }
            }

            this.state = 248;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 12517633) !== 0) || _la === 91) {
                {
                {
                this.state = 245;
                this.member();
                }
                }
                this.state = 250;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 251;
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
    public classDecl(): ClassDeclContext {
        let localContext = new ClassDeclContext(this.context, this.state);
        this.enterRule(localContext, 12, StructuredTextParser.RULE_classDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 254;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 253;
                this.attribute();
                }
            }

            this.state = 256;
            this.match(StructuredTextParser.CLASS);
            this.state = 258;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 15) !== 0)) {
                {
                this.state = 257;
                this.accessModifier();
                }
            }

            this.state = 263;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 127) !== 0)) {
                {
                {
                this.state = 260;
                this.modifier();
                }
                }
                this.state = 265;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 266;
            this.match(StructuredTextParser.ID);
            this.state = 268;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 267;
                this.extendsClause();
                }
            }

            this.state = 271;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 270;
                this.implementsClause();
                }
            }

            this.state = 276;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 12517633) !== 0) || _la === 91) {
                {
                {
                this.state = 273;
                this.member();
                }
                }
                this.state = 278;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 279;
            this.match(StructuredTextParser.END_CLASS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 14, StructuredTextParser.RULE_structDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 282;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 281;
                this.attribute();
                }
            }

            this.state = 284;
            this.match(StructuredTextParser.STRUCT);
            this.state = 285;
            this.match(StructuredTextParser.ID);
            this.state = 289;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 191) !== 0)) {
                {
                {
                this.state = 286;
                this.varDeclSection();
                }
                }
                this.state = 291;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 292;
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
        this.enterRule(localContext, 16, StructuredTextParser.RULE_enumDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 295;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 294;
                this.attribute();
                }
            }

            this.state = 297;
            this.match(StructuredTextParser.ENUM);
            this.state = 298;
            this.match(StructuredTextParser.ID);
            this.state = 299;
            this.enumMemberList();
            this.state = 300;
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
        this.enterRule(localContext, 18, StructuredTextParser.RULE_namespaceDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 303;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 302;
                this.attribute();
                }
            }

            this.state = 305;
            this.match(StructuredTextParser.NAMESPACE);
            this.state = 306;
            this.match(StructuredTextParser.ID);
            this.state = 310;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 85) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & 85) !== 0)) {
                {
                {
                this.state = 307;
                this.namespaceMember();
                }
                }
                this.state = 312;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 313;
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
        this.enterRule(localContext, 20, StructuredTextParser.RULE_typeDefDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 316;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 315;
                this.attribute();
                }
            }

            this.state = 318;
            this.match(StructuredTextParser.TYPEDEF);
            this.state = 319;
            this.match(StructuredTextParser.ID);
            this.state = 320;
            this.match(StructuredTextParser.T__1);
            this.state = 321;
            this.type_();
            this.state = 322;
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
        this.enterRule(localContext, 22, StructuredTextParser.RULE_varGlobalSection);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 325;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 324;
                this.attribute();
                }
            }

            this.state = 327;
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 331;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 328;
                    this.modifier();
                    }
                    }
                }
                this.state = 333;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            }
            this.state = 335;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 334;
                this.varDecl();
                }
                }
                this.state = 337;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 41 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 18431) !== 0));
            this.state = 339;
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
        this.enterRule(localContext, 24, StructuredTextParser.RULE_implementsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 341;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 342;
            this.match(StructuredTextParser.ID);
            this.state = 347;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 343;
                this.match(StructuredTextParser.T__3);
                this.state = 344;
                this.match(StructuredTextParser.ID);
                }
                }
                this.state = 349;
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
        this.enterRule(localContext, 26, StructuredTextParser.RULE_extendsClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 350;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 351;
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
    public member(): MemberContext {
        let localContext = new MemberContext(this.context, this.state);
        this.enterRule(localContext, 28, StructuredTextParser.RULE_member);
        try {
            this.state = 356;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 353;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 354;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 355;
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
        this.enterRule(localContext, 30, StructuredTextParser.RULE_namespaceMember);
        try {
            this.state = 365;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 358;
                this.program();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 359;
                this.functionBlock();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 360;
                this.function_();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 361;
                this.classDecl();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 362;
                this.structDecl();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 363;
                this.enumDecl();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 364;
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
        this.enterRule(localContext, 32, StructuredTextParser.RULE_varDeclSection);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 367;
            this.varSectionType();
            this.state = 371;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 368;
                    this.modifier();
                    }
                    }
                }
                this.state = 373;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
            }
            this.state = 375;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 374;
                this.varDecl();
                }
                }
                this.state = 377;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 41 || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 18431) !== 0));
            this.state = 379;
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
            this.state = 381;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 191) !== 0))) {
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
            this.state = 384;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 383;
                this.attribute();
                }
            }

            this.state = 387;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 15) !== 0)) {
                {
                this.state = 386;
                this.accessModifier();
                }
            }

            this.state = 392;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 127) !== 0)) {
                {
                {
                this.state = 389;
                this.modifier();
                }
                }
                this.state = 394;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 395;
            this.match(StructuredTextParser.ID);
            this.state = 396;
            this.match(StructuredTextParser.T__0);
            this.state = 398;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 115) {
                {
                this.state = 397;
                this.match(StructuredTextParser.REFERENCE_TO);
                }
            }

            this.state = 401;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 72) {
                {
                this.state = 400;
                this.arraySpec();
                }
            }

            this.state = 403;
            this.type_();
            this.state = 406;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 404;
                this.match(StructuredTextParser.T__4);
                this.state = 405;
                this.exprOrArrayInit();
                }
            }

            this.state = 408;
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
        this.enterRule(localContext, 38, StructuredTextParser.RULE_arraySpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 410;
            this.match(StructuredTextParser.ARRAY);
            this.state = 411;
            this.match(StructuredTextParser.T__5);
            this.state = 412;
            this.match(StructuredTextParser.NUMBER);
            this.state = 413;
            this.match(StructuredTextParser.T__6);
            this.state = 414;
            this.match(StructuredTextParser.NUMBER);
            this.state = 415;
            this.match(StructuredTextParser.T__7);
            this.state = 416;
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
        this.enterRule(localContext, 40, StructuredTextParser.RULE_exprOrArrayInit);
        try {
            this.state = 420;
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
                this.state = 418;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__5:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 419;
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
            this.state = 422;
            this.match(StructuredTextParser.T__5);
            this.state = 423;
            this.expr(0);
            this.state = 428;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 424;
                this.match(StructuredTextParser.T__3);
                this.state = 425;
                this.expr(0);
                }
                }
                this.state = 430;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 431;
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
        this.enterRule(localContext, 44, StructuredTextParser.RULE_type);
        try {
            this.state = 435;
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
                this.state = 433;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 434;
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
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 437;
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
        this.enterRule(localContext, 48, StructuredTextParser.RULE_statementSection);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 442;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 56, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 439;
                    this.statement();
                    }
                    }
                }
                this.state = 444;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 56, this.context);
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
            this.state = 456;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 57, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 445;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 446;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 447;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 448;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 449;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 450;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 451;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 452;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 453;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 454;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 455;
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
        this.enterRule(localContext, 52, StructuredTextParser.RULE_assignment);
        try {
            this.state = 468;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 58, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 458;
                this.assignTarget();
                this.state = 459;
                this.match(StructuredTextParser.T__4);
                this.state = 460;
                this.expr(0);
                this.state = 461;
                this.match(StructuredTextParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 463;
                this.assignTarget();
                this.state = 464;
                this.match(StructuredTextParser.T__1);
                this.state = 465;
                this.expr(0);
                this.state = 466;
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
        this.enterRule(localContext, 54, StructuredTextParser.RULE_assignTarget);
        let _la: number;
        try {
            this.state = 480;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 470;
                this.match(StructuredTextParser.ID);
                this.state = 472;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 6) {
                    {
                    this.state = 471;
                    this.arrayIndex();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 474;
                this.memberQualifier();
                this.state = 475;
                this.match(StructuredTextParser.T__27);
                this.state = 476;
                this.match(StructuredTextParser.ID);
                this.state = 478;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 6) {
                    {
                    this.state = 477;
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
        this.enterRule(localContext, 56, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 482;
            this.match(StructuredTextParser.T__5);
            this.state = 483;
            this.expr(0);
            this.state = 484;
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
        this.enterRule(localContext, 58, StructuredTextParser.RULE_callStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 491;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
            case 1:
                {
                this.state = 486;
                this.match(StructuredTextParser.ID);
                }
                break;
            case 2:
                {
                this.state = 487;
                this.memberQualifier();
                this.state = 488;
                this.match(StructuredTextParser.T__27);
                this.state = 489;
                this.match(StructuredTextParser.ID);
                }
                break;
            }
            this.state = 493;
            this.match(StructuredTextParser.T__28);
            this.state = 495;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29 || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 31) !== 0)) {
                {
                this.state = 494;
                this.argumentList();
                }
            }

            this.state = 497;
            this.match(StructuredTextParser.T__29);
            this.state = 498;
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
        this.enterRule(localContext, 60, StructuredTextParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 500;
            this.argument();
            this.state = 505;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 501;
                this.match(StructuredTextParser.T__3);
                this.state = 502;
                this.argument();
                }
                }
                this.state = 507;
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
        this.enterRule(localContext, 62, StructuredTextParser.RULE_argument);
        let _la: number;
        try {
            this.state = 512;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 65, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 508;
                this.match(StructuredTextParser.ID);
                this.state = 509;
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 31)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 510;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 511;
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
        this.enterRule(localContext, 64, StructuredTextParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 514;
            this.match(StructuredTextParser.IF);
            this.state = 515;
            this.expr(0);
            this.state = 516;
            this.match(StructuredTextParser.THEN);
            this.state = 517;
            this.statementSection();
            this.state = 525;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 68) {
                {
                {
                this.state = 518;
                this.match(StructuredTextParser.ELSIF);
                this.state = 519;
                this.expr(0);
                this.state = 520;
                this.match(StructuredTextParser.THEN);
                this.state = 521;
                this.statementSection();
                }
                }
                this.state = 527;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 530;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 69) {
                {
                this.state = 528;
                this.match(StructuredTextParser.ELSE);
                this.state = 529;
                this.statementSection();
                }
            }

            this.state = 532;
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
        this.enterRule(localContext, 66, StructuredTextParser.RULE_caseStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 534;
            this.match(StructuredTextParser.CASE);
            this.state = 535;
            this.expr(0);
            this.state = 536;
            this.match(StructuredTextParser.OF);
            this.state = 538;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 537;
                this.caseElement();
                }
                }
                this.state = 540;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 23) !== 0));
            this.state = 544;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 69) {
                {
                this.state = 542;
                this.match(StructuredTextParser.ELSE);
                this.state = 543;
                this.statementSection();
                }
            }

            this.state = 546;
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
        this.enterRule(localContext, 68, StructuredTextParser.RULE_caseElement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 548;
            this.caseValue();
            this.state = 553;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 549;
                this.match(StructuredTextParser.T__3);
                this.state = 550;
                this.caseValue();
                }
                }
                this.state = 555;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 556;
            this.match(StructuredTextParser.T__0);
            this.state = 557;
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
        this.enterRule(localContext, 70, StructuredTextParser.RULE_caseValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 559;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 23) !== 0))) {
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
        this.enterRule(localContext, 72, StructuredTextParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 561;
            this.match(StructuredTextParser.WHILE);
            this.state = 562;
            this.expr(0);
            this.state = 563;
            this.match(StructuredTextParser.DO);
            this.state = 564;
            this.statementSection();
            this.state = 565;
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
        this.enterRule(localContext, 74, StructuredTextParser.RULE_repeatStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 567;
            this.match(StructuredTextParser.REPEAT);
            this.state = 568;
            this.statementSection();
            this.state = 569;
            this.match(StructuredTextParser.UNTIL);
            this.state = 570;
            this.expr(0);
            this.state = 571;
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
        this.enterRule(localContext, 76, StructuredTextParser.RULE_forStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 573;
            this.match(StructuredTextParser.FOR);
            this.state = 574;
            this.match(StructuredTextParser.ID);
            this.state = 575;
            this.match(StructuredTextParser.T__4);
            this.state = 576;
            this.expr(0);
            this.state = 577;
            this.match(StructuredTextParser.TO);
            this.state = 578;
            this.expr(0);
            this.state = 581;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 83) {
                {
                this.state = 579;
                this.match(StructuredTextParser.BY);
                this.state = 580;
                this.expr(0);
                }
            }

            this.state = 583;
            this.match(StructuredTextParser.DO);
            this.state = 584;
            this.statementSection();
            this.state = 585;
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
        this.enterRule(localContext, 78, StructuredTextParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 587;
            this.match(StructuredTextParser.RETURN);
            this.state = 588;
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
        this.enterRule(localContext, 80, StructuredTextParser.RULE_exitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 590;
            this.match(StructuredTextParser.EXIT);
            this.state = 591;
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
        this.enterRule(localContext, 82, StructuredTextParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 593;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 594;
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
        this.enterRule(localContext, 84, StructuredTextParser.RULE_memberQualifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 596;
            this.match(StructuredTextParser.ID);
            this.state = 598;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 597;
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
        let _startState = 86;
        this.enterRecursionRule(localContext, 86, StructuredTextParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 634;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 77, this.context) ) {
            case 1:
                {
                this.state = 601;
                this.match(StructuredTextParser.ID);
                this.state = 602;
                this.match(StructuredTextParser.T__28);
                this.state = 604;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 29 || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 31) !== 0)) {
                    {
                    this.state = 603;
                    this.argumentList();
                    }
                }

                this.state = 606;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case 2:
                {
                this.state = 607;
                this.match(StructuredTextParser.ID);
                this.state = 609;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
                case 1:
                    {
                    this.state = 608;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            case 3:
                {
                this.state = 611;
                this.memberQualifier();
                this.state = 612;
                this.match(StructuredTextParser.T__27);
                this.state = 613;
                this.match(StructuredTextParser.ID);
                this.state = 614;
                this.match(StructuredTextParser.T__28);
                this.state = 616;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 29 || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 31) !== 0)) {
                    {
                    this.state = 615;
                    this.argumentList();
                    }
                }

                this.state = 618;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case 4:
                {
                this.state = 620;
                this.memberQualifier();
                this.state = 621;
                this.match(StructuredTextParser.T__27);
                this.state = 622;
                this.match(StructuredTextParser.ID);
                this.state = 624;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context) ) {
                case 1:
                    {
                    this.state = 623;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            case 5:
                {
                this.state = 626;
                this.match(StructuredTextParser.T__28);
                this.state = 627;
                this.expr(0);
                this.state = 628;
                this.match(StructuredTextParser.T__29);
                }
                break;
            case 6:
                {
                this.state = 630;
                this.match(StructuredTextParser.NUMBER);
                }
                break;
            case 7:
                {
                this.state = 631;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case 8:
                {
                this.state = 632;
                this.match(StructuredTextParser.TIME_LITERAL);
                }
                break;
            case 9:
                {
                this.state = 633;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 650;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 79, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 648;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 636;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 637;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 32 || _la === 33 || _la === 116)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 638;
                        this.expr(14);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 639;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 640;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 34 || _la === 35)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 641;
                        this.expr(13);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 642;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 643;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 2 || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 31) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 644;
                        this.expr(12);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 645;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 646;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 647;
                        this.expr(11);
                        }
                        break;
                    }
                    }
                }
                this.state = 652;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 79, this.context);
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
        this.enterRule(localContext, 88, StructuredTextParser.RULE_compilationUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 665;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 4194389) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & 1365) !== 0)) {
                {
                this.state = 663;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context) ) {
                case 1:
                    {
                    this.state = 653;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 654;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 655;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 656;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 657;
                    this.classDecl();
                    }
                    break;
                case 6:
                    {
                    this.state = 658;
                    this.structDecl();
                    }
                    break;
                case 7:
                    {
                    this.state = 659;
                    this.enumDecl();
                    }
                    break;
                case 8:
                    {
                    this.state = 660;
                    this.namespaceDecl();
                    }
                    break;
                case 9:
                    {
                    this.state = 661;
                    this.typeDefDecl();
                    }
                    break;
                case 10:
                    {
                    this.state = 662;
                    this.varGlobalSection();
                    }
                    break;
                }
                }
                this.state = 667;
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
        this.enterRule(localContext, 90, StructuredTextParser.RULE_propertyBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 676;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                {
                this.state = 668;
                this.getter();
                }
                break;
            case 2:
                {
                this.state = 669;
                this.setter();
                }
                break;
            case 3:
                {
                this.state = 670;
                this.getter();
                this.state = 671;
                this.setter();
                }
                break;
            case 4:
                {
                this.state = 673;
                this.setter();
                this.state = 674;
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
        this.enterRule(localContext, 92, StructuredTextParser.RULE_getter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 678;
            this.match(StructuredTextParser.GET);
            this.state = 679;
            this.statementSection();
            this.state = 680;
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
        this.enterRule(localContext, 94, StructuredTextParser.RULE_setter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 682;
            this.match(StructuredTextParser.SET);
            this.state = 683;
            this.statementSection();
            this.state = 684;
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
        this.enterRule(localContext, 96, StructuredTextParser.RULE_attribute);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 686;
            this.match(StructuredTextParser.T__40);
            this.state = 687;
            this.match(StructuredTextParser.ID);
            this.state = 689;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 688;
                this.attributeArgList();
                }
            }

            this.state = 691;
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
        this.enterRule(localContext, 98, StructuredTextParser.RULE_attributeArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 693;
            this.match(StructuredTextParser.T__28);
            this.state = 694;
            this.attributeArg();
            this.state = 699;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 695;
                this.match(StructuredTextParser.T__3);
                this.state = 696;
                this.attributeArg();
                }
                }
                this.state = 701;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 702;
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
        this.enterRule(localContext, 100, StructuredTextParser.RULE_attributeArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 704;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 11) !== 0))) {
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
        this.enterRule(localContext, 102, StructuredTextParser.RULE_accessModifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 706;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 15) !== 0))) {
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
        this.enterRule(localContext, 104, StructuredTextParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 708;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 127) !== 0))) {
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
        this.enterRule(localContext, 106, StructuredTextParser.RULE_enumMemberList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 710;
            this.match(StructuredTextParser.ID);
            this.state = 715;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 711;
                this.match(StructuredTextParser.T__3);
                this.state = 712;
                this.match(StructuredTextParser.ID);
                }
                }
                this.state = 717;
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
        case 43:
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
        4,1,123,719,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,1,0,1,0,1,0,3,0,112,8,0,1,0,3,0,115,8,0,1,0,5,0,118,
        8,0,10,0,12,0,121,9,0,1,0,1,0,1,0,1,1,3,1,127,8,1,1,1,1,1,1,1,1,
        1,1,1,3,1,134,8,1,1,1,3,1,137,8,1,1,1,5,1,140,8,1,10,1,12,1,143,
        9,1,1,1,1,1,1,1,1,2,3,2,149,8,2,1,2,1,2,3,2,153,8,2,1,2,5,2,156,
        8,2,10,2,12,2,159,9,2,1,2,1,2,3,2,163,8,2,1,2,3,2,166,8,2,1,2,5,
        2,169,8,2,10,2,12,2,172,9,2,1,2,1,2,1,2,1,3,3,3,178,8,3,1,3,1,3,
        3,3,182,8,3,1,3,5,3,185,8,3,10,3,12,3,188,9,3,1,3,1,3,1,3,1,3,5,
        3,194,8,3,10,3,12,3,197,9,3,1,3,1,3,1,3,1,4,3,4,203,8,4,1,4,1,4,
        3,4,207,8,4,1,4,5,4,210,8,4,10,4,12,4,213,9,4,1,4,1,4,1,4,3,4,218,
        8,4,1,4,5,4,221,8,4,10,4,12,4,224,9,4,1,4,1,4,1,4,1,5,3,5,230,8,
        5,1,5,1,5,3,5,234,8,5,1,5,5,5,237,8,5,10,5,12,5,240,9,5,1,5,1,5,
        3,5,244,8,5,1,5,5,5,247,8,5,10,5,12,5,250,9,5,1,5,1,5,1,6,3,6,255,
        8,6,1,6,1,6,3,6,259,8,6,1,6,5,6,262,8,6,10,6,12,6,265,9,6,1,6,1,
        6,3,6,269,8,6,1,6,3,6,272,8,6,1,6,5,6,275,8,6,10,6,12,6,278,9,6,
        1,6,1,6,1,7,3,7,283,8,7,1,7,1,7,1,7,5,7,288,8,7,10,7,12,7,291,9,
        7,1,7,1,7,1,8,3,8,296,8,8,1,8,1,8,1,8,1,8,1,8,1,9,3,9,304,8,9,1,
        9,1,9,1,9,5,9,309,8,9,10,9,12,9,312,9,9,1,9,1,9,1,10,3,10,317,8,
        10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,3,11,326,8,11,1,11,1,11,5,
        11,330,8,11,10,11,12,11,333,9,11,1,11,4,11,336,8,11,11,11,12,11,
        337,1,11,1,11,1,12,1,12,1,12,1,12,5,12,346,8,12,10,12,12,12,349,
        9,12,1,13,1,13,1,13,1,14,1,14,1,14,3,14,357,8,14,1,15,1,15,1,15,
        1,15,1,15,1,15,1,15,3,15,366,8,15,1,16,1,16,5,16,370,8,16,10,16,
        12,16,373,9,16,1,16,4,16,376,8,16,11,16,12,16,377,1,16,1,16,1,17,
        1,17,1,18,3,18,385,8,18,1,18,3,18,388,8,18,1,18,5,18,391,8,18,10,
        18,12,18,394,9,18,1,18,1,18,1,18,3,18,399,8,18,1,18,3,18,402,8,18,
        1,18,1,18,1,18,3,18,407,8,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,1,19,1,20,1,20,3,20,421,8,20,1,21,1,21,1,21,1,21,5,21,
        427,8,21,10,21,12,21,430,9,21,1,21,1,21,1,22,1,22,3,22,436,8,22,
        1,23,1,23,1,24,5,24,441,8,24,10,24,12,24,444,9,24,1,25,1,25,1,25,
        1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,457,8,25,1,26,1,26,
        1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,469,8,26,1,27,1,27,
        3,27,473,8,27,1,27,1,27,1,27,1,27,3,27,479,8,27,3,27,481,8,27,1,
        28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,3,29,492,8,29,1,29,1,
        29,3,29,496,8,29,1,29,1,29,1,29,1,30,1,30,1,30,5,30,504,8,30,10,
        30,12,30,507,9,30,1,31,1,31,1,31,1,31,3,31,513,8,31,1,32,1,32,1,
        32,1,32,1,32,1,32,1,32,1,32,1,32,5,32,524,8,32,10,32,12,32,527,9,
        32,1,32,1,32,3,32,531,8,32,1,32,1,32,1,33,1,33,1,33,1,33,4,33,539,
        8,33,11,33,12,33,540,1,33,1,33,3,33,545,8,33,1,33,1,33,1,34,1,34,
        1,34,5,34,552,8,34,10,34,12,34,555,9,34,1,34,1,34,1,34,1,35,1,35,
        1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,38,3,38,582,8,38,1,38,1,38,1,38,
        1,38,1,39,1,39,1,39,1,40,1,40,1,40,1,41,1,41,1,41,1,42,1,42,3,42,
        599,8,42,1,43,1,43,1,43,1,43,3,43,605,8,43,1,43,1,43,1,43,3,43,610,
        8,43,1,43,1,43,1,43,1,43,1,43,3,43,617,8,43,1,43,1,43,1,43,1,43,
        1,43,1,43,3,43,625,8,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,
        3,43,635,8,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,
        1,43,1,43,5,43,649,8,43,10,43,12,43,652,9,43,1,44,1,44,1,44,1,44,
        1,44,1,44,1,44,1,44,1,44,1,44,5,44,664,8,44,10,44,12,44,667,9,44,
        1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,677,8,45,1,46,1,46,
        1,46,1,46,1,47,1,47,1,47,1,47,1,48,1,48,1,48,3,48,690,8,48,1,48,
        1,48,1,49,1,49,1,49,1,49,5,49,698,8,49,10,49,12,49,701,9,49,1,49,
        1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,53,1,53,1,53,5,53,714,8,53,
        10,53,12,53,717,9,53,1,53,0,1,86,54,0,2,4,6,8,10,12,14,16,18,20,
        22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
        66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,
        0,11,2,0,57,62,64,64,1,0,9,27,2,0,5,5,31,31,2,0,117,119,121,121,
        2,0,32,33,116,116,1,0,34,35,2,0,2,2,36,40,1,0,88,90,2,0,118,119,
        121,121,1,0,111,114,1,0,104,110,784,0,108,1,0,0,0,2,126,1,0,0,0,
        4,148,1,0,0,0,6,177,1,0,0,0,8,202,1,0,0,0,10,229,1,0,0,0,12,254,
        1,0,0,0,14,282,1,0,0,0,16,295,1,0,0,0,18,303,1,0,0,0,20,316,1,0,
        0,0,22,325,1,0,0,0,24,341,1,0,0,0,26,350,1,0,0,0,28,356,1,0,0,0,
        30,365,1,0,0,0,32,367,1,0,0,0,34,381,1,0,0,0,36,384,1,0,0,0,38,410,
        1,0,0,0,40,420,1,0,0,0,42,422,1,0,0,0,44,435,1,0,0,0,46,437,1,0,
        0,0,48,442,1,0,0,0,50,456,1,0,0,0,52,468,1,0,0,0,54,480,1,0,0,0,
        56,482,1,0,0,0,58,491,1,0,0,0,60,500,1,0,0,0,62,512,1,0,0,0,64,514,
        1,0,0,0,66,534,1,0,0,0,68,548,1,0,0,0,70,559,1,0,0,0,72,561,1,0,
        0,0,74,567,1,0,0,0,76,573,1,0,0,0,78,587,1,0,0,0,80,590,1,0,0,0,
        82,593,1,0,0,0,84,596,1,0,0,0,86,634,1,0,0,0,88,665,1,0,0,0,90,676,
        1,0,0,0,92,678,1,0,0,0,94,682,1,0,0,0,96,686,1,0,0,0,98,693,1,0,
        0,0,100,704,1,0,0,0,102,706,1,0,0,0,104,708,1,0,0,0,106,710,1,0,
        0,0,108,109,5,43,0,0,109,111,5,118,0,0,110,112,3,24,12,0,111,110,
        1,0,0,0,111,112,1,0,0,0,112,114,1,0,0,0,113,115,3,26,13,0,114,113,
        1,0,0,0,114,115,1,0,0,0,115,119,1,0,0,0,116,118,3,32,16,0,117,116,
        1,0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,122,
        1,0,0,0,121,119,1,0,0,0,122,123,3,48,24,0,123,124,5,44,0,0,124,1,
        1,0,0,0,125,127,3,96,48,0,126,125,1,0,0,0,126,127,1,0,0,0,127,128,
        1,0,0,0,128,129,5,47,0,0,129,130,5,118,0,0,130,131,5,1,0,0,131,133,
        3,44,22,0,132,134,3,24,12,0,133,132,1,0,0,0,133,134,1,0,0,0,134,
        136,1,0,0,0,135,137,3,26,13,0,136,135,1,0,0,0,136,137,1,0,0,0,137,
        141,1,0,0,0,138,140,3,32,16,0,139,138,1,0,0,0,140,143,1,0,0,0,141,
        139,1,0,0,0,141,142,1,0,0,0,142,144,1,0,0,0,143,141,1,0,0,0,144,
        145,3,48,24,0,145,146,5,48,0,0,146,3,1,0,0,0,147,149,3,96,48,0,148,
        147,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,0,150,152,5,45,0,0,151,
        153,3,102,51,0,152,151,1,0,0,0,152,153,1,0,0,0,153,157,1,0,0,0,154,
        156,3,104,52,0,155,154,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,
        158,1,0,0,0,158,160,1,0,0,0,159,157,1,0,0,0,160,162,5,118,0,0,161,
        163,3,24,12,0,162,161,1,0,0,0,162,163,1,0,0,0,163,165,1,0,0,0,164,
        166,3,26,13,0,165,164,1,0,0,0,165,166,1,0,0,0,166,170,1,0,0,0,167,
        169,3,28,14,0,168,167,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,
        171,1,0,0,0,171,173,1,0,0,0,172,170,1,0,0,0,173,174,3,48,24,0,174,
        175,5,46,0,0,175,5,1,0,0,0,176,178,3,96,48,0,177,176,1,0,0,0,177,
        178,1,0,0,0,178,179,1,0,0,0,179,181,5,49,0,0,180,182,3,102,51,0,
        181,180,1,0,0,0,181,182,1,0,0,0,182,186,1,0,0,0,183,185,3,104,52,
        0,184,183,1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,
        0,187,189,1,0,0,0,188,186,1,0,0,0,189,190,5,118,0,0,190,191,5,1,
        0,0,191,195,3,44,22,0,192,194,3,32,16,0,193,192,1,0,0,0,194,197,
        1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,198,1,0,0,0,197,195,
        1,0,0,0,198,199,3,90,45,0,199,200,5,50,0,0,200,7,1,0,0,0,201,203,
        3,96,48,0,202,201,1,0,0,0,202,203,1,0,0,0,203,204,1,0,0,0,204,206,
        5,91,0,0,205,207,3,102,51,0,206,205,1,0,0,0,206,207,1,0,0,0,207,
        211,1,0,0,0,208,210,3,104,52,0,209,208,1,0,0,0,210,213,1,0,0,0,211,
        209,1,0,0,0,211,212,1,0,0,0,212,214,1,0,0,0,213,211,1,0,0,0,214,
        217,5,118,0,0,215,216,5,1,0,0,216,218,3,44,22,0,217,215,1,0,0,0,
        217,218,1,0,0,0,218,222,1,0,0,0,219,221,3,32,16,0,220,219,1,0,0,
        0,221,224,1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,225,1,0,0,
        0,224,222,1,0,0,0,225,226,3,48,24,0,226,227,5,92,0,0,227,9,1,0,0,
        0,228,230,3,96,48,0,229,228,1,0,0,0,229,230,1,0,0,0,230,231,1,0,
        0,0,231,233,5,93,0,0,232,234,3,102,51,0,233,232,1,0,0,0,233,234,
        1,0,0,0,234,238,1,0,0,0,235,237,3,104,52,0,236,235,1,0,0,0,237,240,
        1,0,0,0,238,236,1,0,0,0,238,239,1,0,0,0,239,241,1,0,0,0,240,238,
        1,0,0,0,241,243,5,118,0,0,242,244,3,26,13,0,243,242,1,0,0,0,243,
        244,1,0,0,0,244,248,1,0,0,0,245,247,3,28,14,0,246,245,1,0,0,0,247,
        250,1,0,0,0,248,246,1,0,0,0,248,249,1,0,0,0,249,251,1,0,0,0,250,
        248,1,0,0,0,251,252,5,94,0,0,252,11,1,0,0,0,253,255,3,96,48,0,254,
        253,1,0,0,0,254,255,1,0,0,0,255,256,1,0,0,0,256,258,5,95,0,0,257,
        259,3,102,51,0,258,257,1,0,0,0,258,259,1,0,0,0,259,263,1,0,0,0,260,
        262,3,104,52,0,261,260,1,0,0,0,262,265,1,0,0,0,263,261,1,0,0,0,263,
        264,1,0,0,0,264,266,1,0,0,0,265,263,1,0,0,0,266,268,5,118,0,0,267,
        269,3,26,13,0,268,267,1,0,0,0,268,269,1,0,0,0,269,271,1,0,0,0,270,
        272,3,24,12,0,271,270,1,0,0,0,271,272,1,0,0,0,272,276,1,0,0,0,273,
        275,3,28,14,0,274,273,1,0,0,0,275,278,1,0,0,0,276,274,1,0,0,0,276,
        277,1,0,0,0,277,279,1,0,0,0,278,276,1,0,0,0,279,280,5,96,0,0,280,
        13,1,0,0,0,281,283,3,96,48,0,282,281,1,0,0,0,282,283,1,0,0,0,283,
        284,1,0,0,0,284,285,5,97,0,0,285,289,5,118,0,0,286,288,3,32,16,0,
        287,286,1,0,0,0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,
        290,292,1,0,0,0,291,289,1,0,0,0,292,293,5,98,0,0,293,15,1,0,0,0,
        294,296,3,96,48,0,295,294,1,0,0,0,295,296,1,0,0,0,296,297,1,0,0,
        0,297,298,5,99,0,0,298,299,5,118,0,0,299,300,3,106,53,0,300,301,
        5,100,0,0,301,17,1,0,0,0,302,304,3,96,48,0,303,302,1,0,0,0,303,304,
        1,0,0,0,304,305,1,0,0,0,305,306,5,101,0,0,306,310,5,118,0,0,307,
        309,3,30,15,0,308,307,1,0,0,0,309,312,1,0,0,0,310,308,1,0,0,0,310,
        311,1,0,0,0,311,313,1,0,0,0,312,310,1,0,0,0,313,314,5,102,0,0,314,
        19,1,0,0,0,315,317,3,96,48,0,316,315,1,0,0,0,316,317,1,0,0,0,317,
        318,1,0,0,0,318,319,5,103,0,0,319,320,5,118,0,0,320,321,5,2,0,0,
        321,322,3,44,22,0,322,323,5,3,0,0,323,21,1,0,0,0,324,326,3,96,48,
        0,325,324,1,0,0,0,325,326,1,0,0,0,326,327,1,0,0,0,327,331,5,63,0,
        0,328,330,3,104,52,0,329,328,1,0,0,0,330,333,1,0,0,0,331,329,1,0,
        0,0,331,332,1,0,0,0,332,335,1,0,0,0,333,331,1,0,0,0,334,336,3,36,
        18,0,335,334,1,0,0,0,336,337,1,0,0,0,337,335,1,0,0,0,337,338,1,0,
        0,0,338,339,1,0,0,0,339,340,5,65,0,0,340,23,1,0,0,0,341,342,5,51,
        0,0,342,347,5,118,0,0,343,344,5,4,0,0,344,346,5,118,0,0,345,343,
        1,0,0,0,346,349,1,0,0,0,347,345,1,0,0,0,347,348,1,0,0,0,348,25,1,
        0,0,0,349,347,1,0,0,0,350,351,5,52,0,0,351,352,5,118,0,0,352,27,
        1,0,0,0,353,357,3,8,4,0,354,357,3,6,3,0,355,357,3,32,16,0,356,353,
        1,0,0,0,356,354,1,0,0,0,356,355,1,0,0,0,357,29,1,0,0,0,358,366,3,
        0,0,0,359,366,3,4,2,0,360,366,3,2,1,0,361,366,3,12,6,0,362,366,3,
        14,7,0,363,366,3,16,8,0,364,366,3,10,5,0,365,358,1,0,0,0,365,359,
        1,0,0,0,365,360,1,0,0,0,365,361,1,0,0,0,365,362,1,0,0,0,365,363,
        1,0,0,0,365,364,1,0,0,0,366,31,1,0,0,0,367,371,3,34,17,0,368,370,
        3,104,52,0,369,368,1,0,0,0,370,373,1,0,0,0,371,369,1,0,0,0,371,372,
        1,0,0,0,372,375,1,0,0,0,373,371,1,0,0,0,374,376,3,36,18,0,375,374,
        1,0,0,0,376,377,1,0,0,0,377,375,1,0,0,0,377,378,1,0,0,0,378,379,
        1,0,0,0,379,380,5,65,0,0,380,33,1,0,0,0,381,382,7,0,0,0,382,35,1,
        0,0,0,383,385,3,96,48,0,384,383,1,0,0,0,384,385,1,0,0,0,385,387,
        1,0,0,0,386,388,3,102,51,0,387,386,1,0,0,0,387,388,1,0,0,0,388,392,
        1,0,0,0,389,391,3,104,52,0,390,389,1,0,0,0,391,394,1,0,0,0,392,390,
        1,0,0,0,392,393,1,0,0,0,393,395,1,0,0,0,394,392,1,0,0,0,395,396,
        5,118,0,0,396,398,5,1,0,0,397,399,5,115,0,0,398,397,1,0,0,0,398,
        399,1,0,0,0,399,401,1,0,0,0,400,402,3,38,19,0,401,400,1,0,0,0,401,
        402,1,0,0,0,402,403,1,0,0,0,403,406,3,44,22,0,404,405,5,5,0,0,405,
        407,3,40,20,0,406,404,1,0,0,0,406,407,1,0,0,0,407,408,1,0,0,0,408,
        409,5,3,0,0,409,37,1,0,0,0,410,411,5,72,0,0,411,412,5,6,0,0,412,
        413,5,119,0,0,413,414,5,7,0,0,414,415,5,119,0,0,415,416,5,8,0,0,
        416,417,5,73,0,0,417,39,1,0,0,0,418,421,3,86,43,0,419,421,3,42,21,
        0,420,418,1,0,0,0,420,419,1,0,0,0,421,41,1,0,0,0,422,423,5,6,0,0,
        423,428,3,86,43,0,424,425,5,4,0,0,425,427,3,86,43,0,426,424,1,0,
        0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,429,1,0,0,0,429,431,1,0,
        0,0,430,428,1,0,0,0,431,432,5,8,0,0,432,43,1,0,0,0,433,436,3,46,
        23,0,434,436,5,118,0,0,435,433,1,0,0,0,435,434,1,0,0,0,436,45,1,
        0,0,0,437,438,7,1,0,0,438,47,1,0,0,0,439,441,3,50,25,0,440,439,1,
        0,0,0,441,444,1,0,0,0,442,440,1,0,0,0,442,443,1,0,0,0,443,49,1,0,
        0,0,444,442,1,0,0,0,445,457,3,52,26,0,446,457,3,64,32,0,447,457,
        3,66,33,0,448,457,3,72,36,0,449,457,3,74,37,0,450,457,3,76,38,0,
        451,457,3,58,29,0,452,457,3,78,39,0,453,457,3,80,40,0,454,457,3,
        82,41,0,455,457,5,3,0,0,456,445,1,0,0,0,456,446,1,0,0,0,456,447,
        1,0,0,0,456,448,1,0,0,0,456,449,1,0,0,0,456,450,1,0,0,0,456,451,
        1,0,0,0,456,452,1,0,0,0,456,453,1,0,0,0,456,454,1,0,0,0,456,455,
        1,0,0,0,457,51,1,0,0,0,458,459,3,54,27,0,459,460,5,5,0,0,460,461,
        3,86,43,0,461,462,5,3,0,0,462,469,1,0,0,0,463,464,3,54,27,0,464,
        465,5,2,0,0,465,466,3,86,43,0,466,467,5,3,0,0,467,469,1,0,0,0,468,
        458,1,0,0,0,468,463,1,0,0,0,469,53,1,0,0,0,470,472,5,118,0,0,471,
        473,3,56,28,0,472,471,1,0,0,0,472,473,1,0,0,0,473,481,1,0,0,0,474,
        475,3,84,42,0,475,476,5,28,0,0,476,478,5,118,0,0,477,479,3,56,28,
        0,478,477,1,0,0,0,478,479,1,0,0,0,479,481,1,0,0,0,480,470,1,0,0,
        0,480,474,1,0,0,0,481,55,1,0,0,0,482,483,5,6,0,0,483,484,3,86,43,
        0,484,485,5,8,0,0,485,57,1,0,0,0,486,492,5,118,0,0,487,488,3,84,
        42,0,488,489,5,28,0,0,489,490,5,118,0,0,490,492,1,0,0,0,491,486,
        1,0,0,0,491,487,1,0,0,0,492,493,1,0,0,0,493,495,5,29,0,0,494,496,
        3,60,30,0,495,494,1,0,0,0,495,496,1,0,0,0,496,497,1,0,0,0,497,498,
        5,30,0,0,498,499,5,3,0,0,499,59,1,0,0,0,500,505,3,62,31,0,501,502,
        5,4,0,0,502,504,3,62,31,0,503,501,1,0,0,0,504,507,1,0,0,0,505,503,
        1,0,0,0,505,506,1,0,0,0,506,61,1,0,0,0,507,505,1,0,0,0,508,509,5,
        118,0,0,509,510,7,2,0,0,510,513,3,86,43,0,511,513,3,86,43,0,512,
        508,1,0,0,0,512,511,1,0,0,0,513,63,1,0,0,0,514,515,5,66,0,0,515,
        516,3,86,43,0,516,517,5,67,0,0,517,525,3,48,24,0,518,519,5,68,0,
        0,519,520,3,86,43,0,520,521,5,67,0,0,521,522,3,48,24,0,522,524,1,
        0,0,0,523,518,1,0,0,0,524,527,1,0,0,0,525,523,1,0,0,0,525,526,1,
        0,0,0,526,530,1,0,0,0,527,525,1,0,0,0,528,529,5,69,0,0,529,531,3,
        48,24,0,530,528,1,0,0,0,530,531,1,0,0,0,531,532,1,0,0,0,532,533,
        5,70,0,0,533,65,1,0,0,0,534,535,5,71,0,0,535,536,3,86,43,0,536,538,
        5,73,0,0,537,539,3,68,34,0,538,537,1,0,0,0,539,540,1,0,0,0,540,538,
        1,0,0,0,540,541,1,0,0,0,541,544,1,0,0,0,542,543,5,69,0,0,543,545,
        3,48,24,0,544,542,1,0,0,0,544,545,1,0,0,0,545,546,1,0,0,0,546,547,
        5,74,0,0,547,67,1,0,0,0,548,553,3,70,35,0,549,550,5,4,0,0,550,552,
        3,70,35,0,551,549,1,0,0,0,552,555,1,0,0,0,553,551,1,0,0,0,553,554,
        1,0,0,0,554,556,1,0,0,0,555,553,1,0,0,0,556,557,5,1,0,0,557,558,
        3,48,24,0,558,69,1,0,0,0,559,560,7,3,0,0,560,71,1,0,0,0,561,562,
        5,75,0,0,562,563,3,86,43,0,563,564,5,76,0,0,564,565,3,48,24,0,565,
        566,5,77,0,0,566,73,1,0,0,0,567,568,5,78,0,0,568,569,3,48,24,0,569,
        570,5,79,0,0,570,571,3,86,43,0,571,572,5,80,0,0,572,75,1,0,0,0,573,
        574,5,81,0,0,574,575,5,118,0,0,575,576,5,5,0,0,576,577,3,86,43,0,
        577,578,5,82,0,0,578,581,3,86,43,0,579,580,5,83,0,0,580,582,3,86,
        43,0,581,579,1,0,0,0,581,582,1,0,0,0,582,583,1,0,0,0,583,584,5,76,
        0,0,584,585,3,48,24,0,585,586,5,84,0,0,586,77,1,0,0,0,587,588,5,
        85,0,0,588,589,5,3,0,0,589,79,1,0,0,0,590,591,5,86,0,0,591,592,5,
        3,0,0,592,81,1,0,0,0,593,594,5,87,0,0,594,595,5,3,0,0,595,83,1,0,
        0,0,596,598,5,118,0,0,597,599,3,56,28,0,598,597,1,0,0,0,598,599,
        1,0,0,0,599,85,1,0,0,0,600,601,6,43,-1,0,601,602,5,118,0,0,602,604,
        5,29,0,0,603,605,3,60,30,0,604,603,1,0,0,0,604,605,1,0,0,0,605,606,
        1,0,0,0,606,635,5,30,0,0,607,609,5,118,0,0,608,610,3,56,28,0,609,
        608,1,0,0,0,609,610,1,0,0,0,610,635,1,0,0,0,611,612,3,84,42,0,612,
        613,5,28,0,0,613,614,5,118,0,0,614,616,5,29,0,0,615,617,3,60,30,
        0,616,615,1,0,0,0,616,617,1,0,0,0,617,618,1,0,0,0,618,619,5,30,0,
        0,619,635,1,0,0,0,620,621,3,84,42,0,621,622,5,28,0,0,622,624,5,118,
        0,0,623,625,3,56,28,0,624,623,1,0,0,0,624,625,1,0,0,0,625,635,1,
        0,0,0,626,627,5,29,0,0,627,628,3,86,43,0,628,629,5,30,0,0,629,635,
        1,0,0,0,630,635,5,119,0,0,631,635,5,117,0,0,632,635,5,120,0,0,633,
        635,5,121,0,0,634,600,1,0,0,0,634,607,1,0,0,0,634,611,1,0,0,0,634,
        620,1,0,0,0,634,626,1,0,0,0,634,630,1,0,0,0,634,631,1,0,0,0,634,
        632,1,0,0,0,634,633,1,0,0,0,635,650,1,0,0,0,636,637,10,13,0,0,637,
        638,7,4,0,0,638,649,3,86,43,14,639,640,10,12,0,0,640,641,7,5,0,0,
        641,649,3,86,43,13,642,643,10,11,0,0,643,644,7,6,0,0,644,649,3,86,
        43,12,645,646,10,10,0,0,646,647,7,7,0,0,647,649,3,86,43,11,648,636,
        1,0,0,0,648,639,1,0,0,0,648,642,1,0,0,0,648,645,1,0,0,0,649,652,
        1,0,0,0,650,648,1,0,0,0,650,651,1,0,0,0,651,87,1,0,0,0,652,650,1,
        0,0,0,653,664,3,0,0,0,654,664,3,4,2,0,655,664,3,2,1,0,656,664,3,
        10,5,0,657,664,3,12,6,0,658,664,3,14,7,0,659,664,3,16,8,0,660,664,
        3,18,9,0,661,664,3,20,10,0,662,664,3,22,11,0,663,653,1,0,0,0,663,
        654,1,0,0,0,663,655,1,0,0,0,663,656,1,0,0,0,663,657,1,0,0,0,663,
        658,1,0,0,0,663,659,1,0,0,0,663,660,1,0,0,0,663,661,1,0,0,0,663,
        662,1,0,0,0,664,667,1,0,0,0,665,663,1,0,0,0,665,666,1,0,0,0,666,
        89,1,0,0,0,667,665,1,0,0,0,668,677,3,92,46,0,669,677,3,94,47,0,670,
        671,3,92,46,0,671,672,3,94,47,0,672,677,1,0,0,0,673,674,3,94,47,
        0,674,675,3,92,46,0,675,677,1,0,0,0,676,668,1,0,0,0,676,669,1,0,
        0,0,676,670,1,0,0,0,676,673,1,0,0,0,677,91,1,0,0,0,678,679,5,53,
        0,0,679,680,3,48,24,0,680,681,5,54,0,0,681,93,1,0,0,0,682,683,5,
        55,0,0,683,684,3,48,24,0,684,685,5,56,0,0,685,95,1,0,0,0,686,687,
        5,41,0,0,687,689,5,118,0,0,688,690,3,98,49,0,689,688,1,0,0,0,689,
        690,1,0,0,0,690,691,1,0,0,0,691,692,5,42,0,0,692,97,1,0,0,0,693,
        694,5,29,0,0,694,699,3,100,50,0,695,696,5,4,0,0,696,698,3,100,50,
        0,697,695,1,0,0,0,698,701,1,0,0,0,699,697,1,0,0,0,699,700,1,0,0,
        0,700,702,1,0,0,0,701,699,1,0,0,0,702,703,5,30,0,0,703,99,1,0,0,
        0,704,705,7,8,0,0,705,101,1,0,0,0,706,707,7,9,0,0,707,103,1,0,0,
        0,708,709,7,10,0,0,709,105,1,0,0,0,710,715,5,118,0,0,711,712,5,4,
        0,0,712,714,5,118,0,0,713,711,1,0,0,0,714,717,1,0,0,0,715,713,1,
        0,0,0,715,716,1,0,0,0,716,107,1,0,0,0,717,715,1,0,0,0,86,111,114,
        119,126,133,136,141,148,152,157,162,165,170,177,181,186,195,202,
        206,211,217,222,229,233,238,243,248,254,258,263,268,271,276,282,
        289,295,303,310,316,325,331,337,347,356,365,371,377,384,387,392,
        398,401,406,420,428,435,442,456,468,472,478,480,491,495,505,512,
        525,530,540,544,553,581,598,604,609,616,624,634,648,650,663,665,
        676,689,699,715
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


export class ClassDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CLASS(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.CLASS, 0)!;
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public END_CLASS(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_CLASS, 0)!;
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
        return StructuredTextParser.RULE_classDecl;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitClassDecl) {
            return visitor.visitClassDecl(this);
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
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
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
    public classDecl(): ClassDeclContext | null {
        return this.getRuleContext(0, ClassDeclContext);
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
    public classDecl(): ClassDeclContext[];
    public classDecl(i: number): ClassDeclContext | null;
    public classDecl(i?: number): ClassDeclContext[] | ClassDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassDeclContext);
        }

        return this.getRuleContext(i, ClassDeclContext);
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
    public SEALED(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.SEALED, 0);
    }
    public OVERRIDE(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.OVERRIDE, 0);
    }
    public STATIC(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.STATIC, 0);
    }
    public CONSTANT(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.CONSTANT, 0);
    }
    public READONLY(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.READONLY, 0);
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
