
 export class Person {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getAge() : number{
        return this.age;
    }
    getName() : string{
        return this.name;
    }
    setAge(age: number){
        this.age = age;
    }
    setNumber(age: number){
        this.age = age;
    }

    displayInfo() : void{
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

}

