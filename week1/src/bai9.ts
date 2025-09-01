

export interface Animal {
  name: string;
  sound(): string;
}

export class Dog implements Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  sound(): string {
    return "Woof!";
  }
}
