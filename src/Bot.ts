import 'dotenv/config';
import { env } from 'process';
import { Router } from './router';
import { Terminal } from './core/Terminal';

import TelegramBot from 'node-telegram-bot-api';
export class Bot {
    public terminal: Terminal;
    public platform!: TelegramBot;

    constructor(){
        this.terminal = new Terminal();
        
    }

    public init(): void{
        this.initPlatform();

        this.listen();
    }

    private initPlatform(): void{
        if(env.NODE_ENV === 'production'){
            this.platform = new TelegramBot(env.TOKEN || "", { polling: true });
        }else {
            this.platform = new TelegramBot(env.TOKEN || "", { polling: true });
        }
    }

    private listen(): void{
        const router = new Router(this);
        router.init();
    }
}