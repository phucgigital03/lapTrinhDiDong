// bai19 placeholder
// ...existing code...
// Simple Vehicle interface with one method and two implementations
interface Vehicle {
  start(): void;
}

class CarB19 implements Vehicle {
  constructor(private model: string) {}
  start(): void {
    console.log(`CarB19 ${this.model} starts engine`);
  }
}

class Bike implements Vehicle {
  constructor(private brand: string) {}
  start(): void {
    console.log(`Bike ${this.brand} starts pedaling`);
  }
}

// Demo (optional)
// const carB19 = new CarB19("Sedan");
// const bike = new Bike("Mountain");
// carB19.start();
// bike.start();

export { Vehicle, CarB19, Bike };

