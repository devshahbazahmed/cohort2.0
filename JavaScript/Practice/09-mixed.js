// Mixed

// 81. Write a function that takes an array and returns a new array containing only the even numbers from the original array.

function evenArray(nums) {
  const evenNums = [];
  for (const n of nums) {
    if (n % 2 === 0) evenNums.push(n);
  }
  return evenNums;
}
console.log(evenArray([1, 2, 3, 4, 5]));

// 82. Create a function that counts how many times a specific value appears in an array.

function countValue(arr, val) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      count++;
    }
  }

  return count;
}
console.log(countValue([2, 5, 5, 8, 9, 3, 5, 6, 8], 5));

// 83. Write a function that takes a string as input and prints the reversed string.

function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}
console.log(reverseString("madam"));
console.log(reverseString("javascript"));

// 84. Create a function that prints a right-angled triangle pattern of asterisks (`*`) based on a given number.

//   Example for input 4:

//   *
//   **
//   ***
//   ****

function printPattern(n) {
  let stars = [];
  for (let i = 1; i <= n; i++) {
    stars.push("*");
    for (let j = 0; j < stars.length; j++) {
      process.stdout.write(stars[j]);
    }
    process.stdout.write("\n");
  }
}
printPattern(4);
printPattern(5);

// 85. Write a function that takes an array of numbers and returns a new array where each number is squared.

function squareNumber(nums) {
  return nums.map((n) => n * n);
}
console.log(squareNumber([1, 2, 3, 4, 5, 6]));

// 86. Using a loop, calculate and print the sum of all odd numbers between 1 and 50.

function calculateSumOfOdd() {
  let sum = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      sum += i;
      console.log(sum, i);
    }
  }
  return sum;
}
console.log(calculateSumOfOdd());

// 87. Create an object representing a person with first and last name, and print the full name by combining both values.

const person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(`Full name is ${person.firstName} ${person.lastName}`);

// 88. Convert a numeric string to a number using `parseInt()` and add 5 to it. Print the result.

function convertNumericStr(numStr) {
  return parseInt(numStr);
}
console.log(convertNumericStr("45"));

// 89. Reverse an array manually (without using `.reverse()`) and print the reversed array.

function reverseArray(arr) {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
}
console.log(reverseArray([12, 23, 34, 45, 56, 67, 78, 89, 90]));

// 90. Write a program that checks whether an array is empty. Print "array is empty" or "array is not empty".

function checkEmptyArray(arr) {
  if (arr.length === 0) return "array is empty";
  else return "array is not empty";
}
console.log(checkEmptyArray([]));
console.log(checkEmptyArray([45, 90]));

// 91. Get the current date and format it as `DD/MM/YYYY`. Print both the original `Date` object and the formatted date.

function getCurrentDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  console.log("Original Date: ", date);
  console.log(`Formatted Date: ${day}/${month}/${year}`);
}
getCurrentDate();

// 92. Using `Math.min()` and the spread operator, find and print the smallest number in an array.

function smallestNumber(arr) {
  const minNum = Math.min(...arr);
  return minNum;
}
console.log(smallestNumber([1, 2, 3, 4, 5]));

// 93. Write a function that returns the first `n` numbers of the Fibonacci sequence.

function fibonacci(n) {
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(10));

// 94. Write a function that divides two numbers. If the second number is zero, throw and catch an error saying "Cannot divide by zero".

function divideNumbers(a, b) {
  try {
    let res = 0;
    if (a === 0 || b === 0) {
      throw new Error("Cannot divide by zero");
    }

    if (a > b) res = a / b;
    else res = b / a;
    return res;
  } catch (err) {
    console.log(err);
  }
}
console.log(divideNumbers(10, 2));
console.log(divideNumbers(10, 30));
console.log(divideNumbers(0, 50));
console.log(divideNumbers(40, 0));

// 95. Write a function that returns the index of the first vowel in a string. If no vowel exists, return `-1`.

function firstVowel(str) {
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return i;
    }
  }

  return -1;
}
console.log(firstVowel("Javascript"));

// 96. Write a function that removes duplicate values from an array and returns the unique values.

function removeDuplicate(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(removeDuplicate([5, 4, 3, 9, 5, 8, 9, 7, 5, 6, 1, 5]));

// 97. Write a function that merges two sorted arrays into a single sorted array.

function mergeSortedArrays(arr1, arr2) {
  let i = 0,
    j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
console.log(mergeSortedArrays([1, 2, 3], [2, 4, 6]));

// 98. Create a function that returns the total number of characters in a string.

function totalCharacters(str) {
  return str.length;
}
console.log(totalCharacters("JavaScript"));

// 99. Access a button with the ID `toggleButton` and add a click event listener that toggles the button’s background color between blue and red.

const button = document.getElementById("toggleButton");

button.addEventListener("click", function () {
  if (button.style.backgroundColor === "blue") {
    button.style.backgroundColor = "red";
  } else {
    button.style.backgroundColor = "blue";
  }
});

// 100. Write a function that checks whether all numbers in an array are greater than a given value using the `.every()` method.

function checkNums(arr, val) {
  return arr.every((n) => n > val);
}

console.log(checkNums([1, 2, 3, 4, 5, 6], 0));
