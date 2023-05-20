import {
    createConnection,
    TextDocuments,
    ProposedFeatures,
    InitializeParams,
    TextDocumentSyncKind,
    InitializeResult
} from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';

// Create a connection for the server using Node's IPC as a transport
const connection = createConnection(ProposedFeatures.all);

// Create a manager for open text documents
const documents = new TextDocuments(TextDocument);

// Initialize the server
connection.onInitialize((params: InitializeParams) => {
    const capabilities = params.capabilities;

    const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental
            // Other capabilities will be added here as the server implementation progresses
        }
    };
    return result;
});

// Validate a Talkdown document
function validateTextDocument(textDocument: TextDocument): void {
    // TODO: Add validation and linting logic for Talkdown documents
}

// Listen for events related to the opened documents
documents.onDidChangeContent(change => {
    // Validate the document when its content changes
    validateTextDocument(change.document);
});

// Begin listening for document events
documents.listen(connection);

// Start the connection to the client
connection.listen();