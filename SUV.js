//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")
const { Vehicle } = require("./vehicleBaseClass");

class SUV extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.model = model;
        
    }
    ModelType(Toyota){
        if (this.fuel > 0) {
            console.log("engine has started.");
        } else {
            return this.started = false;
            console.log("no fuel");
        }
    }
