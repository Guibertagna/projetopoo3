import IDrink from "../typeFood/drink/interface/IDrink";
import HotDog from "../typeFood/food/HotDog";
import IFood from "../typeFood/food/interface/IFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";
import Beer from "../typeFood/drink/Beer"


export default class AIQfomeFactory implements IDeliveryFactory{
    createDeliveryDrink(): IDrink{
        return new Beer();
    }
    createDeliveryFood(): IFood{
        return new HotDog()
    }

}