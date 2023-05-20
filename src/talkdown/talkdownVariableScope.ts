import { Variable } from 'vscode-debugadapter';

export interface TalkdownVariable {
    name: string;
    value: any;
    type: string;
}

export class TalkdownVariableScope {
    private variables: Map<string, TalkdownVariable>;

    constructor() {
        this.variables = new Map<string, TalkdownVariable>();
    }

    public hasVariable(name: string): boolean {
        return this.variables.has(name);
    }

    public getVariable(name: string): TalkdownVariable | undefined {
        return this.variables.get(name);
    }

    public getAllVariables(): IterableIterator<TalkdownVariable> {
        return this.variables.values();
    }

    public setVariable(name: string, value: any, type: string): void {
        const variable: TalkdownVariable = { name: name, value: value, type: type };
        this.variables.set(name, variable);
    }

    public toVSCodeVariables(): Variable[] {
        const vscodeVariables: Variable[] = [];
        for (const variable of this.getAllVariables()) {
            vscodeVariables.push({
                name: variable.name,
                value: this.formatVariableValue(variable),
                type: variable.type,
            } as any);
        }
        return vscodeVariables;
    }

    private formatVariableValue(variable: TalkdownVariable): string {
        // Customize this function based on how you'd like to display variable values in the debug output
        return `${variable.type}: ${variable.value}`;
    }
}