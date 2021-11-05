import TelegramBot from "node-telegram-bot-api";
import { Bot } from "../Bot"
import { getCharacter } from "../controllers/character";
export class Router {
    private bot: Bot;

    constructor(bot: Bot){
        this.bot = bot;
    }

    public init (){
        const platform:TelegramBot = this.bot.platform;
        
        platform.onText(/\/start/, getCharacter)
        platform.onText(/\/about/, () => {})
    }
}