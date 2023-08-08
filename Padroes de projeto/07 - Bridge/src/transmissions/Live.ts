import IPlataform from "../plataforms/IPlataform";
import ITransmission from "./ITransmisson";

export default class Live implements ITransmission{
   
    constructor(private plataform : IPlataform){}
    broadcasting(): void {
        console.log("Iniciando a live")
    }
    result(): void {
        console.log("*************AO VIVO *************");
    }

}