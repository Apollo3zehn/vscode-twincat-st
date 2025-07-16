import { CharStream, CommonTokenStream } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity, TextDocument, TreeItem, Uri, workspace } from "vscode";
import { logger, StBuiltinType, StModel, StNativeTypeKind, StSourceFile, StSymbol, StSymbolKind } from "../core.js";
import { StructuredTextLexer } from "../generated/StructuredTextLexer.js";
import { AssignmentContext, CallStatementContext, ExprContext, ExtendsClauseContext, ImplementsClauseContext, MemberExpressionContext, MethodContext, PostfixOpContext, PropertyContext, StructuredTextParser } from "../generated/StructuredTextParser.js";
import { getContextRange, getOriginalText, getTokenRange, getTypeIdFromTypeUsage, getTypeOfType } from "../utils.js";
import { StVisitor } from "./StVisitor.js";

export class SemanticModelBuilder {

    private _model = new StModel();

    public async build(): Promise<StModel> {
    
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
        for (const sourceFile of this._model.sourceFileMap.values()) {
            
            for (const [ctx, symbol] of sourceFile.symbolMap) {
                
                if (symbol.kind != StSymbolKind.TypeUsage)
                    continue;

                if (symbol.builtinType)
                    continue;
                        
                symbol.declaration = this.findTypeDeclaration(symbol);

                if (symbol.declaration) {

                    // Inheritance
                    if (ctx.parent instanceof ExtendsClauseContext && symbol.parent) {

                        const parentTypeInfo = symbol.parent.typeHierarchyInfo;

                        if (parentTypeInfo) {

                            if (!parentTypeInfo.baseTypes)
                                parentTypeInfo.baseTypes = []

                            parentTypeInfo.baseTypes.push(symbol.declaration);

                            // Add back reference
                            const declaringSymbolTypeInfo = symbol.declaration.typeHierarchyInfo!;

                            if (!declaringSymbolTypeInfo.subTypes)
                                declaringSymbolTypeInfo.subTypes = []

                            declaringSymbolTypeInfo.subTypes.push(symbol.parent);
                        }
                    }

                    // Interfaces
                    if (ctx.parent instanceof ImplementsClauseContext && symbol.parent) {

                        const parentTypeInfo = symbol.parent.typeHierarchyInfo;

                        if (parentTypeInfo) {

                            if (!parentTypeInfo.interfaces)
                                parentTypeInfo.interfaces = []

                            parentTypeInfo.interfaces.push(symbol.declaration);

                            // Add back reference
                            const declaringSymbolTypeInfo = symbol.declaration.typeHierarchyInfo!;

                            if (!declaringSymbolTypeInfo.subTypes)
                                declaringSymbolTypeInfo.subTypes = []

                            declaringSymbolTypeInfo.subTypes.push(symbol.parent);
                        }
                    }
                }
            }
        }

        // ... then evaluate all statements
        for (const sourceFile of this._model.sourceFileMap.values()) {
            
            for (const statementContext of sourceFile.statements) {
                
                if (statementContext.callStatement())
                    this.evaluateCallStatement(statementContext.callStatement()!, sourceFile);
                
                else if (statementContext.assignment())
                    this.evaluateAssignment(statementContext.assignment()!, sourceFile);
            }
        }

        return this._model;
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
        const sourceFile = this.getOrCreateSourceFile(uri, tokenStream);
        const visitor = new StVisitor(sourceFile, uri);

        tree.accept(visitor);
    }

    private getOrCreateSourceFile(fileUri: Uri, tokenStream: CommonTokenStream): StSourceFile {
        
        let sourceFile: StSourceFile;
        let fileUriAsString = fileUri.toString();

        if (this._model.sourceFileMap.has(fileUriAsString)) {
            sourceFile = this._model.sourceFileMap.get(fileUriAsString)!;
        }

        else {
            logger.appendLine(`Create source file ${fileUri}`);

            sourceFile = new StSourceFile(
                fileUri,
                fileUriAsString,
                tokenStream
            );
            
            this._model.sourceFileMap.set(fileUriAsString, sourceFile);
        }

        return sourceFile;
    }

    //#region Type usage

