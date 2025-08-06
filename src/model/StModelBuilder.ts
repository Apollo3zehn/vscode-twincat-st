import { CharStream, CommonTokenStream } from "antlr4ng";
import { TextDocument, Uri, workspace } from "vscode";
import { logger, StModel, StSourceFile, StSymbolKind } from "../core/types.js";
import { getNestedTypeOrSelf } from "../core/utils.js";
import { StructuredTextLexer } from "../generated/StructuredTextLexer.js";
import { AssignmentContext, CallStatementContext, EnumMemberContext, ExtendsClauseContext, ImplementsClauseContext, StructuredTextParser, VarDeclContext } from "../generated/StructuredTextParser.js";
import { StVisitor } from "./StVisitor.js";
import { findTypeDeclaration } from "./declaration.js";
import { C0074, C0077, C0261 } from "./diagnostics.js";
import { evaluateAssignment, evaluateExpression, evaluateMemberExpression } from "./evaluation.js";

export class StModelBuilder {

    public static model: StModel;
    public static currentSourceFile: StSourceFile;

    public async build(): Promise<void> {
    
        StModelBuilder.model = new StModel();

        logger.appendLine(`Build model`);

        // Build model
        const fileUris = await workspace.findFiles(
            "**/*.st"
        );

        const tasks: Promise<void>[] = [];

        for (const fileUri of fileUris) {

            logger.appendLine(`Processing ${fileUri.toString()}`);

            const task = async () => {
                const document = await workspace.openTextDocument(fileUri);
                this.analyzeStFile(document);
            };
            
            tasks.push(task());
        }

        await Promise.all(tasks);

        // Resolve types first ...
        this.iterateAndSelectSourceFiles(sourceFile => {

            for (const [ctx, symbol] of sourceFile.symbolMap) {
                
                if (symbol.kind !== StSymbolKind.TypeUsage)
                    continue;

                const type = symbol.type!;
                const isArrayOrPointerOrReference = type.isArray || type.isPointer || type.isReference;

                if (type.isArray) {
                    
                    for (const arrayLimitExpression of type.context!.expr()) {

                        const rhsType = evaluateExpression(arrayLimitExpression);

                        // TODO: Ensure that result is constant / Validate value (LHS type = ANY_INT)
                    }
                }

                if (isArrayOrPointerOrReference && type.referencedOrElementType) {

                    const underlyingType = type.referencedOrElementType;

                    if (underlyingType.isReference)
                        C0261(symbol);
                }

                if (!(type.builtinType || isArrayOrPointerOrReference)) {
                       
                    const declaration = findTypeDeclaration(symbol);
                    type.declaration = declaration;

                    if (declaration) {

                        // Inheritance
                        if (ctx.parent instanceof ExtendsClauseContext && symbol.parent) {

                            const parentTypeInfo = symbol.parent.typeDeclarationDetails;

                            if (parentTypeInfo) {

                                if (!parentTypeInfo.baseTypes)
                                    parentTypeInfo.baseTypes = [];

                                parentTypeInfo.baseTypes.push(declaration);

                                // Add back reference
                                const declaringSymbolTypeInfo = declaration.typeDeclarationDetails!;

                                if (!declaringSymbolTypeInfo.subTypes)
                                    declaringSymbolTypeInfo.subTypes = [];

                                declaringSymbolTypeInfo.subTypes.push(symbol.parent);
                            }
                        }

                        // Interfaces
                        if (ctx.parent instanceof ImplementsClauseContext && symbol.parent) {

                            const parentTypeInfo = symbol.parent.typeDeclarationDetails;

                            if (parentTypeInfo) {

                                if (!parentTypeInfo.interfaces)
                                    parentTypeInfo.interfaces = [];

                                parentTypeInfo.interfaces.push(declaration);

                                // Add back reference
                                const declaringSymbolTypeInfo = declaration.typeDeclarationDetails!;

                                if (!declaringSymbolTypeInfo.subTypes)
                                    declaringSymbolTypeInfo.subTypes = [];

                                declaringSymbolTypeInfo.subTypes.push(symbol.parent);
                            }
                        }
                    }

                    else {
                        C0077(symbol);
                    }
                }
            }
        });

        // ... then evaluate all variable declaration initializers and enum member initializers
        this.iterateAndSelectSourceFiles(sourceFile => {

            for (const [ctx, symbol] of sourceFile.symbolMap) {
                
                if (symbol.kind === StSymbolKind.VariableDeclaration) {

                    const varDeclCtx = ctx as VarDeclContext;
                    const lhsCtx = varDeclCtx.type() ?? undefined;
                    const lhsTypeUsage = sourceFile.symbolMap.get(lhsCtx);
                    const lhsType = lhsTypeUsage?.type;

                    let nestedLhsType = lhsType
                        ? getNestedTypeOrSelf(lhsType)
                        : undefined;
                            
                    const exprOrArrayInit = varDeclCtx.exprOrArrayInit();

                    if (exprOrArrayInit) {

                        const rhsCtx = exprOrArrayInit.expr();

                        if (nestedLhsType && rhsCtx) {
                            evaluateAssignment(
                                lhsType,
                                lhsCtx,
                                rhsCtx,
                                varDeclCtx.assignmentOperator()!
                            );
                        }
                    }

                    else {
                        // TODO: implement array init
                    }
                }

                else if (symbol.kind === StSymbolKind.EnumMember) {
                   
                    let lhsType = symbol?.parent?.typeDeclarationDetails?.underlyingType!;
                    
                    const enumMemberCtx = ctx as EnumMemberContext;
                    const rhsCtx = enumMemberCtx.expr();

                    if (rhsCtx) {
                        evaluateAssignment(
                            lhsType,
                            undefined,
                            rhsCtx,
                            undefined
                        );
                    }
                }
            }
        });

        // ... then evaluate all statements
        this.iterateAndSelectSourceFiles(sourceFile => {

            for (const statementContext of sourceFile.statements) {
                
                if (statementContext.callStatement())
                    this.evaluateCallStatement(statementContext.callStatement()!);
                
                else if (statementContext.assignment())
                    this.processAssignment(statementContext.assignment()!);
            }
        });
    }

