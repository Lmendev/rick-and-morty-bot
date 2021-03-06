import TelegramBot, { ParseMode } from 'node-telegram-bot-api';
import { env } from 'process'

export const getStartGreeting = () => {
    const parse_mode:ParseMode = "HTML"
    return {
        photo:  'https://miro.medium.com/freeze/max/480/0*t75wxMkidc4GFYxR.gif',
        caption: `<b>Welcome to ${env.npm_package_description}!</b>\nI can look for Rick and Morty information š¤`,
        reply_markup: {
            inline_keyboard: [
                [{text: "š Search Characters by name", switch_inline_query_current_chat: ""}],
                [{text: "š² Random Character", callback_data: "random"}, {text: "šļø My Cards", callback_data: "collection"}],
                [{text: "ā¹ļø About", callback_data: "about"}, {text: "ā Help", callback_data: "help"}],
                [{text: "āļø Settings", callback_data: "settings"}],
            ]
        },
        parse_mode
    }
};

export const getAboutMessage = () => {
    const parse_mode:ParseMode = "HTML"

    return {
        photo:  'https://miro.medium.com/freeze/max/480/0*t75wxMkidc4GFYxR.gif',
        caption: `<b>About me</b>\nš¤ <b>Name</b>: ${env.npm_package_name}\nš¢ <b>Version</b>:  v${env.npm_package_version}\nš§š½āš» <b>Created by</b>: @lmendev`,
        reply_markup: {
            inline_keyboard: [
                [{text: "š Back", callback_data: "start"}]
            ]
        },
        parse_mode
    }
};