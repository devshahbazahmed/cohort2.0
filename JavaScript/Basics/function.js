// 1. What is the difference between function declaration and function expression in terms of hositing?

// Function declaration allows hoisting and function expression does not allows hoisting.

abcd();
function abcd() {
  console.log("hey");
}

efgh();
let efgh = function () {
  console.log("hello");
};

// 2. What does "..." operator mean in parameters?

function num(a, b, c, ...val) {
  console.log(a, b, c, val);
}

num(1, 2, 3, 4, 5, 6);

// 3. Use rest parameter to accept any number of scores and return the total.

function getScore(...scores) {
  let total = 0;
  scores.forEach(function (val) {
    total += val;
  });
  return total;
}

console.log(getScore(10, 12, 14, 18, 20));

// 4. What does it mean when we say "functions are first class citizens"?
// Functions can be used as values.

// 5. Pass a function into another function and then call it inside

function hello(val) {
  val();
}

hello(function () {
  console.log("hello");
});

// 6. Write a BMI Calculator:

function bmi(weight, height) {
  return weight / (height * height);
}

let ans = bmi(100, 1.78);
console.log(ans.toFixed(2));

// 7. Create a reusable discount calculator:

function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let discounter = discountCalculator(10);

console.log(discounter(200));

// 8. Build a counter using closure:

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());

// 9. Create a pure function to transform a value:

function double(val) {
  return val * 2;
}

console.log(double(5));

// 10. Use IIFE to isolate variables:

(function () {
  const password = "secret password";
  console.log(password);
})();

console.log(password);

let newArr = [1, 2, 3, 4];
arr.forEach((val) => console.log(val * 2));

// Level-1: Basic Function, Array & Object Code Tasks:

// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.

function sayHello() {
  console.log("Hello JavaScript");
}

sayHello();

// 2. Create a function `add(a, b)` that returns their sum and logs the result.

function add(a, b) {
  return a + b;
}

console.log(add(2, 6));

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi <name>"`.

function welcome(name = "guest") {
  console.log(`Hi ${name}`);
}

welcome();

// 4. Use rest parameters to make a function that adds unlimited numbers.

function addNumber(...nums) {
  let sum = nums.reduce(function (acc, val) {
    return acc + val;
  }, 0);

  return sum;
}

console.log(addNumber(1, 2, 3, 4, 5, 6));

// 5. Create an IIFE that prints `"I run instantly"`.

(function () {
  console.log("I run instatnly");
})();

// 6. Make a nested function where the inner one prints a variable from the outer one.

function outer() {
  let a = 12;
  function inner() {
    console.log(a);
  }
  inner();
}
outer();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

let fruits = ["Apple", "Mango", "Banana"];
fruits.push("Kiwi");
console.log(fruits);
fruits.shift();
console.log(fruits);

// 8. Use a `for` loop to print all elements of an array.

let arr = [12, 14, 16, 18, 20];
arr.forEach((val) => {
  console.log(val);
});

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key's value.

let person = {
  name: "Tyson",
  age: 25,
  city: "New York",
};

for (let key in person) {
  console.log(person[key]);
}

// 10. Use `setTimeout()` to log `"Time's up!"` after 2 seconds.

setTimeout(() => {
  console.log("Time's up");
}, 2000);

// Level-2: Functional Thinking and Logic Tasks:

// 1. Write a higher order function `runTwice(fn)` that takes another function and executes it two times.

function runTwice(fn) {
  fn();
  fn();
}

runTwice(function () {
  console.log("Hello there!");
});

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.

// Pure Function
function calculateDouble(val) {
  return val * 2;
}
console.log(calculateDouble(12));

// Impure Function
let discount = 20;
function calculateDiscount(amt) {
  return amt - amt * (discount / 100);
}
console.log(calculateDiscount(200));

// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.

function logPersonDetails({ name, age }) {
  console.log(`${name}: ${age}`);
}
logPersonDetails({
  name: "Kenny",
  age: 26,
  city: "Houston",
});

// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue).

const member = {
  name: "Ricky",
  greet: function () {
    console.log(`Hi ${this.name}`);
  }
};

member.greet();

const newUser = {
  name: "Rocky",
  greet: () => {
    console.log(`Hi ${this.name}`);
  }
};

user.greet();

// Arrow functions don’t have their own this.
// Instead, they lexically inherit this from their surrounding scope.
// In this case, the surrounding scope is the global context(or window in browsers), not the user object.
// So this.name is undefined.;

// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.

let nums = [10, 15, 20, 25, 30];
let squaredNums = nums.map((val) => val * val);
console.log(squaredNums);

// 6. Use `filter()` to get only even numbers from an array.

let numbers = [12, 13, 14, 15, 16, 17, 18, 19];
let filteredNumbers = numbers.filter((val) => val % 2 === 0);
console.log(filteredNumbers);

// 7. Use `reduce` to find the total salary from an array of numbers `[1000, 2000, 3000]`;

let salary = [1000, 2000, 3000];
let sum = salary.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(sum);

// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).

let names = ["Tyson", "Kai", "Brooklyn", "Jessie", "Ray"];
let someNames = names.some((val) => val.length > 3);
console.log(someNames);
let everyNames = names.every((val) => val.length > 3);
console.log(everyNames);

// 9. Create an object `user` and test the behaviour of `Object.freeze()` and `Object.seal()` by adding/changing keys.

let user = {
  name: "Roger",
  age: 30,
  city: "Mumbai",
  state: "Maharashtra",
  country: "India",
};

Object.seal(user);
user.age = 33;
console.log(user.age);

delete user.age; // Cannot delete when sealed
console.log(user);

Object.freeze(user);
user.age = 33; // Cannot change or delete the values when freezed
console.log(user.age);

// 10. Create a nested object (`user -> address -> city`) and access the city name inside it.

let user = {
  name: "Lester",
  age: 42,
  address: {
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
  }
};

console.log(user?.address?.city);