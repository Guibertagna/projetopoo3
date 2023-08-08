import Hotdog from "../typefood/food/Hotdog"
import SoftDrinks from "../typefood/drink/SoftDrink"
import IFood from "../typefood/food/interface/Ifood";
import IDeliveryFactory from "./interface/IDeliveryFactory"
import IDrink from "../typefood/drink/interface/Idrink";

export default class IfoodFactory implements IDeliveryFactory{
    createDeliveryFood() : IFood{
        return new Hotdog();
    }

    createDeliveryDrink() : IDrink{
        return new SoftDrinks();
    }
}