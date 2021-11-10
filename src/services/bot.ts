import TelegramBot, { ParseMode } from 'node-telegram-bot-api';
import { env } from 'process'

export const getStartGreeting = () => {
    const parse_mode:ParseMode = "HTML"
    return {
        photo:  'https://miro.medium.com/freeze/max/480/0*t75wxMkidc4GFYxR.gif',
        caption: `<b>Welcome to ${env.npm_package_description}!</b>\nI can look for Rick and Morty information 🤖`,
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

export const getAboutMessage = () => {
    const parse_mode:ParseMode = "HTML"

    return {
        photo:  'https://miro.medium.com/freeze/max/480/0*t75wxMkidc4GFYxR.gif',
        caption: `<b>About me</b>\n🤖 <b>Name</b>: ${env.npm_package_name}\n🟢 <b>Version</b>:  v${env.npm_package_version}\n🧑🏽‍💻 <b>Created by</b>: @lmendev`,
        reply_markup: {
            inline_keyboard: [
                [{text: "🔙 Back", callback_data: "start"}]
            ]
        },
        parse_mode
    }
};