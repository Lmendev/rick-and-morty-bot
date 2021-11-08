import { version, description } from '../../package.json';

export const getStartGreeting = () => {
    return {
        photo:  'https://miro.medium.com/max/1000/1*EctvzSDOlwqeH13R6YBYOw.jpeg',
        caption: `<b>Welcome to ${description}!</b>\nI can look for Rick and Morty information 🤖`,
        inlineKeyboard: [
            [{text: "🔍 Search Characters by name", switch_inline_query_current_chat: ""}],
            [{text: "🎲 Random Character", callback_data: "random"}, {text: "🗃️ My Cards", callback_data: "collection"}],
            [{text: "ℹ️ About", callback_data: "about"}, {text: "❓ Help", callback_data: "help"}],
            [{text: "⚙️ Settings", callback_data: "settings"}],
        ],
        parseMode: "html"
    }
};