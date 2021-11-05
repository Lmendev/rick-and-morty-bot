import { ICommand } from "./commands/ICommand"

import { AboutCommand } from "./commands/AboutCommand";

export class Terminal {
    private commands: ICommand[];

    constructor(){
        this.commands = []

        this.setCommand(new AboutCommand());
    }

    public setCommand(command: ICommand): void{
        this.commands.push(command);
    }

    public executeCommand(commandName: string): void{
        let command: ICommand | undefined;

        command = this.commands.find(({name}) => name === commandName);

        command?.execute();
    }
}