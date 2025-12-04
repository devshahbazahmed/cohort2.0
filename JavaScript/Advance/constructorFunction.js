// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("dog");
console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}

// const tea = new Drink("tea");
// const coffee = Drink("Coffee");

// Task 1: Create Functional Constructor:
// Create a functional constructor Person that takes name and age as parameters. Add a method `greet()` to the constructor that returns "Hello, my name is [name]".

// Task 2: Handle Errors:
// Modify the Person constructor to throw an error if the age is not a positive number.

function Person(name, age) {
  this.name = name;
  this.age = age;

  if (age < 0) {
    throw new Error("Age must be a positive number");
  }
  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
}

let p1 = new Person("Hitesh", -34);
console.log(p1.name, p1.age);
console.log(p1.greet());

