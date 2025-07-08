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
    public static readonly PROGRAM = 44;
    public static readonly END_PROGRAM = 45;
    public static readonly FUNCTION_BLOCK = 46;
    public static readonly END_FUNCTION_BLOCK = 47;
    public static readonly FUNCTION = 48;
    public static readonly END_FUNCTION = 49;
    public static readonly PROPERTY = 50;
    public static readonly END_PROPERTY = 51;
    public static readonly IMPLEMENTS = 52;
    public static readonly EXTENDS = 53;
    public static readonly GET = 54;
    public static readonly END_GET = 55;
    public static readonly SET = 56;
    public static readonly END_SET = 57;
    public static readonly VAR = 58;
    public static readonly VAR_INPUT = 59;
    public static readonly VAR_OUTPUT = 60;
    public static readonly VAR_IN_OUT = 61;
    public static readonly VAR_TEMP = 62;
    public static readonly VAR_EXTERNAL = 63;
    public static readonly VAR_GLOBAL = 64;
    public static readonly VAR_INST = 65;
    public static readonly VAR_STAT = 66;
    public static readonly END_VAR = 67;
    public static readonly IF = 68;
    public static readonly THEN = 69;
    public static readonly ELSIF = 70;
    public static readonly ELSE = 71;
    public static readonly END_IF = 72;
    public static readonly CASE = 73;
    public static readonly ARRAY = 74;
    public static readonly OF = 75;
    public static readonly END_CASE = 76;
    public static readonly WHILE = 77;
    public static readonly DO = 78;
    public static readonly END_WHILE = 79;
    public static readonly REPEAT = 80;
    public static readonly UNTIL = 81;
    public static readonly END_REPEAT = 82;
    public static readonly FOR = 83;
    public static readonly TO = 84;
    public static readonly BY = 85;
    public static readonly END_FOR = 86;
    public static readonly RETURN = 87;
    public static readonly EXIT = 88;
    public static readonly CONTINUE = 89;
    public static readonly AND = 90;
    public static readonly OR = 91;
    public static readonly XOR = 92;
    public static readonly METHOD = 93;
    public static readonly END_METHOD = 94;
    public static readonly INTERFACE = 95;
    public static readonly END_INTERFACE = 96;
    public static readonly STRUCT = 97;
    public static readonly END_STRUCT = 98;
    public static readonly ENUM = 99;
    public static readonly END_ENUM = 100;
    public static readonly ABSTRACT = 101;
    public static readonly FINAL = 102;
    public static readonly CONSTANT = 103;
    public static readonly PUBLIC = 104;
    public static readonly PRIVATE = 105;
    public static readonly PROTECTED = 106;
    public static readonly INTERNAL = 107;
    public static readonly MOD = 108;
    public static readonly TYPE = 109;
    public static readonly END_TYPE = 110;
    public static readonly THIS = 111;
    public static readonly CARET = 112;
    public static readonly REFERENCE_TO = 113;
    public static readonly POINTER_TO = 114;
    public static readonly BOOL = 115;
    public static readonly NUMBER = 116;
    public static readonly TIME_LITERAL = 117;
    public static readonly ID = 118;
    public static readonly STRING_LITERAL = 119;
    public static readonly WS = 120;
    public static readonly COMMENT = 121;
    public static readonly COMMENT_BLOCK = 122;
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
    public static readonly RULE_primary = 42;
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
        null, "':'", "'('", "','", "')'", "':='", "';'", "'REF='", "'['", 
        "'..'", "']'", "'INT'", "'REAL'", "'BOOL'", "'STRING'", "'DINT'", 
        "'BYTE'", "'WORD'", "'DWORD'", "'SINT'", "'USINT'", "'UINT'", "'UDINT'", 
        "'LINT'", "'ULINT'", "'LREAL'", "'TIME'", "'DATE'", "'TIME_OF_DAY'", 
        "'DATE_AND_TIME'", "'.'", "'=>'", "'*'", "'/'", "'+'", "'-'", "'='", 
        "'<'", "'>'", "'<='", "'>='", "'<>'", "'{'", "'}'", "'PROGRAM'", 
        "'END_PROGRAM'", "'FUNCTION_BLOCK'", "'END_FUNCTION_BLOCK'", "'FUNCTION'", 
        "'END_FUNCTION'", "'PROPERTY'", "'END_PROPERTY'", "'IMPLEMENTS'", 
        "'EXTENDS'", "'GET'", "'END_GET'", "'SET'", "'END_SET'", "'VAR'", 
        "'VAR_INPUT'", "'VAR_OUTPUT'", "'VAR_IN_OUT'", "'VAR_TEMP'", "'VAR_EXTERNAL'", 
        "'VAR_GLOBAL'", "'VAR_INST'", "'VAR_STAT'", "'END_VAR'", "'IF'", 
        "'THEN'", "'ELSIF'", "'ELSE'", "'END_IF'", "'CASE'", "'ARRAY'", 
        "'OF'", "'END_CASE'", "'WHILE'", "'DO'", "'END_WHILE'", "'REPEAT'", 
        "'UNTIL'", "'END_REPEAT'", "'FOR'", "'TO'", "'BY'", "'END_FOR'", 
        "'RETURN'", "'EXIT'", "'CONTINUE'", "'AND'", "'OR'", "'XOR'", "'METHOD'", 
        "'END_METHOD'", "'INTERFACE'", "'END_INTERFACE'", "'STRUCT'", "'END_STRUCT'", 
        "'ENUM'", "'END_ENUM'", "'ABSTRACT'", "'FINAL'", "'CONSTANT'", "'PUBLIC'", 
        "'PRIVATE'", "'PROTECTED'", "'INTERNAL'", "'MOD'", "'TYPE'", "'END_TYPE'", 
        "'THIS'", "'^'", "'REFERENCE TO'", "'POINTER TO'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        "PROGRAM", "END_PROGRAM", "FUNCTION_BLOCK", "END_FUNCTION_BLOCK", 
        "FUNCTION", "END_FUNCTION", "PROPERTY", "END_PROPERTY", "IMPLEMENTS", 
        "EXTENDS", "GET", "END_GET", "SET", "END_SET", "VAR", "VAR_INPUT", 
        "VAR_OUTPUT", "VAR_IN_OUT", "VAR_TEMP", "VAR_EXTERNAL", "VAR_GLOBAL", 
        "VAR_INST", "VAR_STAT", "END_VAR", "IF", "THEN", "ELSIF", "ELSE", 
        "END_IF", "CASE", "ARRAY", "OF", "END_CASE", "WHILE", "DO", "END_WHILE", 
        "REPEAT", "UNTIL", "END_REPEAT", "FOR", "TO", "BY", "END_FOR", "RETURN", 
        "EXIT", "CONTINUE", "AND", "OR", "XOR", "METHOD", "END_METHOD", 
        "INTERFACE", "END_INTERFACE", "STRUCT", "END_STRUCT", "ENUM", "END_ENUM", 
        "ABSTRACT", "FINAL", "CONSTANT", "PUBLIC", "PRIVATE", "PROTECTED", 
        "INTERNAL", "MOD", "TYPE", "END_TYPE", "THIS", "CARET", "REFERENCE_TO", 
        "POINTER_TO", "BOOL", "NUMBER", "TIME_LITERAL", "ID", "STRING_LITERAL", 
        "WS", "COMMENT", "COMMENT_BLOCK"
    ];
    public static readonly ruleNames = [
        "compilationUnit", "program", "function", "method", "property", 
        "functionBlock", "interface", "varGlobalSection", "typeDecl", "enumDecl", 
        "enumMember", "initialValue", "structDecl", "implementsClause", 
        "extendsClause", "member", "varDeclSection", "varSectionType", "varDecl", 
        "arraySpec", "exprOrArrayInit", "arrayInit", "type", "builtinType", 
        "statementSection", "statement", "assignment", "arrayIndex", "callStatement", 
        "argumentList", "argument", "ifStatement", "caseStatement", "caseElement", 
        "caseValue", "whileStatement", "repeatStatement", "forStatement", 
        "returnStatement", "exitStatement", "continueStatement", "memberQualifier", 
        "primary", "expr", "propertyBody", "getter", "setter", "attribute", 
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
            while (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 4194389) !== 0) || _la === 95 || _la === 109) {
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
            if (_la === 42) {
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
            if (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
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
            while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 447) !== 0)) {
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
            if (_la === 42) {
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
            if (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
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
            while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 447) !== 0)) {
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
            if (_la === 42) {
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
            if (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
                {
                this.state = 157;
                this.accessModifier();
                }
            }

            this.state = 163;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 7) !== 0)) {
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
            while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 447) !== 0)) {
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
            if (_la === 42) {
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
            if (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
                {
                this.state = 184;
                this.accessModifier();
                }
            }

            this.state = 190;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 7) !== 0)) {
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
            while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 447) !== 0)) {
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
            if (_la === 42) {
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
            if (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
                {
                this.state = 209;
                this.accessModifier();
                }
            }

            this.state = 215;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 7) !== 0)) {
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
            if (_la === 53) {
                {
                this.state = 219;
                this.extendsClause();
                }
            }

            this.state = 223;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 222;
                this.implementsClause();
                }
            }

            this.state = 228;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 29294849) !== 0) || _la === 93) {
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
            if (_la === 42) {
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
            if (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
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
            if (_la === 53) {
                {
                this.state = 242;
                this.extendsClause();
                }
            }

            this.state = 248;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 29294849) !== 0) || _la === 93) {
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
            if (_la === 42) {
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
            if (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
                {
                this.state = 257;
                this.accessModifier();
                }
            }

            this.state = 263;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 7) !== 0)) {
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
            } while (_la === 42 || _la === 118);
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
                while (_la === 42) {
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
                if (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
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
                while (_la === 42) {
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
                if (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
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
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073739776) !== 0) || _la === 118) {
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
            while (_la === 42 || _la === 118) {
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
            while (((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 7) !== 0)) {
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
            } while (_la === 42 || _la === 118);
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
            if(!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 447) !== 0))) {
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
            this.state = 421;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 54, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 381;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 42) {
                    {
                    this.state = 380;
                    this.attribute();
                    }
                }

                this.state = 383;
                this.match(StructuredTextParser.ID);
                this.state = 384;
                this.match(StructuredTextParser.T__0);
                this.state = 385;
                this.match(StructuredTextParser.REFERENCE_TO);
                this.state = 386;
                this.type_();
                this.state = 389;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 7) {
                    {
                    this.state = 387;
                    this.match(StructuredTextParser.T__6);
                    this.state = 388;
                    this.expr(0);
                    }
                }

                this.state = 391;
                this.match(StructuredTextParser.T__5);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 394;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 42) {
                    {
                    this.state = 393;
                    this.attribute();
                    }
                }

                this.state = 396;
                this.match(StructuredTextParser.ID);
                this.state = 397;
                this.match(StructuredTextParser.T__0);
                this.state = 398;
                this.match(StructuredTextParser.POINTER_TO);
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
                    this.expr(0);
                    }
                }

                this.state = 404;
                this.match(StructuredTextParser.T__5);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 407;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 42) {
                    {
                    this.state = 406;
                    this.attribute();
                    }
                }

                this.state = 409;
                this.match(StructuredTextParser.ID);
                this.state = 410;
                this.match(StructuredTextParser.T__0);
                this.state = 412;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 74) {
                    {
                    this.state = 411;
                    this.arraySpec();
                    }
                }

                this.state = 414;
                this.type_();
                this.state = 417;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                    this.state = 415;
                    this.match(StructuredTextParser.T__4);
                    this.state = 416;
                    this.exprOrArrayInit();
                    }
                }

                this.state = 419;
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
    public arraySpec(): ArraySpecContext {
        let localContext = new ArraySpecContext(this.context, this.state);
        this.enterRule(localContext, 38, StructuredTextParser.RULE_arraySpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 423;
            this.match(StructuredTextParser.ARRAY);
            this.state = 424;
            this.match(StructuredTextParser.T__7);
            this.state = 425;
            this.match(StructuredTextParser.NUMBER);
            this.state = 426;
            this.match(StructuredTextParser.T__8);
            this.state = 427;
            this.match(StructuredTextParser.NUMBER);
            this.state = 428;
            this.match(StructuredTextParser.T__9);
            this.state = 429;
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
            this.state = 433;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__1:
            case StructuredTextParser.THIS:
            case StructuredTextParser.BOOL:
            case StructuredTextParser.NUMBER:
            case StructuredTextParser.TIME_LITERAL:
            case StructuredTextParser.ID:
            case StructuredTextParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 431;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__7:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 432;
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
            this.state = 435;
            this.match(StructuredTextParser.T__7);
            this.state = 436;
            this.expr(0);
            this.state = 441;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 437;
                this.match(StructuredTextParser.T__2);
                this.state = 438;
                this.expr(0);
                }
                }
                this.state = 443;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 444;
            this.match(StructuredTextParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 448;
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
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 446;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 447;
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
            this.state = 450;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073739776) !== 0))) {
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
            this.state = 455;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 452;
                    this.statement();
                    }
                    }
                }
                this.state = 457;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
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
            this.state = 469;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 458;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 459;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 460;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 461;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 462;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 463;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 464;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 465;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 466;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 467;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 468;
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
            this.state = 481;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 471;
                this.memberQualifier(0);
                this.state = 472;
                this.match(StructuredTextParser.T__4);
                this.state = 473;
                this.expr(0);
                this.state = 474;
                this.match(StructuredTextParser.T__5);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 476;
                this.memberQualifier(0);
                this.state = 477;
                this.match(StructuredTextParser.T__6);
                this.state = 478;
                this.expr(0);
                this.state = 479;
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
    public arrayIndex(): ArrayIndexContext {
        let localContext = new ArrayIndexContext(this.context, this.state);
        this.enterRule(localContext, 54, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 483;
            this.match(StructuredTextParser.T__7);
            this.state = 484;
            this.expr(0);
            this.state = 485;
            this.match(StructuredTextParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 490;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
            case 1:
                {
                this.state = 487;
                this.memberQualifier(0);
                this.state = 488;
                this.match(StructuredTextParser.T__29);
                }
                break;
            }
            this.state = 492;
            this.match(StructuredTextParser.ID);
            this.state = 493;
            this.match(StructuredTextParser.T__1);
            this.state = 495;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 497) !== 0)) {
                {
                this.state = 494;
                this.argumentList();
                }
            }

            this.state = 497;
            this.match(StructuredTextParser.T__3);
            this.state = 498;
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
        this.enterRule(localContext, 58, StructuredTextParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 500;
            this.argument();
            this.state = 505;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 501;
                this.match(StructuredTextParser.T__2);
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
        this.enterRule(localContext, 60, StructuredTextParser.RULE_argument);
        let _la: number;
        try {
            this.state = 512;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context) ) {
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
        this.enterRule(localContext, 62, StructuredTextParser.RULE_ifStatement);
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
            while (_la === 70) {
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
            if (_la === 71) {
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
        this.enterRule(localContext, 64, StructuredTextParser.RULE_caseStatement);
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
            } while (((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 27) !== 0));
            this.state = 544;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 71) {
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
        this.enterRule(localContext, 66, StructuredTextParser.RULE_caseElement);
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
            while (_la === 3) {
                {
                {
                this.state = 549;
                this.match(StructuredTextParser.T__2);
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
        this.enterRule(localContext, 68, StructuredTextParser.RULE_caseValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 559;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 27) !== 0))) {
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
        this.enterRule(localContext, 72, StructuredTextParser.RULE_repeatStatement);
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
        this.enterRule(localContext, 74, StructuredTextParser.RULE_forStatement);
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
            if (_la === 85) {
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
        this.enterRule(localContext, 76, StructuredTextParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 587;
            this.match(StructuredTextParser.RETURN);
            this.state = 588;
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
        this.enterRule(localContext, 78, StructuredTextParser.RULE_exitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 590;
            this.match(StructuredTextParser.EXIT);
            this.state = 591;
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
        this.enterRule(localContext, 80, StructuredTextParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 593;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 594;
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

    public memberQualifier(): MemberQualifierContext;
    public memberQualifier(_p: number): MemberQualifierContext;
    public memberQualifier(_p?: number): MemberQualifierContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new MemberQualifierContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 82;
        this.enterRecursionRule(localContext, 82, StructuredTextParser.RULE_memberQualifier, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 597;
            this.primary();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 606;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 72, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 604;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
                    case 1:
                        {
                        localContext = new MemberQualifierContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_memberQualifier);
                        this.state = 599;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 600;
                        this.match(StructuredTextParser.T__29);
                        this.state = 601;
                        this.match(StructuredTextParser.ID);
                        }
                        break;
                    case 2:
                        {
                        localContext = new MemberQualifierContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_memberQualifier);
                        this.state = 602;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 603;
                        this.match(StructuredTextParser.CARET);
                        }
                        break;
                    }
                    }
                }
                this.state = 608;
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
    public primary(): PrimaryContext {
        let localContext = new PrimaryContext(this.context, this.state);
        this.enterRule(localContext, 84, StructuredTextParser.RULE_primary);
        try {
            this.state = 614;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.THIS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 609;
                this.match(StructuredTextParser.THIS);
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 610;
                this.match(StructuredTextParser.ID);
                this.state = 612;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
                case 1:
                    {
                    this.state = 611;
                    this.arrayIndex();
                    }
                    break;
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
            this.state = 652;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 79, this.context) ) {
            case 1:
                {
                this.state = 617;
                this.match(StructuredTextParser.T__1);
                this.state = 618;
                this.expr(0);
                this.state = 619;
                this.match(StructuredTextParser.T__3);
                }
                break;
            case 2:
                {
                this.state = 621;
                this.match(StructuredTextParser.NUMBER);
                }
                break;
            case 3:
                {
                this.state = 622;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case 4:
                {
                this.state = 623;
                this.match(StructuredTextParser.TIME_LITERAL);
                }
                break;
            case 5:
                {
                this.state = 624;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            case 6:
                {
                this.state = 625;
                this.match(StructuredTextParser.ID);
                this.state = 626;
                this.match(StructuredTextParser.T__1);
                this.state = 628;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 2 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 497) !== 0)) {
                    {
                    this.state = 627;
                    this.argumentList();
                    }
                }

                this.state = 630;
                this.match(StructuredTextParser.T__3);
                }
                break;
            case 7:
                {
                this.state = 631;
                this.match(StructuredTextParser.ID);
                this.state = 633;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context) ) {
                case 1:
                    {
                    this.state = 632;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            case 8:
                {
                this.state = 635;
                this.memberQualifier(0);
                this.state = 636;
                this.match(StructuredTextParser.T__29);
                this.state = 637;
                this.match(StructuredTextParser.ID);
                this.state = 638;
                this.match(StructuredTextParser.T__1);
                this.state = 640;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 2 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 497) !== 0)) {
                    {
                    this.state = 639;
                    this.argumentList();
                    }
                }

                this.state = 642;
                this.match(StructuredTextParser.T__3);
                }
                break;
            case 9:
                {
                this.state = 644;
                this.memberQualifier(0);
                this.state = 645;
                this.match(StructuredTextParser.T__29);
                this.state = 646;
                this.match(StructuredTextParser.ID);
                this.state = 648;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
                case 1:
                    {
                    this.state = 647;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            case 10:
                {
                this.state = 650;
                this.match(StructuredTextParser.THIS);
                this.state = 651;
                this.match(StructuredTextParser.CARET);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 668;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 81, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 666;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 654;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 655;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 32 || _la === 33 || _la === 108)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 656;
                        this.expr(15);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 657;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 658;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 34 || _la === 35)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 659;
                        this.expr(14);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 660;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 661;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 63) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 662;
                        this.expr(13);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 663;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 664;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 665;
                        this.expr(12);
                        }
                        break;
                    }
                    }
                }
                this.state = 670;
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
        this.enterRule(localContext, 88, StructuredTextParser.RULE_propertyBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 679;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 82, this.context) ) {
            case 1:
                {
                this.state = 671;
                this.getter();
                }
                break;
            case 2:
                {
                this.state = 672;
                this.setter();
                }
                break;
            case 3:
                {
                this.state = 673;
                this.getter();
                this.state = 674;
                this.setter();
                }
                break;
            case 4:
                {
                this.state = 676;
                this.setter();
                this.state = 677;
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
            this.state = 681;
            this.match(StructuredTextParser.GET);
            this.state = 683;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
                {
                this.state = 682;
                this.accessModifier();
                }
            }

            this.state = 685;
            this.statementSection();
            this.state = 686;
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
            this.state = 688;
            this.match(StructuredTextParser.SET);
            this.state = 690;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 15) !== 0)) {
                {
                this.state = 689;
                this.accessModifier();
                }
            }

            this.state = 692;
            this.statementSection();
            this.state = 693;
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
            this.state = 695;
            this.match(StructuredTextParser.T__41);
            this.state = 696;
            this.match(StructuredTextParser.ID);
            this.state = 698;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 697;
                this.attributeArgList();
                }
            }

            this.state = 700;
            this.match(StructuredTextParser.T__42);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 702;
            this.match(StructuredTextParser.T__1);
            this.state = 703;
            this.attributeArg();
            this.state = 708;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 704;
                this.match(StructuredTextParser.T__2);
                this.state = 705;
                this.attributeArg();
                }
                }
                this.state = 710;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 711;
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
            this.state = 713;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 13) !== 0))) {
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
            this.state = 715;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 15) !== 0))) {
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
            this.state = 717;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 7) !== 0))) {
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
        case 41:
            return this.memberQualifier_sempred(localContext as MemberQualifierContext, predIndex);
        case 43:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private memberQualifier_sempred(localContext: MemberQualifierContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        case 1:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 2:
            return this.precpred(this.context, 14);
        case 3:
            return this.precpred(this.context, 13);
        case 4:
            return this.precpred(this.context, 12);
        case 5:
            return this.precpred(this.context, 11);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,122,720,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        1,18,1,18,1,18,1,18,1,18,3,18,390,8,18,1,18,1,18,1,18,3,18,395,8,
        18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,403,8,18,1,18,1,18,1,18,3,
        18,408,8,18,1,18,1,18,1,18,3,18,413,8,18,1,18,1,18,1,18,3,18,418,
        8,18,1,18,1,18,3,18,422,8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        1,19,1,20,1,20,3,20,434,8,20,1,21,1,21,1,21,1,21,5,21,440,8,21,10,
        21,12,21,443,9,21,1,21,1,21,1,22,1,22,3,22,449,8,22,1,23,1,23,1,
        24,5,24,454,8,24,10,24,12,24,457,9,24,1,25,1,25,1,25,1,25,1,25,1,
        25,1,25,1,25,1,25,1,25,1,25,3,25,470,8,25,1,26,1,26,1,26,1,26,1,
        26,1,26,1,26,1,26,1,26,1,26,3,26,482,8,26,1,27,1,27,1,27,1,27,1,
        28,1,28,1,28,3,28,491,8,28,1,28,1,28,1,28,3,28,496,8,28,1,28,1,28,
        1,28,1,29,1,29,1,29,5,29,504,8,29,10,29,12,29,507,9,29,1,30,1,30,
        1,30,1,30,3,30,513,8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
        1,31,5,31,524,8,31,10,31,12,31,527,9,31,1,31,1,31,3,31,531,8,31,
        1,31,1,31,1,32,1,32,1,32,1,32,4,32,539,8,32,11,32,12,32,540,1,32,
        1,32,3,32,545,8,32,1,32,1,32,1,33,1,33,1,33,5,33,552,8,33,10,33,
        12,33,555,9,33,1,33,1,33,1,33,1,34,1,34,1,35,1,35,1,35,1,35,1,35,
        1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,
        1,37,1,37,3,37,582,8,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,39,
        1,39,1,39,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,
        5,41,605,8,41,10,41,12,41,608,9,41,1,42,1,42,1,42,3,42,613,8,42,
        3,42,615,8,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,
        1,43,1,43,3,43,629,8,43,1,43,1,43,1,43,3,43,634,8,43,1,43,1,43,1,
        43,1,43,1,43,3,43,641,8,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,649,
        8,43,1,43,1,43,3,43,653,8,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,
        1,43,1,43,1,43,1,43,1,43,5,43,667,8,43,10,43,12,43,670,9,43,1,44,
        1,44,1,44,1,44,1,44,1,44,1,44,1,44,3,44,680,8,44,1,45,1,45,3,45,
        684,8,45,1,45,1,45,1,45,1,46,1,46,3,46,691,8,46,1,46,1,46,1,46,1,
        47,1,47,1,47,3,47,699,8,47,1,47,1,47,1,48,1,48,1,48,1,48,5,48,707,
        8,48,10,48,12,48,710,9,48,1,48,1,48,1,49,1,49,1,50,1,50,1,51,1,51,
        1,51,0,2,82,86,52,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
        34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
        78,80,82,84,86,88,90,92,94,96,98,100,102,0,11,2,0,58,63,65,66,1,
        0,11,29,2,0,5,5,31,31,2,0,115,116,118,119,2,0,32,33,108,108,1,0,
        34,35,1,0,36,41,1,0,90,92,2,0,116,116,118,119,1,0,104,107,1,0,101,
        103,781,0,112,1,0,0,0,2,116,1,0,0,0,4,133,1,0,0,0,6,154,1,0,0,0,
        8,181,1,0,0,0,10,206,1,0,0,0,12,235,1,0,0,0,14,254,1,0,0,0,16,304,
        1,0,0,0,18,306,1,0,0,0,20,325,1,0,0,0,22,330,1,0,0,0,24,332,1,0,
        0,0,26,341,1,0,0,0,28,350,1,0,0,0,30,362,1,0,0,0,32,364,1,0,0,0,
        34,378,1,0,0,0,36,421,1,0,0,0,38,423,1,0,0,0,40,433,1,0,0,0,42,435,
        1,0,0,0,44,448,1,0,0,0,46,450,1,0,0,0,48,455,1,0,0,0,50,469,1,0,
        0,0,52,481,1,0,0,0,54,483,1,0,0,0,56,490,1,0,0,0,58,500,1,0,0,0,
        60,512,1,0,0,0,62,514,1,0,0,0,64,534,1,0,0,0,66,548,1,0,0,0,68,559,
        1,0,0,0,70,561,1,0,0,0,72,567,1,0,0,0,74,573,1,0,0,0,76,587,1,0,
        0,0,78,590,1,0,0,0,80,593,1,0,0,0,82,596,1,0,0,0,84,614,1,0,0,0,
        86,652,1,0,0,0,88,679,1,0,0,0,90,681,1,0,0,0,92,688,1,0,0,0,94,695,
        1,0,0,0,96,702,1,0,0,0,98,713,1,0,0,0,100,715,1,0,0,0,102,717,1,
        0,0,0,104,111,3,2,1,0,105,111,3,10,5,0,106,111,3,4,2,0,107,111,3,
        12,6,0,108,111,3,14,7,0,109,111,3,16,8,0,110,104,1,0,0,0,110,105,
        1,0,0,0,110,106,1,0,0,0,110,107,1,0,0,0,110,108,1,0,0,0,110,109,
        1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,1,1,
        0,0,0,114,112,1,0,0,0,115,117,3,94,47,0,116,115,1,0,0,0,116,117,
        1,0,0,0,117,118,1,0,0,0,118,120,5,44,0,0,119,121,3,100,50,0,120,
        119,1,0,0,0,120,121,1,0,0,0,121,122,1,0,0,0,122,126,5,118,0,0,123,
        125,3,32,16,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,
        127,1,0,0,0,127,129,1,0,0,0,128,126,1,0,0,0,129,130,3,48,24,0,130,
        131,5,45,0,0,131,3,1,0,0,0,132,134,3,94,47,0,133,132,1,0,0,0,133,
        134,1,0,0,0,134,135,1,0,0,0,135,137,5,48,0,0,136,138,3,100,50,0,
        137,136,1,0,0,0,137,138,1,0,0,0,138,139,1,0,0,0,139,142,5,118,0,
        0,140,141,5,1,0,0,141,143,3,44,22,0,142,140,1,0,0,0,142,143,1,0,
        0,0,143,147,1,0,0,0,144,146,3,32,16,0,145,144,1,0,0,0,146,149,1,
        0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,147,1,
        0,0,0,150,151,3,48,24,0,151,152,5,49,0,0,152,5,1,0,0,0,153,155,3,
        94,47,0,154,153,1,0,0,0,154,155,1,0,0,0,155,156,1,0,0,0,156,158,
        5,93,0,0,157,159,3,100,50,0,158,157,1,0,0,0,158,159,1,0,0,0,159,
        163,1,0,0,0,160,162,3,102,51,0,161,160,1,0,0,0,162,165,1,0,0,0,163,
        161,1,0,0,0,163,164,1,0,0,0,164,166,1,0,0,0,165,163,1,0,0,0,166,
        169,5,118,0,0,167,168,5,1,0,0,168,170,3,44,22,0,169,167,1,0,0,0,
        169,170,1,0,0,0,170,174,1,0,0,0,171,173,3,32,16,0,172,171,1,0,0,
        0,173,176,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,177,1,0,0,
        0,176,174,1,0,0,0,177,178,3,48,24,0,178,179,5,94,0,0,179,7,1,0,0,
        0,180,182,3,94,47,0,181,180,1,0,0,0,181,182,1,0,0,0,182,183,1,0,
        0,0,183,185,5,50,0,0,184,186,3,100,50,0,185,184,1,0,0,0,185,186,
        1,0,0,0,186,190,1,0,0,0,187,189,3,102,51,0,188,187,1,0,0,0,189,192,
        1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,193,1,0,0,0,192,190,
        1,0,0,0,193,194,5,118,0,0,194,195,5,1,0,0,195,199,3,44,22,0,196,
        198,3,32,16,0,197,196,1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,199,
        200,1,0,0,0,200,202,1,0,0,0,201,199,1,0,0,0,202,203,3,88,44,0,203,
        204,5,51,0,0,204,9,1,0,0,0,205,207,3,94,47,0,206,205,1,0,0,0,206,
        207,1,0,0,0,207,208,1,0,0,0,208,210,5,46,0,0,209,211,3,100,50,0,
        210,209,1,0,0,0,210,211,1,0,0,0,211,215,1,0,0,0,212,214,3,102,51,
        0,213,212,1,0,0,0,214,217,1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,
        0,216,218,1,0,0,0,217,215,1,0,0,0,218,220,5,118,0,0,219,221,3,28,
        14,0,220,219,1,0,0,0,220,221,1,0,0,0,221,223,1,0,0,0,222,224,3,26,
        13,0,223,222,1,0,0,0,223,224,1,0,0,0,224,228,1,0,0,0,225,227,3,30,
        15,0,226,225,1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,0,228,229,1,0,
        0,0,229,231,1,0,0,0,230,228,1,0,0,0,231,232,3,48,24,0,232,233,5,
        47,0,0,233,11,1,0,0,0,234,236,3,94,47,0,235,234,1,0,0,0,235,236,
        1,0,0,0,236,237,1,0,0,0,237,239,5,95,0,0,238,240,3,100,50,0,239,
        238,1,0,0,0,239,240,1,0,0,0,240,241,1,0,0,0,241,243,5,118,0,0,242,
        244,3,28,14,0,243,242,1,0,0,0,243,244,1,0,0,0,244,248,1,0,0,0,245,
        247,3,30,15,0,246,245,1,0,0,0,247,250,1,0,0,0,248,246,1,0,0,0,248,
        249,1,0,0,0,249,251,1,0,0,0,250,248,1,0,0,0,251,252,5,96,0,0,252,
        13,1,0,0,0,253,255,3,94,47,0,254,253,1,0,0,0,254,255,1,0,0,0,255,
        256,1,0,0,0,256,258,5,64,0,0,257,259,3,100,50,0,258,257,1,0,0,0,
        258,259,1,0,0,0,259,263,1,0,0,0,260,262,3,102,51,0,261,260,1,0,0,
        0,262,265,1,0,0,0,263,261,1,0,0,0,263,264,1,0,0,0,264,266,1,0,0,
        0,265,263,1,0,0,0,266,268,5,118,0,0,267,269,3,36,18,0,268,267,1,
        0,0,0,269,270,1,0,0,0,270,268,1,0,0,0,270,271,1,0,0,0,271,272,1,
        0,0,0,272,273,5,67,0,0,273,15,1,0,0,0,274,276,3,94,47,0,275,274,
        1,0,0,0,276,279,1,0,0,0,277,275,1,0,0,0,277,278,1,0,0,0,278,280,
        1,0,0,0,279,277,1,0,0,0,280,282,5,109,0,0,281,283,3,100,50,0,282,
        281,1,0,0,0,282,283,1,0,0,0,283,284,1,0,0,0,284,285,5,118,0,0,285,
        286,5,1,0,0,286,287,3,18,9,0,287,288,5,110,0,0,288,305,1,0,0,0,289,
        291,3,94,47,0,290,289,1,0,0,0,291,294,1,0,0,0,292,290,1,0,0,0,292,
        293,1,0,0,0,293,295,1,0,0,0,294,292,1,0,0,0,295,297,5,109,0,0,296,
        298,3,100,50,0,297,296,1,0,0,0,297,298,1,0,0,0,298,299,1,0,0,0,299,
        300,5,118,0,0,300,301,5,1,0,0,301,302,3,24,12,0,302,303,5,110,0,
        0,303,305,1,0,0,0,304,277,1,0,0,0,304,292,1,0,0,0,305,17,1,0,0,0,
        306,307,5,2,0,0,307,312,3,20,10,0,308,309,5,3,0,0,309,311,3,20,10,
        0,310,308,1,0,0,0,311,314,1,0,0,0,312,310,1,0,0,0,312,313,1,0,0,
        0,313,315,1,0,0,0,314,312,1,0,0,0,315,317,5,4,0,0,316,318,3,44,22,
        0,317,316,1,0,0,0,317,318,1,0,0,0,318,321,1,0,0,0,319,320,5,5,0,
        0,320,322,3,22,11,0,321,319,1,0,0,0,321,322,1,0,0,0,322,323,1,0,
        0,0,323,324,5,6,0,0,324,19,1,0,0,0,325,328,5,118,0,0,326,327,5,5,
        0,0,327,329,3,86,43,0,328,326,1,0,0,0,328,329,1,0,0,0,329,21,1,0,
        0,0,330,331,5,118,0,0,331,23,1,0,0,0,332,336,5,97,0,0,333,335,3,
        36,18,0,334,333,1,0,0,0,335,338,1,0,0,0,336,334,1,0,0,0,336,337,
        1,0,0,0,337,339,1,0,0,0,338,336,1,0,0,0,339,340,5,98,0,0,340,25,
        1,0,0,0,341,342,5,52,0,0,342,347,3,44,22,0,343,344,5,3,0,0,344,346,
        3,44,22,0,345,343,1,0,0,0,346,349,1,0,0,0,347,345,1,0,0,0,347,348,
        1,0,0,0,348,27,1,0,0,0,349,347,1,0,0,0,350,351,5,53,0,0,351,356,
        3,44,22,0,352,353,5,3,0,0,353,355,3,44,22,0,354,352,1,0,0,0,355,
        358,1,0,0,0,356,354,1,0,0,0,356,357,1,0,0,0,357,29,1,0,0,0,358,356,
        1,0,0,0,359,363,3,6,3,0,360,363,3,8,4,0,361,363,3,32,16,0,362,359,
        1,0,0,0,362,360,1,0,0,0,362,361,1,0,0,0,363,31,1,0,0,0,364,368,3,
        34,17,0,365,367,3,102,51,0,366,365,1,0,0,0,367,370,1,0,0,0,368,366,
        1,0,0,0,368,369,1,0,0,0,369,372,1,0,0,0,370,368,1,0,0,0,371,373,
        3,36,18,0,372,371,1,0,0,0,373,374,1,0,0,0,374,372,1,0,0,0,374,375,
        1,0,0,0,375,376,1,0,0,0,376,377,5,67,0,0,377,33,1,0,0,0,378,379,
        7,0,0,0,379,35,1,0,0,0,380,382,3,94,47,0,381,380,1,0,0,0,381,382,
        1,0,0,0,382,383,1,0,0,0,383,384,5,118,0,0,384,385,5,1,0,0,385,386,
        5,113,0,0,386,389,3,44,22,0,387,388,5,7,0,0,388,390,3,86,43,0,389,
        387,1,0,0,0,389,390,1,0,0,0,390,391,1,0,0,0,391,392,5,6,0,0,392,
        422,1,0,0,0,393,395,3,94,47,0,394,393,1,0,0,0,394,395,1,0,0,0,395,
        396,1,0,0,0,396,397,5,118,0,0,397,398,5,1,0,0,398,399,5,114,0,0,
        399,402,3,44,22,0,400,401,5,5,0,0,401,403,3,86,43,0,402,400,1,0,
        0,0,402,403,1,0,0,0,403,404,1,0,0,0,404,405,5,6,0,0,405,422,1,0,
        0,0,406,408,3,94,47,0,407,406,1,0,0,0,407,408,1,0,0,0,408,409,1,
        0,0,0,409,410,5,118,0,0,410,412,5,1,0,0,411,413,3,38,19,0,412,411,
        1,0,0,0,412,413,1,0,0,0,413,414,1,0,0,0,414,417,3,44,22,0,415,416,
        5,5,0,0,416,418,3,40,20,0,417,415,1,0,0,0,417,418,1,0,0,0,418,419,
        1,0,0,0,419,420,5,6,0,0,420,422,1,0,0,0,421,381,1,0,0,0,421,394,
        1,0,0,0,421,407,1,0,0,0,422,37,1,0,0,0,423,424,5,74,0,0,424,425,
        5,8,0,0,425,426,5,116,0,0,426,427,5,9,0,0,427,428,5,116,0,0,428,
        429,5,10,0,0,429,430,5,75,0,0,430,39,1,0,0,0,431,434,3,86,43,0,432,
        434,3,42,21,0,433,431,1,0,0,0,433,432,1,0,0,0,434,41,1,0,0,0,435,
        436,5,8,0,0,436,441,3,86,43,0,437,438,5,3,0,0,438,440,3,86,43,0,
        439,437,1,0,0,0,440,443,1,0,0,0,441,439,1,0,0,0,441,442,1,0,0,0,
        442,444,1,0,0,0,443,441,1,0,0,0,444,445,5,10,0,0,445,43,1,0,0,0,
        446,449,3,46,23,0,447,449,5,118,0,0,448,446,1,0,0,0,448,447,1,0,
        0,0,449,45,1,0,0,0,450,451,7,1,0,0,451,47,1,0,0,0,452,454,3,50,25,
        0,453,452,1,0,0,0,454,457,1,0,0,0,455,453,1,0,0,0,455,456,1,0,0,
        0,456,49,1,0,0,0,457,455,1,0,0,0,458,470,3,52,26,0,459,470,3,62,
        31,0,460,470,3,64,32,0,461,470,3,70,35,0,462,470,3,72,36,0,463,470,
        3,74,37,0,464,470,3,56,28,0,465,470,3,76,38,0,466,470,3,78,39,0,
        467,470,3,80,40,0,468,470,5,6,0,0,469,458,1,0,0,0,469,459,1,0,0,
        0,469,460,1,0,0,0,469,461,1,0,0,0,469,462,1,0,0,0,469,463,1,0,0,
        0,469,464,1,0,0,0,469,465,1,0,0,0,469,466,1,0,0,0,469,467,1,0,0,
        0,469,468,1,0,0,0,470,51,1,0,0,0,471,472,3,82,41,0,472,473,5,5,0,
        0,473,474,3,86,43,0,474,475,5,6,0,0,475,482,1,0,0,0,476,477,3,82,
        41,0,477,478,5,7,0,0,478,479,3,86,43,0,479,480,5,6,0,0,480,482,1,
        0,0,0,481,471,1,0,0,0,481,476,1,0,0,0,482,53,1,0,0,0,483,484,5,8,
        0,0,484,485,3,86,43,0,485,486,5,10,0,0,486,55,1,0,0,0,487,488,3,
        82,41,0,488,489,5,30,0,0,489,491,1,0,0,0,490,487,1,0,0,0,490,491,
        1,0,0,0,491,492,1,0,0,0,492,493,5,118,0,0,493,495,5,2,0,0,494,496,
        3,58,29,0,495,494,1,0,0,0,495,496,1,0,0,0,496,497,1,0,0,0,497,498,
        5,4,0,0,498,499,5,6,0,0,499,57,1,0,0,0,500,505,3,60,30,0,501,502,
        5,3,0,0,502,504,3,60,30,0,503,501,1,0,0,0,504,507,1,0,0,0,505,503,
        1,0,0,0,505,506,1,0,0,0,506,59,1,0,0,0,507,505,1,0,0,0,508,509,5,
        118,0,0,509,510,7,2,0,0,510,513,3,86,43,0,511,513,3,86,43,0,512,
        508,1,0,0,0,512,511,1,0,0,0,513,61,1,0,0,0,514,515,5,68,0,0,515,
        516,3,86,43,0,516,517,5,69,0,0,517,525,3,48,24,0,518,519,5,70,0,
        0,519,520,3,86,43,0,520,521,5,69,0,0,521,522,3,48,24,0,522,524,1,
        0,0,0,523,518,1,0,0,0,524,527,1,0,0,0,525,523,1,0,0,0,525,526,1,
        0,0,0,526,530,1,0,0,0,527,525,1,0,0,0,528,529,5,71,0,0,529,531,3,
        48,24,0,530,528,1,0,0,0,530,531,1,0,0,0,531,532,1,0,0,0,532,533,
        5,72,0,0,533,63,1,0,0,0,534,535,5,73,0,0,535,536,3,86,43,0,536,538,
        5,75,0,0,537,539,3,66,33,0,538,537,1,0,0,0,539,540,1,0,0,0,540,538,
        1,0,0,0,540,541,1,0,0,0,541,544,1,0,0,0,542,543,5,71,0,0,543,545,
        3,48,24,0,544,542,1,0,0,0,544,545,1,0,0,0,545,546,1,0,0,0,546,547,
        5,76,0,0,547,65,1,0,0,0,548,553,3,68,34,0,549,550,5,3,0,0,550,552,
        3,68,34,0,551,549,1,0,0,0,552,555,1,0,0,0,553,551,1,0,0,0,553,554,
        1,0,0,0,554,556,1,0,0,0,555,553,1,0,0,0,556,557,5,1,0,0,557,558,
        3,48,24,0,558,67,1,0,0,0,559,560,7,3,0,0,560,69,1,0,0,0,561,562,
        5,77,0,0,562,563,3,86,43,0,563,564,5,78,0,0,564,565,3,48,24,0,565,
        566,5,79,0,0,566,71,1,0,0,0,567,568,5,80,0,0,568,569,3,48,24,0,569,
        570,5,81,0,0,570,571,3,86,43,0,571,572,5,82,0,0,572,73,1,0,0,0,573,
        574,5,83,0,0,574,575,5,118,0,0,575,576,5,5,0,0,576,577,3,86,43,0,
        577,578,5,84,0,0,578,581,3,86,43,0,579,580,5,85,0,0,580,582,3,86,
        43,0,581,579,1,0,0,0,581,582,1,0,0,0,582,583,1,0,0,0,583,584,5,78,
        0,0,584,585,3,48,24,0,585,586,5,86,0,0,586,75,1,0,0,0,587,588,5,
        87,0,0,588,589,5,6,0,0,589,77,1,0,0,0,590,591,5,88,0,0,591,592,5,
        6,0,0,592,79,1,0,0,0,593,594,5,89,0,0,594,595,5,6,0,0,595,81,1,0,
        0,0,596,597,6,41,-1,0,597,598,3,84,42,0,598,606,1,0,0,0,599,600,
        10,2,0,0,600,601,5,30,0,0,601,605,5,118,0,0,602,603,10,1,0,0,603,
        605,5,112,0,0,604,599,1,0,0,0,604,602,1,0,0,0,605,608,1,0,0,0,606,
        604,1,0,0,0,606,607,1,0,0,0,607,83,1,0,0,0,608,606,1,0,0,0,609,615,
        5,111,0,0,610,612,5,118,0,0,611,613,3,54,27,0,612,611,1,0,0,0,612,
        613,1,0,0,0,613,615,1,0,0,0,614,609,1,0,0,0,614,610,1,0,0,0,615,
        85,1,0,0,0,616,617,6,43,-1,0,617,618,5,2,0,0,618,619,3,86,43,0,619,
        620,5,4,0,0,620,653,1,0,0,0,621,653,5,116,0,0,622,653,5,115,0,0,
        623,653,5,117,0,0,624,653,5,119,0,0,625,626,5,118,0,0,626,628,5,
        2,0,0,627,629,3,58,29,0,628,627,1,0,0,0,628,629,1,0,0,0,629,630,
        1,0,0,0,630,653,5,4,0,0,631,633,5,118,0,0,632,634,3,54,27,0,633,
        632,1,0,0,0,633,634,1,0,0,0,634,653,1,0,0,0,635,636,3,82,41,0,636,
        637,5,30,0,0,637,638,5,118,0,0,638,640,5,2,0,0,639,641,3,58,29,0,
        640,639,1,0,0,0,640,641,1,0,0,0,641,642,1,0,0,0,642,643,5,4,0,0,
        643,653,1,0,0,0,644,645,3,82,41,0,645,646,5,30,0,0,646,648,5,118,
        0,0,647,649,3,54,27,0,648,647,1,0,0,0,648,649,1,0,0,0,649,653,1,
        0,0,0,650,651,5,111,0,0,651,653,5,112,0,0,652,616,1,0,0,0,652,621,
        1,0,0,0,652,622,1,0,0,0,652,623,1,0,0,0,652,624,1,0,0,0,652,625,
        1,0,0,0,652,631,1,0,0,0,652,635,1,0,0,0,652,644,1,0,0,0,652,650,
        1,0,0,0,653,668,1,0,0,0,654,655,10,14,0,0,655,656,7,4,0,0,656,667,
        3,86,43,15,657,658,10,13,0,0,658,659,7,5,0,0,659,667,3,86,43,14,
        660,661,10,12,0,0,661,662,7,6,0,0,662,667,3,86,43,13,663,664,10,
        11,0,0,664,665,7,7,0,0,665,667,3,86,43,12,666,654,1,0,0,0,666,657,
        1,0,0,0,666,660,1,0,0,0,666,663,1,0,0,0,667,670,1,0,0,0,668,666,
        1,0,0,0,668,669,1,0,0,0,669,87,1,0,0,0,670,668,1,0,0,0,671,680,3,
        90,45,0,672,680,3,92,46,0,673,674,3,90,45,0,674,675,3,92,46,0,675,
        680,1,0,0,0,676,677,3,92,46,0,677,678,3,90,45,0,678,680,1,0,0,0,
        679,671,1,0,0,0,679,672,1,0,0,0,679,673,1,0,0,0,679,676,1,0,0,0,
        680,89,1,0,0,0,681,683,5,54,0,0,682,684,3,100,50,0,683,682,1,0,0,
        0,683,684,1,0,0,0,684,685,1,0,0,0,685,686,3,48,24,0,686,687,5,55,
        0,0,687,91,1,0,0,0,688,690,5,56,0,0,689,691,3,100,50,0,690,689,1,
        0,0,0,690,691,1,0,0,0,691,692,1,0,0,0,692,693,3,48,24,0,693,694,
        5,57,0,0,694,93,1,0,0,0,695,696,5,42,0,0,696,698,5,118,0,0,697,699,
        3,96,48,0,698,697,1,0,0,0,698,699,1,0,0,0,699,700,1,0,0,0,700,701,
        5,43,0,0,701,95,1,0,0,0,702,703,5,2,0,0,703,708,3,98,49,0,704,705,
        5,3,0,0,705,707,3,98,49,0,706,704,1,0,0,0,707,710,1,0,0,0,708,706,
        1,0,0,0,708,709,1,0,0,0,709,711,1,0,0,0,710,708,1,0,0,0,711,712,
        5,4,0,0,712,97,1,0,0,0,713,714,7,8,0,0,714,99,1,0,0,0,715,716,7,
        9,0,0,716,101,1,0,0,0,717,718,7,10,0,0,718,103,1,0,0,0,87,110,112,
        116,120,126,133,137,142,147,154,158,163,169,174,181,185,190,199,
        206,210,215,220,223,228,235,239,243,248,254,258,263,270,277,282,
        292,297,304,312,317,321,328,336,347,356,362,368,374,381,389,394,
        402,407,412,417,421,433,441,448,455,469,481,490,495,505,512,525,
        530,540,544,553,581,604,606,612,614,628,633,640,648,652,666,668,
        679,683,690,698,708
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
    public REFERENCE_TO(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.REFERENCE_TO, 0);
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public attribute(): AttributeContext | null {
        return this.getRuleContext(0, AttributeContext);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public POINTER_TO(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.POINTER_TO, 0);
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
    public memberQualifier(): MemberQualifierContext {
        return this.getRuleContext(0, MemberQualifierContext)!;
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
    public primary(): PrimaryContext | null {
        return this.getRuleContext(0, PrimaryContext);
    }
    public memberQualifier(): MemberQualifierContext | null {
        return this.getRuleContext(0, MemberQualifierContext);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ID, 0);
    }
    public CARET(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.CARET, 0);
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


export class PrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public THIS(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.THIS, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ID, 0);
    }
    public arrayIndex(): ArrayIndexContext | null {
        return this.getRuleContext(0, ArrayIndexContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_primary;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
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
    public THIS(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.THIS, 0);
    }
    public CARET(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.CARET, 0);
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
