import Vehicle from "./vehicle.js";
import RaceVehicle from "./racingCar.js";

const toyota = new Vehicle(211,`ani `,`corola`, `red` ,1800)
toyota.display()

const gtr = new RaceVehicle(22,`ata`,`skyline`,`blue`,3000,410,30)
gtr.display()