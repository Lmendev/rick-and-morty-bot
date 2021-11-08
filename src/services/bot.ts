import TelegramBot from 'node-telegram-bot-api';
import { version, description } from '../../package.json';

export const getStartGreeting = () => {
    const parse_mode: TelegramBot.ParseMode = "HTML"

    return {
        photo:  'https://miro.medium.com/freeze/max/480/0*t75wxMkidc4GFYxR.gif',
        caption: `<b>Welcome to ${description}!</b>\nI can look for Rick and Morty information 🤖`,
        reply_markup: {
            inline_keyboard: [
                [{text: "🔍 Search Characters by name", switch_inline_query_current_chat: ""}],
                [{text: "🎲 Random Character", callback_data: "random"}, {text: "🗃️ My Cards", callback_data: "collection"}],
                [{text: "ℹ️ About", callback_data: "about"}, {text: "❓ Help", callback_data: "help"}],
                [{text: "⚙️ Settings", callback_data: "settings"}],
            ]
        },
        parse_mode
    }
    
};