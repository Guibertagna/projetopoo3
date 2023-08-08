import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder{
    
    private vehicle = new Vehicle();
    
   
    
    reset(): void {
        this.vehicle = new Vehicle();
    }
    getVehicle(): Vehicle {
       const result : Vehicle = this.vehicle;
       this.reset();
       return result;
    }
    addWheel(Wheel: Wheel) {
        this.vehicle.addWheel(Wheel);
    }
    setVehicleType(value: VehicleType) {
        this.vehicle.veicleType = value;
    }
    setSeats(seats: number) {
        this.vehicle.seats = seats;
    }
    
    setEngine(engine: Engine) {
        this.vehicle.engine = engine;
    }
    
    setTransmission(tranmission: Transmission) {
        this.vehicle.transmission = tranmission;
    }
}

