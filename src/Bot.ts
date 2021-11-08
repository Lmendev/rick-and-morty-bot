import 'dotenv/config';
import { env } from 'process';
import { Router } from './router';
import { Terminal } from './core/Terminal';

import TelegramBot from 'node-telegram-bot-api';
class Bot {
    private static _me: Bot;
    private _terminal: Terminal;
    private _platform!: TelegramBot;

    private constructor(){
        this._terminal = new Terminal();
    }

    public static get me():Bot {
        if(!Bot._me){
            Bot._me = new Bot();
        }

        return Bot._me;
    }

    public init(): void{
        this.initPlatform();

        this.listen();
    }

    private initPlatform(): void{
        if(env.NODE_ENV === 'production'){
            this._platform = new TelegramBot(env.TOKEN || "", { polling: true });
        }else {
            this._platform = new TelegramBot(env.TOKEN || "", { polling: true });
        }
    }

    private listen(): void{
        const router = new Router();
        router.init(this._platform);
    }
    
    public get platform(): TelegramBot{
        return this._platform;
    }

    public get terminal(): Terminal{
        return this._terminal;
    }
}

export const bot = Bot.me;