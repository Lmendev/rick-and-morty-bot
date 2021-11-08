export interface ICommand {
    name: string;
    execute(options:any): void;
}