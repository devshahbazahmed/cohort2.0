let computer = {
  cpu: 12,
};

let lenovo = { screen: "HD", __proto__: computer };

let samsung = {};

// console.log(`lenovo `, lenovo.__proto__);

let genericCar = {
  tyres: 4,
};

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

// console.log(`tesla `, Object.getPrototypeOf(tesla));

// Create a constructor function Animal that has a method `speak()` that return "Animal speaking". Then create another constructor Dog that inherits from Animal using prototypes. The Dog constructor should add a method `bark()` that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.

function Animal() { }

Animal.prototype.speak = function () {
  return `Animal speaking`;
};

function Dog(name) {
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `Woof!`;
};

let dog = new Dog("Tyson");
console.log(dog.bark());
console.log(dog.speak());