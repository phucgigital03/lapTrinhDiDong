// bai26 placeholder
// ...existing code...
import { Product } from "./bai8";

class Order {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getProducts(): Product[] {
    return [...this.products];
  }

  totalPrice(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}


export { Order };
