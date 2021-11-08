import { ICommand } from "./ICommand"
import { getCharacter } from "../../services/character"

export class HelpCommand implements ICommand {
    name: string
    
    constructor(){
        this.name = "help"
    }

    public execute(): void{
        console.log(getCharacter(1));
        console.log('about executed')
    }
}