import { ICommand } from "./ICommand"
import { getStartGreeting } from "../../services/bot"

export class StartCommand implements ICommand {
    name: string
    
    constructor(){
        this.name = "start"
    }

    public execute(): void{
        const startGreeting = getStartGreeting();
        console.log(startGreeting)
        
    }
}