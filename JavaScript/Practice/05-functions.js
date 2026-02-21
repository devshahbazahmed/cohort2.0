// Functions

// 41. Write a function that takes a number as input and returns whether it is "even" or "odd".

function evenOrOdd(num) {
  if (num % 2 === 0) return "even";
  else return "odd";
}
console.log(evenOrOdd(5));
console.log(evenOrOdd(10));

// 42. Create a function that calculates and returns the area of a circle given its radius.

function areaOfCircle(radius) {
  const PI = 3.14;
  const area = PI * radius * radius;
  return area;
}
console.log(areaOfCircle(5));
console.log(areaOfCircle(10));

// 43. Write a function that takes an array of numbers and returns the sum of all elements in the array.

function sumOfArrayNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumOfArrayNumbers([1, 2, 3, 4, 5]));

// 44. Write a function that checks whether a given string starts with a specified character. Return `true` or `false`.

function startWithCheck(str, startsWithStr) {
  str = str.toLowerCase();
  startsWithStr = startsWithStr.toLowerCase();

  if (str.startsWith(startsWithStr)) return true;
  else return false;
}
console.log(startWithCheck("Hello", "o"));

// 45. Create a function that takes two numbers and returns the larger of the two.

function compareNumbers(a, b) {
  if (a > b) return a;
  else return b;
}
console.log(compareNumbers(50, 100));
console.log(compareNumbers(510, 5));
console.log(compareNumbers(-10, -5));
console.log(compareNumbers(-10, 0));
console.log(compareNumbers(0, 20));

// 46. Write a recursive function that calculates and returns the factorial of a given number.

function factorial(num) {
  if (num === 0 || num === 1) return 1;

  return num * factorial(num - 1);
}
console.log(factorial(5));
console.log(factorial(10));

// 47. Write a function that reverses a string and returns the reversed version.

function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
console.log(reverseString("hello"));
console.log(reverseString("madam"));

// 48. Create a function that accepts an array of numbers and returns the largest number in the array.

function findLargestNumber(nums) {
  let largest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) largest = nums[i];
  }
  return largest;
}
console.log(findLargestNumber([23, 56, 92, 12, 5, 80]));
console.log(findLargestNumber([39, 69, 11, 8, 25, 77, 28]));

// 49. Write a function that converts a string into kebab-case (all lowercase words separated by hyphens).

function toKebabCase(str) {
  return str.toLowerCase().split(" ").join("-");
}
console.log(toKebabCase("Hello World From JS"));

// 50. Write a function named `helloWorld` that prints "Hello World" to the console.

function helloWorld() {
  console.log("Hello World");
}
helloWorld();
