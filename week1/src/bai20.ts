// bai20 placeholder
// ...existing code...
// Polymorphism demo: base Animal with overridden speak()
class AnimalB20 {
  constructor(public name: string) {}
  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class DogB20 extends AnimalB20 {
  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

class CatB20 extends AnimalB20 {
  speak(): void {
    console.log(`${this.name} meows.`);
  }
}

// Function using polymorphism
function makeAllSpeak(animalB20s: AnimalB20[]): void {
  animalB20s.forEach(a => a.speak());
}



export { AnimalB20, DogB20, CatB20, makeAllSpeak };
