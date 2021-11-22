import { ICommand } from "./ICommand"
import { getStartGreeting } from "../../services/bot"
import { bot } from "../../Bot";
import TelegramBot, { CallbackQuery, Message } from "node-telegram-bot-api";

export class StartCommand implements ICommand {
    name: string
    
    constructor(){
        this.name = "start"
    }

    public execute(msg:Message | CallbackQuery): void{
        const startGreeting = getStartGreeting()

        if ('chat' in msg){
            bot.platform.sendPhoto(msg.chat.id, startGreeting.photo, startGreeting)
        }else{
            if(msg.message)
                bot.platform.editMessageMedia(
                    {
                        type: 'photo',
                        media: startGreeting.photo,
                        ...startGreeting
                    },
                    {
                        message_id: msg.message.message_id, 
                        chat_id: msg.message.chat.id,
                        ...startGreeting
                    }
                )
        }
    }
}