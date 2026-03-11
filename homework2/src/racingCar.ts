import Vehicle from "./vehicle.js";

export default class RaceVehicle extends Vehicle {
    maxSpeed: number;
    races: number;

    constructor(
        vehicleNum: number,
        make: string,
        model: string,
        color: string,
        enginevolume: number,
        maxSpeed: number,
        races: number
    ) {
        super(vehicleNum, make, model, color, enginevolume);
        this.maxSpeed = maxSpeed;
        this.races = races;
    }

    display() {
        console.log("Race Vehicle:", this.vehicleNum, this.make, this.model, this.enginevolume);
        console.log("Race Info:", this.maxSpeed, this.races);
    }
}