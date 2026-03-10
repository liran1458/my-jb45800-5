export default class Speaker {
    color: string;
    volume: number;


    showDetails() {
        console.log(this.color, this.volume)
    }
    turnOn() {
        console.log(`turnning on `)
    }
    turnOff() {
        console.log(`turnning off~ `)
    }
    turnVolume() {
        console.log(`truning volume!`)
    }

    constructor(color: string, volume: number) {
        this.color = color;
        this.volume = volume;

    }


}