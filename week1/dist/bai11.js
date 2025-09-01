"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatB11 = exports.DogB11 = void 0;
// Base + derived classes demo
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} moves`);
    }
}
class DogB11 extends Animal {
    bark() {
        console.log(`${this.name} barks: Woof!`);
    }
}
exports.DogB11 = DogB11;
class CatB11 extends Animal {
    meow() {
        console.log(`${this.name} meows: Meow!`);
    }
}
exports.CatB11 = CatB11;
