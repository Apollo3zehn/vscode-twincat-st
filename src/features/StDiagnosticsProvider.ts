import { Diagnostic, DiagnosticCollection, DiagnosticSeverity, DiagnosticTag, languages, TextDocument } from "vscode";
import { StAccessModifier, StModel, StSymbolKind } from "../core.js";
import { AssignmentContext, PropertyContext } from "../generated/StructuredTextParser.js";
import { getTypeOfType } from "../utils.js";

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
        const seen = new Set<string>();

        for (const currentSourceFile of this.model.sourceFileMap.values()) {

            for (const globalObject of currentSourceFile.globalObjects.values()) {

                if (seen.has(globalObject.id)) {

                    if (currentSourceFile !== sourceFile)
                        continue;

                    const diagnostic = new Diagnostic(
                        globalObject.selectionRange ?? globalObject.range,
                        `Object name '${globalObject.id}' already used in this application`,
                        DiagnosticSeverity.Error
                    );

                    diagnostic.code = "SA0027";
                    diagnostics.push(diagnostic);
                }
                
                else {
                    seen.add(globalObject.id);
                }
            }
        }

        for (const symbol of sourceFile.symbolMap.values()) {

            if (
                symbol.kind === StSymbolKind.VariableDeclaration &&
                symbol.typeUsage?.declaration
            ) {
                const typeUsage = symbol.typeUsage;
                const typeKind = typeUsage.declaration!.kind;

                if (!
                    (
                        typeKind === StSymbolKind.Interface ||
                        typeKind === StSymbolKind.FunctionBlock ||
                        typeKind === StSymbolKind.Enum ||
                        typeKind === StSymbolKind.Struct
                    )
                ) {
                    // C0177: '{name}' is of type {name} and cannot be instantiated
                    const diagnostic = new Diagnostic(
                        typeUsage.selectionRange ?? typeUsage.range,
                        `'${typeUsage.id}' is of type '${getTypeOfType(typeKind)}' and cannot be instantiated`,
                        DiagnosticSeverity.Error
                    );
                    
                    diagnostic.code = "C0177";
                    diagnostics.push(diagnostic);
                }
            }

            if (
                (
                    (symbol.kind === StSymbolKind.VariableDeclaration || symbol.kind === StSymbolKind.Property) &&
                    symbol.parent?.methods?.has(symbol.id)
                ) ||
                (
                    symbol.kind === StSymbolKind.Method &&
                    symbol.parent?.variablesAndProperties?.has(symbol.id)
                )
            ) {
                const diagnostic = new Diagnostic(
                    symbol.selectionRange ?? symbol.range,
                    `Amiguous use of name '${symbol.id}'`,
                    DiagnosticSeverity.Warning
                );

                diagnostics.push(diagnostic);
            }
            
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
                // Unused variable/method/function hints
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

            if (symbol.kind === StSymbolKind.VariableUsage) {

                if (symbol.declaration) {

                    if (symbol.declaration.kind === StSymbolKind.Property) {

                        const isAssignment = symbol.context?.parent?.parent instanceof AssignmentContext;

                        if (!isAssignment) {

                            const propertyCtx = symbol.declaration.context as PropertyContext;
                            const propertyBodyCtx = propertyCtx.propertyBody();
                            const getter = propertyBodyCtx.getter();

                            if (!getter) {
                                
                                // C0143: The property '{name}' cannot be used in this context because it lacks the get accessor
                                const diagnostic = new Diagnostic(
                                    symbol.selectionRange ?? symbol.range,
                                    `The property '${symbol.id}' cannot be used in this context because it lacks the get accessor`,
                                    DiagnosticSeverity.Error
                                );

                                diagnostic.code = "C0143";
                                diagnostics.push(diagnostic);
                            }
                        }
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

        this._diagnosticCollection.set(
            document.uri,
            [...diagnostics, ...sourceFile.diagnostics]
        );
    }

    public dispose() {
        this._diagnosticCollection.dispose();
    }
}