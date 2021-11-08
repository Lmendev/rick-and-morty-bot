import { ICommand } from "./commands/ICommand"

import { AboutCommand, } from "./commands/AboutCommand";
import { StartCommand } from "./commands/StartCommand";
import { RandomCommand } from "./commands/RandomCommand";

export class Terminal {
    private commands: ICommand[];

    constructor(){
        this.commands = []

        this.setCommand(new StartCommand());
        this.setCommand(new AboutCommand());
        this.setCommand(new RandomCommand());
    }

    public setCommand(command: ICommand): void{
        this.commands.push(command);
    }

    public executeCommand(commandName: string, options?:any): void{
        let command: ICommand | undefined;

        command = this.commands.find(({name}) => name === commandName);

        command?.execute(options);
    }
}