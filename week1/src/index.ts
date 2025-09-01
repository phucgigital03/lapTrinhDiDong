import { Person } from "./bai1";
import { Account } from "./bai10";
import { CatB11, DogB11 } from "./bai11";
import { Bird, Fish } from "./bai12";
import { Circle, Square } from "./bai13";
import { Developer, Manager } from "./bai14";
import { BookB15, Library, UserB15 } from "./bai15";
import { BoxB16 } from "./bai16";
import { Logger } from "./bai17";
import { MathUtil } from "./bai18";
import { Bike, CarB19 } from "./bai19";
import { Student } from "./bai2";
import { AnimalB20, CatB20, DogB20, makeAllSpeak } from "./bai20";
import { Repository } from "./bai21";
import { Stack } from "./bai22";
import { CardPayment, CashPayment } from "./bai23";
import { AirConditioner, Fan } from "./bai24";
import { Shape } from "./bai25";
import { Order } from "./bai26";
import { Teacher } from "./bai27";
import { CatB28, DogB28 } from "./bai28";
import { CarB29, Robot } from "./bai29";
import { Car } from "./bai3";
import { School, StudentB30, TeacherB30 } from "./bai30";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";
import { User } from "./bai7";
import { Product } from "./bai8";

let person = new Person("John Doe", 30);
person.displayInfo();

let student = new Student("Jane Doe", 20, 90);
student.displayInfoStudent();

let car = new Car("Toyota", "Corolla", 2020);
car.showInfo();

let r1 = new Rectangle(10, 5);
console.log(r1.toString());


let acct = new BankAccount(100);
acct.deposit(50);
try {
  acct.withdraw(30);
} catch (e) {
  console.error(e);
}
console.log(acct.toString());            // BankAccount balance=120
console.log("Final balance:", acct.getBalance()); 


let book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book.info());


let user = new User();
user.setName("phuc nguyen");
console.log(user.toString());

const products: Product[] = [
  new Product("Pen", 10),
  new Product("Headphones", 150),
  new Product("USB Cable", 25),
  new Product("Monitor", 220),
  new Product("Keyboard", 80),
];

const over100 = products.filter(p => p.price > 100);
console.log("Products > 100:", over100.map(p => `${p.name} (${p.price})`));

// Demo
const acc = new Account(500, "DE89 3704 0044 0532 0130 00");
acc.deposit(100);
acc.withdraw(50);
console.log(acc.iban);
console.log(acc.balance);          // OK (public)
// acc.iban = "X";                 // Error (readonly)
// acc.internalId                  // Error (private)
console.log(acc.getInternalId());  // Access via method

const d = new DogB11("Rex");
d.move();
d.bark();

const c = new CatB11("Mimi");
c.move();
c.meow();

// Demo
const b = new Bird("Eagle");
b.fly();

const f = new Fish("Salmon");
f.swim();


// Demo
const sq = new Square(5);
console.log("Square area:", sq.area());

const ci = new Circle(3);
console.log("Circle area:", ci.area());

// Demo (optional)
const mgr = new Manager(1, "Alice");
const dev = new Developer(2, "Bob");
console.log(mgr.describe());
console.log(dev.describe());
mgr.scheduleMeeting("Roadmap");
dev.writeCode("Login feature");

// Demo (optional)
const lib = new Library();
lib.addBook(new BookB15(1, "Clean Code", "Robert C. Martin"));
lib.addBook(new BookB15(2, "Refactoring", "Martin Fowler"));
lib.addUser(new UserB15(1, "Alice"));
lib.addUser(new UserB15(2, "Bob"));
console.log("Books:", lib.listBooks());
console.log("Users:", lib.listUsers());


//Demo
let box1 = new BoxB16<number>(123);
console.log(box1.getValue());
box1.setValue(456);
console.log(box1.getValue());

// Example usage (optional)
const logger = Logger.getInstance();
logger.log("App started");


// Example usage (optional)
console.log(MathUtil.add(2,3));
console.log(MathUtil.divide(10,2));

const carb19 = new CarB19("Sedan");
const bike = new Bike("Mountain");
carb19.start();
bike.start();

// Demo (optional)
const animals: AnimalB20[] = [
  new AnimalB20("Generic"),
  new DogB20("Rex"),
  new CatB20("Milo")
];
makeAllSpeak(animals);

const repo = new Repository<number>();
repo.add(1); repo.add(2);
console.log(repo.getAll());

// Demo (optional)
const s = new Stack<number>();
s.push(10); s.push(20);
console.log(s.peek()); // 20
console.log(s.pop());  // 20
console.log(s.isEmpty()); // false

// Demo (optional)
const cash = new CashPayment();
cash.pay(100);
const card = new CardPayment("1234567812345678");
card.pay(250);


// Demo (optional)
const fan = new Fan("Panasonic");
const ac = new AirConditioner("Daikin");
fan.turnOn();
ac.turnOn();

// Demo (optional)
console.log(Shape.describe());

// Demo (optional)
const order = new Order();
order.addProduct(new Product("Pen", 10));
order.addProduct(new Product("Keyboard", 80));
console.log("Total:", order.totalPrice());


// Demo (optional)
const t = new Teacher("Alice", 35, "Math");
console.log(t.introduce());

// Demo (optional)
const dog = new DogB28("Rex");
const cat = new CatB28("Mimi");
dog.speak(); // Rex: Woof
cat.speak(); // Mimi: Meow

// Demo (optional)
const carB29 = new CarB29("Toyota");
const robot = new Robot("R2D2");
carB29.move();
robot.move();


// Demo (optional)
const school = new School();
school.addTeacher(new TeacherB30(1, "Alice", "Math"));
school.addTeacher(new TeacherB30(2, "Bob", "History"));
school.addStudent(new StudentB30(1, "Charlie", 9));
school.addStudent(new StudentB30(2, "Dana", 10));
school.displayInfo();

