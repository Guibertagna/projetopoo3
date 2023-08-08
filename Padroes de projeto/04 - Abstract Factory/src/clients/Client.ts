import IDeliveryFactory from "../factories/interface/IDeliveryFactory"
import IDrink from "../typeFood/drink/interface/IDrink"
import IFood from "../typeFood/food/interface/IFood"

export default class Client{
    private food : IFood
    private drink : IDrink


    constructor(factory: IDeliveryFactory){
        this.food = factory.createDeliveryFood()
        this.drink = factory.createDeliveryDrink()
    }

    startDelivery(){
        this.food.startDelivery()
        this.drink.startDelivery()
    }
} 