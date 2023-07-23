//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

import Vehicle from "./vehicle.js";
//After you write the derived Car class, you should test it out.

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, moder, year, color, mileage);
        this.maxpassagers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        }
    
        start() {
        if (this.fuel > 0) {
            console.log("engine has started.");
        } else {
            return this.started = false;
            console.log("no fuel");
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxpassagers) {
            if ((num + this.passenger) <= this.maxpassagers) {
                this.passenger - num;
                return this.passenger;
            } else {
                console.log(this.model + " " + "no space for all passengers.");
            }
            } else {
                console.log(this.model = " " + this.make + " is full");
                }

        this.scheduleService(mileage) {
            if (this.mileage > 30000) {
                this.scheduleService == true
                return this.scheduleService;
            }
        }
    }