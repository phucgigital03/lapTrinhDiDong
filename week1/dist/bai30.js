"use strict";
// bai30 placeholder
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = exports.TeacherB30 = exports.StudentB30 = void 0;
// School with new StudentB30 & TeacherB30 classes
class StudentB30 {
    constructor(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }
    info() {
        return `Student #${this.id} ${this.name} (grade: ${this.grade})`;
    }
}
exports.StudentB30 = StudentB30;
class TeacherB30 {
    constructor(id, name, subject) {
        this.id = id;
        this.name = name;
        this.subject = subject;
    }
    introduce() {
        return `Teacher #${this.id} ${this.name} teaches ${this.subject}`;
    }
}
exports.TeacherB30 = TeacherB30;
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(s) {
        this.students.push(s);
    }
    addTeacher(t) {
        this.teachers.push(t);
    }
    displayInfo() {
        console.log("Teachers:");
        this.teachers.forEach(t => console.log(" - " + t.introduce()));
        console.log("Students:");
        this.students.forEach(s => console.log(" - " + s.info()));
    }
}
exports.School = School;
