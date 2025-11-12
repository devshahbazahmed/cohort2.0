// Basic Operators:

// const a = 10;
// const b = 3;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

let x = 5;
// x = x + 3;
x += 3;
x -= 5;
x *= 3;
x %= 2;
console.log(x);

let count = 5;
console.log(count);
count++;
console.log(count);
count--;
console.log(count);

console.log(5 == "5");
console.log(5 === "5");

if (10 > 5 && 10 < 20 && 10 === 10) {
  console.log(true);
} else {
  console.log(false);
}

console.log(true && false);
console.log(true || false);
console.log(!true);

console.log(5 > 3 && 10 > 8);
console.log(5 > 3 || 10 < 8);

console.log(5 & 1);
console.log(5 | 1);

// Variable Hoisting:

console.log(a);
var a = 10;

console.log(b);
let b = 20;

test();
function test() {
  console.log("Hello");
}

hello();
var hello = function () { console.log("Hi"); };

// Variables and functions get hoisted.
// Function expressions does not get hoisted completely/fully.

// Conditional Operators:

let age = prompt("Enter your age: ");
console.log(age);
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

let marks = prompt("Enter the marks: ");
console.log(marks);
if (marks >= 90 && marks < 100) {
  console.log("A grade");
} else if (marks >= 75 && marks < 90) {
  console.log("B grade");
} else if (marks >= 50 && marks < 75) {
  console.log("C grade");
} else {
  console.log("Fail");
}

let city = "Mumbai";

if (city === "Bhopal") {
  console.log("MP");
} else if (city === "Delhi") {
  console.log("Capital");
} else {
  console.log("Unknown City");
}

let score = 40;
score > 35 ? console.log("Pass") : console.log("Fail");

let temperature = 50;
temperature > 30 ? console.log("Hot") : console.log("Pleasant");

let day = prompt("Enter day number: ");

switch (Number(day)) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
    break;
}

let newAge = prompt("Enter your age: ");
let country = "India";

if (newAge > 18 && country == "India") {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}