import IConsole from "../consoles/IConsole";
import IGame from "./IGame";

export default class Play implements IGame{
    constructor(private console : IConsole){}
    playing(): void {
       console.log("Iniciando o game");
    }
    result(): void {
        console.log("**************JOGANDO**************\n")
    }
}