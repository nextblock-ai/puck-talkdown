import * as vscode from "vscode";
import * as path from "path";
import { TalkdownVariableScope } from "./talkdownVariableScope";

/**
 * Represents an individual stack frame in a Talkdown program's execution context.
 */
export class TalkdownStackFrame {
    private _name: string;
    private _line: number;
    private _source: vscode.Uri;
    private _scope: TalkdownVariableScope;

    /**
     * Creates a Talkdown stack frame with the given properties.
     * @param name - The name of the stack frame.
     * @param line - The line number for the stack frame/marked breakpoint.
     * @param source - The file Uri where the stack frame is located.
     * @param scope - The TalkdownVariableScope for the stack frame.
     */
    constructor(name: string, line: number, source: vscode.Uri, scope: TalkdownVariableScope) {
        this._name = name;
        this._line = line;
        this._source = source;
        this._scope = scope;
    }

    /**
     * Returns the name of the stack frame.
     */
    get name(): string {
        return this._name;
    }

    /**
     * Returns the line number for the stack frame/marked breakpoint.
     */
    get line(): number {
        return this._line;
    }

    /**
     * Returns the file Uri where the stack frame is located.
     */
    get source(): vscode.Uri {
        return this._source;
    }

    /**
     * Returns the TalkdownVariableScope for the stack frame.
     */
    get scope(): TalkdownVariableScope {
        return this._scope;
    }

    /**
     * Returns the file basename for the stack frame.
     */
    get fileBasename(): string {
        return path.basename(this._source.fsPath);
    }
}