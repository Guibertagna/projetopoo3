import IPlataform from "./IPlataform";

export default class Youtube implements IPlataform{
    constructor(){
        console.log("YouTube Configurando Plataforma");
        
        this.configureRMTP();
    }
    

    configureRMTP(): void {
        
        this.authToken();
        console.log("YouTube: cpnfiguradno Brodcasting!")
    }
   
   
    authToken(): void {
        console.log("YouTube: Autorizando a plataforma")
    }

}