    private findTypeDeclaration(symbol: StSymbol): StSymbol | undefined {

        for (const sourceFile of this._model.sourceFileMap.values()) {

            const globalObject = sourceFile.globalObjects.get(symbol.id);

            if (!globalObject)
                continue;

            if (!globalObject.references)
                globalObject.references = [];

            globalObject.references.push(symbol);
            
            return globalObject;
        }
    }

    //#region Variable usages or call statements

    private findDeclaration(member: StSymbol, qualifier: StSymbol | undefined) {
        
        /* Input examples:
         * 
         * Call statements
         *      a.b.c();
         *      d();
         * 
         * Assignments
         *      x = a.b.c;
         *      x = d;
         *      x = a.b.c();
         *      x = d();
         */

        // Find scope
        let scope: StSymbol | undefined;

        if (qualifier) {

            const declaration = qualifier.declaration;
            const declarationKind = declaration?.kind;

            const isType =
                declarationKind === StSymbolKind.Enum ||
                declarationKind === StSymbolKind.Gvl ||
                qualifier.id === "THIS";

            scope = isType
                ? declaration
                : declaration?.typeUsage?.declaration;
        }

        else {
            scope = member.parent;
        }

        // Find declaring symbol
        let declaration: StSymbol | undefined;

        declaration = member.id === "THIS"
            
            // THIS
            ? member.parent?.context instanceof MethodContext
                ? member.parent?.parent
                : member.parent
            
            // Everything else
            : this.resolveDeclaration(scope, member.id);

        if (declaration)
            this.ConnectDeclaringSymbols(member, declaration);
    }

    private resolveDeclaration(
        scope: StSymbol | undefined,
        id: string
    ): StSymbol | undefined {
       
        // Current scope or ancestor scopes
        while (scope) {

            // A test showed that TwinCAT resolves variables/properties first ...
            if (scope.variablesAndProperties) {

                const varOrPropDeclaration = scope.variablesAndProperties.get(id);

                if (varOrPropDeclaration)
                    return varOrPropDeclaration;
            }

            // ... then methods
            if (scope.methods) {

                const methodDeclaration = scope.methods.get(id);

                if (methodDeclaration)
                    return methodDeclaration;
            }
            
            scope = scope.parent;
        }

        // Global scope
        for (const sourceFile of this._model.sourceFileMap.values()) {
            
            const globalObject = sourceFile.globalObjects.get(id);

            if (globalObject)
                return globalObject;
        }

        return undefined;
    };

    //#endregion

    //#region Statements

    private evaluateCallStatement(callStatement: CallStatementContext, sourceFile: StSourceFile) {
        this.evaluateMemberExpression(callStatement.memberExpression(), sourceFile, false);
    }

