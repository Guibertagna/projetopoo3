import IDeliveryFactory from "../factories/interface/IDeliveryFactory";
import IDrink from "../typefood/drink/interface/Idrink";
import IFood from "../typefood/food/interface/Ifood";

export default class Client{
    private food: IFood
    private drink: IDrink
    
    
    constructor(factory: IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    
    }

    startDelivery(){
        this.drink.startDelivery();
        this.food.startDelivery();
    }
}