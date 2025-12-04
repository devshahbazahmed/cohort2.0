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

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Tata", "Safari");
console.log(myCar);
console.log(myCar.drive());
console.log(myCar.start());

// let vehOne = Vehicle("Toyota", "Corolla");
// console.log(vehOne);

// Encapsulation

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account1 = new BankAccount();


console.log(account1.deposit(2000));
console.log(account1.getBalance());

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