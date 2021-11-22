import { ICommand } from "./commands/ICommand"

import { AboutCommand, } from "./commands/AboutCommand";
import { StartCommand } from "./commands/StartCommand";
import { RandomCommand } from "./commands/RandomCommand";
import { underDevelopment } from "../controllers";
import { UnderDevelopmentCommand } from "./commands/UnderDevelopmentCommand";
import { InlineQueryCommand } from "./commands/InlineQueryCommand";

export class Terminal {
    private commands: ICommand[];

    constructor(){
        this.commands = []

        this.setCommand(new StartCommand());
        this.setCommand(new AboutCommand());
        this.setCommand(new RandomCommand());
        this.setCommand(new UnderDevelopmentCommand());
        this.setCommand(new InlineQueryCommand());
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