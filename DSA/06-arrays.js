// Calculate Sum and Mean of Array Elements

const { SourceTextModule } = require("vm");

function calculateSumAndMean(arr, n) {
  let sum = 0,
    mean = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  mean = (sum / n).toFixed(1);
  return [sum, mean];
}

// console.log(calculateSumAndMean([1, 2, 3, 4, 5], 5));
// console.log(calculateSumAndMean([10, 20, 30, 40], 4));

// Find the Greatest Element and its Index

function findGreatestElementAndIndex(arr) {
  if (arr.length === 0) return 0;
  let greatestElem = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (greatestElem < arr[i]) {
      greatestElem = arr[i];
      index = i;
    }
  }
  return [greatestElem, index];
}

// console.log(findGreatestElementAndIndex([2, 96, 69, 77, 145, 20]));
// console.log(findGreatestElementAndIndex([10, 23, 45, 67, 89]));

// Find Second Greatest Element

function findSecondGreatestElement(arr) {
  if (arr.length < 2) return null;

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

// console.log(findSecondGreatestElement([2, 96, 69, 77, 145, 20]));
// console.log(findSecondGreatestElement([10, 23, 45, 67, 89]));

// Copy Array and Reverse - With Extra Space (New Array)

function copyAndReverseArray(arr) {
  let reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }

  return reverseArr;
}

// console.log(copyAndReverseArray([1, 2, 3, 4, 5]));
// console.log(copyAndReverseArray([9, 8, 7, 6]));

// Array Reverse Without Using Extra Space (Same Array)

function reverseArrayInPlace(arr) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

// console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
// console.log(reverseArrayInPlace([9, 8, 7, 6]));

// Array Left Rotation by 1

function leftRotateByOne(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
}

// console.log(leftRotateByOne([1, 2, 3, 4, 5]));
// console.log(leftRotateByOne([9, 8, 7, 6]));

// Move Zeros with Extra Spaces

function moveZerosToEnd(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      newArr.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

// console.log(moveZerosToEnd([0, 1, 0, 1, 1]));
// console.log(moveZerosToEnd([1, 0, 1, 0, 1, 0]));

// Move Zeros Without Extra Spaces

function moveZerosInPlace(arr) {
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      let temp = arr[i];
      arr[i] = arr[pos];
      arr[pos] = temp;
      pos++;
    }
  }
  return arr;
}

// console.log(moveZerosInPlace([0, 1, 0, 1, 1]));
// console.log(moveZerosInPlace([1, 0, 1, 0, 1, 0]));

// Sum of Absolute Differences

function sumOfAbsDiff(arr) {
  arr = arr.map((x) => BigInt(x));
  arr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  let totalSum = 0n;
  let prefixSum = 0n;

  for (let i = 0; i < arr.length; i++) {
    const iBig = BigInt(i);
    totalSum += arr[i] * iBig - prefixSum;
    prefixSum += arr[i];
  }
  return totalSum;
}

// console.log(sumOfAbsDiff([1, 2, 3, 4, 5]));
// console.log(sumOfAbsDiff([-1, 3, -2, 5]));

// Multiplication of previous and next

function multiplyPrevNext(arr) {
  let n = arr.length;
  if (n <= 1) return arr;

  let result = new Array(n);

  result[0] = arr[0] * arr[1];

  for (let i = 1; i < n - 1; i++) {
    result[i] = arr[i - 1] * arr[i + 1];
  }

  result[n - 1] = arr[n - 2] * arr[n - 1];

  return result;
}

// console.log(multiplyPrevNext([2, 3, 4]));
// console.log(multiplyPrevNext([1, 2, 3, 4, 5]));

// Minimum Value to add for Balanced Array

function minAddForBalance(arr) {
  let n = arr.length;

  let leftSum = 0,
    rightSum = 0;

  for (let i = 0; i < n / 2; i++) {
    leftSum += arr[i];
  }
  for (let j = n / 2; j < n; j++) {
    rightSum += arr[j];
  }

  const balance = Math.abs(leftSum - rightSum);
  return balance;
}

// console.log(minAddForBalance([1, 2, 1, 2, 1, 3]));
// console.log(minAddForBalance([2, 2, 2, 2]));

// Sort First Half Ascending and Second Half Descending

function sortHalf(arr) {
  let n = arr.length;

  let result = new Array(n);

  let firstHalf = [];
  let secondHalf = [];

  if (n % 2 === 0) {
    for (let i = 0; i < n / 2; i++) {
      firstHalf.push(arr[i]);
    }
    firstHalf.sort((a, b) => a - b);
    for (let j = n / 2; j < n; j++) {
      secondHalf.push(arr[j]);
    }
    secondHalf.sort((a, b) => b - a);
  } else {
    for (let i = 0; i < n / 2 - 1; i++) {
      firstHalf.push(arr[i]);
    }
    firstHalf.sort((a, b) => a - b);
    for (let j = n - 1; j > n / 2 - 1; j--) {
      secondHalf.push(arr[j]);
    }
    secondHalf.sort((a, b) => b - a);
  }

  result = [...firstHalf, ...secondHalf];

  return result;
}

console.log(sortHalf([2, 6, 3, 1, 9, 8, 5]));
console.log(sortHalf([1, 2, 3, 4]));
