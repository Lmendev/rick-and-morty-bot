import { ICommand } from "./ICommand"
import { Character } from "../../services/character"

export class AboutCommand implements ICommand {
    name: string
    
    constructor(){
        this.name = "about"
    }

    public execute(): void{
        console.log(new Character().getCharacter(1));
        console.log('about executed')
    }
}