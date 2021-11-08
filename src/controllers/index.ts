//import TelegramBot from "node-telegram-bot-api";
import TelegramBot from "node-telegram-bot-api";
import { bot } from "../Bot";

export const start = (msg: TelegramBot.Message) => {
    //const terminal = ;
    console.log(msg);
    
    bot.terminal.executeCommand("start");
}

export const help = async () =>  {
    bot.terminal.executeCommand("help");
}

export const settings = async () =>  {
    bot.terminal.executeCommand("settings");
}

export const about = async () =>  {
    bot.terminal.executeCommand("about");
}
