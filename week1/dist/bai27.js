"use strict";
// bai27 placeholder
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const bai1_1 = require("./bai1"); // Adjust if Person is exported differently
class Teacher extends bai1_1.Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        return `Hi, I'm ${this.name}, I teach ${this.subject}.`;
    }
}
exports.Teacher = Teacher;
