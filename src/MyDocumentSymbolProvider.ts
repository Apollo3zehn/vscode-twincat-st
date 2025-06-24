import * as vscode from 'vscode';
import { CharStream, CommonTokenStream } from "antlr4ng";
import { StructuredTextLexer } from "./generated/StructuredTextLexer.js";
import {
    StructuredTextParser,
    VarDeclContext
} from "./generated/StructuredTextParser.js";
import { StructuredTextVisitor } from './generated/StructuredTextVisitor.js';

export class MyDocumentSymbolProvider implements vscode.DocumentSymbolProvider {

    provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.SymbolInformation[] | vscode.DocumentSymbol[]> {

        let symbols: vscode.DocumentSymbol[] = [];

        const inputStream = CharStream.fromString(document.getText());
        const lexer = new StructuredTextLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new StructuredTextParser(tokenStream);
        const tree = parser.compilationUnit();

        // Visit the parse tree and collect variable symbols
        const visitor = new MyVisitor(symbols);
        tree.accept(visitor);

        return symbols;
    }
}

class MyVisitor extends StructuredTextVisitor<void> {
    private _symbols: vscode.DocumentSymbol[];

    constructor(symbols: vscode.DocumentSymbol[]) {
        super();
        this._symbols = symbols;
    }

    public override visitVarDecl = (ctx: VarDeclContext): void => {
        const idToken = ctx.ID().symbol;
        const name = idToken.text ?? "<unknown>";
        const line = idToken.line - 1;
        const char = idToken.column;
        const range = new vscode.Range(line, char, line, char + name.length);

        const symbol = new vscode.DocumentSymbol(
            name,
            "Variable",
            vscode.SymbolKind.Variable,
            range,
            range
        );
        this._symbols.push(symbol);
    }
}