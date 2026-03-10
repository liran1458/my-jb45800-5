import Speaker from "./speaker.js";
const jbl = new Speaker(`black`, 1000)
jbl.showDetails()
jbl.turnOn()
jbl.turnVolume()
jbl.turnOff()