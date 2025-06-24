// Generated from /home/vincent/Documents/Git/GitHub/vscode-st-support/src/StructuredText.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgramContext } from "./StructuredTextParser.js";
import { FunctionContext } from "./StructuredTextParser.js";
import { PropertyContext } from "./StructuredTextParser.js";
import { ImplementsClauseContext } from "./StructuredTextParser.js";
import { ExtendsClauseContext } from "./StructuredTextParser.js";
import { VarDeclSectionContext } from "./StructuredTextParser.js";
import { VarSectionTypeContext } from "./StructuredTextParser.js";
import { VarDeclContext } from "./StructuredTextParser.js";
import { ArraySpecContext } from "./StructuredTextParser.js";
import { ExprOrArrayInitContext } from "./StructuredTextParser.js";
import { ArrayInitContext } from "./StructuredTextParser.js";
import { TypeContext } from "./StructuredTextParser.js";
import { BuiltinTypeContext } from "./StructuredTextParser.js";
import { StatementSectionContext } from "./StructuredTextParser.js";
import { StatementContext } from "./StructuredTextParser.js";
import { AssignmentContext } from "./StructuredTextParser.js";
import { ArrayIndexContext } from "./StructuredTextParser.js";
import { CallStatementContext } from "./StructuredTextParser.js";
import { IfStatementContext } from "./StructuredTextParser.js";
import { CaseStatementContext } from "./StructuredTextParser.js";
import { CaseElementContext } from "./StructuredTextParser.js";
import { CaseValueContext } from "./StructuredTextParser.js";
import { WhileStatementContext } from "./StructuredTextParser.js";
import { RepeatStatementContext } from "./StructuredTextParser.js";
import { ForStatementContext } from "./StructuredTextParser.js";
import { ReturnStatementContext } from "./StructuredTextParser.js";
import { ExitStatementContext } from "./StructuredTextParser.js";
import { ContinueStatementContext } from "./StructuredTextParser.js";
import { ExprContext } from "./StructuredTextParser.js";
import { CompilationUnitContext } from "./StructuredTextParser.js";
import { PropertyBodyContext } from "./StructuredTextParser.js";
import { GetterContext } from "./StructuredTextParser.js";
import { SetterContext } from "./StructuredTextParser.js";
import { FunctionBlockContext } from "./StructuredTextParser.js";
import { FunctionBlockMemberContext } from "./StructuredTextParser.js";
import { MethodContext } from "./StructuredTextParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `StructuredTextParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class StructuredTextVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `StructuredTextParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction?: (ctx: FunctionContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.implementsClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImplementsClause?: (ctx: ImplementsClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.extendsClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtendsClause?: (ctx: ExtendsClauseContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.varDeclSection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarDeclSection?: (ctx: VarDeclSectionContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.varSectionType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarSectionType?: (ctx: VarSectionTypeContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.varDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarDecl?: (ctx: VarDeclContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.arraySpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArraySpec?: (ctx: ArraySpecContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.exprOrArrayInit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprOrArrayInit?: (ctx: ExprOrArrayInitContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.arrayInit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayInit?: (ctx: ArrayInitContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.builtinType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBuiltinType?: (ctx: BuiltinTypeContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.statementSection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementSection?: (ctx: StatementSectionContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.arrayIndex`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayIndex?: (ctx: ArrayIndexContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.callStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallStatement?: (ctx: CallStatementContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.ifStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfStatement?: (ctx: IfStatementContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.caseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseStatement?: (ctx: CaseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.caseElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseElement?: (ctx: CaseElementContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.caseValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaseValue?: (ctx: CaseValueContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.whileStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStatement?: (ctx: WhileStatementContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.repeatStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRepeatStatement?: (ctx: RepeatStatementContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.forStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForStatement?: (ctx: ForStatementContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.returnStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.exitStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExitStatement?: (ctx: ExitStatementContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.continueStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinueStatement?: (ctx: ContinueStatementContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.compilationUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.propertyBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyBody?: (ctx: PropertyBodyContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.getter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetter?: (ctx: GetterContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.setter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetter?: (ctx: SetterContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.functionBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionBlock?: (ctx: FunctionBlockContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.functionBlockMember`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionBlockMember?: (ctx: FunctionBlockMemberContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.method`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethod?: (ctx: MethodContext) => Result;
}

