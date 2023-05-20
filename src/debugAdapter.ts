import { Logger, logger } from 'vscode-debugadapter';
import { DebugProtocol } from 'vscode-debugprotocol';
import * as vscode from 'vscode';
import { TalkdownRuntime } from './talkdown/talkdownRuntime';

export class TalkdownDebugSession extends vscode.DebugSession {
    private _runtime: TalkdownRuntime;
    private _variableHandles = new vscode.VariableHandles<{}>();
    private _breakpoints: Map<string, vscode.Breakpoint[]> = new Map();

    public constructor(logger?: Logger) {
        super(logger || logger.Console);
        this._runtime = new TalkdownRuntime();

        this.initBreakpoints();
        this.initRuntime();
    }

    protected initializeRequest(response: DebugProtocol.InitializeResponse, args: DebugProtocol.InitializeRequestArguments): void {
        // Handle extension initialization and reply to client
        // Initialize your debugger extension features here
    }

    protected launchRequest(response: DebugProtocol.LaunchResponse, args: DebugProtocol.LaunchRequestArguments): void {
        // Handle the start of a debugging session
    }

    protected setBreakPointsRequest(response: DebugProtocol.SetBreakpointsResponse, args: DebugProtocol.SetBreakpointsArguments): void {
        // Handle breakpoint setting
    }

    protected customRequest(command: string, response: DebugProtocol.Response, args: any): void {
        // Handle any custom debugger protocol requests
    }

    /* Implement additional debug adapter protocol request handlers as required */

    private initBreakpoints(): void {
        // Initialize your breakpoints handling
    }

    private initRuntime(): void {
        // Initialize your runtime for executing Talkdown programs
    }
}

// This should start the implementation of the debug adapter for the Talkdown extension
const debugAdapter = new TalkdownDebugSession();
debugAdapter.start();