"use strict";
// bai28 placeholder
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatB28 = exports.DogB28 = exports.Animal = void 0;
// Animal base class with a protected makeSound() method
class Animal {
    constructor(name) {
        this.name = name;
    }
    // Protected: only accessible inside this class and subclasses
    makeSound() {
        return "Some generic animal sound";
    }
    // Public method to expose the sound
    speak() {
        console.log(`${this.name}: ${this.makeSound()}`);
    }
}
exports.Animal = Animal;
class DogB28 extends Animal {
    makeSound() {
        return "Woof";
    }
}
exports.DogB28 = DogB28;
class CatB28 extends Animal {
    makeSound() {
        return "Meow";
    }
}
exports.CatB28 = CatB28;
