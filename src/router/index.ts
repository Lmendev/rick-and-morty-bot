import TelegramBot, { CallbackQuery } from "node-telegram-bot-api";
import { start, help, settings, about, underDevelopment, inlineQueryHandler } from "../controllers";
import { random } from "../controllers/character";
import { UnderDevelopmentCommand } from "../core/commands/UnderDevelopmentCommand";
export class Router {
    public init (platform: TelegramBot) {
        platform.onText(/\/start/, start);
        platform.onText(/\/random/, random)
        platform.onText(/\/about/, about);

        platform.on('inline_query', inlineQueryHandler)
        platform.on('callback_query', (msg: CallbackQuery) => {
            switch(msg.data){
                case 'start':
                    start(msg);
                    break;
                case 'about':
                    about(msg);
                    break;
                case 'random':
                    random(msg);
                    break;
                case 'collection': case 'settings': case 'help':
                    underDevelopment(msg);
                    break;  
            }
        })


        /*
        platform.onText(/\/help/, help);
        platform.onText(/\/settings/, settings);
        
        
        /*
        platform.onText(/\/search/, botSearch)
        
        platform.onText(/\/mycards/, botMyCards)
        platform.onText(/\/hacker/, botHacker)
        */
    }
}