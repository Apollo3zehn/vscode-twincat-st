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
    public static readonly RULE_implementsClause = 11;
    public static readonly RULE_extendsClause = 12;
    public static readonly RULE_functionBlockMember = 13;
    public static readonly RULE_interfaceMember = 14;
    public static readonly RULE_classMember = 15;
    public static readonly RULE_namespaceMember = 16;
    public static readonly RULE_varDeclSection = 17;
    public static readonly RULE_varSectionType = 18;
    public static readonly RULE_varDecl = 19;
    public static readonly RULE_arraySpec = 20;
    public static readonly RULE_exprOrArrayInit = 21;
    public static readonly RULE_arrayInit = 22;
    public static readonly RULE_type = 23;
    public static readonly RULE_builtinType = 24;
    public static readonly RULE_statementSection = 25;
    public static readonly RULE_statement = 26;
    public static readonly RULE_assignment = 27;
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
        "implementsClause", "extendsClause", "functionBlockMember", "interfaceMember", 
        "classMember", "namespaceMember", "varDeclSection", "varSectionType", 
        "varDecl", "arraySpec", "exprOrArrayInit", "arrayInit", "type", 
        "builtinType", "statementSection", "statement", "assignment", "arrayIndex", 
        "callStatement", "argumentList", "argument", "ifStatement", "caseStatement", 
        "caseElement", "caseValue", "whileStatement", "repeatStatement", 
        "forStatement", "returnStatement", "exitStatement", "continueStatement", 
        "expr", "compilationUnit", "propertyBody", "getter", "setter", "attribute", 
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
            this.state = 109;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 108;
                this.implementsClause();
                }
            }

            this.state = 112;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 111;
                this.extendsClause();
                }
            }

            this.state = 117;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 255) !== 0)) {
                {
                {
                this.state = 114;
                this.varDeclSection();
                }
                }
                this.state = 119;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 120;
            this.statementSection();
            this.state = 121;
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
            this.state = 123;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 124;
            this.match(StructuredTextParser.ID);
            this.state = 125;
            this.match(StructuredTextParser.T__0);
            this.state = 126;
            this.type_();
            this.state = 128;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 127;
                this.implementsClause();
                }
            }

            this.state = 131;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 130;
                this.extendsClause();
                }
            }

            this.state = 136;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 255) !== 0)) {
                {
                {
                this.state = 133;
                this.varDeclSection();
                }
                }
                this.state = 138;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 139;
            this.statementSection();
            this.state = 140;
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
            this.state = 143;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 142;
                this.attribute();
                }
            }

            this.state = 145;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 147;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 15) !== 0)) {
                {
                this.state = 146;
                this.accessModifier();
                }
            }

            this.state = 152;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 127) !== 0)) {
                {
                {
                this.state = 149;
                this.modifier();
                }
                }
                this.state = 154;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 155;
            this.match(StructuredTextParser.ID);
            this.state = 157;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 156;
                this.implementsClause();
                }
            }

            this.state = 160;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 159;
                this.extendsClause();
                }
            }

            this.state = 165;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 16711937) !== 0) || _la === 90) {
                {
                {
                this.state = 162;
                this.functionBlockMember();
                }
                }
                this.state = 167;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 168;
            this.statementSection();
            this.state = 169;
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
            this.state = 172;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 171;
                this.attribute();
                }
            }

            this.state = 174;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 176;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 15) !== 0)) {
                {
                this.state = 175;
                this.accessModifier();
                }
            }

            this.state = 181;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 127) !== 0)) {
                {
                {
                this.state = 178;
                this.modifier();
                }
                }
                this.state = 183;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 184;
            this.match(StructuredTextParser.ID);
            this.state = 185;
            this.match(StructuredTextParser.T__0);
            this.state = 186;
            this.type_();
            this.state = 190;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 255) !== 0)) {
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
            this.propertyBody();
            this.state = 194;
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
            this.state = 197;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 196;
                this.attribute();
                }
            }

            this.state = 199;
            this.match(StructuredTextParser.METHOD);
            this.state = 201;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 15) !== 0)) {
                {
                this.state = 200;
                this.accessModifier();
                }
            }

            this.state = 206;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 127) !== 0)) {
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
            this.state = 212;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 210;
                this.match(StructuredTextParser.T__0);
                this.state = 211;
                this.type_();
                }
            }

            this.state = 217;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 255) !== 0)) {
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
            this.statementSection();
            this.state = 221;
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
            this.state = 224;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 223;
                this.attribute();
                }
            }

            this.state = 226;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 228;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 15) !== 0)) {
                {
                this.state = 227;
                this.accessModifier();
                }
            }

            this.state = 233;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 127) !== 0)) {
                {
                {
                this.state = 230;
                this.modifier();
                }
                }
                this.state = 235;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 236;
            this.match(StructuredTextParser.ID);
            this.state = 238;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 237;
                this.extendsClause();
                }
            }

            this.state = 243;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 16711937) !== 0) || _la === 90) {
                {
                {
                this.state = 240;
                this.interfaceMember();
                }
                }
                this.state = 245;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 246;
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
            this.state = 249;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 248;
                this.attribute();
                }
            }

            this.state = 251;
            this.match(StructuredTextParser.CLASS);
            this.state = 253;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 15) !== 0)) {
                {
                this.state = 252;
                this.accessModifier();
                }
            }

            this.state = 258;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 127) !== 0)) {
                {
                {
                this.state = 255;
                this.modifier();
                }
                }
                this.state = 260;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 261;
            this.match(StructuredTextParser.ID);
            this.state = 263;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 262;
                this.extendsClause();
                }
            }

            this.state = 266;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 265;
                this.implementsClause();
                }
            }

            this.state = 271;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 16711937) !== 0) || _la === 90) {
                {
                {
                this.state = 268;
                this.classMember();
                }
                }
                this.state = 273;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 274;
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
            this.state = 276;
            this.match(StructuredTextParser.STRUCT);
            this.state = 277;
            this.match(StructuredTextParser.ID);
            this.state = 281;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 255) !== 0)) {
                {
                {
                this.state = 278;
                this.varDeclSection();
                }
                }
                this.state = 283;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 284;
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
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 286;
            this.match(StructuredTextParser.ENUM);
            this.state = 287;
            this.match(StructuredTextParser.ID);
            this.state = 288;
            this.enumMemberList();
            this.state = 289;
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
            this.state = 291;
            this.match(StructuredTextParser.NAMESPACE);
            this.state = 292;
            this.match(StructuredTextParser.ID);
            this.state = 296;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 85) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 85) !== 0)) {
                {
                {
                this.state = 293;
                this.namespaceMember();
                }
                }
                this.state = 298;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 299;
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
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 301;
            this.match(StructuredTextParser.TYPEDEF);
            this.state = 302;
            this.match(StructuredTextParser.ID);
            this.state = 303;
            this.match(StructuredTextParser.T__1);
            this.state = 304;
            this.type_();
            this.state = 305;
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
    public implementsClause(): ImplementsClauseContext {
        let localContext = new ImplementsClauseContext(this.context, this.state);
        this.enterRule(localContext, 22, StructuredTextParser.RULE_implementsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 307;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 308;
            this.match(StructuredTextParser.ID);
            this.state = 313;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 309;
                this.match(StructuredTextParser.T__3);
                this.state = 310;
                this.match(StructuredTextParser.ID);
                }
                }
                this.state = 315;
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
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 316;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 317;
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
    public functionBlockMember(): FunctionBlockMemberContext {
        let localContext = new FunctionBlockMemberContext(this.context, this.state);
        this.enterRule(localContext, 26, StructuredTextParser.RULE_functionBlockMember);
        try {
            this.state = 322;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 35, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 319;
                this.varDeclSection();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 320;
                this.method();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 321;
                this.property();
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
    public interfaceMember(): InterfaceMemberContext {
        let localContext = new InterfaceMemberContext(this.context, this.state);
        this.enterRule(localContext, 28, StructuredTextParser.RULE_interfaceMember);
        try {
            this.state = 327;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 324;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 325;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 326;
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
    public classMember(): ClassMemberContext {
        let localContext = new ClassMemberContext(this.context, this.state);
        this.enterRule(localContext, 30, StructuredTextParser.RULE_classMember);
        try {
            this.state = 332;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 329;
                this.varDeclSection();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 330;
                this.method();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 331;
                this.property();
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
        this.enterRule(localContext, 32, StructuredTextParser.RULE_namespaceMember);
        try {
            this.state = 341;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 334;
                this.program();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 335;
                this.functionBlock();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 336;
                this.function_();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 337;
                this.classDecl();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 338;
                this.structDecl();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 339;
                this.enumDecl();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 340;
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
        this.enterRule(localContext, 34, StructuredTextParser.RULE_varDeclSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 343;
            this.varSectionType();
            this.state = 345;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 344;
                this.varDecl();
                }
                }
                this.state = 347;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 40 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 18431) !== 0));
            this.state = 349;
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
            this.state = 351;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 255) !== 0))) {
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
            this.state = 354;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 353;
                this.attribute();
                }
            }

            this.state = 357;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 15) !== 0)) {
                {
                this.state = 356;
                this.accessModifier();
                }
            }

            this.state = 362;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 127) !== 0)) {
                {
                {
                this.state = 359;
                this.modifier();
                }
                }
                this.state = 364;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 365;
            this.match(StructuredTextParser.ID);
            this.state = 366;
            this.match(StructuredTextParser.T__0);
            this.state = 368;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 114) {
                {
                this.state = 367;
                this.match(StructuredTextParser.REFERENCE_TO);
                }
            }

            this.state = 371;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 71) {
                {
                this.state = 370;
                this.arraySpec();
                }
            }

            this.state = 373;
            this.type_();
            this.state = 376;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 374;
                this.match(StructuredTextParser.T__4);
                this.state = 375;
                this.exprOrArrayInit();
                }
            }

            this.state = 378;
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
        this.enterRule(localContext, 40, StructuredTextParser.RULE_arraySpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 380;
            this.match(StructuredTextParser.ARRAY);
            this.state = 381;
            this.match(StructuredTextParser.T__5);
            this.state = 382;
            this.match(StructuredTextParser.NUMBER);
            this.state = 383;
            this.match(StructuredTextParser.T__6);
            this.state = 384;
            this.match(StructuredTextParser.NUMBER);
            this.state = 385;
            this.match(StructuredTextParser.T__7);
            this.state = 386;
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
        this.enterRule(localContext, 42, StructuredTextParser.RULE_exprOrArrayInit);
        try {
            this.state = 390;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__27:
            case StructuredTextParser.BOOL:
            case StructuredTextParser.ID:
            case StructuredTextParser.NUMBER:
            case StructuredTextParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 388;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__5:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 389;
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
        this.enterRule(localContext, 44, StructuredTextParser.RULE_arrayInit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 392;
            this.match(StructuredTextParser.T__5);
            this.state = 393;
            this.expr(0);
            this.state = 398;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 394;
                this.match(StructuredTextParser.T__3);
                this.state = 395;
                this.expr(0);
                }
                }
                this.state = 400;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 401;
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
        this.enterRule(localContext, 46, StructuredTextParser.RULE_type);
        try {
            this.state = 405;
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
                this.state = 403;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 404;
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
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 407;
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
        this.enterRule(localContext, 50, StructuredTextParser.RULE_statementSection);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 412;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 409;
                    this.statement();
                    }
                    }
                }
                this.state = 414;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
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
        this.enterRule(localContext, 52, StructuredTextParser.RULE_statement);
        try {
            this.state = 426;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 415;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 416;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 417;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 418;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 419;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 420;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 421;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 422;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 423;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 424;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 425;
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
        this.enterRule(localContext, 54, StructuredTextParser.RULE_assignment);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 428;
            this.match(StructuredTextParser.ID);
            this.state = 430;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 429;
                this.arrayIndex();
                }
            }

            this.state = 432;
            this.match(StructuredTextParser.T__4);
            this.state = 433;
            this.expr(0);
            this.state = 434;
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
        this.enterRule(localContext, 56, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 436;
            this.match(StructuredTextParser.T__5);
            this.state = 437;
            this.expr(0);
            this.state = 438;
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
            this.state = 440;
            this.match(StructuredTextParser.ID);
            this.state = 441;
            this.match(StructuredTextParser.T__27);
            this.state = 443;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 28 || ((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 15) !== 0)) {
                {
                this.state = 442;
                this.argumentList();
                }
            }

            this.state = 445;
            this.match(StructuredTextParser.T__28);
            this.state = 448;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
            case 1:
                {
                this.state = 446;
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
        this.enterRule(localContext, 60, StructuredTextParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 450;
            this.argument();
            this.state = 455;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 451;
                this.match(StructuredTextParser.T__3);
                this.state = 452;
                this.argument();
                }
                }
                this.state = 457;
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
            this.state = 462;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 458;
                this.match(StructuredTextParser.ID);
                this.state = 459;
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 30)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 460;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 461;
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
            this.state = 464;
            this.match(StructuredTextParser.IF);
            this.state = 465;
            this.expr(0);
            this.state = 466;
            this.match(StructuredTextParser.THEN);
            this.state = 467;
            this.statementSection();
            this.state = 475;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 67) {
                {
                {
                this.state = 468;
                this.match(StructuredTextParser.ELSIF);
                this.state = 469;
                this.expr(0);
                this.state = 470;
                this.match(StructuredTextParser.THEN);
                this.state = 471;
                this.statementSection();
                }
                }
                this.state = 477;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 480;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 68) {
                {
                this.state = 478;
                this.match(StructuredTextParser.ELSE);
                this.state = 479;
                this.statementSection();
                }
            }

            this.state = 482;
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
            this.state = 484;
            this.match(StructuredTextParser.CASE);
            this.state = 485;
            this.expr(0);
            this.state = 486;
            this.match(StructuredTextParser.OF);
            this.state = 488;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 487;
                this.caseElement();
                }
                }
                this.state = 490;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 15) !== 0));
            this.state = 494;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 68) {
                {
                this.state = 492;
                this.match(StructuredTextParser.ELSE);
                this.state = 493;
                this.statementSection();
                }
            }

            this.state = 496;
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
            this.state = 498;
            this.caseValue();
            this.state = 503;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 499;
                this.match(StructuredTextParser.T__3);
                this.state = 500;
                this.caseValue();
                }
                }
                this.state = 505;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 506;
            this.match(StructuredTextParser.T__0);
            this.state = 507;
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
            this.state = 509;
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
        this.enterRule(localContext, 72, StructuredTextParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 511;
            this.match(StructuredTextParser.WHILE);
            this.state = 512;
            this.expr(0);
            this.state = 513;
            this.match(StructuredTextParser.DO);
            this.state = 514;
            this.statementSection();
            this.state = 515;
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
            this.state = 517;
            this.match(StructuredTextParser.REPEAT);
            this.state = 518;
            this.statementSection();
            this.state = 519;
            this.match(StructuredTextParser.UNTIL);
            this.state = 520;
            this.expr(0);
            this.state = 521;
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
            this.state = 523;
            this.match(StructuredTextParser.FOR);
            this.state = 524;
            this.match(StructuredTextParser.ID);
            this.state = 525;
            this.match(StructuredTextParser.T__4);
            this.state = 526;
            this.expr(0);
            this.state = 527;
            this.match(StructuredTextParser.TO);
            this.state = 528;
            this.expr(0);
            this.state = 531;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 82) {
                {
                this.state = 529;
                this.match(StructuredTextParser.BY);
                this.state = 530;
                this.expr(0);
                }
            }

            this.state = 533;
            this.match(StructuredTextParser.DO);
            this.state = 534;
            this.statementSection();
            this.state = 535;
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
            this.state = 537;
            this.match(StructuredTextParser.RETURN);
            this.state = 538;
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
            this.state = 540;
            this.match(StructuredTextParser.EXIT);
            this.state = 541;
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
            this.state = 543;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 544;
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
        let _startState = 84;
        this.enterRecursionRule(localContext, 84, StructuredTextParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 558;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__27:
                {
                this.state = 547;
                this.match(StructuredTextParser.T__27);
                this.state = 548;
                this.expr(0);
                this.state = 549;
                this.match(StructuredTextParser.T__28);
                }
                break;
            case StructuredTextParser.NUMBER:
                {
                this.state = 551;
                this.match(StructuredTextParser.NUMBER);
                }
                break;
            case StructuredTextParser.BOOL:
                {
                this.state = 552;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case StructuredTextParser.STRING_LITERAL:
                {
                this.state = 553;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            case StructuredTextParser.ID:
                {
                this.state = 554;
                this.match(StructuredTextParser.ID);
                this.state = 556;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
                case 1:
                    {
                    this.state = 555;
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
            this.state = 574;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 65, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 572;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 560;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 561;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 31 || _la === 32 || _la === 115)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 562;
                        this.expr(10);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 563;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 564;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 33 || _la === 34)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 565;
                        this.expr(9);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 566;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 567;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 2 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 31) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 568;
                        this.expr(8);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 569;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 570;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 571;
                        this.expr(7);
                        }
                        break;
                    }
                    }
                }
                this.state = 576;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 65, this.context);
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
            this.state = 588;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 85) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 1365) !== 0)) {
                {
                this.state = 586;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 66, this.context) ) {
                case 1:
                    {
                    this.state = 577;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 578;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 579;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 580;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 581;
                    this.classDecl();
                    }
                    break;
                case 6:
                    {
                    this.state = 582;
                    this.structDecl();
                    }
                    break;
                case 7:
                    {
                    this.state = 583;
                    this.enumDecl();
                    }
                    break;
                case 8:
                    {
                    this.state = 584;
                    this.namespaceDecl();
                    }
                    break;
                case 9:
                    {
                    this.state = 585;
                    this.typeDefDecl();
                    }
                    break;
                }
                }
                this.state = 590;
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
            this.state = 599;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 68, this.context) ) {
            case 1:
                {
                this.state = 591;
                this.getter();
                }
                break;
            case 2:
                {
                this.state = 592;
                this.setter();
                }
                break;
            case 3:
                {
                this.state = 593;
                this.getter();
                this.state = 594;
                this.setter();
                }
                break;
            case 4:
                {
                this.state = 596;
                this.setter();
                this.state = 597;
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
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 601;
            this.match(StructuredTextParser.GET);
            this.state = 602;
            this.statementSection();
            this.state = 603;
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
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 605;
            this.match(StructuredTextParser.SET);
            this.state = 606;
            this.statementSection();
            this.state = 607;
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
            this.state = 609;
            this.match(StructuredTextParser.T__39);
            this.state = 610;
            this.match(StructuredTextParser.ID);
            this.state = 612;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 28) {
                {
                this.state = 611;
                this.attributeArgList();
                }
            }

            this.state = 614;
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
        this.enterRule(localContext, 96, StructuredTextParser.RULE_attributeArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 616;
            this.match(StructuredTextParser.T__27);
            this.state = 617;
            this.attributeArg();
            this.state = 622;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 618;
                this.match(StructuredTextParser.T__3);
                this.state = 619;
                this.attributeArg();
                }
                }
                this.state = 624;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 625;
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
        this.enterRule(localContext, 98, StructuredTextParser.RULE_attributeArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 627;
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
        this.enterRule(localContext, 100, StructuredTextParser.RULE_accessModifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 629;
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
        this.enterRule(localContext, 102, StructuredTextParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 631;
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
        this.enterRule(localContext, 104, StructuredTextParser.RULE_enumMemberList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 633;
            this.match(StructuredTextParser.ID);
            this.state = 638;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 634;
                this.match(StructuredTextParser.T__3);
                this.state = 635;
                this.match(StructuredTextParser.ID);
                }
                }
                this.state = 640;
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
        4,1,121,642,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,1,0,1,0,1,0,3,0,110,8,0,1,0,3,0,113,8,0,1,0,5,0,116,8,0,10,0,
        12,0,119,9,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,129,8,1,1,1,3,1,
        132,8,1,1,1,5,1,135,8,1,10,1,12,1,138,9,1,1,1,1,1,1,1,1,2,3,2,144,
        8,2,1,2,1,2,3,2,148,8,2,1,2,5,2,151,8,2,10,2,12,2,154,9,2,1,2,1,
        2,3,2,158,8,2,1,2,3,2,161,8,2,1,2,5,2,164,8,2,10,2,12,2,167,9,2,
        1,2,1,2,1,2,1,3,3,3,173,8,3,1,3,1,3,3,3,177,8,3,1,3,5,3,180,8,3,
        10,3,12,3,183,9,3,1,3,1,3,1,3,1,3,5,3,189,8,3,10,3,12,3,192,9,3,
        1,3,1,3,1,3,1,4,3,4,198,8,4,1,4,1,4,3,4,202,8,4,1,4,5,4,205,8,4,
        10,4,12,4,208,9,4,1,4,1,4,1,4,3,4,213,8,4,1,4,5,4,216,8,4,10,4,12,
        4,219,9,4,1,4,1,4,1,4,1,5,3,5,225,8,5,1,5,1,5,3,5,229,8,5,1,5,5,
        5,232,8,5,10,5,12,5,235,9,5,1,5,1,5,3,5,239,8,5,1,5,5,5,242,8,5,
        10,5,12,5,245,9,5,1,5,1,5,1,6,3,6,250,8,6,1,6,1,6,3,6,254,8,6,1,
        6,5,6,257,8,6,10,6,12,6,260,9,6,1,6,1,6,3,6,264,8,6,1,6,3,6,267,
        8,6,1,6,5,6,270,8,6,10,6,12,6,273,9,6,1,6,1,6,1,7,1,7,1,7,5,7,280,
        8,7,10,7,12,7,283,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,5,
        9,295,8,9,10,9,12,9,298,9,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,
        1,11,1,11,1,11,1,11,5,11,312,8,11,10,11,12,11,315,9,11,1,12,1,12,
        1,12,1,13,1,13,1,13,3,13,323,8,13,1,14,1,14,1,14,3,14,328,8,14,1,
        15,1,15,1,15,3,15,333,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,
        16,342,8,16,1,17,1,17,4,17,346,8,17,11,17,12,17,347,1,17,1,17,1,
        18,1,18,1,19,3,19,355,8,19,1,19,3,19,358,8,19,1,19,5,19,361,8,19,
        10,19,12,19,364,9,19,1,19,1,19,1,19,3,19,369,8,19,1,19,3,19,372,
        8,19,1,19,1,19,1,19,3,19,377,8,19,1,19,1,19,1,20,1,20,1,20,1,20,
        1,20,1,20,1,20,1,20,1,21,1,21,3,21,391,8,21,1,22,1,22,1,22,1,22,
        5,22,397,8,22,10,22,12,22,400,9,22,1,22,1,22,1,23,1,23,3,23,406,
        8,23,1,24,1,24,1,25,5,25,411,8,25,10,25,12,25,414,9,25,1,26,1,26,
        1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,427,8,26,1,27,
        1,27,3,27,431,8,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,29,
        1,29,1,29,3,29,444,8,29,1,29,1,29,1,29,3,29,449,8,29,1,30,1,30,1,
        30,5,30,454,8,30,10,30,12,30,457,9,30,1,31,1,31,1,31,1,31,3,31,463,
        8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,5,32,474,8,32,
        10,32,12,32,477,9,32,1,32,1,32,3,32,481,8,32,1,32,1,32,1,33,1,33,
        1,33,1,33,4,33,489,8,33,11,33,12,33,490,1,33,1,33,3,33,495,8,33,
        1,33,1,33,1,34,1,34,1,34,5,34,502,8,34,10,34,12,34,505,9,34,1,34,
        1,34,1,34,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,
        1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,3,38,532,
        8,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,40,1,41,1,41,
        1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,557,
        8,42,3,42,559,8,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,
        1,42,1,42,1,42,5,42,573,8,42,10,42,12,42,576,9,42,1,43,1,43,1,43,
        1,43,1,43,1,43,1,43,1,43,1,43,5,43,587,8,43,10,43,12,43,590,9,43,
        1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,3,44,600,8,44,1,45,1,45,
        1,45,1,45,1,46,1,46,1,46,1,46,1,47,1,47,1,47,3,47,613,8,47,1,47,
        1,47,1,48,1,48,1,48,1,48,5,48,621,8,48,10,48,12,48,624,9,48,1,48,
        1,48,1,49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,52,5,52,637,8,52,
        10,52,12,52,640,9,52,1,52,0,1,84,53,0,2,4,6,8,10,12,14,16,18,20,
        22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
        66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,0,
        11,1,0,56,63,1,0,9,27,2,0,5,5,30,30,1,0,116,119,2,0,31,32,115,115,
        1,0,33,34,2,0,2,2,35,39,1,0,87,89,1,0,117,119,1,0,110,113,1,0,103,
        109,691,0,106,1,0,0,0,2,123,1,0,0,0,4,143,1,0,0,0,6,172,1,0,0,0,
        8,197,1,0,0,0,10,224,1,0,0,0,12,249,1,0,0,0,14,276,1,0,0,0,16,286,
        1,0,0,0,18,291,1,0,0,0,20,301,1,0,0,0,22,307,1,0,0,0,24,316,1,0,
        0,0,26,322,1,0,0,0,28,327,1,0,0,0,30,332,1,0,0,0,32,341,1,0,0,0,
        34,343,1,0,0,0,36,351,1,0,0,0,38,354,1,0,0,0,40,380,1,0,0,0,42,390,
        1,0,0,0,44,392,1,0,0,0,46,405,1,0,0,0,48,407,1,0,0,0,50,412,1,0,
        0,0,52,426,1,0,0,0,54,428,1,0,0,0,56,436,1,0,0,0,58,440,1,0,0,0,
        60,450,1,0,0,0,62,462,1,0,0,0,64,464,1,0,0,0,66,484,1,0,0,0,68,498,
        1,0,0,0,70,509,1,0,0,0,72,511,1,0,0,0,74,517,1,0,0,0,76,523,1,0,
        0,0,78,537,1,0,0,0,80,540,1,0,0,0,82,543,1,0,0,0,84,558,1,0,0,0,
        86,588,1,0,0,0,88,599,1,0,0,0,90,601,1,0,0,0,92,605,1,0,0,0,94,609,
        1,0,0,0,96,616,1,0,0,0,98,627,1,0,0,0,100,629,1,0,0,0,102,631,1,
        0,0,0,104,633,1,0,0,0,106,107,5,42,0,0,107,109,5,117,0,0,108,110,
        3,22,11,0,109,108,1,0,0,0,109,110,1,0,0,0,110,112,1,0,0,0,111,113,
        3,24,12,0,112,111,1,0,0,0,112,113,1,0,0,0,113,117,1,0,0,0,114,116,
        3,34,17,0,115,114,1,0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,117,118,
        1,0,0,0,118,120,1,0,0,0,119,117,1,0,0,0,120,121,3,50,25,0,121,122,
        5,43,0,0,122,1,1,0,0,0,123,124,5,46,0,0,124,125,5,117,0,0,125,126,
        5,1,0,0,126,128,3,46,23,0,127,129,3,22,11,0,128,127,1,0,0,0,128,
        129,1,0,0,0,129,131,1,0,0,0,130,132,3,24,12,0,131,130,1,0,0,0,131,
        132,1,0,0,0,132,136,1,0,0,0,133,135,3,34,17,0,134,133,1,0,0,0,135,
        138,1,0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,137,139,1,0,0,0,138,
        136,1,0,0,0,139,140,3,50,25,0,140,141,5,47,0,0,141,3,1,0,0,0,142,
        144,3,94,47,0,143,142,1,0,0,0,143,144,1,0,0,0,144,145,1,0,0,0,145,
        147,5,44,0,0,146,148,3,100,50,0,147,146,1,0,0,0,147,148,1,0,0,0,
        148,152,1,0,0,0,149,151,3,102,51,0,150,149,1,0,0,0,151,154,1,0,0,
        0,152,150,1,0,0,0,152,153,1,0,0,0,153,155,1,0,0,0,154,152,1,0,0,
        0,155,157,5,117,0,0,156,158,3,22,11,0,157,156,1,0,0,0,157,158,1,
        0,0,0,158,160,1,0,0,0,159,161,3,24,12,0,160,159,1,0,0,0,160,161,
        1,0,0,0,161,165,1,0,0,0,162,164,3,26,13,0,163,162,1,0,0,0,164,167,
        1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,168,1,0,0,0,167,165,
        1,0,0,0,168,169,3,50,25,0,169,170,5,45,0,0,170,5,1,0,0,0,171,173,
        3,94,47,0,172,171,1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,176,
        5,48,0,0,175,177,3,100,50,0,176,175,1,0,0,0,176,177,1,0,0,0,177,
        181,1,0,0,0,178,180,3,102,51,0,179,178,1,0,0,0,180,183,1,0,0,0,181,
        179,1,0,0,0,181,182,1,0,0,0,182,184,1,0,0,0,183,181,1,0,0,0,184,
        185,5,117,0,0,185,186,5,1,0,0,186,190,3,46,23,0,187,189,3,34,17,
        0,188,187,1,0,0,0,189,192,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,
        0,191,193,1,0,0,0,192,190,1,0,0,0,193,194,3,88,44,0,194,195,5,49,
        0,0,195,7,1,0,0,0,196,198,3,94,47,0,197,196,1,0,0,0,197,198,1,0,
        0,0,198,199,1,0,0,0,199,201,5,90,0,0,200,202,3,100,50,0,201,200,
        1,0,0,0,201,202,1,0,0,0,202,206,1,0,0,0,203,205,3,102,51,0,204,203,
        1,0,0,0,205,208,1,0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,209,
        1,0,0,0,208,206,1,0,0,0,209,212,5,117,0,0,210,211,5,1,0,0,211,213,
        3,46,23,0,212,210,1,0,0,0,212,213,1,0,0,0,213,217,1,0,0,0,214,216,
        3,34,17,0,215,214,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,
        1,0,0,0,218,220,1,0,0,0,219,217,1,0,0,0,220,221,3,50,25,0,221,222,
        5,91,0,0,222,9,1,0,0,0,223,225,3,94,47,0,224,223,1,0,0,0,224,225,
        1,0,0,0,225,226,1,0,0,0,226,228,5,92,0,0,227,229,3,100,50,0,228,
        227,1,0,0,0,228,229,1,0,0,0,229,233,1,0,0,0,230,232,3,102,51,0,231,
        230,1,0,0,0,232,235,1,0,0,0,233,231,1,0,0,0,233,234,1,0,0,0,234,
        236,1,0,0,0,235,233,1,0,0,0,236,238,5,117,0,0,237,239,3,24,12,0,
        238,237,1,0,0,0,238,239,1,0,0,0,239,243,1,0,0,0,240,242,3,28,14,
        0,241,240,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,
        0,244,246,1,0,0,0,245,243,1,0,0,0,246,247,5,93,0,0,247,11,1,0,0,
        0,248,250,3,94,47,0,249,248,1,0,0,0,249,250,1,0,0,0,250,251,1,0,
        0,0,251,253,5,94,0,0,252,254,3,100,50,0,253,252,1,0,0,0,253,254,
        1,0,0,0,254,258,1,0,0,0,255,257,3,102,51,0,256,255,1,0,0,0,257,260,
        1,0,0,0,258,256,1,0,0,0,258,259,1,0,0,0,259,261,1,0,0,0,260,258,
        1,0,0,0,261,263,5,117,0,0,262,264,3,24,12,0,263,262,1,0,0,0,263,
        264,1,0,0,0,264,266,1,0,0,0,265,267,3,22,11,0,266,265,1,0,0,0,266,
        267,1,0,0,0,267,271,1,0,0,0,268,270,3,30,15,0,269,268,1,0,0,0,270,
        273,1,0,0,0,271,269,1,0,0,0,271,272,1,0,0,0,272,274,1,0,0,0,273,
        271,1,0,0,0,274,275,5,95,0,0,275,13,1,0,0,0,276,277,5,96,0,0,277,
        281,5,117,0,0,278,280,3,34,17,0,279,278,1,0,0,0,280,283,1,0,0,0,
        281,279,1,0,0,0,281,282,1,0,0,0,282,284,1,0,0,0,283,281,1,0,0,0,
        284,285,5,97,0,0,285,15,1,0,0,0,286,287,5,98,0,0,287,288,5,117,0,
        0,288,289,3,104,52,0,289,290,5,99,0,0,290,17,1,0,0,0,291,292,5,100,
        0,0,292,296,5,117,0,0,293,295,3,32,16,0,294,293,1,0,0,0,295,298,
        1,0,0,0,296,294,1,0,0,0,296,297,1,0,0,0,297,299,1,0,0,0,298,296,
        1,0,0,0,299,300,5,101,0,0,300,19,1,0,0,0,301,302,5,102,0,0,302,303,
        5,117,0,0,303,304,5,2,0,0,304,305,3,46,23,0,305,306,5,3,0,0,306,
        21,1,0,0,0,307,308,5,50,0,0,308,313,5,117,0,0,309,310,5,4,0,0,310,
        312,5,117,0,0,311,309,1,0,0,0,312,315,1,0,0,0,313,311,1,0,0,0,313,
        314,1,0,0,0,314,23,1,0,0,0,315,313,1,0,0,0,316,317,5,51,0,0,317,
        318,5,117,0,0,318,25,1,0,0,0,319,323,3,34,17,0,320,323,3,8,4,0,321,
        323,3,6,3,0,322,319,1,0,0,0,322,320,1,0,0,0,322,321,1,0,0,0,323,
        27,1,0,0,0,324,328,3,8,4,0,325,328,3,6,3,0,326,328,3,34,17,0,327,
        324,1,0,0,0,327,325,1,0,0,0,327,326,1,0,0,0,328,29,1,0,0,0,329,333,
        3,34,17,0,330,333,3,8,4,0,331,333,3,6,3,0,332,329,1,0,0,0,332,330,
        1,0,0,0,332,331,1,0,0,0,333,31,1,0,0,0,334,342,3,0,0,0,335,342,3,
        4,2,0,336,342,3,2,1,0,337,342,3,12,6,0,338,342,3,14,7,0,339,342,
        3,16,8,0,340,342,3,10,5,0,341,334,1,0,0,0,341,335,1,0,0,0,341,336,
        1,0,0,0,341,337,1,0,0,0,341,338,1,0,0,0,341,339,1,0,0,0,341,340,
        1,0,0,0,342,33,1,0,0,0,343,345,3,36,18,0,344,346,3,38,19,0,345,344,
        1,0,0,0,346,347,1,0,0,0,347,345,1,0,0,0,347,348,1,0,0,0,348,349,
        1,0,0,0,349,350,5,64,0,0,350,35,1,0,0,0,351,352,7,0,0,0,352,37,1,
        0,0,0,353,355,3,94,47,0,354,353,1,0,0,0,354,355,1,0,0,0,355,357,
        1,0,0,0,356,358,3,100,50,0,357,356,1,0,0,0,357,358,1,0,0,0,358,362,
        1,0,0,0,359,361,3,102,51,0,360,359,1,0,0,0,361,364,1,0,0,0,362,360,
        1,0,0,0,362,363,1,0,0,0,363,365,1,0,0,0,364,362,1,0,0,0,365,366,
        5,117,0,0,366,368,5,1,0,0,367,369,5,114,0,0,368,367,1,0,0,0,368,
        369,1,0,0,0,369,371,1,0,0,0,370,372,3,40,20,0,371,370,1,0,0,0,371,
        372,1,0,0,0,372,373,1,0,0,0,373,376,3,46,23,0,374,375,5,5,0,0,375,
        377,3,42,21,0,376,374,1,0,0,0,376,377,1,0,0,0,377,378,1,0,0,0,378,
        379,5,3,0,0,379,39,1,0,0,0,380,381,5,71,0,0,381,382,5,6,0,0,382,
        383,5,118,0,0,383,384,5,7,0,0,384,385,5,118,0,0,385,386,5,8,0,0,
        386,387,5,72,0,0,387,41,1,0,0,0,388,391,3,84,42,0,389,391,3,44,22,
        0,390,388,1,0,0,0,390,389,1,0,0,0,391,43,1,0,0,0,392,393,5,6,0,0,
        393,398,3,84,42,0,394,395,5,4,0,0,395,397,3,84,42,0,396,394,1,0,
        0,0,397,400,1,0,0,0,398,396,1,0,0,0,398,399,1,0,0,0,399,401,1,0,
        0,0,400,398,1,0,0,0,401,402,5,8,0,0,402,45,1,0,0,0,403,406,3,48,
        24,0,404,406,5,117,0,0,405,403,1,0,0,0,405,404,1,0,0,0,406,47,1,
        0,0,0,407,408,7,1,0,0,408,49,1,0,0,0,409,411,3,52,26,0,410,409,1,
        0,0,0,411,414,1,0,0,0,412,410,1,0,0,0,412,413,1,0,0,0,413,51,1,0,
        0,0,414,412,1,0,0,0,415,427,3,54,27,0,416,427,3,64,32,0,417,427,
        3,66,33,0,418,427,3,72,36,0,419,427,3,74,37,0,420,427,3,76,38,0,
        421,427,3,58,29,0,422,427,3,78,39,0,423,427,3,80,40,0,424,427,3,
        82,41,0,425,427,5,3,0,0,426,415,1,0,0,0,426,416,1,0,0,0,426,417,
        1,0,0,0,426,418,1,0,0,0,426,419,1,0,0,0,426,420,1,0,0,0,426,421,
        1,0,0,0,426,422,1,0,0,0,426,423,1,0,0,0,426,424,1,0,0,0,426,425,
        1,0,0,0,427,53,1,0,0,0,428,430,5,117,0,0,429,431,3,56,28,0,430,429,
        1,0,0,0,430,431,1,0,0,0,431,432,1,0,0,0,432,433,5,5,0,0,433,434,
        3,84,42,0,434,435,5,3,0,0,435,55,1,0,0,0,436,437,5,6,0,0,437,438,
        3,84,42,0,438,439,5,8,0,0,439,57,1,0,0,0,440,441,5,117,0,0,441,443,
        5,28,0,0,442,444,3,60,30,0,443,442,1,0,0,0,443,444,1,0,0,0,444,445,
        1,0,0,0,445,448,5,29,0,0,446,449,5,3,0,0,447,449,1,0,0,0,448,446,
        1,0,0,0,448,447,1,0,0,0,449,59,1,0,0,0,450,455,3,62,31,0,451,452,
        5,4,0,0,452,454,3,62,31,0,453,451,1,0,0,0,454,457,1,0,0,0,455,453,
        1,0,0,0,455,456,1,0,0,0,456,61,1,0,0,0,457,455,1,0,0,0,458,459,5,
        117,0,0,459,460,7,2,0,0,460,463,3,84,42,0,461,463,3,84,42,0,462,
        458,1,0,0,0,462,461,1,0,0,0,463,63,1,0,0,0,464,465,5,65,0,0,465,
        466,3,84,42,0,466,467,5,66,0,0,467,475,3,50,25,0,468,469,5,67,0,
        0,469,470,3,84,42,0,470,471,5,66,0,0,471,472,3,50,25,0,472,474,1,
        0,0,0,473,468,1,0,0,0,474,477,1,0,0,0,475,473,1,0,0,0,475,476,1,
        0,0,0,476,480,1,0,0,0,477,475,1,0,0,0,478,479,5,68,0,0,479,481,3,
        50,25,0,480,478,1,0,0,0,480,481,1,0,0,0,481,482,1,0,0,0,482,483,
        5,69,0,0,483,65,1,0,0,0,484,485,5,70,0,0,485,486,3,84,42,0,486,488,
        5,72,0,0,487,489,3,68,34,0,488,487,1,0,0,0,489,490,1,0,0,0,490,488,
        1,0,0,0,490,491,1,0,0,0,491,494,1,0,0,0,492,493,5,68,0,0,493,495,
        3,50,25,0,494,492,1,0,0,0,494,495,1,0,0,0,495,496,1,0,0,0,496,497,
        5,73,0,0,497,67,1,0,0,0,498,503,3,70,35,0,499,500,5,4,0,0,500,502,
        3,70,35,0,501,499,1,0,0,0,502,505,1,0,0,0,503,501,1,0,0,0,503,504,
        1,0,0,0,504,506,1,0,0,0,505,503,1,0,0,0,506,507,5,1,0,0,507,508,
        3,50,25,0,508,69,1,0,0,0,509,510,7,3,0,0,510,71,1,0,0,0,511,512,
        5,74,0,0,512,513,3,84,42,0,513,514,5,75,0,0,514,515,3,50,25,0,515,
        516,5,76,0,0,516,73,1,0,0,0,517,518,5,77,0,0,518,519,3,50,25,0,519,
        520,5,78,0,0,520,521,3,84,42,0,521,522,5,79,0,0,522,75,1,0,0,0,523,
        524,5,80,0,0,524,525,5,117,0,0,525,526,5,5,0,0,526,527,3,84,42,0,
        527,528,5,81,0,0,528,531,3,84,42,0,529,530,5,82,0,0,530,532,3,84,
        42,0,531,529,1,0,0,0,531,532,1,0,0,0,532,533,1,0,0,0,533,534,5,75,
        0,0,534,535,3,50,25,0,535,536,5,83,0,0,536,77,1,0,0,0,537,538,5,
        84,0,0,538,539,5,3,0,0,539,79,1,0,0,0,540,541,5,85,0,0,541,542,5,
        3,0,0,542,81,1,0,0,0,543,544,5,86,0,0,544,545,5,3,0,0,545,83,1,0,
        0,0,546,547,6,42,-1,0,547,548,5,28,0,0,548,549,3,84,42,0,549,550,
        5,29,0,0,550,559,1,0,0,0,551,559,5,118,0,0,552,559,5,116,0,0,553,
        559,5,119,0,0,554,556,5,117,0,0,555,557,3,56,28,0,556,555,1,0,0,
        0,556,557,1,0,0,0,557,559,1,0,0,0,558,546,1,0,0,0,558,551,1,0,0,
        0,558,552,1,0,0,0,558,553,1,0,0,0,558,554,1,0,0,0,559,574,1,0,0,
        0,560,561,10,9,0,0,561,562,7,4,0,0,562,573,3,84,42,10,563,564,10,
        8,0,0,564,565,7,5,0,0,565,573,3,84,42,9,566,567,10,7,0,0,567,568,
        7,6,0,0,568,573,3,84,42,8,569,570,10,6,0,0,570,571,7,7,0,0,571,573,
        3,84,42,7,572,560,1,0,0,0,572,563,1,0,0,0,572,566,1,0,0,0,572,569,
        1,0,0,0,573,576,1,0,0,0,574,572,1,0,0,0,574,575,1,0,0,0,575,85,1,
        0,0,0,576,574,1,0,0,0,577,587,3,0,0,0,578,587,3,4,2,0,579,587,3,
        2,1,0,580,587,3,10,5,0,581,587,3,12,6,0,582,587,3,14,7,0,583,587,
        3,16,8,0,584,587,3,18,9,0,585,587,3,20,10,0,586,577,1,0,0,0,586,
        578,1,0,0,0,586,579,1,0,0,0,586,580,1,0,0,0,586,581,1,0,0,0,586,
        582,1,0,0,0,586,583,1,0,0,0,586,584,1,0,0,0,586,585,1,0,0,0,587,
        590,1,0,0,0,588,586,1,0,0,0,588,589,1,0,0,0,589,87,1,0,0,0,590,588,
        1,0,0,0,591,600,3,90,45,0,592,600,3,92,46,0,593,594,3,90,45,0,594,
        595,3,92,46,0,595,600,1,0,0,0,596,597,3,92,46,0,597,598,3,90,45,
        0,598,600,1,0,0,0,599,591,1,0,0,0,599,592,1,0,0,0,599,593,1,0,0,
        0,599,596,1,0,0,0,600,89,1,0,0,0,601,602,5,52,0,0,602,603,3,50,25,
        0,603,604,5,53,0,0,604,91,1,0,0,0,605,606,5,54,0,0,606,607,3,50,
        25,0,607,608,5,55,0,0,608,93,1,0,0,0,609,610,5,40,0,0,610,612,5,
        117,0,0,611,613,3,96,48,0,612,611,1,0,0,0,612,613,1,0,0,0,613,614,
        1,0,0,0,614,615,5,41,0,0,615,95,1,0,0,0,616,617,5,28,0,0,617,622,
        3,98,49,0,618,619,5,4,0,0,619,621,3,98,49,0,620,618,1,0,0,0,621,
        624,1,0,0,0,622,620,1,0,0,0,622,623,1,0,0,0,623,625,1,0,0,0,624,
        622,1,0,0,0,625,626,5,29,0,0,626,97,1,0,0,0,627,628,7,8,0,0,628,
        99,1,0,0,0,629,630,7,9,0,0,630,101,1,0,0,0,631,632,7,10,0,0,632,
        103,1,0,0,0,633,638,5,117,0,0,634,635,5,4,0,0,635,637,5,117,0,0,
        636,634,1,0,0,0,637,640,1,0,0,0,638,636,1,0,0,0,638,639,1,0,0,0,
        639,105,1,0,0,0,640,638,1,0,0,0,72,109,112,117,128,131,136,143,147,
        152,157,160,165,172,176,181,190,197,201,206,212,217,224,228,233,
        238,243,249,253,258,263,266,271,281,296,313,322,327,332,341,347,
        354,357,362,368,371,376,390,398,405,412,426,430,443,448,455,462,
        475,480,490,494,503,531,556,558,572,574,586,588,599,612,622,638
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
    public functionBlockMember(): FunctionBlockMemberContext[];
    public functionBlockMember(i: number): FunctionBlockMemberContext | null;
    public functionBlockMember(i?: number): FunctionBlockMemberContext[] | FunctionBlockMemberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionBlockMemberContext);
        }

        return this.getRuleContext(i, FunctionBlockMemberContext);
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
    public interfaceMember(): InterfaceMemberContext[];
    public interfaceMember(i: number): InterfaceMemberContext | null;
    public interfaceMember(i?: number): InterfaceMemberContext[] | InterfaceMemberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceMemberContext);
        }

        return this.getRuleContext(i, InterfaceMemberContext);
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
    public classMember(): ClassMemberContext[];
    public classMember(i: number): ClassMemberContext | null;
    public classMember(i?: number): ClassMemberContext[] | ClassMemberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassMemberContext);
        }

        return this.getRuleContext(i, ClassMemberContext);
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


export class FunctionBlockMemberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public varDeclSection(): VarDeclSectionContext | null {
        return this.getRuleContext(0, VarDeclSectionContext);
    }
    public method(): MethodContext | null {
        return this.getRuleContext(0, MethodContext);
    }
    public property(): PropertyContext | null {
        return this.getRuleContext(0, PropertyContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_functionBlockMember;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitFunctionBlockMember) {
            return visitor.visitFunctionBlockMember(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InterfaceMemberContext extends antlr.ParserRuleContext {
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
        return StructuredTextParser.RULE_interfaceMember;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitInterfaceMember) {
            return visitor.visitInterfaceMember(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassMemberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public varDeclSection(): VarDeclSectionContext | null {
        return this.getRuleContext(0, VarDeclSectionContext);
    }
    public method(): MethodContext | null {
        return this.getRuleContext(0, MethodContext);
    }
    public property(): PropertyContext | null {
        return this.getRuleContext(0, PropertyContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_classMember;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitClassMember) {
            return visitor.visitClassMember(this);
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
    public VAR_GLOBAL(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.VAR_GLOBAL, 0);
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
