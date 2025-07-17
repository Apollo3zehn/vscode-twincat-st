import { CharStream, CommonTokenStream } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity, TextDocument, Uri, workspace } from "vscode";
import { logger, StBuiltinType, StModel, StNativeTypeKind, StSourceFile, StSymbol, StSymbolKind, StType, VariableKind } from "../core.js";
import { StructuredTextLexer } from "../generated/StructuredTextLexer.js";
import { AssignmentContext, CallStatementContext, ExprContext, ExtendsClauseContext, ImplementsClauseContext, MemberExpressionContext, MethodContext, PostfixOpContext, PropertyContext, StructuredTextParser } from "../generated/StructuredTextParser.js";
import { getContextRange, getOriginalText, getTokenRange, getTypeOfType } from "../utils.js";
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

                const type = symbol.type!;
                const isArrayOrPointerOrReference = type.isArray || type.isPointer || type.isReference;

                if (isArrayOrPointerOrReference && type.underlyingType) {

                    const underlyingType = type.underlyingType;

                    if (underlyingType.isReference)
                        this.C0261(symbol, sourceFile);
                }

                if (!(type.builtinType || isArrayOrPointerOrReference)) {
                       
                    const declaration = this.findTypeDeclaration(symbol);
                    type.declaration = declaration;

                    if (declaration) {

                        // Inheritance
                        if (ctx.parent instanceof ExtendsClauseContext && symbol.parent) {

                            const parentTypeInfo = symbol.parent.typeHierarchyInfo;

                            if (parentTypeInfo) {

                                if (!parentTypeInfo.baseTypes)
                                    parentTypeInfo.baseTypes = []

                                parentTypeInfo.baseTypes.push(declaration);

                                // Add back reference
                                const declaringSymbolTypeInfo = declaration.typeHierarchyInfo!;

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

                                parentTypeInfo.interfaces.push(declaration);

                                // Add back reference
                                const declaringSymbolTypeInfo = declaration.typeHierarchyInfo!;

                                if (!declaringSymbolTypeInfo.subTypes)
                                    declaringSymbolTypeInfo.subTypes = []

                                declaringSymbolTypeInfo.subTypes.push(symbol.parent);
                            }
                        }
                    }

                    else {
                        this.C0077(symbol, sourceFile);
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
                : declaration?.typeUsage?.type?.declaration;
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
        const lhsType = this.evaluateMemberExpression(lhsCtx, sourceFile, true);

        const rhsCtx = assignment.expr();
        const rhsType = this.evaluateExpression(rhsCtx, sourceFile);

        const operatorCtx = assignment.assignmentOperator();
        const operatorText = operatorCtx.getText();
        const isRefAssignment = operatorText === 'REF=';

        if (isRefAssignment) {

            if (!lhsType?.isReference) {

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
            
            if (lhsType?.builtinType && rhsType?.builtinType) {

                const lhsNativeType = StModel.nativeTypes.get(lhsType?.builtinType);
                const rhsNativeType = StModel.nativeTypes.get(rhsType?.builtinType);

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
                                        `Implicit conversion from signed type '${StBuiltinType[rhsType?.builtinType]}' to unsigned type '${StBuiltinType[lhsType?.builtinType]}': Possible change of sign`,
                                        DiagnosticSeverity.Warning
                                    );

                                    sourceFile.diagnostics.push(warning);
                                }

                                else if (!rhsNativeType.signed && lhsNativeType.signed) {

                                    const warning = new Diagnostic(
                                        getContextRange(rhsCtx)!,
                                        `Implicit conversion from unsigned type '${StBuiltinType[rhsType?.builtinType]}' to signed type '${StBuiltinType[lhsType?.builtinType]}': Possible change of sign`,
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
                                    `Implicit conversion from '${StBuiltinType[rhsType?.builtinType]}' to '${StBuiltinType[lhsType?.builtinType]}': Possible loss of information`,
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
            const lhsTypeId = lhsType
                ? lhsType.getId()
                : getOriginalText(lhsCtx);
            
            const rhsTypeId = rhsType
                ? rhsType.getId()
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

    private evaluateExpression(expression: ExprContext, sourceFile: StSourceFile): StType | undefined {

        const memberExpression = expression.memberExpression();

        if (memberExpression)
            return this.evaluateMemberExpression(memberExpression, sourceFile, false);

        return undefined;
    }

    private evaluateMemberExpression(
        memberExpression: MemberExpressionContext,
        sourceFile: StSourceFile,
        isAssignment: boolean
    ): StType | undefined {

        const memberAccesses = memberExpression.memberAccess();

        let currentMember: StSymbol | undefined = undefined;
        let currentType: StType | undefined = undefined;
        let currentQualifier: StSymbol | undefined = undefined;

        for (const memberAccess of memberAccesses) {

            currentMember = sourceFile.symbolMap.get(memberAccess);

            if (!currentMember)
                return undefined;

            this.findDeclaration(currentMember, currentQualifier);

            if (currentMember.declaration) {

                if (currentMember.declaration.kind === StSymbolKind.Property) {

                    const isLastMemberAccess = memberAccesses[memberAccesses.length - 1] === memberAccess;

                    if (!(isAssignment && isLastMemberAccess)) {

                        const propertyCtx = currentMember.declaration.context as PropertyContext;
                        const propertyBodyCtx = propertyCtx.propertyBody();
                        const getter = propertyBodyCtx.getter();

                        if (!getter)                           
                            this.C0143(currentMember, sourceFile);
                    }
                }

                currentType = this.evaluatePostfixOps(
                    currentMember,
                    memberAccess.postfixOp(),
                    sourceFile
                );
            }

            else {
                this.C0046(currentMember, sourceFile);
            }

            currentQualifier = currentMember;
        }

        const lastMember = currentMember!;

        if (isAssignment) {

            const lastMemberDeclaration = lastMember?.declaration;

            if (lastMemberDeclaration?.kind === StSymbolKind.Property) {

                const propertyCtx = lastMemberDeclaration.context as PropertyContext;
                const propertyBodyCtx = propertyCtx.propertyBody();
                const setter = propertyBodyCtx.setter();

                if (!setter)
                    this.C0018(lastMember, sourceFile);
            }

            if (!(
                lastMemberDeclaration?.variableKind === VariableKind.Input ||
                lastMemberDeclaration?.variableKind === VariableKind.InOut
            ))  
            {
                #error Test this
                this.C0037(lastMember, sourceFile);
            }
        }

        

        return currentType;
    }  

    private evaluatePostfixOps(
        member: StSymbol,
        postfixOps: PostfixOpContext[],
        sourceFile: StSourceFile
    ): StType | undefined {

        // The calling method ensures that declaration is defined
        const memberDeclaration = member.declaration!;

        let noMoreOpsAllowed = false;
        let currentType = memberDeclaration.typeUsage?.type;

        for (const postfixOp of postfixOps) {

            if (noMoreOpsAllowed) {
                this.C0185(member, sourceFile);
                return undefined;
            }

            if (postfixOp.dereference()) {
                
                if (member.id === "THIS") {
                    currentType = currentType?.underlyingType;
                }
                
                else {

                    if (!currentType?.isPointer) {
                        this.C0064(postfixOp, member, sourceFile);
                        return undefined;
                    }

                    currentType = currentType.underlyingType;
                }
            }
            
            else if (postfixOp.arrayIndex()) {
                
                if (!currentType?.isArray) {
                    
                    const id = currentType
                        ? currentType.getId()
                        : memberDeclaration.id;

                    this.C0047(postfixOp, member, id, sourceFile);

                    return undefined;
                }

                currentType = currentType.underlyingType;
            }

            else if (postfixOp.call()) {

                noMoreOpsAllowed = true;

                // Member declaration is a variable declaration
                if (currentType) {

                    if (currentType!.declaration?.kind === StSymbolKind.FunctionBlock)
                        continue;

                    this.C0035(member, sourceFile);
                }

                // Member declaration is something else
                else {
                    switch (memberDeclaration.kind) {

                        case StSymbolKind.Method:
                        case StSymbolKind.Function:
                            break;
                            
                        case StSymbolKind.FunctionBlock:
                            this.C0080(member, sourceFile);
                            return undefined;

                        case StSymbolKind.EnumMember:
                            this.C0035(member, sourceFile);
                            return undefined;
                        
                        default:
                            this.C0036(member, memberDeclaration, sourceFile);
                            return undefined;
                    }
                }
            }
        }

        return currentType;
    }

    // C0018 '{name}' is no valid assignment target
    private C0018(lastMember: StSymbol, sourceFile: StSourceFile) {
        
        const diagnostic = new Diagnostic(
            lastMember.selectionRange ?? lastMember.range,
            `'${lastMember.id}' is no valid assignment target`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0018";
        sourceFile.diagnostics.push(diagnostic);
    }

    // C0035: Program name, function or function block instance expected instead of '{name}'
    private C0035(member: StSymbol, sourceFile: StSourceFile) {

        const diagnostic = new Diagnostic(
            member.selectionRange ?? member.range,
            `Program name, function or function block instance expected instead of '${member.id}'`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0035";
        sourceFile.diagnostics.push(diagnostic);
    }

    // C0036: Cannot call object of type '{name}'
    private C0036(member: StSymbol, declaration: StSymbol, sourceFile: StSourceFile) {

        const diagnostic = new Diagnostic(
            member.selectionRange ?? member.range,
            `Cannot call object of type '${getTypeOfType(declaration.kind)}'`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0036";
        sourceFile.diagnostics.push(diagnostic);
    }

    // C0037: '{name}' is no input of '{name}'
    private C0037(member: StSymbol, sourceFile: StSourceFile) {

        const diagnostic = new Diagnostic(
            member.selectionRange ?? member.range,
            `'${member.id}' is no input of '${member.declaration?.typeUsage?.type?.getId()}'`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0037";
        sourceFile.diagnostics.push(diagnostic);
    }

    // C0046: Identifier '{id}' not defined
    private C0046(currentMember: StSymbol, sourceFile: StSourceFile) {
        
        const diagnostic = new Diagnostic(
            currentMember.selectionRange ?? currentMember.range,
            `Identifier '${currentMember.id}' not defined`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0046";
        sourceFile.diagnostics.push(diagnostic);
    }

    // C0047: Cannot apply indexing with [] to an expression of type '{type}'
    private C0047(postfixOp: PostfixOpContext, member: StSymbol, typeId: string, sourceFile: StSourceFile) {

        const diagnostic = new Diagnostic(
            getContextRange(postfixOp.arrayIndex()) ?? member.selectionRange ?? member.range,
            `Cannot apply indexing with [] to an expression of type '${typeId}'`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0047";
        sourceFile.diagnostics.push(diagnostic);
    }

    // C0064: Dereference requires a pointer
    private C0064(postfixOp: PostfixOpContext, member: StSymbol, sourceFile: StSourceFile) {

        const diagnostic = new Diagnostic(
            getTokenRange(postfixOp.dereference()?.CARET().symbol) ?? member.selectionRange ?? member.range,
            `Dereference requires a pointer`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0064";
        sourceFile.diagnostics.push(diagnostic);
    }

    // C0077: Unknown type: '{type}'
    private C0077(symbol: StSymbol, sourceFile: StSourceFile) {
        
        const diagnostic = new Diagnostic(
            symbol.selectionRange ?? symbol.range,
            `Unknown type: '${symbol.id ?? "?"}'`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0077";
        sourceFile.diagnostics.push(diagnostic);
    }

    // C0080: Function block '{name}' must be instantiated to be accessed
    private C0080(member: StSymbol, sourceFile: StSourceFile) {

        const diagnostic = new Diagnostic(
            member.selectionRange ?? member.range,
            `Function block '${member.id}' must be instantiated to be accessed`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0080";
        sourceFile.diagnostics.push(diagnostic);
    }

    // C0143: The property '{name}' cannot be used in this context because it lacks the get accessor
    private C0143(member: StSymbol, sourceFile: StSourceFile) {
        
        const diagnostic = new Diagnostic(
            member.selectionRange ?? member.range,
            `The property '${member.id}' cannot be used in this context because it lacks the get accessor`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0143";
        sourceFile.diagnostics.push(diagnostic);
    }

    // C0185: It is not possible to perform component access '.', index access '[]' or call '()' on result of function call. Assign result to help variable first.
    private C0185(member: StSymbol, sourceFile: StSourceFile) {

        const diagnostic = new Diagnostic(
            member.selectionRange ?? member.range,
            "It is not possible to perform component access '.', index access '[]' or call '()' on result of function call. Assign result to help variable first.",
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0143";
        sourceFile.diagnostics.push(diagnostic);
    }

    // C0261: A reference type is not allowed as base type of an array, pointer, or reference
    private C0261(symbol: StSymbol, sourceFile: StSourceFile) {
        
        const diagnostic = new Diagnostic(
            symbol.selectionRange ?? symbol.range,
            "A reference type is not allowed as base type of an array, pointer, or reference",
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0261";
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