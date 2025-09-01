// bai29 placeholder
// Interface Movable with a single move() method
interface Movable {
  move(): void;
}

// Car implements Movable
class CarB29 implements Movable {
  constructor(private model: string) {}
  move(): void {
    console.log(`CarB29 ${this.model} is driving forward.`);
  }
}

// Robot implements Movable
class Robot implements Movable {
  constructor(private id: string) {}
  move(): void {
    console.log(`Robot ${this.id} is walking.`);
  }
}



export { Movable, CarB29, Robot };

