import { Person } from "./bai1";


export class Student extends Person {
    private grade: number;

    constructor(name: string, age: number, grade: number){
        super(name,age);
        this.grade = grade;
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
    setName(name: string){
        this.name = name;
    }
    getGrade() : number{
        return this.grade;
    }
    setGrade(grade: number){
        this.grade = grade;
    }
    
    displayInfoStudent() : void{
        console.log(`Name: ${this.name}, Age: ${this.age}, grade: ${this.grade}`);
    }

}
