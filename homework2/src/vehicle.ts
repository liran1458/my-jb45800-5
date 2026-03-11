export default class Vehicle {
    readonly vehicleNum : number;
    make : string;
    readonly model : string;
    color : string;
    enginevolume: number;


    display() {
        console.log(`Vehicle: `, this.vehicleNum,this.make, this.model,this.color, this.enginevolume)
    }


    constructor(vehicleNum : number, make : string,model : string,color: string, enginevolume: number) {
        this.vehicleNum = vehicleNum
        this.make = make
        this.model =model
        this.color = color;
        this.enginevolume = enginevolume;

    }


}