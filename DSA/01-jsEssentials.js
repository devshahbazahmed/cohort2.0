// Write a program that prints sum of two numbers

function sum(a, b) {
  console.log(a + b);
}

// Write a program that accepts the user's name and age and then prints the greeting message in the following format:
// "Hey Shery you are 12 years old."

function greet(name, age) {
  console.log(`Hello ${name} you are ${age} years old.`);
}

// Write a program to swap two numbers. After swapping, return the new values of the two numbers.

function swapNumbers(a, b) {
  let c = a;
  a = b;
  b = c;
  return [a, b];
}

// Calculate Compound Interest

function calculateCompoundInterest(P, r, t, n) {
  const amount = P * Math.pow((1 + r / n), (n * t));
  const CI = amount - P;
  return CI.toFixed(2);
}

// Operators

let x = 5;
x += 3 * 2;
console.log(x);

let a = 50;
a /= 5 - 2;
console.log(a);

let y = 7;
y += 2;
y *= 3;
y -= 4;
y %= 5;
console.log(y);
