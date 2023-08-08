import AIQfomeFactory from "./factories/AIQfomeFactory";
import IFoodFactory from "./factories/IFoodFactory";
import IDeliveryFactory from "./factories/interface/IDeliveryFactory";
import Company from "../src/typeFood/conts/Company"
import Client from "./clients/Client";


const currentCompany = Company.IFood;
let factory! : IDeliveryFactory;
switch(currentCompany){
    case Company.IFood:
        factory = new IFoodFactory();
        break;
    case Company.AiqFome:
        factory = new AIQfomeFactory();
        break;
    default:
        console.log("Companhia nao definida!")
}

const client = new Client(factory);
client.startDelivery();