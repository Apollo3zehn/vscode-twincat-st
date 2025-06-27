import { Diagnostic, DiagnosticCollection, DiagnosticSeverity, DiagnosticTag, languages, TextDocument } from "vscode";
import { SourceFile, StSymbolKind } from "../core.js";

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

            if (
                symbol.kind === StSymbolKind.VariableDeclaration &&
                (
                    symbol.name!.toLowerCase() === "bInitRetains" ||
                    symbol.name!.toLowerCase() === "bInCopyCode"
                )
            ) {
                continue;
            }

            if (
                (
                    symbol.kind === StSymbolKind.VariableDeclaration ||
                    symbol.kind === StSymbolKind.Method ||
                    symbol.kind === StSymbolKind.Function
                ) &&
                (
                    !symbol.referencingSymbols ||
                    symbol.referencingSymbols.length === 0
                )
            ) {
                const diagnostic = new Diagnostic(
                    symbol.range,
                    `Variable '${symbol.name!}' is never used.`,
                    DiagnosticSeverity.Hint
                );

                diagnostic.tags = [DiagnosticTag.Unnecessary];
                diagnostics.push(diagnostic);
            }
        }

        this._diagnosticCollection.set(document.uri, diagnostics);
    }

    public dispose() {
        this._diagnosticCollection.dispose();
    }
}