    private evaluateAssignment(assignment: AssignmentContext, sourceFile: StSourceFile) {
        
        const lhsCtx = assignment.memberExpression();
        const lhsTypeUsage = this.evaluateMemberExpression(lhsCtx, sourceFile, true);

        const rhsCtx = assignment.expr();
        const rhsTypeUsage = this.evaluateExpression(rhsCtx, sourceFile);

        const operatorCtx = assignment.assignmentOperator();
        const operatorText = operatorCtx.getText();
        const isRefAssignment = operatorText === 'REF=';

        if (isRefAssignment) {

            if (!lhsTypeUsage?.isReference) {

                const diagnostic = new Diagnostic(
                    getContextRange(lhsCtx)!,
                    "Reference assign is only allowed to variables of reference type",
                    DiagnosticSeverity.Error
                );

                diagnostic.code = "C0140";
                sourceFile.diagnostics.push(diagnostic);
            }
        }

        else {
            
            if (lhsTypeUsage?.builtinType && rhsTypeUsage?.builtinType) {

                const lhsNativeType = StModel.nativeTypes.get(lhsTypeUsage?.builtinType);
                const rhsNativeType = StModel.nativeTypes.get(rhsTypeUsage?.builtinType);

                if (!lhsNativeType || !rhsNativeType)
                    return;

                switch (lhsNativeType.kind) {

                    case StNativeTypeKind.Boolean:

                        if (rhsNativeType.kind === StNativeTypeKind.Boolean)
                            return;

                        break;

                    case StNativeTypeKind.Integer:

                        if (rhsNativeType.kind === StNativeTypeKind.Integer) {

                            if (rhsNativeType.size <= lhsNativeType.size) {

                                if (rhsNativeType.signed && !lhsNativeType.signed) {

                                    const warning = new Diagnostic(
                                        getContextRange(rhsCtx)!,
                                        `Implicit conversion from signed type '${StBuiltinType[rhsTypeUsage?.builtinType]}' to unsigned type '${StBuiltinType[lhsTypeUsage?.builtinType]}': Possible change of sign`,
                                        DiagnosticSeverity.Warning
                                    );

                                    sourceFile.diagnostics.push(warning);
                                }

                                else if (!rhsNativeType.signed && lhsNativeType.signed) {

                                    const warning = new Diagnostic(
                                        getContextRange(rhsCtx)!,
                                        `Implicit conversion from unsigned type '${StBuiltinType[rhsTypeUsage?.builtinType]}' to signed type '${StBuiltinType[lhsTypeUsage?.builtinType]}': Possible change of sign`,
                                        DiagnosticSeverity.Warning
                                    );

                                    sourceFile.diagnostics.push(warning);
                                }

                                return;
                            }
                        }

                        break;

                    case StNativeTypeKind.Float:

                        if (
                            rhsNativeType.kind === StNativeTypeKind.Float ||
                            rhsNativeType.kind === StNativeTypeKind.Integer
                        ) {
                            if (
                                rhsNativeType.kind === StNativeTypeKind.Integer &&
                                rhsNativeType.size >= lhsNativeType.size
                            ) {
                                const warning = new Diagnostic(
                                    getContextRange(rhsCtx)!,
                                    `Implicit conversion from '${StBuiltinType[rhsTypeUsage?.builtinType]}' to '${StBuiltinType[lhsTypeUsage?.builtinType]}': Possible loss of information`,
                                    DiagnosticSeverity.Warning
                                );

                                sourceFile.diagnostics.push(warning);
                            }

                            return;
                        }

                        break;
                }
            }

            // C0032: Cannot convert type '{type}' to type '{type}'
            const lhsTypeId = lhsTypeUsage
                ? getTypeIdFromTypeUsage(lhsTypeUsage)
                : getOriginalText(lhsCtx);
            
            const rhsTypeId = rhsTypeUsage
                ? getTypeIdFromTypeUsage(rhsTypeUsage)
                : getOriginalText(rhsCtx);

            const diagnostic = new Diagnostic(
                getContextRange(rhsCtx)!,
                `Cannot convert type '${rhsTypeId}' to type '${lhsTypeId}'`,
                DiagnosticSeverity.Error
            );

            diagnostic.code = "C0032";
            sourceFile.diagnostics.push(diagnostic);
        }
    }

    private evaluateExpression(expression: ExprContext, sourceFile: StSourceFile): StSymbol | undefined {

        const memberExpression = expression.memberExpression();

        if (memberExpression)
            return this.evaluateMemberExpression(memberExpression, sourceFile, false);

        return undefined;
    }

    private evaluateMemberExpression(
        memberExpression: MemberExpressionContext,
        sourceFile: StSourceFile,
        isAssignment: boolean
    ): StSymbol | undefined {

        const memberAccesses = memberExpression.memberAccess();

        let currentMember: StSymbol | undefined = undefined;
        let currentTypeUsage: StSymbol | undefined = undefined;
        let currentQualifier: StSymbol | undefined = undefined;

        for (const memberAccess of memberAccesses) {

            currentMember = sourceFile.symbolMap.get(memberAccess);

            if (!currentMember)
                return undefined;

            this.findDeclaration(currentMember, currentQualifier);

            currentTypeUsage = this.evaluatePostfixOps(
                currentMember,
                memberAccess.postfixOp(),
                sourceFile
            );

            currentQualifier = currentMember;
        }

        const lastMember = currentMember;

        if (isAssignment && lastMember?.declaration?.kind === StSymbolKind.Property) {

            const propertyCtx = lastMember.declaration.context as PropertyContext;
            const propertyBodyCtx = propertyCtx.propertyBody();
            const setter = propertyBodyCtx.setter();

            if (!setter) {
                // C0018 '{name}' is no valid assignment target
                const diagnostic = new Diagnostic(
                    lastMember.selectionRange ?? lastMember.range,
                    `'${lastMember.id}' is no valid assignment target`,
                    DiagnosticSeverity.Error
                );

                diagnostic.code = "C0018";
                sourceFile.diagnostics.push(diagnostic);
            }
        }

        return currentTypeUsage;
    }

