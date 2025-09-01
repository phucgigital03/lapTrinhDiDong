

// Base + derived classes demo
class Animal {
  constructor(protected name: string) {}
  move() {
    console.log(`${this.name} moves`);
  }
}

export class DogB11 extends Animal {
  bark() {
    console.log(`${this.name} barks: Woof!`);
  }
}

export class CatB11 extends Animal {
  meow() {
    console.log(`${this.name} meows: Meow!`);
  }
}


