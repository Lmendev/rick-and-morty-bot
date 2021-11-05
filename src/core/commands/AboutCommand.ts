import { ICommand } from "./ICommand"
import { getCharacter } from "../../services/character"

export class AboutCommand implements ICommand {
    name: string
    
    constructor(){
        this.name = "about"
    }

    public execute(): void{
        console.log(getCharacter(1));
        console.log('about executed')
    }
}