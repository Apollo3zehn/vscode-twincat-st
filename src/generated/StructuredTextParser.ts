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
    public static readonly RULE_assignmentOperator = 27;
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
    public static readonly RULE_primary = 43;
    public static readonly RULE_derefOrIndex = 44;
    public static readonly RULE_expr = 45;
    public static readonly RULE_propertyBody = 46;
    public static readonly RULE_getter = 47;
    public static readonly RULE_setter = 48;
    public static readonly RULE_attribute = 49;
    public static readonly RULE_attributeArgList = 50;
    public static readonly RULE_attributeArg = 51;
    public static readonly RULE_accessModifier = 52;
    public static readonly RULE_modifier = 53;

    public static readonly literalNames = [
        null, "':'", "';'", "','", "':='", "'REF='", "'['", "']'", "'..'", 
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
        "statementSection", "statement", "assignment", "assignmentOperator", 
        "arrayIndex", "callStatement", "argumentList", "argument", "ifStatement", 
        "caseStatement", "caseElement", "caseValue", "whileStatement", "repeatStatement", 
        "forStatement", "returnStatement", "exitStatement", "continueStatement", 
        "memberQualifier", "primary", "derefOrIndex", "expr", "propertyBody", 
        "getter", "setter", "attribute", "attributeArgList", "attributeArg", 
        "accessModifier", "modifier",
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
            this.state = 116;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 4194389) !== 0) || _la === 93 || _la === 107) {
                {
                this.state = 114;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                case 1:
                    {
                    this.state = 108;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 109;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 110;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 111;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 112;
                    this.varGlobalSection();
                    }
                    break;
                case 6:
                    {
                    this.state = 113;
                    this.typeDecl();
                    }
                    break;
                }
                }
                this.state = 118;
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
            this.state = 120;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 119;
                this.attribute();
                }
            }

            this.state = 122;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 124;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 123;
                this.accessModifier();
                }
            }

            this.state = 126;
            this.match(StructuredTextParser.ID);
            this.state = 130;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 447) !== 0)) {
                {
                {
                this.state = 127;
                this.varDeclSection();
                }
                }
                this.state = 132;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 133;
            this.statementSection();
            this.state = 134;
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
            this.state = 137;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 136;
                this.attribute();
                }
            }

            this.state = 139;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 141;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 140;
                this.accessModifier();
                }
            }

            this.state = 143;
            this.match(StructuredTextParser.ID);
            this.state = 146;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 144;
                this.match(StructuredTextParser.T__0);
                this.state = 145;
                this.type_();
                }
            }

            this.state = 151;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 447) !== 0)) {
                {
                {
                this.state = 148;
                this.varDeclSection();
                }
                }
                this.state = 153;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 154;
            this.statementSection();
            this.state = 155;
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
            this.state = 158;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 157;
                this.attribute();
                }
            }

            this.state = 160;
            this.match(StructuredTextParser.METHOD);
            this.state = 162;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 161;
                this.accessModifier();
                }
            }

            this.state = 167;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0)) {
                {
                {
                this.state = 164;
                this.modifier();
                }
                }
                this.state = 169;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 170;
            this.match(StructuredTextParser.ID);
            this.state = 173;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 171;
                this.match(StructuredTextParser.T__0);
                this.state = 172;
                this.type_();
                }
            }

            this.state = 178;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 447) !== 0)) {
                {
                {
                this.state = 175;
                this.varDeclSection();
                }
                }
                this.state = 180;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 181;
            this.statementSection();
            this.state = 182;
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
            this.state = 185;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
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
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 188;
                this.accessModifier();
                }
            }

            this.state = 194;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0)) {
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
            while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 447) !== 0)) {
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
    public functionBlock(): FunctionBlockContext {
        let localContext = new FunctionBlockContext(this.context, this.state);
        this.enterRule(localContext, 10, StructuredTextParser.RULE_functionBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 210;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 209;
                this.attribute();
                }
            }

            this.state = 212;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 214;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 213;
                this.accessModifier();
                }
            }

            this.state = 219;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0)) {
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
            this.state = 224;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 223;
                this.extendsClause();
                }
            }

            this.state = 227;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 226;
                this.implementsClause();
                }
            }

            this.state = 232;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 29294849) !== 0) || _la === 91) {
                {
                {
                this.state = 229;
                this.member();
                }
                }
                this.state = 234;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 235;
            this.statementSection();
            this.state = 236;
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
            this.state = 239;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 238;
                this.attribute();
                }
            }

            this.state = 241;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 243;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 242;
                this.accessModifier();
                }
            }

            this.state = 245;
            this.match(StructuredTextParser.ID);
            this.state = 247;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 51) {
                {
                this.state = 246;
                this.extendsClause();
                }
            }

            this.state = 252;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 29294849) !== 0) || _la === 91) {
                {
                {
                this.state = 249;
                this.member();
                }
                }
                this.state = 254;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 255;
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
            this.state = 258;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 257;
                this.attribute();
                }
            }

            this.state = 260;
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 262;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 261;
                this.accessModifier();
                }
            }

            this.state = 267;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0)) {
                {
                {
                this.state = 264;
                this.modifier();
                }
                }
                this.state = 269;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 270;
            this.match(StructuredTextParser.ID);
            this.state = 272;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 271;
                this.varDecl();
                }
                }
                this.state = 274;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 40 || _la === 117);
            this.state = 276;
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
            this.state = 324;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 281;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 40) {
                    {
                    {
                    this.state = 278;
                    this.attribute();
                    }
                    }
                    this.state = 283;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 284;
                this.match(StructuredTextParser.TYPE);
                this.state = 286;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                    {
                    this.state = 285;
                    this.accessModifier();
                    }
                }

                this.state = 288;
                this.match(StructuredTextParser.ID);
                this.state = 289;
                this.match(StructuredTextParser.T__0);
                this.state = 290;
                this.enumDecl();
                this.state = 291;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 296;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 40) {
                    {
                    {
                    this.state = 293;
                    this.attribute();
                    }
                    }
                    this.state = 298;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 299;
                this.match(StructuredTextParser.TYPE);
                this.state = 301;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                    {
                    this.state = 300;
                    this.accessModifier();
                    }
                }

                this.state = 303;
                this.match(StructuredTextParser.ID);
                this.state = 304;
                this.match(StructuredTextParser.T__0);
                this.state = 305;
                this.structDecl();
                this.state = 306;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 311;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 40) {
                    {
                    {
                    this.state = 308;
                    this.attribute();
                    }
                    }
                    this.state = 313;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 314;
                this.match(StructuredTextParser.TYPE);
                this.state = 316;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                    {
                    this.state = 315;
                    this.accessModifier();
                    }
                }

                this.state = 318;
                this.match(StructuredTextParser.ID);
                this.state = 319;
                this.match(StructuredTextParser.T__0);
                this.state = 320;
                this.type_();
                this.state = 321;
                this.match(StructuredTextParser.T__1);
                this.state = 322;
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
            this.state = 326;
            this.match(StructuredTextParser.LPAREN);
            this.state = 327;
            this.enumMember();
            this.state = 332;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 328;
                this.match(StructuredTextParser.T__2);
                this.state = 329;
                this.enumMember();
                }
                }
                this.state = 334;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 335;
            this.match(StructuredTextParser.RPAREN);
            this.state = 337;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268434944) !== 0) || _la === 72 || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 131) !== 0)) {
                {
                this.state = 336;
                this.type_();
                }
            }

            this.state = 341;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 339;
                this.match(StructuredTextParser.T__3);
                this.state = 340;
                this.initialValue();
                }
            }

            this.state = 343;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 345;
            this.match(StructuredTextParser.ID);
            this.state = 348;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 346;
                this.match(StructuredTextParser.T__3);
                this.state = 347;
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
            this.state = 350;
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
            this.state = 352;
            this.match(StructuredTextParser.STRUCT);
            this.state = 356;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 40 || _la === 117) {
                {
                {
                this.state = 353;
                this.varDecl();
                }
                }
                this.state = 358;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 359;
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
            this.state = 361;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 362;
            this.type_();
            this.state = 367;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 363;
                this.match(StructuredTextParser.T__2);
                this.state = 364;
                this.type_();
                }
                }
                this.state = 369;
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
            this.state = 370;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 371;
            this.type_();
            this.state = 376;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 372;
                this.match(StructuredTextParser.T__2);
                this.state = 373;
                this.type_();
                }
                }
                this.state = 378;
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
            this.state = 382;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 379;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 380;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 381;
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
            this.state = 384;
            this.varSectionType();
            this.state = 388;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0)) {
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
            this.state = 392;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 391;
                this.varDecl();
                }
                }
                this.state = 394;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 40 || _la === 117);
            this.state = 396;
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
            this.state = 398;
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
            this.state = 401;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 40) {
                {
                this.state = 400;
                this.attribute();
                }
            }

            this.state = 403;
            this.match(StructuredTextParser.ID);
            this.state = 404;
            this.match(StructuredTextParser.T__0);
            this.state = 405;
            this.type_();
            this.state = 408;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4 || _la === 5) {
                {
                this.state = 406;
                _la = this.tokenStream.LA(1);
                if(!(_la === 4 || _la === 5)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 407;
                this.exprOrArrayInit();
                }
            }

            this.state = 410;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 414;
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
                this.state = 412;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__5:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 413;
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
            this.state = 416;
            this.match(StructuredTextParser.T__5);
            this.state = 417;
            this.expr(0);
            this.state = 422;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 418;
                this.match(StructuredTextParser.T__2);
                this.state = 419;
                this.expr(0);
                }
                }
                this.state = 424;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 425;
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
            this.state = 440;
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
                this.state = 427;
                this.baseType();
                }
                break;
            case StructuredTextParser.ARRAY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 428;
                this.match(StructuredTextParser.ARRAY);
                this.state = 429;
                this.match(StructuredTextParser.T__5);
                this.state = 430;
                this.match(StructuredTextParser.NUMBER);
                this.state = 431;
                this.match(StructuredTextParser.T__7);
                this.state = 432;
                this.match(StructuredTextParser.NUMBER);
                this.state = 433;
                this.match(StructuredTextParser.T__6);
                this.state = 434;
                this.match(StructuredTextParser.OF);
                this.state = 435;
                this.type_();
                }
                break;
            case StructuredTextParser.POINTER_TO:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 436;
                this.match(StructuredTextParser.POINTER_TO);
                this.state = 437;
                this.type_();
                }
                break;
            case StructuredTextParser.REFERENCE_TO:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 438;
                this.match(StructuredTextParser.REFERENCE_TO);
                this.state = 439;
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
            this.state = 444;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 442;
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
                this.state = 443;
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
            this.state = 446;
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
            this.state = 451;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 448;
                    this.statement();
                    }
                    }
                }
                this.state = 453;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
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
            this.state = 465;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 454;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 455;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 456;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 457;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 458;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 459;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 460;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 461;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 462;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 463;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 464;
                this.match(StructuredTextParser.T__1);
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
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 467;
            this.memberQualifier(0);
            this.state = 468;
            this.assignmentOperator();
            this.state = 469;
            this.expr(0);
            this.state = 470;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentOperator(): AssignmentOperatorContext {
        let localContext = new AssignmentOperatorContext(this.context, this.state);
        this.enterRule(localContext, 54, StructuredTextParser.RULE_assignmentOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 472;
            _la = this.tokenStream.LA(1);
            if(!(_la === 4 || _la === 5)) {
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
    public arrayIndex(): ArrayIndexContext {
        let localContext = new ArrayIndexContext(this.context, this.state);
        this.enterRule(localContext, 56, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 474;
            this.match(StructuredTextParser.T__5);
            this.state = 475;
            this.expr(0);
            this.state = 476;
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
        this.enterRule(localContext, 58, StructuredTextParser.RULE_callStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 481;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 57, this.context) ) {
            case 1:
                {
                this.state = 478;
                this.memberQualifier(0);
                this.state = 479;
                this.match(StructuredTextParser.T__27);
                }
                break;
            }
            this.state = 483;
            this.match(StructuredTextParser.ID);
            this.state = 484;
            this.match(StructuredTextParser.LPAREN);
            this.state = 486;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 125) !== 0)) {
                {
                this.state = 485;
                this.argumentList();
                }
            }

            this.state = 488;
            this.match(StructuredTextParser.RPAREN);
            this.state = 489;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 491;
            this.argument();
            this.state = 496;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 492;
                this.match(StructuredTextParser.T__2);
                this.state = 493;
                this.argument();
                }
                }
                this.state = 498;
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
            this.state = 503;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 499;
                this.match(StructuredTextParser.ID);
                this.state = 500;
                _la = this.tokenStream.LA(1);
                if(!(_la === 4 || _la === 29)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 501;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 502;
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
            this.state = 505;
            this.match(StructuredTextParser.IF);
            this.state = 506;
            this.expr(0);
            this.state = 507;
            this.match(StructuredTextParser.THEN);
            this.state = 508;
            this.statementSection();
            this.state = 516;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 68) {
                {
                {
                this.state = 509;
                this.match(StructuredTextParser.ELSIF);
                this.state = 510;
                this.expr(0);
                this.state = 511;
                this.match(StructuredTextParser.THEN);
                this.state = 512;
                this.statementSection();
                }
                }
                this.state = 518;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 521;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 69) {
                {
                this.state = 519;
                this.match(StructuredTextParser.ELSE);
                this.state = 520;
                this.statementSection();
                }
            }

            this.state = 523;
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
            this.state = 525;
            this.match(StructuredTextParser.CASE);
            this.state = 526;
            this.expr(0);
            this.state = 527;
            this.match(StructuredTextParser.OF);
            this.state = 529;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 528;
                this.caseElement();
                }
                }
                this.state = 531;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & 27) !== 0));
            this.state = 535;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 69) {
                {
                this.state = 533;
                this.match(StructuredTextParser.ELSE);
                this.state = 534;
                this.statementSection();
                }
            }

            this.state = 537;
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
            this.state = 539;
            this.caseValue();
            this.state = 544;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 540;
                this.match(StructuredTextParser.T__2);
                this.state = 541;
                this.caseValue();
                }
                }
                this.state = 546;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 547;
            this.match(StructuredTextParser.T__0);
            this.state = 548;
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
            this.state = 550;
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
        this.enterRule(localContext, 72, StructuredTextParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 552;
            this.match(StructuredTextParser.WHILE);
            this.state = 553;
            this.expr(0);
            this.state = 554;
            this.match(StructuredTextParser.DO);
            this.state = 555;
            this.statementSection();
            this.state = 556;
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
            this.state = 558;
            this.match(StructuredTextParser.REPEAT);
            this.state = 559;
            this.statementSection();
            this.state = 560;
            this.match(StructuredTextParser.UNTIL);
            this.state = 561;
            this.expr(0);
            this.state = 562;
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
            this.state = 564;
            this.match(StructuredTextParser.FOR);
            this.state = 565;
            this.match(StructuredTextParser.ID);
            this.state = 566;
            this.match(StructuredTextParser.T__3);
            this.state = 567;
            this.expr(0);
            this.state = 568;
            this.match(StructuredTextParser.TO);
            this.state = 569;
            this.expr(0);
            this.state = 572;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 83) {
                {
                this.state = 570;
                this.match(StructuredTextParser.BY);
                this.state = 571;
                this.expr(0);
                }
            }

            this.state = 574;
            this.match(StructuredTextParser.DO);
            this.state = 575;
            this.statementSection();
            this.state = 576;
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
            this.state = 578;
            this.match(StructuredTextParser.RETURN);
            this.state = 579;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 581;
            this.match(StructuredTextParser.EXIT);
            this.state = 582;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
            this.state = 584;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 585;
            this.match(StructuredTextParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        let _startState = 84;
        this.enterRecursionRule(localContext, 84, StructuredTextParser.RULE_memberQualifier, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 588;
            this.primary();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 595;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 67, this.context);
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
                    this.state = 590;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 591;
                    this.match(StructuredTextParser.T__27);
                    this.state = 592;
                    this.primary();
                    }
                    }
                }
                this.state = 597;
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
    public primary(): PrimaryContext {
        let localContext = new PrimaryContext(this.context, this.state);
        this.enterRule(localContext, 86, StructuredTextParser.RULE_primary);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 598;
            this.match(StructuredTextParser.ID);
            this.state = 602;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 68, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 599;
                    this.derefOrIndex();
                    }
                    }
                }
                this.state = 604;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 68, this.context);
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
        this.enterRule(localContext, 88, StructuredTextParser.RULE_derefOrIndex);
        try {
            this.state = 607;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.CARET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 605;
                this.match(StructuredTextParser.CARET);
                }
                break;
            case StructuredTextParser.T__5:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 606;
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
        let _startState = 90;
        this.enterRecursionRule(localContext, 90, StructuredTextParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 626;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                {
                this.state = 610;
                this.match(StructuredTextParser.LPAREN);
                this.state = 611;
                this.expr(0);
                this.state = 612;
                this.match(StructuredTextParser.RPAREN);
                }
                break;
            case 2:
                {
                this.state = 614;
                this.match(StructuredTextParser.NUMBER);
                }
                break;
            case 3:
                {
                this.state = 615;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case 4:
                {
                this.state = 616;
                this.match(StructuredTextParser.TIME_LITERAL);
                }
                break;
            case 5:
                {
                this.state = 617;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            case 6:
                {
                this.state = 618;
                this.memberQualifier(0);
                }
                break;
            case 7:
                {
                this.state = 619;
                this.memberQualifier(0);
                this.state = 620;
                this.match(StructuredTextParser.LPAREN);
                this.state = 622;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 125) !== 0)) {
                    {
                    this.state = 621;
                    this.argumentList();
                    }
                }

                this.state = 624;
                this.match(StructuredTextParser.RPAREN);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 642;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 73, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 640;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 628;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 629;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 30 || _la === 31 || _la === 106)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 630;
                        this.expr(12);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 631;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 632;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 32 || _la === 33)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 633;
                        this.expr(11);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 634;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 635;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 63) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 636;
                        this.expr(10);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 637;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 638;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 639;
                        this.expr(9);
                        }
                        break;
                    }
                    }
                }
                this.state = 644;
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
    public propertyBody(): PropertyBodyContext {
        let localContext = new PropertyBodyContext(this.context, this.state);
        this.enterRule(localContext, 92, StructuredTextParser.RULE_propertyBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 653;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context) ) {
            case 1:
                {
                this.state = 645;
                this.getter();
                }
                break;
            case 2:
                {
                this.state = 646;
                this.setter();
                }
                break;
            case 3:
                {
                this.state = 647;
                this.getter();
                this.state = 648;
                this.setter();
                }
                break;
            case 4:
                {
                this.state = 650;
                this.setter();
                this.state = 651;
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
        this.enterRule(localContext, 94, StructuredTextParser.RULE_getter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 655;
            this.match(StructuredTextParser.GET);
            this.state = 657;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 656;
                this.accessModifier();
                }
            }

            this.state = 659;
            this.statementSection();
            this.state = 660;
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
        this.enterRule(localContext, 96, StructuredTextParser.RULE_setter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 662;
            this.match(StructuredTextParser.SET);
            this.state = 664;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 15) !== 0)) {
                {
                this.state = 663;
                this.accessModifier();
                }
            }

            this.state = 666;
            this.statementSection();
            this.state = 667;
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
        this.enterRule(localContext, 98, StructuredTextParser.RULE_attribute);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 669;
            this.match(StructuredTextParser.T__39);
            this.state = 670;
            this.match(StructuredTextParser.ID);
            this.state = 672;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 112) {
                {
                this.state = 671;
                this.attributeArgList();
                }
            }

            this.state = 674;
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
        this.enterRule(localContext, 100, StructuredTextParser.RULE_attributeArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 676;
            this.match(StructuredTextParser.LPAREN);
            this.state = 677;
            this.attributeArg();
            this.state = 682;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 3) {
                {
                {
                this.state = 678;
                this.match(StructuredTextParser.T__2);
                this.state = 679;
                this.attributeArg();
                }
                }
                this.state = 684;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 685;
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
        this.enterRule(localContext, 102, StructuredTextParser.RULE_attributeArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 687;
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
        this.enterRule(localContext, 104, StructuredTextParser.RULE_accessModifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 689;
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
        this.enterRule(localContext, 106, StructuredTextParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 691;
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
        case 42:
            return this.memberQualifier_sempred(localContext as MemberQualifierContext, predIndex);
        case 45:
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
        4,1,121,694,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,1,0,1,0,1,0,1,0,1,0,1,0,5,0,115,8,0,10,0,12,0,118,9,
        0,1,1,3,1,121,8,1,1,1,1,1,3,1,125,8,1,1,1,1,1,5,1,129,8,1,10,1,12,
        1,132,9,1,1,1,1,1,1,1,1,2,3,2,138,8,2,1,2,1,2,3,2,142,8,2,1,2,1,
        2,1,2,3,2,147,8,2,1,2,5,2,150,8,2,10,2,12,2,153,9,2,1,2,1,2,1,2,
        1,3,3,3,159,8,3,1,3,1,3,3,3,163,8,3,1,3,5,3,166,8,3,10,3,12,3,169,
        9,3,1,3,1,3,1,3,3,3,174,8,3,1,3,5,3,177,8,3,10,3,12,3,180,9,3,1,
        3,1,3,1,3,1,4,3,4,186,8,4,1,4,1,4,3,4,190,8,4,1,4,5,4,193,8,4,10,
        4,12,4,196,9,4,1,4,1,4,1,4,1,4,5,4,202,8,4,10,4,12,4,205,9,4,1,4,
        1,4,1,4,1,5,3,5,211,8,5,1,5,1,5,3,5,215,8,5,1,5,5,5,218,8,5,10,5,
        12,5,221,9,5,1,5,1,5,3,5,225,8,5,1,5,3,5,228,8,5,1,5,5,5,231,8,5,
        10,5,12,5,234,9,5,1,5,1,5,1,5,1,6,3,6,240,8,6,1,6,1,6,3,6,244,8,
        6,1,6,1,6,3,6,248,8,6,1,6,5,6,251,8,6,10,6,12,6,254,9,6,1,6,1,6,
        1,7,3,7,259,8,7,1,7,1,7,3,7,263,8,7,1,7,5,7,266,8,7,10,7,12,7,269,
        9,7,1,7,1,7,4,7,273,8,7,11,7,12,7,274,1,7,1,7,1,8,5,8,280,8,8,10,
        8,12,8,283,9,8,1,8,1,8,3,8,287,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,295,
        8,8,10,8,12,8,298,9,8,1,8,1,8,3,8,302,8,8,1,8,1,8,1,8,1,8,1,8,1,
        8,5,8,310,8,8,10,8,12,8,313,9,8,1,8,1,8,3,8,317,8,8,1,8,1,8,1,8,
        1,8,1,8,1,8,3,8,325,8,8,1,9,1,9,1,9,1,9,5,9,331,8,9,10,9,12,9,334,
        9,9,1,9,1,9,3,9,338,8,9,1,9,1,9,3,9,342,8,9,1,9,1,9,1,10,1,10,1,
        10,3,10,349,8,10,1,11,1,11,1,12,1,12,5,12,355,8,12,10,12,12,12,358,
        9,12,1,12,1,12,1,13,1,13,1,13,1,13,5,13,366,8,13,10,13,12,13,369,
        9,13,1,14,1,14,1,14,1,14,5,14,375,8,14,10,14,12,14,378,9,14,1,15,
        1,15,1,15,3,15,383,8,15,1,16,1,16,5,16,387,8,16,10,16,12,16,390,
        9,16,1,16,4,16,393,8,16,11,16,12,16,394,1,16,1,16,1,17,1,17,1,18,
        3,18,402,8,18,1,18,1,18,1,18,1,18,1,18,3,18,409,8,18,1,18,1,18,1,
        19,1,19,3,19,415,8,19,1,20,1,20,1,20,1,20,5,20,421,8,20,10,20,12,
        20,424,9,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,
        21,1,21,1,21,1,21,1,21,3,21,441,8,21,1,22,1,22,3,22,445,8,22,1,23,
        1,23,1,24,5,24,450,8,24,10,24,12,24,453,9,24,1,25,1,25,1,25,1,25,
        1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,466,8,25,1,26,1,26,1,26,
        1,26,1,26,1,27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,3,29,482,
        8,29,1,29,1,29,1,29,3,29,487,8,29,1,29,1,29,1,29,1,30,1,30,1,30,
        5,30,495,8,30,10,30,12,30,498,9,30,1,31,1,31,1,31,1,31,3,31,504,
        8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,5,32,515,8,32,
        10,32,12,32,518,9,32,1,32,1,32,3,32,522,8,32,1,32,1,32,1,33,1,33,
        1,33,1,33,4,33,530,8,33,11,33,12,33,531,1,33,1,33,3,33,536,8,33,
        1,33,1,33,1,34,1,34,1,34,5,34,543,8,34,10,34,12,34,546,9,34,1,34,
        1,34,1,34,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,
        1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,3,38,573,
        8,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,40,1,41,1,41,
        1,41,1,42,1,42,1,42,1,42,1,42,1,42,5,42,594,8,42,10,42,12,42,597,
        9,42,1,43,1,43,5,43,601,8,43,10,43,12,43,604,9,43,1,44,1,44,3,44,
        608,8,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,
        1,45,1,45,3,45,623,8,45,1,45,1,45,3,45,627,8,45,1,45,1,45,1,45,1,
        45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,5,45,641,8,45,10,45,12,
        45,644,9,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,3,46,654,8,46,
        1,47,1,47,3,47,658,8,47,1,47,1,47,1,47,1,48,1,48,3,48,665,8,48,1,
        48,1,48,1,48,1,49,1,49,1,49,3,49,673,8,49,1,49,1,49,1,50,1,50,1,
        50,1,50,5,50,681,8,50,10,50,12,50,684,9,50,1,50,1,50,1,51,1,51,1,
        52,1,52,1,53,1,53,1,53,0,2,84,90,54,0,2,4,6,8,10,12,14,16,18,20,
        22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
        66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,
        0,12,2,0,56,61,63,64,1,0,4,5,1,0,9,27,2,0,4,4,29,29,2,0,114,115,
        117,118,2,0,30,31,106,106,1,0,32,33,1,0,34,39,1,0,88,90,2,0,115,
        115,117,118,1,0,102,105,1,0,99,101,744,0,116,1,0,0,0,2,120,1,0,0,
        0,4,137,1,0,0,0,6,158,1,0,0,0,8,185,1,0,0,0,10,210,1,0,0,0,12,239,
        1,0,0,0,14,258,1,0,0,0,16,324,1,0,0,0,18,326,1,0,0,0,20,345,1,0,
        0,0,22,350,1,0,0,0,24,352,1,0,0,0,26,361,1,0,0,0,28,370,1,0,0,0,
        30,382,1,0,0,0,32,384,1,0,0,0,34,398,1,0,0,0,36,401,1,0,0,0,38,414,
        1,0,0,0,40,416,1,0,0,0,42,440,1,0,0,0,44,444,1,0,0,0,46,446,1,0,
        0,0,48,451,1,0,0,0,50,465,1,0,0,0,52,467,1,0,0,0,54,472,1,0,0,0,
        56,474,1,0,0,0,58,481,1,0,0,0,60,491,1,0,0,0,62,503,1,0,0,0,64,505,
        1,0,0,0,66,525,1,0,0,0,68,539,1,0,0,0,70,550,1,0,0,0,72,552,1,0,
        0,0,74,558,1,0,0,0,76,564,1,0,0,0,78,578,1,0,0,0,80,581,1,0,0,0,
        82,584,1,0,0,0,84,587,1,0,0,0,86,598,1,0,0,0,88,607,1,0,0,0,90,626,
        1,0,0,0,92,653,1,0,0,0,94,655,1,0,0,0,96,662,1,0,0,0,98,669,1,0,
        0,0,100,676,1,0,0,0,102,687,1,0,0,0,104,689,1,0,0,0,106,691,1,0,
        0,0,108,115,3,2,1,0,109,115,3,10,5,0,110,115,3,4,2,0,111,115,3,12,
        6,0,112,115,3,14,7,0,113,115,3,16,8,0,114,108,1,0,0,0,114,109,1,
        0,0,0,114,110,1,0,0,0,114,111,1,0,0,0,114,112,1,0,0,0,114,113,1,
        0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,1,1,0,
        0,0,118,116,1,0,0,0,119,121,3,98,49,0,120,119,1,0,0,0,120,121,1,
        0,0,0,121,122,1,0,0,0,122,124,5,42,0,0,123,125,3,104,52,0,124,123,
        1,0,0,0,124,125,1,0,0,0,125,126,1,0,0,0,126,130,5,117,0,0,127,129,
        3,32,16,0,128,127,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,
        1,0,0,0,131,133,1,0,0,0,132,130,1,0,0,0,133,134,3,48,24,0,134,135,
        5,43,0,0,135,3,1,0,0,0,136,138,3,98,49,0,137,136,1,0,0,0,137,138,
        1,0,0,0,138,139,1,0,0,0,139,141,5,46,0,0,140,142,3,104,52,0,141,
        140,1,0,0,0,141,142,1,0,0,0,142,143,1,0,0,0,143,146,5,117,0,0,144,
        145,5,1,0,0,145,147,3,42,21,0,146,144,1,0,0,0,146,147,1,0,0,0,147,
        151,1,0,0,0,148,150,3,32,16,0,149,148,1,0,0,0,150,153,1,0,0,0,151,
        149,1,0,0,0,151,152,1,0,0,0,152,154,1,0,0,0,153,151,1,0,0,0,154,
        155,3,48,24,0,155,156,5,47,0,0,156,5,1,0,0,0,157,159,3,98,49,0,158,
        157,1,0,0,0,158,159,1,0,0,0,159,160,1,0,0,0,160,162,5,91,0,0,161,
        163,3,104,52,0,162,161,1,0,0,0,162,163,1,0,0,0,163,167,1,0,0,0,164,
        166,3,106,53,0,165,164,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,167,
        168,1,0,0,0,168,170,1,0,0,0,169,167,1,0,0,0,170,173,5,117,0,0,171,
        172,5,1,0,0,172,174,3,42,21,0,173,171,1,0,0,0,173,174,1,0,0,0,174,
        178,1,0,0,0,175,177,3,32,16,0,176,175,1,0,0,0,177,180,1,0,0,0,178,
        176,1,0,0,0,178,179,1,0,0,0,179,181,1,0,0,0,180,178,1,0,0,0,181,
        182,3,48,24,0,182,183,5,92,0,0,183,7,1,0,0,0,184,186,3,98,49,0,185,
        184,1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,189,5,48,0,0,188,
        190,3,104,52,0,189,188,1,0,0,0,189,190,1,0,0,0,190,194,1,0,0,0,191,
        193,3,106,53,0,192,191,1,0,0,0,193,196,1,0,0,0,194,192,1,0,0,0,194,
        195,1,0,0,0,195,197,1,0,0,0,196,194,1,0,0,0,197,198,5,117,0,0,198,
        199,5,1,0,0,199,203,3,42,21,0,200,202,3,32,16,0,201,200,1,0,0,0,
        202,205,1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,0,204,206,1,0,0,0,
        205,203,1,0,0,0,206,207,3,92,46,0,207,208,5,49,0,0,208,9,1,0,0,0,
        209,211,3,98,49,0,210,209,1,0,0,0,210,211,1,0,0,0,211,212,1,0,0,
        0,212,214,5,44,0,0,213,215,3,104,52,0,214,213,1,0,0,0,214,215,1,
        0,0,0,215,219,1,0,0,0,216,218,3,106,53,0,217,216,1,0,0,0,218,221,
        1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,222,1,0,0,0,221,219,
        1,0,0,0,222,224,5,117,0,0,223,225,3,28,14,0,224,223,1,0,0,0,224,
        225,1,0,0,0,225,227,1,0,0,0,226,228,3,26,13,0,227,226,1,0,0,0,227,
        228,1,0,0,0,228,232,1,0,0,0,229,231,3,30,15,0,230,229,1,0,0,0,231,
        234,1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,0,233,235,1,0,0,0,234,
        232,1,0,0,0,235,236,3,48,24,0,236,237,5,45,0,0,237,11,1,0,0,0,238,
        240,3,98,49,0,239,238,1,0,0,0,239,240,1,0,0,0,240,241,1,0,0,0,241,
        243,5,93,0,0,242,244,3,104,52,0,243,242,1,0,0,0,243,244,1,0,0,0,
        244,245,1,0,0,0,245,247,5,117,0,0,246,248,3,28,14,0,247,246,1,0,
        0,0,247,248,1,0,0,0,248,252,1,0,0,0,249,251,3,30,15,0,250,249,1,
        0,0,0,251,254,1,0,0,0,252,250,1,0,0,0,252,253,1,0,0,0,253,255,1,
        0,0,0,254,252,1,0,0,0,255,256,5,94,0,0,256,13,1,0,0,0,257,259,3,
        98,49,0,258,257,1,0,0,0,258,259,1,0,0,0,259,260,1,0,0,0,260,262,
        5,62,0,0,261,263,3,104,52,0,262,261,1,0,0,0,262,263,1,0,0,0,263,
        267,1,0,0,0,264,266,3,106,53,0,265,264,1,0,0,0,266,269,1,0,0,0,267,
        265,1,0,0,0,267,268,1,0,0,0,268,270,1,0,0,0,269,267,1,0,0,0,270,
        272,5,117,0,0,271,273,3,36,18,0,272,271,1,0,0,0,273,274,1,0,0,0,
        274,272,1,0,0,0,274,275,1,0,0,0,275,276,1,0,0,0,276,277,5,65,0,0,
        277,15,1,0,0,0,278,280,3,98,49,0,279,278,1,0,0,0,280,283,1,0,0,0,
        281,279,1,0,0,0,281,282,1,0,0,0,282,284,1,0,0,0,283,281,1,0,0,0,
        284,286,5,107,0,0,285,287,3,104,52,0,286,285,1,0,0,0,286,287,1,0,
        0,0,287,288,1,0,0,0,288,289,5,117,0,0,289,290,5,1,0,0,290,291,3,
        18,9,0,291,292,5,108,0,0,292,325,1,0,0,0,293,295,3,98,49,0,294,293,
        1,0,0,0,295,298,1,0,0,0,296,294,1,0,0,0,296,297,1,0,0,0,297,299,
        1,0,0,0,298,296,1,0,0,0,299,301,5,107,0,0,300,302,3,104,52,0,301,
        300,1,0,0,0,301,302,1,0,0,0,302,303,1,0,0,0,303,304,5,117,0,0,304,
        305,5,1,0,0,305,306,3,24,12,0,306,307,5,108,0,0,307,325,1,0,0,0,
        308,310,3,98,49,0,309,308,1,0,0,0,310,313,1,0,0,0,311,309,1,0,0,
        0,311,312,1,0,0,0,312,314,1,0,0,0,313,311,1,0,0,0,314,316,5,107,
        0,0,315,317,3,104,52,0,316,315,1,0,0,0,316,317,1,0,0,0,317,318,1,
        0,0,0,318,319,5,117,0,0,319,320,5,1,0,0,320,321,3,42,21,0,321,322,
        5,2,0,0,322,323,5,108,0,0,323,325,1,0,0,0,324,281,1,0,0,0,324,296,
        1,0,0,0,324,311,1,0,0,0,325,17,1,0,0,0,326,327,5,112,0,0,327,332,
        3,20,10,0,328,329,5,3,0,0,329,331,3,20,10,0,330,328,1,0,0,0,331,
        334,1,0,0,0,332,330,1,0,0,0,332,333,1,0,0,0,333,335,1,0,0,0,334,
        332,1,0,0,0,335,337,5,113,0,0,336,338,3,42,21,0,337,336,1,0,0,0,
        337,338,1,0,0,0,338,341,1,0,0,0,339,340,5,4,0,0,340,342,3,22,11,
        0,341,339,1,0,0,0,341,342,1,0,0,0,342,343,1,0,0,0,343,344,5,2,0,
        0,344,19,1,0,0,0,345,348,5,117,0,0,346,347,5,4,0,0,347,349,3,90,
        45,0,348,346,1,0,0,0,348,349,1,0,0,0,349,21,1,0,0,0,350,351,5,117,
        0,0,351,23,1,0,0,0,352,356,5,95,0,0,353,355,3,36,18,0,354,353,1,
        0,0,0,355,358,1,0,0,0,356,354,1,0,0,0,356,357,1,0,0,0,357,359,1,
        0,0,0,358,356,1,0,0,0,359,360,5,96,0,0,360,25,1,0,0,0,361,362,5,
        50,0,0,362,367,3,42,21,0,363,364,5,3,0,0,364,366,3,42,21,0,365,363,
        1,0,0,0,366,369,1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,0,368,27,1,
        0,0,0,369,367,1,0,0,0,370,371,5,51,0,0,371,376,3,42,21,0,372,373,
        5,3,0,0,373,375,3,42,21,0,374,372,1,0,0,0,375,378,1,0,0,0,376,374,
        1,0,0,0,376,377,1,0,0,0,377,29,1,0,0,0,378,376,1,0,0,0,379,383,3,
        6,3,0,380,383,3,8,4,0,381,383,3,32,16,0,382,379,1,0,0,0,382,380,
        1,0,0,0,382,381,1,0,0,0,383,31,1,0,0,0,384,388,3,34,17,0,385,387,
        3,106,53,0,386,385,1,0,0,0,387,390,1,0,0,0,388,386,1,0,0,0,388,389,
        1,0,0,0,389,392,1,0,0,0,390,388,1,0,0,0,391,393,3,36,18,0,392,391,
        1,0,0,0,393,394,1,0,0,0,394,392,1,0,0,0,394,395,1,0,0,0,395,396,
        1,0,0,0,396,397,5,65,0,0,397,33,1,0,0,0,398,399,7,0,0,0,399,35,1,
        0,0,0,400,402,3,98,49,0,401,400,1,0,0,0,401,402,1,0,0,0,402,403,
        1,0,0,0,403,404,5,117,0,0,404,405,5,1,0,0,405,408,3,42,21,0,406,
        407,7,1,0,0,407,409,3,38,19,0,408,406,1,0,0,0,408,409,1,0,0,0,409,
        410,1,0,0,0,410,411,5,2,0,0,411,37,1,0,0,0,412,415,3,90,45,0,413,
        415,3,40,20,0,414,412,1,0,0,0,414,413,1,0,0,0,415,39,1,0,0,0,416,
        417,5,6,0,0,417,422,3,90,45,0,418,419,5,3,0,0,419,421,3,90,45,0,
        420,418,1,0,0,0,421,424,1,0,0,0,422,420,1,0,0,0,422,423,1,0,0,0,
        423,425,1,0,0,0,424,422,1,0,0,0,425,426,5,7,0,0,426,41,1,0,0,0,427,
        441,3,44,22,0,428,429,5,72,0,0,429,430,5,6,0,0,430,431,5,115,0,0,
        431,432,5,8,0,0,432,433,5,115,0,0,433,434,5,7,0,0,434,435,5,73,0,
        0,435,441,3,42,21,0,436,437,5,111,0,0,437,441,3,42,21,0,438,439,
        5,110,0,0,439,441,3,42,21,0,440,427,1,0,0,0,440,428,1,0,0,0,440,
        436,1,0,0,0,440,438,1,0,0,0,441,43,1,0,0,0,442,445,5,117,0,0,443,
        445,3,46,23,0,444,442,1,0,0,0,444,443,1,0,0,0,445,45,1,0,0,0,446,
        447,7,2,0,0,447,47,1,0,0,0,448,450,3,50,25,0,449,448,1,0,0,0,450,
        453,1,0,0,0,451,449,1,0,0,0,451,452,1,0,0,0,452,49,1,0,0,0,453,451,
        1,0,0,0,454,466,3,52,26,0,455,466,3,64,32,0,456,466,3,66,33,0,457,
        466,3,72,36,0,458,466,3,74,37,0,459,466,3,76,38,0,460,466,3,58,29,
        0,461,466,3,78,39,0,462,466,3,80,40,0,463,466,3,82,41,0,464,466,
        5,2,0,0,465,454,1,0,0,0,465,455,1,0,0,0,465,456,1,0,0,0,465,457,
        1,0,0,0,465,458,1,0,0,0,465,459,1,0,0,0,465,460,1,0,0,0,465,461,
        1,0,0,0,465,462,1,0,0,0,465,463,1,0,0,0,465,464,1,0,0,0,466,51,1,
        0,0,0,467,468,3,84,42,0,468,469,3,54,27,0,469,470,3,90,45,0,470,
        471,5,2,0,0,471,53,1,0,0,0,472,473,7,1,0,0,473,55,1,0,0,0,474,475,
        5,6,0,0,475,476,3,90,45,0,476,477,5,7,0,0,477,57,1,0,0,0,478,479,
        3,84,42,0,479,480,5,28,0,0,480,482,1,0,0,0,481,478,1,0,0,0,481,482,
        1,0,0,0,482,483,1,0,0,0,483,484,5,117,0,0,484,486,5,112,0,0,485,
        487,3,60,30,0,486,485,1,0,0,0,486,487,1,0,0,0,487,488,1,0,0,0,488,
        489,5,113,0,0,489,490,5,2,0,0,490,59,1,0,0,0,491,496,3,62,31,0,492,
        493,5,3,0,0,493,495,3,62,31,0,494,492,1,0,0,0,495,498,1,0,0,0,496,
        494,1,0,0,0,496,497,1,0,0,0,497,61,1,0,0,0,498,496,1,0,0,0,499,500,
        5,117,0,0,500,501,7,3,0,0,501,504,3,90,45,0,502,504,3,90,45,0,503,
        499,1,0,0,0,503,502,1,0,0,0,504,63,1,0,0,0,505,506,5,66,0,0,506,
        507,3,90,45,0,507,508,5,67,0,0,508,516,3,48,24,0,509,510,5,68,0,
        0,510,511,3,90,45,0,511,512,5,67,0,0,512,513,3,48,24,0,513,515,1,
        0,0,0,514,509,1,0,0,0,515,518,1,0,0,0,516,514,1,0,0,0,516,517,1,
        0,0,0,517,521,1,0,0,0,518,516,1,0,0,0,519,520,5,69,0,0,520,522,3,
        48,24,0,521,519,1,0,0,0,521,522,1,0,0,0,522,523,1,0,0,0,523,524,
        5,70,0,0,524,65,1,0,0,0,525,526,5,71,0,0,526,527,3,90,45,0,527,529,
        5,73,0,0,528,530,3,68,34,0,529,528,1,0,0,0,530,531,1,0,0,0,531,529,
        1,0,0,0,531,532,1,0,0,0,532,535,1,0,0,0,533,534,5,69,0,0,534,536,
        3,48,24,0,535,533,1,0,0,0,535,536,1,0,0,0,536,537,1,0,0,0,537,538,
        5,74,0,0,538,67,1,0,0,0,539,544,3,70,35,0,540,541,5,3,0,0,541,543,
        3,70,35,0,542,540,1,0,0,0,543,546,1,0,0,0,544,542,1,0,0,0,544,545,
        1,0,0,0,545,547,1,0,0,0,546,544,1,0,0,0,547,548,5,1,0,0,548,549,
        3,48,24,0,549,69,1,0,0,0,550,551,7,4,0,0,551,71,1,0,0,0,552,553,
        5,75,0,0,553,554,3,90,45,0,554,555,5,76,0,0,555,556,3,48,24,0,556,
        557,5,77,0,0,557,73,1,0,0,0,558,559,5,78,0,0,559,560,3,48,24,0,560,
        561,5,79,0,0,561,562,3,90,45,0,562,563,5,80,0,0,563,75,1,0,0,0,564,
        565,5,81,0,0,565,566,5,117,0,0,566,567,5,4,0,0,567,568,3,90,45,0,
        568,569,5,82,0,0,569,572,3,90,45,0,570,571,5,83,0,0,571,573,3,90,
        45,0,572,570,1,0,0,0,572,573,1,0,0,0,573,574,1,0,0,0,574,575,5,76,
        0,0,575,576,3,48,24,0,576,577,5,84,0,0,577,77,1,0,0,0,578,579,5,
        85,0,0,579,580,5,2,0,0,580,79,1,0,0,0,581,582,5,86,0,0,582,583,5,
        2,0,0,583,81,1,0,0,0,584,585,5,87,0,0,585,586,5,2,0,0,586,83,1,0,
        0,0,587,588,6,42,-1,0,588,589,3,86,43,0,589,595,1,0,0,0,590,591,
        10,2,0,0,591,592,5,28,0,0,592,594,3,86,43,0,593,590,1,0,0,0,594,
        597,1,0,0,0,595,593,1,0,0,0,595,596,1,0,0,0,596,85,1,0,0,0,597,595,
        1,0,0,0,598,602,5,117,0,0,599,601,3,88,44,0,600,599,1,0,0,0,601,
        604,1,0,0,0,602,600,1,0,0,0,602,603,1,0,0,0,603,87,1,0,0,0,604,602,
        1,0,0,0,605,608,5,109,0,0,606,608,3,56,28,0,607,605,1,0,0,0,607,
        606,1,0,0,0,608,89,1,0,0,0,609,610,6,45,-1,0,610,611,5,112,0,0,611,
        612,3,90,45,0,612,613,5,113,0,0,613,627,1,0,0,0,614,627,5,115,0,
        0,615,627,5,114,0,0,616,627,5,116,0,0,617,627,5,118,0,0,618,627,
        3,84,42,0,619,620,3,84,42,0,620,622,5,112,0,0,621,623,3,60,30,0,
        622,621,1,0,0,0,622,623,1,0,0,0,623,624,1,0,0,0,624,625,5,113,0,
        0,625,627,1,0,0,0,626,609,1,0,0,0,626,614,1,0,0,0,626,615,1,0,0,
        0,626,616,1,0,0,0,626,617,1,0,0,0,626,618,1,0,0,0,626,619,1,0,0,
        0,627,642,1,0,0,0,628,629,10,11,0,0,629,630,7,5,0,0,630,641,3,90,
        45,12,631,632,10,10,0,0,632,633,7,6,0,0,633,641,3,90,45,11,634,635,
        10,9,0,0,635,636,7,7,0,0,636,641,3,90,45,10,637,638,10,8,0,0,638,
        639,7,8,0,0,639,641,3,90,45,9,640,628,1,0,0,0,640,631,1,0,0,0,640,
        634,1,0,0,0,640,637,1,0,0,0,641,644,1,0,0,0,642,640,1,0,0,0,642,
        643,1,0,0,0,643,91,1,0,0,0,644,642,1,0,0,0,645,654,3,94,47,0,646,
        654,3,96,48,0,647,648,3,94,47,0,648,649,3,96,48,0,649,654,1,0,0,
        0,650,651,3,96,48,0,651,652,3,94,47,0,652,654,1,0,0,0,653,645,1,
        0,0,0,653,646,1,0,0,0,653,647,1,0,0,0,653,650,1,0,0,0,654,93,1,0,
        0,0,655,657,5,52,0,0,656,658,3,104,52,0,657,656,1,0,0,0,657,658,
        1,0,0,0,658,659,1,0,0,0,659,660,3,48,24,0,660,661,5,53,0,0,661,95,
        1,0,0,0,662,664,5,54,0,0,663,665,3,104,52,0,664,663,1,0,0,0,664,
        665,1,0,0,0,665,666,1,0,0,0,666,667,3,48,24,0,667,668,5,55,0,0,668,
        97,1,0,0,0,669,670,5,40,0,0,670,672,5,117,0,0,671,673,3,100,50,0,
        672,671,1,0,0,0,672,673,1,0,0,0,673,674,1,0,0,0,674,675,5,41,0,0,
        675,99,1,0,0,0,676,677,5,112,0,0,677,682,3,102,51,0,678,679,5,3,
        0,0,679,681,3,102,51,0,680,678,1,0,0,0,681,684,1,0,0,0,682,680,1,
        0,0,0,682,683,1,0,0,0,683,685,1,0,0,0,684,682,1,0,0,0,685,686,5,
        113,0,0,686,101,1,0,0,0,687,688,7,9,0,0,688,103,1,0,0,0,689,690,
        7,10,0,0,690,105,1,0,0,0,691,692,7,11,0,0,692,107,1,0,0,0,79,114,
        116,120,124,130,137,141,146,151,158,162,167,173,178,185,189,194,
        203,210,214,219,224,227,232,239,243,247,252,258,262,267,274,281,
        286,296,301,311,316,324,332,337,341,348,356,367,376,382,388,394,
        401,408,414,422,440,444,451,465,481,486,496,503,516,521,531,535,
        544,572,595,602,607,622,626,640,642,653,657,664,672,682
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
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
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
    public assignmentOperator(): AssignmentOperatorContext {
        return this.getRuleContext(0, AssignmentOperatorContext)!;
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


export class AssignmentOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_assignmentOperator;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitAssignmentOperator) {
            return visitor.visitAssignmentOperator(this);
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
