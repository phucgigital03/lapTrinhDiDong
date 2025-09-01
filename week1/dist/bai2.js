"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const bai1_1 = require("./bai1");
class Student extends bai1_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getAge() {
        return this.age;
    }
    getName() {
        return this.name;
    }
    setAge(age) {
        this.age = age;
    }
    setName(name) {
        this.name = name;
    }
    getGrade() {
        return this.grade;
    }
    setGrade(grade) {
        this.grade = grade;
    }
    displayInfoStudent() {
        console.log(`Name: ${this.name}, Age: ${this.age}, grade: ${this.grade}`);
    }
}
exports.Student = Student;
