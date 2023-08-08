import IConsole from "./IConsole";

export default class Xbox implements IConsole{
   
    constructor(){
        console.log("Xbox: configurando...")
        this.configureGame();
    }
   
    configureGame(): void {
       this.authToken();
       console.log("Configurando play...")
    }
    authToken(): void {
        console.log("Xbox autorizando a plataforma...");
    }

}