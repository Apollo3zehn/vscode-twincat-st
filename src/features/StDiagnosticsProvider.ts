import { Diagnostic, DiagnosticCollection, DiagnosticSeverity, DiagnosticTag, languages, TextDocument } from "vscode";
import { StAccessModifier, StModel, StSymbolKind } from "../core.js";
import { ExprContext, PrimaryContext } from "../generated/StructuredTextParser.js";
import { concatIterators, getContextRange, getTokenRange } from "../utils.js";

export class StDiagnosticsProvider {
    private _diagnosticCollection: DiagnosticCollection;

    constructor(
        private model: StModel
    ) {
        this._diagnosticCollection = languages.createDiagnosticCollection("twincat-st");
    }

    public updateDiagnostics(document: TextDocument): void {

        const diagnostics: Diagnostic[] = [];
        const sourceFile = this.model.sourceFileMap.get(document.uri.toString());
        
        if (!sourceFile) {
            this._diagnosticCollection.set(document.uri, []);
            return;
        }

        // TODO: Do not make full evaluation every file change
        for (const currentSourceFile of this.model.sourceFileMap.values()) {
            
            const seen = new Set<string>();

            const iterator = concatIterators(
                currentSourceFile.types,
                currentSourceFile.functions,
            )

            for (const typeOrFunction of iterator) {

                if (seen.has(typeOrFunction.id)) {

                    if (currentSourceFile !== sourceFile)
                        continue;

                    const diagnostic = new Diagnostic(
                        typeOrFunction.selectionRange ?? typeOrFunction.range,
                        `Object name '${typeOrFunction.id}' already used in this application`,
                        DiagnosticSeverity.Error
                    );

                    diagnostic.code = "SA0027";
                    diagnostics.push(diagnostic);
                }
                
                else {
                    seen.add(typeOrFunction.id);
                }
            }
        }

        for (const symbol of sourceFile.symbolMap.values()) {

            // C0142: A local variable named 'name' is already defined in 'scope'
            if (symbol.variables) {

                const seen = new Set<string>();

                for (const variable of symbol.variables) {

                    if (seen.has(variable.id)) {

                        const diagnostic = new Diagnostic(
                            variable.selectionRange ?? variable.range,
                            `A local variable named '${variable.id}' is already defined in '${variable.parent?.id}'`,
                            DiagnosticSeverity.Error
                        );

                        diagnostic.code = "C0142";
                        diagnostics.push(diagnostic);
                    }
                    
                    else {
                        seen.add(variable.id);
                    }
                }
            }

            // Unused variable/method/function diagnostics
            if (
                (
                    symbol.kind === StSymbolKind.VariableDeclaration ||
                    symbol.kind === StSymbolKind.Method ||
                    symbol.kind === StSymbolKind.Function
                ) &&
                symbol.accessModifier === StAccessModifier.Private &&
                (
                    !symbol.references ||
                    symbol.references.length === 0
                )
            ) {
                const diagnostic = new Diagnostic(
                    symbol.selectionRange ?? symbol.range,
                    `'${symbol.id!}' is never used.`,
                    DiagnosticSeverity.Hint
                );

                diagnostic.tags = [DiagnosticTag.Unnecessary];
                diagnostics.push(diagnostic);
            }

            if (symbol.kind === StSymbolKind.TypeUsage) {

                const isArrayOrPointerOrReference = symbol.isArray || symbol.isPointer || symbol.isReference;

                // C0077: Unknown type: '{type}'
                if (
                    !(
                        symbol.builtinType ||
                        symbol.declaration ||
                        isArrayOrPointerOrReference
                    )
                ) {
                    const diagnostic = new Diagnostic(
                        symbol.selectionRange ?? symbol.range,
                        `Unknown type: '${symbol.id ?? "?"}'`,
                        DiagnosticSeverity.Error
                    );
                    
                    diagnostic.code = "C0077";
                    diagnostics.push(diagnostic);
                }

                // C0261: A reference type is not allowed as base type of an array, pointer, or reference
                if (isArrayOrPointerOrReference && symbol.underlyingTypeUsage) {

                    const underlyingTypeUsage = symbol.underlyingTypeUsage;

                    if (underlyingTypeUsage.isReference) {

                        const diagnostic = new Diagnostic(
                            underlyingTypeUsage.selectionRange ?? underlyingTypeUsage.range,
                            "A reference type is not allowed as base type of an array, pointer, or reference",
                            DiagnosticSeverity.Error
                        );
                        
                        diagnostic.code = "C0261";
                        diagnostics.push(diagnostic);
                    }
                }
            }

            // Variable usage
            if (
                symbol.kind === StSymbolKind.VariableUsage &&
                symbol.context instanceof PrimaryContext &&
                symbol.context.derefOrIndex()
            ) {
                let currentType = symbol.declaration?.typeUsage;
                const derefOrIndexList = symbol.context.derefOrIndex();

                for (const derefOrIndex of derefOrIndexList) {

                    if (!currentType)
                        break;

                    // C0064: Dereference requires a pointer
                    if (derefOrIndex.CARET()) {

                        if (!currentType.isPointer) {

                            const diagnostic = new Diagnostic(
                                getTokenRange(derefOrIndex.CARET()?.symbol) ?? symbol.selectionRange ?? symbol.range,
                                `Dereference requires a pointer`,
                                DiagnosticSeverity.Error
                            );

                            diagnostic.code = "C0064";
                            diagnostics.push(diagnostic);

                            break;
                        }

                        currentType = currentType.underlyingTypeUsage;
                    }
                    
                    // C0047: Cannot apply indexing with [] to an expression of type '{type}'
                    else if (derefOrIndex.arrayIndex()) {

                        if (!currentType.isArray) {

                            const diagnostic = new Diagnostic(
                                getContextRange(derefOrIndex.arrayIndex()) ?? symbol.selectionRange ?? symbol.range,
                                `Cannot apply indexing with [] to an expression of type '${currentType.id}'`,
                                DiagnosticSeverity.Error
                            );

                            diagnostic.code = "C0047";
                            diagnostics.push(diagnostic);

                            break;
                        }

                        currentType = currentType.underlyingTypeUsage;
                    }
                }
            }

            if (
                symbol.kind === StSymbolKind.VariableUsage ||
                symbol.kind === StSymbolKind.CallStatement
            ) {

                if (symbol.declaration) {

                    const isCall =
                        symbol.kind === StSymbolKind.CallStatement ||
                        symbol.context.parent?.parent instanceof ExprContext && symbol.context.parent.parent.LPAREN();

                    if (!isCall)
                        continue;
                    
                    let typeKind: StSymbolKind | undefined;

                    switch (symbol.declaration.kind) {

                        case StSymbolKind.Program:
                        case StSymbolKind.Function:
                        case StSymbolKind.Method:
                            continue;

                        case StSymbolKind.Gvl:
                        case StSymbolKind.Enum:
                            
                            // C0036: Cannot call object of type 'VAR_GLOBAL'
                            const diagnostic_1 = new Diagnostic(
                                symbol.selectionRange ?? symbol.range,
                                "Cannot call object of type 'VAR_GLOBAL'",
                                DiagnosticSeverity.Error
                            );

                            diagnostic_1.code = "C0036";
                            diagnostics.push(diagnostic_1);

                            break;
                        
                        case StSymbolKind.Struct:

                            // C0036: Cannot call object of type 'TYPE'
                            const diagnostic_2 = new Diagnostic(
                                symbol.selectionRange ?? symbol.range,
                                "Cannot call object of type 'TYPE'",
                                DiagnosticSeverity.Error
                            );

                            diagnostic_2.code = "C0036";
                            diagnostics.push(diagnostic_2);

                            break;
                        
                        case StSymbolKind.VariableDeclaration:
                        case StSymbolKind.EnumMember:
                            
                            typeKind = symbol.declaration.typeUsage?.declaration?.kind;    
                            
                            if (typeKind === StSymbolKind.FunctionBlock)
                                continue;

                            // C0035: Program name, function or function block instance expected instead of '{name}'
                            const diagnostic_3 = new Diagnostic(
                                symbol.selectionRange ?? symbol.range,
                                `Program name, function or function block instance expected instead of '${symbol.id}'`,
                                DiagnosticSeverity.Error
                            );

                            diagnostic_3.code = "C0035";
                            diagnostics.push(diagnostic_3);

                            break;
                    
                        case StSymbolKind.FunctionBlock:

                            // C0080: Function block '{name}' must be instantiated to be accessed
                            const diagnostic_4 = new Diagnostic(
                                symbol.selectionRange ?? symbol.range,
                                `Function block '${symbol.id}' must be instantiated to be accessed`,
                                DiagnosticSeverity.Error
                            );

                            diagnostic_4.code = "C0080";
                            diagnostics.push(diagnostic_4);

                            break;
                    }
                }

                else {
                    // C0046: Identifier '{id}' not defined
                    const diagnostic = new Diagnostic(
                        symbol.selectionRange ?? symbol.range,
                        `Identifier '${symbol.id}' not defined`,
                        DiagnosticSeverity.Error
                    );

                    diagnostic.code = "C0046";
                    diagnostics.push(diagnostic);
                }
            }
        }

        // Statements
        for (const statementContext of sourceFile.statements) {
            
            const assignment = statementContext.assignment();

            if (assignment) {
                const lhsMember = assignment.memberQualifier().primary();
                const rhsMember = assignment.expr().memberQualifier()?.primary();

                // TODO: evaluate expressions recursively
                if (!rhsMember)
                    continue;

                const lhsSymbol = sourceFile.symbolMap.get(lhsMember);
                const rhsSymbol = sourceFile.symbolMap.get(rhsMember);

                const lhsTypeUsage = lhsSymbol?.declaration?.typeUsage;
                const rhsTypeUsage = rhsSymbol?.declaration?.typeUsage;

                const operatorCtx = assignment.assignmentOperator();
                const operatorText = operatorCtx.getText();
                const isRefAssignment = operatorText === 'REF=';

                if (isRefAssignment) {

                    if (!lhsTypeUsage?.isReference) {
                        const diagnostic = new Diagnostic(
                            lhsSymbol!.selectionRange ?? lhsSymbol!.range,
                            "Reference assign is only allowed to variables of reference type",
                            DiagnosticSeverity.Error
                        );

                        diagnostic.code = "C0140";
                        diagnostics.push(diagnostic);
                    }

                }
            }
        }

        this._diagnosticCollection.set(document.uri, diagnostics);
    }

    public dispose() {
        this._diagnosticCollection.dispose();
    }
}