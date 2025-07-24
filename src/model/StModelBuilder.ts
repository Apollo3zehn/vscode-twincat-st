import { CharStream, CommonTokenStream, ParserRuleContext } from "antlr4ng";
import { DateTime } from "luxon";
import { Diagnostic, DiagnosticSeverity, TextDocument, Uri, workspace } from "vscode";
import { logger, StBuiltinType, StModel, StNativeTypeKind, StSourceFile, StSymbol, StSymbolKind, StType, StVariableScope } from "../core.js";
import { StructuredTextLexer } from "../generated/StructuredTextLexer.js";
import { AssignmentContext, CallStatementContext, ExprContext, ExtendsClauseContext, ImplementsClauseContext, LiteralContext, MemberExpressionContext, MethodContext, PostfixOpContext, PropertyContext, StructuredTextParser, VarDeclContext } from "../generated/StructuredTextParser.js";
import { getContextRange, getOriginalText, getTokenRange, getTypeOfType, isDateAndTimeInRange, isDateInRange, isTimeOfDayInRange } from "../utils.js";
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

        // ... then evaluate all variable declaration initializers
        for (const sourceFile of this._model.sourceFileMap.values()) {
            
            for (const [ctx, symbol] of sourceFile.symbolMap) {
                
                if (symbol.kind != StSymbolKind.VariableDeclaration)
                    continue;

                const varDeclCtx = ctx as VarDeclContext;

                const lhsCtx = varDeclCtx.type();
                const lhsTypeUsage = sourceFile.symbolMap.get(lhsCtx);
                const lhsType = lhsTypeUsage?.type;
                 
                const rhsCtx = varDeclCtx.exprOrArrayInit()?.expr();
                let rhsType: StType | undefined;

                if (rhsCtx)
                    rhsType = this.evaluateExpression(rhsCtx, lhsType?.builtinType, sourceFile);

                if (lhsType && rhsType) {

                    this.CheckTypes(
                        lhsType, lhsCtx,
                        rhsType, rhsCtx!,
                        false,
                        sourceFile
                    );
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

        // literal
        //     : INTEGER_NUMBER
        //     | REAL_NUMBER
        //     | BOOL
        //     | TIME_LITERAL
        //     | STRING_LITERAL
        //     ;

        const typeHintKind = typeHint
            ? StModel.nativeTypes.get(typeHint)?.kind
            : undefined;

        if (literal.BOOL()) {

            const type = new StType();
            type.builtinType = StBuiltinType.BOOL;

            return type;
        }

        else if (literal.INTEGER_NUMBER()) {

            const integerNumber = literal.INTEGER_NUMBER()!;
            let text = integerNumber.getText();

            const isNegative = text.startsWith("-");

            if (isNegative)
                text = text.substring(1);

            const splittedText = text.split('#');

            let requestedType: StBuiltinType | undefined;
            let radix: number = 10;
            let value: number;

            /* Important: Do not convert type to uppercase
             * first because TwinCAT requires the input string 
             * to be uppercase, otherwise it is a syntax error.
             */
            if (splittedText.length === 3) {
                requestedType = splittedText[0] as StBuiltinType;
                radix = parseInt(splittedText[1], 10);
            }

            else if (splittedText.length === 2) {

                if (splittedText[0] in StBuiltinType)
                    requestedType = splittedText[0] as StBuiltinType;
                    
                else
                    radix = parseInt(splittedText[0], 10);
            }

            value = parseInt(splittedText[splittedText.length - 1], radix);

            let fittingType: StBuiltinType;

            if (isNegative) {

                if (-value >= -Math.pow(2, 7))
                    fittingType = StBuiltinType.SINT;   // -2^7 .. 2^7-1
                    
                else if (-value >= -Math.pow(2, 15))
                    fittingType = StBuiltinType.INT;    // -2^15 .. 2^15-1
                    
                else if (-value >= -Math.pow(2, 31))
                    fittingType = StBuiltinType.DINT;   // -2^31 .. 2^31-1
                    
                else if (-value >= -Math.pow(2, 63))
                    fittingType = StBuiltinType.LINT;   // -2^63 .. 2^63-1
                    
                else {

                    if (requestedType)
                        this.C0001(literal, StBuiltinType[requestedType], sourceFile);

                    else
                        this.C0001(literal, "ANY_INT", sourceFile);

                    return undefined;
                }
            }

            else {

                if (value <= Math.pow(2, 7) - 1)
                    fittingType = StBuiltinType.SINT;   // -2^7 .. 2^7-1
                    
                else if (value <= Math.pow(2, 8) - 1)
                    fittingType = StBuiltinType.USINT;  // 0 .. 2^8-1
                    
                else if (value <= Math.pow(2, 15) - 1)
                    fittingType = StBuiltinType.INT;    // -2^15 .. 2^15-1
                    
                else if (value <= Math.pow(2, 16) - 1)
                    fittingType = StBuiltinType.UINT;   // 0 .. 2^16-1
                    
                else if (value <= Math.pow(2, 31) - 1)
                    fittingType = StBuiltinType.DINT;   // -2^31 .. 2^31-1
                    
                else if (value <= Math.pow(2, 32) - 1)
                    fittingType = StBuiltinType.UDINT;  // 0 .. 2^32-1
                    
                else if (value <= Math.pow(2, 63) - 1)
                    fittingType = StBuiltinType.LINT;   // -2^63 .. 2^63-1
                    
                else if (value <= Math.pow(2, 64) - 1)
                    fittingType = StBuiltinType.ULINT;  // 0 .. 2^64-1
                    
                else {
                    
                    if (requestedType)
                        this.C0001(literal, StBuiltinType[requestedType], sourceFile);

                    else
                        this.C0001(literal, "ANY_INT", sourceFile);

                    return undefined;
                }
            }

            let choosenType: StBuiltinType | undefined = fittingType;

            if (requestedType) {

                const requestedTypeDetails = StModel.nativeTypes.get(requestedType);
                const fittingTypeDetails = StModel.nativeTypes.get(fittingType);

                if (
                    requestedTypeDetails &&
                    fittingTypeDetails &&
                    requestedTypeDetails.max! < fittingTypeDetails.max!
                ) {
                    this.C0001(literal, StBuiltinType[requestedType], sourceFile);
                    return undefined;
                }

                else {
                    choosenType = requestedType;
                }
            }

            switch (typeHintKind) {

                case StNativeTypeKind.Logical:

                    if (!isNegative && (value === 0 || value === 1))
                        choosenType = typeHint;

                    break;
                
                case StNativeTypeKind.Bitfield:
                case StNativeTypeKind.UnsignedInteger:

                    const choosenTypeDetails = StModel.nativeTypes.get(choosenType);
                    const typeHintDetails = StModel.nativeTypes.get(typeHint!);
                    
                    if (!isNegative && choosenTypeDetails!.size <= typeHintDetails!.size)
                        choosenType = typeHint;

                    break;
            }
        
            const type = new StType();
            type.builtinType = choosenType;

            return type;
        }

        else if (literal.REAL_NUMBER()) {

            const realNumber = literal.REAL_NUMBER()!;
            let text = realNumber.getText();

            const isNegative = text.startsWith("-");

            if (isNegative)
                text = text.substring(1);

            const splittedText = text.split('#');

            let requestedType: StBuiltinType | undefined;
            let value: number;

            /* Important: Do not convert type to uppercase
             * first because TwinCAT requires the input string 
             * to be uppercase, otherwise it is a syntax error.
             */
            if (splittedText.length === 2)
                requestedType = splittedText[0] as StBuiltinType;

            value = parseFloat(splittedText[splittedText.length - 1]);

            let fittingType: StBuiltinType;

            // https://infosys.beckhoff.com/english.php?content=../content/1033/tc3_plc_intro/2529405067.html&id=

            if (isNegative) {

                if (-value >= -3.402823e+38)
                    fittingType = StBuiltinType.REAL;

                else if (-value >= -1.7976931348623158e+308)
                    fittingType = StBuiltinType.LREAL;
                    
                else {
                    
                    if (requestedType)
                        this.C0001(literal, StBuiltinType[requestedType], sourceFile);

                    else
                        this.C0001(literal, "ANY_REAL", sourceFile);

                    return undefined;
                }
            }

            else {

                if (value <= 3.402823e+38)
                    fittingType = StBuiltinType.REAL;

                else if (value <= 1.7976931348623158e+308)
                    fittingType = StBuiltinType.LREAL;
                                       
                else {
                    
                    if (requestedType)
                        this.C0001(literal, StBuiltinType[requestedType], sourceFile);

                    else
                        this.C0001(literal, "ANY_REAL", sourceFile);

                    return undefined;
                }
            }

            let choosenType: StBuiltinType | undefined = fittingType;
            
            if (requestedType) {

                const requestedTypeDetails = StModel.nativeTypes.get(requestedType);
                const fittingTypeDetails = StModel.nativeTypes.get(fittingType);

                if (
                    requestedTypeDetails &&
                    fittingTypeDetails &&
                    requestedTypeDetails.max! < fittingTypeDetails.max!
                ) {
                    this.C0001(literal, StBuiltinType[requestedType], sourceFile);
                    return undefined;
                }

                else {
                    choosenType = requestedType;
                }
            }

            else {
                choosenType = StBuiltinType.LREAL;
            }

            switch (typeHint) {

                case StBuiltinType.REAL:

                    if (value <= 3.402823e+38)
                        choosenType = StBuiltinType.REAL;

                    break;
            }

            const type = new StType();
            type.builtinType = choosenType;

            return type;
        }

        else if (literal.dateLiteral()) {

            const dateLiteral = literal.dateLiteral()!;
            const requestedType = dateLiteral._prefix?.text as StBuiltinType;
            const dateParts = dateLiteral._date!.text!.split("-");

            const year = Number.parseInt(dateParts[0]);
            const month = Number.parseInt(dateParts[1]);
            const day = Number.parseInt(dateParts[2]);
            const dateTime = DateTime.fromObject({ year, month, day });

            if (!dateTime.isValid) {
                this.C0001(literal, StBuiltinType[requestedType], sourceFile);
                return undefined;
            }

            let choosenType: StBuiltinType | undefined;

            switch (requestedType) {
                
                case StBuiltinType.DATE:
                case StBuiltinType.D:

                    if (
                        isDateInRange(
                            year, month, day,
                            1970, 1, 1,
                            2106, 2, 7
                        )
                    ) {
                        choosenType = StBuiltinType.DATE;
                    }

                    else {
                        this.C0001(literal, StBuiltinType[requestedType], sourceFile);
                        return undefined;
                    }

                    break;
                
                case StBuiltinType.LDATE:
                case StBuiltinType.LD:

                    if (
                        isDateInRange(
                            year, month, day,
                            1970, 1, 1,
                            2554, 7, 21
                        )
                    ) {
                        choosenType = StBuiltinType.LDATE;
                    }

                    else {
                        this.C0001(literal, StBuiltinType[requestedType], sourceFile);
                        return undefined;
                    }

                    break;
                
                default:
                    return undefined;
            }

            const type = new StType();
            type.builtinType = choosenType;

            return type;
        }

        else if (literal.timeOfDayLiteral()) {

            const timeOfDayLiteral = literal.timeOfDayLiteral()!;
            const requestedType = timeOfDayLiteral._prefix?.text as StBuiltinType;
            const timeOfDayParts = timeOfDayLiteral._timeOfDay!.text!.split(":");

            const hour = Number.parseInt(timeOfDayParts[0]);
            const minute = Number.parseInt(timeOfDayParts[1]);
            const secondAndMoreParts = (timeOfDayParts[2] ?? "").split(".");
            const secondRaw = Number.parseInt(secondAndMoreParts[0]);
            const second = Number.isNaN(secondRaw) ? 0 : secondRaw;
            const millisecondRaw = Number.parseInt(secondAndMoreParts[1]);

            let millisecond = Number.isNaN(millisecondRaw) ? 0 : millisecondRaw;
            let millisecond_rounded = millisecond;

            if (millisecond > 999) {
                // If input is e.g. 999999999 (nanoseconds), convert to 999.999999 ms
                millisecond = millisecond / Math.pow(10, millisecond.toString().length - 3);
                millisecond_rounded = 999;
            }

            const dateTime = DateTime.fromObject({
                hour,
                minute,
                second,
                millisecond: millisecond_rounded
            });

            if (!dateTime.isValid) {
                this.C0001(literal, StBuiltinType[requestedType], sourceFile);
                return undefined;
            }

            let choosenType: StBuiltinType | undefined;

            switch (requestedType) {
                
                case StBuiltinType.TIME_OF_DAY:
                case StBuiltinType.TOD:

                    if (
                        isTimeOfDayInRange(
                            hour, minute, second, millisecond,
                            23, 59, 59, 999
                        )
                    ) {
                        choosenType = StBuiltinType.TIME_OF_DAY;
                    }

                    else {
                        this.C0001(literal, StBuiltinType[requestedType], sourceFile);
                        return undefined;
                    }

                    break;
                
                case StBuiltinType.LTIME_OF_DAY:
                case StBuiltinType.LTOD:

                    if (
                        isTimeOfDayInRange(
                            hour, minute, second, millisecond,
                            23, 59, 59, 999.999999
                        )
                    ) {
                        choosenType = StBuiltinType.LTIME_OF_DAY;
                    }

                    else {
                        this.C0001(literal, StBuiltinType[requestedType], sourceFile);
                        return undefined;
                    }

                    break;
                
                default:
                    return undefined;
            }

            const type = new StType();
            type.builtinType = choosenType;

            return type;
        }

        else if (literal.dateAndTimeLiteral()) {

            const dateAndTimeLiteral = literal.dateAndTimeLiteral()!;
            const requestedType = dateAndTimeLiteral._prefix?.text as StBuiltinType;
            const dateAndTimeParts = dateAndTimeLiteral._dateAndTime!.text!.split("-");

            const year = Number.parseInt(dateAndTimeParts[0]);
            const month = Number.parseInt(dateAndTimeParts[1]);
            const day = Number.parseInt(dateAndTimeParts[2]);

            const hoursAndMoreParts = dateAndTimeParts[3].split(":");

            const hour = Number.parseInt(hoursAndMoreParts[0]);
            const minute = Number.parseInt(hoursAndMoreParts[1]);

            const secondAndMoreParts = (hoursAndMoreParts[2] ?? "").split(".");

            const secondRaw = Number.parseInt(secondAndMoreParts[0]);
            const second = Number.isNaN(secondRaw) ? 0 : secondRaw;
            const millisecondRaw = Number.parseInt(secondAndMoreParts[1]);

            let millisecond = Number.isNaN(millisecondRaw) ? 0 : millisecondRaw;
            let millisecond_rounded = millisecond;

            if (millisecond > 999) {
                // If input is e.g. 999999999 (nanoseconds), convert to 999.999999 ms
                millisecond = millisecond / Math.pow(10, millisecond.toString().length - 3);
                millisecond_rounded = 999;
            }

            const dateTime = DateTime.fromObject({
                day,
                month,
                year,
                hour,
                minute,
                second,
                millisecond: millisecond_rounded
            });

            if (!dateTime.isValid) {
                this.C0001(literal, StBuiltinType[requestedType], sourceFile);
                return undefined;
            }

            let choosenType: StBuiltinType | undefined;

            switch (requestedType) {
                
                case StBuiltinType.DATE_AND_TIME:
                case StBuiltinType.DT:

                    if (
                        isDateAndTimeInRange(
                            year, month, day, hour, minute, second, millisecond,
                            1970, 1, 1, 0, 0, 0, 0,
                            2106, 2, 7, 6, 28, 15, 0,
                        )
                    ) {
                        choosenType = StBuiltinType.TIME_OF_DAY;
                    }

                    else {
                        this.C0001(literal, StBuiltinType[requestedType], sourceFile);
                        return undefined;
                    }

                    break;
                
                case StBuiltinType.LDATE_AND_TIME:
                case StBuiltinType.LDT:

                    if (
                        isDateAndTimeInRange(
                            year, month, day, hour, minute, second, millisecond,
                            1970, 1, 1, 0, 0, 0, 0,
                            2554, 7, 21, 23, 34, 33, 709.551615
                        )
                    ) {
                        choosenType = StBuiltinType.LTIME_OF_DAY;
                    }

                    else {
                        this.C0001(literal, StBuiltinType[requestedType], sourceFile);
                        return undefined;
                    }

                    break;
                
                default:
                    return undefined;
            }

            const type = new StType();
            type.builtinType = choosenType;

            return type;
        }

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

            if (
                lastMemberDeclaration?.kind === StSymbolKind.VariableDeclaration &&
                memberAccesses.length > 1 &&
                !(
                    lastMemberDeclaration?.variableKind === StVariableScope.Input ||
                    lastMemberDeclaration?.variableKind === StVariableScope.InOut
                )
            )  
            {
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

        let currentType = memberDeclaration.kind === StSymbolKind.EnumMember
            ? memberDeclaration.parent?.type
            : memberDeclaration.typeUsage?.type;

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

                    this.C0035(member, sourceFile);
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

    private CannotEvaluateExpression(expression: ParserRuleContext, sourceFile: StSourceFile) {
        
        const diagnostic = new Diagnostic(
            getContextRange(expression)!,
            `Unable to evaluate expression. Please create a new issue with a minimal sample here: https://github.com/Apollo3zehn/vscode-twincat-st`,
            DiagnosticSeverity.Error
        );

        sourceFile.diagnostics.push(diagnostic);
    }

    private CheckTypes(
        lhsType: StType,
        lhsCtx: ParserRuleContext,
        rhsType: StType,
        rhsCtx: ParserRuleContext,
        isRefAssignment: boolean,
        sourceFile: StSourceFile
    ) {

        if (isRefAssignment) {

            if (!lhsType.isReference) {

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

            if (lhsType.declaration && lhsType.declaration === rhsType.declaration)
                return;
            
            if (lhsType.builtinType && rhsType.builtinType) {

                if (lhsType.builtinType === rhsType.builtinType)
                    return;

                const lhsNativeType = StModel.nativeTypes.get(lhsType.builtinType);
                const rhsNativeType = StModel.nativeTypes.get(rhsType.builtinType);
                
                if (!lhsNativeType || !rhsNativeType)
                    return;

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

                                if (rhsNativeType.signed && !lhsNativeType.signed) {

                                    const warning = new Diagnostic(
                                        getContextRange(rhsCtx)!,
                                        `Implicit conversion from signed type '${StBuiltinType[rhsType.builtinType]}' to unsigned type '${StBuiltinType[lhsType.builtinType]}': Possible change of sign`,
                                        DiagnosticSeverity.Warning
                                    );

                                    sourceFile.diagnostics.push(warning);
                                }

                                else if (!rhsNativeType.signed && lhsNativeType.signed) {

                                    const warning = new Diagnostic(
                                        getContextRange(rhsCtx)!,
                                        `Implicit conversion from unsigned type '${StBuiltinType[rhsType.builtinType]}' to signed type '${StBuiltinType[lhsType.builtinType]}': Possible change of sign`,
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
                                    getContextRange(rhsCtx)!,
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

            // C0032: Cannot convert type '{type}' to type '{type}'
            const lhsTypeId = lhsType
                ? lhsType.getId()
                : getOriginalText(lhsCtx);
            
            const rhsTypeId = rhsType
                ? rhsType.getId()
                : getOriginalText(rhsCtx);

            this.C0032(rhsCtx, rhsTypeId, lhsTypeId, sourceFile);
        }
    }

    // C0001: Constant '{constant}' too large for type '{name}'
    private C0001(literal: LiteralContext, typeName: string, sourceFile: StSourceFile) {
        
        const diagnostic = new Diagnostic(
            getContextRange(literal)!,
            `Constant '${getOriginalText(literal)}' too large for type '${typeName}'`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0001";
        sourceFile.diagnostics.push(diagnostic);
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

    private C0032(
        rhsCtx: ParserRuleContext,
        rhsTypeId: string | undefined,
        lhsTypeId: string | undefined,
        sourceFile: StSourceFile
    ) {

        const diagnostic = new Diagnostic(
            getContextRange(rhsCtx)!,
            `Cannot convert type '${rhsTypeId}' to type '${lhsTypeId}'`,
            DiagnosticSeverity.Error
        );

        diagnostic.code = "C0032";
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
            `'${member.id}' is no input of '${member.declaration?.parent?.id}'`,
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