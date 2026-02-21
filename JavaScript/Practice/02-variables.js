// Variables and Data types

// 11. Create a variable using `let` and print its value.

let count = 45;
console.log(count);

// 12. Declare a constant named `PI` with the value `3.14` and print it.

const PI = 3.14;
console.log(PI);

// 13. Create a variable, print its value, update the value, and print the updated value again.

let newCount = 50;
console.log(newCount);
newCount = 55;
console.log(newCount);

// 14. Print the output of `typeof null` and observe what type JavaScript reports.

console.log(typeof null);

// 15. Create a variable containing a numeric value as a string (e.g., `"25"`) and print its type.

const numString = "25";
console.log(numString);
console.log(typeof numString);

// 16. Create a boolean variable and print its type using `typeof`.

const isValid = false;
console.log(isValid);
console.log(typeof isValid);

// 17. Create three variables: a string, a number, and a boolean. Print all of them together in a formatted output.

const username = "John Doe";
const age = 45;
const isAuthorized = true;

console.log(
  `The user with username ${username} and age ${age} is ${isAuthorized ? "allowed to vote" : "not allowed to vote"}`,
);

// 18. Declare a variable without assigning a value and print its type using `typeof`.

let notDecided;
console.log(notDecided);
console.log(typeof notDecided);

// 19. Create a variable with the value `undefined` and print its type.

const schoolTime = undefined;
console.log(schoolTime);
console.log(typeof schoolTime);

// 20. Create an array using `const`, print it, attempt to reassign the entire array (and handle the error), then modify the existing array by adding a new element and print the updated array.

const fruits = ["Apple", "Banana", "Grapes", "Orange", "Mango"];
console.log(fruits);
try {
  fruits = ["Watermelon", "Chiku", "SweetLime"]; // This will throw an error
} catch (error) {
  console.log("Error while reassigning const array:", error.message);
}
fruits.push("Kiwi");
console.log(fruits);
