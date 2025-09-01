"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatB20 = exports.DogB20 = exports.AnimalB20 = void 0;
exports.makeAllSpeak = makeAllSpeak;
// bai20 placeholder
// ...existing code...
// Polymorphism demo: base Animal with overridden speak()
class AnimalB20 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
exports.AnimalB20 = AnimalB20;
class DogB20 extends AnimalB20 {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
exports.DogB20 = DogB20;
class CatB20 extends AnimalB20 {
    speak() {
        console.log(`${this.name} meows.`);
    }
}
exports.CatB20 = CatB20;
// Function using polymorphism
function makeAllSpeak(animalB20s) {
    animalB20s.forEach(a => a.speak());
}
