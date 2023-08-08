import IDrinkFoods from "../../typefood/drink/interface/Idrink";
import IFood from "../../typefood/food/interface/Ifood";

export default interface IDeliveryFactory{
    createDeliveryDrink() : IDrinkFoods;
    createDeliveryFood() : IFood;
}