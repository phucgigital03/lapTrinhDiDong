"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai19_1 = require("./bai19");
const bai2_1 = require("./bai2");
const bai20_1 = require("./bai20");
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_1 = require("./bai23");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
const bai26_1 = require("./bai26");
const bai27_1 = require("./bai27");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai3_1 = require("./bai3");
const bai30_1 = require("./bai30");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
let person = new bai1_1.Person("John Doe", 30);
person.displayInfo();
let student = new bai2_1.Student("Jane Doe", 20, 90);
student.displayInfoStudent();
let car = new bai3_1.Car("Toyota", "Corolla", 2020);
car.showInfo();
let r1 = new bai4_1.Rectangle(10, 5);
console.log(r1.toString());
let acct = new bai5_1.BankAccount(100);
acct.deposit(50);
try {
    acct.withdraw(30);
}
catch (e) {
    console.error(e);
}
console.log(acct.toString()); // BankAccount balance=120
console.log("Final balance:", acct.getBalance());
let book = new bai6_1.Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book.info());
let user = new bai7_1.User();
user.setName("phuc nguyen");
console.log(user.toString());
const products = [
    new bai8_1.Product("Pen", 10),
    new bai8_1.Product("Headphones", 150),
    new bai8_1.Product("USB Cable", 25),
    new bai8_1.Product("Monitor", 220),
    new bai8_1.Product("Keyboard", 80),
];
const over100 = products.filter(p => p.price > 100);
console.log("Products > 100:", over100.map(p => `${p.name} (${p.price})`));
// Demo
const acc = new bai10_1.Account(500, "DE89 3704 0044 0532 0130 00");
acc.deposit(100);
acc.withdraw(50);
console.log(acc.iban);
console.log(acc.balance); // OK (public)
// acc.iban = "X";                 // Error (readonly)
// acc.internalId                  // Error (private)
console.log(acc.getInternalId()); // Access via method
const d = new bai11_1.DogB11("Rex");
d.move();
d.bark();
const c = new bai11_1.CatB11("Mimi");
c.move();
c.meow();
// Demo
const b = new bai12_1.Bird("Eagle");
b.fly();
const f = new bai12_1.Fish("Salmon");
f.swim();
// Demo
const sq = new bai13_1.Square(5);
console.log("Square area:", sq.area());
const ci = new bai13_1.Circle(3);
console.log("Circle area:", ci.area());
// Demo (optional)
const mgr = new bai14_1.Manager(1, "Alice");
const dev = new bai14_1.Developer(2, "Bob");
console.log(mgr.describe());
console.log(dev.describe());
mgr.scheduleMeeting("Roadmap");
dev.writeCode("Login feature");
// Demo (optional)
const lib = new bai15_1.Library();
lib.addBook(new bai15_1.BookB15(1, "Clean Code", "Robert C. Martin"));
lib.addBook(new bai15_1.BookB15(2, "Refactoring", "Martin Fowler"));
lib.addUser(new bai15_1.UserB15(1, "Alice"));
lib.addUser(new bai15_1.UserB15(2, "Bob"));
console.log("Books:", lib.listBooks());
console.log("Users:", lib.listUsers());
//Demo
let box1 = new bai16_1.BoxB16(123);
console.log(box1.getValue());
box1.setValue(456);
console.log(box1.getValue());
// Example usage (optional)
const logger = bai17_1.Logger.getInstance();
logger.log("App started");
// Example usage (optional)
console.log(bai18_1.MathUtil.add(2, 3));
console.log(bai18_1.MathUtil.divide(10, 2));
const carb19 = new bai19_1.CarB19("Sedan");
const bike = new bai19_1.Bike("Mountain");
carb19.start();
bike.start();
// Demo (optional)
const animals = [
    new bai20_1.AnimalB20("Generic"),
    new bai20_1.DogB20("Rex"),
    new bai20_1.CatB20("Milo")
];
(0, bai20_1.makeAllSpeak)(animals);
const repo = new bai21_1.Repository();
repo.add(1);
repo.add(2);
console.log(repo.getAll());
// Demo (optional)
const s = new bai22_1.Stack();
s.push(10);
s.push(20);
console.log(s.peek()); // 20
console.log(s.pop()); // 20
console.log(s.isEmpty()); // false
// Demo (optional)
const cash = new bai23_1.CashPayment();
cash.pay(100);
const card = new bai23_1.CardPayment("1234567812345678");
card.pay(250);
// Demo (optional)
const fan = new bai24_1.Fan("Panasonic");
const ac = new bai24_1.AirConditioner("Daikin");
fan.turnOn();
ac.turnOn();
// Demo (optional)
console.log(bai25_1.Shape.describe());
// Demo (optional)
const order = new bai26_1.Order();
order.addProduct(new bai8_1.Product("Pen", 10));
order.addProduct(new bai8_1.Product("Keyboard", 80));
console.log("Total:", order.totalPrice());
// Demo (optional)
const t = new bai27_1.Teacher("Alice", 35, "Math");
console.log(t.introduce());
// Demo (optional)
const dog = new bai28_1.DogB28("Rex");
const cat = new bai28_1.CatB28("Mimi");
dog.speak(); // Rex: Woof
cat.speak(); // Mimi: Meow
// Demo (optional)
const carB29 = new bai29_1.CarB29("Toyota");
const robot = new bai29_1.Robot("R2D2");
carB29.move();
robot.move();
// Demo (optional)
const school = new bai30_1.School();
school.addTeacher(new bai30_1.TeacherB30(1, "Alice", "Math"));
school.addTeacher(new bai30_1.TeacherB30(2, "Bob", "History"));
school.addStudent(new bai30_1.StudentB30(1, "Charlie", 9));
school.addStudent(new bai30_1.StudentB30(2, "Dana", 10));
school.displayInfo();
