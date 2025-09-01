
export class Rectangle {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }

  toString(): string {
    return `Rectangle ${this.width} x ${this.height} | Area=${this.area()} | Perimeter=${this.perimeter()}`;
  }
}
