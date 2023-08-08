import IDrink from "../../typeFood/drink/interface/IDrink";
import IFood from "../../typeFood/food/interface/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink() : IDrink 
    createDeliveryFood() : IFood 
}