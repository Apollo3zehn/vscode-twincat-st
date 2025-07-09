import { Diagnostic, DiagnosticCollection, DiagnosticSeverity, DiagnosticTag, languages, TextDocument } from "vscode";
import { SourceFile, StAccessModifier, StSymbolKind } from "../core.js";

export class StDiagnosticsProvider {
    private _diagnosticCollection: DiagnosticCollection;

    constructor(
        private model: Map<string, SourceFile>
    ) {
        this._diagnosticCollection = languages.createDiagnosticCollection("twincat-st");
    }

    public updateDiagnostics(document: TextDocument): void {

        const diagnostics: Diagnostic[] = [];
        const sourceFile = this.model.get(document.uri.toString());
        
        if (!sourceFile) {
            this._diagnosticCollection.set(document.uri, []);
            return;
        }

        for (const symbol of sourceFile.symbolMap.values()) {

            // --- Unused variable/method/function diagnostics ---
            if (
                (
                    symbol.kind === StSymbolKind.Variable ||
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
                    `'${symbol.name!}' is never used.`,
                    DiagnosticSeverity.Hint
                );

                diagnostic.tags = [DiagnosticTag.Unnecessary];
                diagnostics.push(diagnostic);
            }

            // --- Type could not be resolved diagnostics ---
            if (
                symbol.kind === StSymbolKind.TypeUsage &&
                (!symbol.isBuiltinType && !symbol.declaration)
            ) {
                const diagnostic = new Diagnostic(
                    symbol.selectionRange ?? symbol.range,
                    `Type '${symbol.name ?? "?"}' could not be resolved.`,
                    DiagnosticSeverity.Error
                );
                
                diagnostics.push(diagnostic);
            }
        }

        this._diagnosticCollection.set(document.uri, diagnostics);
    }

    public dispose() {
        this._diagnosticCollection.dispose();
    }
}