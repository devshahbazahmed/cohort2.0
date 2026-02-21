// Conditionals

// 51. Return "positive", "negative" or "zero" for a number.

function checkNumber(num) {
  if (num > 0) return "positive";
  else if (num === 0) return "zero";
  else return "negative";
}
console.log(checkNumber(45));
console.log(checkNumber(0));
console.log(checkNumber(-10));

// 52. Convert Celcius to Fahrenheit using a function.

function convertTemperature(temp) {
  return (temp * 9) / 5 + 32;
}

let tempC = 25;
let tempF = convertTemperature(tempC);

console.log(tempC + "°C =", tempF + "°F");

// 53. Return the average of numbers in an array.

function countAverage(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  const avg = sum / nums.length;
  return avg;
}
console.log(countAverage([1, 2, 3, 4, 5]));

// 54. Check if a string is a palindrome.

function palindrome(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  if (reverseStr === str) return "Given string is Palindrome";
  else return "Not a Paindrome";
}
console.log(palindrome("madam"));
console.log(palindrome("hello"));

// 55. Check whether a number is prime.

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
console.log(isPrime(5));
console.log(isPrime(10));

// 56. Count total words in a sentence.

function countWords(sentence) {
  return sentence.split(" ").length;
}
console.log(countWords("Hello world from JavaScript"));

// 57. Return the longest word from a string.

function longestWord(sentence) {
  let largestWord = "";
  const word = sentence.split(" ");
  for (let i = 0; i < word.length; i++) {
    if (largestWord.length < word[i].length) {
      largestWord = word[i];
    }
  }
  return largestWord;
}

console.log(longestWord("Hello world from JavaScript"));

// 58. Remove falsy values from an array.

function removeFalsy(arr) {
  // return arr.filter(Boolean);
  return arr.filter((item) => item);
}
console.log(
  removeFalsy([
    0,
    1,
    2,
    3,
    4,
    true,
    false,
    NaN,
    undefined,
    null,
    "",
    "Total",
    "Marks",
  ]),
);

// 59. Convert a string to camelCase.

function camelCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((s, index) => {
      if (index === 0) return s;
      return s.charAt(0).toUpperCase() + s.slice(1);
    })
    .join("");
}

console.log(camelCase("hello world example"));

// 60. Generate a random number between two values.

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandom(1, 10));
