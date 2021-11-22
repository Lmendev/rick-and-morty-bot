import { ICommand } from "./ICommand"
import { getCharacter, searchCharactersByName } from "../../services/character"
import { CallbackQuery, InlineQuery, Message } from "node-telegram-bot-api"
import { bot } from "../../Bot"
import { getAboutMessage } from "../../services/bot"

export class InlineQueryCommand implements ICommand {
    name: string
    
    constructor(){
        this.name = "inlineQuery"
    }

    public async execute(msg: InlineQuery): Promise<void>{
        
        const characters = await searchCharactersByName(msg.query)
        //characters.info

        const result = characters.results?.map(character => {
            return {
                id: character.id, 
                type: 'photo', 
                title: character.name, 
                description: '', 
                caption: '',
                photo_width: 340,
                thumb_url: character.image, 
                photo_url: character.image
            }
        }) || []
        

        console.log(characters.results)
        //bot.platform.answerInlineQuery(msg.id, result)
        
        /*
        if ('chat' in msg){
            bot.platform.sendPhoto(msg.chat.id, aboutMessage.photo, aboutMessage)
        }else{
            if(msg.message)
                bot.platform.editMessageMedia(
                    {
                        type: 'photo',
                        media: aboutMessage.photo,
                        ...aboutMessage
                    },
                    {
                        message_id: msg.message.message_id, 
                        chat_id: msg.message.chat.id,
                        ...aboutMessage
                    }
                )
        }
        */
    }
}