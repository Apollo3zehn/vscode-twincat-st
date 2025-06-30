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
    public static readonly RULE_functionBlock = 3;
    public static readonly RULE_property = 4;
    public static readonly RULE_method = 5;
    public static readonly RULE_interface = 6;
    public static readonly RULE_varGlobalSection = 7;
    public static readonly RULE_typeDecl = 8;
    public static readonly RULE_enumTypeDecl = 9;
    public static readonly RULE_enumMember = 10;
    public static readonly RULE_structDecl = 11;
    public static readonly RULE_implementsClause = 12;
    public static readonly RULE_extendsClause = 13;
    public static readonly RULE_member = 14;
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
    public static readonly RULE_propertyBody = 43;
    public static readonly RULE_getter = 44;
    public static readonly RULE_setter = 45;
    public static readonly RULE_attribute = 46;
    public static readonly RULE_attributeArgList = 47;
    public static readonly RULE_attributeArg = 48;
    public static readonly RULE_accessModifier = 49;
    public static readonly RULE_modifier = 50;

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
        "compilationUnit", "program", "function", "functionBlock", "property", 
        "method", "interface", "varGlobalSection", "typeDecl", "enumTypeDecl", 
        "enumMember", "structDecl", "implementsClause", "extendsClause", 
        "member", "varDeclSection", "varSectionType", "varDecl", "arraySpec", 
        "exprOrArrayInit", "arrayInit", "type", "builtinType", "statementSection", 
        "statement", "assignment", "assignTarget", "arrayIndex", "callStatement", 
        "argumentList", "argument", "ifStatement", "caseStatement", "caseElement", 
        "caseValue", "whileStatement", "repeatStatement", "forStatement", 
        "returnStatement", "exitStatement", "continueStatement", "memberQualifier", 
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
            this.state = 110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 4194389) !== 0) || _la === 94 || _la === 109) {
                {
                this.state = 108;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                case 1:
                    {
                    this.state = 102;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 103;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 104;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 105;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 106;
                    this.varGlobalSection();
                    }
                    break;
                case 6:
                    {
                    this.state = 107;
                    this.typeDecl();
                    }
                    break;
                }
                }
                this.state = 112;
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
            this.state = 114;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 113;
                this.attribute();
                }
            }

            this.state = 116;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 118;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 117;
                this.accessModifier();
                }
            }

            this.state = 120;
            this.match(StructuredTextParser.ID);
            this.state = 124;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 121;
                this.varDeclSection();
                }
                }
                this.state = 126;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 127;
            this.statementSection();
            this.state = 128;
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
            this.state = 131;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 130;
                this.attribute();
                }
            }

            this.state = 133;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 135;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 134;
                this.accessModifier();
                }
            }

            this.state = 137;
            this.match(StructuredTextParser.ID);
            this.state = 138;
            this.match(StructuredTextParser.T__0);
            this.state = 139;
            this.type_();
            this.state = 141;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 140;
                this.implementsClause();
                }
            }

            this.state = 144;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 143;
                this.extendsClause();
                }
            }

            this.state = 149;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 146;
                this.varDeclSection();
                }
                }
                this.state = 151;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 152;
            this.statementSection();
            this.state = 153;
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
        this.enterRule(localContext, 6, StructuredTextParser.RULE_functionBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 156;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 155;
                this.attribute();
                }
            }

            this.state = 158;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 160;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 159;
                this.accessModifier();
                }
            }

            this.state = 165;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 162;
                this.modifier();
                }
                }
                this.state = 167;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 168;
            this.match(StructuredTextParser.ID);
            this.state = 170;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 169;
                this.implementsClause();
                }
            }

            this.state = 173;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 172;
                this.extendsClause();
                }
            }

            this.state = 178;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 29294849) !== 0) || _la === 92) {
                {
                {
                this.state = 175;
                this.member();
                }
                }
                this.state = 180;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 181;
            this.statementSection();
            this.state = 182;
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
        this.enterRule(localContext, 8, StructuredTextParser.RULE_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 185;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 184;
                this.attribute();
                }
            }

            this.state = 187;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 189;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 188;
                this.accessModifier();
                }
            }

            this.state = 194;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 191;
                this.modifier();
                }
                }
                this.state = 196;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 197;
            this.match(StructuredTextParser.ID);
            this.state = 198;
            this.match(StructuredTextParser.T__0);
            this.state = 199;
            this.type_();
            this.state = 203;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 200;
                this.varDeclSection();
                }
                }
                this.state = 205;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 206;
            this.propertyBody();
            this.state = 207;
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
        this.enterRule(localContext, 10, StructuredTextParser.RULE_method);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 210;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 209;
                this.attribute();
                }
            }

            this.state = 212;
            this.match(StructuredTextParser.METHOD);
            this.state = 214;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 213;
                this.accessModifier();
                }
            }

            this.state = 219;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 216;
                this.modifier();
                }
                }
                this.state = 221;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 222;
            this.match(StructuredTextParser.ID);
            this.state = 225;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 223;
                this.match(StructuredTextParser.T__0);
                this.state = 224;
                this.type_();
                }
            }

            this.state = 230;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 447) !== 0)) {
                {
                {
                this.state = 227;
                this.varDeclSection();
                }
                }
                this.state = 232;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 233;
            this.statementSection();
            this.state = 234;
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
        this.enterRule(localContext, 12, StructuredTextParser.RULE_interface);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 237;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 236;
                this.attribute();
                }
            }

            this.state = 239;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 241;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 240;
                this.accessModifier();
                }
            }

            this.state = 243;
            this.match(StructuredTextParser.ID);
            this.state = 245;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 52) {
                {
                this.state = 244;
                this.extendsClause();
                }
            }

            this.state = 250;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 29294849) !== 0) || _la === 92) {
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
            this.state = 256;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 255;
                this.attribute();
                }
            }

            this.state = 258;
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 262;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 259;
                this.modifier();
                }
                }
                this.state = 264;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 266;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 265;
                this.varDecl();
                }
                }
                this.state = 268;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 41 || _la === 112);
            this.state = 270;
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
            this.state = 302;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 275;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 272;
                    this.attribute();
                    }
                    }
                    this.state = 277;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 278;
                this.match(StructuredTextParser.TYPE);
                this.state = 280;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                    {
                    this.state = 279;
                    this.accessModifier();
                    }
                }

                this.state = 282;
                this.match(StructuredTextParser.ID);
                this.state = 283;
                this.match(StructuredTextParser.T__0);
                this.state = 284;
                this.enumTypeDecl();
                this.state = 285;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 290;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 41) {
                    {
                    {
                    this.state = 287;
                    this.attribute();
                    }
                    }
                    this.state = 292;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 293;
                this.match(StructuredTextParser.TYPE);
                this.state = 295;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                    {
                    this.state = 294;
                    this.accessModifier();
                    }
                }

                this.state = 297;
                this.match(StructuredTextParser.ID);
                this.state = 298;
                this.match(StructuredTextParser.T__0);
                this.state = 299;
                this.structDecl();
                this.state = 300;
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
    public enumTypeDecl(): EnumTypeDeclContext {
        let localContext = new EnumTypeDeclContext(this.context, this.state);
        this.enterRule(localContext, 18, StructuredTextParser.RULE_enumTypeDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 304;
            this.match(StructuredTextParser.T__1);
            this.state = 305;
            this.enumMember();
            this.state = 310;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 306;
                this.match(StructuredTextParser.T__2);
                this.state = 307;
                this.enumMember();
                }
                }
                this.state = 312;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 313;
            this.match(StructuredTextParser.T__3);
            this.state = 315;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536869888) !== 0) || _la === 112) {
                {
                this.state = 314;
                this.type_();
                }
            }

            this.state = 319;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 317;
                this.match(StructuredTextParser.T__4);
                this.state = 318;
                this.match(StructuredTextParser.ID);
                }
            }

            this.state = 321;
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
            this.state = 323;
            this.match(StructuredTextParser.ID);
            this.state = 326;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 324;
                this.match(StructuredTextParser.T__4);
                this.state = 325;
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
    public structDecl(): StructDeclContext {
        let localContext = new StructDeclContext(this.context, this.state);
        this.enterRule(localContext, 22, StructuredTextParser.RULE_structDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 328;
            this.match(StructuredTextParser.STRUCT);
            this.state = 332;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 41 || _la === 112) {
                {
                {
                this.state = 329;
                this.varDecl();
                }
                }
                this.state = 334;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 335;
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
        this.enterRule(localContext, 24, StructuredTextParser.RULE_implementsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 337;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 338;
            this.type_();
            this.state = 343;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 339;
                this.match(StructuredTextParser.T__2);
                this.state = 340;
                this.type_();
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
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 346;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 347;
            this.type_();
            this.state = 352;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 348;
                this.match(StructuredTextParser.T__2);
                this.state = 349;
                this.type_();
                }
                }
                this.state = 354;
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
        this.enterRule(localContext, 28, StructuredTextParser.RULE_member);
        try {
            this.state = 358;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 355;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 356;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 357;
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
        this.enterRule(localContext, 30, StructuredTextParser.RULE_varDeclSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 360;
            this.varSectionType();
            this.state = 364;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 7) !== 0)) {
                {
                {
                this.state = 361;
                this.modifier();
                }
                }
                this.state = 366;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 368;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 367;
                this.varDecl();
                }
                }
                this.state = 370;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 41 || _la === 112);
            this.state = 372;
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
            this.state = 374;
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
            this.state = 377;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 41) {
                {
                this.state = 376;
                this.attribute();
                }
            }

            this.state = 379;
            this.match(StructuredTextParser.ID);
            this.state = 380;
            this.match(StructuredTextParser.T__0);
            this.state = 382;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 107) {
                {
                this.state = 381;
                this.match(StructuredTextParser.REFERENCE_TO);
                }
            }

            this.state = 385;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 73) {
                {
                this.state = 384;
                this.arraySpec();
                }
            }

            this.state = 387;
            this.type_();
            this.state = 390;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 388;
                this.match(StructuredTextParser.T__4);
                this.state = 389;
                this.exprOrArrayInit();
                }
            }

            this.state = 392;
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
        this.enterRule(localContext, 36, StructuredTextParser.RULE_arraySpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 394;
            this.match(StructuredTextParser.ARRAY);
            this.state = 395;
            this.match(StructuredTextParser.T__6);
            this.state = 396;
            this.match(StructuredTextParser.NUMBER);
            this.state = 397;
            this.match(StructuredTextParser.T__7);
            this.state = 398;
            this.match(StructuredTextParser.NUMBER);
            this.state = 399;
            this.match(StructuredTextParser.T__8);
            this.state = 400;
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
            this.state = 404;
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
                this.state = 402;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__6:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 403;
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
            this.state = 406;
            this.match(StructuredTextParser.T__6);
            this.state = 407;
            this.expr(0);
            this.state = 412;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 408;
                this.match(StructuredTextParser.T__2);
                this.state = 409;
                this.expr(0);
                }
                }
                this.state = 414;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 415;
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
            this.state = 419;
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
                this.state = 417;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 418;
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
            this.state = 421;
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
        this.enterRule(localContext, 46, StructuredTextParser.RULE_statementSection);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 426;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 423;
                    this.statement();
                    }
                    }
                }
                this.state = 428;
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
        this.enterRule(localContext, 48, StructuredTextParser.RULE_statement);
        try {
            this.state = 440;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 429;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 430;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 431;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 432;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 433;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 434;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 435;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 436;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 437;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 438;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 439;
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
        this.enterRule(localContext, 50, StructuredTextParser.RULE_assignment);
        try {
            this.state = 452;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 442;
                this.assignTarget();
                this.state = 443;
                this.match(StructuredTextParser.T__4);
                this.state = 444;
                this.expr(0);
                this.state = 445;
                this.match(StructuredTextParser.T__5);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 447;
                this.assignTarget();
                this.state = 448;
                this.match(StructuredTextParser.T__28);
                this.state = 449;
                this.expr(0);
                this.state = 450;
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
        this.enterRule(localContext, 52, StructuredTextParser.RULE_assignTarget);
        let _la: number;
        try {
            this.state = 464;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 454;
                this.match(StructuredTextParser.ID);
                this.state = 456;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 7) {
                    {
                    this.state = 455;
                    this.arrayIndex();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 458;
                this.memberQualifier();
                this.state = 459;
                this.match(StructuredTextParser.T__29);
                this.state = 460;
                this.match(StructuredTextParser.ID);
                this.state = 462;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 7) {
                    {
                    this.state = 461;
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
            this.state = 466;
            this.match(StructuredTextParser.T__6);
            this.state = 467;
            this.expr(0);
            this.state = 468;
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
        this.enterRule(localContext, 56, StructuredTextParser.RULE_callStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 475;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
            case 1:
                {
                this.state = 470;
                this.match(StructuredTextParser.ID);
                }
                break;
            case 2:
                {
                this.state = 471;
                this.memberQualifier();
                this.state = 472;
                this.match(StructuredTextParser.T__29);
                this.state = 473;
                this.match(StructuredTextParser.ID);
                }
                break;
            }
            this.state = 477;
            this.match(StructuredTextParser.T__1);
            this.state = 479;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 63) !== 0)) {
                {
                this.state = 478;
                this.argumentList();
                }
            }

            this.state = 481;
            this.match(StructuredTextParser.T__3);
            this.state = 482;
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
            this.state = 484;
            this.argument();
            this.state = 489;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 485;
                this.match(StructuredTextParser.T__2);
                this.state = 486;
                this.argument();
                }
                }
                this.state = 491;
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
            this.state = 496;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 63, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 492;
                this.match(StructuredTextParser.ID);
                this.state = 493;
                _la = this.tokenStream.LA(1);
                if(!(_la === 5 || _la === 31)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 494;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 495;
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
            this.state = 498;
            this.match(StructuredTextParser.IF);
            this.state = 499;
            this.expr(0);
            this.state = 500;
            this.match(StructuredTextParser.THEN);
            this.state = 501;
            this.statementSection();
            this.state = 509;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 69) {
                {
                {
                this.state = 502;
                this.match(StructuredTextParser.ELSIF);
                this.state = 503;
                this.expr(0);
                this.state = 504;
                this.match(StructuredTextParser.THEN);
                this.state = 505;
                this.statementSection();
                }
                }
                this.state = 511;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 514;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 70) {
                {
                this.state = 512;
                this.match(StructuredTextParser.ELSE);
                this.state = 513;
                this.statementSection();
                }
            }

            this.state = 516;
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
            this.state = 518;
            this.match(StructuredTextParser.CASE);
            this.state = 519;
            this.expr(0);
            this.state = 520;
            this.match(StructuredTextParser.OF);
            this.state = 522;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 521;
                this.caseElement();
                }
                }
                this.state = 524;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 39) !== 0));
            this.state = 528;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 70) {
                {
                this.state = 526;
                this.match(StructuredTextParser.ELSE);
                this.state = 527;
                this.statementSection();
                }
            }

            this.state = 530;
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
            this.state = 532;
            this.caseValue();
            this.state = 537;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 533;
                this.match(StructuredTextParser.T__2);
                this.state = 534;
                this.caseValue();
                }
                }
                this.state = 539;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 540;
            this.match(StructuredTextParser.T__0);
            this.state = 541;
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
            this.state = 543;
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
        this.enterRule(localContext, 70, StructuredTextParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 545;
            this.match(StructuredTextParser.WHILE);
            this.state = 546;
            this.expr(0);
            this.state = 547;
            this.match(StructuredTextParser.DO);
            this.state = 548;
            this.statementSection();
            this.state = 549;
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
            this.state = 551;
            this.match(StructuredTextParser.REPEAT);
            this.state = 552;
            this.statementSection();
            this.state = 553;
            this.match(StructuredTextParser.UNTIL);
            this.state = 554;
            this.expr(0);
            this.state = 555;
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
            this.state = 557;
            this.match(StructuredTextParser.FOR);
            this.state = 558;
            this.match(StructuredTextParser.ID);
            this.state = 559;
            this.match(StructuredTextParser.T__4);
            this.state = 560;
            this.expr(0);
            this.state = 561;
            this.match(StructuredTextParser.TO);
            this.state = 562;
            this.expr(0);
            this.state = 565;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 84) {
                {
                this.state = 563;
                this.match(StructuredTextParser.BY);
                this.state = 564;
                this.expr(0);
                }
            }

            this.state = 567;
            this.match(StructuredTextParser.DO);
            this.state = 568;
            this.statementSection();
            this.state = 569;
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
            this.state = 571;
            this.match(StructuredTextParser.RETURN);
            this.state = 572;
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
            this.state = 574;
            this.match(StructuredTextParser.EXIT);
            this.state = 575;
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
            this.state = 577;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 578;
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
        this.enterRule(localContext, 82, StructuredTextParser.RULE_memberQualifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 580;
            this.match(StructuredTextParser.ID);
            this.state = 582;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7) {
                {
                this.state = 581;
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
            this.state = 619;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
            case 1:
                {
                this.state = 585;
                this.match(StructuredTextParser.ID);
                this.state = 586;
                this.match(StructuredTextParser.T__1);
                this.state = 588;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 2 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 63) !== 0)) {
                    {
                    this.state = 587;
                    this.argumentList();
                    }
                }

                this.state = 590;
                this.match(StructuredTextParser.T__3);
                }
                break;
            case 2:
                {
                this.state = 591;
                this.match(StructuredTextParser.ID);
                this.state = 593;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context) ) {
                case 1:
                    {
                    this.state = 592;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            case 3:
                {
                this.state = 595;
                this.memberQualifier();
                this.state = 596;
                this.match(StructuredTextParser.T__29);
                this.state = 597;
                this.match(StructuredTextParser.ID);
                this.state = 598;
                this.match(StructuredTextParser.T__1);
                this.state = 600;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 2 || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 63) !== 0)) {
                    {
                    this.state = 599;
                    this.argumentList();
                    }
                }

                this.state = 602;
                this.match(StructuredTextParser.T__3);
                }
                break;
            case 4:
                {
                this.state = 604;
                this.memberQualifier();
                this.state = 605;
                this.match(StructuredTextParser.T__29);
                this.state = 606;
                this.match(StructuredTextParser.ID);
                this.state = 608;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
                case 1:
                    {
                    this.state = 607;
                    this.arrayIndex();
                    }
                    break;
                }
                }
                break;
            case 5:
                {
                this.state = 610;
                this.match(StructuredTextParser.T__1);
                this.state = 611;
                this.expr(0);
                this.state = 612;
                this.match(StructuredTextParser.T__3);
                }
                break;
            case 6:
                {
                this.state = 614;
                this.match(StructuredTextParser.NUMBER);
                }
                break;
            case 7:
                {
                this.state = 615;
                this.match(StructuredTextParser.HEX_NUMBER);
                }
                break;
            case 8:
                {
                this.state = 616;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case 9:
                {
                this.state = 617;
                this.match(StructuredTextParser.TIME_LITERAL);
                }
                break;
            case 10:
                {
                this.state = 618;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 635;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 77, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 633;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 621;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 622;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 32 || _la === 33 || _la === 108)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 623;
                        this.expr(15);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 624;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 625;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 34 || _la === 35)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 626;
                        this.expr(14);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 627;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 628;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 3969) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 629;
                        this.expr(13);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 630;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 631;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 632;
                        this.expr(12);
                        }
                        break;
                    }
                    }
                }
                this.state = 637;
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
        this.enterRule(localContext, 86, StructuredTextParser.RULE_propertyBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 646;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
            case 1:
                {
                this.state = 638;
                this.getter();
                }
                break;
            case 2:
                {
                this.state = 639;
                this.setter();
                }
                break;
            case 3:
                {
                this.state = 640;
                this.getter();
                this.state = 641;
                this.setter();
                }
                break;
            case 4:
                {
                this.state = 643;
                this.setter();
                this.state = 644;
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
            this.state = 648;
            this.match(StructuredTextParser.GET);
            this.state = 650;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 649;
                this.accessModifier();
                }
            }

            this.state = 652;
            this.statementSection();
            this.state = 653;
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
            this.state = 655;
            this.match(StructuredTextParser.SET);
            this.state = 657;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 15) !== 0)) {
                {
                this.state = 656;
                this.accessModifier();
                }
            }

            this.state = 659;
            this.statementSection();
            this.state = 660;
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
            this.state = 662;
            this.match(StructuredTextParser.T__40);
            this.state = 663;
            this.match(StructuredTextParser.ID);
            this.state = 665;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 664;
                this.attributeArgList();
                }
            }

            this.state = 667;
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
            this.state = 669;
            this.match(StructuredTextParser.T__1);
            this.state = 670;
            this.attributeArg();
            this.state = 675;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 671;
                this.match(StructuredTextParser.T__2);
                this.state = 672;
                this.attributeArg();
                }
                }
                this.state = 677;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 678;
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
        this.enterRule(localContext, 96, StructuredTextParser.RULE_attributeArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 680;
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
        this.enterRule(localContext, 98, StructuredTextParser.RULE_accessModifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 682;
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
        this.enterRule(localContext, 100, StructuredTextParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 684;
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
        case 42:
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
        4,1,119,687,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,1,0,1,0,1,0,1,0,
        1,0,1,0,5,0,109,8,0,10,0,12,0,112,9,0,1,1,3,1,115,8,1,1,1,1,1,3,
        1,119,8,1,1,1,1,1,5,1,123,8,1,10,1,12,1,126,9,1,1,1,1,1,1,1,1,2,
        3,2,132,8,2,1,2,1,2,3,2,136,8,2,1,2,1,2,1,2,1,2,3,2,142,8,2,1,2,
        3,2,145,8,2,1,2,5,2,148,8,2,10,2,12,2,151,9,2,1,2,1,2,1,2,1,3,3,
        3,157,8,3,1,3,1,3,3,3,161,8,3,1,3,5,3,164,8,3,10,3,12,3,167,9,3,
        1,3,1,3,3,3,171,8,3,1,3,3,3,174,8,3,1,3,5,3,177,8,3,10,3,12,3,180,
        9,3,1,3,1,3,1,3,1,4,3,4,186,8,4,1,4,1,4,3,4,190,8,4,1,4,5,4,193,
        8,4,10,4,12,4,196,9,4,1,4,1,4,1,4,1,4,5,4,202,8,4,10,4,12,4,205,
        9,4,1,4,1,4,1,4,1,5,3,5,211,8,5,1,5,1,5,3,5,215,8,5,1,5,5,5,218,
        8,5,10,5,12,5,221,9,5,1,5,1,5,1,5,3,5,226,8,5,1,5,5,5,229,8,5,10,
        5,12,5,232,9,5,1,5,1,5,1,5,1,6,3,6,238,8,6,1,6,1,6,3,6,242,8,6,1,
        6,1,6,3,6,246,8,6,1,6,5,6,249,8,6,10,6,12,6,252,9,6,1,6,1,6,1,7,
        3,7,257,8,7,1,7,1,7,5,7,261,8,7,10,7,12,7,264,9,7,1,7,4,7,267,8,
        7,11,7,12,7,268,1,7,1,7,1,8,5,8,274,8,8,10,8,12,8,277,9,8,1,8,1,
        8,3,8,281,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,289,8,8,10,8,12,8,292,
        9,8,1,8,1,8,3,8,296,8,8,1,8,1,8,1,8,1,8,1,8,3,8,303,8,8,1,9,1,9,
        1,9,1,9,5,9,309,8,9,10,9,12,9,312,9,9,1,9,1,9,3,9,316,8,9,1,9,1,
        9,3,9,320,8,9,1,9,1,9,1,10,1,10,1,10,3,10,327,8,10,1,11,1,11,5,11,
        331,8,11,10,11,12,11,334,9,11,1,11,1,11,1,12,1,12,1,12,1,12,5,12,
        342,8,12,10,12,12,12,345,9,12,1,13,1,13,1,13,1,13,5,13,351,8,13,
        10,13,12,13,354,9,13,1,14,1,14,1,14,3,14,359,8,14,1,15,1,15,5,15,
        363,8,15,10,15,12,15,366,9,15,1,15,4,15,369,8,15,11,15,12,15,370,
        1,15,1,15,1,16,1,16,1,17,3,17,378,8,17,1,17,1,17,1,17,3,17,383,8,
        17,1,17,3,17,386,8,17,1,17,1,17,1,17,3,17,391,8,17,1,17,1,17,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,3,19,405,8,19,1,20,
        1,20,1,20,1,20,5,20,411,8,20,10,20,12,20,414,9,20,1,20,1,20,1,21,
        1,21,3,21,420,8,21,1,22,1,22,1,23,5,23,425,8,23,10,23,12,23,428,
        9,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,
        441,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,
        453,8,25,1,26,1,26,3,26,457,8,26,1,26,1,26,1,26,1,26,3,26,463,8,
        26,3,26,465,8,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,3,
        28,476,8,28,1,28,1,28,3,28,480,8,28,1,28,1,28,1,28,1,29,1,29,1,29,
        5,29,488,8,29,10,29,12,29,491,9,29,1,30,1,30,1,30,1,30,3,30,497,
        8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,5,31,508,8,31,
        10,31,12,31,511,9,31,1,31,1,31,3,31,515,8,31,1,31,1,31,1,32,1,32,
        1,32,1,32,4,32,523,8,32,11,32,12,32,524,1,32,1,32,3,32,529,8,32,
        1,32,1,32,1,33,1,33,1,33,5,33,536,8,33,10,33,12,33,539,9,33,1,33,
        1,33,1,33,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,
        1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,566,
        8,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,
        1,40,1,41,1,41,3,41,583,8,41,1,42,1,42,1,42,1,42,3,42,589,8,42,1,
        42,1,42,1,42,3,42,594,8,42,1,42,1,42,1,42,1,42,1,42,3,42,601,8,42,
        1,42,1,42,1,42,1,42,1,42,1,42,3,42,609,8,42,1,42,1,42,1,42,1,42,
        1,42,1,42,1,42,1,42,1,42,3,42,620,8,42,1,42,1,42,1,42,1,42,1,42,
        1,42,1,42,1,42,1,42,1,42,1,42,1,42,5,42,634,8,42,10,42,12,42,637,
        9,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,647,8,43,1,44,
        1,44,3,44,651,8,44,1,44,1,44,1,44,1,45,1,45,3,45,658,8,45,1,45,1,
        45,1,45,1,46,1,46,1,46,3,46,666,8,46,1,46,1,46,1,47,1,47,1,47,1,
        47,5,47,674,8,47,10,47,12,47,677,9,47,1,47,1,47,1,48,1,48,1,49,1,
        49,1,50,1,50,1,50,0,1,84,51,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
        28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
        72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,0,11,2,0,57,62,64,
        65,1,0,10,28,2,0,5,5,31,31,2,0,111,113,116,116,2,0,32,33,108,108,
        1,0,34,35,2,0,29,29,36,40,1,0,89,91,2,0,112,113,116,116,1,0,103,
        106,1,0,100,102,744,0,110,1,0,0,0,2,114,1,0,0,0,4,131,1,0,0,0,6,
        156,1,0,0,0,8,185,1,0,0,0,10,210,1,0,0,0,12,237,1,0,0,0,14,256,1,
        0,0,0,16,302,1,0,0,0,18,304,1,0,0,0,20,323,1,0,0,0,22,328,1,0,0,
        0,24,337,1,0,0,0,26,346,1,0,0,0,28,358,1,0,0,0,30,360,1,0,0,0,32,
        374,1,0,0,0,34,377,1,0,0,0,36,394,1,0,0,0,38,404,1,0,0,0,40,406,
        1,0,0,0,42,419,1,0,0,0,44,421,1,0,0,0,46,426,1,0,0,0,48,440,1,0,
        0,0,50,452,1,0,0,0,52,464,1,0,0,0,54,466,1,0,0,0,56,475,1,0,0,0,
        58,484,1,0,0,0,60,496,1,0,0,0,62,498,1,0,0,0,64,518,1,0,0,0,66,532,
        1,0,0,0,68,543,1,0,0,0,70,545,1,0,0,0,72,551,1,0,0,0,74,557,1,0,
        0,0,76,571,1,0,0,0,78,574,1,0,0,0,80,577,1,0,0,0,82,580,1,0,0,0,
        84,619,1,0,0,0,86,646,1,0,0,0,88,648,1,0,0,0,90,655,1,0,0,0,92,662,
        1,0,0,0,94,669,1,0,0,0,96,680,1,0,0,0,98,682,1,0,0,0,100,684,1,0,
        0,0,102,109,3,2,1,0,103,109,3,6,3,0,104,109,3,4,2,0,105,109,3,12,
        6,0,106,109,3,14,7,0,107,109,3,16,8,0,108,102,1,0,0,0,108,103,1,
        0,0,0,108,104,1,0,0,0,108,105,1,0,0,0,108,106,1,0,0,0,108,107,1,
        0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,1,1,0,
        0,0,112,110,1,0,0,0,113,115,3,92,46,0,114,113,1,0,0,0,114,115,1,
        0,0,0,115,116,1,0,0,0,116,118,5,43,0,0,117,119,3,98,49,0,118,117,
        1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,124,5,112,0,0,121,123,
        3,30,15,0,122,121,1,0,0,0,123,126,1,0,0,0,124,122,1,0,0,0,124,125,
        1,0,0,0,125,127,1,0,0,0,126,124,1,0,0,0,127,128,3,46,23,0,128,129,
        5,44,0,0,129,3,1,0,0,0,130,132,3,92,46,0,131,130,1,0,0,0,131,132,
        1,0,0,0,132,133,1,0,0,0,133,135,5,47,0,0,134,136,3,98,49,0,135,134,
        1,0,0,0,135,136,1,0,0,0,136,137,1,0,0,0,137,138,5,112,0,0,138,139,
        5,1,0,0,139,141,3,42,21,0,140,142,3,24,12,0,141,140,1,0,0,0,141,
        142,1,0,0,0,142,144,1,0,0,0,143,145,3,26,13,0,144,143,1,0,0,0,144,
        145,1,0,0,0,145,149,1,0,0,0,146,148,3,30,15,0,147,146,1,0,0,0,148,
        151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,152,1,0,0,0,151,
        149,1,0,0,0,152,153,3,46,23,0,153,154,5,48,0,0,154,5,1,0,0,0,155,
        157,3,92,46,0,156,155,1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,
        160,5,45,0,0,159,161,3,98,49,0,160,159,1,0,0,0,160,161,1,0,0,0,161,
        165,1,0,0,0,162,164,3,100,50,0,163,162,1,0,0,0,164,167,1,0,0,0,165,
        163,1,0,0,0,165,166,1,0,0,0,166,168,1,0,0,0,167,165,1,0,0,0,168,
        170,5,112,0,0,169,171,3,24,12,0,170,169,1,0,0,0,170,171,1,0,0,0,
        171,173,1,0,0,0,172,174,3,26,13,0,173,172,1,0,0,0,173,174,1,0,0,
        0,174,178,1,0,0,0,175,177,3,28,14,0,176,175,1,0,0,0,177,180,1,0,
        0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,181,1,0,0,0,180,178,1,0,
        0,0,181,182,3,46,23,0,182,183,5,46,0,0,183,7,1,0,0,0,184,186,3,92,
        46,0,185,184,1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,189,5,49,
        0,0,188,190,3,98,49,0,189,188,1,0,0,0,189,190,1,0,0,0,190,194,1,
        0,0,0,191,193,3,100,50,0,192,191,1,0,0,0,193,196,1,0,0,0,194,192,
        1,0,0,0,194,195,1,0,0,0,195,197,1,0,0,0,196,194,1,0,0,0,197,198,
        5,112,0,0,198,199,5,1,0,0,199,203,3,42,21,0,200,202,3,30,15,0,201,
        200,1,0,0,0,202,205,1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,0,204,
        206,1,0,0,0,205,203,1,0,0,0,206,207,3,86,43,0,207,208,5,50,0,0,208,
        9,1,0,0,0,209,211,3,92,46,0,210,209,1,0,0,0,210,211,1,0,0,0,211,
        212,1,0,0,0,212,214,5,92,0,0,213,215,3,98,49,0,214,213,1,0,0,0,214,
        215,1,0,0,0,215,219,1,0,0,0,216,218,3,100,50,0,217,216,1,0,0,0,218,
        221,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,222,1,0,0,0,221,
        219,1,0,0,0,222,225,5,112,0,0,223,224,5,1,0,0,224,226,3,42,21,0,
        225,223,1,0,0,0,225,226,1,0,0,0,226,230,1,0,0,0,227,229,3,30,15,
        0,228,227,1,0,0,0,229,232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,
        0,231,233,1,0,0,0,232,230,1,0,0,0,233,234,3,46,23,0,234,235,5,93,
        0,0,235,11,1,0,0,0,236,238,3,92,46,0,237,236,1,0,0,0,237,238,1,0,
        0,0,238,239,1,0,0,0,239,241,5,94,0,0,240,242,3,98,49,0,241,240,1,
        0,0,0,241,242,1,0,0,0,242,243,1,0,0,0,243,245,5,112,0,0,244,246,
        3,26,13,0,245,244,1,0,0,0,245,246,1,0,0,0,246,250,1,0,0,0,247,249,
        3,28,14,0,248,247,1,0,0,0,249,252,1,0,0,0,250,248,1,0,0,0,250,251,
        1,0,0,0,251,253,1,0,0,0,252,250,1,0,0,0,253,254,5,95,0,0,254,13,
        1,0,0,0,255,257,3,92,46,0,256,255,1,0,0,0,256,257,1,0,0,0,257,258,
        1,0,0,0,258,262,5,63,0,0,259,261,3,100,50,0,260,259,1,0,0,0,261,
        264,1,0,0,0,262,260,1,0,0,0,262,263,1,0,0,0,263,266,1,0,0,0,264,
        262,1,0,0,0,265,267,3,34,17,0,266,265,1,0,0,0,267,268,1,0,0,0,268,
        266,1,0,0,0,268,269,1,0,0,0,269,270,1,0,0,0,270,271,5,66,0,0,271,
        15,1,0,0,0,272,274,3,92,46,0,273,272,1,0,0,0,274,277,1,0,0,0,275,
        273,1,0,0,0,275,276,1,0,0,0,276,278,1,0,0,0,277,275,1,0,0,0,278,
        280,5,109,0,0,279,281,3,98,49,0,280,279,1,0,0,0,280,281,1,0,0,0,
        281,282,1,0,0,0,282,283,5,112,0,0,283,284,5,1,0,0,284,285,3,18,9,
        0,285,286,5,110,0,0,286,303,1,0,0,0,287,289,3,92,46,0,288,287,1,
        0,0,0,289,292,1,0,0,0,290,288,1,0,0,0,290,291,1,0,0,0,291,293,1,
        0,0,0,292,290,1,0,0,0,293,295,5,109,0,0,294,296,3,98,49,0,295,294,
        1,0,0,0,295,296,1,0,0,0,296,297,1,0,0,0,297,298,5,112,0,0,298,299,
        5,1,0,0,299,300,3,22,11,0,300,301,5,110,0,0,301,303,1,0,0,0,302,
        275,1,0,0,0,302,290,1,0,0,0,303,17,1,0,0,0,304,305,5,2,0,0,305,310,
        3,20,10,0,306,307,5,3,0,0,307,309,3,20,10,0,308,306,1,0,0,0,309,
        312,1,0,0,0,310,308,1,0,0,0,310,311,1,0,0,0,311,313,1,0,0,0,312,
        310,1,0,0,0,313,315,5,4,0,0,314,316,3,42,21,0,315,314,1,0,0,0,315,
        316,1,0,0,0,316,319,1,0,0,0,317,318,5,5,0,0,318,320,5,112,0,0,319,
        317,1,0,0,0,319,320,1,0,0,0,320,321,1,0,0,0,321,322,5,6,0,0,322,
        19,1,0,0,0,323,326,5,112,0,0,324,325,5,5,0,0,325,327,3,84,42,0,326,
        324,1,0,0,0,326,327,1,0,0,0,327,21,1,0,0,0,328,332,5,96,0,0,329,
        331,3,34,17,0,330,329,1,0,0,0,331,334,1,0,0,0,332,330,1,0,0,0,332,
        333,1,0,0,0,333,335,1,0,0,0,334,332,1,0,0,0,335,336,5,97,0,0,336,
        23,1,0,0,0,337,338,5,51,0,0,338,343,3,42,21,0,339,340,5,3,0,0,340,
        342,3,42,21,0,341,339,1,0,0,0,342,345,1,0,0,0,343,341,1,0,0,0,343,
        344,1,0,0,0,344,25,1,0,0,0,345,343,1,0,0,0,346,347,5,52,0,0,347,
        352,3,42,21,0,348,349,5,3,0,0,349,351,3,42,21,0,350,348,1,0,0,0,
        351,354,1,0,0,0,352,350,1,0,0,0,352,353,1,0,0,0,353,27,1,0,0,0,354,
        352,1,0,0,0,355,359,3,10,5,0,356,359,3,8,4,0,357,359,3,30,15,0,358,
        355,1,0,0,0,358,356,1,0,0,0,358,357,1,0,0,0,359,29,1,0,0,0,360,364,
        3,32,16,0,361,363,3,100,50,0,362,361,1,0,0,0,363,366,1,0,0,0,364,
        362,1,0,0,0,364,365,1,0,0,0,365,368,1,0,0,0,366,364,1,0,0,0,367,
        369,3,34,17,0,368,367,1,0,0,0,369,370,1,0,0,0,370,368,1,0,0,0,370,
        371,1,0,0,0,371,372,1,0,0,0,372,373,5,66,0,0,373,31,1,0,0,0,374,
        375,7,0,0,0,375,33,1,0,0,0,376,378,3,92,46,0,377,376,1,0,0,0,377,
        378,1,0,0,0,378,379,1,0,0,0,379,380,5,112,0,0,380,382,5,1,0,0,381,
        383,5,107,0,0,382,381,1,0,0,0,382,383,1,0,0,0,383,385,1,0,0,0,384,
        386,3,36,18,0,385,384,1,0,0,0,385,386,1,0,0,0,386,387,1,0,0,0,387,
        390,3,42,21,0,388,389,5,5,0,0,389,391,3,38,19,0,390,388,1,0,0,0,
        390,391,1,0,0,0,391,392,1,0,0,0,392,393,5,6,0,0,393,35,1,0,0,0,394,
        395,5,73,0,0,395,396,5,7,0,0,396,397,5,113,0,0,397,398,5,8,0,0,398,
        399,5,113,0,0,399,400,5,9,0,0,400,401,5,74,0,0,401,37,1,0,0,0,402,
        405,3,84,42,0,403,405,3,40,20,0,404,402,1,0,0,0,404,403,1,0,0,0,
        405,39,1,0,0,0,406,407,5,7,0,0,407,412,3,84,42,0,408,409,5,3,0,0,
        409,411,3,84,42,0,410,408,1,0,0,0,411,414,1,0,0,0,412,410,1,0,0,
        0,412,413,1,0,0,0,413,415,1,0,0,0,414,412,1,0,0,0,415,416,5,9,0,
        0,416,41,1,0,0,0,417,420,3,44,22,0,418,420,5,112,0,0,419,417,1,0,
        0,0,419,418,1,0,0,0,420,43,1,0,0,0,421,422,7,1,0,0,422,45,1,0,0,
        0,423,425,3,48,24,0,424,423,1,0,0,0,425,428,1,0,0,0,426,424,1,0,
        0,0,426,427,1,0,0,0,427,47,1,0,0,0,428,426,1,0,0,0,429,441,3,50,
        25,0,430,441,3,62,31,0,431,441,3,64,32,0,432,441,3,70,35,0,433,441,
        3,72,36,0,434,441,3,74,37,0,435,441,3,56,28,0,436,441,3,76,38,0,
        437,441,3,78,39,0,438,441,3,80,40,0,439,441,5,6,0,0,440,429,1,0,
        0,0,440,430,1,0,0,0,440,431,1,0,0,0,440,432,1,0,0,0,440,433,1,0,
        0,0,440,434,1,0,0,0,440,435,1,0,0,0,440,436,1,0,0,0,440,437,1,0,
        0,0,440,438,1,0,0,0,440,439,1,0,0,0,441,49,1,0,0,0,442,443,3,52,
        26,0,443,444,5,5,0,0,444,445,3,84,42,0,445,446,5,6,0,0,446,453,1,
        0,0,0,447,448,3,52,26,0,448,449,5,29,0,0,449,450,3,84,42,0,450,451,
        5,6,0,0,451,453,1,0,0,0,452,442,1,0,0,0,452,447,1,0,0,0,453,51,1,
        0,0,0,454,456,5,112,0,0,455,457,3,54,27,0,456,455,1,0,0,0,456,457,
        1,0,0,0,457,465,1,0,0,0,458,459,3,82,41,0,459,460,5,30,0,0,460,462,
        5,112,0,0,461,463,3,54,27,0,462,461,1,0,0,0,462,463,1,0,0,0,463,
        465,1,0,0,0,464,454,1,0,0,0,464,458,1,0,0,0,465,53,1,0,0,0,466,467,
        5,7,0,0,467,468,3,84,42,0,468,469,5,9,0,0,469,55,1,0,0,0,470,476,
        5,112,0,0,471,472,3,82,41,0,472,473,5,30,0,0,473,474,5,112,0,0,474,
        476,1,0,0,0,475,470,1,0,0,0,475,471,1,0,0,0,476,477,1,0,0,0,477,
        479,5,2,0,0,478,480,3,58,29,0,479,478,1,0,0,0,479,480,1,0,0,0,480,
        481,1,0,0,0,481,482,5,4,0,0,482,483,5,6,0,0,483,57,1,0,0,0,484,489,
        3,60,30,0,485,486,5,3,0,0,486,488,3,60,30,0,487,485,1,0,0,0,488,
        491,1,0,0,0,489,487,1,0,0,0,489,490,1,0,0,0,490,59,1,0,0,0,491,489,
        1,0,0,0,492,493,5,112,0,0,493,494,7,2,0,0,494,497,3,84,42,0,495,
        497,3,84,42,0,496,492,1,0,0,0,496,495,1,0,0,0,497,61,1,0,0,0,498,
        499,5,67,0,0,499,500,3,84,42,0,500,501,5,68,0,0,501,509,3,46,23,
        0,502,503,5,69,0,0,503,504,3,84,42,0,504,505,5,68,0,0,505,506,3,
        46,23,0,506,508,1,0,0,0,507,502,1,0,0,0,508,511,1,0,0,0,509,507,
        1,0,0,0,509,510,1,0,0,0,510,514,1,0,0,0,511,509,1,0,0,0,512,513,
        5,70,0,0,513,515,3,46,23,0,514,512,1,0,0,0,514,515,1,0,0,0,515,516,
        1,0,0,0,516,517,5,71,0,0,517,63,1,0,0,0,518,519,5,72,0,0,519,520,
        3,84,42,0,520,522,5,74,0,0,521,523,3,66,33,0,522,521,1,0,0,0,523,
        524,1,0,0,0,524,522,1,0,0,0,524,525,1,0,0,0,525,528,1,0,0,0,526,
        527,5,70,0,0,527,529,3,46,23,0,528,526,1,0,0,0,528,529,1,0,0,0,529,
        530,1,0,0,0,530,531,5,75,0,0,531,65,1,0,0,0,532,537,3,68,34,0,533,
        534,5,3,0,0,534,536,3,68,34,0,535,533,1,0,0,0,536,539,1,0,0,0,537,
        535,1,0,0,0,537,538,1,0,0,0,538,540,1,0,0,0,539,537,1,0,0,0,540,
        541,5,1,0,0,541,542,3,46,23,0,542,67,1,0,0,0,543,544,7,3,0,0,544,
        69,1,0,0,0,545,546,5,76,0,0,546,547,3,84,42,0,547,548,5,77,0,0,548,
        549,3,46,23,0,549,550,5,78,0,0,550,71,1,0,0,0,551,552,5,79,0,0,552,
        553,3,46,23,0,553,554,5,80,0,0,554,555,3,84,42,0,555,556,5,81,0,
        0,556,73,1,0,0,0,557,558,5,82,0,0,558,559,5,112,0,0,559,560,5,5,
        0,0,560,561,3,84,42,0,561,562,5,83,0,0,562,565,3,84,42,0,563,564,
        5,84,0,0,564,566,3,84,42,0,565,563,1,0,0,0,565,566,1,0,0,0,566,567,
        1,0,0,0,567,568,5,77,0,0,568,569,3,46,23,0,569,570,5,85,0,0,570,
        75,1,0,0,0,571,572,5,86,0,0,572,573,5,6,0,0,573,77,1,0,0,0,574,575,
        5,87,0,0,575,576,5,6,0,0,576,79,1,0,0,0,577,578,5,88,0,0,578,579,
        5,6,0,0,579,81,1,0,0,0,580,582,5,112,0,0,581,583,3,54,27,0,582,581,
        1,0,0,0,582,583,1,0,0,0,583,83,1,0,0,0,584,585,6,42,-1,0,585,586,
        5,112,0,0,586,588,5,2,0,0,587,589,3,58,29,0,588,587,1,0,0,0,588,
        589,1,0,0,0,589,590,1,0,0,0,590,620,5,4,0,0,591,593,5,112,0,0,592,
        594,3,54,27,0,593,592,1,0,0,0,593,594,1,0,0,0,594,620,1,0,0,0,595,
        596,3,82,41,0,596,597,5,30,0,0,597,598,5,112,0,0,598,600,5,2,0,0,
        599,601,3,58,29,0,600,599,1,0,0,0,600,601,1,0,0,0,601,602,1,0,0,
        0,602,603,5,4,0,0,603,620,1,0,0,0,604,605,3,82,41,0,605,606,5,30,
        0,0,606,608,5,112,0,0,607,609,3,54,27,0,608,607,1,0,0,0,608,609,
        1,0,0,0,609,620,1,0,0,0,610,611,5,2,0,0,611,612,3,84,42,0,612,613,
        5,4,0,0,613,620,1,0,0,0,614,620,5,113,0,0,615,620,5,114,0,0,616,
        620,5,111,0,0,617,620,5,115,0,0,618,620,5,116,0,0,619,584,1,0,0,
        0,619,591,1,0,0,0,619,595,1,0,0,0,619,604,1,0,0,0,619,610,1,0,0,
        0,619,614,1,0,0,0,619,615,1,0,0,0,619,616,1,0,0,0,619,617,1,0,0,
        0,619,618,1,0,0,0,620,635,1,0,0,0,621,622,10,14,0,0,622,623,7,4,
        0,0,623,634,3,84,42,15,624,625,10,13,0,0,625,626,7,5,0,0,626,634,
        3,84,42,14,627,628,10,12,0,0,628,629,7,6,0,0,629,634,3,84,42,13,
        630,631,10,11,0,0,631,632,7,7,0,0,632,634,3,84,42,12,633,621,1,0,
        0,0,633,624,1,0,0,0,633,627,1,0,0,0,633,630,1,0,0,0,634,637,1,0,
        0,0,635,633,1,0,0,0,635,636,1,0,0,0,636,85,1,0,0,0,637,635,1,0,0,
        0,638,647,3,88,44,0,639,647,3,90,45,0,640,641,3,88,44,0,641,642,
        3,90,45,0,642,647,1,0,0,0,643,644,3,90,45,0,644,645,3,88,44,0,645,
        647,1,0,0,0,646,638,1,0,0,0,646,639,1,0,0,0,646,640,1,0,0,0,646,
        643,1,0,0,0,647,87,1,0,0,0,648,650,5,53,0,0,649,651,3,98,49,0,650,
        649,1,0,0,0,650,651,1,0,0,0,651,652,1,0,0,0,652,653,3,46,23,0,653,
        654,5,54,0,0,654,89,1,0,0,0,655,657,5,55,0,0,656,658,3,98,49,0,657,
        656,1,0,0,0,657,658,1,0,0,0,658,659,1,0,0,0,659,660,3,46,23,0,660,
        661,5,56,0,0,661,91,1,0,0,0,662,663,5,41,0,0,663,665,5,112,0,0,664,
        666,3,94,47,0,665,664,1,0,0,0,665,666,1,0,0,0,666,667,1,0,0,0,667,
        668,5,42,0,0,668,93,1,0,0,0,669,670,5,2,0,0,670,675,3,96,48,0,671,
        672,5,3,0,0,672,674,3,96,48,0,673,671,1,0,0,0,674,677,1,0,0,0,675,
        673,1,0,0,0,675,676,1,0,0,0,676,678,1,0,0,0,677,675,1,0,0,0,678,
        679,5,4,0,0,679,95,1,0,0,0,680,681,7,8,0,0,681,97,1,0,0,0,682,683,
        7,9,0,0,683,99,1,0,0,0,684,685,7,10,0,0,685,101,1,0,0,0,83,108,110,
        114,118,124,131,135,141,144,149,156,160,165,170,173,178,185,189,
        194,203,210,214,219,225,230,237,241,245,250,256,262,268,275,280,
        290,295,302,310,315,319,326,332,343,352,358,364,370,377,382,385,
        390,404,412,419,426,440,452,456,462,464,475,479,489,496,509,514,
        524,528,537,565,582,588,593,600,608,619,633,635,646,650,657,665,
        675
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
    public enumTypeDecl(): EnumTypeDeclContext | null {
        return this.getRuleContext(0, EnumTypeDeclContext);
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


export class EnumTypeDeclContext extends antlr.ParserRuleContext {
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
    public ID(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ID, 0);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_enumTypeDecl;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitEnumTypeDecl) {
            return visitor.visitEnumTypeDecl(this);
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
