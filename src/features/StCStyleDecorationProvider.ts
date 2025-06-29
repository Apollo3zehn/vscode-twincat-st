import { DecorationOptions, Position, Range, TextDocument, TextEditor, TextEditorDecorationType, ThemeColor, window } from "vscode";

export class StCStyleDecorationProvider {

    private endDecorationType: TextEditorDecorationType;
    private thenDecorationType: TextEditorDecorationType;
    private varDecorationType: TextEditorDecorationType;
    private methodDecorationType: TextEditorDecorationType;

    constructor() {

        this.endDecorationType = window.createTextEditorDecorationType({
            before: {
                contentText: '}',
                color: new ThemeColor('editor.foreground'),
                margin: '0 0.2em 0 0'
            },
            textDecoration: 'none; display: none;', // Hide the actual text
        });

        this.thenDecorationType = window.createTextEditorDecorationType({
            before: {
                contentText: '{',
                color: new ThemeColor('editor.foreground'),
                margin: '0 0.2em 0 0'
            },
            textDecoration: 'none; display: none;', // Hide the actual text
        });

        this.varDecorationType = window.createTextEditorDecorationType({
            after: {
                contentText: ' {',
                color: new ThemeColor('editor.foreground'),
                margin: '0 0 0 0.2em'
            }
        });

        this.methodDecorationType = window.createTextEditorDecorationType({
            after: {
                contentText: ' {',
                color: new ThemeColor('editor.foreground'),
                margin: '0 0 0 0.2em'
            }
        });
    }

    public provideDecorations(document: TextDocument, editor: TextEditor) {

        const endDecorations: DecorationOptions[] = [];
        const thenDecorations: DecorationOptions[] = [];
        const varDecorations: DecorationOptions[] = [];
        const methodDecorations: DecorationOptions[] = [];

        const endRegex = /\b(END_SET|END_GET|END_CASE|END_WHILE|END_REPEAT|END_FOR|END_IF|END_VAR|END_METHOD|END_PROPERTY|END_FUNCTION_BLOCK|END_FUNCTION|END_INTERFACE|END_PROGRAM);?/g;
        const thenRegex = /\bTHEN\b/g;
        const varRegex = /^\s*(VAR|VAR_INPUT|VAR_OUTPUT|VAR_IN_OUT|VAR_TEMP|VAR_GLOBAL|VAR_EXTERNAL|VAR_STAT|VAR_INST)\b.*$/;
        const methodRegex = /^\s*(METHOD|FUNCTION_BLOCK|FUNCTION|INTERFACE|PROGRAM|GET|SET)\b.*$/;

        // Get all selected lines (as a Set for fast lookup)
        const selectedLines = new Set<number>();

        for (const selection of editor.selections) {
            for (let i = selection.start.line; i <= selection.end.line; i++) {
                selectedLines.add(i);
            }
        }

        for (let line = 0; line < document.lineCount; line++) {

            const text = document.lineAt(line).text;
            let match: RegExpExecArray | null;

            // END_... decorations
            while ((match = endRegex.exec(text))) {

                if (!selectedLines.has(line)) {
                    const start = new Position(line, match.index);
                    const end = new Position(line, match.index + match[0].length);

                    endDecorations.push({ range: new Range(start, end) });
                }
            }

            // THEN decorations
            while ((match = thenRegex.exec(text))) {

                if (!selectedLines.has(line)) {
                    const start = new Position(line, match.index);
                    const end = new Position(line, match.index + match[0].length);
                    
                    thenDecorations.push({ range: new Range(start, end) });
                }
            }

            // VAR... decorations
            if (varRegex.test(text) && !selectedLines.has(line)) {
                const endPos = new Position(line, text.length);
                varDecorations.push({ range: new Range(endPos, endPos) });
            }

            // METHOD ... decorations (add " {" at end of METHOD line)
            if (methodRegex.test(text) && !selectedLines.has(line)) {
                const endPos = new Position(line, text.length);
                methodDecorations.push({ range: new Range(endPos, endPos) });
            }
        }

        editor.setDecorations(this.endDecorationType, endDecorations);
        editor.setDecorations(this.thenDecorationType, thenDecorations);
        editor.setDecorations(this.varDecorationType, varDecorations);
        editor.setDecorations(this.methodDecorationType, methodDecorations);
    }
}