

export class User {
  private _name: string;

  constructor(){
    this._name = "";
  }
  

  public getName(): string {
    return this._name;
  }

  public setName(value: string): void {
    if (!value.trim()) throw new Error("Name cannot be empty");
    this._name = value;
  }

  public toString(): string {
    return `User(name=${this._name})`;
  }
}

