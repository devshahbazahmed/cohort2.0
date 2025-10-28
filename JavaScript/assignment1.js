// alert("Hello from Sheryians!");
console.log("Connected!");

var a = "Harsh";
let b = "Sheryians";
const c = "School";

a = "Updated";
b = "Updated";
// c = "Updated";

// console.log(a, b, c);

{
  let n = "Your name";
}

// console.log(n);

const PI = 3.14;
const basURL = "https://google.com";
const maxLoginAttempts = 5;

// const name = "Tyson";
// const age = 45;
// const city = "New York";

// console.log(name);
// console.info(age);
// console.warn(city);

// let value = prompt("Enter your name: ");
// console.log(value);
// console.log(typeof value);
// alert(`Welcome! ${value}`);

// let age = prompt("Enter age: ");
// console.log(age + 5);

let msg = "I love Sheryians";
console.log(msg.slice(2, 6));
console.log(msg.split(" "));
console.log(msg.replace("love", "study at"));
console.log(msg.includes("love"));

// let name = "Harsh";
// console.log(`Hey ${name}, welcome to JS`);

console.log("Hello");
console.log("Hi");
// console.log("Hola");

// My name

/* My code does console checks
It also checks the warn
Also it splits replaces and checks a word includes in a string */

// console.log(5 + 10);
// let x = 10;
// console.log(x);

// let y = (5 + 10) * 2; console.log(y);

// Expression produces a value and a statement is a complete instruction that produces code.

// let age = 25;
// let name = "Harsh";
// let isStudent = true;
// let skills = ["JS", "HTML"];
// let user = { city: "Bhopal" };
// let x = null;
// let y = 45;
// let z = Symbol("id");

// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof isStudent);
// console.log(typeof skills);
// console.log(typeof user);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

console.log(5 + "5");

console.log(1 / 0); // Infinity
console.log(0 / 0); // NaN
console.log(Number("abc")); // NaN
console.log(undefined + 1); // NaN

// undefined is value not assigned to variable and null is explicitly given to a variable to keep it empty.

let x = 5;
let y = x;
y = 10;
console.log(x, y);

let obj1 = { name: "Harsh" };
let obj2 = obj1;
obj2.name = "Sheryians";
console.log(obj1.name);