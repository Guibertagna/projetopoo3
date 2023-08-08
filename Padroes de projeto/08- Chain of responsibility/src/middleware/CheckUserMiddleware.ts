import Database from "../server/Database";
import Middleware from "./middleware";

export default  class checkUserMiddleware extends Middleware{
    public check(email: any, password: any): boolean {
        if(email.indexOf("@") === -1){
            console.log("Formato de email valido");
            return false;
        }
        const verificarEmail = (Database.filter(item => item.email === email));
        if(!verificarEmail.length){
            console.log("Email não cadastrado");
            return false;
        }
        const verificarSenha = (Database.filter(item => item.password === password));
        if(!verificarSenha.length){
            console.log("senha incorreta");
            return false;
        }
    
        return this.checkNext(email,password);
    }

}