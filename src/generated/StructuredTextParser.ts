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
    public static readonly HEX_NUMBER = 114;
    public static readonly TIME_LITERAL = 115;
    public static readonly STRING_LITERAL = 116;
    public static readonly WS = 117;
    public static readonly COMMENT = 118;
    public static readonly COMMENT_BLOCK = 119;
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
    public static readonly RULE_propertyBody = 44;
    public static readonly RULE_getter = 45;
    public static readonly RULE_setter = 46;
    public static readonly RULE_attribute = 47;
    public static readonly RULE_attributeArgList = 48;
    public static readonly RULE_attributeArg = 49;
    public static readonly RULE_accessModifier = 50;
    public static readonly RULE_modifier = 51;

    public static readonly literalNames = [
        null, "':'", "'('", "','", "')'", "':='", "';'", "'['", "'..'", 
        "']'", "'INT'", "'REAL'", "'BOOL'", "'STRING'", "'DINT'", "'BYTE'", 
        "'WORD'", "'DWORD'", "'SINT'", "'USINT'", "'UINT'", "'UDINT'", "'LINT'", 
        "'ULINT'", "'LREAL'", "'TIME'", "'DATE'", "'TIME_OF_DAY'", "'DATE_AND_TIME'", 
        "'='", "'.'", "'=>'", "'*'", "'/'", "'+'", "'-'", "'<'", "'>'", 
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
        "HEX_NUMBER", "TIME_LITERAL", "STRING_LITERAL", "WS", "COMMENT", 
        "COMMENT_BLOCK"
    ];
    public static readonly ruleNames = [
        "compilationUnit", "program", "function", "method", "property", 
        "functionBlock", "interface", "varGlobalSection", "typeDecl", "enumDecl", 
        "enumMember", "initialValue", "structDecl", "implementsClause", 
        "extendsClause", "member", "varDeclSection", "varSectionType", "varDecl", 
        "arraySpec", "exprOrArrayInit", "arrayInit", "type", "builtinType", 
        "statementSection", "statement", "assignment", "assignTarget", "arrayIndex", 
        "callStatement", "argumentList", "argument", "ifStatement", "caseStatement", 
        "caseElement", "caseValue", "whileStatement", "repeatStatement", 
        "forStatement", "returnStatement", "exitStatement", "continueStatement", 
        "memberQualifier", "expr", "propertyBody", "getter", "setter", "attribute", 
        "attributeArgList", "attributeArg", "accessModifier", "modifier",
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
            this.state = 112;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 4194389) !== 0) || _la === 94 || _la === 109) {
                {
                this.state = 110;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                case 1:
                    {
                    this.state = 104;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 105;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 106;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 107;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 108;
                    this.varGlobalSection();
                    }
                    break;
                case 6:
                    {
                    this.state = 109;
                    this.typeDecl();
                    }
                    break;
                }
                }
                this.state = 114;
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
            this.state = 116;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 115;
                this.attribute();
                }
            }

            this.state = 118;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 120;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 119;
                this.accessModifier();
                }
            }

            this.state = 122;
            this.match(StructuredTextParser.ID);
            this.state = 126;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 123;
                this.varDeclSection();
                }
                }
                this.state = 128;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 129;
            this.statementSection();
            this.state = 130;
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
            this.state = 133;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 132;
                this.attribute();
                }
            }

            this.state = 135;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 137;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 136;
                this.accessModifier();
                }
            }

            this.state = 139;
            this.match(StructuredTextParser.ID);
            this.state = 142;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 140;
                this.match(StructuredTextParser.T__0);
                this.state = 141;
                this.type_();
                }
            }

            this.state = 147;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 144;
                this.varDeclSection();
                }
                }
                this.state = 149;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 150;
            this.statementSection();
            this.state = 151;
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
            this.state = 154;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 153;
                this.attribute();
                }
            }

            this.state = 156;
            this.match(StructuredTextParser.METHOD);
            this.state = 158;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 157;
                this.accessModifier();
                }
            }

            this.state = 163;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 160;
                this.modifier();
                }
                }
                this.state = 165;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 166;
            this.match(StructuredTextParser.ID);
            this.state = 169;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 167;
                this.match(StructuredTextParser.T__0);
                this.state = 168;
                this.type_();
                }
            }

            this.state = 174;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 171;
                this.varDeclSection();
                }
                }
                this.state = 176;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 177;
            this.statementSection();
            this.state = 178;
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
            this.state = 181;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 180;
                this.attribute();
                }
            }

            this.state = 183;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 185;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 184;
                this.accessModifier();
                }
            }

            this.state = 190;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 187;
                this.modifier();
                }
                }
                this.state = 192;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 193;
            this.match(StructuredTextParser.ID);
            this.state = 194;
            this.match(StructuredTextParser.T__0);
            this.state = 195;
            this.type_();
            this.state = 199;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 196;
                this.varDeclSection();
                }
                }
                this.state = 201;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 202;
            this.propertyBody();
            this.state = 203;
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
            this.state = 206;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 205;
                this.attribute();
                }
            }

            this.state = 208;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 210;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 209;
                this.accessModifier();
                }
            }

            this.state = 215;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 212;
                this.modifier();
                }
                }
                this.state = 217;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 218;
            this.match(StructuredTextParser.ID);
            this.state = 220;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 219;
                this.extendsClause();
                }
            }

            this.state = 223;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 222;
                this.implementsClause();
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
            this.statementSection();
            this.state = 232;
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
            this.state = 235;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 234;
                this.attribute();
                }
            }

            this.state = 237;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 239;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 238;
                this.accessModifier();
                }
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
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 29294849) !== 0) || _la === 92) {
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
    public varGlobalSection(): VarGlobalSectionContext {
        let localContext = new VarGlobalSectionContext(this.context, this.state);
        this.enterRule(localContext, 14, StructuredTextParser.RULE_varGlobalSection);
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
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 258;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 257;
                this.accessModifier();
                }
            }

            this.state = 263;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
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
            do {
                {
                {
                this.state = 267;
                this.varDecl();
                }
                }
                this.state = 270;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 41 || _la === 112);
            this.state = 272;
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
            this.state = 304;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 277;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 274;
                    this.attribute();
                    }
                    }
                    this.state = 279;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 280;
                this.match(StructuredTextParser.TYPE);
                this.state = 282;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                    {
                    this.state = 281;
                    this.accessModifier();
                    }
                }

                this.state = 284;
                this.match(StructuredTextParser.ID);
                this.state = 285;
                this.match(StructuredTextParser.T__0);
                this.state = 286;
                this.enumDecl();
                this.state = 287;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 292;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 289;
                    this.attribute();
                    }
                    }
                    this.state = 294;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 295;
                this.match(StructuredTextParser.TYPE);
                this.state = 297;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                    {
                    this.state = 296;
                    this.accessModifier();
                    }
                }

                this.state = 299;
                this.match(StructuredTextParser.ID);
                this.state = 300;
                this.match(StructuredTextParser.T__0);
                this.state = 301;
                this.structDecl();
                this.state = 302;
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
            this.state = 306;
            this.match(StructuredTextParser.T__1);
            this.state = 307;
            this.enumMember();
            this.state = 312;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 308;
                this.match(StructuredTextParser.T__2);
                this.state = 309;
                this.enumMember();
                }
                }
                this.state = 314;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 315;
            this.match(StructuredTextParser.T__3);
            this.state = 317;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536869888) !== 0) || _la === 112) {
                {
                this.state = 316;
                this.type_();
                }
            }

            this.state = 321;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 319;
                this.match(StructuredTextParser.T__4);
                this.state = 320;
                this.initialValue();
                }
            }

            this.state = 323;
            this.match(StructuredTextParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 325;
            this.match(StructuredTextParser.ID);
            this.state = 328;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 326;
                this.match(StructuredTextParser.T__4);
                this.state = 327;
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
            this.state = 330;
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
            this.state = 332;
            this.match(StructuredTextParser.STRUCT);
            this.state = 336;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 41 || _la === 112) {
                {
                {
                this.state = 333;
                this.varDecl();
                }
                }
                this.state = 338;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 339;
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
            this.state = 341;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 342;
            this.type_();
            this.state = 347;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 343;
                this.match(StructuredTextParser.T__2);
                this.state = 344;
                this.type_();
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
        this.enterRule(localContext, 28, StructuredTextParser.RULE_extendsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 350;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 351;
            this.type_();
            this.state = 356;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 352;
                this.match(StructuredTextParser.T__2);
                this.state = 353;
                this.type_();
                }
                }
                this.state = 358;
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
            this.state = 362;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 359;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 360;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 361;
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
            this.state = 364;
            this.varSectionType();
            this.state = 368;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 365;
                this.modifier();
                }
                }
                this.state = 370;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 372;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 371;
                this.varDecl();
                }
                }
                this.state = 374;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 41 || _la === 112);
            this.state = 376;
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
            this.state = 378;
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
        this.enterRule(localContext, 36, StructuredTextParser.RULE_varDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 381;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 380;
                this.attribute();
                }
            }

            this.state = 383;
            this.match(StructuredTextParser.ID);
            this.state = 384;
            this.match(StructuredTextParser.T__0);
            this.state = 386;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 107) {
                {
                this.state = 385;
                this.match(StructuredTextParser.REFERENCE_TO);
                }
            }

            this.state = 389;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 73) {
                {
                this.state = 388;
                this.arraySpec();
                }
            }

            this.state = 391;
            this.type_();
            this.state = 394;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 392;
                this.match(StructuredTextParser.T__4);
                this.state = 393;
                this.exprOrArrayInit();
                }
            }

            this.state = 396;
            this.match(StructuredTextParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 398;
            this.match(StructuredTextParser.ARRAY);
            this.state = 399;
            this.match(StructuredTextParser.T__6);
            this.state = 400;
            this.match(StructuredTextParser.NUMBER);
            this.state = 401;
            this.match(StructuredTextParser.T__7);
            this.state = 402;
            this.match(StructuredTextParser.NUMBER);
            this.state = 403;
            this.match(StructuredTextParser.T__8);
            this.state = 404;
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
            this.state = 408;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__1:
            case StructuredTextParser.BOOL:
            case StructuredTextParser.ID:
            case StructuredTextParser.NUMBER:
            case StructuredTextParser.HEX_NUMBER:
            case StructuredTextParser.TIME_LITERAL:
            case StructuredTextParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 406;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__6:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 407;
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
            this.state = 410;
            this.match(StructuredTextParser.T__6);
            this.state = 411;
            this.expr(0);
            this.state = 416;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 412;
                this.match(StructuredTextParser.T__2);
                this.state = 413;
                this.expr(0);
                }
                }
                this.state = 418;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 419;
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
            this.state = 423;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
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
            case StructuredTextParser.T__27:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 421;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 422;
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
            this.state = 425;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 536869888) !== 0))) {
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
            this.state = 430;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 427;
                    this.statement();
                    }
                    }
                }
                this.state = 432;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
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
            this.state = 444;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 433;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 434;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 435;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 436;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 437;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 438;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 439;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 440;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 441;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 442;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 443;
                this.match(StructuredTextParser.T__5);
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
            this.state = 456;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 446;
                this.assignTarget();
                this.state = 447;
                this.match(StructuredTextParser.T__4);
                this.state = 448;
                this.expr(0);
                this.state = 449;
                this.match(StructuredTextParser.T__5);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 451;
                this.assignTarget();
                this.state = 452;
                this.match(StructuredTextParser.T__28);
                this.state = 453;
                this.expr(0);
                this.state = 454;
                this.match(StructuredTextParser.T__5);
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
            this.state = 468;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 458;
                this.match(StructuredTextParser.ID);
                this.state = 460;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 7) {
                    {
                    this.state = 459;
                    this.arrayIndex();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 462;
                this.memberQualifier();
                this.state = 463;
                this.match(StructuredTextParser.T__29);
                this.state = 464;
                this.match(StructuredTextParser.ID);
                this.state = 466;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 7) {
                    {
                    this.state = 465;
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
            this.state = 470;
            this.match(StructuredTextParser.T__6);
            this.state = 471;
            this.expr(0);
            this.state = 472;
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
    public callStatement(): CallStatementContext {
        let localContext = new CallStatementContext(this.context, this.state);
        this.enterRule(localContext, 58, StructuredTextParser.RULE_callStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 479;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
            case 1:
                {
                this.state = 474;
                this.match(StructuredTextParser.ID);
                }
                break;
            case 2:
                {
                this.state = 475;
                this.memberQualifier();
                this.state = 476;
                this.match(StructuredTextParser.T__29);
                this.state = 477;
                this.match(StructuredTextParser.ID);
                }
                break;
            }
            this.state = 481;
            this.match(StructuredTextParser.T__1);
            this.state = 483;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 63) !== 0)) {
                {
                this.state = 482;
                this.argumentList();
                }
            }

            this.state = 485;
            this.match(StructuredTextParser.T__3);
            this.state = 486;
            this.match(StructuredTextParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 488;
            this.argument();
            this.state = 493;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 489;
                this.match(StructuredTextParser.T__2);
                this.state = 490;
                this.argument();
                }
                }
                this.state = 495;
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
            this.state = 500;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 63, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 496;
                this.match(StructuredTextParser.ID);
                this.state = 497;
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 31)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 498;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 499;
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
            this.state = 502;
            this.match(StructuredTextParser.IF);
            this.state = 503;
            this.expr(0);
            this.state = 504;
            this.match(StructuredTextParser.THEN);
            this.state = 505;
            this.statementSection();
            this.state = 513;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 69) {
                {
                {
                this.state = 506;
                this.match(StructuredTextParser.ELSIF);
                this.state = 507;
                this.expr(0);
                this.state = 508;
                this.match(StructuredTextParser.THEN);
                this.state = 509;
                this.statementSection();
                }
                }
                this.state = 515;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 518;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 70) {
                {
                this.state = 516;
                this.match(StructuredTextParser.ELSE);
                this.state = 517;
                this.statementSection();
                }
            }

            this.state = 520;
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
            this.state = 522;
            this.match(StructuredTextParser.CASE);
            this.state = 523;
            this.expr(0);
            this.state = 524;
            this.match(StructuredTextParser.OF);
            this.state = 526;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 525;
                this.caseElement();
                }
                }
                this.state = 528;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 39) !== 0));
            this.state = 532;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 70) {
                {
                this.state = 530;
                this.match(StructuredTextParser.ELSE);
                this.state = 531;
                this.statementSection();
                }
            }

            this.state = 534;
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
            this.state = 536;
            this.caseValue();
            this.state = 541;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 537;
                this.match(StructuredTextParser.T__2);
                this.state = 538;
                this.caseValue();
                }
                }
                this.state = 543;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 544;
            this.match(StructuredTextParser.T__0);
            this.state = 545;
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
            this.state = 547;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 39) !== 0))) {
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
            this.state = 549;
            this.match(StructuredTextParser.WHILE);
            this.state = 550;
            this.expr(0);
            this.state = 551;
            this.match(StructuredTextParser.DO);
            this.state = 552;
            this.statementSection();
            this.state = 553;
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
            this.state = 555;
            this.match(StructuredTextParser.REPEAT);
            this.state = 556;
            this.statementSection();
            this.state = 557;
            this.match(StructuredTextParser.UNTIL);
            this.state = 558;
            this.expr(0);
            this.state = 559;
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
            this.state = 561;
            this.match(StructuredTextParser.FOR);
            this.state = 562;
            this.match(StructuredTextParser.ID);
            this.state = 563;
            this.match(StructuredTextParser.T__4);
            this.state = 564;
            this.expr(0);
            this.state = 565;
            this.match(StructuredTextParser.TO);
            this.state = 566;
            this.expr(0);
            this.state = 569;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 84) {
                {
                this.state = 567;
                this.match(StructuredTextParser.BY);
                this.state = 568;
                this.expr(0);
                }
            }

            this.state = 571;
            this.match(StructuredTextParser.DO);
            this.state = 572;
            this.statementSection();
            this.state = 573;
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
            this.state = 575;
            this.match(StructuredTextParser.RETURN);
            this.state = 576;
            this.match(StructuredTextParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 578;
            this.match(StructuredTextParser.EXIT);
            this.state = 579;
            this.match(StructuredTextParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 581;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 582;
            this.match(StructuredTextParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 584;
            this.match(StructuredTextParser.ID);
            this.state = 586;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7) {
                {
                this.state = 585;
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
            this.state = 623;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
            case 1:
                {
                this.state = 589;
                this.match(StructuredTextParser.T__1);
                this.state = 590;
                this.expr(0);
                this.state = 591;
                this.match(StructuredTextParser.T__3);
                }
                break;
            case 2:
                {
                this.state = 593;
                this.match(StructuredTextParser.NUMBER);
                }
                break;
            case 3:
                {
                this.state = 594;
                this.match(StructuredTextParser.HEX_NUMBER);
                }
                break;
            case 4:
                {
                this.state = 595;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case 5:
                {
                this.state = 596;
                this.match(StructuredTextParser.TIME_LITERAL);
                }
                break;
            case 6:
                {
                this.state = 597;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            case 7:
                {
                this.state = 598;
                this.match(StructuredTextParser.ID);
                this.state = 599;
                this.match(StructuredTextParser.T__1);
                this.state = 601;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 2 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 63) !== 0)) {
                    {
                    this.state = 600;
                    this.argumentList();
                    }
                }

                this.state = 603;
                this.match(StructuredTextParser.T__3);
                }
                break;
            case 8:
                {
                this.state = 604;
                this.match(StructuredTextParser.ID);
                this.state = 606;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context) ) {
                case 1:
                    {
                    this.state = 605;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            case 9:
                {
                this.state = 608;
                this.memberQualifier();
                this.state = 609;
                this.match(StructuredTextParser.T__29);
                this.state = 610;
                this.match(StructuredTextParser.ID);
                this.state = 611;
                this.match(StructuredTextParser.T__1);
                this.state = 613;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 2 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 63) !== 0)) {
                    {
                    this.state = 612;
                    this.argumentList();
                    }
                }

                this.state = 615;
                this.match(StructuredTextParser.T__3);
                }
                break;
            case 10:
                {
                this.state = 617;
                this.memberQualifier();
                this.state = 618;
                this.match(StructuredTextParser.T__29);
                this.state = 619;
                this.match(StructuredTextParser.ID);
                this.state = 621;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
                case 1:
                    {
                    this.state = 620;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 639;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 77, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 637;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 625;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 626;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 32 || _la === 33 || _la === 108)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 627;
                        this.expr(15);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 628;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 629;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 34 || _la === 35)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 630;
                        this.expr(14);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 631;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 632;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 3969) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 633;
                        this.expr(13);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 634;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 635;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 636;
                        this.expr(12);
                        }
                        break;
                    }
                    }
                }
                this.state = 641;
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
        this.enterRule(localContext, 88, StructuredTextParser.RULE_propertyBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 650;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
            case 1:
                {
                this.state = 642;
                this.getter();
                }
                break;
            case 2:
                {
                this.state = 643;
                this.setter();
                }
                break;
            case 3:
                {
                this.state = 644;
                this.getter();
                this.state = 645;
                this.setter();
                }
                break;
            case 4:
                {
                this.state = 647;
                this.setter();
                this.state = 648;
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
            this.state = 652;
            this.match(StructuredTextParser.GET);
            this.state = 654;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 653;
                this.accessModifier();
                }
            }

            this.state = 656;
            this.statementSection();
            this.state = 657;
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
            this.state = 659;
            this.match(StructuredTextParser.SET);
            this.state = 661;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 660;
                this.accessModifier();
                }
            }

            this.state = 663;
            this.statementSection();
            this.state = 664;
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
            this.state = 666;
            this.match(StructuredTextParser.T__40);
            this.state = 667;
            this.match(StructuredTextParser.ID);
            this.state = 669;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 668;
                this.attributeArgList();
                }
            }

            this.state = 671;
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
            this.state = 673;
            this.match(StructuredTextParser.T__1);
            this.state = 674;
            this.attributeArg();
            this.state = 679;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 675;
                this.match(StructuredTextParser.T__2);
                this.state = 676;
                this.attributeArg();
                }
                }
                this.state = 681;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 682;
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
    public attributeArg(): AttributeArgContext {
        let localContext = new AttributeArgContext(this.context, this.state);
        this.enterRule(localContext, 98, StructuredTextParser.RULE_attributeArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 684;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 19) !== 0))) {
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
            this.state = 686;
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
        this.enterRule(localContext, 102, StructuredTextParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 688;
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
            return this.precpred(this.context, 14);
        case 1:
            return this.precpred(this.context, 13);
        case 2:
            return this.precpred(this.context, 12);
        case 3:
            return this.precpred(this.context, 11);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,119,691,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,1,0,1,
        0,1,0,1,0,1,0,1,0,5,0,111,8,0,10,0,12,0,114,9,0,1,1,3,1,117,8,1,
        1,1,1,1,3,1,121,8,1,1,1,1,1,5,1,125,8,1,10,1,12,1,128,9,1,1,1,1,
        1,1,1,1,2,3,2,134,8,2,1,2,1,2,3,2,138,8,2,1,2,1,2,1,2,3,2,143,8,
        2,1,2,5,2,146,8,2,10,2,12,2,149,9,2,1,2,1,2,1,2,1,3,3,3,155,8,3,
        1,3,1,3,3,3,159,8,3,1,3,5,3,162,8,3,10,3,12,3,165,9,3,1,3,1,3,1,
        3,3,3,170,8,3,1,3,5,3,173,8,3,10,3,12,3,176,9,3,1,3,1,3,1,3,1,4,
        3,4,182,8,4,1,4,1,4,3,4,186,8,4,1,4,5,4,189,8,4,10,4,12,4,192,9,
        4,1,4,1,4,1,4,1,4,5,4,198,8,4,10,4,12,4,201,9,4,1,4,1,4,1,4,1,5,
        3,5,207,8,5,1,5,1,5,3,5,211,8,5,1,5,5,5,214,8,5,10,5,12,5,217,9,
        5,1,5,1,5,3,5,221,8,5,1,5,3,5,224,8,5,1,5,5,5,227,8,5,10,5,12,5,
        230,9,5,1,5,1,5,1,5,1,6,3,6,236,8,6,1,6,1,6,3,6,240,8,6,1,6,1,6,
        3,6,244,8,6,1,6,5,6,247,8,6,10,6,12,6,250,9,6,1,6,1,6,1,7,3,7,255,
        8,7,1,7,1,7,3,7,259,8,7,1,7,5,7,262,8,7,10,7,12,7,265,9,7,1,7,1,
        7,4,7,269,8,7,11,7,12,7,270,1,7,1,7,1,8,5,8,276,8,8,10,8,12,8,279,
        9,8,1,8,1,8,3,8,283,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,291,8,8,10,8,
        12,8,294,9,8,1,8,1,8,3,8,298,8,8,1,8,1,8,1,8,1,8,1,8,3,8,305,8,8,
        1,9,1,9,1,9,1,9,5,9,311,8,9,10,9,12,9,314,9,9,1,9,1,9,3,9,318,8,
        9,1,9,1,9,3,9,322,8,9,1,9,1,9,1,10,1,10,1,10,3,10,329,8,10,1,11,
        1,11,1,12,1,12,5,12,335,8,12,10,12,12,12,338,9,12,1,12,1,12,1,13,
        1,13,1,13,1,13,5,13,346,8,13,10,13,12,13,349,9,13,1,14,1,14,1,14,
        1,14,5,14,355,8,14,10,14,12,14,358,9,14,1,15,1,15,1,15,3,15,363,
        8,15,1,16,1,16,5,16,367,8,16,10,16,12,16,370,9,16,1,16,4,16,373,
        8,16,11,16,12,16,374,1,16,1,16,1,17,1,17,1,18,3,18,382,8,18,1,18,
        1,18,1,18,3,18,387,8,18,1,18,3,18,390,8,18,1,18,1,18,1,18,3,18,395,
        8,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,
        3,20,409,8,20,1,21,1,21,1,21,1,21,5,21,415,8,21,10,21,12,21,418,
        9,21,1,21,1,21,1,22,1,22,3,22,424,8,22,1,23,1,23,1,24,5,24,429,8,
        24,10,24,12,24,432,9,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
        1,25,1,25,1,25,3,25,445,8,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
        1,26,1,26,1,26,3,26,457,8,26,1,27,1,27,3,27,461,8,27,1,27,1,27,1,
        27,1,27,3,27,467,8,27,3,27,469,8,27,1,28,1,28,1,28,1,28,1,29,1,29,
        1,29,1,29,1,29,3,29,480,8,29,1,29,1,29,3,29,484,8,29,1,29,1,29,1,
        29,1,30,1,30,1,30,5,30,492,8,30,10,30,12,30,495,9,30,1,31,1,31,1,
        31,1,31,3,31,501,8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
        32,5,32,512,8,32,10,32,12,32,515,9,32,1,32,1,32,3,32,519,8,32,1,
        32,1,32,1,33,1,33,1,33,1,33,4,33,527,8,33,11,33,12,33,528,1,33,1,
        33,3,33,533,8,33,1,33,1,33,1,34,1,34,1,34,5,34,540,8,34,10,34,12,
        34,543,9,34,1,34,1,34,1,34,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,
        36,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,
        38,1,38,3,38,570,8,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,
        40,1,40,1,41,1,41,1,41,1,42,1,42,3,42,587,8,42,1,43,1,43,1,43,1,
        43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,602,8,43,1,
        43,1,43,1,43,3,43,607,8,43,1,43,1,43,1,43,1,43,1,43,3,43,614,8,43,
        1,43,1,43,1,43,1,43,1,43,1,43,3,43,622,8,43,3,43,624,8,43,1,43,1,
        43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,5,43,638,8,
        43,10,43,12,43,641,9,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
        3,44,651,8,44,1,45,1,45,3,45,655,8,45,1,45,1,45,1,45,1,46,1,46,3,
        46,662,8,46,1,46,1,46,1,46,1,47,1,47,1,47,3,47,670,8,47,1,47,1,47,
        1,48,1,48,1,48,1,48,5,48,678,8,48,10,48,12,48,681,9,48,1,48,1,48,
        1,49,1,49,1,50,1,50,1,51,1,51,1,51,0,1,86,52,0,2,4,6,8,10,12,14,
        16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
        60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,
        102,0,11,2,0,57,62,64,65,1,0,10,28,2,0,5,5,31,31,2,0,111,113,116,
        116,2,0,32,33,108,108,1,0,34,35,2,0,29,29,36,40,1,0,89,91,2,0,112,
        113,116,116,1,0,103,106,1,0,100,102,747,0,112,1,0,0,0,2,116,1,0,
        0,0,4,133,1,0,0,0,6,154,1,0,0,0,8,181,1,0,0,0,10,206,1,0,0,0,12,
        235,1,0,0,0,14,254,1,0,0,0,16,304,1,0,0,0,18,306,1,0,0,0,20,325,
        1,0,0,0,22,330,1,0,0,0,24,332,1,0,0,0,26,341,1,0,0,0,28,350,1,0,
        0,0,30,362,1,0,0,0,32,364,1,0,0,0,34,378,1,0,0,0,36,381,1,0,0,0,
        38,398,1,0,0,0,40,408,1,0,0,0,42,410,1,0,0,0,44,423,1,0,0,0,46,425,
        1,0,0,0,48,430,1,0,0,0,50,444,1,0,0,0,52,456,1,0,0,0,54,468,1,0,
        0,0,56,470,1,0,0,0,58,479,1,0,0,0,60,488,1,0,0,0,62,500,1,0,0,0,
        64,502,1,0,0,0,66,522,1,0,0,0,68,536,1,0,0,0,70,547,1,0,0,0,72,549,
        1,0,0,0,74,555,1,0,0,0,76,561,1,0,0,0,78,575,1,0,0,0,80,578,1,0,
        0,0,82,581,1,0,0,0,84,584,1,0,0,0,86,623,1,0,0,0,88,650,1,0,0,0,
        90,652,1,0,0,0,92,659,1,0,0,0,94,666,1,0,0,0,96,673,1,0,0,0,98,684,
        1,0,0,0,100,686,1,0,0,0,102,688,1,0,0,0,104,111,3,2,1,0,105,111,
        3,10,5,0,106,111,3,4,2,0,107,111,3,12,6,0,108,111,3,14,7,0,109,111,
        3,16,8,0,110,104,1,0,0,0,110,105,1,0,0,0,110,106,1,0,0,0,110,107,
        1,0,0,0,110,108,1,0,0,0,110,109,1,0,0,0,111,114,1,0,0,0,112,110,
        1,0,0,0,112,113,1,0,0,0,113,1,1,0,0,0,114,112,1,0,0,0,115,117,3,
        94,47,0,116,115,1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,120,
        5,43,0,0,119,121,3,100,50,0,120,119,1,0,0,0,120,121,1,0,0,0,121,
        122,1,0,0,0,122,126,5,112,0,0,123,125,3,32,16,0,124,123,1,0,0,0,
        125,128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,129,1,0,0,0,
        128,126,1,0,0,0,129,130,3,48,24,0,130,131,5,44,0,0,131,3,1,0,0,0,
        132,134,3,94,47,0,133,132,1,0,0,0,133,134,1,0,0,0,134,135,1,0,0,
        0,135,137,5,47,0,0,136,138,3,100,50,0,137,136,1,0,0,0,137,138,1,
        0,0,0,138,139,1,0,0,0,139,142,5,112,0,0,140,141,5,1,0,0,141,143,
        3,44,22,0,142,140,1,0,0,0,142,143,1,0,0,0,143,147,1,0,0,0,144,146,
        3,32,16,0,145,144,1,0,0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,
        1,0,0,0,148,150,1,0,0,0,149,147,1,0,0,0,150,151,3,48,24,0,151,152,
        5,48,0,0,152,5,1,0,0,0,153,155,3,94,47,0,154,153,1,0,0,0,154,155,
        1,0,0,0,155,156,1,0,0,0,156,158,5,92,0,0,157,159,3,100,50,0,158,
        157,1,0,0,0,158,159,1,0,0,0,159,163,1,0,0,0,160,162,3,102,51,0,161,
        160,1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,
        166,1,0,0,0,165,163,1,0,0,0,166,169,5,112,0,0,167,168,5,1,0,0,168,
        170,3,44,22,0,169,167,1,0,0,0,169,170,1,0,0,0,170,174,1,0,0,0,171,
        173,3,32,16,0,172,171,1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,174,
        175,1,0,0,0,175,177,1,0,0,0,176,174,1,0,0,0,177,178,3,48,24,0,178,
        179,5,93,0,0,179,7,1,0,0,0,180,182,3,94,47,0,181,180,1,0,0,0,181,
        182,1,0,0,0,182,183,1,0,0,0,183,185,5,49,0,0,184,186,3,100,50,0,
        185,184,1,0,0,0,185,186,1,0,0,0,186,190,1,0,0,0,187,189,3,102,51,
        0,188,187,1,0,0,0,189,192,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,
        0,191,193,1,0,0,0,192,190,1,0,0,0,193,194,5,112,0,0,194,195,5,1,
        0,0,195,199,3,44,22,0,196,198,3,32,16,0,197,196,1,0,0,0,198,201,
        1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,202,1,0,0,0,201,199,
        1,0,0,0,202,203,3,88,44,0,203,204,5,50,0,0,204,9,1,0,0,0,205,207,
        3,94,47,0,206,205,1,0,0,0,206,207,1,0,0,0,207,208,1,0,0,0,208,210,
        5,45,0,0,209,211,3,100,50,0,210,209,1,0,0,0,210,211,1,0,0,0,211,
        215,1,0,0,0,212,214,3,102,51,0,213,212,1,0,0,0,214,217,1,0,0,0,215,
        213,1,0,0,0,215,216,1,0,0,0,216,218,1,0,0,0,217,215,1,0,0,0,218,
        220,5,112,0,0,219,221,3,28,14,0,220,219,1,0,0,0,220,221,1,0,0,0,
        221,223,1,0,0,0,222,224,3,26,13,0,223,222,1,0,0,0,223,224,1,0,0,
        0,224,228,1,0,0,0,225,227,3,30,15,0,226,225,1,0,0,0,227,230,1,0,
        0,0,228,226,1,0,0,0,228,229,1,0,0,0,229,231,1,0,0,0,230,228,1,0,
        0,0,231,232,3,48,24,0,232,233,5,46,0,0,233,11,1,0,0,0,234,236,3,
        94,47,0,235,234,1,0,0,0,235,236,1,0,0,0,236,237,1,0,0,0,237,239,
        5,94,0,0,238,240,3,100,50,0,239,238,1,0,0,0,239,240,1,0,0,0,240,
        241,1,0,0,0,241,243,5,112,0,0,242,244,3,28,14,0,243,242,1,0,0,0,
        243,244,1,0,0,0,244,248,1,0,0,0,245,247,3,30,15,0,246,245,1,0,0,
        0,247,250,1,0,0,0,248,246,1,0,0,0,248,249,1,0,0,0,249,251,1,0,0,
        0,250,248,1,0,0,0,251,252,5,95,0,0,252,13,1,0,0,0,253,255,3,94,47,
        0,254,253,1,0,0,0,254,255,1,0,0,0,255,256,1,0,0,0,256,258,5,63,0,
        0,257,259,3,100,50,0,258,257,1,0,0,0,258,259,1,0,0,0,259,263,1,0,
        0,0,260,262,3,102,51,0,261,260,1,0,0,0,262,265,1,0,0,0,263,261,1,
        0,0,0,263,264,1,0,0,0,264,266,1,0,0,0,265,263,1,0,0,0,266,268,5,
        112,0,0,267,269,3,36,18,0,268,267,1,0,0,0,269,270,1,0,0,0,270,268,
        1,0,0,0,270,271,1,0,0,0,271,272,1,0,0,0,272,273,5,66,0,0,273,15,
        1,0,0,0,274,276,3,94,47,0,275,274,1,0,0,0,276,279,1,0,0,0,277,275,
        1,0,0,0,277,278,1,0,0,0,278,280,1,0,0,0,279,277,1,0,0,0,280,282,
        5,109,0,0,281,283,3,100,50,0,282,281,1,0,0,0,282,283,1,0,0,0,283,
        284,1,0,0,0,284,285,5,112,0,0,285,286,5,1,0,0,286,287,3,18,9,0,287,
        288,5,110,0,0,288,305,1,0,0,0,289,291,3,94,47,0,290,289,1,0,0,0,
        291,294,1,0,0,0,292,290,1,0,0,0,292,293,1,0,0,0,293,295,1,0,0,0,
        294,292,1,0,0,0,295,297,5,109,0,0,296,298,3,100,50,0,297,296,1,0,
        0,0,297,298,1,0,0,0,298,299,1,0,0,0,299,300,5,112,0,0,300,301,5,
        1,0,0,301,302,3,24,12,0,302,303,5,110,0,0,303,305,1,0,0,0,304,277,
        1,0,0,0,304,292,1,0,0,0,305,17,1,0,0,0,306,307,5,2,0,0,307,312,3,
        20,10,0,308,309,5,3,0,0,309,311,3,20,10,0,310,308,1,0,0,0,311,314,
        1,0,0,0,312,310,1,0,0,0,312,313,1,0,0,0,313,315,1,0,0,0,314,312,
        1,0,0,0,315,317,5,4,0,0,316,318,3,44,22,0,317,316,1,0,0,0,317,318,
        1,0,0,0,318,321,1,0,0,0,319,320,5,5,0,0,320,322,3,22,11,0,321,319,
        1,0,0,0,321,322,1,0,0,0,322,323,1,0,0,0,323,324,5,6,0,0,324,19,1,
        0,0,0,325,328,5,112,0,0,326,327,5,5,0,0,327,329,3,86,43,0,328,326,
        1,0,0,0,328,329,1,0,0,0,329,21,1,0,0,0,330,331,5,112,0,0,331,23,
        1,0,0,0,332,336,5,96,0,0,333,335,3,36,18,0,334,333,1,0,0,0,335,338,
        1,0,0,0,336,334,1,0,0,0,336,337,1,0,0,0,337,339,1,0,0,0,338,336,
        1,0,0,0,339,340,5,97,0,0,340,25,1,0,0,0,341,342,5,51,0,0,342,347,
        3,44,22,0,343,344,5,3,0,0,344,346,3,44,22,0,345,343,1,0,0,0,346,
        349,1,0,0,0,347,345,1,0,0,0,347,348,1,0,0,0,348,27,1,0,0,0,349,347,
        1,0,0,0,350,351,5,52,0,0,351,356,3,44,22,0,352,353,5,3,0,0,353,355,
        3,44,22,0,354,352,1,0,0,0,355,358,1,0,0,0,356,354,1,0,0,0,356,357,
        1,0,0,0,357,29,1,0,0,0,358,356,1,0,0,0,359,363,3,6,3,0,360,363,3,
        8,4,0,361,363,3,32,16,0,362,359,1,0,0,0,362,360,1,0,0,0,362,361,
        1,0,0,0,363,31,1,0,0,0,364,368,3,34,17,0,365,367,3,102,51,0,366,
        365,1,0,0,0,367,370,1,0,0,0,368,366,1,0,0,0,368,369,1,0,0,0,369,
        372,1,0,0,0,370,368,1,0,0,0,371,373,3,36,18,0,372,371,1,0,0,0,373,
        374,1,0,0,0,374,372,1,0,0,0,374,375,1,0,0,0,375,376,1,0,0,0,376,
        377,5,66,0,0,377,33,1,0,0,0,378,379,7,0,0,0,379,35,1,0,0,0,380,382,
        3,94,47,0,381,380,1,0,0,0,381,382,1,0,0,0,382,383,1,0,0,0,383,384,
        5,112,0,0,384,386,5,1,0,0,385,387,5,107,0,0,386,385,1,0,0,0,386,
        387,1,0,0,0,387,389,1,0,0,0,388,390,3,38,19,0,389,388,1,0,0,0,389,
        390,1,0,0,0,390,391,1,0,0,0,391,394,3,44,22,0,392,393,5,5,0,0,393,
        395,3,40,20,0,394,392,1,0,0,0,394,395,1,0,0,0,395,396,1,0,0,0,396,
        397,5,6,0,0,397,37,1,0,0,0,398,399,5,73,0,0,399,400,5,7,0,0,400,
        401,5,113,0,0,401,402,5,8,0,0,402,403,5,113,0,0,403,404,5,9,0,0,
        404,405,5,74,0,0,405,39,1,0,0,0,406,409,3,86,43,0,407,409,3,42,21,
        0,408,406,1,0,0,0,408,407,1,0,0,0,409,41,1,0,0,0,410,411,5,7,0,0,
        411,416,3,86,43,0,412,413,5,3,0,0,413,415,3,86,43,0,414,412,1,0,
        0,0,415,418,1,0,0,0,416,414,1,0,0,0,416,417,1,0,0,0,417,419,1,0,
        0,0,418,416,1,0,0,0,419,420,5,9,0,0,420,43,1,0,0,0,421,424,3,46,
        23,0,422,424,5,112,0,0,423,421,1,0,0,0,423,422,1,0,0,0,424,45,1,
        0,0,0,425,426,7,1,0,0,426,47,1,0,0,0,427,429,3,50,25,0,428,427,1,
        0,0,0,429,432,1,0,0,0,430,428,1,0,0,0,430,431,1,0,0,0,431,49,1,0,
        0,0,432,430,1,0,0,0,433,445,3,52,26,0,434,445,3,64,32,0,435,445,
        3,66,33,0,436,445,3,72,36,0,437,445,3,74,37,0,438,445,3,76,38,0,
        439,445,3,58,29,0,440,445,3,78,39,0,441,445,3,80,40,0,442,445,3,
        82,41,0,443,445,5,6,0,0,444,433,1,0,0,0,444,434,1,0,0,0,444,435,
        1,0,0,0,444,436,1,0,0,0,444,437,1,0,0,0,444,438,1,0,0,0,444,439,
        1,0,0,0,444,440,1,0,0,0,444,441,1,0,0,0,444,442,1,0,0,0,444,443,
        1,0,0,0,445,51,1,0,0,0,446,447,3,54,27,0,447,448,5,5,0,0,448,449,
        3,86,43,0,449,450,5,6,0,0,450,457,1,0,0,0,451,452,3,54,27,0,452,
        453,5,29,0,0,453,454,3,86,43,0,454,455,5,6,0,0,455,457,1,0,0,0,456,
        446,1,0,0,0,456,451,1,0,0,0,457,53,1,0,0,0,458,460,5,112,0,0,459,
        461,3,56,28,0,460,459,1,0,0,0,460,461,1,0,0,0,461,469,1,0,0,0,462,
        463,3,84,42,0,463,464,5,30,0,0,464,466,5,112,0,0,465,467,3,56,28,
        0,466,465,1,0,0,0,466,467,1,0,0,0,467,469,1,0,0,0,468,458,1,0,0,
        0,468,462,1,0,0,0,469,55,1,0,0,0,470,471,5,7,0,0,471,472,3,86,43,
        0,472,473,5,9,0,0,473,57,1,0,0,0,474,480,5,112,0,0,475,476,3,84,
        42,0,476,477,5,30,0,0,477,478,5,112,0,0,478,480,1,0,0,0,479,474,
        1,0,0,0,479,475,1,0,0,0,480,481,1,0,0,0,481,483,5,2,0,0,482,484,
        3,60,30,0,483,482,1,0,0,0,483,484,1,0,0,0,484,485,1,0,0,0,485,486,
        5,4,0,0,486,487,5,6,0,0,487,59,1,0,0,0,488,493,3,62,31,0,489,490,
        5,3,0,0,490,492,3,62,31,0,491,489,1,0,0,0,492,495,1,0,0,0,493,491,
        1,0,0,0,493,494,1,0,0,0,494,61,1,0,0,0,495,493,1,0,0,0,496,497,5,
        112,0,0,497,498,7,2,0,0,498,501,3,86,43,0,499,501,3,86,43,0,500,
        496,1,0,0,0,500,499,1,0,0,0,501,63,1,0,0,0,502,503,5,67,0,0,503,
        504,3,86,43,0,504,505,5,68,0,0,505,513,3,48,24,0,506,507,5,69,0,
        0,507,508,3,86,43,0,508,509,5,68,0,0,509,510,3,48,24,0,510,512,1,
        0,0,0,511,506,1,0,0,0,512,515,1,0,0,0,513,511,1,0,0,0,513,514,1,
        0,0,0,514,518,1,0,0,0,515,513,1,0,0,0,516,517,5,70,0,0,517,519,3,
        48,24,0,518,516,1,0,0,0,518,519,1,0,0,0,519,520,1,0,0,0,520,521,
        5,71,0,0,521,65,1,0,0,0,522,523,5,72,0,0,523,524,3,86,43,0,524,526,
        5,74,0,0,525,527,3,68,34,0,526,525,1,0,0,0,527,528,1,0,0,0,528,526,
        1,0,0,0,528,529,1,0,0,0,529,532,1,0,0,0,530,531,5,70,0,0,531,533,
        3,48,24,0,532,530,1,0,0,0,532,533,1,0,0,0,533,534,1,0,0,0,534,535,
        5,75,0,0,535,67,1,0,0,0,536,541,3,70,35,0,537,538,5,3,0,0,538,540,
        3,70,35,0,539,537,1,0,0,0,540,543,1,0,0,0,541,539,1,0,0,0,541,542,
        1,0,0,0,542,544,1,0,0,0,543,541,1,0,0,0,544,545,5,1,0,0,545,546,
        3,48,24,0,546,69,1,0,0,0,547,548,7,3,0,0,548,71,1,0,0,0,549,550,
        5,76,0,0,550,551,3,86,43,0,551,552,5,77,0,0,552,553,3,48,24,0,553,
        554,5,78,0,0,554,73,1,0,0,0,555,556,5,79,0,0,556,557,3,48,24,0,557,
        558,5,80,0,0,558,559,3,86,43,0,559,560,5,81,0,0,560,75,1,0,0,0,561,
        562,5,82,0,0,562,563,5,112,0,0,563,564,5,5,0,0,564,565,3,86,43,0,
        565,566,5,83,0,0,566,569,3,86,43,0,567,568,5,84,0,0,568,570,3,86,
        43,0,569,567,1,0,0,0,569,570,1,0,0,0,570,571,1,0,0,0,571,572,5,77,
        0,0,572,573,3,48,24,0,573,574,5,85,0,0,574,77,1,0,0,0,575,576,5,
        86,0,0,576,577,5,6,0,0,577,79,1,0,0,0,578,579,5,87,0,0,579,580,5,
        6,0,0,580,81,1,0,0,0,581,582,5,88,0,0,582,583,5,6,0,0,583,83,1,0,
        0,0,584,586,5,112,0,0,585,587,3,56,28,0,586,585,1,0,0,0,586,587,
        1,0,0,0,587,85,1,0,0,0,588,589,6,43,-1,0,589,590,5,2,0,0,590,591,
        3,86,43,0,591,592,5,4,0,0,592,624,1,0,0,0,593,624,5,113,0,0,594,
        624,5,114,0,0,595,624,5,111,0,0,596,624,5,115,0,0,597,624,5,116,
        0,0,598,599,5,112,0,0,599,601,5,2,0,0,600,602,3,60,30,0,601,600,
        1,0,0,0,601,602,1,0,0,0,602,603,1,0,0,0,603,624,5,4,0,0,604,606,
        5,112,0,0,605,607,3,56,28,0,606,605,1,0,0,0,606,607,1,0,0,0,607,
        624,1,0,0,0,608,609,3,84,42,0,609,610,5,30,0,0,610,611,5,112,0,0,
        611,613,5,2,0,0,612,614,3,60,30,0,613,612,1,0,0,0,613,614,1,0,0,
        0,614,615,1,0,0,0,615,616,5,4,0,0,616,624,1,0,0,0,617,618,3,84,42,
        0,618,619,5,30,0,0,619,621,5,112,0,0,620,622,3,56,28,0,621,620,1,
        0,0,0,621,622,1,0,0,0,622,624,1,0,0,0,623,588,1,0,0,0,623,593,1,
        0,0,0,623,594,1,0,0,0,623,595,1,0,0,0,623,596,1,0,0,0,623,597,1,
        0,0,0,623,598,1,0,0,0,623,604,1,0,0,0,623,608,1,0,0,0,623,617,1,
        0,0,0,624,639,1,0,0,0,625,626,10,14,0,0,626,627,7,4,0,0,627,638,
        3,86,43,15,628,629,10,13,0,0,629,630,7,5,0,0,630,638,3,86,43,14,
        631,632,10,12,0,0,632,633,7,6,0,0,633,638,3,86,43,13,634,635,10,
        11,0,0,635,636,7,7,0,0,636,638,3,86,43,12,637,625,1,0,0,0,637,628,
        1,0,0,0,637,631,1,0,0,0,637,634,1,0,0,0,638,641,1,0,0,0,639,637,
        1,0,0,0,639,640,1,0,0,0,640,87,1,0,0,0,641,639,1,0,0,0,642,651,3,
        90,45,0,643,651,3,92,46,0,644,645,3,90,45,0,645,646,3,92,46,0,646,
        651,1,0,0,0,647,648,3,92,46,0,648,649,3,90,45,0,649,651,1,0,0,0,
        650,642,1,0,0,0,650,643,1,0,0,0,650,644,1,0,0,0,650,647,1,0,0,0,
        651,89,1,0,0,0,652,654,5,53,0,0,653,655,3,100,50,0,654,653,1,0,0,
        0,654,655,1,0,0,0,655,656,1,0,0,0,656,657,3,48,24,0,657,658,5,54,
        0,0,658,91,1,0,0,0,659,661,5,55,0,0,660,662,3,100,50,0,661,660,1,
        0,0,0,661,662,1,0,0,0,662,663,1,0,0,0,663,664,3,48,24,0,664,665,
        5,56,0,0,665,93,1,0,0,0,666,667,5,41,0,0,667,669,5,112,0,0,668,670,
        3,96,48,0,669,668,1,0,0,0,669,670,1,0,0,0,670,671,1,0,0,0,671,672,
        5,42,0,0,672,95,1,0,0,0,673,674,5,2,0,0,674,679,3,98,49,0,675,676,
        5,3,0,0,676,678,3,98,49,0,677,675,1,0,0,0,678,681,1,0,0,0,679,677,
        1,0,0,0,679,680,1,0,0,0,680,682,1,0,0,0,681,679,1,0,0,0,682,683,
        5,4,0,0,683,97,1,0,0,0,684,685,7,8,0,0,685,99,1,0,0,0,686,687,7,
        9,0,0,687,101,1,0,0,0,688,689,7,10,0,0,689,103,1,0,0,0,83,110,112,
        116,120,126,133,137,142,147,154,158,163,169,174,181,185,190,199,
        206,210,215,220,223,228,235,239,243,248,254,258,263,270,277,282,
        292,297,304,312,317,321,328,336,347,356,362,368,374,381,386,389,
        394,408,416,423,430,444,456,460,466,468,479,483,493,500,513,518,
        528,532,541,569,586,601,606,613,621,623,637,639,650,654,661,669,
        679
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
    public HEX_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.HEX_NUMBER, 0);
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
