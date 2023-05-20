import * as vscode from 'vscode';

export class TalkdownBreakpoint {
    private _id: number;
    private _uri: vscode.Uri;
    private _line: number;
    private _enabled: boolean;
    private _condition: string | undefined;

    constructor(id: number, uri: vscode.Uri, line: number, enabled: boolean = true, condition?: string) {
        this._id = id;
        this._uri = uri;
        this._line = line;
        this._enabled = enabled;
        this._condition = condition;
    }

    public get id(): number {
        return this._id;
    }

    public get uri(): vscode.Uri {
        return this._uri;
    }

    public get line(): number {
        return this._line;
    }

    public get enabled(): boolean {
        return this._enabled;
    }

    public set enabled(value: boolean) {
        this._enabled = value;
    }

    public get condition(): string | undefined {
        return this._condition;
    }

    public set condition(value: string | undefined) {
        this._condition = value;
    }

    public static fromVSCodeBreakpoint(breakpoint: vscode.Breakpoint, id: number): TalkdownBreakpoint {
        if (breakpoint instanceof vscode.SourceBreakpoint) {
            const uri = breakpoint.location.uri;
            const line = breakpoint.location.range.start.line;
            const enabled = breakpoint.enabled;
            const condition = breakpoint.condition;
            return new TalkdownBreakpoint(id, uri, line, enabled, condition);
        } else {
            throw new Error('Only SourceBreakpoint is supported for TalkdownBreakpoint.');
        }
    }
}