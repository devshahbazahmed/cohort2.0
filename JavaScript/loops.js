// Level 1 -> Pure Begineer Practice:

// 1. Print numbers from 1 to 10. Loop from 1 to 10 and print each number.

for (let i = 1; i < 11; i++) {
  console.log(i);
}

// 2. Print only even numbers from 1 to 20. Use a loop and condition to print only even ones.

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. Print numbers from 10 to 1. Reverse loop with a decrement.

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// 4. Print the word "Yes" 5 times. Repeat using a loop.

for (let i = 0; i < 5; i++) {
  console.log("Yes");
}

// 5. Print whether numbers from 1 to 10 are even or odd.
// For each number, check: even -> "Even", else -> "Odd".

for (let i = 1; i < 11; i++) {
  if (i % 2 !== 0) {
    console.log(`${i} is Odd`);
  } else {
    console.log(`${i} is Even`);
  }
}

// 6. Ask user for a number and say if it's positive or negative.
// Use prompt and a conditional.

let num = prompt("Enter a number: ");

if (num === null) {
  console.error("You pressed cancel");
} else {
  if (num.trim() === "") {
    console.error("Please enter a number");
  } else {
    num = Number(num);
    if (isNaN(num)) {
      console.error("Please enter a valid number");
    } else {
      if (num >= 0) console.log(`${num} is positive number`);
      else console.log(`${num} is negative number`);
    }
  }
}

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

let age = prompt("Enter your age: ");

if (age === null) {
  console.error("You pressed cancel");
} else {
  if (age.trim() === "") {
    console.error("Please enter an age");
  } else {
    age = Number(age);
    if (isNaN(age)) {
      console.error("Please enter a valid age");
    } else {
      if (age >= 18 && age < 151) console.log("Eligible to vote");
      else if (age < 18 && age >= 0) console.log("Not eligible to vote");
      else console.log("Not a valid age");
    }
  }
}

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.;

for (let i = 1; i < 11; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

let total = 0;
for (let i = 1; i <= 15; i++) {
  if (i > 8) {
    total++;
  }
}
console.log(total);

// 10. Ask user for password and print access status
// Hardcoded correct password.Compare with user input.

let pass = "mypass";
let userPass = prompt("Enter your password: ");

if (userPass === null) {
  console.error('You pressed cancel');
} else {
  if (userPass.trim() === "") {
    console.error("Please enter a password");
  } else {
    if (userPass === pass) console.log("Access granted");
    else console.log("Access denied");
  }
}

// Level 2 -> Slightly Tougher but Logical:

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop.If not → “Account locked”

let attempts = 0;
let password = "mypass";
let userPassword = prompt("Enter your password: ");
attempts++;

while (userPassword !== password && attempts < 3) {
  userPassword = prompt("Enter your password: ");
  attempts++;
}

if (attempts === 3 && userPassword !== password) console.error("Account Locked");
else console.log("Access granted");

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed.Count "yes".

let yesCount = 0;
let word = prompt("Enter the word: ");

while (word !== "stop") {
  word = prompt("Enter the word: ");
  if (word === "yes") yesCount++;
}

console.log(`Total yes count: ${yesCount}`);

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

for (let i = 1; i < 51; i++) {
  if (i % 7 === 0) console.log(i);
}

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers.Print final sum.

let sum = 0;
for (let i = 1; i <= 30; i++) {
  if (i % 2 !== 0) sum += i;
}
console.log(sum);

// 15. Keep asking number until user enters an even number
// Use while loop.Stop only if input is even.

let userNumber = Number(prompt("Enter a number: "));

while (userNumber % 2 !== 0) {
  console.log(`${userNumber} is an Odd number`);
  userNumber = Number(prompt("Enter a number: "));
}
console.log(`${userNumber} is an Even number`);

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

let start = Number(prompt("Enter the start number: "));
let end = Number(prompt("Enter the end number: "));

if (start > end) console.error("Start number should be less than end number");
for (let i = start; i <= end; i++) {
  console.log(i);
}

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop.Stop with break after 3 odd prints.

let count = 0;

for (let i = 1; i < 21; i++) {
  if (i % 2 !== 0) {
    if (count === 3) break;
    console.log(i);
    count++;
  }
}

// 18. Ask user 5 numbers.Count how many are positive
// Use loop + condition + counter.

let counter = 0;

for (let i = 1; i < 6; i++) {
  let num = Number(prompt("Enter number:"));
  if (num >= 0) counter++;
}

console.log(counter);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance.Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance = 1000;
let withdrawalCount = 0;
let flag = false;

while (withdrawalCount !== 3 && balance > 0) {
  let amount = Number(prompt("Enter the withdrawal amount: "));
  withdrawalCount++;
  if (amount <= balance) balance -= amount;
  else {
    flag = true;
    break;
  }
}

if (flag === true) console.error("Insufficient balance");

console.log(`Balance: ${balance}`);
