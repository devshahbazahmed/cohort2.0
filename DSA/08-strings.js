// Print each character in a new line

function printEachChar(str) {
  str = String(str);

  for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
  }
}

console.log(printEachChar("world"));
console.log(printEachChar("hello"));
console.log(printEachChar("12345"));

// Reverse a string

function reverseString(str) {
  str = String(str);

  let reverseStr = "";

  for (let i = str.length; i >= 0; i--) {
    reverseStr += str.charAt(i);
  }
  return reverseStr;
}

console.log(reverseString("hello"));
console.log(reverseString("shery"));
console.log(reverseString("racecar"));

// Palindrome String in PLace

function isPalindromeInPlace(str) {
  str = String(str);
  let i = 0,
    j = str.length - 1;
  let isPalindrome = true;
  while (i < j) {
    if (str.charAt(i) !== str.charAt(j)) {
      isPalindrome = false;
      break;
    }
    i++;
    j--;
  }

  if (isPalindrome) return "Yes";
  else return "No";
}

console.log(isPalindromeInPlace("aba"));
console.log(isPalindromeInPlace("abba"));
console.log(isPalindromeInPlace("Madam"));

let str1 = "JavaScript";
console.log(str1.slice(4, 10));

let str2 = "apple,banana,grape";
const res = str2.split(",");
console.log(res[1]);

let str3 = "apple";
console.log(str3.includes("app"));
let str4 = "JavaScript";
console.log(str4.replace("a", "o"));

// Toggle Alphabet Case

function toggleCase(str) {
  let toggleStr = "";
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      toggleStr = toggleStr + String.fromCharCode(ascii + 32);
    } else if (ascii >= 97 && ascii <= 122) {
      toggleStr = toggleStr + String.fromCharCode(ascii - 32);
    } else {
      toggleStr += str[i];
    }
  }
  return toggleStr;
}

console.log(toggleCase("AcgDfD"));
console.log(toggleCase("HeLLo123"));
console.log(toggleCase("HELLOworld"));

// Count Strings with Given Prefix

function countPrefixMatch(words, pref) {
  let count = 0;
  for (const word of words) {
    if (word.startsWith(pref)) count += 1;
  }
  return count;
}

console.log(countPrefixMatch(["pay", "attention", "practice", "attend"], "at"));
console.log(
  countPrefixMatch(["java", "javascript", "python", "javadoc"], "java")
);
console.log(countPrefixMatch(["dog", "car", "cat", "card"], "ca"));

let str = "hello";
str[0] = "H";
console.log(str);

// Capitalize first and last character of each word

function capitalizeEnds(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 1) return word.toUpperCase();

      const first = word[0].toUpperCase();
      const last = word[word.length - 1].toUpperCase();
      const middle = word.slice(1, -1);

      return first + middle + last;
    })
    .join(" ");
}

console.log(capitalizeEnds("Hello bhai kaise ho"));
console.log(capitalizeEnds("java is fun"));
console.log(capitalizeEnds("HELLO FRIENDS"));

// Character Frequency in a string

function characterFrequency(str) {
  const freq = {};
  str = str.toLowerCase();

  for (let char of str) {
    if (char !== " ") {
      freq[char] = (freq[char] || 0) + 1;
    }
  }

  Object.keys(freq)
    .sort()
    .forEach((char) => {
      console.log(`${char}: ${freq[char]}`);
    });
}

console.log(characterFrequency("hello"));
console.log(characterFrequency("sherry"));
console.log(characterFrequency("kabhi khushi kabhi gham"));

// Check if Two Strings are Anagrams:

function isAnagram(s1, s2) {
  // Clean strings: remove spaces + lowercase
  const clean1 = s1.toLowerCase().replace(/\s/g, "");
  const clean2 = s2.toLowerCase().replace(/\s/g, "");

  // If lengths differ → not anagram
  if (clean1.length !== clean2.length) return false;

  // Sort and compare
  return clean1.split("").sort().join("") === clean2.split("").sort().join("");
}
console.log(isAnagram("arc", "car"));
console.log(isAnagram("taste", "state"));
console.log(isAnagram("chai", "shai"));

// Maximum Number of Words found in Sentence

function mostWordsFound(sentences) {
  let count = 0;
  for (let sentence of sentences) {
    const words = sentence.split(" ");
    if (words.length > count) count = words.length;
  }
  return count;
}

console.log(
  mostWordsFound([
    "coding is fun",
    "practice makes perfect",
    "consistency is the key to success",
  ])
);
console.log(mostWordsFound(["hi hello", "hello hi hi", "you will win"]));
console.log(mostWordsFound(["hi", "ok", "yes", "no"]));

// Sort the Word in a Sentence

function sortSentence(s) {
  return s.split(" ").sort().join(" ");
}

console.log(sortSentence("hello world"));
console.log(sortSentence("sorting words in a sentence"));
console.log(sortSentence("taj mahal is sitauted at Agra"));

// Count Asterisks

function countAsterisks(s) {
  let count = 0;
  let insidePipe = false;
  for (let char of s) {
    if (char === "|") {
      insidePipe = !insidePipe;
    } else if (char === "*" && !insidePipe) {
      count++;
    }
  }
  return count;
}

