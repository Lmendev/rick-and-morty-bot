import { Message } from "node-telegram-bot-api";
import { rickAndMortyBot } from ".."

export const getCharacter = async (msg: Message) =>  {
    rickAndMortyBot.terminal.executeCommand("about");
}