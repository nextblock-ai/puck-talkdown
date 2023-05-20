import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient/node';

export default class TalkdownClient {
    public client?: LanguageClient;
    public async activate(context: ExtensionContext): Promise<void> {
        const serverModule = context.asAbsolutePath(path.join('server', 'talkdownServer.js'));

        const serverOptions: ServerOptions = {
            run: {
                module: serverModule,
                transport: TransportKind.ipc,
                options: {}
            },
            debug: {
                module: serverModule,
                transport: TransportKind.ipc,
                options: { execArgv: ['--nolazy', '--inspect=6009'] }
            }
        };
    
        const clientOptions: LanguageClientOptions = {
            documentSelector: [{ scheme: 'file', language: 'talkdown' }],
            synchronize: {
                fileEvents: workspace.createFileSystemWatcher('**/*.td')
            }
        };
    
        this.client = new LanguageClient('Talkdown', serverOptions, clientOptions);
        await this.client.start();
    }

    public deactivate(): Thenable<void> | undefined {
        return undefined;
    }
}   
