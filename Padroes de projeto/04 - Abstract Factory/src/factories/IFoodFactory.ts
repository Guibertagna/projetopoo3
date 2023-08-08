import HotDog from "../typeFood/food/HotDog"
import SoftDrink from "../typeFood/drink/SoftDrink"
import IDrink from "../typeFood/drink/interface/IDrink";
import IFood from "../typeFood/food/interface/IFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";

export default class IFoodFactory implements IDeliveryFactory{
    createDeliveryDrink(): IDrink{
        return new SoftDrink();
    }
    createDeliveryFood(): IFood{
        return new HotDog
    }

}