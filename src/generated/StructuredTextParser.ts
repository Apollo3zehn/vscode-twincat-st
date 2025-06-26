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
    public static readonly PROGRAM = 42;
    public static readonly END_PROGRAM = 43;
    public static readonly FUNCTION_BLOCK = 44;
    public static readonly END_FUNCTION_BLOCK = 45;
    public static readonly FUNCTION = 46;
    public static readonly END_FUNCTION = 47;
    public static readonly PROPERTY = 48;
    public static readonly END_PROPERTY = 49;
    public static readonly IMPLEMENTS = 50;
    public static readonly EXTENDS = 51;
    public static readonly GET = 52;
    public static readonly END_GET = 53;
    public static readonly SET = 54;
    public static readonly END_SET = 55;
    public static readonly VAR = 56;
    public static readonly VAR_INPUT = 57;
    public static readonly VAR_OUTPUT = 58;
    public static readonly VAR_IN_OUT = 59;
    public static readonly VAR_TEMP = 60;
    public static readonly VAR_EXTERNAL = 61;
    public static readonly VAR_GLOBAL = 62;
    public static readonly VAR_INST = 63;
    public static readonly END_VAR = 64;
    public static readonly IF = 65;
    public static readonly THEN = 66;
    public static readonly ELSIF = 67;
    public static readonly ELSE = 68;
    public static readonly END_IF = 69;
    public static readonly CASE = 70;
    public static readonly ARRAY = 71;
    public static readonly OF = 72;
    public static readonly END_CASE = 73;
    public static readonly WHILE = 74;
    public static readonly DO = 75;
    public static readonly END_WHILE = 76;
    public static readonly REPEAT = 77;
    public static readonly UNTIL = 78;
    public static readonly END_REPEAT = 79;
    public static readonly FOR = 80;
    public static readonly TO = 81;
    public static readonly BY = 82;
    public static readonly END_FOR = 83;
    public static readonly RETURN = 84;
    public static readonly EXIT = 85;
    public static readonly CONTINUE = 86;
    public static readonly AND = 87;
    public static readonly OR = 88;
    public static readonly XOR = 89;
    public static readonly METHOD = 90;
    public static readonly END_METHOD = 91;
    public static readonly INTERFACE = 92;
    public static readonly END_INTERFACE = 93;
    public static readonly CLASS = 94;
    public static readonly END_CLASS = 95;
    public static readonly STRUCT = 96;
    public static readonly END_STRUCT = 97;
    public static readonly ENUM = 98;
    public static readonly END_ENUM = 99;
    public static readonly NAMESPACE = 100;
    public static readonly END_NAMESPACE = 101;
    public static readonly TYPEDEF = 102;
    public static readonly ABSTRACT = 103;
    public static readonly FINAL = 104;
    public static readonly SEALED = 105;
    public static readonly OVERRIDE = 106;
    public static readonly STATIC = 107;
    public static readonly CONSTANT = 108;
    public static readonly READONLY = 109;
    public static readonly PUBLIC = 110;
    public static readonly PRIVATE = 111;
    public static readonly PROTECTED = 112;
    public static readonly INTERNAL = 113;
    public static readonly REFERENCE_TO = 114;
    public static readonly MOD = 115;
    public static readonly BOOL = 116;
    public static readonly ID = 117;
    public static readonly NUMBER = 118;
    public static readonly STRING_LITERAL = 119;
    public static readonly WS = 120;
    public static readonly COMMENT = 121;
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
        null, "':'", "'='", "';'", "','", "':='", "'['", "'..'", "']'", 
        "'INT'", "'REAL'", "'BOOL'", "'STRING'", "'DINT'", "'BYTE'", "'WORD'", 
        "'DWORD'", "'SINT'", "'USINT'", "'UINT'", "'UDINT'", "'LINT'", "'ULINT'", 
        "'LREAL'", "'TIME'", "'DATE'", "'TIME_OF_DAY'", "'DATE_AND_TIME'", 
        "'('", "')'", "'=>'", "'*'", "'/'", "'+'", "'-'", "'<'", "'>'", 
        "'<='", "'>='", "'<>'", "'{'", "'}'", "'PROGRAM'", "'END_PROGRAM'", 
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
        null, null, null, null, null, null, null, null, null, "PROGRAM", 
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
        "STRING_LITERAL", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "function", "functionBlock", "property", "method", "interface", 
        "classDecl", "structDecl", "enumDecl", "namespaceDecl", "typeDefDecl", 
        "varGlobalSection", "implementsClause", "extendsClause", "member", 
        "namespaceMember", "varDeclSection", "varSectionType", "varDecl", 
        "arraySpec", "exprOrArrayInit", "arrayInit", "type", "builtinType", 
        "statementSection", "statement", "assignment", "arrayIndex", "callStatement", 
        "argumentList", "argument", "ifStatement", "caseStatement", "caseElement", 
        "caseValue", "whileStatement", "repeatStatement", "forStatement", 
        "returnStatement", "exitStatement", "continueStatement", "expr", 
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
            this.state = 104;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 105;
            this.match(StructuredTextParser.ID);
            this.state = 107;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 106;
                this.implementsClause();
                }
            }

            this.state = 110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 109;
                this.extendsClause();
                }
            }

            this.state = 115;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 191) !== 0)) {
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
            if (_la === 40) {
                {
                this.state = 121;
                this.attribute();
                }
            }

            this.state = 124;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 125;
            this.match(StructuredTextParser.ID);
            this.state = 126;
            this.match(StructuredTextParser.T__0);
            this.state = 127;
            this.type_();
            this.state = 129;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 128;
                this.implementsClause();
                }
            }

            this.state = 132;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 131;
                this.extendsClause();
                }
            }

            this.state = 137;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 191) !== 0)) {
                {
                {
                this.state = 134;
                this.varDeclSection();
                }
                }
                this.state = 139;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 140;
            this.statementSection();
            this.state = 141;
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
            this.state = 144;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 143;
                this.attribute();
                }
            }

            this.state = 146;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 148;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 15) !== 0)) {
                {
                this.state = 147;
                this.accessModifier();
                }
            }

            this.state = 153;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 127) !== 0)) {
                {
                {
                this.state = 150;
                this.modifier();
                }
                }
                this.state = 155;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 156;
            this.match(StructuredTextParser.ID);
            this.state = 158;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 157;
                this.implementsClause();
                }
            }

            this.state = 161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 160;
                this.extendsClause();
                }
            }

            this.state = 166;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 12517633) !== 0) || _la === 90) {
                {
                {
                this.state = 163;
                this.member();
                }
                }
                this.state = 168;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 169;
            this.statementSection();
            this.state = 170;
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
            this.state = 173;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 172;
                this.attribute();
                }
            }

            this.state = 175;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 177;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 15) !== 0)) {
                {
                this.state = 176;
                this.accessModifier();
                }
            }

            this.state = 182;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 127) !== 0)) {
                {
                {
                this.state = 179;
                this.modifier();
                }
                }
                this.state = 184;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 185;
            this.match(StructuredTextParser.ID);
            this.state = 186;
            this.match(StructuredTextParser.T__0);
            this.state = 187;
            this.type_();
            this.state = 191;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 191) !== 0)) {
                {
                {
                this.state = 188;
                this.varDeclSection();
                }
                }
                this.state = 193;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 194;
            this.propertyBody();
            this.state = 195;
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
            this.state = 198;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 197;
                this.attribute();
                }
            }

            this.state = 200;
            this.match(StructuredTextParser.METHOD);
            this.state = 202;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 15) !== 0)) {
                {
                this.state = 201;
                this.accessModifier();
                }
            }

            this.state = 207;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 127) !== 0)) {
                {
                {
                this.state = 204;
                this.modifier();
                }
                }
                this.state = 209;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 210;
            this.match(StructuredTextParser.ID);
            this.state = 213;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 211;
                this.match(StructuredTextParser.T__0);
                this.state = 212;
                this.type_();
                }
            }

            this.state = 218;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 191) !== 0)) {
                {
                {
                this.state = 215;
                this.varDeclSection();
                }
                }
                this.state = 220;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 221;
            this.statementSection();
            this.state = 222;
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
            this.state = 225;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 224;
                this.attribute();
                }
            }

            this.state = 227;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 229;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 15) !== 0)) {
                {
                this.state = 228;
                this.accessModifier();
                }
            }

            this.state = 234;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 127) !== 0)) {
                {
                {
                this.state = 231;
                this.modifier();
                }
                }
                this.state = 236;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 237;
            this.match(StructuredTextParser.ID);
            this.state = 239;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 238;
                this.extendsClause();
                }
            }

            this.state = 244;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 12517633) !== 0) || _la === 90) {
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
            this.state = 250;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 249;
                this.attribute();
                }
            }

            this.state = 252;
            this.match(StructuredTextParser.CLASS);
            this.state = 254;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 15) !== 0)) {
                {
                this.state = 253;
                this.accessModifier();
                }
            }

            this.state = 259;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 127) !== 0)) {
                {
                {
                this.state = 256;
                this.modifier();
                }
                }
                this.state = 261;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 262;
            this.match(StructuredTextParser.ID);
            this.state = 264;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 263;
                this.extendsClause();
                }
            }

            this.state = 267;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 266;
                this.implementsClause();
                }
            }

            this.state = 272;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 12517633) !== 0) || _la === 90) {
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
            this.state = 278;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 277;
                this.attribute();
                }
            }

            this.state = 280;
            this.match(StructuredTextParser.STRUCT);
            this.state = 281;
            this.match(StructuredTextParser.ID);
            this.state = 285;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 191) !== 0)) {
                {
                {
                this.state = 282;
                this.varDeclSection();
                }
                }
                this.state = 287;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 288;
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
            this.state = 291;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 290;
                this.attribute();
                }
            }

            this.state = 293;
            this.match(StructuredTextParser.ENUM);
            this.state = 294;
            this.match(StructuredTextParser.ID);
            this.state = 295;
            this.enumMemberList();
            this.state = 296;
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
            this.state = 299;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 298;
                this.attribute();
                }
            }

            this.state = 301;
            this.match(StructuredTextParser.NAMESPACE);
            this.state = 302;
            this.match(StructuredTextParser.ID);
            this.state = 306;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 85) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 85) !== 0)) {
                {
                {
                this.state = 303;
                this.namespaceMember();
                }
                }
                this.state = 308;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 309;
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
            this.state = 312;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 311;
                this.attribute();
                }
            }

            this.state = 314;
            this.match(StructuredTextParser.TYPEDEF);
            this.state = 315;
            this.match(StructuredTextParser.ID);
            this.state = 316;
            this.match(StructuredTextParser.T__1);
            this.state = 317;
            this.type_();
            this.state = 318;
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
            this.state = 321;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 320;
                this.attribute();
                }
            }

            this.state = 323;
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 327;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 324;
                    this.modifier();
                    }
                    }
                }
                this.state = 329;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            }
            this.state = 331;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 330;
                this.varDecl();
                }
                }
                this.state = 333;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 40 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 18431) !== 0));
            this.state = 335;
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
            this.state = 337;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 338;
            this.match(StructuredTextParser.ID);
            this.state = 343;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 339;
                this.match(StructuredTextParser.T__3);
                this.state = 340;
                this.match(StructuredTextParser.ID);
                }
                }
                this.state = 345;
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
            this.state = 346;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 347;
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
            this.state = 352;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 349;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 350;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 351;
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
            this.state = 361;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 354;
                this.program();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 355;
                this.functionBlock();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 356;
                this.function_();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 357;
                this.classDecl();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 358;
                this.structDecl();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 359;
                this.enumDecl();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 360;
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
            this.state = 363;
            this.varSectionType();
            this.state = 367;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 364;
                    this.modifier();
                    }
                    }
                }
                this.state = 369;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
            }
            this.state = 371;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 370;
                this.varDecl();
                }
                }
                this.state = 373;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 40 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 18431) !== 0));
            this.state = 375;
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
            this.state = 377;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 191) !== 0))) {
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
            this.state = 380;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 379;
                this.attribute();
                }
            }

            this.state = 383;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 15) !== 0)) {
                {
                this.state = 382;
                this.accessModifier();
                }
            }

            this.state = 388;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 127) !== 0)) {
                {
                {
                this.state = 385;
                this.modifier();
                }
                }
                this.state = 390;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 391;
            this.match(StructuredTextParser.ID);
            this.state = 392;
            this.match(StructuredTextParser.T__0);
            this.state = 394;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 114) {
                {
                this.state = 393;
                this.match(StructuredTextParser.REFERENCE_TO);
                }
            }

            this.state = 397;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 71) {
                {
                this.state = 396;
                this.arraySpec();
                }
            }

            this.state = 399;
            this.type_();
            this.state = 402;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 400;
                this.match(StructuredTextParser.T__4);
                this.state = 401;
                this.exprOrArrayInit();
                }
            }

            this.state = 404;
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
            this.state = 406;
            this.match(StructuredTextParser.ARRAY);
            this.state = 407;
            this.match(StructuredTextParser.T__5);
            this.state = 408;
            this.match(StructuredTextParser.NUMBER);
            this.state = 409;
            this.match(StructuredTextParser.T__6);
            this.state = 410;
            this.match(StructuredTextParser.NUMBER);
            this.state = 411;
            this.match(StructuredTextParser.T__7);
            this.state = 412;
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
            this.state = 416;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__27:
            case StructuredTextParser.BOOL:
            case StructuredTextParser.ID:
            case StructuredTextParser.NUMBER:
            case StructuredTextParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 414;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__5:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 415;
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
            this.state = 418;
            this.match(StructuredTextParser.T__5);
            this.state = 419;
            this.expr(0);
            this.state = 424;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 420;
                this.match(StructuredTextParser.T__3);
                this.state = 421;
                this.expr(0);
                }
                }
                this.state = 426;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 427;
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
            this.state = 431;
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
                this.state = 429;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 430;
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
            this.state = 433;
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
            this.state = 438;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 56, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 435;
                    this.statement();
                    }
                    }
                }
                this.state = 440;
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
            this.state = 452;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 57, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 441;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 442;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 443;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 444;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 445;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 446;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 447;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 448;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 449;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 450;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 451;
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
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 454;
            this.match(StructuredTextParser.ID);
            this.state = 456;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 455;
                this.arrayIndex();
                }
            }

            this.state = 458;
            this.match(StructuredTextParser.T__4);
            this.state = 459;
            this.expr(0);
            this.state = 460;
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
    public arrayIndex(): ArrayIndexContext {
        let localContext = new ArrayIndexContext(this.context, this.state);
        this.enterRule(localContext, 54, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 462;
            this.match(StructuredTextParser.T__5);
            this.state = 463;
            this.expr(0);
            this.state = 464;
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
            this.state = 466;
            this.match(StructuredTextParser.ID);
            this.state = 467;
            this.match(StructuredTextParser.T__27);
            this.state = 469;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 28 || ((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 15) !== 0)) {
                {
                this.state = 468;
                this.argumentList();
                }
            }

            this.state = 471;
            this.match(StructuredTextParser.T__28);
            this.state = 474;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
            case 1:
                {
                this.state = 472;
                this.match(StructuredTextParser.T__2);
                }
                break;
            case 2:
                // tslint:disable-next-line:no-empty
                {
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
    public argumentList(): ArgumentListContext {
        let localContext = new ArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 58, StructuredTextParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 476;
            this.argument();
            this.state = 481;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 477;
                this.match(StructuredTextParser.T__3);
                this.state = 478;
                this.argument();
                }
                }
                this.state = 483;
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
            this.state = 488;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 484;
                this.match(StructuredTextParser.ID);
                this.state = 485;
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 30)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 486;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 487;
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
            this.state = 490;
            this.match(StructuredTextParser.IF);
            this.state = 491;
            this.expr(0);
            this.state = 492;
            this.match(StructuredTextParser.THEN);
            this.state = 493;
            this.statementSection();
            this.state = 501;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 67) {
                {
                {
                this.state = 494;
                this.match(StructuredTextParser.ELSIF);
                this.state = 495;
                this.expr(0);
                this.state = 496;
                this.match(StructuredTextParser.THEN);
                this.state = 497;
                this.statementSection();
                }
                }
                this.state = 503;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 506;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 68) {
                {
                this.state = 504;
                this.match(StructuredTextParser.ELSE);
                this.state = 505;
                this.statementSection();
                }
            }

            this.state = 508;
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
            this.state = 510;
            this.match(StructuredTextParser.CASE);
            this.state = 511;
            this.expr(0);
            this.state = 512;
            this.match(StructuredTextParser.OF);
            this.state = 514;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 513;
                this.caseElement();
                }
                }
                this.state = 516;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 15) !== 0));
            this.state = 520;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 68) {
                {
                this.state = 518;
                this.match(StructuredTextParser.ELSE);
                this.state = 519;
                this.statementSection();
                }
            }

            this.state = 522;
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
            this.state = 524;
            this.caseValue();
            this.state = 529;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 525;
                this.match(StructuredTextParser.T__3);
                this.state = 526;
                this.caseValue();
                }
                }
                this.state = 531;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 532;
            this.match(StructuredTextParser.T__0);
            this.state = 533;
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
            this.state = 535;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 15) !== 0))) {
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
            this.state = 537;
            this.match(StructuredTextParser.WHILE);
            this.state = 538;
            this.expr(0);
            this.state = 539;
            this.match(StructuredTextParser.DO);
            this.state = 540;
            this.statementSection();
            this.state = 541;
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
            this.state = 543;
            this.match(StructuredTextParser.REPEAT);
            this.state = 544;
            this.statementSection();
            this.state = 545;
            this.match(StructuredTextParser.UNTIL);
            this.state = 546;
            this.expr(0);
            this.state = 547;
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
            this.state = 549;
            this.match(StructuredTextParser.FOR);
            this.state = 550;
            this.match(StructuredTextParser.ID);
            this.state = 551;
            this.match(StructuredTextParser.T__4);
            this.state = 552;
            this.expr(0);
            this.state = 553;
            this.match(StructuredTextParser.TO);
            this.state = 554;
            this.expr(0);
            this.state = 557;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 82) {
                {
                this.state = 555;
                this.match(StructuredTextParser.BY);
                this.state = 556;
                this.expr(0);
                }
            }

            this.state = 559;
            this.match(StructuredTextParser.DO);
            this.state = 560;
            this.statementSection();
            this.state = 561;
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
            this.state = 563;
            this.match(StructuredTextParser.RETURN);
            this.state = 564;
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
            this.state = 566;
            this.match(StructuredTextParser.EXIT);
            this.state = 567;
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
            this.state = 569;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 570;
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
            this.state = 584;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__27:
                {
                this.state = 573;
                this.match(StructuredTextParser.T__27);
                this.state = 574;
                this.expr(0);
                this.state = 575;
                this.match(StructuredTextParser.T__28);
                }
                break;
            case StructuredTextParser.NUMBER:
                {
                this.state = 577;
                this.match(StructuredTextParser.NUMBER);
                }
                break;
            case StructuredTextParser.BOOL:
                {
                this.state = 578;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case StructuredTextParser.STRING_LITERAL:
                {
                this.state = 579;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            case StructuredTextParser.ID:
                {
                this.state = 580;
                this.match(StructuredTextParser.ID);
                this.state = 582;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 69, this.context) ) {
                case 1:
                    {
                    this.state = 581;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 600;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 72, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 598;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 586;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 587;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 31 || _la === 32 || _la === 115)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 588;
                        this.expr(10);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 589;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 590;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 33 || _la === 34)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 591;
                        this.expr(9);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 592;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 593;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 2 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 31) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 594;
                        this.expr(8);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 595;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 596;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 597;
                        this.expr(7);
                        }
                        break;
                    }
                    }
                }
                this.state = 602;
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
            this.state = 615;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 4194389) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 1365) !== 0)) {
                {
                this.state = 613;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
                case 1:
                    {
                    this.state = 603;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 604;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 605;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 606;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 607;
                    this.classDecl();
                    }
                    break;
                case 6:
                    {
                    this.state = 608;
                    this.structDecl();
                    }
                    break;
                case 7:
                    {
                    this.state = 609;
                    this.enumDecl();
                    }
                    break;
                case 8:
                    {
                    this.state = 610;
                    this.namespaceDecl();
                    }
                    break;
                case 9:
                    {
                    this.state = 611;
                    this.typeDefDecl();
                    }
                    break;
                case 10:
                    {
                    this.state = 612;
                    this.varGlobalSection();
                    }
                    break;
                }
                }
                this.state = 617;
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
            this.state = 626;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
            case 1:
                {
                this.state = 618;
                this.getter();
                }
                break;
            case 2:
                {
                this.state = 619;
                this.setter();
                }
                break;
            case 3:
                {
                this.state = 620;
                this.getter();
                this.state = 621;
                this.setter();
                }
                break;
            case 4:
                {
                this.state = 623;
                this.setter();
                this.state = 624;
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
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 628;
            this.match(StructuredTextParser.GET);
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
        this.enterRule(localContext, 90, StructuredTextParser.RULE_setter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 632;
            this.match(StructuredTextParser.SET);
            this.state = 633;
            this.statementSection();
            this.state = 634;
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
            this.state = 636;
            this.match(StructuredTextParser.T__39);
            this.state = 637;
            this.match(StructuredTextParser.ID);
            this.state = 639;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 28) {
                {
                this.state = 638;
                this.attributeArgList();
                }
            }

            this.state = 641;
            this.match(StructuredTextParser.T__40);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 643;
            this.match(StructuredTextParser.T__27);
            this.state = 644;
            this.attributeArg();
            this.state = 649;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 645;
                this.match(StructuredTextParser.T__3);
                this.state = 646;
                this.attributeArg();
                }
                }
                this.state = 651;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 652;
            this.match(StructuredTextParser.T__28);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 654;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 7) !== 0))) {
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
            this.state = 656;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 15) !== 0))) {
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
            this.state = 658;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 127) !== 0))) {
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
            this.state = 660;
            this.match(StructuredTextParser.ID);
            this.state = 665;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 661;
                this.match(StructuredTextParser.T__3);
                this.state = 662;
                this.match(StructuredTextParser.ID);
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
            return this.precpred(this.context, 9);
        case 1:
            return this.precpred(this.context, 8);
        case 2:
            return this.precpred(this.context, 7);
        case 3:
            return this.precpred(this.context, 6);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,121,669,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,1,0,1,
        0,1,0,3,0,108,8,0,1,0,3,0,111,8,0,1,0,5,0,114,8,0,10,0,12,0,117,
        9,0,1,0,1,0,1,0,1,1,3,1,123,8,1,1,1,1,1,1,1,1,1,1,1,3,1,130,8,1,
        1,1,3,1,133,8,1,1,1,5,1,136,8,1,10,1,12,1,139,9,1,1,1,1,1,1,1,1,
        2,3,2,145,8,2,1,2,1,2,3,2,149,8,2,1,2,5,2,152,8,2,10,2,12,2,155,
        9,2,1,2,1,2,3,2,159,8,2,1,2,3,2,162,8,2,1,2,5,2,165,8,2,10,2,12,
        2,168,9,2,1,2,1,2,1,2,1,3,3,3,174,8,3,1,3,1,3,3,3,178,8,3,1,3,5,
        3,181,8,3,10,3,12,3,184,9,3,1,3,1,3,1,3,1,3,5,3,190,8,3,10,3,12,
        3,193,9,3,1,3,1,3,1,3,1,4,3,4,199,8,4,1,4,1,4,3,4,203,8,4,1,4,5,
        4,206,8,4,10,4,12,4,209,9,4,1,4,1,4,1,4,3,4,214,8,4,1,4,5,4,217,
        8,4,10,4,12,4,220,9,4,1,4,1,4,1,4,1,5,3,5,226,8,5,1,5,1,5,3,5,230,
        8,5,1,5,5,5,233,8,5,10,5,12,5,236,9,5,1,5,1,5,3,5,240,8,5,1,5,5,
        5,243,8,5,10,5,12,5,246,9,5,1,5,1,5,1,6,3,6,251,8,6,1,6,1,6,3,6,
        255,8,6,1,6,5,6,258,8,6,10,6,12,6,261,9,6,1,6,1,6,3,6,265,8,6,1,
        6,3,6,268,8,6,1,6,5,6,271,8,6,10,6,12,6,274,9,6,1,6,1,6,1,7,3,7,
        279,8,7,1,7,1,7,1,7,5,7,284,8,7,10,7,12,7,287,9,7,1,7,1,7,1,8,3,
        8,292,8,8,1,8,1,8,1,8,1,8,1,8,1,9,3,9,300,8,9,1,9,1,9,1,9,5,9,305,
        8,9,10,9,12,9,308,9,9,1,9,1,9,1,10,3,10,313,8,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,11,3,11,322,8,11,1,11,1,11,5,11,326,8,11,10,11,
        12,11,329,9,11,1,11,4,11,332,8,11,11,11,12,11,333,1,11,1,11,1,12,
        1,12,1,12,1,12,5,12,342,8,12,10,12,12,12,345,9,12,1,13,1,13,1,13,
        1,14,1,14,1,14,3,14,353,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
        3,15,362,8,15,1,16,1,16,5,16,366,8,16,10,16,12,16,369,9,16,1,16,
        4,16,372,8,16,11,16,12,16,373,1,16,1,16,1,17,1,17,1,18,3,18,381,
        8,18,1,18,3,18,384,8,18,1,18,5,18,387,8,18,10,18,12,18,390,9,18,
        1,18,1,18,1,18,3,18,395,8,18,1,18,3,18,398,8,18,1,18,1,18,1,18,3,
        18,403,8,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
        20,1,20,3,20,417,8,20,1,21,1,21,1,21,1,21,5,21,423,8,21,10,21,12,
        21,426,9,21,1,21,1,21,1,22,1,22,3,22,432,8,22,1,23,1,23,1,24,5,24,
        437,8,24,10,24,12,24,440,9,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
        1,25,1,25,1,25,1,25,3,25,453,8,25,1,26,1,26,3,26,457,8,26,1,26,1,
        26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,3,28,470,8,28,1,
        28,1,28,1,28,3,28,475,8,28,1,29,1,29,1,29,5,29,480,8,29,10,29,12,
        29,483,9,29,1,30,1,30,1,30,1,30,3,30,489,8,30,1,31,1,31,1,31,1,31,
        1,31,1,31,1,31,1,31,1,31,5,31,500,8,31,10,31,12,31,503,9,31,1,31,
        1,31,3,31,507,8,31,1,31,1,31,1,32,1,32,1,32,1,32,4,32,515,8,32,11,
        32,12,32,516,1,32,1,32,3,32,521,8,32,1,32,1,32,1,33,1,33,1,33,5,
        33,528,8,33,10,33,12,33,531,9,33,1,33,1,33,1,33,1,34,1,34,1,35,1,
        35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,
        37,1,37,1,37,1,37,1,37,1,37,3,37,558,8,37,1,37,1,37,1,37,1,37,1,
        38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,
        41,1,41,1,41,1,41,1,41,1,41,3,41,583,8,41,3,41,585,8,41,1,41,1,41,
        1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,5,41,599,8,41,
        10,41,12,41,602,9,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,
        1,42,5,42,614,8,42,10,42,12,42,617,9,42,1,43,1,43,1,43,1,43,1,43,
        1,43,1,43,1,43,3,43,627,8,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,
        1,45,1,46,1,46,1,46,3,46,640,8,46,1,46,1,46,1,47,1,47,1,47,1,47,
        5,47,648,8,47,10,47,12,47,651,9,47,1,47,1,47,1,48,1,48,1,49,1,49,
        1,50,1,50,1,51,1,51,1,51,5,51,664,8,51,10,51,12,51,667,9,51,1,51,
        0,1,82,52,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
        40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,
        84,86,88,90,92,94,96,98,100,102,0,11,2,0,56,61,63,63,1,0,9,27,2,
        0,5,5,30,30,1,0,116,119,2,0,31,32,115,115,1,0,33,34,2,0,2,2,35,39,
        1,0,87,89,1,0,117,119,1,0,110,113,1,0,103,109,725,0,104,1,0,0,0,
        2,122,1,0,0,0,4,144,1,0,0,0,6,173,1,0,0,0,8,198,1,0,0,0,10,225,1,
        0,0,0,12,250,1,0,0,0,14,278,1,0,0,0,16,291,1,0,0,0,18,299,1,0,0,
        0,20,312,1,0,0,0,22,321,1,0,0,0,24,337,1,0,0,0,26,346,1,0,0,0,28,
        352,1,0,0,0,30,361,1,0,0,0,32,363,1,0,0,0,34,377,1,0,0,0,36,380,
        1,0,0,0,38,406,1,0,0,0,40,416,1,0,0,0,42,418,1,0,0,0,44,431,1,0,
        0,0,46,433,1,0,0,0,48,438,1,0,0,0,50,452,1,0,0,0,52,454,1,0,0,0,
        54,462,1,0,0,0,56,466,1,0,0,0,58,476,1,0,0,0,60,488,1,0,0,0,62,490,
        1,0,0,0,64,510,1,0,0,0,66,524,1,0,0,0,68,535,1,0,0,0,70,537,1,0,
        0,0,72,543,1,0,0,0,74,549,1,0,0,0,76,563,1,0,0,0,78,566,1,0,0,0,
        80,569,1,0,0,0,82,584,1,0,0,0,84,615,1,0,0,0,86,626,1,0,0,0,88,628,
        1,0,0,0,90,632,1,0,0,0,92,636,1,0,0,0,94,643,1,0,0,0,96,654,1,0,
        0,0,98,656,1,0,0,0,100,658,1,0,0,0,102,660,1,0,0,0,104,105,5,42,
        0,0,105,107,5,117,0,0,106,108,3,24,12,0,107,106,1,0,0,0,107,108,
        1,0,0,0,108,110,1,0,0,0,109,111,3,26,13,0,110,109,1,0,0,0,110,111,
        1,0,0,0,111,115,1,0,0,0,112,114,3,32,16,0,113,112,1,0,0,0,114,117,
        1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,118,1,0,0,0,117,115,
        1,0,0,0,118,119,3,48,24,0,119,120,5,43,0,0,120,1,1,0,0,0,121,123,
        3,92,46,0,122,121,1,0,0,0,122,123,1,0,0,0,123,124,1,0,0,0,124,125,
        5,46,0,0,125,126,5,117,0,0,126,127,5,1,0,0,127,129,3,44,22,0,128,
        130,3,24,12,0,129,128,1,0,0,0,129,130,1,0,0,0,130,132,1,0,0,0,131,
        133,3,26,13,0,132,131,1,0,0,0,132,133,1,0,0,0,133,137,1,0,0,0,134,
        136,3,32,16,0,135,134,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,
        138,1,0,0,0,138,140,1,0,0,0,139,137,1,0,0,0,140,141,3,48,24,0,141,
        142,5,47,0,0,142,3,1,0,0,0,143,145,3,92,46,0,144,143,1,0,0,0,144,
        145,1,0,0,0,145,146,1,0,0,0,146,148,5,44,0,0,147,149,3,98,49,0,148,
        147,1,0,0,0,148,149,1,0,0,0,149,153,1,0,0,0,150,152,3,100,50,0,151,
        150,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,
        156,1,0,0,0,155,153,1,0,0,0,156,158,5,117,0,0,157,159,3,24,12,0,
        158,157,1,0,0,0,158,159,1,0,0,0,159,161,1,0,0,0,160,162,3,26,13,
        0,161,160,1,0,0,0,161,162,1,0,0,0,162,166,1,0,0,0,163,165,3,28,14,
        0,164,163,1,0,0,0,165,168,1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,
        0,167,169,1,0,0,0,168,166,1,0,0,0,169,170,3,48,24,0,170,171,5,45,
        0,0,171,5,1,0,0,0,172,174,3,92,46,0,173,172,1,0,0,0,173,174,1,0,
        0,0,174,175,1,0,0,0,175,177,5,48,0,0,176,178,3,98,49,0,177,176,1,
        0,0,0,177,178,1,0,0,0,178,182,1,0,0,0,179,181,3,100,50,0,180,179,
        1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,185,
        1,0,0,0,184,182,1,0,0,0,185,186,5,117,0,0,186,187,5,1,0,0,187,191,
        3,44,22,0,188,190,3,32,16,0,189,188,1,0,0,0,190,193,1,0,0,0,191,
        189,1,0,0,0,191,192,1,0,0,0,192,194,1,0,0,0,193,191,1,0,0,0,194,
        195,3,86,43,0,195,196,5,49,0,0,196,7,1,0,0,0,197,199,3,92,46,0,198,
        197,1,0,0,0,198,199,1,0,0,0,199,200,1,0,0,0,200,202,5,90,0,0,201,
        203,3,98,49,0,202,201,1,0,0,0,202,203,1,0,0,0,203,207,1,0,0,0,204,
        206,3,100,50,0,205,204,1,0,0,0,206,209,1,0,0,0,207,205,1,0,0,0,207,
        208,1,0,0,0,208,210,1,0,0,0,209,207,1,0,0,0,210,213,5,117,0,0,211,
        212,5,1,0,0,212,214,3,44,22,0,213,211,1,0,0,0,213,214,1,0,0,0,214,
        218,1,0,0,0,215,217,3,32,16,0,216,215,1,0,0,0,217,220,1,0,0,0,218,
        216,1,0,0,0,218,219,1,0,0,0,219,221,1,0,0,0,220,218,1,0,0,0,221,
        222,3,48,24,0,222,223,5,91,0,0,223,9,1,0,0,0,224,226,3,92,46,0,225,
        224,1,0,0,0,225,226,1,0,0,0,226,227,1,0,0,0,227,229,5,92,0,0,228,
        230,3,98,49,0,229,228,1,0,0,0,229,230,1,0,0,0,230,234,1,0,0,0,231,
        233,3,100,50,0,232,231,1,0,0,0,233,236,1,0,0,0,234,232,1,0,0,0,234,
        235,1,0,0,0,235,237,1,0,0,0,236,234,1,0,0,0,237,239,5,117,0,0,238,
        240,3,26,13,0,239,238,1,0,0,0,239,240,1,0,0,0,240,244,1,0,0,0,241,
        243,3,28,14,0,242,241,1,0,0,0,243,246,1,0,0,0,244,242,1,0,0,0,244,
        245,1,0,0,0,245,247,1,0,0,0,246,244,1,0,0,0,247,248,5,93,0,0,248,
        11,1,0,0,0,249,251,3,92,46,0,250,249,1,0,0,0,250,251,1,0,0,0,251,
        252,1,0,0,0,252,254,5,94,0,0,253,255,3,98,49,0,254,253,1,0,0,0,254,
        255,1,0,0,0,255,259,1,0,0,0,256,258,3,100,50,0,257,256,1,0,0,0,258,
        261,1,0,0,0,259,257,1,0,0,0,259,260,1,0,0,0,260,262,1,0,0,0,261,
        259,1,0,0,0,262,264,5,117,0,0,263,265,3,26,13,0,264,263,1,0,0,0,
        264,265,1,0,0,0,265,267,1,0,0,0,266,268,3,24,12,0,267,266,1,0,0,
        0,267,268,1,0,0,0,268,272,1,0,0,0,269,271,3,28,14,0,270,269,1,0,
        0,0,271,274,1,0,0,0,272,270,1,0,0,0,272,273,1,0,0,0,273,275,1,0,
        0,0,274,272,1,0,0,0,275,276,5,95,0,0,276,13,1,0,0,0,277,279,3,92,
        46,0,278,277,1,0,0,0,278,279,1,0,0,0,279,280,1,0,0,0,280,281,5,96,
        0,0,281,285,5,117,0,0,282,284,3,32,16,0,283,282,1,0,0,0,284,287,
        1,0,0,0,285,283,1,0,0,0,285,286,1,0,0,0,286,288,1,0,0,0,287,285,
        1,0,0,0,288,289,5,97,0,0,289,15,1,0,0,0,290,292,3,92,46,0,291,290,
        1,0,0,0,291,292,1,0,0,0,292,293,1,0,0,0,293,294,5,98,0,0,294,295,
        5,117,0,0,295,296,3,102,51,0,296,297,5,99,0,0,297,17,1,0,0,0,298,
        300,3,92,46,0,299,298,1,0,0,0,299,300,1,0,0,0,300,301,1,0,0,0,301,
        302,5,100,0,0,302,306,5,117,0,0,303,305,3,30,15,0,304,303,1,0,0,
        0,305,308,1,0,0,0,306,304,1,0,0,0,306,307,1,0,0,0,307,309,1,0,0,
        0,308,306,1,0,0,0,309,310,5,101,0,0,310,19,1,0,0,0,311,313,3,92,
        46,0,312,311,1,0,0,0,312,313,1,0,0,0,313,314,1,0,0,0,314,315,5,102,
        0,0,315,316,5,117,0,0,316,317,5,2,0,0,317,318,3,44,22,0,318,319,
        5,3,0,0,319,21,1,0,0,0,320,322,3,92,46,0,321,320,1,0,0,0,321,322,
        1,0,0,0,322,323,1,0,0,0,323,327,5,62,0,0,324,326,3,100,50,0,325,
        324,1,0,0,0,326,329,1,0,0,0,327,325,1,0,0,0,327,328,1,0,0,0,328,
        331,1,0,0,0,329,327,1,0,0,0,330,332,3,36,18,0,331,330,1,0,0,0,332,
        333,1,0,0,0,333,331,1,0,0,0,333,334,1,0,0,0,334,335,1,0,0,0,335,
        336,5,64,0,0,336,23,1,0,0,0,337,338,5,50,0,0,338,343,5,117,0,0,339,
        340,5,4,0,0,340,342,5,117,0,0,341,339,1,0,0,0,342,345,1,0,0,0,343,
        341,1,0,0,0,343,344,1,0,0,0,344,25,1,0,0,0,345,343,1,0,0,0,346,347,
        5,51,0,0,347,348,5,117,0,0,348,27,1,0,0,0,349,353,3,8,4,0,350,353,
        3,6,3,0,351,353,3,32,16,0,352,349,1,0,0,0,352,350,1,0,0,0,352,351,
        1,0,0,0,353,29,1,0,0,0,354,362,3,0,0,0,355,362,3,4,2,0,356,362,3,
        2,1,0,357,362,3,12,6,0,358,362,3,14,7,0,359,362,3,16,8,0,360,362,
        3,10,5,0,361,354,1,0,0,0,361,355,1,0,0,0,361,356,1,0,0,0,361,357,
        1,0,0,0,361,358,1,0,0,0,361,359,1,0,0,0,361,360,1,0,0,0,362,31,1,
        0,0,0,363,367,3,34,17,0,364,366,3,100,50,0,365,364,1,0,0,0,366,369,
        1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,0,368,371,1,0,0,0,369,367,
        1,0,0,0,370,372,3,36,18,0,371,370,1,0,0,0,372,373,1,0,0,0,373,371,
        1,0,0,0,373,374,1,0,0,0,374,375,1,0,0,0,375,376,5,64,0,0,376,33,
        1,0,0,0,377,378,7,0,0,0,378,35,1,0,0,0,379,381,3,92,46,0,380,379,
        1,0,0,0,380,381,1,0,0,0,381,383,1,0,0,0,382,384,3,98,49,0,383,382,
        1,0,0,0,383,384,1,0,0,0,384,388,1,0,0,0,385,387,3,100,50,0,386,385,
        1,0,0,0,387,390,1,0,0,0,388,386,1,0,0,0,388,389,1,0,0,0,389,391,
        1,0,0,0,390,388,1,0,0,0,391,392,5,117,0,0,392,394,5,1,0,0,393,395,
        5,114,0,0,394,393,1,0,0,0,394,395,1,0,0,0,395,397,1,0,0,0,396,398,
        3,38,19,0,397,396,1,0,0,0,397,398,1,0,0,0,398,399,1,0,0,0,399,402,
        3,44,22,0,400,401,5,5,0,0,401,403,3,40,20,0,402,400,1,0,0,0,402,
        403,1,0,0,0,403,404,1,0,0,0,404,405,5,3,0,0,405,37,1,0,0,0,406,407,
        5,71,0,0,407,408,5,6,0,0,408,409,5,118,0,0,409,410,5,7,0,0,410,411,
        5,118,0,0,411,412,5,8,0,0,412,413,5,72,0,0,413,39,1,0,0,0,414,417,
        3,82,41,0,415,417,3,42,21,0,416,414,1,0,0,0,416,415,1,0,0,0,417,
        41,1,0,0,0,418,419,5,6,0,0,419,424,3,82,41,0,420,421,5,4,0,0,421,
        423,3,82,41,0,422,420,1,0,0,0,423,426,1,0,0,0,424,422,1,0,0,0,424,
        425,1,0,0,0,425,427,1,0,0,0,426,424,1,0,0,0,427,428,5,8,0,0,428,
        43,1,0,0,0,429,432,3,46,23,0,430,432,5,117,0,0,431,429,1,0,0,0,431,
        430,1,0,0,0,432,45,1,0,0,0,433,434,7,1,0,0,434,47,1,0,0,0,435,437,
        3,50,25,0,436,435,1,0,0,0,437,440,1,0,0,0,438,436,1,0,0,0,438,439,
        1,0,0,0,439,49,1,0,0,0,440,438,1,0,0,0,441,453,3,52,26,0,442,453,
        3,62,31,0,443,453,3,64,32,0,444,453,3,70,35,0,445,453,3,72,36,0,
        446,453,3,74,37,0,447,453,3,56,28,0,448,453,3,76,38,0,449,453,3,
        78,39,0,450,453,3,80,40,0,451,453,5,3,0,0,452,441,1,0,0,0,452,442,
        1,0,0,0,452,443,1,0,0,0,452,444,1,0,0,0,452,445,1,0,0,0,452,446,
        1,0,0,0,452,447,1,0,0,0,452,448,1,0,0,0,452,449,1,0,0,0,452,450,
        1,0,0,0,452,451,1,0,0,0,453,51,1,0,0,0,454,456,5,117,0,0,455,457,
        3,54,27,0,456,455,1,0,0,0,456,457,1,0,0,0,457,458,1,0,0,0,458,459,
        5,5,0,0,459,460,3,82,41,0,460,461,5,3,0,0,461,53,1,0,0,0,462,463,
        5,6,0,0,463,464,3,82,41,0,464,465,5,8,0,0,465,55,1,0,0,0,466,467,
        5,117,0,0,467,469,5,28,0,0,468,470,3,58,29,0,469,468,1,0,0,0,469,
        470,1,0,0,0,470,471,1,0,0,0,471,474,5,29,0,0,472,475,5,3,0,0,473,
        475,1,0,0,0,474,472,1,0,0,0,474,473,1,0,0,0,475,57,1,0,0,0,476,481,
        3,60,30,0,477,478,5,4,0,0,478,480,3,60,30,0,479,477,1,0,0,0,480,
        483,1,0,0,0,481,479,1,0,0,0,481,482,1,0,0,0,482,59,1,0,0,0,483,481,
        1,0,0,0,484,485,5,117,0,0,485,486,7,2,0,0,486,489,3,82,41,0,487,
        489,3,82,41,0,488,484,1,0,0,0,488,487,1,0,0,0,489,61,1,0,0,0,490,
        491,5,65,0,0,491,492,3,82,41,0,492,493,5,66,0,0,493,501,3,48,24,
        0,494,495,5,67,0,0,495,496,3,82,41,0,496,497,5,66,0,0,497,498,3,
        48,24,0,498,500,1,0,0,0,499,494,1,0,0,0,500,503,1,0,0,0,501,499,
        1,0,0,0,501,502,1,0,0,0,502,506,1,0,0,0,503,501,1,0,0,0,504,505,
        5,68,0,0,505,507,3,48,24,0,506,504,1,0,0,0,506,507,1,0,0,0,507,508,
        1,0,0,0,508,509,5,69,0,0,509,63,1,0,0,0,510,511,5,70,0,0,511,512,
        3,82,41,0,512,514,5,72,0,0,513,515,3,66,33,0,514,513,1,0,0,0,515,
        516,1,0,0,0,516,514,1,0,0,0,516,517,1,0,0,0,517,520,1,0,0,0,518,
        519,5,68,0,0,519,521,3,48,24,0,520,518,1,0,0,0,520,521,1,0,0,0,521,
        522,1,0,0,0,522,523,5,73,0,0,523,65,1,0,0,0,524,529,3,68,34,0,525,
        526,5,4,0,0,526,528,3,68,34,0,527,525,1,0,0,0,528,531,1,0,0,0,529,
        527,1,0,0,0,529,530,1,0,0,0,530,532,1,0,0,0,531,529,1,0,0,0,532,
        533,5,1,0,0,533,534,3,48,24,0,534,67,1,0,0,0,535,536,7,3,0,0,536,
        69,1,0,0,0,537,538,5,74,0,0,538,539,3,82,41,0,539,540,5,75,0,0,540,
        541,3,48,24,0,541,542,5,76,0,0,542,71,1,0,0,0,543,544,5,77,0,0,544,
        545,3,48,24,0,545,546,5,78,0,0,546,547,3,82,41,0,547,548,5,79,0,
        0,548,73,1,0,0,0,549,550,5,80,0,0,550,551,5,117,0,0,551,552,5,5,
        0,0,552,553,3,82,41,0,553,554,5,81,0,0,554,557,3,82,41,0,555,556,
        5,82,0,0,556,558,3,82,41,0,557,555,1,0,0,0,557,558,1,0,0,0,558,559,
        1,0,0,0,559,560,5,75,0,0,560,561,3,48,24,0,561,562,5,83,0,0,562,
        75,1,0,0,0,563,564,5,84,0,0,564,565,5,3,0,0,565,77,1,0,0,0,566,567,
        5,85,0,0,567,568,5,3,0,0,568,79,1,0,0,0,569,570,5,86,0,0,570,571,
        5,3,0,0,571,81,1,0,0,0,572,573,6,41,-1,0,573,574,5,28,0,0,574,575,
        3,82,41,0,575,576,5,29,0,0,576,585,1,0,0,0,577,585,5,118,0,0,578,
        585,5,116,0,0,579,585,5,119,0,0,580,582,5,117,0,0,581,583,3,54,27,
        0,582,581,1,0,0,0,582,583,1,0,0,0,583,585,1,0,0,0,584,572,1,0,0,
        0,584,577,1,0,0,0,584,578,1,0,0,0,584,579,1,0,0,0,584,580,1,0,0,
        0,585,600,1,0,0,0,586,587,10,9,0,0,587,588,7,4,0,0,588,599,3,82,
        41,10,589,590,10,8,0,0,590,591,7,5,0,0,591,599,3,82,41,9,592,593,
        10,7,0,0,593,594,7,6,0,0,594,599,3,82,41,8,595,596,10,6,0,0,596,
        597,7,7,0,0,597,599,3,82,41,7,598,586,1,0,0,0,598,589,1,0,0,0,598,
        592,1,0,0,0,598,595,1,0,0,0,599,602,1,0,0,0,600,598,1,0,0,0,600,
        601,1,0,0,0,601,83,1,0,0,0,602,600,1,0,0,0,603,614,3,0,0,0,604,614,
        3,4,2,0,605,614,3,2,1,0,606,614,3,10,5,0,607,614,3,12,6,0,608,614,
        3,14,7,0,609,614,3,16,8,0,610,614,3,18,9,0,611,614,3,20,10,0,612,
        614,3,22,11,0,613,603,1,0,0,0,613,604,1,0,0,0,613,605,1,0,0,0,613,
        606,1,0,0,0,613,607,1,0,0,0,613,608,1,0,0,0,613,609,1,0,0,0,613,
        610,1,0,0,0,613,611,1,0,0,0,613,612,1,0,0,0,614,617,1,0,0,0,615,
        613,1,0,0,0,615,616,1,0,0,0,616,85,1,0,0,0,617,615,1,0,0,0,618,627,
        3,88,44,0,619,627,3,90,45,0,620,621,3,88,44,0,621,622,3,90,45,0,
        622,627,1,0,0,0,623,624,3,90,45,0,624,625,3,88,44,0,625,627,1,0,
        0,0,626,618,1,0,0,0,626,619,1,0,0,0,626,620,1,0,0,0,626,623,1,0,
        0,0,627,87,1,0,0,0,628,629,5,52,0,0,629,630,3,48,24,0,630,631,5,
        53,0,0,631,89,1,0,0,0,632,633,5,54,0,0,633,634,3,48,24,0,634,635,
        5,55,0,0,635,91,1,0,0,0,636,637,5,40,0,0,637,639,5,117,0,0,638,640,
        3,94,47,0,639,638,1,0,0,0,639,640,1,0,0,0,640,641,1,0,0,0,641,642,
        5,41,0,0,642,93,1,0,0,0,643,644,5,28,0,0,644,649,3,96,48,0,645,646,
        5,4,0,0,646,648,3,96,48,0,647,645,1,0,0,0,648,651,1,0,0,0,649,647,
        1,0,0,0,649,650,1,0,0,0,650,652,1,0,0,0,651,649,1,0,0,0,652,653,
        5,29,0,0,653,95,1,0,0,0,654,655,7,8,0,0,655,97,1,0,0,0,656,657,7,
        9,0,0,657,99,1,0,0,0,658,659,7,10,0,0,659,101,1,0,0,0,660,665,5,
        117,0,0,661,662,5,4,0,0,662,664,5,117,0,0,663,661,1,0,0,0,664,667,
        1,0,0,0,665,663,1,0,0,0,665,666,1,0,0,0,666,103,1,0,0,0,667,665,
        1,0,0,0,79,107,110,115,122,129,132,137,144,148,153,158,161,166,173,
        177,182,191,198,202,207,213,218,225,229,234,239,244,250,254,259,
        264,267,272,278,285,291,299,306,312,321,327,333,343,352,361,367,
        373,380,383,388,394,397,402,416,424,431,438,452,456,469,474,481,
        488,501,506,516,520,529,557,582,584,598,600,613,615,626,639,649,
        665
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
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public arrayIndex(): ArrayIndexContext | null {
        return this.getRuleContext(0, ArrayIndexContext);
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
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
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


export class ExprContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
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
    public arrayIndex(): ArrayIndexContext | null {
        return this.getRuleContext(0, ArrayIndexContext);
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
