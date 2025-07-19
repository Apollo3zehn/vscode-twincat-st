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
    public static readonly T__43 = 44;
    public static readonly T__44 = 45;
    public static readonly PROGRAM = 46;
    public static readonly END_PROGRAM = 47;
    public static readonly FUNCTION_BLOCK = 48;
    public static readonly END_FUNCTION_BLOCK = 49;
    public static readonly FUNCTION = 50;
    public static readonly END_FUNCTION = 51;
    public static readonly PROPERTY = 52;
    public static readonly END_PROPERTY = 53;
    public static readonly IMPLEMENTS = 54;
    public static readonly EXTENDS = 55;
    public static readonly GET = 56;
    public static readonly END_GET = 57;
    public static readonly SET = 58;
    public static readonly END_SET = 59;
    public static readonly VAR = 60;
    public static readonly VAR_INPUT = 61;
    public static readonly VAR_OUTPUT = 62;
    public static readonly VAR_IN_OUT = 63;
    public static readonly VAR_TEMP = 64;
    public static readonly VAR_EXTERNAL = 65;
    public static readonly VAR_GLOBAL = 66;
    public static readonly VAR_INST = 67;
    public static readonly VAR_STAT = 68;
    public static readonly END_VAR = 69;
    public static readonly IF = 70;
    public static readonly THEN = 71;
    public static readonly ELSIF = 72;
    public static readonly ELSE = 73;
    public static readonly END_IF = 74;
    public static readonly CASE = 75;
    public static readonly ARRAY = 76;
    public static readonly OF = 77;
    public static readonly END_CASE = 78;
    public static readonly WHILE = 79;
    public static readonly DO = 80;
    public static readonly END_WHILE = 81;
    public static readonly REPEAT = 82;
    public static readonly UNTIL = 83;
    public static readonly END_REPEAT = 84;
    public static readonly FOR = 85;
    public static readonly TO = 86;
    public static readonly BY = 87;
    public static readonly END_FOR = 88;
    public static readonly RETURN = 89;
    public static readonly EXIT = 90;
    public static readonly CONTINUE = 91;
    public static readonly AND = 92;
    public static readonly OR = 93;
    public static readonly XOR = 94;
    public static readonly METHOD = 95;
    public static readonly END_METHOD = 96;
    public static readonly INTERFACE = 97;
    public static readonly END_INTERFACE = 98;
    public static readonly STRUCT = 99;
    public static readonly END_STRUCT = 100;
    public static readonly ENUM = 101;
    public static readonly END_ENUM = 102;
    public static readonly ABSTRACT = 103;
    public static readonly FINAL = 104;
    public static readonly CONSTANT = 105;
    public static readonly PUBLIC = 106;
    public static readonly PRIVATE = 107;
    public static readonly PROTECTED = 108;
    public static readonly INTERNAL = 109;
    public static readonly MOD = 110;
    public static readonly TYPE = 111;
    public static readonly END_TYPE = 112;
    public static readonly CARET = 113;
    public static readonly REFERENCE_TO = 114;
    public static readonly POINTER_TO = 115;
    public static readonly BOOL = 116;
    public static readonly INTEGER_NUMBER = 117;
    public static readonly REAL_NUMBER = 118;
    public static readonly TIME_LITERAL = 119;
    public static readonly STRING_LITERAL = 120;
    public static readonly ID = 121;
    public static readonly WS = 122;
    public static readonly COMMENT = 123;
    public static readonly COMMENT_BLOCK = 124;
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
    public static readonly RULE_memberExpression = 41;
    public static readonly RULE_memberAccess = 42;
    public static readonly RULE_postfixOp = 43;
    public static readonly RULE_dereference = 44;
    public static readonly RULE_arrayIndex = 45;
    public static readonly RULE_call = 46;
    public static readonly RULE_literal = 47;
    public static readonly RULE_expr = 48;
    public static readonly RULE_propertyBody = 49;
    public static readonly RULE_getter = 50;
    public static readonly RULE_setter = 51;
    public static readonly RULE_attribute = 52;
    public static readonly RULE_attributeArgList = 53;
    public static readonly RULE_attributeArg = 54;
    public static readonly RULE_accessModifier = 55;
    public static readonly RULE_modifier = 56;

    public static readonly literalNames = [
        null, "':'", "';'", "'('", "','", "')'", "':='", "'REF='", "'['", 
        "']'", "'..'", "'BOOL'", "'BIT'", "'BYTE'", "'WORD'", "'DWORD'", 
        "'LWORD'", "'USINT'", "'UINT'", "'UDINT'", "'ULINT'", "'SINT'", 
        "'INT'", "'DINT'", "'LINT'", "'REAL'", "'LREAL'", "'TIME'", "'DATE'", 
        "'TIME_OF_DAY'", "'DATE_AND_TIME'", "'STRING'", "'=>'", "'.'", "'*'", 
        "'/'", "'+'", "'-'", "'='", "'<'", "'>'", "'<='", "'>='", "'<>'", 
        "'{'", "'}'", "'PROGRAM'", "'END_PROGRAM'", "'FUNCTION_BLOCK'", 
        "'END_FUNCTION_BLOCK'", "'FUNCTION'", "'END_FUNCTION'", "'PROPERTY'", 
        "'END_PROPERTY'", "'IMPLEMENTS'", "'EXTENDS'", "'GET'", "'END_GET'", 
        "'SET'", "'END_SET'", "'VAR'", "'VAR_INPUT'", "'VAR_OUTPUT'", "'VAR_IN_OUT'", 
        "'VAR_TEMP'", "'VAR_EXTERNAL'", "'VAR_GLOBAL'", "'VAR_INST'", "'VAR_STAT'", 
        "'END_VAR'", "'IF'", "'THEN'", "'ELSIF'", "'ELSE'", "'END_IF'", 
        "'CASE'", "'ARRAY'", "'OF'", "'END_CASE'", "'WHILE'", "'DO'", "'END_WHILE'", 
        "'REPEAT'", "'UNTIL'", "'END_REPEAT'", "'FOR'", "'TO'", "'BY'", 
        "'END_FOR'", "'RETURN'", "'EXIT'", "'CONTINUE'", "'AND'", "'OR'", 
        "'XOR'", "'METHOD'", "'END_METHOD'", "'INTERFACE'", "'END_INTERFACE'", 
        "'STRUCT'", "'END_STRUCT'", "'ENUM'", "'END_ENUM'", "'ABSTRACT'", 
        "'FINAL'", "'CONSTANT'", "'PUBLIC'", "'PRIVATE'", "'PROTECTED'", 
        "'INTERNAL'", "'MOD'", "'TYPE'", "'END_TYPE'", "'^'", "'REFERENCE TO'", 
        "'POINTER TO'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "PROGRAM", "END_PROGRAM", "FUNCTION_BLOCK", "END_FUNCTION_BLOCK", 
        "FUNCTION", "END_FUNCTION", "PROPERTY", "END_PROPERTY", "IMPLEMENTS", 
        "EXTENDS", "GET", "END_GET", "SET", "END_SET", "VAR", "VAR_INPUT", 
        "VAR_OUTPUT", "VAR_IN_OUT", "VAR_TEMP", "VAR_EXTERNAL", "VAR_GLOBAL", 
        "VAR_INST", "VAR_STAT", "END_VAR", "IF", "THEN", "ELSIF", "ELSE", 
        "END_IF", "CASE", "ARRAY", "OF", "END_CASE", "WHILE", "DO", "END_WHILE", 
        "REPEAT", "UNTIL", "END_REPEAT", "FOR", "TO", "BY", "END_FOR", "RETURN", 
        "EXIT", "CONTINUE", "AND", "OR", "XOR", "METHOD", "END_METHOD", 
        "INTERFACE", "END_INTERFACE", "STRUCT", "END_STRUCT", "ENUM", "END_ENUM", 
        "ABSTRACT", "FINAL", "CONSTANT", "PUBLIC", "PRIVATE", "PROTECTED", 
        "INTERNAL", "MOD", "TYPE", "END_TYPE", "CARET", "REFERENCE_TO", 
        "POINTER_TO", "BOOL", "INTEGER_NUMBER", "REAL_NUMBER", "TIME_LITERAL", 
        "STRING_LITERAL", "ID", "WS", "COMMENT", "COMMENT_BLOCK"
    ];
    public static readonly ruleNames = [
        "compilationUnit", "program", "function", "method", "property", 
        "functionBlock", "interface", "varGlobalSection", "typeDecl", "enumDecl", 
        "enumMember", "initialValue", "structDecl", "implementsClause", 
        "extendsClause", "member", "varDeclSection", "varSectionType", "varDecl", 
        "exprOrArrayInit", "arrayInit", "type", "baseType", "builtinType", 
        "statementSection", "statement", "assignment", "assignmentOperator", 
        "callStatement", "argumentList", "argument", "ifStatement", "caseStatement", 
        "caseElement", "caseValue", "whileStatement", "repeatStatement", 
        "forStatement", "returnStatement", "exitStatement", "continueStatement", 
        "memberExpression", "memberAccess", "postfixOp", "dereference", 
        "arrayIndex", "call", "literal", "expr", "propertyBody", "getter", 
        "setter", "attribute", "attributeArgList", "attributeArg", "accessModifier", 
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
            this.state = 122;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 4194389) !== 0) || _la === 97 || _la === 111) {
                {
                this.state = 120;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
                case 1:
                    {
                    this.state = 114;
                    this.program();
                    }
                    break;
                case 2:
                    {
                    this.state = 115;
                    this.functionBlock();
                    }
                    break;
                case 3:
                    {
                    this.state = 116;
                    this.function_();
                    }
                    break;
                case 4:
                    {
                    this.state = 117;
                    this.interface_();
                    }
                    break;
                case 5:
                    {
                    this.state = 118;
                    this.varGlobalSection();
                    }
                    break;
                case 6:
                    {
                    this.state = 119;
                    this.typeDecl();
                    }
                    break;
                }
                }
                this.state = 124;
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
            this.state = 126;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 125;
                this.attribute();
                }
            }

            this.state = 128;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 130;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 15) !== 0)) {
                {
                this.state = 129;
                this.accessModifier();
                }
            }

            this.state = 132;
            this.match(StructuredTextParser.ID);
            this.state = 136;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 447) !== 0)) {
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
            this.state = 143;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 142;
                this.attribute();
                }
            }

            this.state = 145;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 147;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 15) !== 0)) {
                {
                this.state = 146;
                this.accessModifier();
                }
            }

            this.state = 149;
            this.match(StructuredTextParser.ID);
            this.state = 152;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 150;
                this.match(StructuredTextParser.T__0);
                this.state = 151;
                this.type_();
                }
            }

            this.state = 157;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 447) !== 0)) {
                {
                {
                this.state = 154;
                this.varDeclSection();
                }
                }
                this.state = 159;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 160;
            this.statementSection();
            this.state = 161;
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
            this.state = 164;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 163;
                this.attribute();
                }
            }

            this.state = 166;
            this.match(StructuredTextParser.METHOD);
            this.state = 168;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 15) !== 0)) {
                {
                this.state = 167;
                this.accessModifier();
                }
            }

            this.state = 173;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 7) !== 0)) {
                {
                {
                this.state = 170;
                this.modifier();
                }
                }
                this.state = 175;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 176;
            this.match(StructuredTextParser.ID);
            this.state = 179;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 177;
                this.match(StructuredTextParser.T__0);
                this.state = 178;
                this.type_();
                }
            }

            this.state = 184;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 447) !== 0)) {
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
            this.statementSection();
            this.state = 188;
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
            this.state = 191;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 190;
                this.attribute();
                }
            }

            this.state = 193;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 195;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 15) !== 0)) {
                {
                this.state = 194;
                this.accessModifier();
                }
            }

            this.state = 200;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 7) !== 0)) {
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
            this.state = 204;
            this.match(StructuredTextParser.T__0);
            this.state = 205;
            this.type_();
            this.state = 209;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 447) !== 0)) {
                {
                {
                this.state = 206;
                this.varDeclSection();
                }
                }
                this.state = 211;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 212;
            this.propertyBody();
            this.state = 213;
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
            this.state = 216;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 215;
                this.attribute();
                }
            }

            this.state = 218;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 220;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 15) !== 0)) {
                {
                this.state = 219;
                this.accessModifier();
                }
            }

            this.state = 225;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 7) !== 0)) {
                {
                {
                this.state = 222;
                this.modifier();
                }
                }
                this.state = 227;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 228;
            this.match(StructuredTextParser.ID);
            this.state = 230;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 55) {
                {
                this.state = 229;
                this.extendsClause();
                }
            }

            this.state = 233;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54) {
                {
                this.state = 232;
                this.implementsClause();
                }
            }

            this.state = 238;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 29294849) !== 0) || _la === 95) {
                {
                {
                this.state = 235;
                this.member();
                }
                }
                this.state = 240;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 241;
            this.statementSection();
            this.state = 242;
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
            this.state = 245;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 244;
                this.attribute();
                }
            }

            this.state = 247;
            this.match(StructuredTextParser.INTERFACE);
            this.state = 249;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 15) !== 0)) {
                {
                this.state = 248;
                this.accessModifier();
                }
            }

            this.state = 251;
            this.match(StructuredTextParser.ID);
            this.state = 253;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 55) {
                {
                this.state = 252;
                this.extendsClause();
                }
            }

            this.state = 258;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 29294849) !== 0) || _la === 95) {
                {
                {
                this.state = 255;
                this.member();
                }
                }
                this.state = 260;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 261;
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
            this.state = 264;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 263;
                this.attribute();
                }
            }

            this.state = 266;
            this.match(StructuredTextParser.VAR_GLOBAL);
            this.state = 268;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 15) !== 0)) {
                {
                this.state = 267;
                this.accessModifier();
                }
            }

            this.state = 273;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 7) !== 0)) {
                {
                {
                this.state = 270;
                this.modifier();
                }
                }
                this.state = 275;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 276;
            this.match(StructuredTextParser.ID);
            this.state = 278;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 277;
                this.varDecl();
                }
                }
                this.state = 280;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 44 || _la === 121);
            this.state = 282;
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
            this.state = 330;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 287;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 44) {
                    {
                    {
                    this.state = 284;
                    this.attribute();
                    }
                    }
                    this.state = 289;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 290;
                this.match(StructuredTextParser.TYPE);
                this.state = 292;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 15) !== 0)) {
                    {
                    this.state = 291;
                    this.accessModifier();
                    }
                }

                this.state = 294;
                this.match(StructuredTextParser.ID);
                this.state = 295;
                this.match(StructuredTextParser.T__0);
                this.state = 296;
                this.enumDecl();
                this.state = 297;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 302;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 44) {
                    {
                    {
                    this.state = 299;
                    this.attribute();
                    }
                    }
                    this.state = 304;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 305;
                this.match(StructuredTextParser.TYPE);
                this.state = 307;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 15) !== 0)) {
                    {
                    this.state = 306;
                    this.accessModifier();
                    }
                }

                this.state = 309;
                this.match(StructuredTextParser.ID);
                this.state = 310;
                this.match(StructuredTextParser.T__0);
                this.state = 311;
                this.structDecl();
                this.state = 312;
                this.match(StructuredTextParser.END_TYPE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 317;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 44) {
                    {
                    {
                    this.state = 314;
                    this.attribute();
                    }
                    }
                    this.state = 319;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 320;
                this.match(StructuredTextParser.TYPE);
                this.state = 322;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 15) !== 0)) {
                    {
                    this.state = 321;
                    this.accessModifier();
                    }
                }

                this.state = 324;
                this.match(StructuredTextParser.ID);
                this.state = 325;
                this.match(StructuredTextParser.T__0);
                this.state = 326;
                this.type_();
                this.state = 327;
                this.match(StructuredTextParser.T__1);
                this.state = 328;
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
            this.state = 332;
            this.match(StructuredTextParser.T__2);
            this.state = 333;
            this.enumMember();
            this.state = 338;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 334;
                this.match(StructuredTextParser.T__3);
                this.state = 335;
                this.enumMember();
                }
                }
                this.state = 340;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 341;
            this.match(StructuredTextParser.T__4);
            this.state = 343;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294965248) !== 0) || _la === 76 || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & 131) !== 0)) {
                {
                this.state = 342;
                this.type_();
                }
            }

            this.state = 347;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 345;
                this.match(StructuredTextParser.T__5);
                this.state = 346;
                this.initialValue();
                }
            }

            this.state = 349;
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
            this.state = 351;
            this.match(StructuredTextParser.ID);
            this.state = 354;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 352;
                this.match(StructuredTextParser.T__5);
                this.state = 353;
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
            this.state = 356;
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
            this.state = 358;
            this.match(StructuredTextParser.STRUCT);
            this.state = 362;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 44 || _la === 121) {
                {
                {
                this.state = 359;
                this.varDecl();
                }
                }
                this.state = 364;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 365;
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
            this.state = 367;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 368;
            this.type_();
            this.state = 373;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 369;
                this.match(StructuredTextParser.T__3);
                this.state = 370;
                this.type_();
                }
                }
                this.state = 375;
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
            this.state = 376;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 377;
            this.type_();
            this.state = 382;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 378;
                this.match(StructuredTextParser.T__3);
                this.state = 379;
                this.type_();
                }
                }
                this.state = 384;
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
            this.state = 388;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 385;
                this.method();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 386;
                this.property();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 387;
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
            this.state = 390;
            this.varSectionType();
            this.state = 394;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 7) !== 0)) {
                {
                {
                this.state = 391;
                this.modifier();
                }
                }
                this.state = 396;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 398;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 397;
                this.varDecl();
                }
                }
                this.state = 400;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 44 || _la === 121);
            this.state = 402;
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
            this.state = 404;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 447) !== 0))) {
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
            this.state = 407;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 406;
                this.attribute();
                }
            }

            this.state = 409;
            this.match(StructuredTextParser.ID);
            this.state = 410;
            this.match(StructuredTextParser.T__0);
            this.state = 411;
            this.type_();
            this.state = 414;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6 || _la === 7) {
                {
                this.state = 412;
                _la = this.tokenStream.LA(1);
                if(!(_la === 6 || _la === 7)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 413;
                this.exprOrArrayInit();
                }
            }

            this.state = 416;
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
            this.state = 420;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__2:
            case StructuredTextParser.BOOL:
            case StructuredTextParser.INTEGER_NUMBER:
            case StructuredTextParser.REAL_NUMBER:
            case StructuredTextParser.TIME_LITERAL:
            case StructuredTextParser.STRING_LITERAL:
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 418;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__7:
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
        this.enterRule(localContext, 40, StructuredTextParser.RULE_arrayInit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 422;
            this.match(StructuredTextParser.T__7);
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
            this.state = 446;
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
            case StructuredTextParser.T__29:
            case StructuredTextParser.T__30:
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 433;
                this.baseType();
                }
                break;
            case StructuredTextParser.ARRAY:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 434;
                this.match(StructuredTextParser.ARRAY);
                this.state = 435;
                this.match(StructuredTextParser.T__7);
                this.state = 436;
                this.match(StructuredTextParser.INTEGER_NUMBER);
                this.state = 437;
                this.match(StructuredTextParser.T__9);
                this.state = 438;
                this.match(StructuredTextParser.INTEGER_NUMBER);
                this.state = 439;
                this.match(StructuredTextParser.T__8);
                this.state = 440;
                this.match(StructuredTextParser.OF);
                this.state = 441;
                this.type_();
                }
                break;
            case StructuredTextParser.POINTER_TO:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 442;
                this.match(StructuredTextParser.POINTER_TO);
                this.state = 443;
                this.type_();
                }
                break;
            case StructuredTextParser.REFERENCE_TO:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 444;
                this.match(StructuredTextParser.REFERENCE_TO);
                this.state = 445;
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
            this.state = 450;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 448;
                this.match(StructuredTextParser.ID);
                }
                break;
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
            case StructuredTextParser.T__29:
            case StructuredTextParser.T__30:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 449;
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
            this.state = 452;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294965248) !== 0))) {
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
            this.state = 457;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 454;
                    this.statement();
                    }
                    }
                }
                this.state = 459;
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
            this.state = 471;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 460;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 461;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 462;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 463;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 464;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 465;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 466;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 467;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 468;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 469;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 470;
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
            this.state = 473;
            this.memberExpression();
            this.state = 474;
            this.assignmentOperator();
            this.state = 475;
            this.expr(0);
            this.state = 476;
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
            this.state = 478;
            _la = this.tokenStream.LA(1);
            if(!(_la === 6 || _la === 7)) {
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
    public callStatement(): CallStatementContext {
        let localContext = new CallStatementContext(this.context, this.state);
        this.enterRule(localContext, 56, StructuredTextParser.RULE_callStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 480;
            this.memberExpression();
            this.state = 481;
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
        this.enterRule(localContext, 58, StructuredTextParser.RULE_argumentList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 483;
            this.argument();
            this.state = 488;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 484;
                this.match(StructuredTextParser.T__3);
                this.state = 485;
                this.argument();
                }
                }
                this.state = 490;
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
            this.state = 495;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 58, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 491;
                this.match(StructuredTextParser.ID);
                this.state = 492;
                _la = this.tokenStream.LA(1);
                if(!(_la === 6 || _la === 32)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 493;
                this.expr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 494;
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
            this.state = 497;
            this.match(StructuredTextParser.IF);
            this.state = 498;
            this.expr(0);
            this.state = 499;
            this.match(StructuredTextParser.THEN);
            this.state = 500;
            this.statementSection();
            this.state = 508;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 72) {
                {
                {
                this.state = 501;
                this.match(StructuredTextParser.ELSIF);
                this.state = 502;
                this.expr(0);
                this.state = 503;
                this.match(StructuredTextParser.THEN);
                this.state = 504;
                this.statementSection();
                }
                }
                this.state = 510;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 513;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 73) {
                {
                this.state = 511;
                this.match(StructuredTextParser.ELSE);
                this.state = 512;
                this.statementSection();
                }
            }

            this.state = 515;
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
            this.state = 517;
            this.match(StructuredTextParser.CASE);
            this.state = 518;
            this.expr(0);
            this.state = 519;
            this.match(StructuredTextParser.OF);
            this.state = 521;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 520;
                this.caseElement();
                }
                }
                this.state = 523;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 51) !== 0));
            this.state = 527;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 73) {
                {
                this.state = 525;
                this.match(StructuredTextParser.ELSE);
                this.state = 526;
                this.statementSection();
                }
            }

            this.state = 529;
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
            this.state = 531;
            this.caseValue();
            this.state = 536;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 532;
                this.match(StructuredTextParser.T__3);
                this.state = 533;
                this.caseValue();
                }
                }
                this.state = 538;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 539;
            this.match(StructuredTextParser.T__0);
            this.state = 540;
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
            this.state = 542;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 51) !== 0))) {
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
            this.state = 544;
            this.match(StructuredTextParser.WHILE);
            this.state = 545;
            this.expr(0);
            this.state = 546;
            this.match(StructuredTextParser.DO);
            this.state = 547;
            this.statementSection();
            this.state = 548;
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
            this.state = 550;
            this.match(StructuredTextParser.REPEAT);
            this.state = 551;
            this.statementSection();
            this.state = 552;
            this.match(StructuredTextParser.UNTIL);
            this.state = 553;
            this.expr(0);
            this.state = 554;
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
            this.state = 556;
            this.match(StructuredTextParser.FOR);
            this.state = 557;
            this.match(StructuredTextParser.ID);
            this.state = 558;
            this.match(StructuredTextParser.T__5);
            this.state = 559;
            this.expr(0);
            this.state = 560;
            this.match(StructuredTextParser.TO);
            this.state = 561;
            this.expr(0);
            this.state = 564;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 87) {
                {
                this.state = 562;
                this.match(StructuredTextParser.BY);
                this.state = 563;
                this.expr(0);
                }
            }

            this.state = 566;
            this.match(StructuredTextParser.DO);
            this.state = 567;
            this.statementSection();
            this.state = 568;
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
            this.state = 570;
            this.match(StructuredTextParser.RETURN);
            this.state = 571;
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
        this.enterRule(localContext, 78, StructuredTextParser.RULE_exitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 573;
            this.match(StructuredTextParser.EXIT);
            this.state = 574;
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
        this.enterRule(localContext, 80, StructuredTextParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 576;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 577;
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
    public memberExpression(): MemberExpressionContext {
        let localContext = new MemberExpressionContext(this.context, this.state);
        this.enterRule(localContext, 82, StructuredTextParser.RULE_memberExpression);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 579;
            this.memberAccess();
            this.state = 584;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 65, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 580;
                    this.match(StructuredTextParser.T__32);
                    this.state = 581;
                    this.memberAccess();
                    }
                    }
                }
                this.state = 586;
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
            this.exitRule();
        }
        return localContext;
    }
    public memberAccess(): MemberAccessContext {
        let localContext = new MemberAccessContext(this.context, this.state);
        this.enterRule(localContext, 84, StructuredTextParser.RULE_memberAccess);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 587;
            this.match(StructuredTextParser.ID);
            this.state = 591;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 66, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 588;
                    this.postfixOp();
                    }
                    }
                }
                this.state = 593;
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
            this.exitRule();
        }
        return localContext;
    }
    public postfixOp(): PostfixOpContext {
        let localContext = new PostfixOpContext(this.context, this.state);
        this.enterRule(localContext, 86, StructuredTextParser.RULE_postfixOp);
        try {
            this.state = 597;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.CARET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 594;
                this.dereference();
                }
                break;
            case StructuredTextParser.T__7:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 595;
                this.arrayIndex();
                }
                break;
            case StructuredTextParser.T__2:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 596;
                this.call();
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
    public dereference(): DereferenceContext {
        let localContext = new DereferenceContext(this.context, this.state);
        this.enterRule(localContext, 88, StructuredTextParser.RULE_dereference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 599;
            this.match(StructuredTextParser.CARET);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 90, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 601;
            this.match(StructuredTextParser.T__7);
            this.state = 602;
            this.expr(0);
            this.state = 603;
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
    public call(): CallContext {
        let localContext = new CallContext(this.context, this.state);
        this.enterRule(localContext, 92, StructuredTextParser.RULE_call);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 605;
            this.match(StructuredTextParser.T__2);
            this.state = 607;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3 || ((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 63) !== 0)) {
                {
                this.state = 606;
                this.argumentList();
                }
            }

            this.state = 609;
            this.match(StructuredTextParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 94, StructuredTextParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 611;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & 31) !== 0))) {
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
        let _startState = 96;
        this.enterRecursionRule(localContext, 96, StructuredTextParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 620;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.ID:
                {
                this.state = 614;
                this.memberExpression();
                }
                break;
            case StructuredTextParser.BOOL:
            case StructuredTextParser.INTEGER_NUMBER:
            case StructuredTextParser.REAL_NUMBER:
            case StructuredTextParser.TIME_LITERAL:
            case StructuredTextParser.STRING_LITERAL:
                {
                this.state = 615;
                this.literal();
                }
                break;
            case StructuredTextParser.T__2:
                {
                this.state = 616;
                this.match(StructuredTextParser.T__2);
                this.state = 617;
                this.expr(0);
                this.state = 618;
                this.match(StructuredTextParser.T__4);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 636;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 71, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 634;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 622;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 623;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 34 || _la === 35 || _la === 110)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 624;
                        this.expr(8);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 625;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 626;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 36 || _la === 37)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 627;
                        this.expr(7);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 628;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 629;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 63) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 630;
                        this.expr(6);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 631;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 632;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 633;
                        this.expr(5);
                        }
                        break;
                    }
                    }
                }
                this.state = 638;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 71, this.context);
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
        this.enterRule(localContext, 98, StructuredTextParser.RULE_propertyBody);
        try {
            this.state = 647;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 639;
                this.getter();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 640;
                this.setter();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 641;
                this.getter();
                this.state = 642;
                this.setter();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 644;
                this.setter();
                this.state = 645;
                this.getter();
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
    public getter(): GetterContext {
        let localContext = new GetterContext(this.context, this.state);
        this.enterRule(localContext, 100, StructuredTextParser.RULE_getter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 649;
            this.match(StructuredTextParser.GET);
            this.state = 651;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 15) !== 0)) {
                {
                this.state = 650;
                this.accessModifier();
                }
            }

            this.state = 653;
            this.statementSection();
            this.state = 654;
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
        this.enterRule(localContext, 102, StructuredTextParser.RULE_setter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 656;
            this.match(StructuredTextParser.SET);
            this.state = 658;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 15) !== 0)) {
                {
                this.state = 657;
                this.accessModifier();
                }
            }

            this.state = 660;
            this.statementSection();
            this.state = 661;
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
        this.enterRule(localContext, 104, StructuredTextParser.RULE_attribute);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 663;
            this.match(StructuredTextParser.T__43);
            this.state = 664;
            this.match(StructuredTextParser.ID);
            this.state = 666;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 665;
                this.attributeArgList();
                }
            }

            this.state = 668;
            this.match(StructuredTextParser.T__44);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 106, StructuredTextParser.RULE_attributeArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 670;
            this.match(StructuredTextParser.T__2);
            this.state = 671;
            this.attributeArg();
            this.state = 676;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 4) {
                {
                {
                this.state = 672;
                this.match(StructuredTextParser.T__3);
                this.state = 673;
                this.attributeArg();
                }
                }
                this.state = 678;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 679;
            this.match(StructuredTextParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
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
        this.enterRule(localContext, 108, StructuredTextParser.RULE_attributeArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 681;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 27) !== 0))) {
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
        this.enterRule(localContext, 110, StructuredTextParser.RULE_accessModifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 683;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 15) !== 0))) {
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
        this.enterRule(localContext, 112, StructuredTextParser.RULE_modifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 685;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 7) !== 0))) {
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
        case 48:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 7);
        case 1:
            return this.precpred(this.context, 6);
        case 2:
            return this.precpred(this.context, 5);
        case 3:
            return this.precpred(this.context, 4);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,124,688,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,1,0,1,0,1,0,1,0,1,0,1,
        0,5,0,121,8,0,10,0,12,0,124,9,0,1,1,3,1,127,8,1,1,1,1,1,3,1,131,
        8,1,1,1,1,1,5,1,135,8,1,10,1,12,1,138,9,1,1,1,1,1,1,1,1,2,3,2,144,
        8,2,1,2,1,2,3,2,148,8,2,1,2,1,2,1,2,3,2,153,8,2,1,2,5,2,156,8,2,
        10,2,12,2,159,9,2,1,2,1,2,1,2,1,3,3,3,165,8,3,1,3,1,3,3,3,169,8,
        3,1,3,5,3,172,8,3,10,3,12,3,175,9,3,1,3,1,3,1,3,3,3,180,8,3,1,3,
        5,3,183,8,3,10,3,12,3,186,9,3,1,3,1,3,1,3,1,4,3,4,192,8,4,1,4,1,
        4,3,4,196,8,4,1,4,5,4,199,8,4,10,4,12,4,202,9,4,1,4,1,4,1,4,1,4,
        5,4,208,8,4,10,4,12,4,211,9,4,1,4,1,4,1,4,1,5,3,5,217,8,5,1,5,1,
        5,3,5,221,8,5,1,5,5,5,224,8,5,10,5,12,5,227,9,5,1,5,1,5,3,5,231,
        8,5,1,5,3,5,234,8,5,1,5,5,5,237,8,5,10,5,12,5,240,9,5,1,5,1,5,1,
        5,1,6,3,6,246,8,6,1,6,1,6,3,6,250,8,6,1,6,1,6,3,6,254,8,6,1,6,5,
        6,257,8,6,10,6,12,6,260,9,6,1,6,1,6,1,7,3,7,265,8,7,1,7,1,7,3,7,
        269,8,7,1,7,5,7,272,8,7,10,7,12,7,275,9,7,1,7,1,7,4,7,279,8,7,11,
        7,12,7,280,1,7,1,7,1,8,5,8,286,8,8,10,8,12,8,289,9,8,1,8,1,8,3,8,
        293,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,301,8,8,10,8,12,8,304,9,8,1,
        8,1,8,3,8,308,8,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,316,8,8,10,8,12,8,
        319,9,8,1,8,1,8,3,8,323,8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,331,8,8,
        1,9,1,9,1,9,1,9,5,9,337,8,9,10,9,12,9,340,9,9,1,9,1,9,3,9,344,8,
        9,1,9,1,9,3,9,348,8,9,1,9,1,9,1,10,1,10,1,10,3,10,355,8,10,1,11,
        1,11,1,12,1,12,5,12,361,8,12,10,12,12,12,364,9,12,1,12,1,12,1,13,
        1,13,1,13,1,13,5,13,372,8,13,10,13,12,13,375,9,13,1,14,1,14,1,14,
        1,14,5,14,381,8,14,10,14,12,14,384,9,14,1,15,1,15,1,15,3,15,389,
        8,15,1,16,1,16,5,16,393,8,16,10,16,12,16,396,9,16,1,16,4,16,399,
        8,16,11,16,12,16,400,1,16,1,16,1,17,1,17,1,18,3,18,408,8,18,1,18,
        1,18,1,18,1,18,1,18,3,18,415,8,18,1,18,1,18,1,19,1,19,3,19,421,8,
        19,1,20,1,20,1,20,1,20,5,20,427,8,20,10,20,12,20,430,9,20,1,20,1,
        20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,
        21,3,21,447,8,21,1,22,1,22,3,22,451,8,22,1,23,1,23,1,24,5,24,456,
        8,24,10,24,12,24,459,9,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
        1,25,1,25,1,25,3,25,472,8,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,
        1,28,1,28,1,28,1,29,1,29,1,29,5,29,487,8,29,10,29,12,29,490,9,29,
        1,30,1,30,1,30,1,30,3,30,496,8,30,1,31,1,31,1,31,1,31,1,31,1,31,
        1,31,1,31,1,31,5,31,507,8,31,10,31,12,31,510,9,31,1,31,1,31,3,31,
        514,8,31,1,31,1,31,1,32,1,32,1,32,1,32,4,32,522,8,32,11,32,12,32,
        523,1,32,1,32,3,32,528,8,32,1,32,1,32,1,33,1,33,1,33,5,33,535,8,
        33,10,33,12,33,538,9,33,1,33,1,33,1,33,1,34,1,34,1,35,1,35,1,35,
        1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,
        1,37,1,37,1,37,1,37,3,37,565,8,37,1,37,1,37,1,37,1,37,1,38,1,38,
        1,38,1,39,1,39,1,39,1,40,1,40,1,40,1,41,1,41,1,41,5,41,583,8,41,
        10,41,12,41,586,9,41,1,42,1,42,5,42,590,8,42,10,42,12,42,593,9,42,
        1,43,1,43,1,43,3,43,598,8,43,1,44,1,44,1,45,1,45,1,45,1,45,1,46,
        1,46,3,46,608,8,46,1,46,1,46,1,47,1,47,1,48,1,48,1,48,1,48,1,48,
        1,48,1,48,3,48,621,8,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
        1,48,1,48,1,48,1,48,5,48,635,8,48,10,48,12,48,638,9,48,1,49,1,49,
        1,49,1,49,1,49,1,49,1,49,1,49,3,49,648,8,49,1,50,1,50,3,50,652,8,
        50,1,50,1,50,1,50,1,51,1,51,3,51,659,8,51,1,51,1,51,1,51,1,52,1,
        52,1,52,3,52,667,8,52,1,52,1,52,1,53,1,53,1,53,1,53,5,53,675,8,53,
        10,53,12,53,678,9,53,1,53,1,53,1,54,1,54,1,55,1,55,1,56,1,56,1,56,
        0,1,96,57,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
        40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,
        84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,0,13,2,0,60,
        65,67,68,1,0,6,7,1,0,11,31,2,0,6,6,32,32,2,0,116,117,120,121,1,0,
        116,120,2,0,34,35,110,110,1,0,36,37,1,0,38,43,1,0,92,94,2,0,117,
        118,120,121,1,0,106,109,1,0,103,105,730,0,122,1,0,0,0,2,126,1,0,
        0,0,4,143,1,0,0,0,6,164,1,0,0,0,8,191,1,0,0,0,10,216,1,0,0,0,12,
        245,1,0,0,0,14,264,1,0,0,0,16,330,1,0,0,0,18,332,1,0,0,0,20,351,
        1,0,0,0,22,356,1,0,0,0,24,358,1,0,0,0,26,367,1,0,0,0,28,376,1,0,
        0,0,30,388,1,0,0,0,32,390,1,0,0,0,34,404,1,0,0,0,36,407,1,0,0,0,
        38,420,1,0,0,0,40,422,1,0,0,0,42,446,1,0,0,0,44,450,1,0,0,0,46,452,
        1,0,0,0,48,457,1,0,0,0,50,471,1,0,0,0,52,473,1,0,0,0,54,478,1,0,
        0,0,56,480,1,0,0,0,58,483,1,0,0,0,60,495,1,0,0,0,62,497,1,0,0,0,
        64,517,1,0,0,0,66,531,1,0,0,0,68,542,1,0,0,0,70,544,1,0,0,0,72,550,
        1,0,0,0,74,556,1,0,0,0,76,570,1,0,0,0,78,573,1,0,0,0,80,576,1,0,
        0,0,82,579,1,0,0,0,84,587,1,0,0,0,86,597,1,0,0,0,88,599,1,0,0,0,
        90,601,1,0,0,0,92,605,1,0,0,0,94,611,1,0,0,0,96,620,1,0,0,0,98,647,
        1,0,0,0,100,649,1,0,0,0,102,656,1,0,0,0,104,663,1,0,0,0,106,670,
        1,0,0,0,108,681,1,0,0,0,110,683,1,0,0,0,112,685,1,0,0,0,114,121,
        3,2,1,0,115,121,3,10,5,0,116,121,3,4,2,0,117,121,3,12,6,0,118,121,
        3,14,7,0,119,121,3,16,8,0,120,114,1,0,0,0,120,115,1,0,0,0,120,116,
        1,0,0,0,120,117,1,0,0,0,120,118,1,0,0,0,120,119,1,0,0,0,121,124,
        1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,1,1,0,0,0,124,122,1,
        0,0,0,125,127,3,104,52,0,126,125,1,0,0,0,126,127,1,0,0,0,127,128,
        1,0,0,0,128,130,5,46,0,0,129,131,3,110,55,0,130,129,1,0,0,0,130,
        131,1,0,0,0,131,132,1,0,0,0,132,136,5,121,0,0,133,135,3,32,16,0,
        134,133,1,0,0,0,135,138,1,0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,
        137,139,1,0,0,0,138,136,1,0,0,0,139,140,3,48,24,0,140,141,5,47,0,
        0,141,3,1,0,0,0,142,144,3,104,52,0,143,142,1,0,0,0,143,144,1,0,0,
        0,144,145,1,0,0,0,145,147,5,50,0,0,146,148,3,110,55,0,147,146,1,
        0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,152,5,121,0,0,150,151,
        5,1,0,0,151,153,3,42,21,0,152,150,1,0,0,0,152,153,1,0,0,0,153,157,
        1,0,0,0,154,156,3,32,16,0,155,154,1,0,0,0,156,159,1,0,0,0,157,155,
        1,0,0,0,157,158,1,0,0,0,158,160,1,0,0,0,159,157,1,0,0,0,160,161,
        3,48,24,0,161,162,5,51,0,0,162,5,1,0,0,0,163,165,3,104,52,0,164,
        163,1,0,0,0,164,165,1,0,0,0,165,166,1,0,0,0,166,168,5,95,0,0,167,
        169,3,110,55,0,168,167,1,0,0,0,168,169,1,0,0,0,169,173,1,0,0,0,170,
        172,3,112,56,0,171,170,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,
        174,1,0,0,0,174,176,1,0,0,0,175,173,1,0,0,0,176,179,5,121,0,0,177,
        178,5,1,0,0,178,180,3,42,21,0,179,177,1,0,0,0,179,180,1,0,0,0,180,
        184,1,0,0,0,181,183,3,32,16,0,182,181,1,0,0,0,183,186,1,0,0,0,184,
        182,1,0,0,0,184,185,1,0,0,0,185,187,1,0,0,0,186,184,1,0,0,0,187,
        188,3,48,24,0,188,189,5,96,0,0,189,7,1,0,0,0,190,192,3,104,52,0,
        191,190,1,0,0,0,191,192,1,0,0,0,192,193,1,0,0,0,193,195,5,52,0,0,
        194,196,3,110,55,0,195,194,1,0,0,0,195,196,1,0,0,0,196,200,1,0,0,
        0,197,199,3,112,56,0,198,197,1,0,0,0,199,202,1,0,0,0,200,198,1,0,
        0,0,200,201,1,0,0,0,201,203,1,0,0,0,202,200,1,0,0,0,203,204,5,121,
        0,0,204,205,5,1,0,0,205,209,3,42,21,0,206,208,3,32,16,0,207,206,
        1,0,0,0,208,211,1,0,0,0,209,207,1,0,0,0,209,210,1,0,0,0,210,212,
        1,0,0,0,211,209,1,0,0,0,212,213,3,98,49,0,213,214,5,53,0,0,214,9,
        1,0,0,0,215,217,3,104,52,0,216,215,1,0,0,0,216,217,1,0,0,0,217,218,
        1,0,0,0,218,220,5,48,0,0,219,221,3,110,55,0,220,219,1,0,0,0,220,
        221,1,0,0,0,221,225,1,0,0,0,222,224,3,112,56,0,223,222,1,0,0,0,224,
        227,1,0,0,0,225,223,1,0,0,0,225,226,1,0,0,0,226,228,1,0,0,0,227,
        225,1,0,0,0,228,230,5,121,0,0,229,231,3,28,14,0,230,229,1,0,0,0,
        230,231,1,0,0,0,231,233,1,0,0,0,232,234,3,26,13,0,233,232,1,0,0,
        0,233,234,1,0,0,0,234,238,1,0,0,0,235,237,3,30,15,0,236,235,1,0,
        0,0,237,240,1,0,0,0,238,236,1,0,0,0,238,239,1,0,0,0,239,241,1,0,
        0,0,240,238,1,0,0,0,241,242,3,48,24,0,242,243,5,49,0,0,243,11,1,
        0,0,0,244,246,3,104,52,0,245,244,1,0,0,0,245,246,1,0,0,0,246,247,
        1,0,0,0,247,249,5,97,0,0,248,250,3,110,55,0,249,248,1,0,0,0,249,
        250,1,0,0,0,250,251,1,0,0,0,251,253,5,121,0,0,252,254,3,28,14,0,
        253,252,1,0,0,0,253,254,1,0,0,0,254,258,1,0,0,0,255,257,3,30,15,
        0,256,255,1,0,0,0,257,260,1,0,0,0,258,256,1,0,0,0,258,259,1,0,0,
        0,259,261,1,0,0,0,260,258,1,0,0,0,261,262,5,98,0,0,262,13,1,0,0,
        0,263,265,3,104,52,0,264,263,1,0,0,0,264,265,1,0,0,0,265,266,1,0,
        0,0,266,268,5,66,0,0,267,269,3,110,55,0,268,267,1,0,0,0,268,269,
        1,0,0,0,269,273,1,0,0,0,270,272,3,112,56,0,271,270,1,0,0,0,272,275,
        1,0,0,0,273,271,1,0,0,0,273,274,1,0,0,0,274,276,1,0,0,0,275,273,
        1,0,0,0,276,278,5,121,0,0,277,279,3,36,18,0,278,277,1,0,0,0,279,
        280,1,0,0,0,280,278,1,0,0,0,280,281,1,0,0,0,281,282,1,0,0,0,282,
        283,5,69,0,0,283,15,1,0,0,0,284,286,3,104,52,0,285,284,1,0,0,0,286,
        289,1,0,0,0,287,285,1,0,0,0,287,288,1,0,0,0,288,290,1,0,0,0,289,
        287,1,0,0,0,290,292,5,111,0,0,291,293,3,110,55,0,292,291,1,0,0,0,
        292,293,1,0,0,0,293,294,1,0,0,0,294,295,5,121,0,0,295,296,5,1,0,
        0,296,297,3,18,9,0,297,298,5,112,0,0,298,331,1,0,0,0,299,301,3,104,
        52,0,300,299,1,0,0,0,301,304,1,0,0,0,302,300,1,0,0,0,302,303,1,0,
        0,0,303,305,1,0,0,0,304,302,1,0,0,0,305,307,5,111,0,0,306,308,3,
        110,55,0,307,306,1,0,0,0,307,308,1,0,0,0,308,309,1,0,0,0,309,310,
        5,121,0,0,310,311,5,1,0,0,311,312,3,24,12,0,312,313,5,112,0,0,313,
        331,1,0,0,0,314,316,3,104,52,0,315,314,1,0,0,0,316,319,1,0,0,0,317,
        315,1,0,0,0,317,318,1,0,0,0,318,320,1,0,0,0,319,317,1,0,0,0,320,
        322,5,111,0,0,321,323,3,110,55,0,322,321,1,0,0,0,322,323,1,0,0,0,
        323,324,1,0,0,0,324,325,5,121,0,0,325,326,5,1,0,0,326,327,3,42,21,
        0,327,328,5,2,0,0,328,329,5,112,0,0,329,331,1,0,0,0,330,287,1,0,
        0,0,330,302,1,0,0,0,330,317,1,0,0,0,331,17,1,0,0,0,332,333,5,3,0,
        0,333,338,3,20,10,0,334,335,5,4,0,0,335,337,3,20,10,0,336,334,1,
        0,0,0,337,340,1,0,0,0,338,336,1,0,0,0,338,339,1,0,0,0,339,341,1,
        0,0,0,340,338,1,0,0,0,341,343,5,5,0,0,342,344,3,42,21,0,343,342,
        1,0,0,0,343,344,1,0,0,0,344,347,1,0,0,0,345,346,5,6,0,0,346,348,
        3,22,11,0,347,345,1,0,0,0,347,348,1,0,0,0,348,349,1,0,0,0,349,350,
        5,2,0,0,350,19,1,0,0,0,351,354,5,121,0,0,352,353,5,6,0,0,353,355,
        3,96,48,0,354,352,1,0,0,0,354,355,1,0,0,0,355,21,1,0,0,0,356,357,
        5,121,0,0,357,23,1,0,0,0,358,362,5,99,0,0,359,361,3,36,18,0,360,
        359,1,0,0,0,361,364,1,0,0,0,362,360,1,0,0,0,362,363,1,0,0,0,363,
        365,1,0,0,0,364,362,1,0,0,0,365,366,5,100,0,0,366,25,1,0,0,0,367,
        368,5,54,0,0,368,373,3,42,21,0,369,370,5,4,0,0,370,372,3,42,21,0,
        371,369,1,0,0,0,372,375,1,0,0,0,373,371,1,0,0,0,373,374,1,0,0,0,
        374,27,1,0,0,0,375,373,1,0,0,0,376,377,5,55,0,0,377,382,3,42,21,
        0,378,379,5,4,0,0,379,381,3,42,21,0,380,378,1,0,0,0,381,384,1,0,
        0,0,382,380,1,0,0,0,382,383,1,0,0,0,383,29,1,0,0,0,384,382,1,0,0,
        0,385,389,3,6,3,0,386,389,3,8,4,0,387,389,3,32,16,0,388,385,1,0,
        0,0,388,386,1,0,0,0,388,387,1,0,0,0,389,31,1,0,0,0,390,394,3,34,
        17,0,391,393,3,112,56,0,392,391,1,0,0,0,393,396,1,0,0,0,394,392,
        1,0,0,0,394,395,1,0,0,0,395,398,1,0,0,0,396,394,1,0,0,0,397,399,
        3,36,18,0,398,397,1,0,0,0,399,400,1,0,0,0,400,398,1,0,0,0,400,401,
        1,0,0,0,401,402,1,0,0,0,402,403,5,69,0,0,403,33,1,0,0,0,404,405,
        7,0,0,0,405,35,1,0,0,0,406,408,3,104,52,0,407,406,1,0,0,0,407,408,
        1,0,0,0,408,409,1,0,0,0,409,410,5,121,0,0,410,411,5,1,0,0,411,414,
        3,42,21,0,412,413,7,1,0,0,413,415,3,38,19,0,414,412,1,0,0,0,414,
        415,1,0,0,0,415,416,1,0,0,0,416,417,5,2,0,0,417,37,1,0,0,0,418,421,
        3,96,48,0,419,421,3,40,20,0,420,418,1,0,0,0,420,419,1,0,0,0,421,
        39,1,0,0,0,422,423,5,8,0,0,423,428,3,96,48,0,424,425,5,4,0,0,425,
        427,3,96,48,0,426,424,1,0,0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,
        429,1,0,0,0,429,431,1,0,0,0,430,428,1,0,0,0,431,432,5,9,0,0,432,
        41,1,0,0,0,433,447,3,44,22,0,434,435,5,76,0,0,435,436,5,8,0,0,436,
        437,5,117,0,0,437,438,5,10,0,0,438,439,5,117,0,0,439,440,5,9,0,0,
        440,441,5,77,0,0,441,447,3,42,21,0,442,443,5,115,0,0,443,447,3,42,
        21,0,444,445,5,114,0,0,445,447,3,42,21,0,446,433,1,0,0,0,446,434,
        1,0,0,0,446,442,1,0,0,0,446,444,1,0,0,0,447,43,1,0,0,0,448,451,5,
        121,0,0,449,451,3,46,23,0,450,448,1,0,0,0,450,449,1,0,0,0,451,45,
        1,0,0,0,452,453,7,2,0,0,453,47,1,0,0,0,454,456,3,50,25,0,455,454,
        1,0,0,0,456,459,1,0,0,0,457,455,1,0,0,0,457,458,1,0,0,0,458,49,1,
        0,0,0,459,457,1,0,0,0,460,472,3,52,26,0,461,472,3,62,31,0,462,472,
        3,64,32,0,463,472,3,70,35,0,464,472,3,72,36,0,465,472,3,74,37,0,
        466,472,3,56,28,0,467,472,3,76,38,0,468,472,3,78,39,0,469,472,3,
        80,40,0,470,472,5,2,0,0,471,460,1,0,0,0,471,461,1,0,0,0,471,462,
        1,0,0,0,471,463,1,0,0,0,471,464,1,0,0,0,471,465,1,0,0,0,471,466,
        1,0,0,0,471,467,1,0,0,0,471,468,1,0,0,0,471,469,1,0,0,0,471,470,
        1,0,0,0,472,51,1,0,0,0,473,474,3,82,41,0,474,475,3,54,27,0,475,476,
        3,96,48,0,476,477,5,2,0,0,477,53,1,0,0,0,478,479,7,1,0,0,479,55,
        1,0,0,0,480,481,3,82,41,0,481,482,5,2,0,0,482,57,1,0,0,0,483,488,
        3,60,30,0,484,485,5,4,0,0,485,487,3,60,30,0,486,484,1,0,0,0,487,
        490,1,0,0,0,488,486,1,0,0,0,488,489,1,0,0,0,489,59,1,0,0,0,490,488,
        1,0,0,0,491,492,5,121,0,0,492,493,7,3,0,0,493,496,3,96,48,0,494,
        496,3,96,48,0,495,491,1,0,0,0,495,494,1,0,0,0,496,61,1,0,0,0,497,
        498,5,70,0,0,498,499,3,96,48,0,499,500,5,71,0,0,500,508,3,48,24,
        0,501,502,5,72,0,0,502,503,3,96,48,0,503,504,5,71,0,0,504,505,3,
        48,24,0,505,507,1,0,0,0,506,501,1,0,0,0,507,510,1,0,0,0,508,506,
        1,0,0,0,508,509,1,0,0,0,509,513,1,0,0,0,510,508,1,0,0,0,511,512,
        5,73,0,0,512,514,3,48,24,0,513,511,1,0,0,0,513,514,1,0,0,0,514,515,
        1,0,0,0,515,516,5,74,0,0,516,63,1,0,0,0,517,518,5,75,0,0,518,519,
        3,96,48,0,519,521,5,77,0,0,520,522,3,66,33,0,521,520,1,0,0,0,522,
        523,1,0,0,0,523,521,1,0,0,0,523,524,1,0,0,0,524,527,1,0,0,0,525,
        526,5,73,0,0,526,528,3,48,24,0,527,525,1,0,0,0,527,528,1,0,0,0,528,
        529,1,0,0,0,529,530,5,78,0,0,530,65,1,0,0,0,531,536,3,68,34,0,532,
        533,5,4,0,0,533,535,3,68,34,0,534,532,1,0,0,0,535,538,1,0,0,0,536,
        534,1,0,0,0,536,537,1,0,0,0,537,539,1,0,0,0,538,536,1,0,0,0,539,
        540,5,1,0,0,540,541,3,48,24,0,541,67,1,0,0,0,542,543,7,4,0,0,543,
        69,1,0,0,0,544,545,5,79,0,0,545,546,3,96,48,0,546,547,5,80,0,0,547,
        548,3,48,24,0,548,549,5,81,0,0,549,71,1,0,0,0,550,551,5,82,0,0,551,
        552,3,48,24,0,552,553,5,83,0,0,553,554,3,96,48,0,554,555,5,84,0,
        0,555,73,1,0,0,0,556,557,5,85,0,0,557,558,5,121,0,0,558,559,5,6,
        0,0,559,560,3,96,48,0,560,561,5,86,0,0,561,564,3,96,48,0,562,563,
        5,87,0,0,563,565,3,96,48,0,564,562,1,0,0,0,564,565,1,0,0,0,565,566,
        1,0,0,0,566,567,5,80,0,0,567,568,3,48,24,0,568,569,5,88,0,0,569,
        75,1,0,0,0,570,571,5,89,0,0,571,572,5,2,0,0,572,77,1,0,0,0,573,574,
        5,90,0,0,574,575,5,2,0,0,575,79,1,0,0,0,576,577,5,91,0,0,577,578,
        5,2,0,0,578,81,1,0,0,0,579,584,3,84,42,0,580,581,5,33,0,0,581,583,
        3,84,42,0,582,580,1,0,0,0,583,586,1,0,0,0,584,582,1,0,0,0,584,585,
        1,0,0,0,585,83,1,0,0,0,586,584,1,0,0,0,587,591,5,121,0,0,588,590,
        3,86,43,0,589,588,1,0,0,0,590,593,1,0,0,0,591,589,1,0,0,0,591,592,
        1,0,0,0,592,85,1,0,0,0,593,591,1,0,0,0,594,598,3,88,44,0,595,598,
        3,90,45,0,596,598,3,92,46,0,597,594,1,0,0,0,597,595,1,0,0,0,597,
        596,1,0,0,0,598,87,1,0,0,0,599,600,5,113,0,0,600,89,1,0,0,0,601,
        602,5,8,0,0,602,603,3,96,48,0,603,604,5,9,0,0,604,91,1,0,0,0,605,
        607,5,3,0,0,606,608,3,58,29,0,607,606,1,0,0,0,607,608,1,0,0,0,608,
        609,1,0,0,0,609,610,5,5,0,0,610,93,1,0,0,0,611,612,7,5,0,0,612,95,
        1,0,0,0,613,614,6,48,-1,0,614,621,3,82,41,0,615,621,3,94,47,0,616,
        617,5,3,0,0,617,618,3,96,48,0,618,619,5,5,0,0,619,621,1,0,0,0,620,
        613,1,0,0,0,620,615,1,0,0,0,620,616,1,0,0,0,621,636,1,0,0,0,622,
        623,10,7,0,0,623,624,7,6,0,0,624,635,3,96,48,8,625,626,10,6,0,0,
        626,627,7,7,0,0,627,635,3,96,48,7,628,629,10,5,0,0,629,630,7,8,0,
        0,630,635,3,96,48,6,631,632,10,4,0,0,632,633,7,9,0,0,633,635,3,96,
        48,5,634,622,1,0,0,0,634,625,1,0,0,0,634,628,1,0,0,0,634,631,1,0,
        0,0,635,638,1,0,0,0,636,634,1,0,0,0,636,637,1,0,0,0,637,97,1,0,0,
        0,638,636,1,0,0,0,639,648,3,100,50,0,640,648,3,102,51,0,641,642,
        3,100,50,0,642,643,3,102,51,0,643,648,1,0,0,0,644,645,3,102,51,0,
        645,646,3,100,50,0,646,648,1,0,0,0,647,639,1,0,0,0,647,640,1,0,0,
        0,647,641,1,0,0,0,647,644,1,0,0,0,648,99,1,0,0,0,649,651,5,56,0,
        0,650,652,3,110,55,0,651,650,1,0,0,0,651,652,1,0,0,0,652,653,1,0,
        0,0,653,654,3,48,24,0,654,655,5,57,0,0,655,101,1,0,0,0,656,658,5,
        58,0,0,657,659,3,110,55,0,658,657,1,0,0,0,658,659,1,0,0,0,659,660,
        1,0,0,0,660,661,3,48,24,0,661,662,5,59,0,0,662,103,1,0,0,0,663,664,
        5,44,0,0,664,666,5,121,0,0,665,667,3,106,53,0,666,665,1,0,0,0,666,
        667,1,0,0,0,667,668,1,0,0,0,668,669,5,45,0,0,669,105,1,0,0,0,670,
        671,5,3,0,0,671,676,3,108,54,0,672,673,5,4,0,0,673,675,3,108,54,
        0,674,672,1,0,0,0,675,678,1,0,0,0,676,674,1,0,0,0,676,677,1,0,0,
        0,677,679,1,0,0,0,678,676,1,0,0,0,679,680,5,5,0,0,680,107,1,0,0,
        0,681,682,7,10,0,0,682,109,1,0,0,0,683,684,7,11,0,0,684,111,1,0,
        0,0,685,686,7,12,0,0,686,113,1,0,0,0,77,120,122,126,130,136,143,
        147,152,157,164,168,173,179,184,191,195,200,209,216,220,225,230,
        233,238,245,249,253,258,264,268,273,280,287,292,302,307,317,322,
        330,338,343,347,354,362,373,382,388,394,400,407,414,420,428,446,
        450,457,471,488,495,508,513,523,527,536,564,584,591,597,607,620,
        634,636,647,651,658,666,676
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
    public INTEGER_NUMBER(): antlr.TerminalNode[];
    public INTEGER_NUMBER(i: number): antlr.TerminalNode | null;
    public INTEGER_NUMBER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(StructuredTextParser.INTEGER_NUMBER);
    	} else {
    		return this.getToken(StructuredTextParser.INTEGER_NUMBER, i);
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
    public memberExpression(): MemberExpressionContext {
        return this.getRuleContext(0, MemberExpressionContext)!;
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


export class CallStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public memberExpression(): MemberExpressionContext {
        return this.getRuleContext(0, MemberExpressionContext)!;
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
    public INTEGER_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.INTEGER_NUMBER, 0);
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


export class MemberExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public memberAccess(): MemberAccessContext[];
    public memberAccess(i: number): MemberAccessContext | null;
    public memberAccess(i?: number): MemberAccessContext[] | MemberAccessContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MemberAccessContext);
        }

        return this.getRuleContext(i, MemberAccessContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_memberExpression;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitMemberExpression) {
            return visitor.visitMemberExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MemberAccessContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.ID, 0)!;
    }
    public postfixOp(): PostfixOpContext[];
    public postfixOp(i: number): PostfixOpContext | null;
    public postfixOp(i?: number): PostfixOpContext[] | PostfixOpContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PostfixOpContext);
        }

        return this.getRuleContext(i, PostfixOpContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_memberAccess;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitMemberAccess) {
            return visitor.visitMemberAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PostfixOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public dereference(): DereferenceContext | null {
        return this.getRuleContext(0, DereferenceContext);
    }
    public arrayIndex(): ArrayIndexContext | null {
        return this.getRuleContext(0, ArrayIndexContext);
    }
    public call(): CallContext | null {
        return this.getRuleContext(0, CallContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_postfixOp;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitPostfixOp) {
            return visitor.visitPostfixOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DereferenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CARET(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.CARET, 0)!;
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_dereference;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitDereference) {
            return visitor.visitDereference(this);
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


export class CallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public argumentList(): ArgumentListContext | null {
        return this.getRuleContext(0, ArgumentListContext);
    }
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_call;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitCall) {
            return visitor.visitCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.INTEGER_NUMBER, 0);
    }
    public REAL_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.REAL_NUMBER, 0);
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
    public override get ruleIndex(): number {
        return StructuredTextParser.RULE_literal;
    }
    public override accept<Result>(visitor: StructuredTextVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
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
    public memberExpression(): MemberExpressionContext | null {
        return this.getRuleContext(0, MemberExpressionContext);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
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
    public INTEGER_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.INTEGER_NUMBER, 0);
    }
    public REAL_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(StructuredTextParser.REAL_NUMBER, 0);
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
