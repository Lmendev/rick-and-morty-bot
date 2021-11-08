import { ICommand } from "./commands/ICommand"

import { AboutCommand, } from "./commands/AboutCommand";
import { StartCommand } from "./commands/StartCommand";

export class Terminal {
    private commands: ICommand[];

    constructor(){
        this.commands = []

        this.setCommand(new AboutCommand());
        this.setCommand(new StartCommand());
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