import { ICommand } from "./ICommand"
import { getCharacter, getRandomCharacter } from "../../services/character"
import { bot } from "../../Bot";
import TelegramBot from "node-telegram-bot-api";

export class RandomCommand implements ICommand {
    name: string
    
    constructor(){
        this.name = "random"
    }

    public async execute(msg: TelegramBot.Message | TelegramBot.CallbackQuery): Promise<void>{
        const character = await getRandomCharacter();

        const statucIcon:string = character.status === 'Alive'? "🟢": character.status === 'Dead'? "🔴": "⚫"
        const parse_mode: TelegramBot.ParseMode = "HTML"

        if ('message' in msg && msg.message){
            bot.platform.sendPhoto(msg.message.chat.id, character.image, { 
                caption: `<b>${character.name}</b>\n${statucIcon} ${character.status}`,
                parse_mode
            })
        }
    }
}