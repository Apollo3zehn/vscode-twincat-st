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
    public static readonly VAR_STAT = 64;
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
    public static readonly STRUCT = 95;
    public static readonly END_STRUCT = 96;
    public static readonly ENUM = 97;
    public static readonly END_ENUM = 98;
    public static readonly ABSTRACT = 99;
    public static readonly FINAL = 100;
    public static readonly CONSTANT = 101;
    public static readonly PUBLIC = 102;
    public static readonly PRIVATE = 103;
    public static readonly PROTECTED = 104;
    public static readonly INTERNAL = 105;
    public static readonly MOD = 106;
    public static readonly TYPE = 107;
    public static readonly END_TYPE = 108;
    public static readonly CARET = 109;
    public static readonly REFERENCE_TO = 110;
    public static readonly POINTER_TO = 111;
    public static readonly LPAREN = 112;
    public static readonly RPAREN = 113;
    public static readonly BOOL = 114;
    public static readonly NUMBER = 115;
    public static readonly TIME_LITERAL = 116;
    public static readonly ID = 117;
    public static readonly STRING_LITERAL = 118;
    public static readonly WS = 119;
    public static readonly COMMENT = 120;
    public static readonly COMMENT_BLOCK = 121;
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
    public static readonly RULE_baseType = 22;
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
    public static readonly RULE_derefOrIndex = 43;
    public static readonly RULE_expr = 44;
    public static readonly RULE_propertyBody = 45;
    public static readonly RULE_getter = 46;
    public static readonly RULE_setter = 47;
    public static readonly RULE_attribute = 48;
    public static readonly RULE_attributeArgList = 49;
    public static readonly RULE_attributeArg = 50;
    public static readonly RULE_accessModifier = 51;
    public static readonly RULE_modifier = 52;

    public static readonly literalNames = [
        null, "':'", "','", "':='", "';'", "'REF='", "'['", "']'", "'..'", 
        "'INT'", "'REAL'", "'BOOL'", "'STRING'", "'DINT'", "'BYTE'", "'WORD'", 
        "'DWORD'", "'SINT'", "'USINT'", "'UINT'", "'UDINT'", "'LINT'", "'ULINT'", 
        "'LREAL'", "'TIME'", "'DATE'", "'TIME_OF_DAY'", "'DATE_AND_TIME'", 
        "'.'", "'=>'", "'*'", "'/'", "'+'", "'-'", "'='", "'<'", "'>'", 
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
        "'PROTECTED'", "'INTERNAL'", "'MOD'", "'TYPE'", "'END_TYPE'", "'^'", 
        "'REFERENCE TO'", "'POINTER TO'", "'('", "')'"
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
        "VAR_STAT", "END_VAR", "IF", "THEN", "ELSIF", "ELSE", "END_IF", 
        "CASE", "ARRAY", "OF", "END_CASE", "WHILE", "DO", "END_WHILE", "REPEAT", 
        "UNTIL", "END_REPEAT", "FOR", "TO", "BY", "END_FOR", "RETURN", "EXIT", 
        "CONTINUE", "AND", "OR", "XOR", "METHOD", "END_METHOD", "INTERFACE", 
        "END_INTERFACE", "STRUCT", "END_STRUCT", "ENUM", "END_ENUM", "ABSTRACT", 
        "FINAL", "CONSTANT", "PUBLIC", "PRIVATE", "PROTECTED", "INTERNAL", 
        "MOD", "TYPE", "END_TYPE", "CARET", "REFERENCE_TO", "POINTER_TO", 
        "LPAREN", "RPAREN", "BOOL", "NUMBER", "TIME_LITERAL", "ID", "STRING_LITERAL", 
        "WS", "COMMENT", "COMMENT_BLOCK"
    ];
    public static readonly ruleNames = [
        "compilationUnit", "program", "function", "method", "property", 
        "functionBlock", "interface", "varGlobalSection", "typeDecl", "enumDecl", 
        "enumMember", "initialValue", "structDecl", "implementsClause", 
        "extendsClause", "member", "varDeclSection", "varSectionType", "varDecl", 
        "exprOrArrayInit", "arrayInit", "type", "baseType", "builtinType", 
        "statementSection", "statement", "assignment", "arrayIndex", "callStatement", 
        "argumentList", "argument", "ifStatement", "caseStatement", "caseElement", 
        "caseValue", "whileStatement", "repeatStatement", "forStatement", 
        "returnStatement", "exitStatement", "continueStatement", "memberQualifier", 
        "primary", "derefOrIndex", "expr", "propertyBody", "getter", "setter", 
        "attribute", "attributeArgList", "attributeArg", "accessModifier", 
        "modifier",
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
            this.state = 114;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 4194389) !== 0) || _la === 93 || _la === 107) {
                {
                this.state = 112;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                case 1:
                    {
                    this.state = 106;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 107;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 108;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 109;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 110;
                    this.varGlobalSection();
                    }
                    break;
                case 6:
                    {
                    this.state = 111;
                    this.typeDecl();
                    }
                    break;
                }
                }
                this.state = 116;
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
            this.state = 118;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 117;
                this.attribute();
                }
            }

            this.state = 120;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 122;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 121;
                this.accessModifier();
                }
            }

            this.state = 124;
            this.match(StructuredTextParser.ID);
            this.state = 128;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 447) !== 0)) {
                {
                {
                this.state = 125;
                this.varDeclSection();
                }
                }
                this.state = 130;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 131;
            this.statementSection();
            this.state = 132;
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
            this.state = 135;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 134;
                this.attribute();
                }
            }

            this.state = 137;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 139;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 138;
                this.accessModifier();
                }
            }

            this.state = 141;
            this.match(StructuredTextParser.ID);
            this.state = 144;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 142;
                this.match(StructuredTextParser.T__0);
                this.state = 143;
                this.type_();
                }
            }

            this.state = 149;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 447) !== 0)) {
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
    public method(): MethodContext {
        let localContext = new MethodContext(this.context, this.state);
        this.enterRule(localContext, 6, StructuredTextParser.RULE_method);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 156;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 155;
                this.attribute();
                }
            }

            this.state = 158;
            this.match(StructuredTextParser.METHOD);
            this.state = 160;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 159;
                this.accessModifier();
                }
            }

            this.state = 165;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0)) {
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
            this.state = 171;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 169;
                this.match(StructuredTextParser.T__0);
                this.state = 170;
                this.type_();
                }
            }

            this.state = 176;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 447) !== 0)) {
                {
                {
                this.state = 173;
                this.varDeclSection();
                }
                }
                this.state = 178;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 179;
            this.statementSection();
            this.state = 180;
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
            this.state = 183;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 182;
                this.attribute();
                }
            }

            this.state = 185;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 187;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 186;
                this.accessModifier();
                }
            }

            this.state = 192;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0)) {
                {
                {
                this.state = 189;
                this.modifier();
                }
                }
                this.state = 194;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 195;
            this.match(StructuredTextParser.ID);
            this.state = 196;
            this.match(StructuredTextParser.T__0);
            this.state = 197;
            this.type_();
            this.state = 201;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 447) !== 0)) {
                {
                {
                this.state = 198;
                this.varDeclSection();
                }
                }
                this.state = 203;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 204;
            this.propertyBody();
            this.state = 205;
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
            this.state = 208;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 207;
                this.attribute();
                }
            }

            this.state = 210;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 212;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 211;
                this.accessModifier();
                }
            }

            this.state = 217;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0)) {
                {
                {
                this.state = 214;
                this.modifier();
                }
                }
                this.state = 219;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 220;
            this.match(StructuredTextParser.ID);
            this.state = 222;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 221;
                this.extendsClause();
                }
            }

            this.state = 225;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 224;
                this.implementsClause();
                }
            }

            this.state = 230;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 29294849) !== 0) || _la === 91) {
                {
                {
                this.state = 227;
                this.member();
                }
                }
                this.state = 232;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 233;
            this.statementSection();
            this.state = 234;
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
            this.state = 237;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
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
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
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
            if (_la === 51) {
                {
                this.state = 244;
                this.extendsClause();
                }
            }

            this.state = 250;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 29294849) !== 0) || _la === 91) {
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
            if (_la === 40) {
                {
                this.state = 255;
                this.attribute();
                }
            }

            this.state = 258;
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 260;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 259;
                this.accessModifier();
                }
            }

            this.state = 265;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0)) {
                {
                {
                this.state = 262;
                this.modifier();
                }
                }
                this.state = 267;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 268;
            this.match(StructuredTextParser.ID);
            this.state = 270;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 269;
                this.varDecl();
                }
                }
                this.state = 272;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 40 || _la === 117);
            this.state = 274;
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
            this.state = 306;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 279;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 40) {
                    {
                    {
                    this.state = 276;
                    this.attribute();
                    }
                    }
                    this.state = 281;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 282;
                this.match(StructuredTextParser.TYPE);
                this.state = 284;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                    {
                    this.state = 283;
                    this.accessModifier();
                    }
                }

                this.state = 286;
                this.match(StructuredTextParser.ID);
                this.state = 287;
                this.match(StructuredTextParser.T__0);
                this.state = 288;
                this.enumDecl();
                this.state = 289;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 294;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 40) {
                    {
                    {
                    this.state = 291;
                    this.attribute();
                    }
                    }
                    this.state = 296;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 297;
                this.match(StructuredTextParser.TYPE);
                this.state = 299;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                    {
                    this.state = 298;
                    this.accessModifier();
                    }
                }

                this.state = 301;
                this.match(StructuredTextParser.ID);
                this.state = 302;
                this.match(StructuredTextParser.T__0);
                this.state = 303;
                this.structDecl();
                this.state = 304;
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
            this.state = 308;
            this.match(StructuredTextParser.LPAREN);
            this.state = 309;
            this.enumMember();
            this.state = 314;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 310;
                this.match(StructuredTextParser.T__1);
                this.state = 311;
                this.enumMember();
                }
                }
                this.state = 316;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 317;
            this.match(StructuredTextParser.RPAREN);
            this.state = 319;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268434944) !== 0) || _la === 72 || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 131) !== 0)) {
                {
                this.state = 318;
                this.type_();
                }
            }

            this.state = 323;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 321;
                this.match(StructuredTextParser.T__2);
                this.state = 322;
                this.initialValue();
                }
            }

            this.state = 325;
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
    public enumMember(): EnumMemberContext {
        let localContext = new EnumMemberContext(this.context, this.state);
        this.enterRule(localContext, 20, StructuredTextParser.RULE_enumMember);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 327;
            this.match(StructuredTextParser.ID);
            this.state = 330;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 328;
                this.match(StructuredTextParser.T__2);
                this.state = 329;
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
            this.state = 332;
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
            this.state = 334;
            this.match(StructuredTextParser.STRUCT);
            this.state = 338;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 40 || _la === 117) {
                {
                {
                this.state = 335;
                this.varDecl();
                }
                }
                this.state = 340;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 341;
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
            this.state = 343;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 344;
            this.type_();
            this.state = 349;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 345;
                this.match(StructuredTextParser.T__1);
                this.state = 346;
                this.type_();
                }
                }
                this.state = 351;
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
            this.state = 352;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 353;
            this.type_();
            this.state = 358;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 354;
                this.match(StructuredTextParser.T__1);
                this.state = 355;
                this.type_();
                }
                }
                this.state = 360;
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
            this.state = 364;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 361;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 362;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 363;
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
            this.state = 366;
            this.varSectionType();
            this.state = 370;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0)) {
                {
                {
                this.state = 367;
                this.modifier();
                }
                }
                this.state = 372;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 374;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 373;
                this.varDecl();
                }
                }
                this.state = 376;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 40 || _la === 117);
            this.state = 378;
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
            this.state = 380;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 447) !== 0))) {
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
            this.state = 383;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 382;
                this.attribute();
                }
            }

            this.state = 385;
            this.match(StructuredTextParser.ID);
            this.state = 386;
            this.match(StructuredTextParser.T__0);
            this.state = 387;
            this.type_();
            this.state = 390;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3 || _la === 5) {
                {
                this.state = 388;
                _la = this.tokenStream.LA(1);
                if(!(_la === 3 || _la === 5)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 389;
                this.exprOrArrayInit();
                }
            }

            this.state = 392;
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
    public exprOrArrayInit(): ExprOrArrayInitContext {
        let localContext = new ExprOrArrayInitContext(this.context, this.state);
        this.enterRule(localContext, 38, StructuredTextParser.RULE_exprOrArrayInit);
        try {
            this.state = 396;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.LPAREN:
            case StructuredTextParser.BOOL:
            case StructuredTextParser.NUMBER:
            case StructuredTextParser.TIME_LITERAL:
            case StructuredTextParser.ID:
            case StructuredTextParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 394;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__5:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 395;
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
            this.state = 398;
            this.match(StructuredTextParser.T__5);
            this.state = 399;
            this.expr(0);
            this.state = 404;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 400;
                this.match(StructuredTextParser.T__1);
                this.state = 401;
                this.expr(0);
                }
                }
                this.state = 406;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 407;
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
        this.enterRule(localContext, 42, StructuredTextParser.RULE_type);
        try {
            this.state = 422;
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
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 409;
                this.baseType();
                }
                break;
            case StructuredTextParser.ARRAY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 410;
                this.match(StructuredTextParser.ARRAY);
                this.state = 411;
                this.match(StructuredTextParser.T__5);
                this.state = 412;
                this.match(StructuredTextParser.NUMBER);
                this.state = 413;
                this.match(StructuredTextParser.T__7);
                this.state = 414;
                this.match(StructuredTextParser.NUMBER);
                this.state = 415;
                this.match(StructuredTextParser.T__6);
                this.state = 416;
                this.match(StructuredTextParser.OF);
                this.state = 417;
                this.type_();
                }
                break;
            case StructuredTextParser.POINTER_TO:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 418;
                this.match(StructuredTextParser.POINTER_TO);
                this.state = 419;
                this.type_();
                }
                break;
            case StructuredTextParser.REFERENCE_TO:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 420;
                this.match(StructuredTextParser.REFERENCE_TO);
                this.state = 421;
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
    public baseType(): BaseTypeContext {
        let localContext = new BaseTypeContext(this.context, this.state);
        this.enterRule(localContext, 44, StructuredTextParser.RULE_baseType);
        try {
            this.state = 426;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 424;
                this.match(StructuredTextParser.ID);
                }
                break;
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
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 425;
                this.builtinType();
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
            this.state = 428;
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
            this.state = 433;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 53, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 430;
                    this.statement();
                    }
                    }
                }
                this.state = 435;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 53, this.context);
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
            this.state = 447;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 54, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 436;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 437;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 438;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 439;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 440;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 441;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 442;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 443;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 444;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 445;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 446;
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
        this.enterRule(localContext, 52, StructuredTextParser.RULE_assignment);
        try {
            this.state = 459;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 449;
                this.memberQualifier(0);
                this.state = 450;
                this.match(StructuredTextParser.T__2);
                this.state = 451;
                this.expr(0);
                this.state = 452;
                this.match(StructuredTextParser.T__3);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 454;
                this.memberQualifier(0);
                this.state = 455;
                this.match(StructuredTextParser.T__4);
                this.state = 456;
                this.expr(0);
                this.state = 457;
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
    public arrayIndex(): ArrayIndexContext {
        let localContext = new ArrayIndexContext(this.context, this.state);
        this.enterRule(localContext, 54, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 461;
            this.match(StructuredTextParser.T__5);
            this.state = 462;
            this.expr(0);
            this.state = 463;
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
        this.enterRule(localContext, 56, StructuredTextParser.RULE_callStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 468;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
            case 1:
                {
                this.state = 465;
                this.memberQualifier(0);
                this.state = 466;
                this.match(StructuredTextParser.T__27);
                }
                break;
            }
            this.state = 470;
            this.match(StructuredTextParser.ID);
            this.state = 471;
            this.match(StructuredTextParser.LPAREN);
            this.state = 473;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 125) !== 0)) {
                {
                this.state = 472;
                this.argumentList();
                }
            }

            this.state = 475;
            this.match(StructuredTextParser.RPAREN);
            this.state = 476;
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
        this.enterRule(localContext, 58, StructuredTextParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 478;
            this.argument();
            this.state = 483;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 479;
                this.match(StructuredTextParser.T__1);
                this.state = 480;
                this.argument();
                }
                }
                this.state = 485;
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
            this.state = 490;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 486;
                this.match(StructuredTextParser.ID);
                this.state = 487;
                _la = this.tokenStream.LA(1);
                if(!(_la === 3 || _la === 29)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 488;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 489;
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
            this.state = 492;
            this.match(StructuredTextParser.IF);
            this.state = 493;
            this.expr(0);
            this.state = 494;
            this.match(StructuredTextParser.THEN);
            this.state = 495;
            this.statementSection();
            this.state = 503;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 68) {
                {
                {
                this.state = 496;
                this.match(StructuredTextParser.ELSIF);
                this.state = 497;
                this.expr(0);
                this.state = 498;
                this.match(StructuredTextParser.THEN);
                this.state = 499;
                this.statementSection();
                }
                }
                this.state = 505;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 508;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 69) {
                {
                this.state = 506;
                this.match(StructuredTextParser.ELSE);
                this.state = 507;
                this.statementSection();
                }
            }

            this.state = 510;
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
            this.state = 512;
            this.match(StructuredTextParser.CASE);
            this.state = 513;
            this.expr(0);
            this.state = 514;
            this.match(StructuredTextParser.OF);
            this.state = 516;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 515;
                this.caseElement();
                }
                }
                this.state = 518;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & 27) !== 0));
            this.state = 522;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 69) {
                {
                this.state = 520;
                this.match(StructuredTextParser.ELSE);
                this.state = 521;
                this.statementSection();
                }
            }

            this.state = 524;
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
            this.state = 526;
            this.caseValue();
            this.state = 531;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 527;
                this.match(StructuredTextParser.T__1);
                this.state = 528;
                this.caseValue();
                }
                }
                this.state = 533;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 534;
            this.match(StructuredTextParser.T__0);
            this.state = 535;
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
            this.state = 537;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & 27) !== 0))) {
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
            this.state = 539;
            this.match(StructuredTextParser.WHILE);
            this.state = 540;
            this.expr(0);
            this.state = 541;
            this.match(StructuredTextParser.DO);
            this.state = 542;
            this.statementSection();
            this.state = 543;
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
            this.state = 545;
            this.match(StructuredTextParser.REPEAT);
            this.state = 546;
            this.statementSection();
            this.state = 547;
            this.match(StructuredTextParser.UNTIL);
            this.state = 548;
            this.expr(0);
            this.state = 549;
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
            this.state = 551;
            this.match(StructuredTextParser.FOR);
            this.state = 552;
            this.match(StructuredTextParser.ID);
            this.state = 553;
            this.match(StructuredTextParser.T__2);
            this.state = 554;
            this.expr(0);
            this.state = 555;
            this.match(StructuredTextParser.TO);
            this.state = 556;
            this.expr(0);
            this.state = 559;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 83) {
                {
                this.state = 557;
                this.match(StructuredTextParser.BY);
                this.state = 558;
                this.expr(0);
                }
            }

            this.state = 561;
            this.match(StructuredTextParser.DO);
            this.state = 562;
            this.statementSection();
            this.state = 563;
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
            this.state = 565;
            this.match(StructuredTextParser.RETURN);
            this.state = 566;
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
        this.enterRule(localContext, 78, StructuredTextParser.RULE_exitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 568;
            this.match(StructuredTextParser.EXIT);
            this.state = 569;
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
        this.enterRule(localContext, 80, StructuredTextParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 571;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 572;
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
            this.state = 575;
            this.primary();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 582;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 66, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new MemberQualifierContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_memberQualifier);
                    this.state = 577;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 578;
                    this.match(StructuredTextParser.T__27);
                    this.state = 579;
                    this.primary();
                    }
                    }
                }
                this.state = 584;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 66, this.context);
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
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 585;
            this.match(StructuredTextParser.ID);
            this.state = 589;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 67, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 586;
                    this.derefOrIndex();
                    }
                    }
                }
                this.state = 591;
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
            this.exitRule();
        }
        return localContext;
    }
    public derefOrIndex(): DerefOrIndexContext {
        let localContext = new DerefOrIndexContext(this.context, this.state);
        this.enterRule(localContext, 86, StructuredTextParser.RULE_derefOrIndex);
        try {
            this.state = 594;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.CARET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 592;
                this.match(StructuredTextParser.CARET);
                }
                break;
            case StructuredTextParser.T__5:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 593;
                this.arrayIndex();
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
        let _startState = 88;
        this.enterRecursionRule(localContext, 88, StructuredTextParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 613;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context) ) {
            case 1:
                {
                this.state = 597;
                this.match(StructuredTextParser.LPAREN);
                this.state = 598;
                this.expr(0);
                this.state = 599;
                this.match(StructuredTextParser.RPAREN);
                }
                break;
            case 2:
                {
                this.state = 601;
                this.match(StructuredTextParser.NUMBER);
                }
                break;
            case 3:
                {
                this.state = 602;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case 4:
                {
                this.state = 603;
                this.match(StructuredTextParser.TIME_LITERAL);
                }
                break;
            case 5:
                {
                this.state = 604;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            case 6:
                {
                this.state = 605;
                this.memberQualifier(0);
                }
                break;
            case 7:
                {
                this.state = 606;
                this.memberQualifier(0);
                this.state = 607;
                this.match(StructuredTextParser.LPAREN);
                this.state = 609;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 125) !== 0)) {
                    {
                    this.state = 608;
                    this.argumentList();
                    }
                }

                this.state = 611;
                this.match(StructuredTextParser.RPAREN);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 629;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 72, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 627;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 615;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 616;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 30 || _la === 31 || _la === 106)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 617;
                        this.expr(12);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 618;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 619;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 32 || _la === 33)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 620;
                        this.expr(11);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 621;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 622;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 63) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 623;
                        this.expr(10);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 624;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 625;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 626;
                        this.expr(9);
                        }
                        break;
                    }
                    }
                }
                this.state = 631;
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
    public propertyBody(): PropertyBodyContext {
        let localContext = new PropertyBodyContext(this.context, this.state);
        this.enterRule(localContext, 90, StructuredTextParser.RULE_propertyBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 640;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context) ) {
            case 1:
                {
                this.state = 632;
                this.getter();
                }
                break;
            case 2:
                {
                this.state = 633;
                this.setter();
                }
                break;
            case 3:
                {
                this.state = 634;
                this.getter();
                this.state = 635;
                this.setter();
                }
                break;
            case 4:
                {
                this.state = 637;
                this.setter();
                this.state = 638;
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
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 642;
            this.match(StructuredTextParser.GET);
            this.state = 644;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 643;
                this.accessModifier();
                }
            }

            this.state = 646;
            this.statementSection();
            this.state = 647;
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
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 649;
            this.match(StructuredTextParser.SET);
            this.state = 651;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 650;
                this.accessModifier();
                }
            }

            this.state = 653;
            this.statementSection();
            this.state = 654;
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
            this.state = 656;
            this.match(StructuredTextParser.T__39);
            this.state = 657;
            this.match(StructuredTextParser.ID);
            this.state = 659;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 112) {
                {
                this.state = 658;
                this.attributeArgList();
                }
            }

            this.state = 661;
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
        this.enterRule(localContext, 98, StructuredTextParser.RULE_attributeArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 663;
            this.match(StructuredTextParser.LPAREN);
            this.state = 664;
            this.attributeArg();
            this.state = 669;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 665;
                this.match(StructuredTextParser.T__1);
                this.state = 666;
                this.attributeArg();
                }
                }
                this.state = 671;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 672;
            this.match(StructuredTextParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 674;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 115)) & ~0x1F) === 0 && ((1 << (_la - 115)) & 13) !== 0))) {
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
            this.state = 676;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0))) {
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
            this.state = 678;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0))) {
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
        case 44:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private memberQualifier_sempred(localContext: MemberQualifierContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 11);
        case 2:
            return this.precpred(this.context, 10);
        case 3:
            return this.precpred(this.context, 9);
        case 4:
            return this.precpred(this.context, 8);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,121,681,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,1,0,1,0,1,0,1,0,1,0,1,0,5,0,113,8,0,10,0,12,0,116,9,0,1,1,3,1,
        119,8,1,1,1,1,1,3,1,123,8,1,1,1,1,1,5,1,127,8,1,10,1,12,1,130,9,
        1,1,1,1,1,1,1,1,2,3,2,136,8,2,1,2,1,2,3,2,140,8,2,1,2,1,2,1,2,3,
        2,145,8,2,1,2,5,2,148,8,2,10,2,12,2,151,9,2,1,2,1,2,1,2,1,3,3,3,
        157,8,3,1,3,1,3,3,3,161,8,3,1,3,5,3,164,8,3,10,3,12,3,167,9,3,1,
        3,1,3,1,3,3,3,172,8,3,1,3,5,3,175,8,3,10,3,12,3,178,9,3,1,3,1,3,
        1,3,1,4,3,4,184,8,4,1,4,1,4,3,4,188,8,4,1,4,5,4,191,8,4,10,4,12,
        4,194,9,4,1,4,1,4,1,4,1,4,5,4,200,8,4,10,4,12,4,203,9,4,1,4,1,4,
        1,4,1,5,3,5,209,8,5,1,5,1,5,3,5,213,8,5,1,5,5,5,216,8,5,10,5,12,
        5,219,9,5,1,5,1,5,3,5,223,8,5,1,5,3,5,226,8,5,1,5,5,5,229,8,5,10,
        5,12,5,232,9,5,1,5,1,5,1,5,1,6,3,6,238,8,6,1,6,1,6,3,6,242,8,6,1,
        6,1,6,3,6,246,8,6,1,6,5,6,249,8,6,10,6,12,6,252,9,6,1,6,1,6,1,7,
        3,7,257,8,7,1,7,1,7,3,7,261,8,7,1,7,5,7,264,8,7,10,7,12,7,267,9,
        7,1,7,1,7,4,7,271,8,7,11,7,12,7,272,1,7,1,7,1,8,5,8,278,8,8,10,8,
        12,8,281,9,8,1,8,1,8,3,8,285,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,293,
        8,8,10,8,12,8,296,9,8,1,8,1,8,3,8,300,8,8,1,8,1,8,1,8,1,8,1,8,3,
        8,307,8,8,1,9,1,9,1,9,1,9,5,9,313,8,9,10,9,12,9,316,9,9,1,9,1,9,
        3,9,320,8,9,1,9,1,9,3,9,324,8,9,1,9,1,9,1,10,1,10,1,10,3,10,331,
        8,10,1,11,1,11,1,12,1,12,5,12,337,8,12,10,12,12,12,340,9,12,1,12,
        1,12,1,13,1,13,1,13,1,13,5,13,348,8,13,10,13,12,13,351,9,13,1,14,
        1,14,1,14,1,14,5,14,357,8,14,10,14,12,14,360,9,14,1,15,1,15,1,15,
        3,15,365,8,15,1,16,1,16,5,16,369,8,16,10,16,12,16,372,9,16,1,16,
        4,16,375,8,16,11,16,12,16,376,1,16,1,16,1,17,1,17,1,18,3,18,384,
        8,18,1,18,1,18,1,18,1,18,1,18,3,18,391,8,18,1,18,1,18,1,19,1,19,
        3,19,397,8,19,1,20,1,20,1,20,1,20,5,20,403,8,20,10,20,12,20,406,
        9,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
        1,21,1,21,1,21,3,21,423,8,21,1,22,1,22,3,22,427,8,22,1,23,1,23,1,
        24,5,24,432,8,24,10,24,12,24,435,9,24,1,25,1,25,1,25,1,25,1,25,1,
        25,1,25,1,25,1,25,1,25,1,25,3,25,448,8,25,1,26,1,26,1,26,1,26,1,
        26,1,26,1,26,1,26,1,26,1,26,3,26,460,8,26,1,27,1,27,1,27,1,27,1,
        28,1,28,1,28,3,28,469,8,28,1,28,1,28,1,28,3,28,474,8,28,1,28,1,28,
        1,28,1,29,1,29,1,29,5,29,482,8,29,10,29,12,29,485,9,29,1,30,1,30,
        1,30,1,30,3,30,491,8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
        1,31,5,31,502,8,31,10,31,12,31,505,9,31,1,31,1,31,3,31,509,8,31,
        1,31,1,31,1,32,1,32,1,32,1,32,4,32,517,8,32,11,32,12,32,518,1,32,
        1,32,3,32,523,8,32,1,32,1,32,1,33,1,33,1,33,5,33,530,8,33,10,33,
        12,33,533,9,33,1,33,1,33,1,33,1,34,1,34,1,35,1,35,1,35,1,35,1,35,
        1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,
        1,37,1,37,3,37,560,8,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,39,
        1,39,1,39,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,5,41,581,
        8,41,10,41,12,41,584,9,41,1,42,1,42,5,42,588,8,42,10,42,12,42,591,
        9,42,1,43,1,43,3,43,595,8,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
        1,44,1,44,1,44,1,44,1,44,1,44,3,44,610,8,44,1,44,1,44,3,44,614,8,
        44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,5,
        44,628,8,44,10,44,12,44,631,9,44,1,45,1,45,1,45,1,45,1,45,1,45,1,
        45,1,45,3,45,641,8,45,1,46,1,46,3,46,645,8,46,1,46,1,46,1,46,1,47,
        1,47,3,47,652,8,47,1,47,1,47,1,47,1,48,1,48,1,48,3,48,660,8,48,1,
        48,1,48,1,49,1,49,1,49,1,49,5,49,668,8,49,10,49,12,49,671,9,49,1,
        49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,52,0,2,82,88,53,0,2,4,6,
        8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
        52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
        96,98,100,102,104,0,12,2,0,56,61,63,64,2,0,3,3,5,5,1,0,9,27,2,0,
        3,3,29,29,2,0,114,115,117,118,2,0,30,31,106,106,1,0,32,33,1,0,34,
        39,1,0,88,90,2,0,115,115,117,118,1,0,102,105,1,0,99,101,730,0,114,
        1,0,0,0,2,118,1,0,0,0,4,135,1,0,0,0,6,156,1,0,0,0,8,183,1,0,0,0,
        10,208,1,0,0,0,12,237,1,0,0,0,14,256,1,0,0,0,16,306,1,0,0,0,18,308,
        1,0,0,0,20,327,1,0,0,0,22,332,1,0,0,0,24,334,1,0,0,0,26,343,1,0,
        0,0,28,352,1,0,0,0,30,364,1,0,0,0,32,366,1,0,0,0,34,380,1,0,0,0,
        36,383,1,0,0,0,38,396,1,0,0,0,40,398,1,0,0,0,42,422,1,0,0,0,44,426,
        1,0,0,0,46,428,1,0,0,0,48,433,1,0,0,0,50,447,1,0,0,0,52,459,1,0,
        0,0,54,461,1,0,0,0,56,468,1,0,0,0,58,478,1,0,0,0,60,490,1,0,0,0,
        62,492,1,0,0,0,64,512,1,0,0,0,66,526,1,0,0,0,68,537,1,0,0,0,70,539,
        1,0,0,0,72,545,1,0,0,0,74,551,1,0,0,0,76,565,1,0,0,0,78,568,1,0,
        0,0,80,571,1,0,0,0,82,574,1,0,0,0,84,585,1,0,0,0,86,594,1,0,0,0,
        88,613,1,0,0,0,90,640,1,0,0,0,92,642,1,0,0,0,94,649,1,0,0,0,96,656,
        1,0,0,0,98,663,1,0,0,0,100,674,1,0,0,0,102,676,1,0,0,0,104,678,1,
        0,0,0,106,113,3,2,1,0,107,113,3,10,5,0,108,113,3,4,2,0,109,113,3,
        12,6,0,110,113,3,14,7,0,111,113,3,16,8,0,112,106,1,0,0,0,112,107,
        1,0,0,0,112,108,1,0,0,0,112,109,1,0,0,0,112,110,1,0,0,0,112,111,
        1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,1,1,
        0,0,0,116,114,1,0,0,0,117,119,3,96,48,0,118,117,1,0,0,0,118,119,
        1,0,0,0,119,120,1,0,0,0,120,122,5,42,0,0,121,123,3,102,51,0,122,
        121,1,0,0,0,122,123,1,0,0,0,123,124,1,0,0,0,124,128,5,117,0,0,125,
        127,3,32,16,0,126,125,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,
        129,1,0,0,0,129,131,1,0,0,0,130,128,1,0,0,0,131,132,3,48,24,0,132,
        133,5,43,0,0,133,3,1,0,0,0,134,136,3,96,48,0,135,134,1,0,0,0,135,
        136,1,0,0,0,136,137,1,0,0,0,137,139,5,46,0,0,138,140,3,102,51,0,
        139,138,1,0,0,0,139,140,1,0,0,0,140,141,1,0,0,0,141,144,5,117,0,
        0,142,143,5,1,0,0,143,145,3,42,21,0,144,142,1,0,0,0,144,145,1,0,
        0,0,145,149,1,0,0,0,146,148,3,32,16,0,147,146,1,0,0,0,148,151,1,
        0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,152,1,0,0,0,151,149,1,
        0,0,0,152,153,3,48,24,0,153,154,5,47,0,0,154,5,1,0,0,0,155,157,3,
        96,48,0,156,155,1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,160,
        5,91,0,0,159,161,3,102,51,0,160,159,1,0,0,0,160,161,1,0,0,0,161,
        165,1,0,0,0,162,164,3,104,52,0,163,162,1,0,0,0,164,167,1,0,0,0,165,
        163,1,0,0,0,165,166,1,0,0,0,166,168,1,0,0,0,167,165,1,0,0,0,168,
        171,5,117,0,0,169,170,5,1,0,0,170,172,3,42,21,0,171,169,1,0,0,0,
        171,172,1,0,0,0,172,176,1,0,0,0,173,175,3,32,16,0,174,173,1,0,0,
        0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,179,1,0,0,
        0,178,176,1,0,0,0,179,180,3,48,24,0,180,181,5,92,0,0,181,7,1,0,0,
        0,182,184,3,96,48,0,183,182,1,0,0,0,183,184,1,0,0,0,184,185,1,0,
        0,0,185,187,5,48,0,0,186,188,3,102,51,0,187,186,1,0,0,0,187,188,
        1,0,0,0,188,192,1,0,0,0,189,191,3,104,52,0,190,189,1,0,0,0,191,194,
        1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,195,1,0,0,0,194,192,
        1,0,0,0,195,196,5,117,0,0,196,197,5,1,0,0,197,201,3,42,21,0,198,
        200,3,32,16,0,199,198,1,0,0,0,200,203,1,0,0,0,201,199,1,0,0,0,201,
        202,1,0,0,0,202,204,1,0,0,0,203,201,1,0,0,0,204,205,3,90,45,0,205,
        206,5,49,0,0,206,9,1,0,0,0,207,209,3,96,48,0,208,207,1,0,0,0,208,
        209,1,0,0,0,209,210,1,0,0,0,210,212,5,44,0,0,211,213,3,102,51,0,
        212,211,1,0,0,0,212,213,1,0,0,0,213,217,1,0,0,0,214,216,3,104,52,
        0,215,214,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,0,0,
        0,218,220,1,0,0,0,219,217,1,0,0,0,220,222,5,117,0,0,221,223,3,28,
        14,0,222,221,1,0,0,0,222,223,1,0,0,0,223,225,1,0,0,0,224,226,3,26,
        13,0,225,224,1,0,0,0,225,226,1,0,0,0,226,230,1,0,0,0,227,229,3,30,
        15,0,228,227,1,0,0,0,229,232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,
        0,0,231,233,1,0,0,0,232,230,1,0,0,0,233,234,3,48,24,0,234,235,5,
        45,0,0,235,11,1,0,0,0,236,238,3,96,48,0,237,236,1,0,0,0,237,238,
        1,0,0,0,238,239,1,0,0,0,239,241,5,93,0,0,240,242,3,102,51,0,241,
        240,1,0,0,0,241,242,1,0,0,0,242,243,1,0,0,0,243,245,5,117,0,0,244,
        246,3,28,14,0,245,244,1,0,0,0,245,246,1,0,0,0,246,250,1,0,0,0,247,
        249,3,30,15,0,248,247,1,0,0,0,249,252,1,0,0,0,250,248,1,0,0,0,250,
        251,1,0,0,0,251,253,1,0,0,0,252,250,1,0,0,0,253,254,5,94,0,0,254,
        13,1,0,0,0,255,257,3,96,48,0,256,255,1,0,0,0,256,257,1,0,0,0,257,
        258,1,0,0,0,258,260,5,62,0,0,259,261,3,102,51,0,260,259,1,0,0,0,
        260,261,1,0,0,0,261,265,1,0,0,0,262,264,3,104,52,0,263,262,1,0,0,
        0,264,267,1,0,0,0,265,263,1,0,0,0,265,266,1,0,0,0,266,268,1,0,0,
        0,267,265,1,0,0,0,268,270,5,117,0,0,269,271,3,36,18,0,270,269,1,
        0,0,0,271,272,1,0,0,0,272,270,1,0,0,0,272,273,1,0,0,0,273,274,1,
        0,0,0,274,275,5,65,0,0,275,15,1,0,0,0,276,278,3,96,48,0,277,276,
        1,0,0,0,278,281,1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,282,
        1,0,0,0,281,279,1,0,0,0,282,284,5,107,0,0,283,285,3,102,51,0,284,
        283,1,0,0,0,284,285,1,0,0,0,285,286,1,0,0,0,286,287,5,117,0,0,287,
        288,5,1,0,0,288,289,3,18,9,0,289,290,5,108,0,0,290,307,1,0,0,0,291,
        293,3,96,48,0,292,291,1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,294,
        295,1,0,0,0,295,297,1,0,0,0,296,294,1,0,0,0,297,299,5,107,0,0,298,
        300,3,102,51,0,299,298,1,0,0,0,299,300,1,0,0,0,300,301,1,0,0,0,301,
        302,5,117,0,0,302,303,5,1,0,0,303,304,3,24,12,0,304,305,5,108,0,
        0,305,307,1,0,0,0,306,279,1,0,0,0,306,294,1,0,0,0,307,17,1,0,0,0,
        308,309,5,112,0,0,309,314,3,20,10,0,310,311,5,2,0,0,311,313,3,20,
        10,0,312,310,1,0,0,0,313,316,1,0,0,0,314,312,1,0,0,0,314,315,1,0,
        0,0,315,317,1,0,0,0,316,314,1,0,0,0,317,319,5,113,0,0,318,320,3,
        42,21,0,319,318,1,0,0,0,319,320,1,0,0,0,320,323,1,0,0,0,321,322,
        5,3,0,0,322,324,3,22,11,0,323,321,1,0,0,0,323,324,1,0,0,0,324,325,
        1,0,0,0,325,326,5,4,0,0,326,19,1,0,0,0,327,330,5,117,0,0,328,329,
        5,3,0,0,329,331,3,88,44,0,330,328,1,0,0,0,330,331,1,0,0,0,331,21,
        1,0,0,0,332,333,5,117,0,0,333,23,1,0,0,0,334,338,5,95,0,0,335,337,
        3,36,18,0,336,335,1,0,0,0,337,340,1,0,0,0,338,336,1,0,0,0,338,339,
        1,0,0,0,339,341,1,0,0,0,340,338,1,0,0,0,341,342,5,96,0,0,342,25,
        1,0,0,0,343,344,5,50,0,0,344,349,3,42,21,0,345,346,5,2,0,0,346,348,
        3,42,21,0,347,345,1,0,0,0,348,351,1,0,0,0,349,347,1,0,0,0,349,350,
        1,0,0,0,350,27,1,0,0,0,351,349,1,0,0,0,352,353,5,51,0,0,353,358,
        3,42,21,0,354,355,5,2,0,0,355,357,3,42,21,0,356,354,1,0,0,0,357,
        360,1,0,0,0,358,356,1,0,0,0,358,359,1,0,0,0,359,29,1,0,0,0,360,358,
        1,0,0,0,361,365,3,6,3,0,362,365,3,8,4,0,363,365,3,32,16,0,364,361,
        1,0,0,0,364,362,1,0,0,0,364,363,1,0,0,0,365,31,1,0,0,0,366,370,3,
        34,17,0,367,369,3,104,52,0,368,367,1,0,0,0,369,372,1,0,0,0,370,368,
        1,0,0,0,370,371,1,0,0,0,371,374,1,0,0,0,372,370,1,0,0,0,373,375,
        3,36,18,0,374,373,1,0,0,0,375,376,1,0,0,0,376,374,1,0,0,0,376,377,
        1,0,0,0,377,378,1,0,0,0,378,379,5,65,0,0,379,33,1,0,0,0,380,381,
        7,0,0,0,381,35,1,0,0,0,382,384,3,96,48,0,383,382,1,0,0,0,383,384,
        1,0,0,0,384,385,1,0,0,0,385,386,5,117,0,0,386,387,5,1,0,0,387,390,
        3,42,21,0,388,389,7,1,0,0,389,391,3,38,19,0,390,388,1,0,0,0,390,
        391,1,0,0,0,391,392,1,0,0,0,392,393,5,4,0,0,393,37,1,0,0,0,394,397,
        3,88,44,0,395,397,3,40,20,0,396,394,1,0,0,0,396,395,1,0,0,0,397,
        39,1,0,0,0,398,399,5,6,0,0,399,404,3,88,44,0,400,401,5,2,0,0,401,
        403,3,88,44,0,402,400,1,0,0,0,403,406,1,0,0,0,404,402,1,0,0,0,404,
        405,1,0,0,0,405,407,1,0,0,0,406,404,1,0,0,0,407,408,5,7,0,0,408,
        41,1,0,0,0,409,423,3,44,22,0,410,411,5,72,0,0,411,412,5,6,0,0,412,
        413,5,115,0,0,413,414,5,8,0,0,414,415,5,115,0,0,415,416,5,7,0,0,
        416,417,5,73,0,0,417,423,3,42,21,0,418,419,5,111,0,0,419,423,3,42,
        21,0,420,421,5,110,0,0,421,423,3,42,21,0,422,409,1,0,0,0,422,410,
        1,0,0,0,422,418,1,0,0,0,422,420,1,0,0,0,423,43,1,0,0,0,424,427,5,
        117,0,0,425,427,3,46,23,0,426,424,1,0,0,0,426,425,1,0,0,0,427,45,
        1,0,0,0,428,429,7,2,0,0,429,47,1,0,0,0,430,432,3,50,25,0,431,430,
        1,0,0,0,432,435,1,0,0,0,433,431,1,0,0,0,433,434,1,0,0,0,434,49,1,
        0,0,0,435,433,1,0,0,0,436,448,3,52,26,0,437,448,3,62,31,0,438,448,
        3,64,32,0,439,448,3,70,35,0,440,448,3,72,36,0,441,448,3,74,37,0,
        442,448,3,56,28,0,443,448,3,76,38,0,444,448,3,78,39,0,445,448,3,
        80,40,0,446,448,5,4,0,0,447,436,1,0,0,0,447,437,1,0,0,0,447,438,
        1,0,0,0,447,439,1,0,0,0,447,440,1,0,0,0,447,441,1,0,0,0,447,442,
        1,0,0,0,447,443,1,0,0,0,447,444,1,0,0,0,447,445,1,0,0,0,447,446,
        1,0,0,0,448,51,1,0,0,0,449,450,3,82,41,0,450,451,5,3,0,0,451,452,
        3,88,44,0,452,453,5,4,0,0,453,460,1,0,0,0,454,455,3,82,41,0,455,
        456,5,5,0,0,456,457,3,88,44,0,457,458,5,4,0,0,458,460,1,0,0,0,459,
        449,1,0,0,0,459,454,1,0,0,0,460,53,1,0,0,0,461,462,5,6,0,0,462,463,
        3,88,44,0,463,464,5,7,0,0,464,55,1,0,0,0,465,466,3,82,41,0,466,467,
        5,28,0,0,467,469,1,0,0,0,468,465,1,0,0,0,468,469,1,0,0,0,469,470,
        1,0,0,0,470,471,5,117,0,0,471,473,5,112,0,0,472,474,3,58,29,0,473,
        472,1,0,0,0,473,474,1,0,0,0,474,475,1,0,0,0,475,476,5,113,0,0,476,
        477,5,4,0,0,477,57,1,0,0,0,478,483,3,60,30,0,479,480,5,2,0,0,480,
        482,3,60,30,0,481,479,1,0,0,0,482,485,1,0,0,0,483,481,1,0,0,0,483,
        484,1,0,0,0,484,59,1,0,0,0,485,483,1,0,0,0,486,487,5,117,0,0,487,
        488,7,3,0,0,488,491,3,88,44,0,489,491,3,88,44,0,490,486,1,0,0,0,
        490,489,1,0,0,0,491,61,1,0,0,0,492,493,5,66,0,0,493,494,3,88,44,
        0,494,495,5,67,0,0,495,503,3,48,24,0,496,497,5,68,0,0,497,498,3,
        88,44,0,498,499,5,67,0,0,499,500,3,48,24,0,500,502,1,0,0,0,501,496,
        1,0,0,0,502,505,1,0,0,0,503,501,1,0,0,0,503,504,1,0,0,0,504,508,
        1,0,0,0,505,503,1,0,0,0,506,507,5,69,0,0,507,509,3,48,24,0,508,506,
        1,0,0,0,508,509,1,0,0,0,509,510,1,0,0,0,510,511,5,70,0,0,511,63,
        1,0,0,0,512,513,5,71,0,0,513,514,3,88,44,0,514,516,5,73,0,0,515,
        517,3,66,33,0,516,515,1,0,0,0,517,518,1,0,0,0,518,516,1,0,0,0,518,
        519,1,0,0,0,519,522,1,0,0,0,520,521,5,69,0,0,521,523,3,48,24,0,522,
        520,1,0,0,0,522,523,1,0,0,0,523,524,1,0,0,0,524,525,5,74,0,0,525,
        65,1,0,0,0,526,531,3,68,34,0,527,528,5,2,0,0,528,530,3,68,34,0,529,
        527,1,0,0,0,530,533,1,0,0,0,531,529,1,0,0,0,531,532,1,0,0,0,532,
        534,1,0,0,0,533,531,1,0,0,0,534,535,5,1,0,0,535,536,3,48,24,0,536,
        67,1,0,0,0,537,538,7,4,0,0,538,69,1,0,0,0,539,540,5,75,0,0,540,541,
        3,88,44,0,541,542,5,76,0,0,542,543,3,48,24,0,543,544,5,77,0,0,544,
        71,1,0,0,0,545,546,5,78,0,0,546,547,3,48,24,0,547,548,5,79,0,0,548,
        549,3,88,44,0,549,550,5,80,0,0,550,73,1,0,0,0,551,552,5,81,0,0,552,
        553,5,117,0,0,553,554,5,3,0,0,554,555,3,88,44,0,555,556,5,82,0,0,
        556,559,3,88,44,0,557,558,5,83,0,0,558,560,3,88,44,0,559,557,1,0,
        0,0,559,560,1,0,0,0,560,561,1,0,0,0,561,562,5,76,0,0,562,563,3,48,
        24,0,563,564,5,84,0,0,564,75,1,0,0,0,565,566,5,85,0,0,566,567,5,
        4,0,0,567,77,1,0,0,0,568,569,5,86,0,0,569,570,5,4,0,0,570,79,1,0,
        0,0,571,572,5,87,0,0,572,573,5,4,0,0,573,81,1,0,0,0,574,575,6,41,
        -1,0,575,576,3,84,42,0,576,582,1,0,0,0,577,578,10,2,0,0,578,579,
        5,28,0,0,579,581,3,84,42,0,580,577,1,0,0,0,581,584,1,0,0,0,582,580,
        1,0,0,0,582,583,1,0,0,0,583,83,1,0,0,0,584,582,1,0,0,0,585,589,5,
        117,0,0,586,588,3,86,43,0,587,586,1,0,0,0,588,591,1,0,0,0,589,587,
        1,0,0,0,589,590,1,0,0,0,590,85,1,0,0,0,591,589,1,0,0,0,592,595,5,
        109,0,0,593,595,3,54,27,0,594,592,1,0,0,0,594,593,1,0,0,0,595,87,
        1,0,0,0,596,597,6,44,-1,0,597,598,5,112,0,0,598,599,3,88,44,0,599,
        600,5,113,0,0,600,614,1,0,0,0,601,614,5,115,0,0,602,614,5,114,0,
        0,603,614,5,116,0,0,604,614,5,118,0,0,605,614,3,82,41,0,606,607,
        3,82,41,0,607,609,5,112,0,0,608,610,3,58,29,0,609,608,1,0,0,0,609,
        610,1,0,0,0,610,611,1,0,0,0,611,612,5,113,0,0,612,614,1,0,0,0,613,
        596,1,0,0,0,613,601,1,0,0,0,613,602,1,0,0,0,613,603,1,0,0,0,613,
        604,1,0,0,0,613,605,1,0,0,0,613,606,1,0,0,0,614,629,1,0,0,0,615,
        616,10,11,0,0,616,617,7,5,0,0,617,628,3,88,44,12,618,619,10,10,0,
        0,619,620,7,6,0,0,620,628,3,88,44,11,621,622,10,9,0,0,622,623,7,
        7,0,0,623,628,3,88,44,10,624,625,10,8,0,0,625,626,7,8,0,0,626,628,
        3,88,44,9,627,615,1,0,0,0,627,618,1,0,0,0,627,621,1,0,0,0,627,624,
        1,0,0,0,628,631,1,0,0,0,629,627,1,0,0,0,629,630,1,0,0,0,630,89,1,
        0,0,0,631,629,1,0,0,0,632,641,3,92,46,0,633,641,3,94,47,0,634,635,
        3,92,46,0,635,636,3,94,47,0,636,641,1,0,0,0,637,638,3,94,47,0,638,
        639,3,92,46,0,639,641,1,0,0,0,640,632,1,0,0,0,640,633,1,0,0,0,640,
        634,1,0,0,0,640,637,1,0,0,0,641,91,1,0,0,0,642,644,5,52,0,0,643,
        645,3,102,51,0,644,643,1,0,0,0,644,645,1,0,0,0,645,646,1,0,0,0,646,
        647,3,48,24,0,647,648,5,53,0,0,648,93,1,0,0,0,649,651,5,54,0,0,650,
        652,3,102,51,0,651,650,1,0,0,0,651,652,1,0,0,0,652,653,1,0,0,0,653,
        654,3,48,24,0,654,655,5,55,0,0,655,95,1,0,0,0,656,657,5,40,0,0,657,
        659,5,117,0,0,658,660,3,98,49,0,659,658,1,0,0,0,659,660,1,0,0,0,
        660,661,1,0,0,0,661,662,5,41,0,0,662,97,1,0,0,0,663,664,5,112,0,
        0,664,669,3,100,50,0,665,666,5,2,0,0,666,668,3,100,50,0,667,665,
        1,0,0,0,668,671,1,0,0,0,669,667,1,0,0,0,669,670,1,0,0,0,670,672,
        1,0,0,0,671,669,1,0,0,0,672,673,5,113,0,0,673,99,1,0,0,0,674,675,
        7,9,0,0,675,101,1,0,0,0,676,677,7,10,0,0,677,103,1,0,0,0,678,679,
        7,11,0,0,679,105,1,0,0,0,78,112,114,118,122,128,135,139,144,149,
        156,160,165,171,176,183,187,192,201,208,212,217,222,225,230,237,
        241,245,250,256,260,265,272,279,284,294,299,306,314,319,323,330,
        338,349,358,364,370,376,383,390,396,404,422,426,433,447,459,468,
        473,483,490,503,508,518,522,531,559,582,589,594,609,613,627,629,
        640,644,651,659,669
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
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.LPAREN, 0)!;
    }
    public enumMember(): EnumMemberContext[];
    public enumMember(i: number): EnumMemberContext | null;
    public enumMember(i?: number): EnumMemberContext[] | EnumMemberContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumMemberContext);
        }

        return this.getRuleContext(i, EnumMemberContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.RPAREN, 0)!;
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
    public baseType(): BaseTypeContext | null {
        return this.getRuleContext(0, BaseTypeContext);
    }
    public ARRAY(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ARRAY, 0);
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


