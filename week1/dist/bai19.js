"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = exports.CarB19 = void 0;
class CarB19 {
    constructor(model) {
        this.model = model;
    }
    start() {
        console.log(`CarB19 ${this.model} starts engine`);
    }
}
exports.CarB19 = CarB19;
class Bike {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`Bike ${this.brand} starts pedaling`);
    }
}
exports.Bike = Bike;
