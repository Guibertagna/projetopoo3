import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Vehicle{
    private _veicleType : VehicleType;
    private _seats : number;
    private _engine : Engine;
    private _transmission : Transmission;
    private _wheels : Wheel[] = [];
    /**
     * Getter veicleType
     * @return {VehicleType}
     */
	public get veicleType(): VehicleType {
		return this._veicleType;
	}

    /**
     * Getter seats
     * @return {number}
     */
	public get seats(): number {
		return this._seats;
	}

    /**
     * Getter engine
     * @return {Engine}
     */
	public get engine(): Engine {
		return this._engine;
	}

    /**
     * Getter transmission
     * @return {Transmission}
     */
	public get transmission(): Transmission {
		return this._transmission;
	}

    /**
     * Getter wheels
     * @return {Wheel[]}
     */
	public get wheels(): Wheel[] {
		return this._wheels;
	}

    public addWheel(wheel : Wheel){
        this._wheels.push(wheel);
    }

    /**
     * Setter veicleType
     * @param {VehicleType} value
     */
	public set veicleType(value: VehicleType) {
		this._veicleType = value;
	}

    /**
     * Setter seats
     * @param {number} value
     */
	public set seats(value: number) {
		this._seats = value;
	}

    /**
     * Setter engine
     * @param {Engine} value
     */
	public set engine(value: Engine) {
		this._engine = value;
	}

    /**
     * Setter transmission
     * @param {Transmission} value
     */
	public set transmission(value: Transmission) {
		this._transmission = value;
	}

    /**
     * Setter wheels
     * @param {Wheel[]} value
     */
	public set wheels(value: Wheel[]) {
		this._wheels = value;
	}



}