// bai28 placeholder

// Animal base class with a protected makeSound() method
class Animal {
  constructor(public name: string) {}

  // Protected: only accessible inside this class and subclasses
  protected makeSound(): string {
    return "Some generic animal sound";
  }

  // Public method to expose the sound
  speak(): void {
    console.log(`${this.name}: ${this.makeSound()}`);
  }
}

class DogB28 extends Animal {
  protected makeSound(): string {
    return "Woof";
  }
}

class CatB28 extends Animal {
  protected makeSound(): string {
    return "Meow";
  }
}



export { Animal, DogB28, CatB28 };

