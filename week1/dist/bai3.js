"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
    }
    // Optional getters/setters
    getBrand() { return this.brand; }
    getModel() { return this.model; }
    getYear() { return this.year; }
    setBrand(brand) { this.brand = brand; }
    setModel(model) { this.model = model; }
    setYear(year) { this.year = year; }
}
exports.Car = Car;
