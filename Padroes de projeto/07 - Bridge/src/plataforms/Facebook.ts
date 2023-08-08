import IPlataform from "./IPlataform";

export default class Facebook implements IPlataform{
    constructor(){
        console.log("Facebook Configurando Plataforma");
        this.configureRMTP();
    }
    

    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: cpnfiguradno Brodcasting!")
    }
   
   
    authToken(): void {
        console.log("Facebook: Autorizando a plataforma")
    }

}