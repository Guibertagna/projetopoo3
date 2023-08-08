import AiqfomeFactory from "./factories/AiqfomeFactory";
import IfoodFactory from "./factories/IfoodFactory";
import IDeliveryFactory from "./factories/interface/IDeliveryFactory";
import Company from "./typefood/conts/Companny"
import Client from "./clients/Client"
const currentCompany = Company.IFOOD;
let factory! : IDeliveryFactory;
switch(currentCompany){
    case Company.IFOOD:
        factory = new IfoodFactory();
        break;
    case Company.AIQFOME:
        factory = new AiqfomeFactory();
        break;
    default:
        console.log("Empresa não definida");
    
}

const client = new Client(factory);
client.startDelivery();