    private analyzeStFile(document: TextDocument) {
    
        const uri = document.uri;

        if (uri.scheme !== "file")
            return;

        if (document.lineCount === 0)
            return;

        // Build model
        const inputStream = CharStream.fromString(document.getText());
        const lexer = new StructuredTextLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new StructuredTextParser(tokenStream);
        const tree = parser.compilationUnit();

        StModelBuilder.currentSourceFile = this.getOrCreateSourceFile(uri, tokenStream);

        const visitor = new StVisitor(uri, StModelBuilder.model.tcConfig.architecture);

        tree.accept(visitor);
    }

    private getOrCreateSourceFile(fileUri: Uri, tokenStream: CommonTokenStream): StSourceFile {
        
        let sourceFile: StSourceFile;
        let fileUriAsString = fileUri.toString();

        if (StModelBuilder.model.sourceFileMap.has(fileUriAsString)) {
            sourceFile = StModelBuilder.model.sourceFileMap.get(fileUriAsString)!;
        }

        else {
            logger.appendLine(`Create source file ${fileUri}`);

            sourceFile = new StSourceFile(
                fileUri,
                fileUriAsString,
                tokenStream
            );
           
            StModelBuilder.model.sourceFileMap.set(fileUriAsString, sourceFile);
        }

        return sourceFile;
    }

    private evaluateCallStatement(callStatement: CallStatementContext) {
        evaluateMemberExpression(callStatement.memberExpression(), false);
    }

    private processAssignment(assignment: AssignmentContext) {
        
        const lhsCtx = assignment.memberExpression();
        const lhsType = evaluateMemberExpression(lhsCtx, true);
        const exprOrArrayInit = assignment.exprOrArrayInit();
        const rhsCtx = exprOrArrayInit.expr();

        if (lhsType && rhsCtx) {
            evaluateAssignment(
                lhsType,
                lhsCtx,
                rhsCtx,
                assignment.assignmentOperator()
            );
        }

        else {
            C0074(exprOrArrayInit.arrayInit()!);
        }
    }

    private iterateAndSelectSourceFiles(callback: (sourceFile: StSourceFile) => void): void {
        for (const sourceFile of StModelBuilder.model.sourceFileMap.values()) {
            StModelBuilder.currentSourceFile = sourceFile;
            callback(sourceFile);
        }
    }
}