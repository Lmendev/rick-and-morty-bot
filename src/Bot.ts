import 'dotenv/config';
import { env } from 'process';
import { Terminal } from './core/Terminal';

import TelegramBot from 'node-telegram-bot-api';

export class Bot {
    private terminal: Terminal;
    private platform!: TelegramBot;

    constructor(){
        this.terminal = new Terminal();

        
    }

    public init(): void{
        //this.terminal.executeCommand("about");
        this.initPlatform();
    }

    private initPlatform(): void{
        if(env.NODE_ENV === 'production'){
            this.platform = new TelegramBot(env.TOKEN || "", { polling: true });
        }else {
            this.platform = new TelegramBot(env.TOKEN || "", { polling: true });

            this.platform.on('message', (msg) => {
                const chatId = msg.chat.id;
              
                // send a message to the chat acknowledging receipt of their message
                this.platform.sendMessage(chatId, 'Received your message');
                this.terminal.executeCommand("about")
              });
        }
    }

}