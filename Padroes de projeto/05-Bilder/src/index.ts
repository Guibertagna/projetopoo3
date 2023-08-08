import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/DIrector";
import Vehicle from "./products/Vehicle";


const builder : VehicleBuilder = new VehicleBuilder();
const director : Director =  new Director(builder);

director.constructorSedanCar();
const sedan : Vehicle = builder.getVehicle()
console.log("Criando um veículo...");
console.log("Tipo: "+sedan.veicleType);
console.log("Rodas: "+sedan.wheels.length);
console.log("Motor: "+sedan.engine.power);
console.log("bancos: "+sedan.seats);
console.log("Transmissão: "+sedan.transmission);
console.log("--------------------------------------")


director.constructTruck();
const truck : Vehicle = builder.getVehicle();

console.log("Criando um veículo...");
console.log("Tipo: "+truck.veicleType);
console.log("Rodas: "+truck.wheels.length);
console.log("Motor: "+truck.engine.power);
console.log("bancos: "+truck.seats);
console.log("Transmissão: "+truck.transmission);