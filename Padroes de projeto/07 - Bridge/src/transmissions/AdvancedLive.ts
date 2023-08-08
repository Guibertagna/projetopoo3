import IPlataform from "../plataforms/IPlataform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(platform: IPlataform){
        super(platform);
    }

    subtitle() : void{
        console.log("Lengendas ativadas na transmissão\n");
    }

    comments() :void{
        console.log("Comentarios liberados\n");
    }
}