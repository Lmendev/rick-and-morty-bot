import { ICommand } from "./ICommand"
import { getCharacter, getRandomCharacter } from "../../services/character"
import { bot } from "../../Bot";
import { Message, ParseMode, CallbackQuery } from "node-telegram-bot-api";

export class RandomCommand implements ICommand {
    name: string
    
    constructor(){
        this.name = "random"
    }

    public async execute(msg: Message | CallbackQuery): Promise<void>{
        const character = await getRandomCharacter();

        const statucIcon:string = character.status === 'Alive'? "🟢": character.status === 'Dead'? "🔴": "⚫"
        const parse_mode:ParseMode = "HTML"
        const caption = `<b>${character.name}</b>\n${statucIcon} ${character.status} - ${character.species}\n\nLast known location:\n${character.location.name}\n\nFirst seen in:\n${character.origin.name}`

        if('chat' in msg){
            bot.platform.sendPhoto(msg.chat.id, character.image, { 
                caption,
                parse_mode
            })
        }else {
            if(msg.message){
                bot.platform.editMessageMedia(
                    {
                        type: 'photo',
                        media: character.image,
                        caption,
                        parse_mode
                    },
                    {
                        message_id: msg.message.message_id, 
                        chat_id: msg.message.chat.id,
                        reply_markup: {
                            inline_keyboard: [
                                [{text: "🎲 Roll the dice", callback_data: "random"}],
                                [{text: "🔙 Back", callback_data: "start"}]
                            ]
                        },
                    }
                )
            }
        }
    }
}