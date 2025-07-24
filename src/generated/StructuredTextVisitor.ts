// Generated from /home/vincent/Documents/Git/GitHub/vscode-twincat-st/src/StructuredText.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { CompilationUnitContext } from "./StructuredTextParser.js";
import { ProgramContext } from "./StructuredTextParser.js";
import { FunctionContext } from "./StructuredTextParser.js";
import { MethodContext } from "./StructuredTextParser.js";
import { PropertyContext } from "./StructuredTextParser.js";
import { FunctionBlockContext } from "./StructuredTextParser.js";
import { InterfaceContext } from "./StructuredTextParser.js";
import { VarGlobalSectionContext } from "./StructuredTextParser.js";
import { TypeDeclContext } from "./StructuredTextParser.js";
import { EnumDeclContext } from "./StructuredTextParser.js";
import { EnumMemberContext } from "./StructuredTextParser.js";
import { InitialValueContext } from "./StructuredTextParser.js";
import { StructDeclContext } from "./StructuredTextParser.js";
import { ImplementsClauseContext } from "./StructuredTextParser.js";
import { ExtendsClauseContext } from "./StructuredTextParser.js";
import { MemberContext } from "./StructuredTextParser.js";
import { VarDeclSectionContext } from "./StructuredTextParser.js";
import { VarSectionTypeContext } from "./StructuredTextParser.js";
import { VarDeclContext } from "./StructuredTextParser.js";
import { ExprOrArrayInitContext } from "./StructuredTextParser.js";
import { ArrayInitContext } from "./StructuredTextParser.js";
import { TypeContext } from "./StructuredTextParser.js";
import { BaseTypeContext } from "./StructuredTextParser.js";
import { BuiltinTypeContext } from "./StructuredTextParser.js";
import { StatementSectionContext } from "./StructuredTextParser.js";
import { StatementContext } from "./StructuredTextParser.js";
import { AssignmentContext } from "./StructuredTextParser.js";
import { AssignmentOperatorContext } from "./StructuredTextParser.js";
import { CallStatementContext } from "./StructuredTextParser.js";
import { ArgumentListContext } from "./StructuredTextParser.js";
import { ArgumentContext } from "./StructuredTextParser.js";
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
import { MemberExpressionContext } from "./StructuredTextParser.js";
import { MemberAccessContext } from "./StructuredTextParser.js";
import { PostfixOpContext } from "./StructuredTextParser.js";
import { DereferenceContext } from "./StructuredTextParser.js";
import { ArrayIndexContext } from "./StructuredTextParser.js";
import { CallContext } from "./StructuredTextParser.js";
import { LiteralContext } from "./StructuredTextParser.js";
import { TimeLiteralContext } from "./StructuredTextParser.js";
import { DateLiteralContext } from "./StructuredTextParser.js";
import { DateAndTimeLiteralContext } from "./StructuredTextParser.js";
import { TimeOfDayLiteralContext } from "./StructuredTextParser.js";
import { ExprContext } from "./StructuredTextParser.js";
import { PropertyBodyContext } from "./StructuredTextParser.js";
import { GetterContext } from "./StructuredTextParser.js";
import { SetterContext } from "./StructuredTextParser.js";
import { AttributeContext } from "./StructuredTextParser.js";
import { AttributeArgListContext } from "./StructuredTextParser.js";
import { AttributeArgContext } from "./StructuredTextParser.js";
import { AccessModifierContext } from "./StructuredTextParser.js";
import { ModifierContext } from "./StructuredTextParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `StructuredTextParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class StructuredTextVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `StructuredTextParser.compilationUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;
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
     * Visit a parse tree produced by `StructuredTextParser.method`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethod?: (ctx: MethodContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.property`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProperty?: (ctx: PropertyContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.functionBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionBlock?: (ctx: FunctionBlockContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.interface`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterface?: (ctx: InterfaceContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.varGlobalSection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarGlobalSection?: (ctx: VarGlobalSectionContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.typeDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeDecl?: (ctx: TypeDeclContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.enumDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumDecl?: (ctx: EnumDeclContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.enumMember`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumMember?: (ctx: EnumMemberContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.initialValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInitialValue?: (ctx: InitialValueContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.structDecl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructDecl?: (ctx: StructDeclContext) => Result;
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
     * Visit a parse tree produced by `StructuredTextParser.member`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMember?: (ctx: MemberContext) => Result;
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
     * Visit a parse tree produced by `StructuredTextParser.baseType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBaseType?: (ctx: BaseTypeContext) => Result;
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
     * Visit a parse tree produced by `StructuredTextParser.assignmentOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.callStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallStatement?: (ctx: CallStatementContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.argumentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgumentList?: (ctx: ArgumentListContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgument?: (ctx: ArgumentContext) => Result;
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
     * Visit a parse tree produced by `StructuredTextParser.memberExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberExpression?: (ctx: MemberExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.memberAccess`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberAccess?: (ctx: MemberAccessContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.postfixOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPostfixOp?: (ctx: PostfixOpContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.dereference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDereference?: (ctx: DereferenceContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.arrayIndex`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayIndex?: (ctx: ArrayIndexContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.call`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCall?: (ctx: CallContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.timeLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeLiteral?: (ctx: TimeLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.dateLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateLiteral?: (ctx: DateLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.dateAndTimeLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateAndTimeLiteral?: (ctx: DateAndTimeLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.timeOfDayLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeOfDayLiteral?: (ctx: TimeOfDayLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result;
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
     * Visit a parse tree produced by `StructuredTextParser.attribute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribute?: (ctx: AttributeContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.attributeArgList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttributeArgList?: (ctx: AttributeArgListContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.attributeArg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttributeArg?: (ctx: AttributeArgContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.accessModifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAccessModifier?: (ctx: AccessModifierContext) => Result;
    /**
     * Visit a parse tree produced by `StructuredTextParser.modifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifier?: (ctx: ModifierContext) => Result;
}

