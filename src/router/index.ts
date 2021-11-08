import TelegramBot from "node-telegram-bot-api";
import { start, help, settings, about, random, callbackQuery} from "../controllers";
export class Router {
    public init (platform: TelegramBot) {
        platform.onText(/\/start/, start);
        platform.onText(/\/random/, random)
        
        platform.on('callback_query', callbackQuery)
        /*
        platform.onText(/\/help/, help);
        platform.onText(/\/settings/, settings);
        platform.onText(/\/about/, about);
        
        /*
        platform.onText(/\/search/, botSearch)
        
        platform.onText(/\/mycards/, botMyCards)
        platform.onText(/\/hacker/, botHacker)
        */
    }
}