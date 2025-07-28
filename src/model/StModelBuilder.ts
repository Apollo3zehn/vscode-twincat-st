import { CharStream, CommonTokenStream, ParserRuleContext } from "antlr4ng";
import { Diagnostic, DiagnosticSeverity, TextDocument, Uri, workspace } from "vscode";
import { logger, StBuiltinType, StModel, StNativeTypeKind, StSourceFile, StSymbol, StSymbolKind, StType, StVariableScope } from "../core.js";
import { StructuredTextLexer } from "../generated/StructuredTextLexer.js";
import { AssignmentContext, CallStatementContext, EnumMemberContext, ExprContext, ExtendsClauseContext, ImplementsClauseContext, LiteralContext, MemberExpressionContext, MethodContext, PostfixOpContext, PropertyContext, StructuredTextParser, VarDeclContext } from "../generated/StructuredTextParser.js";
import { getContextRange, getNestedTypeOrSelf } from "../utils.js";
import { StVisitor } from "./StVisitor.js";
import { C0018, C0032, C0035, C0036, C0037, C0046, C0047, C0064, C0077, C0080, C0143, C0185, C0261 } from "./diagnostics.js";
import { evaluateBoolLiteral } from "./literals/evaluateBoolLiteral.js";
import { evaluateDateAndTimeLiteral } from "./literals/evaluateDateAndTimeLiteral.js";
import { evaluateDateLiteral } from "./literals/evaluateDateLiteral.js";
import { evaluateIntegerNumber } from "./literals/evaluateIntegerNumber.js";
import { evaluateLTimeLiteral } from "./literals/evaluateLTimeLiteral.js";
import { evaluateRealNumber } from "./literals/evaluateRealNumber.js";
import { evaluateStringLiteral } from "./literals/evaluateStringLiteral.js";
import { evaluateTimeLiteral } from "./literals/evaluateTimeLiteral.js";
import { evaluateTimeOfDayLiteral } from "./literals/evaluateTimeOfDayLiteral.js";
import { evaluateWStringLiteral } from "./literals/evaluateWStringLiteral.js";

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

                if (isArrayOrPointerOrReference && type.referencedOrElementType) {

                    const underlyingType = type.referencedOrElementType;

                    if (underlyingType.isReference)
                        C0261(symbol, sourceFile);
                }

                if (!(type.builtinType || isArrayOrPointerOrReference)) {
                       
                    const declaration = this.findTypeDeclaration(symbol);
                    type.declaration = declaration;

                    if (declaration) {

                        // Inheritance
                        if (ctx.parent instanceof ExtendsClauseContext && symbol.parent) {

                            const parentTypeInfo = symbol.parent.typeDeclarationDetails;

                            if (parentTypeInfo) {

                                if (!parentTypeInfo.baseTypes)
                                    parentTypeInfo.baseTypes = []

                                parentTypeInfo.baseTypes.push(declaration);

                                // Add back reference
                                const declaringSymbolTypeInfo = declaration.typeDeclarationDetails!;

                                if (!declaringSymbolTypeInfo.subTypes)
                                    declaringSymbolTypeInfo.subTypes = []

                                declaringSymbolTypeInfo.subTypes.push(symbol.parent);
                            }
                        }

                        // Interfaces
                        if (ctx.parent instanceof ImplementsClauseContext && symbol.parent) {

                            const parentTypeInfo = symbol.parent.typeDeclarationDetails;

                            if (parentTypeInfo) {

                                if (!parentTypeInfo.interfaces)
                                    parentTypeInfo.interfaces = []

                                parentTypeInfo.interfaces.push(declaration);

                                // Add back reference
                                const declaringSymbolTypeInfo = declaration.typeDeclarationDetails!;

                                if (!declaringSymbolTypeInfo.subTypes)
                                    declaringSymbolTypeInfo.subTypes = []

                                declaringSymbolTypeInfo.subTypes.push(symbol.parent);
                            }
                        }
                    }

                    else {
                        C0077(symbol, sourceFile);
                    }
                }
            }
        }

        // ... then evaluate all variable declaration initializers and enum member initializers
        for (const sourceFile of this._model.sourceFileMap.values()) {
            
            for (const [ctx, symbol] of sourceFile.symbolMap) {
                
                if (symbol.kind === StSymbolKind.VariableDeclaration) {

                    const varDeclCtx = ctx as VarDeclContext;
                    const lhsCtx = varDeclCtx.type();
                    const lhsTypeUsage = sourceFile.symbolMap.get(lhsCtx);
                    const lhsType = lhsTypeUsage?.type;

                    let nestedLhsType = lhsType
                        ? getNestedTypeOrSelf(lhsType)
                        : undefined;
                            
                    const rhsCtx = varDeclCtx.exprOrArrayInit()?.expr();

                    let rhsType: StType | undefined;

                    if (rhsCtx)
                        rhsType = this.evaluateExpression(rhsCtx, nestedLhsType?.builtinType, sourceFile);

                    if (nestedLhsType && rhsType) {

                        this.CheckTypes(
                            nestedLhsType, lhsCtx,
                            rhsType, rhsCtx!,
                            false,
                            sourceFile
                        );
                    }
                }

                else if (symbol.kind === StSymbolKind.EnumMember) {
                   
                    const lhsType = symbol?.parent?.typeDeclarationDetails?.underlyingType;
                    
                    const enumMemberCtx = ctx as EnumMemberContext;
                    const rhsCtx = enumMemberCtx.expr();

                    let rhsType: StType | undefined;

                    if (rhsCtx)
                        rhsType = this.evaluateExpression(rhsCtx, lhsType?.builtinType, sourceFile);

                    if (lhsType && rhsType) {

                        this.CheckTypes(
                            lhsType, undefined,
                            rhsType, rhsCtx!,
                            false,
                            sourceFile
                        );
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
        const rhsType = this.evaluateExpression(rhsCtx, lhsType?.builtinType, sourceFile);

        const operatorCtx = assignment.assignmentOperator();
        const operatorText = operatorCtx.getText();
        const isRefAssignment = operatorText === 'REF=';

        if (lhsType && rhsType) {

            this.CheckTypes(
                lhsType, lhsCtx,
                rhsType, rhsCtx,
                isRefAssignment,
                sourceFile
            );
        }
    }

    private evaluateExpression(
        expression: ExprContext,
        typeHint: StBuiltinType | undefined,
        sourceFile: StSourceFile
    ): StType | undefined {

        const memberExpression = expression.memberExpression();

        if (memberExpression)
            return this.evaluateMemberExpression(memberExpression, sourceFile, false);

        const literal = expression.literal();

        if (literal)
            return this.evaluateLiteral(literal, typeHint, sourceFile);

        return undefined;
    }

    private evaluateLiteral(
        literal: LiteralContext,
        typeHint: StBuiltinType | undefined,
        sourceFile: StSourceFile
    ): StType | undefined {

        if (literal.BOOL())
            return evaluateBoolLiteral();

        else if (literal.INTEGER_NUMBER())
            return evaluateIntegerNumber(literal, sourceFile, typeHint);

        else if (literal.REAL_NUMBER())
            return evaluateRealNumber(literal, sourceFile, typeHint);
            
        else if (literal.TIME_LITERAL())
            return evaluateTimeLiteral(literal, sourceFile);
            
        else if (literal.LTIME_LITERAL())
            return evaluateLTimeLiteral(literal, sourceFile);

        else if (literal.dateLiteral())
            return evaluateDateLiteral(literal, sourceFile);

        else if (literal.timeOfDayLiteral())
            return evaluateTimeOfDayLiteral(literal, sourceFile);

        else if (literal.dateAndTimeLiteral())
            return evaluateDateAndTimeLiteral(literal, sourceFile);

        else if (literal.STRING_LITERAL())
            return evaluateStringLiteral(literal, sourceFile);

        else if (literal.WSTRING_LITERAL())
            return evaluateWStringLiteral(literal, sourceFile);

        this.CannotEvaluateExpression(literal, sourceFile);
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
                            C0143(currentMember, sourceFile);
                    }
                }

                currentType = this.evaluatePostfixOps(
                    currentMember,
                    memberAccess.postfixOp(),
                    sourceFile
                );
            }

            else {
                C0046(currentMember, sourceFile);
            }

            currentQualifier = currentMember;
        }

        const lastMember = currentMember!;
        const lastMemberDeclaration = lastMember?.declaration;

        if (isAssignment) {

            if (lastMemberDeclaration) {

                switch (lastMemberDeclaration.kind) {

                    case StSymbolKind.VariableDeclaration:

                        if (memberAccesses.length > 1 &&
                            !(
                                lastMemberDeclaration?.variableKind === StVariableScope.Input ||
                                lastMemberDeclaration?.variableKind === StVariableScope.InOut
                            )
                        ) {
                            C0037(lastMember, sourceFile);
                        }

                        break;
                        
                    case StSymbolKind.Property:

                        const propertyCtx = lastMemberDeclaration.context as PropertyContext;
                        const propertyBodyCtx = propertyCtx.propertyBody();
                        const setter = propertyBodyCtx.setter();

                        if (!setter)
                            C0018(lastMember, sourceFile);

                        break;
                    
                    default:
                        C0018(lastMember, sourceFile);
                }
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

        let currentType = memberDeclaration.kind === StSymbolKind.EnumMember
            ? memberDeclaration.parent?.typeDeclarationDetails?.underlyingType
            : memberDeclaration.typeUsage?.type;

        if (currentType)
            currentType = getNestedTypeOrSelf(currentType);
        
        for (const postfixOp of postfixOps) {

            if (noMoreOpsAllowed) {
                C0185(member, sourceFile);
                return undefined;
            }

            if (postfixOp.dereference()) {
                
                if (member.id === "THIS") {
                    currentType = currentType?.referencedOrElementType;
                }
                
                else {

                    if (!currentType?.isPointer) {
                        C0064(postfixOp, sourceFile);
                        return undefined;
                    }

                    currentType = currentType.referencedOrElementType;
                }
            }
            
            else if (postfixOp.arrayIndex()) {
                
                if (!currentType?.isArray) {
                    
                    const id = currentType
                        ? currentType.getId()
                        : memberDeclaration.id;

                    C0047(postfixOp, id, sourceFile);

                    return undefined;
                }

                currentType = currentType.referencedOrElementType;
            }

            else if (postfixOp.call()) {

                /* Hint: Calls are always standalone, the following is
                 * not possible in Structured Text:
                 *
                 * - MyArrayOfMethods[0]()          (because of C0261)
                 * - MyMethodWhichReturnsArray()[0] (because of C0185)
                 */

                noMoreOpsAllowed = true;

                // Member declaration is a variable declaration
                if (currentType) {

                    if (currentType!.declaration?.kind === StSymbolKind.FunctionBlock) {
                        currentType = undefined;
                        continue;
                    }

                    C0035(member, sourceFile);
                }

                // Member declaration is something else
                else {

                    /* The following is valid syntax, but will not compile:
                     * MyArrayOfMethods[0]();
                     * This means that this branch is only ever executed when
                     * the call is the very first postfix operation, which
                     * in turn means we can make use of memberDeclaration instead
                     * of trying to work with currentType.
                     */

                    switch (memberDeclaration.kind) {

                        case StSymbolKind.Method:
                        case StSymbolKind.Function:
                            currentType = memberDeclaration.returnTypeUsage?.type;
                            break;
                            
                        case StSymbolKind.FunctionBlock:
                            C0080(member, sourceFile);
                            return undefined;

                        case StSymbolKind.EnumMember:
                            C0035(member, sourceFile);
                            return undefined;
                        
                        default:
                            C0036(member, memberDeclaration, sourceFile);
                            return undefined;
                    }
                }
            }

            if (currentType)
                currentType = getNestedTypeOrSelf(currentType);
        }

        return currentType;
    }

    private CannotEvaluateExpression(expression: ParserRuleContext, sourceFile: StSourceFile) {
        
        const diagnostic = new Diagnostic(
            getContextRange(expression),
            `Unable to evaluate expression. Please create a new issue with a minimal sample here: https://github.com/Apollo3zehn/vscode-twincat-st`,
            DiagnosticSeverity.Error
        );

        sourceFile.diagnostics.push(diagnostic);
    }

    private CheckTypes(
        lhsType: StType,
        lhsCtx: ParserRuleContext | undefined,
        rhsType: StType,
        rhsCtx: ParserRuleContext,
        isRefAssignment: boolean,
        sourceFile: StSourceFile
    ) {

        if (isRefAssignment) {

            if (!lhsType.isReference) {

                const diagnostic = new Diagnostic(
                    getContextRange(lhsCtx),
                    "Reference assign is only allowed to variables of reference type",
                    DiagnosticSeverity.Error
                );

                diagnostic.code = "C0140";
                sourceFile.diagnostics.push(diagnostic);
            }
        }

        else {

            if (lhsType.declaration && lhsType.declaration === rhsType.declaration)
                return;
            
            if (lhsType.builtinType && rhsType.builtinType) {

                const lhsNativeType = StModel.nativeTypesDetails.get(lhsType.builtinType);
                const rhsNativeType = StModel.nativeTypesDetails.get(rhsType.builtinType);
                
                if (!lhsNativeType || !rhsNativeType)
                    return;

                if (lhsType.builtinType === rhsType.builtinType) {

                    if (
                        rhsNativeType.kind === StNativeTypeKind.String &&
                        lhsType.stringLength! < rhsType.stringLength!
                    ) {

                        const warning = new Diagnostic(
                            getContextRange(rhsCtx),
                            `String type '${StBuiltinType[rhsType.builtinType]}(${rhsType.stringLength})' too long for string type '${StBuiltinType[lhsType.builtinType]}(${lhsType.stringLength})': The string will be truncated`,
                            DiagnosticSeverity.Warning
                        );

                        sourceFile.diagnostics.push(warning);
                    }

                    return;
                }

                const rhsIsInteger =
                    rhsNativeType.kind === StNativeTypeKind.Bitfield ||
                    rhsNativeType.kind === StNativeTypeKind.UnsignedInteger ||
                    rhsNativeType.kind === StNativeTypeKind.SignedInteger;

                switch (lhsNativeType.kind) {

                    case StNativeTypeKind.Logical:

                        if (rhsNativeType.kind === StNativeTypeKind.Logical)
                            return;

                        break;

                    case StNativeTypeKind.Bitfield:
                    case StNativeTypeKind.UnsignedInteger:
                    case StNativeTypeKind.SignedInteger:

                        if (rhsIsInteger) {

                            if (rhsNativeType.size <= lhsNativeType.size) {

                                let subRangeIsOK = lhsType.isFullRange && rhsType.isFullRange;

                                if (!subRangeIsOK) {

                                    const lhsStart = lhsType.subRangeStart! < lhsType.subRangeStop!
                                        ? lhsType.subRangeStart!
                                        : lhsType.subRangeStop!;
                                    
                                    const lhsStop = lhsType.subRangeStart! < lhsType.subRangeStop!
                                        ? lhsType.subRangeStop!
                                        : lhsType.subRangeStart!;
                                    
                                    const rhsStart = rhsType.subRangeStart! < rhsType.subRangeStop!
                                        ? rhsType.subRangeStart!
                                        : rhsType.subRangeStop!;
                                    
                                    const rhsStop = rhsType.subRangeStart! < rhsType.subRangeStop!
                                        ? rhsType.subRangeStop!
                                        : rhsType.subRangeStart!;

                                    subRangeIsOK =
                                        lhsStart <= rhsStart && rhsStart <= lhsStop &&
                                        lhsStart <= rhsStop && rhsStop <= lhsStop;
                                }

                                if (subRangeIsOK) {

                                    if (rhsNativeType.signed && !lhsNativeType.signed) {

                                        const warning = new Diagnostic(
                                            getContextRange(rhsCtx),
                                            `Implicit conversion from signed type '${StBuiltinType[rhsType.builtinType]}' to unsigned type '${StBuiltinType[lhsType.builtinType]}': Possible change of sign`,
                                            DiagnosticSeverity.Warning
                                        );

                                        sourceFile.diagnostics.push(warning);
                                    }

                                    else if (!rhsNativeType.signed && lhsNativeType.signed) {

                                        const warning = new Diagnostic(
                                            getContextRange(rhsCtx),
                                            `Implicit conversion from unsigned type '${StBuiltinType[rhsType.builtinType]}' to signed type '${StBuiltinType[lhsType.builtinType]}': Possible change of sign`,
                                            DiagnosticSeverity.Warning
                                        );

                                        sourceFile.diagnostics.push(warning);
                                    }

                                    return;
                                }
                            }
                        }

                        break;

                    case StNativeTypeKind.Float:

                        if (
                            rhsNativeType.kind === StNativeTypeKind.Float ||
                            rhsIsInteger
                        ) {
                            if (
                                (
                                    rhsNativeType.kind === StNativeTypeKind.Float &&
                                    rhsNativeType.size > lhsNativeType.size
                                ) ||
                                (
                                    rhsIsInteger &&
                                    rhsNativeType.size >= lhsNativeType.size
                                )
                            ) {
                                const warning = new Diagnostic(
                                    getContextRange(rhsCtx),
                                    `Implicit conversion from '${StBuiltinType[rhsType.builtinType]}' to '${StBuiltinType[lhsType?.builtinType]}': Possible loss of information`,
                                    DiagnosticSeverity.Warning
                                );

                                sourceFile.diagnostics.push(warning);
                            }

                            return;
                        }

                        break;
                }
            }

            C0032(rhsCtx, lhsType.getId(), rhsType.getId(), sourceFile);
        }
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