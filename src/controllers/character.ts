import { Message } from "node-telegram-bot-api";
import { Bot } from "../Bot";

const terminal = Bot.me.terminal;

export const getCharacter = async (msg: Message) =>  {
    terminal.executeCommand("about");
}