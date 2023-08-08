import IFood from "./interface/Ifood";

export default class Hotdog implements IFood{
    startDelivery(): void {
        
        console.log("Buscando o hotdog");
        this.getCargo();
    }
    getCargo(): void {
        
        console.log("hotdog retirado, indo até você")
    }
}