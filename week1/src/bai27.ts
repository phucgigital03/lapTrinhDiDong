// bai27 placeholder

import { Person } from "./bai1"; // Adjust if Person is exported differently

class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }

  introduce(): string {
    return `Hi, I'm ${this.name}, I teach ${this.subject}.`;
  }
}

// Demo (optional)
// const t = new Teacher("Alice", 35, "Math");
// console.log(t.introduce());

export { Teacher };
