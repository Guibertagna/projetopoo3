import IPlataform from "./IPlataform";

export default class Twich implements IPlataform{
    constructor(){
        console.log("Twich Configurando Plataforma");
        this.configureRMTP();
    }
    

    configureRMTP(): void {
        this.authToken();
        console.log("Twich: cpnfiguradno Brodcasting!")
    }
   
   
    authToken(): void {
        console.log("Twich: Autorizando a plataforma")
    }

}