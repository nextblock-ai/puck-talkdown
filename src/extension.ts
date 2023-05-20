import * as vscode from 'vscode';
import TalkdownClient from './talkdownClient';
import { TalkdownDebugSession } from './debugAdapter';

let talkdownClient: TalkdownClient;
let talkdownDebugSession: TalkdownDebugSession;

export function activate(context: vscode.ExtensionContext): void {
	talkdownClient = new TalkdownClient();
	talkdownClient.activate(context);

	context.subscriptions.push(
		vscode.debug.registerDebugAdapterDescriptorFactory('talkdown', {
			createDebugAdapterDescriptor: (session: vscode.DebugSession) => {
				if (!talkdownDebugSession) {
					talkdownDebugSession = new TalkdownDebugSession();
				}
				return new vscode.DebugAdapterInlineImplementation(talkdownDebugSession as any);
			},
		}),
	);

	console.log('Talkdown extension is now active!');
}

export function deactivate(): Thenable<void> | undefined {
	if (!talkdownClient) {
		return undefined;
	}
	return talkdownClient.deactivate();
}