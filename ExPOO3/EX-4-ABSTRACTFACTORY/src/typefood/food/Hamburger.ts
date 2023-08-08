import IFood from "./interface/Ifood";

export default class Hamburguer implements IFood{
    startDelivery(): void {
        this.getCargo();
    
        console.log("Hamburguer retirado, indo até você")
    }
    getCargo(): void {
        console.log("Buscando o hamburguer");
    }
}