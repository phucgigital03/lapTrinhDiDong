"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditioner = exports.Fan = exports.Appliance = void 0;
// bai24 placeholder
// ...existing code...
class Appliance {
    constructor(brand) {
        this.brand = brand;
    }
}
exports.Appliance = Appliance;
class Fan extends Appliance {
    turnOn() {
        console.log(`Fan (${this.brand}) starts spinning.`);
    }
}
exports.Fan = Fan;
class AirConditioner extends Appliance {
    turnOn() {
        console.log(`AirConditioner (${this.brand}) starts cooling.`);
    }
}
exports.AirConditioner = AirConditioner;
