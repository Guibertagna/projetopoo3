import Middleware from "./middleware"

export default class CheckWeekMiddleware extends Middleware{
    public check(email: any, password: any): boolean {
        if(password.length <6){
            console.log("Senha Fraca");
            return false;
        }
        console.log("SENHA SGURA");
        return this.checkNext(email, password);

    }

}