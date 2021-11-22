import { ICommand } from "./ICommand"
import { getCharacter } from "../../services/character"
import { CallbackQuery, Message } from "node-telegram-bot-api"
import { bot } from "../../Bot"
import { getAboutMessage } from "../../services/bot"

export class AboutCommand implements ICommand {
    name: string
    
    constructor(){
        this.name = "about"
    }

    public execute(msg:Message | CallbackQuery): void{
        const aboutMessage = getAboutMessage()

        if ('chat' in msg){
            bot.platform.sendPhoto(msg.chat.id, aboutMessage.photo, aboutMessage)
        }else{
            if(msg.message)
                bot.platform.editMessageMedia(
                    {
                        type: 'photo',
                        media: aboutMessage.photo,
                        ...aboutMessage
                    },
                    {
                        message_id: msg.message.message_id, 
                        chat_id: msg.message.chat.id,
                        ...aboutMessage
                    }
                )
        }
    }
}