import { Diagnostic, DiagnosticCollection, DiagnosticSeverity, DiagnosticTag, languages, TextDocument } from "vscode";
import { StAccessModifier, StModel, StSymbolKind } from "../core.js";
import { PrimaryContext } from "../generated/StructuredTextParser.js";
import { getContextRange, getTokenRange } from "../utils.js";

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

        for (const symbol of sourceFile.symbolMap.values()) {

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

            // C0077: Unknown type: '{type}'
            if (
                symbol.kind === StSymbolKind.TypeUsage &&
                !(
                    symbol.builtinType ||
                    symbol.declaration ||
                    symbol.isArray ||
                    symbol.isPointer ||
                    symbol.isReference
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

            // Variable usage
            if (
                symbol.kind === StSymbolKind.VariableUsage &&
                symbol.context instanceof PrimaryContext &&
                symbol.context.derefOrIndex()
            ) {
                let currentType = symbol.declaration?.type;
                const derefOrIndexList = symbol.context.derefOrIndex();

                for (const derefOrIndex of derefOrIndexList) {

                    if (!currentType)
                        return;

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

                        currentType = currentType.baseType;
                    }
                    
                    // C0047: Cannot apply indexing with [] to an expression of type '{type}'
                    else if (derefOrIndex.arrayIndex()) {

                        if (!currentType.isArray) {

                            const diagnostic = new Diagnostic(
                                getContextRange(derefOrIndex.arrayIndex()) ?? symbol.selectionRange ?? symbol.range,
                                `Cannot apply indexing with [] to an expression of type '{${currentType.id}}'`,
                                DiagnosticSeverity.Error
                            );

                            diagnostic.code = "C0047";
                            diagnostics.push(diagnostic);

                            break;
                        }

                        currentType = currentType.baseType;
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