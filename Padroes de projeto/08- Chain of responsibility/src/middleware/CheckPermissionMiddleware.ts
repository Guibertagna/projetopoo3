import Database from "../server/Database";
import PermissionType from "../server/PermissionType";
import Middleware from "./middleware";

export default class checkPermissionMiddleware extends Middleware{
    public check(email: any, password: any): boolean {
      const user = Database.filter(item => item.email === email);
      if(!user.length){
        console.log("Email não cadastrado");
        return false;
      }

      if(user [0].permission === PermissionType.ADMIN){
        console.log("Bem-vindo adm!!");
      }else{
        console.log("Bem-vindo usuario!!");
      }
      return this.checkNext(email,password);

    }




}