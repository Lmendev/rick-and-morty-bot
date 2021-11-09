//import TelegramBot from "node-telegram-bot-api";
import TelegramBot, { CallbackQuery, Message, InlineQuery } from "node-telegram-bot-api";
import { bot } from "../Bot";

export const start = (msg: Message | CallbackQuery) => {
    //const terminal = ;
    //console.log(msg);
    
    bot.terminal.executeCommand("start", msg);
}

export const help = async () =>  {
    bot.terminal.executeCommand("help");
}

export const settings = async () =>  {
    bot.terminal.executeCommand("settings");
}

export const about = (msg: Message | CallbackQuery) =>  {
    bot.terminal.executeCommand("about", msg);
}

export const underDevelopment = (msg: Message | CallbackQuery) =>  {
    bot.terminal.executeCommand("underDevelopment", msg);
}

export const inlineQueryHandler = (msg: InlineQuery) =>  {
    bot.terminal.executeCommand("inlineQuery", msg);
}