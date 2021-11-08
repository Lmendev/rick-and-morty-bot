import { ICommand } from "./ICommand"
import { getCharacter } from "../../services/character"

export class SettingsCommand implements ICommand {
    name: string
    
    constructor(){
        this.name = "settings"
    }

    public execute(): void{
        console.log(getCharacter(1));
        console.log('about executed')
    }
}