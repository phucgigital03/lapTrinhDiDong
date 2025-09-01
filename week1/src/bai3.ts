

export class Car {
    private brand: string;
    private model: string;
    private year: number;

  constructor(
    brand: string,
    model: string,
    year: number
  ) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  showInfo(): void {
    console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
  }

  // Optional getters/setters
  getBrand() { return this.brand; }
  getModel() { return this.model; }
  getYear() { return this.year; }
  setBrand(brand: string) { this.brand = brand; }
  setModel(model: string) { this.model = model; }
  setYear(year: number) { this.year = year; }
}


