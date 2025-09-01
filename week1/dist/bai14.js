"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = exports.Employee = void 0;
// Simple base class + two subclasses with one specific method each
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    describe() {
        return `Employee ${this.id}: ${this.name}`;
    }
}
exports.Employee = Employee;
class Manager extends Employee {
    scheduleMeeting(topic) {
        console.log(`Manager ${this.name} schedules meeting about ${topic}`);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    writeCode(feature) {
        console.log(`Developer ${this.name} writes code for ${feature}`);
    }
}
exports.Developer = Developer;
