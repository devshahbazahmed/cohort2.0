let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  }
};

// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);

console.log(john.name);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.greet = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3, 4];
console.log(myArray.greet());
let myNewArray = [5, 6, 7,];
console.log(myNewArray.greet());

// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   start() {
//     return `${this.model} is a car from ${this.make}`;
//   }
// }

// class Car extends Vehicle {
//   drive() {
//     return `${this.make} : This is an inheritance example`;
//   }
// }

// let myCar = new Car("Tata", "Safari");
// console.log(myCar);
// console.log(myCar.drive());
// console.log(myCar.start());

// let vehOne = Vehicle("Toyota", "Corolla");
// console.log(vehOne);

// Encapsulation

// class BankAccount {
//   #balance = 0;

//   deposit(amount) {
//     this.#balance += amount;
//     return this.#balance;
//   }

//   getBalance() {
//     return `$ ${this.#balance}`;
//   }
// }

// let account1 = new BankAccount();


// console.log(account1.deposit(2000));
// console.log(account1.getBalance());

// Abstraction

class CoffeeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine`;
  }

  brewCoffee() {
    // complex calculation
    return `Brewing Coffee`;
  }

  pressStartButton() {
    let startMsge = this.start();
    let brewMsge = this.brewCoffee();

    return `${startMsge} + ${brewMsge}`;
  }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

// Polymorphism

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly...`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

console.log(bird.fly());
console.log(penguin.fly());

// static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

console.log(Calculator.add(2, 3));

// Getters and Setters

class Employee {

  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error(`Invalid salary`);
    } else {
      this._salary = value;
    }
  }
}

let emp1 = new Employee("Alice", 50000);
emp1.salary = -60000;
console.log(emp1.salary);

// Task 1: Class Inheritance:
// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]".Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".

// Task 2: Method Overriding in Inheritance:
// Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving".Then, override the move() method in the Car class to return "The car is driving".

// Task 3: Static Methods in Classes:
// Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle.The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }

  move() {
    return "The vehicle is moving";
  }

  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

class Car extends Vehicle {
  startEngine() {
    return "Engine started";
  }

  move() {
    return "The car is driving";
  }
}

let car2 = new Car("Toyota", "Safari");

console.log(car2.startEngine());
console.log(car2.move());
console.log(car2.getDetails());
console.log(Vehicle.isVehicle({ make: "Honda", model: "City" }));


// Task 1: Encapsulation Using Getters and Setters
// Create a class BankAccount with a private property _balance.Add methods deposit(amount) and withdraw(amount).Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

class BankAccount {
  #balance = 0;
  constructor(initialBalance = 0) {
    this.#balance = initialBalance > 0 ? initialBalance : 0;
  }

  get balance() {
    return this.#balance;
  }

  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this.#balance = amount;
    return this.#balance;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error("Deposit amount cannot be negative");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new Error("Withdraw amount cannot be negative");
    }

    if (this.#balance - amount < 0) {
      throw new Error("Balance cannot be negative");
    }

    this.#balance -= amount;
    return this.#balance;
  }
}

let account = new BankAccount(2000);
console.log(account.deposit(20));
console.log(account.withdraw(200));

// Task 2: Polymorphism with Method Overriding
// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

let circleArea = new Circle(34);
console.log(circleArea.area());

let rectArea = new Rectangle(10, 20);
console.log(rectArea.area());

class User {
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }

  checkRole() {
    return `Your role is ${this.role}`;
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name} : ${text}`;
    document.body.appendChild(h1);
  }
}

class Admin extends User {
  constructor(name, address, username, email) {
    super(name, address, username, email);
    this.role = "admin";
  }

  remove() {
    document.querySelectorAll("h1").forEach((elem) => {
      elem.remove();
    });
  }
}

let u1 = new User("Tyson", "India", "tyson123", "tyson@gmail.com");
let u2 = new User("Kai", "Russia", "kai890", "kai@gmail.com");
let a1 = new Admin("Max", "Georgia", "max123", "max@gmail.com");