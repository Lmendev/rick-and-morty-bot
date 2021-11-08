//import TelegramBot from "node-telegram-bot-api";
import TelegramBot from "node-telegram-bot-api";
import { bot } from "../Bot";

export const start = (msg: TelegramBot.Message) => {
    //const terminal = ;
    //console.log(msg);
    
    bot.terminal.executeCommand("start", msg);
}

export const random = (msg: TelegramBot.Message) =>  {
    console.log('a')
    bot.terminal.executeCommand("random");
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

export const callbackQuery = (msg: TelegramBot.CallbackQuery) =>  {
    if(msg.data === 'random'){
        bot.terminal.executeCommand("random", msg);

        console.log(msg)
    }

    //bot.terminal.executeCommand("callbackQuery");
}
