import IDrink from "../typefood/drink/interface/Idrink";
import IFood from "../typefood/food/interface/Ifood";
import IDeliveryFactory from "./interface/IDeliveryFactory";
import Beer from "../typefood/drink/Beer"
import Hamburguer from "../typefood/food/Hamburger";
export default class AiqfomeFactory implements IDeliveryFactory{
    createDeliveryFood() : IFood{
        return new Hamburguer();
    }

    createDeliveryDrink() : IDrink{
        return new Beer();
    }
}