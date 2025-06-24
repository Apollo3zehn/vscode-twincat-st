// Generated from /home/vincent/Documents/Git/GitHub/vscode-st-support/src/StructuredText.g4 by ANTLR 4.13.1

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
    public static readonly PROGRAM = 39;
    public static readonly END_PROGRAM = 40;
    public static readonly FUNCTION_BLOCK = 41;
    public static readonly END_FUNCTION_BLOCK = 42;
    public static readonly FUNCTION = 43;
    public static readonly END_FUNCTION = 44;
    public static readonly PROPERTY = 45;
    public static readonly END_PROPERTY = 46;
    public static readonly IMPLEMENTS = 47;
    public static readonly EXTENDS = 48;
    public static readonly GET = 49;
    public static readonly END_GET = 50;
    public static readonly SET = 51;
    public static readonly END_SET = 52;
    public static readonly VAR = 53;
    public static readonly VAR_INPUT = 54;
    public static readonly VAR_OUTPUT = 55;
    public static readonly VAR_IN_OUT = 56;
    public static readonly VAR_TEMP = 57;
    public static readonly VAR_EXTERNAL = 58;
    public static readonly VAR_GLOBAL = 59;
    public static readonly END_VAR = 60;
    public static readonly IF = 61;
    public static readonly THEN = 62;
    public static readonly ELSIF = 63;
    public static readonly ELSE = 64;
    public static readonly END_IF = 65;
    public static readonly CASE = 66;
    public static readonly ARRAY = 67;
    public static readonly OF = 68;
    public static readonly END_CASE = 69;
    public static readonly WHILE = 70;
    public static readonly DO = 71;
    public static readonly END_WHILE = 72;
    public static readonly REPEAT = 73;
    public static readonly UNTIL = 74;
    public static readonly END_REPEAT = 75;
    public static readonly FOR = 76;
    public static readonly TO = 77;
    public static readonly BY = 78;
    public static readonly END_FOR = 79;
    public static readonly RETURN = 80;
    public static readonly EXIT = 81;
    public static readonly CONTINUE = 82;
    public static readonly AND = 83;
    public static readonly OR = 84;
    public static readonly XOR = 85;
    public static readonly METHOD = 86;
    public static readonly END_METHOD = 87;
    public static readonly BOOL = 88;
    public static readonly ID = 89;
    public static readonly NUMBER = 90;
    public static readonly STRING_LITERAL = 91;
    public static readonly WS = 92;
    public static readonly COMMENT = 93;
    public static readonly RULE_program = 0;
    public static readonly RULE_function = 1;
    public static readonly RULE_property = 2;
    public static readonly RULE_implementsClause = 3;
    public static readonly RULE_extendsClause = 4;
    public static readonly RULE_varDeclSection = 5;
    public static readonly RULE_varSectionType = 6;
    public static readonly RULE_varDecl = 7;
    public static readonly RULE_arraySpec = 8;
    public static readonly RULE_exprOrArrayInit = 9;
    public static readonly RULE_arrayInit = 10;
    public static readonly RULE_type = 11;
    public static readonly RULE_builtinType = 12;
    public static readonly RULE_statementSection = 13;
    public static readonly RULE_statement = 14;
    public static readonly RULE_assignment = 15;
    public static readonly RULE_arrayIndex = 16;
    public static readonly RULE_callStatement = 17;
    public static readonly RULE_ifStatement = 18;
    public static readonly RULE_caseStatement = 19;
    public static readonly RULE_caseElement = 20;
    public static readonly RULE_caseValue = 21;
    public static readonly RULE_whileStatement = 22;
    public static readonly RULE_repeatStatement = 23;
    public static readonly RULE_forStatement = 24;
    public static readonly RULE_returnStatement = 25;
    public static readonly RULE_exitStatement = 26;
    public static readonly RULE_continueStatement = 27;
    public static readonly RULE_expr = 28;
    public static readonly RULE_compilationUnit = 29;
    public static readonly RULE_propertyBody = 30;
    public static readonly RULE_getter = 31;
    public static readonly RULE_setter = 32;
    public static readonly RULE_functionBlock = 33;
    public static readonly RULE_functionBlockMember = 34;
    public static readonly RULE_method = 35;

    public static readonly literalNames = [
        null, "':'", "','", "'='", "';'", "'['", "'..'", "']'", "'INT'", 
        "'REAL'", "'BOOL'", "'STRING'", "'DINT'", "'BYTE'", "'WORD'", "'DWORD'", 
        "'SINT'", "'USINT'", "'UINT'", "'UDINT'", "'LINT'", "'ULINT'", "'LREAL'", 
        "'TIME'", "'DATE'", "'TIME_OF_DAY'", "'DATE_AND_TIME'", "':='", 
        "'('", "')'", "'*'", "'/'", "'+'", "'-'", "'<'", "'>'", "'<='", 
        "'>='", "'<>'", "'PROGRAM'", "'END_PROGRAM'", "'FUNCTION_BLOCK'", 
        "'END_FUNCTION_BLOCK'", "'FUNCTION'", "'END_FUNCTION'", "'PROPERTY'", 
        "'END_PROPERTY'", "'IMPLEMENTS'", "'EXTENDS'", "'GET'", "'END_GET'", 
        "'SET'", "'END_SET'", "'VAR'", "'VAR_INPUT'", "'VAR_OUTPUT'", "'VAR_IN_OUT'", 
        "'VAR_TEMP'", "'VAR_EXTERNAL'", "'VAR_GLOBAL'", "'END_VAR'", "'IF'", 
        "'THEN'", "'ELSIF'", "'ELSE'", "'END_IF'", "'CASE'", "'ARRAY'", 
        "'OF'", "'END_CASE'", "'WHILE'", "'DO'", "'END_WHILE'", "'REPEAT'", 
        "'UNTIL'", "'END_REPEAT'", "'FOR'", "'TO'", "'BY'", "'END_FOR'", 
        "'RETURN'", "'EXIT'", "'CONTINUE'", "'AND'", "'OR'", "'XOR'", "'METHOD'", 
        "'END_METHOD'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "PROGRAM", "END_PROGRAM", "FUNCTION_BLOCK", 
        "END_FUNCTION_BLOCK", "FUNCTION", "END_FUNCTION", "PROPERTY", "END_PROPERTY", 
        "IMPLEMENTS", "EXTENDS", "GET", "END_GET", "SET", "END_SET", "VAR", 
        "VAR_INPUT", "VAR_OUTPUT", "VAR_IN_OUT", "VAR_TEMP", "VAR_EXTERNAL", 
        "VAR_GLOBAL", "END_VAR", "IF", "THEN", "ELSIF", "ELSE", "END_IF", 
        "CASE", "ARRAY", "OF", "END_CASE", "WHILE", "DO", "END_WHILE", "REPEAT", 
        "UNTIL", "END_REPEAT", "FOR", "TO", "BY", "END_FOR", "RETURN", "EXIT", 
        "CONTINUE", "AND", "OR", "XOR", "METHOD", "END_METHOD", "BOOL", 
        "ID", "NUMBER", "STRING_LITERAL", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "function", "property", "implementsClause", "extendsClause", 
        "varDeclSection", "varSectionType", "varDecl", "arraySpec", "exprOrArrayInit", 
        "arrayInit", "type", "builtinType", "statementSection", "statement", 
        "assignment", "arrayIndex", "callStatement", "ifStatement", "caseStatement", 
        "caseElement", "caseValue", "whileStatement", "repeatStatement", 
        "forStatement", "returnStatement", "exitStatement", "continueStatement", 
        "expr", "compilationUnit", "propertyBody", "getter", "setter", "functionBlock", 
        "functionBlockMember", "method",
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
            this.state = 72;
            this.match(StructuredTextParser.PROGRAM);
            this.state = 73;
            this.match(StructuredTextParser.ID);
            this.state = 75;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 74;
                this.implementsClause();
                }
            }

            this.state = 78;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 77;
                this.extendsClause();
                }
            }

            this.state = 83;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 127) !== 0)) {
                {
                {
                this.state = 80;
                this.varDeclSection();
                }
                }
                this.state = 85;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 86;
            this.statementSection();
            this.state = 87;
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
            this.state = 89;
            this.match(StructuredTextParser.FUNCTION);
            this.state = 90;
            this.match(StructuredTextParser.ID);
            this.state = 91;
            this.match(StructuredTextParser.T__0);
            this.state = 92;
            this.type_();
            this.state = 94;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 93;
                this.implementsClause();
                }
            }

            this.state = 97;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 96;
                this.extendsClause();
                }
            }

            this.state = 102;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 127) !== 0)) {
                {
                {
                this.state = 99;
                this.varDeclSection();
                }
                }
                this.state = 104;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 105;
            this.statementSection();
            this.state = 106;
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
    public property(): PropertyContext {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 4, StructuredTextParser.RULE_property);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 108;
            this.match(StructuredTextParser.PROPERTY);
            this.state = 109;
            this.match(StructuredTextParser.ID);
            this.state = 111;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 110;
                this.implementsClause();
                }
            }

            this.state = 114;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 113;
                this.extendsClause();
                }
            }

            this.state = 119;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 127) !== 0)) {
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
            this.propertyBody();
            this.state = 123;
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
    public implementsClause(): ImplementsClauseContext {
        let localContext = new ImplementsClauseContext(this.context, this.state);
        this.enterRule(localContext, 6, StructuredTextParser.RULE_implementsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 125;
            this.match(StructuredTextParser.IMPLEMENTS);
            this.state = 126;
            this.match(StructuredTextParser.ID);
            this.state = 131;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 127;
                this.match(StructuredTextParser.T__1);
                this.state = 128;
                this.match(StructuredTextParser.ID);
                }
                }
                this.state = 133;
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
        this.enterRule(localContext, 8, StructuredTextParser.RULE_extendsClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 134;
            this.match(StructuredTextParser.EXTENDS);
            this.state = 135;
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
    public varDeclSection(): VarDeclSectionContext {
        let localContext = new VarDeclSectionContext(this.context, this.state);
        this.enterRule(localContext, 10, StructuredTextParser.RULE_varDeclSection);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 137;
            this.varSectionType();
            this.state = 139;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 138;
                this.varDecl();
                }
                }
                this.state = 141;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 89);
            this.state = 143;
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
        this.enterRule(localContext, 12, StructuredTextParser.RULE_varSectionType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 145;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 127) !== 0))) {
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
        this.enterRule(localContext, 14, StructuredTextParser.RULE_varDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 147;
            this.match(StructuredTextParser.ID);
            this.state = 148;
            this.match(StructuredTextParser.T__0);
            this.state = 150;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 67) {
                {
                this.state = 149;
                this.arraySpec();
                }
            }

            this.state = 152;
            this.type_();
            this.state = 155;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 153;
                this.match(StructuredTextParser.T__2);
                this.state = 154;
                this.exprOrArrayInit();
                }
            }

            this.state = 157;
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
    public arraySpec(): ArraySpecContext {
        let localContext = new ArraySpecContext(this.context, this.state);
        this.enterRule(localContext, 16, StructuredTextParser.RULE_arraySpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 159;
            this.match(StructuredTextParser.ARRAY);
            this.state = 160;
            this.match(StructuredTextParser.T__4);
            this.state = 161;
            this.match(StructuredTextParser.NUMBER);
            this.state = 162;
            this.match(StructuredTextParser.T__5);
            this.state = 163;
            this.match(StructuredTextParser.NUMBER);
            this.state = 164;
            this.match(StructuredTextParser.T__6);
            this.state = 165;
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
        this.enterRule(localContext, 18, StructuredTextParser.RULE_exprOrArrayInit);
        try {
            this.state = 169;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__27:
            case StructuredTextParser.BOOL:
            case StructuredTextParser.ID:
            case StructuredTextParser.NUMBER:
            case StructuredTextParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 167;
                this.expr(0);
                }
                break;
            case StructuredTextParser.T__4:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 168;
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
        this.enterRule(localContext, 20, StructuredTextParser.RULE_arrayInit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 171;
            this.match(StructuredTextParser.T__4);
            this.state = 172;
            this.expr(0);
            this.state = 177;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 173;
                this.match(StructuredTextParser.T__1);
                this.state = 174;
                this.expr(0);
                }
                }
                this.state = 179;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 180;
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
        this.enterRule(localContext, 22, StructuredTextParser.RULE_type);
        try {
            this.state = 184;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__7:
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
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 182;
                this.builtinType();
                }
                break;
            case StructuredTextParser.ID:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 183;
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
        this.enterRule(localContext, 24, StructuredTextParser.RULE_builtinType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 186;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 134217472) !== 0))) {
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
        this.enterRule(localContext, 26, StructuredTextParser.RULE_statementSection);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 191;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 188;
                    this.statement();
                    }
                    }
                }
                this.state = 193;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
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
        this.enterRule(localContext, 28, StructuredTextParser.RULE_statement);
        try {
            this.state = 205;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 194;
                this.assignment();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 195;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 196;
                this.caseStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 197;
                this.whileStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 198;
                this.repeatStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 199;
                this.forStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 200;
                this.callStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 201;
                this.returnStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 202;
                this.exitStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 203;
                this.continueStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 204;
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
        this.enterRule(localContext, 30, StructuredTextParser.RULE_assignment);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 207;
            this.match(StructuredTextParser.ID);
            this.state = 209;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 5) {
                {
                this.state = 208;
                this.arrayIndex();
                }
            }

            this.state = 211;
            this.match(StructuredTextParser.T__26);
            this.state = 212;
            this.expr(0);
            this.state = 213;
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
    public arrayIndex(): ArrayIndexContext {
        let localContext = new ArrayIndexContext(this.context, this.state);
        this.enterRule(localContext, 32, StructuredTextParser.RULE_arrayIndex);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 215;
            this.match(StructuredTextParser.T__4);
            this.state = 216;
            this.expr(0);
            this.state = 217;
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
        this.enterRule(localContext, 34, StructuredTextParser.RULE_callStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 219;
            this.match(StructuredTextParser.ID);
            this.state = 220;
            this.match(StructuredTextParser.T__27);
            this.state = 229;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 28 || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 15) !== 0)) {
                {
                this.state = 221;
                this.expr(0);
                this.state = 226;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 2) {
                    {
                    {
                    this.state = 222;
                    this.match(StructuredTextParser.T__1);
                    this.state = 223;
                    this.expr(0);
                    }
                    }
                    this.state = 228;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 231;
            this.match(StructuredTextParser.T__28);
            this.state = 232;
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
    public ifStatement(): IfStatementContext {
        let localContext = new IfStatementContext(this.context, this.state);
        this.enterRule(localContext, 36, StructuredTextParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 234;
            this.match(StructuredTextParser.IF);
            this.state = 235;
            this.expr(0);
            this.state = 236;
            this.match(StructuredTextParser.THEN);
            this.state = 237;
            this.statementSection();
            this.state = 245;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 63) {
                {
                {
                this.state = 238;
                this.match(StructuredTextParser.ELSIF);
                this.state = 239;
                this.expr(0);
                this.state = 240;
                this.match(StructuredTextParser.THEN);
                this.state = 241;
                this.statementSection();
                }
                }
                this.state = 247;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 250;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 64) {
                {
                this.state = 248;
                this.match(StructuredTextParser.ELSE);
                this.state = 249;
                this.statementSection();
                }
            }

            this.state = 252;
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
        this.enterRule(localContext, 38, StructuredTextParser.RULE_caseStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 254;
            this.match(StructuredTextParser.CASE);
            this.state = 255;
            this.expr(0);
            this.state = 256;
            this.match(StructuredTextParser.OF);
            this.state = 258;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 257;
                this.caseElement();
                }
                }
                this.state = 260;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 15) !== 0));
            this.state = 264;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 64) {
                {
                this.state = 262;
                this.match(StructuredTextParser.ELSE);
                this.state = 263;
                this.statementSection();
                }
            }

            this.state = 266;
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
        this.enterRule(localContext, 40, StructuredTextParser.RULE_caseElement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 268;
            this.caseValue();
            this.state = 273;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 269;
                this.match(StructuredTextParser.T__1);
                this.state = 270;
                this.caseValue();
                }
                }
                this.state = 275;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 276;
            this.match(StructuredTextParser.T__0);
            this.state = 277;
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
        this.enterRule(localContext, 42, StructuredTextParser.RULE_caseValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 279;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 15) !== 0))) {
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
        this.enterRule(localContext, 44, StructuredTextParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 281;
            this.match(StructuredTextParser.WHILE);
            this.state = 282;
            this.expr(0);
            this.state = 283;
            this.match(StructuredTextParser.DO);
            this.state = 284;
            this.statementSection();
            this.state = 285;
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
        this.enterRule(localContext, 46, StructuredTextParser.RULE_repeatStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 287;
            this.match(StructuredTextParser.REPEAT);
            this.state = 288;
            this.statementSection();
            this.state = 289;
            this.match(StructuredTextParser.UNTIL);
            this.state = 290;
            this.expr(0);
            this.state = 291;
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
        this.enterRule(localContext, 48, StructuredTextParser.RULE_forStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 293;
            this.match(StructuredTextParser.FOR);
            this.state = 294;
            this.match(StructuredTextParser.ID);
            this.state = 295;
            this.match(StructuredTextParser.T__26);
            this.state = 296;
            this.expr(0);
            this.state = 297;
            this.match(StructuredTextParser.TO);
            this.state = 298;
            this.expr(0);
            this.state = 301;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 78) {
                {
                this.state = 299;
                this.match(StructuredTextParser.BY);
                this.state = 300;
                this.expr(0);
                }
            }

            this.state = 303;
            this.match(StructuredTextParser.DO);
            this.state = 304;
            this.statementSection();
            this.state = 305;
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
        this.enterRule(localContext, 50, StructuredTextParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 307;
            this.match(StructuredTextParser.RETURN);
            this.state = 308;
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
        this.enterRule(localContext, 52, StructuredTextParser.RULE_exitStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 310;
            this.match(StructuredTextParser.EXIT);
            this.state = 311;
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
        this.enterRule(localContext, 54, StructuredTextParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 313;
            this.match(StructuredTextParser.CONTINUE);
            this.state = 314;
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
        let _startState = 56;
        this.enterRecursionRule(localContext, 56, StructuredTextParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 328;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.T__27:
                {
                this.state = 317;
                this.match(StructuredTextParser.T__27);
                this.state = 318;
                this.expr(0);
                this.state = 319;
                this.match(StructuredTextParser.T__28);
                }
                break;
            case StructuredTextParser.NUMBER:
                {
                this.state = 321;
                this.match(StructuredTextParser.NUMBER);
                }
                break;
            case StructuredTextParser.BOOL:
                {
                this.state = 322;
                this.match(StructuredTextParser.BOOL);
                }
                break;
            case StructuredTextParser.STRING_LITERAL:
                {
                this.state = 323;
                this.match(StructuredTextParser.STRING_LITERAL);
                }
                break;
            case StructuredTextParser.ID:
                {
                this.state = 324;
                this.match(StructuredTextParser.ID);
                this.state = 326;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
                case 1:
                    {
                    this.state = 325;
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
            this.state = 344;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 342;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 330;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 331;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 30 || _la === 31)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 332;
                        this.expr(10);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 333;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 334;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 32 || _la === 33)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 335;
                        this.expr(9);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 336;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 337;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 3 || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 31) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 338;
                        this.expr(8);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, StructuredTextParser.RULE_expr);
                        this.state = 339;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 340;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 7) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 341;
                        this.expr(7);
                        }
                        break;
                    }
                    }
                }
                this.state = 346;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
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
        this.enterRule(localContext, 58, StructuredTextParser.RULE_compilationUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 353;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 85) !== 0)) {
                {
                this.state = 351;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case StructuredTextParser.PROGRAM:
                    {
                    this.state = 347;
                    this.program();
                    }
                    break;
                case StructuredTextParser.FUNCTION_BLOCK:
                    {
                    this.state = 348;
                    this.functionBlock();
                    }
                    break;
                case StructuredTextParser.FUNCTION:
                    {
                    this.state = 349;
                    this.function_();
                    }
                    break;
                case StructuredTextParser.PROPERTY:
                    {
                    this.state = 350;
                    this.property();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 355;
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
        this.enterRule(localContext, 60, StructuredTextParser.RULE_propertyBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 364;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
            case 1:
                {
                this.state = 356;
                this.getter();
                }
                break;
            case 2:
                {
                this.state = 357;
                this.setter();
                }
                break;
            case 3:
                {
                this.state = 358;
                this.getter();
                this.state = 359;
                this.setter();
                }
                break;
            case 4:
                {
                this.state = 361;
                this.setter();
                this.state = 362;
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
        this.enterRule(localContext, 62, StructuredTextParser.RULE_getter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 366;
            this.match(StructuredTextParser.GET);
            this.state = 367;
            this.statementSection();
            this.state = 368;
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
        this.enterRule(localContext, 64, StructuredTextParser.RULE_setter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 370;
            this.match(StructuredTextParser.SET);
            this.state = 371;
            this.statementSection();
            this.state = 372;
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
    public functionBlock(): FunctionBlockContext {
        let localContext = new FunctionBlockContext(this.context, this.state);
        this.enterRule(localContext, 66, StructuredTextParser.RULE_functionBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 374;
            this.match(StructuredTextParser.FUNCTION_BLOCK);
            this.state = 375;
            this.match(StructuredTextParser.ID);
            this.state = 377;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 376;
                this.implementsClause();
                }
            }

            this.state = 380;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 379;
                this.extendsClause();
                }
            }

            this.state = 383;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 382;
                this.functionBlockMember();
                }
                }
                this.state = 385;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 32513) !== 0) || _la === 86);
            this.state = 387;
            this.statementSection();
            this.state = 388;
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
    public functionBlockMember(): FunctionBlockMemberContext {
        let localContext = new FunctionBlockMemberContext(this.context, this.state);
        this.enterRule(localContext, 68, StructuredTextParser.RULE_functionBlockMember);
        try {
            this.state = 393;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case StructuredTextParser.VAR:
            case StructuredTextParser.VAR_INPUT:
            case StructuredTextParser.VAR_OUTPUT:
            case StructuredTextParser.VAR_IN_OUT:
            case StructuredTextParser.VAR_TEMP:
            case StructuredTextParser.VAR_EXTERNAL:
            case StructuredTextParser.VAR_GLOBAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 390;
                this.varDeclSection();
                }
                break;
            case StructuredTextParser.METHOD:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 391;
                this.method();
                }
                break;
            case StructuredTextParser.PROPERTY:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 392;
                this.property();
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
    public method(): MethodContext {
        let localContext = new MethodContext(this.context, this.state);
        this.enterRule(localContext, 70, StructuredTextParser.RULE_method);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 395;
            this.match(StructuredTextParser.METHOD);
            this.state = 396;
            this.match(StructuredTextParser.ID);
            this.state = 399;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 397;
                this.match(StructuredTextParser.T__0);
                this.state = 398;
                this.type_();
                }
            }

            this.state = 404;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 127) !== 0)) {
                {
                {
                this.state = 401;
                this.varDeclSection();
                }
                }
                this.state = 406;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 407;
            this.statementSection();
            this.state = 408;
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

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 28:
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
        4,1,93,411,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,1,0,1,0,1,0,3,0,76,8,0,1,0,3,0,79,8,0,1,
        0,5,0,82,8,0,10,0,12,0,85,9,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,
        1,95,8,1,1,1,3,1,98,8,1,1,1,5,1,101,8,1,10,1,12,1,104,9,1,1,1,1,
        1,1,1,1,2,1,2,1,2,3,2,112,8,2,1,2,3,2,115,8,2,1,2,5,2,118,8,2,10,
        2,12,2,121,9,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,130,8,3,10,3,12,3,
        133,9,3,1,4,1,4,1,4,1,5,1,5,4,5,140,8,5,11,5,12,5,141,1,5,1,5,1,
        6,1,6,1,7,1,7,1,7,3,7,151,8,7,1,7,1,7,1,7,3,7,156,8,7,1,7,1,7,1,
        8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,3,9,170,8,9,1,10,1,10,1,10,
        1,10,5,10,176,8,10,10,10,12,10,179,9,10,1,10,1,10,1,11,1,11,3,11,
        185,8,11,1,12,1,12,1,13,5,13,190,8,13,10,13,12,13,193,9,13,1,14,
        1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,206,8,14,
        1,15,1,15,3,15,210,8,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,
        1,17,1,17,1,17,1,17,1,17,5,17,225,8,17,10,17,12,17,228,9,17,3,17,
        230,8,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,18,5,18,244,8,18,10,18,12,18,247,9,18,1,18,1,18,3,18,251,8,18,
        1,18,1,18,1,19,1,19,1,19,1,19,4,19,259,8,19,11,19,12,19,260,1,19,
        1,19,3,19,265,8,19,1,19,1,19,1,20,1,20,1,20,5,20,272,8,20,10,20,
        12,20,275,9,20,1,20,1,20,1,20,1,21,1,21,1,22,1,22,1,22,1,22,1,22,
        1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,
        1,24,1,24,3,24,302,8,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,26,
        1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
        1,28,1,28,3,28,327,8,28,3,28,329,8,28,1,28,1,28,1,28,1,28,1,28,1,
        28,1,28,1,28,1,28,1,28,1,28,1,28,5,28,343,8,28,10,28,12,28,346,9,
        28,1,29,1,29,1,29,1,29,5,29,352,8,29,10,29,12,29,355,9,29,1,30,1,
        30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,365,8,30,1,31,1,31,1,31,1,
        31,1,32,1,32,1,32,1,32,1,33,1,33,1,33,3,33,378,8,33,1,33,3,33,381,
        8,33,1,33,4,33,384,8,33,11,33,12,33,385,1,33,1,33,1,33,1,34,1,34,
        1,34,3,34,394,8,34,1,35,1,35,1,35,1,35,3,35,400,8,35,1,35,5,35,403,
        8,35,10,35,12,35,406,9,35,1,35,1,35,1,35,1,35,0,1,56,36,0,2,4,6,
        8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
        52,54,56,58,60,62,64,66,68,70,0,7,1,0,53,59,1,0,8,26,1,0,88,91,1,
        0,30,31,1,0,32,33,2,0,3,3,34,38,1,0,83,85,433,0,72,1,0,0,0,2,89,
        1,0,0,0,4,108,1,0,0,0,6,125,1,0,0,0,8,134,1,0,0,0,10,137,1,0,0,0,
        12,145,1,0,0,0,14,147,1,0,0,0,16,159,1,0,0,0,18,169,1,0,0,0,20,171,
        1,0,0,0,22,184,1,0,0,0,24,186,1,0,0,0,26,191,1,0,0,0,28,205,1,0,
        0,0,30,207,1,0,0,0,32,215,1,0,0,0,34,219,1,0,0,0,36,234,1,0,0,0,
        38,254,1,0,0,0,40,268,1,0,0,0,42,279,1,0,0,0,44,281,1,0,0,0,46,287,
        1,0,0,0,48,293,1,0,0,0,50,307,1,0,0,0,52,310,1,0,0,0,54,313,1,0,
        0,0,56,328,1,0,0,0,58,353,1,0,0,0,60,364,1,0,0,0,62,366,1,0,0,0,
        64,370,1,0,0,0,66,374,1,0,0,0,68,393,1,0,0,0,70,395,1,0,0,0,72,73,
        5,39,0,0,73,75,5,89,0,0,74,76,3,6,3,0,75,74,1,0,0,0,75,76,1,0,0,
        0,76,78,1,0,0,0,77,79,3,8,4,0,78,77,1,0,0,0,78,79,1,0,0,0,79,83,
        1,0,0,0,80,82,3,10,5,0,81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,
        83,84,1,0,0,0,84,86,1,0,0,0,85,83,1,0,0,0,86,87,3,26,13,0,87,88,
        5,40,0,0,88,1,1,0,0,0,89,90,5,43,0,0,90,91,5,89,0,0,91,92,5,1,0,
        0,92,94,3,22,11,0,93,95,3,6,3,0,94,93,1,0,0,0,94,95,1,0,0,0,95,97,
        1,0,0,0,96,98,3,8,4,0,97,96,1,0,0,0,97,98,1,0,0,0,98,102,1,0,0,0,
        99,101,3,10,5,0,100,99,1,0,0,0,101,104,1,0,0,0,102,100,1,0,0,0,102,
        103,1,0,0,0,103,105,1,0,0,0,104,102,1,0,0,0,105,106,3,26,13,0,106,
        107,5,44,0,0,107,3,1,0,0,0,108,109,5,45,0,0,109,111,5,89,0,0,110,
        112,3,6,3,0,111,110,1,0,0,0,111,112,1,0,0,0,112,114,1,0,0,0,113,
        115,3,8,4,0,114,113,1,0,0,0,114,115,1,0,0,0,115,119,1,0,0,0,116,
        118,3,10,5,0,117,116,1,0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,
        120,1,0,0,0,120,122,1,0,0,0,121,119,1,0,0,0,122,123,3,60,30,0,123,
        124,5,46,0,0,124,5,1,0,0,0,125,126,5,47,0,0,126,131,5,89,0,0,127,
        128,5,2,0,0,128,130,5,89,0,0,129,127,1,0,0,0,130,133,1,0,0,0,131,
        129,1,0,0,0,131,132,1,0,0,0,132,7,1,0,0,0,133,131,1,0,0,0,134,135,
        5,48,0,0,135,136,5,89,0,0,136,9,1,0,0,0,137,139,3,12,6,0,138,140,
        3,14,7,0,139,138,1,0,0,0,140,141,1,0,0,0,141,139,1,0,0,0,141,142,
        1,0,0,0,142,143,1,0,0,0,143,144,5,60,0,0,144,11,1,0,0,0,145,146,
        7,0,0,0,146,13,1,0,0,0,147,148,5,89,0,0,148,150,5,1,0,0,149,151,
        3,16,8,0,150,149,1,0,0,0,150,151,1,0,0,0,151,152,1,0,0,0,152,155,
        3,22,11,0,153,154,5,3,0,0,154,156,3,18,9,0,155,153,1,0,0,0,155,156,
        1,0,0,0,156,157,1,0,0,0,157,158,5,4,0,0,158,15,1,0,0,0,159,160,5,
        67,0,0,160,161,5,5,0,0,161,162,5,90,0,0,162,163,5,6,0,0,163,164,
        5,90,0,0,164,165,5,7,0,0,165,166,5,68,0,0,166,17,1,0,0,0,167,170,
        3,56,28,0,168,170,3,20,10,0,169,167,1,0,0,0,169,168,1,0,0,0,170,
        19,1,0,0,0,171,172,5,5,0,0,172,177,3,56,28,0,173,174,5,2,0,0,174,
        176,3,56,28,0,175,173,1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,
        178,1,0,0,0,178,180,1,0,0,0,179,177,1,0,0,0,180,181,5,7,0,0,181,
        21,1,0,0,0,182,185,3,24,12,0,183,185,5,89,0,0,184,182,1,0,0,0,184,
        183,1,0,0,0,185,23,1,0,0,0,186,187,7,1,0,0,187,25,1,0,0,0,188,190,
        3,28,14,0,189,188,1,0,0,0,190,193,1,0,0,0,191,189,1,0,0,0,191,192,
        1,0,0,0,192,27,1,0,0,0,193,191,1,0,0,0,194,206,3,30,15,0,195,206,
        3,36,18,0,196,206,3,38,19,0,197,206,3,44,22,0,198,206,3,46,23,0,
        199,206,3,48,24,0,200,206,3,34,17,0,201,206,3,50,25,0,202,206,3,
        52,26,0,203,206,3,54,27,0,204,206,5,4,0,0,205,194,1,0,0,0,205,195,
        1,0,0,0,205,196,1,0,0,0,205,197,1,0,0,0,205,198,1,0,0,0,205,199,
        1,0,0,0,205,200,1,0,0,0,205,201,1,0,0,0,205,202,1,0,0,0,205,203,
        1,0,0,0,205,204,1,0,0,0,206,29,1,0,0,0,207,209,5,89,0,0,208,210,
        3,32,16,0,209,208,1,0,0,0,209,210,1,0,0,0,210,211,1,0,0,0,211,212,
        5,27,0,0,212,213,3,56,28,0,213,214,5,4,0,0,214,31,1,0,0,0,215,216,
        5,5,0,0,216,217,3,56,28,0,217,218,5,7,0,0,218,33,1,0,0,0,219,220,
        5,89,0,0,220,229,5,28,0,0,221,226,3,56,28,0,222,223,5,2,0,0,223,
        225,3,56,28,0,224,222,1,0,0,0,225,228,1,0,0,0,226,224,1,0,0,0,226,
        227,1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,0,229,221,1,0,0,0,229,
        230,1,0,0,0,230,231,1,0,0,0,231,232,5,29,0,0,232,233,5,4,0,0,233,
        35,1,0,0,0,234,235,5,61,0,0,235,236,3,56,28,0,236,237,5,62,0,0,237,
        245,3,26,13,0,238,239,5,63,0,0,239,240,3,56,28,0,240,241,5,62,0,
        0,241,242,3,26,13,0,242,244,1,0,0,0,243,238,1,0,0,0,244,247,1,0,
        0,0,245,243,1,0,0,0,245,246,1,0,0,0,246,250,1,0,0,0,247,245,1,0,
        0,0,248,249,5,64,0,0,249,251,3,26,13,0,250,248,1,0,0,0,250,251,1,
        0,0,0,251,252,1,0,0,0,252,253,5,65,0,0,253,37,1,0,0,0,254,255,5,
        66,0,0,255,256,3,56,28,0,256,258,5,68,0,0,257,259,3,40,20,0,258,
        257,1,0,0,0,259,260,1,0,0,0,260,258,1,0,0,0,260,261,1,0,0,0,261,
        264,1,0,0,0,262,263,5,64,0,0,263,265,3,26,13,0,264,262,1,0,0,0,264,
        265,1,0,0,0,265,266,1,0,0,0,266,267,5,69,0,0,267,39,1,0,0,0,268,
        273,3,42,21,0,269,270,5,2,0,0,270,272,3,42,21,0,271,269,1,0,0,0,
        272,275,1,0,0,0,273,271,1,0,0,0,273,274,1,0,0,0,274,276,1,0,0,0,
        275,273,1,0,0,0,276,277,5,1,0,0,277,278,3,26,13,0,278,41,1,0,0,0,
        279,280,7,2,0,0,280,43,1,0,0,0,281,282,5,70,0,0,282,283,3,56,28,
        0,283,284,5,71,0,0,284,285,3,26,13,0,285,286,5,72,0,0,286,45,1,0,
        0,0,287,288,5,73,0,0,288,289,3,26,13,0,289,290,5,74,0,0,290,291,
        3,56,28,0,291,292,5,75,0,0,292,47,1,0,0,0,293,294,5,76,0,0,294,295,
        5,89,0,0,295,296,5,27,0,0,296,297,3,56,28,0,297,298,5,77,0,0,298,
        301,3,56,28,0,299,300,5,78,0,0,300,302,3,56,28,0,301,299,1,0,0,0,
        301,302,1,0,0,0,302,303,1,0,0,0,303,304,5,71,0,0,304,305,3,26,13,
        0,305,306,5,79,0,0,306,49,1,0,0,0,307,308,5,80,0,0,308,309,5,4,0,
        0,309,51,1,0,0,0,310,311,5,81,0,0,311,312,5,4,0,0,312,53,1,0,0,0,
        313,314,5,82,0,0,314,315,5,4,0,0,315,55,1,0,0,0,316,317,6,28,-1,
        0,317,318,5,28,0,0,318,319,3,56,28,0,319,320,5,29,0,0,320,329,1,
        0,0,0,321,329,5,90,0,0,322,329,5,88,0,0,323,329,5,91,0,0,324,326,
        5,89,0,0,325,327,3,32,16,0,326,325,1,0,0,0,326,327,1,0,0,0,327,329,
        1,0,0,0,328,316,1,0,0,0,328,321,1,0,0,0,328,322,1,0,0,0,328,323,
        1,0,0,0,328,324,1,0,0,0,329,344,1,0,0,0,330,331,10,9,0,0,331,332,
        7,3,0,0,332,343,3,56,28,10,333,334,10,8,0,0,334,335,7,4,0,0,335,
        343,3,56,28,9,336,337,10,7,0,0,337,338,7,5,0,0,338,343,3,56,28,8,
        339,340,10,6,0,0,340,341,7,6,0,0,341,343,3,56,28,7,342,330,1,0,0,
        0,342,333,1,0,0,0,342,336,1,0,0,0,342,339,1,0,0,0,343,346,1,0,0,
        0,344,342,1,0,0,0,344,345,1,0,0,0,345,57,1,0,0,0,346,344,1,0,0,0,
        347,352,3,0,0,0,348,352,3,66,33,0,349,352,3,2,1,0,350,352,3,4,2,
        0,351,347,1,0,0,0,351,348,1,0,0,0,351,349,1,0,0,0,351,350,1,0,0,
        0,352,355,1,0,0,0,353,351,1,0,0,0,353,354,1,0,0,0,354,59,1,0,0,0,
        355,353,1,0,0,0,356,365,3,62,31,0,357,365,3,64,32,0,358,359,3,62,
        31,0,359,360,3,64,32,0,360,365,1,0,0,0,361,362,3,64,32,0,362,363,
        3,62,31,0,363,365,1,0,0,0,364,356,1,0,0,0,364,357,1,0,0,0,364,358,
        1,0,0,0,364,361,1,0,0,0,365,61,1,0,0,0,366,367,5,49,0,0,367,368,
        3,26,13,0,368,369,5,50,0,0,369,63,1,0,0,0,370,371,5,51,0,0,371,372,
        3,26,13,0,372,373,5,52,0,0,373,65,1,0,0,0,374,375,5,41,0,0,375,377,
        5,89,0,0,376,378,3,6,3,0,377,376,1,0,0,0,377,378,1,0,0,0,378,380,
        1,0,0,0,379,381,3,8,4,0,380,379,1,0,0,0,380,381,1,0,0,0,381,383,
        1,0,0,0,382,384,3,68,34,0,383,382,1,0,0,0,384,385,1,0,0,0,385,383,
        1,0,0,0,385,386,1,0,0,0,386,387,1,0,0,0,387,388,3,26,13,0,388,389,
        5,42,0,0,389,67,1,0,0,0,390,394,3,10,5,0,391,394,3,70,35,0,392,394,
        3,4,2,0,393,390,1,0,0,0,393,391,1,0,0,0,393,392,1,0,0,0,394,69,1,
        0,0,0,395,396,5,86,0,0,396,399,5,89,0,0,397,398,5,1,0,0,398,400,
        3,22,11,0,399,397,1,0,0,0,399,400,1,0,0,0,400,404,1,0,0,0,401,403,
        3,10,5,0,402,401,1,0,0,0,403,406,1,0,0,0,404,402,1,0,0,0,404,405,
        1,0,0,0,405,407,1,0,0,0,406,404,1,0,0,0,407,408,3,26,13,0,408,409,
        5,87,0,0,409,71,1,0,0,0,40,75,78,83,94,97,102,111,114,119,131,141,
        150,155,169,177,184,191,205,209,226,229,245,250,260,264,273,301,
        326,328,342,344,351,353,364,377,380,385,393,399,404
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
    public propertyBody(): PropertyBodyContext {
        return this.getRuleContext(0, PropertyBodyContext)!;
    }
    public END_PROPERTY(): antlr.TerminalNode {
        return this.getToken(StructuredTextParser.END_PROPERTY, 0)!;
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
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
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
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
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
