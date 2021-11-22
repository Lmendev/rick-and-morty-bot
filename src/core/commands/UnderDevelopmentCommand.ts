import { ICommand } from "./ICommand"
import { getCharacter } from "../../services/character"
import { CallbackQuery, Message } from "node-telegram-bot-api"
import { bot } from "../../Bot"
import { getAboutMessage } from "../../services/bot"

export class UnderDevelopmentCommand implements ICommand {
    name: string
    
    constructor(){
        this.name = "underDevelopment"
    }

    public execute(msg:Message | CallbackQuery): void{
        const aboutMessage = getAboutMessage()

        if ('chat' in msg){
            bot.platform.sendPhoto(msg.chat.id, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ricky-and-morty-season-4-episode-8-1589808286.jpg?crop=1.00xw:0.933xh;0,0.0667xh&resize=1200:*', 
            {...aboutMessage, caption: 'Command under development!'})
        }else{
            if(msg.message)
                bot.platform.editMessageMedia(
                    {
                        type: 'photo',
                        media: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ricky-and-morty-season-4-episode-8-1589808286.jpg?crop=1.00xw:0.933xh;0,0.0667xh&resize=1200:*',
                        
                        ...aboutMessage, 
                        caption: 'Command under development!'
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