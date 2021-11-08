import TelegramBot from "node-telegram-bot-api";
import { start, help, settings, about } from "../controllers";
export class Router {
    public init (platform: TelegramBot) {
        platform.onText(/\/start/, start);
        /*
        platform.onText(/\/help/, help);
        platform.onText(/\/settings/, settings);
        platform.onText(/\/about/, about);
        
        /*
        platform.onText(/\/search/, botSearch)
        platform.onText(/\/random/, botRandom)
        platform.onText(/\/mycards/, botMyCards)
        platform.onText(/\/hacker/, botHacker)
        */
    }
}