console.log(countAsterisks("iamprogrammer"));
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));
console.log(countAsterisks("*|*|*|*|*|*|*|*"));

// Percentage of Letter in String

function percentageLetter(s, letter) {
  let count = 0;
  for (let char of s) {
    if (char === letter) {
      count++;
    }
  }
  const percent = (count / s.length) * 100;
  const result = Math.floor(percent);
  return result;
}
console.log(percentageLetter("hello", "l"));
console.log(percentageLetter("mississippi", "s"));

// Check if all A's appear before all B's

function checkString(s) {
  s = s.toLowerCase();
  return !s.includes("ba");
}

console.log(checkString("AAABBB")); // true
console.log(checkString("AABBAB")); // false

// Strong Password Checker II

function strongPasswordChecker(password) {
  if (password.length < 8) return false;

  if (!/[a-zA-Z]/.test(password)) return false;

  if (!/[0-9]/.test(password)) return false;

  if (!/[!@#$%^&*()-+]/.test(password)) return false;

  for (let i = 1; i < password.length; i++) {
    if (password[i] === password[i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(strongPasswordChecker("Abcdefg1!"));
console.log(strongPasswordChecker("Abcdefg1"));
console.log(strongPasswordChecker("Aa1!aa1!"));

// Greatest English Letter in Upper and Lower Case

function greatestLetter(s) {
  let result = "";
  let maxCode = 0;

  for (let i = 0; i < s.length; i++) {
    const ascii = s.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      if (maxCode < ascii) {
        maxCode = ascii;
      }
    }
  }
  result = String.fromCharCode(maxCode);

  return result;
}

console.log(
  greatestLetter("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ")
);
console.log(greatestLetter("abcABC"));

// Rearrange Characters to make target String

function checkDistance(s, distance) {
  const firstIndex = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (firstIndex[char] === undefined) {
      firstIndex[char] = i; // store first occurrence
    } else {
      const diff = i - firstIndex[char] - 1;
      const expected = distance[char.charCodeAt(0) - 97];

      if (diff !== expected) return false;
    }
  }

  return true;
}
console.log(
  checkDistance("abccba", "1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0")
);
console.log(
  checkDistance(
    "zzxxccvvbbnnmmllkkjjiihhggffddssaa",
    "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
  )
);

// Largest 3-Same-Digit Number in String

function largestGoodInteger(num) {
  let result = "";

  for (let i = 0; i < num.length - 2; i++) {
    const sub = num.slice(i, i + 3);
    if (sub[0] === sub[1] && sub[i] === sub[2]) {
      if (sub > result) {
        result = sub;
      }
    }
  }

  return result;
}

console.log(largestGoodInteger("6777133339"));
console.log(largestGoodInteger("2300019"));

// Remove Digit from Number to Maximize Result

function removeDigit(number, digit) {
  let max = "";
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      const newNum = number.slice(0, i) + number.slice(i + 1);
      if (newNum > max) {
        max = newNum;
      }
    }
  }
  return max;
}

console.log(removeDigit("1231", "1"));
console.log(removeDigit("551", "5"));

// Check if Number has equal Digit Count and Digit Value

function digitCount(num) {
  const freq = {};

  // Count frequency of digits
  for (let char of num) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Validate condition
  for (let i = 0; i < num.length; i++) {
    const expected = Number(num[i]);
    const actual = freq[i] || 0;

    if (actual !== expected) {
      return false;
    }
  }

  return true;
}

console.log(digitCount("1210"));
console.log(digitCount("030"));

// Find Resultant Array after removing Anagrams

function removeAnagram(words) {
  const result = [];
  for (let word of words) {
    const sorted = word.split("").sort().join("");
    if (
      result.length === 0 ||
      sorted !== result[result.length - 1].split("").sort().join("")
    ) {
      result.push(word);
    }
  }

  return result;
}

console.log(removeAnagram(["abba", "baba", "bbaa", "cd", "cd"]));
console.log(removeAnagram(["a", "b", "c", "d", "e"]));

// Calculate Digit Sum of a String

function digitSum(s, k) {
  while (s.length > k) {
    let result = "";
    for (let i = 0; i < s.length; i += k) {
      let sum = 0;

      for (let j = i; j < i + k && j < s.length; j++) {
        sum += Number(s[j]);
      }

      result += sum.toString();
    }
    s = result;
  }
  return s;
}

console.log(digitSum("00000000", 3));

// Check if Numbers are Ascending in a Sentence

function areNumbersAscending(s) {
  const words = s.split(" ");
  let prev = -Infinity;
  for (let word of words) {
    if (!isNaN(word)) {
      const num = Number(word);

      if (num <= prev) {
        return "false";
      }

      prev = num;
    }
  }
  return "true";
}

console.log(
  areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
);
console.log(areNumbersAscending("hello world 5 x 5"));

// Reverse prefix of a word

function reversePrefix(word, ch) {
  const index = word.indexOf(ch);

  if (index === -1) return word;

  const reversed = word
    .slice(0, index + 1)
    .split("")
    .reverse()
    .join("");

  return reversed + word.slice(index + 1);
}

console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("xyxzxe", "z"));
