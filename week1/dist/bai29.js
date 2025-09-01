"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = exports.CarB29 = void 0;
// Car implements Movable
class CarB29 {
    constructor(model) {
        this.model = model;
    }
    move() {
        console.log(`CarB29 ${this.model} is driving forward.`);
    }
}
exports.CarB29 = CarB29;
// Robot implements Movable
class Robot {
    constructor(id) {
        this.id = id;
    }
    move() {
        console.log(`Robot ${this.id} is walking.`);
    }
}
exports.Robot = Robot;
