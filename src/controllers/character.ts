import TelegramBot, { CallbackQuery, Message } from "node-telegram-bot-api";
import { bot } from "../Bot";


export const about = async (msg: Message) =>  {
    bot.terminal.executeCommand("about");
}

export const random = (msg: Message | CallbackQuery) =>  {
    
    bot.terminal.executeCommand("random", msg);
    
}