// Loops

// 21. Write a program that prints the numbers from 1 to 50 using a `for` loop.

for (let i = 1; i <= 50; i++) {
  console.log(i);
}

// 22. Using a `while` loop, calculate and print the sum of numbers from 1 to 10.

let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

// 23. Iterate through each character of the string `"JavaScript"` using a `for...of` loop and print each character.

const str = "JavaScript";
for (const s of str) {
  console.log(s);
}

// 24. Using a `for` loop, print all odd numbers from 1 to 20. Use `continue` to skip even numbers.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

// 25. Use a `do...while` loop to print the numbers from 5 down to 1.

let decrease = 5;
do {
  console.log(decrease);
  decrease--;
} while (decrease > 0);

// 26. Write a program to calculate the factorial of 5 using a loop and print the result.

let fact = 1;
for (let i = 5; i > 0; i--) {
  fact *= i;
}
console.log(fact);

// 27. Use nested `for` loops to print a 3×3 grid pattern where each row contains the numbers 1 to 3.

//   Example output format:

//   1 2 3
//   1 2 3
//   1 2 3

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    process.stdout.write(j + " ");
  }
  process.stdout.write("\n");
}

// 28. Reverse an array manually (without using the `reverse()` method) and print the reversed array.

const nums = [1, 2, 3, 4, 5];
const reversed = [];
for (let i = nums.length - 1; i >= 0; i--) {
  reversed.push(nums[i]);
}
console.log(reversed);

// 29. Using a `while` loop, print all numbers between 1 and 100 that are divisible by 5.

let index = 1;
while (index <= 100) {
  if (index % 5 === 0) {
    console.log(index);
  }
  index++;
}

// 30. Create an object with keys like `name` and `age`. Use a `for...in` loop to print all the keys of the object.

const person = {
  name: "John Doe",
  age: 45,
  phone: 67890,
  city: "New York",
  country: "USA",
};

for (const key in person) {
  console.log(key);
}
