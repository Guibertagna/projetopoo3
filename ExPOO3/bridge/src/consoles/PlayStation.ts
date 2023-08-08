import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
   
    constructor(){
        console.log("PlayStation: configurando...")
        this.configureGame();
    }
   
    configureGame(): void {
       this.authToken();
       console.log("Configurando play...")
    }
    authToken(): void {
        console.log("PlayStation autorizando a plataforma...");
    }

}