import { ICommand } from "./ICommand"
import { getStartGreeting } from "../../services/bot"
import { bot } from "../../Bot";
import TelegramBot from "node-telegram-bot-api";

export class StartCommand implements ICommand {
    name: string
    
    constructor(){
        this.name = "start"
    }

    public execute(options:any): void{
        const startGreeting = getStartGreeting()

        bot.platform.sendPhoto(options.chat.id, startGreeting.photo, startGreeting)
    }
}