    private evaluatePostfixOps(member: StSymbol, postfixOps: PostfixOpContext[], sourceFile: StSourceFile): StSymbol | undefined {

        let currentTypeUsage = member.declaration?.typeUsage;

        for (const postfixOp of postfixOps) {

            if (!currentTypeUsage)
                break;

            // C0064: Dereference requires a pointer
            if (postfixOp.dereference()) {

                if (!currentTypeUsage.isPointer) {

                    const diagnostic = new Diagnostic(
                        getTokenRange(postfixOp.dereference()?.CARET().symbol) ?? member.selectionRange ?? member.range,
                        `Dereference requires a pointer`,
                        DiagnosticSeverity.Error
                    );

                    diagnostic.code = "C0064";
                    sourceFile.diagnostics.push(diagnostic);

                    break;
                }

                currentTypeUsage = currentTypeUsage.underlyingTypeUsage;
            }
            
            // C0047: Cannot apply indexing with [] to an expression of type '{type}'
            else if (postfixOp.arrayIndex()) {

                if (!currentTypeUsage.isArray) {

                    const diagnostic = new Diagnostic(
                        getContextRange(postfixOp.arrayIndex()) ?? member.selectionRange ?? member.range,
                        `Cannot apply indexing with [] to an expression of type '${currentTypeUsage.id}'`,
                        DiagnosticSeverity.Error
                    );

                    diagnostic.code = "C0047";
                    sourceFile.diagnostics.push(diagnostic);

                    break;
                }

                currentTypeUsage = currentTypeUsage.underlyingTypeUsage;
            }

            else if (postfixOp.call()) {

                let typeKind: StSymbolKind | undefined;

                const declaration = currentTypeUsage.declaration;

                switch (declaration?.kind) {

                    case StSymbolKind.Program:
                    case StSymbolKind.Function:
                    case StSymbolKind.Method:
                        continue;

                    case StSymbolKind.Gvl:
                    case StSymbolKind.Enum:
                    case StSymbolKind.Struct:
                        this.C0036(member, sourceFile);
                        break;
                    
                    case StSymbolKind.VariableDeclaration:
                        
                        typeKind = member.declaration?.typeUsage?.declaration?.kind;
                        
                        if (typeKind === StSymbolKind.FunctionBlock)
                            continue;

                        this.C0035(member, sourceFile);

                        break;
                    
                    case StSymbolKind.FunctionBlock:
                        this.C0080(currentTypeUsage, sourceFile);
                        break;
                    
                    default:
                        this.C0035(member, sourceFile);
                        break;
                }
            }
        }

        return currentTypeUsage;
    }

    // C0080: Function block '{name}' must be instantiated to be accessed
    private C0080(symbol: StSymbol, sourceFile: StSourceFile) {

        const diagnostic = new Diagnostic(
            symbol.selectionRange ?? symbol.range,
            `Function block '${symbol.id}' must be instantiated to be accessed`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0080";
        sourceFile.diagnostics.push(diagnostic);
    }

    // C0035: Program name, function or function block instance expected instead of '{name}'
    private C0035(symbol: StSymbol, sourceFile: StSourceFile) {

        const diagnostic = new Diagnostic(
            symbol.selectionRange ?? symbol.range,
            `Program name, function or function block instance expected instead of '${symbol.id}'`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0035";
        sourceFile.diagnostics.push(diagnostic);
    }

    // C0036: Cannot call object of type '{name}'
    private C0036(symbol: StSymbol, sourceFile: StSourceFile) {

        const diagnostic = new Diagnostic(
            symbol.selectionRange ?? symbol.range,
            `Cannot call object of type '${getTypeOfType(symbol.kind)}'`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0036";
        sourceFile.diagnostics.push(diagnostic);
    }

    //#endregion

    //#region Utils

    private ConnectDeclaringSymbols(symbol: StSymbol, declaringSymbol: StSymbol) {

        symbol.declaration = declaringSymbol;

        if (!declaringSymbol.references)
            declaringSymbol.references = [];

        declaringSymbol.references.push(symbol);
    }

    //#endregion
}