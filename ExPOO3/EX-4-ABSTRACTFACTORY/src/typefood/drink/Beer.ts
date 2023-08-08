import IDrinkFoods from "./interface/Idrink";



export default class Beer implements IDrinkFoods{
    startDelivery(): void {
        this.getCargo();
        console.log("Buscando a cerveja");
    }
    getCargo(): void {
        console.log("Cerveja retirada, indo até você")
    }
}