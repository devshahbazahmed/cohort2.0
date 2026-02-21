// Strings

const { ref } = require("node:process");

// 71. Create a string and print its length using the `.length` property.

const subject = "JavaScript";
console.log(subject.length);

// 72. Print the last four characters of a string using the `.slice()` method with a negative index.

function getLastFourChars(str) {
  return str.slice(-4);
}
console.log(getLastFourChars(subject));

// 73. Convert a string to lowercase using `.toLowerCase()` and print the result.

function convertToLower(str) {
  return str.toLowerCase();
}
console.log(convertToLower(subject));

// 74. Split a string into an array using a space `" "` as the delimiter and print the result.

function splitString(str) {
  return str.split(" ");
}
const text = "I am learning JavaScript";
console.log(splitString(text));

// 75. Find and print the index of a specific character (e.g., `"A"`) inside a string using `.indexOf()`.

function findIndex(str, alphabet) {
  alphabet = alphabet.toLowerCase();
  return str.toLowerCase().indexOf(alphabet);
}
console.log(findIndex("Javascript", "S"));

// 76. Replace a word inside a string with another word using `.replace()` and print the updated string.

function replaceString(str, word, newWord) {
  const updatedStr = str.replace(word, newWord);
  return updatedStr;
}
console.log(replaceString("I am learning JavaScript", "JavaScript", "Python"));

// 77. Repeat a string three times using `.repeat()` and print the result.

function repeatString(str) {
  const repeatedStr = str.repeat(3);
  return repeatedStr;
}
console.log(repeatString("Javascript"));

// 78. Write a function that checks whether a given word exists inside a string using `.includes()`.

function checkWord(str, word) {
  return str.includes(word);
}
console.log(checkWord("I am learning JavaScript", "JavaScript"));

// 79. Remove all spaces from a string by splitting and rejoining it, then print the result.

function refactorStr(str) {
  return str.split(" ").join("");
}
console.log(refactorStr("I am learning JavaScript"));

// 80. Write a function that counts and returns the number of vowels in a given string.

function countVowels(str) {
  str = str.toLowerCase().split(" ").join("");
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

console.log(countVowels("Javascript"));