export class BaseTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.ID, 0);
    }
    public builtinType(): BuiltinTypeContext | null {
        return this.getRuleContext(0, BuiltinTypeContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_baseType;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitBaseType) {
            return visitor.visitBaseType(this);
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
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.RPAREN, 0)!;
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
    public primary(): PrimaryContext {
        return this.getRuleContext(0, PrimaryContext)!;
    }
    public memberQualifier(): MemberQualifierContext | null {
        return this.getRuleContext(0, MemberQualifierContext);
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
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public derefOrIndex(): DerefOrIndexContext[];
    public derefOrIndex(i: number): DerefOrIndexContext | null;
    public derefOrIndex(i?: number): DerefOrIndexContext[] | DerefOrIndexContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DerefOrIndexContext);
        }

        return this.getRuleContext(i, DerefOrIndexContext);
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


export class DerefOrIndexContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CARET(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.CARET, 0);
    }
    public arrayIndex(): ArrayIndexContext | null {
        return this.getRuleContext(0, ArrayIndexContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_derefOrIndex;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitDerefOrIndex) {
            return visitor.visitDerefOrIndex(this);
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
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.LPAREN, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.RPAREN, 0);
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
    public memberQualifier(): MemberQualifierContext | null {
        return this.getRuleContext(0, MemberQualifierContext);
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
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
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.LPAREN, 0)!;
    }
    public attributeArg(): AttributeArgContext[];
    public attributeArg(i: number): AttributeArgContext | null;
    public attributeArg(i?: number): AttributeArgContext[] | AttributeArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AttributeArgContext);
        }

        return this.getRuleContext(i, AttributeArgContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.RPAREN, 0)!;
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
