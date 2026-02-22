// Print natural Numbers from 1 to N

function printNaturalNumber(n) {
  for (let i = 1; i <= n; i++) {
    process.stdout.write(i + " ");
  }

  process.stdout.write("\n");
}

console.log(printNaturalNumber(5));
console.log(printNaturalNumber(10));

// Print Natural Numbers from N to 1

function printNto1(n) {
  for (let i = n; i >= 1; i--) {
    process.stdout.write(i + " ");
  }

  process.stdout.write("\n");
}

console.log(printNto1(5));
console.log(printNto1(10));

// Sum upto N Numbers

function sumUptoN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumUptoN(5));
console.log(sumUptoN(10));

// Factorial of a Number

function factorial(n) {
  let fact = 1;
  if (n >= 0 && n <= 20) {
    if (n === 0) return 1;

    for (let i = n; i >= 1; i--) {
      fact *= i;
    }

    return fact;
  } else {
    return "Out of constraint";
  }
}

console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(50));
console.log(factorial(0));
console.log(factorial(-10));

// Print all factors of a number

function printFactors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
    }
  }

  process.stdout.write("\n");
}

console.log(printFactors(5));
console.log(printFactors(15));
console.log(printFactors(20));

// Sum of Even and Odd Numbers in a Range

function sumEvenOddInRange(start, end) {
  let sumOfEven = 0;
  let sumOfOdd = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sumOfEven += i;
    } else {
      sumOfOdd += i;
    }
  }
  return [sumOfEven, sumOfOdd];
}

console.log(sumEvenOddInRange(1, 5));
console.log(sumEvenOddInRange(2, 10));

let sum = 0;
for (let i = 0; i <= 5; i++) {
  sum += i;
}
console.log(sum);

let i = 0;
for (; i < 5; ) {
  i++;
  console.log(i);
}

let count = 0;
for (let i = 2; i <= 20; i += 3) {
  count++;
}
console.log(count);

// Check if a number is Prime

function isPrime(num) {
  if (num <= 1) return "Not Prime";
  if (num === 2) return "Prime";
  if (num % 2 === 0) return "Not Prime";

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return "Not Prime";
  }

  return "Prime";
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(9));
console.log(isPrime(15));

// let i = 10;
// while (i % 3 !== 0) {
//   console.log(i);
//   i--;
// }

// x = 5;
// while x:
// print(x)
// x-=1

// Calculate Power of a Number

function calculatePower(a, b) {
  let calculatedPower = Math.pow(a, b);
  return calculatedPower;
}

console.log(calculatePower(2, 3));
console.log(calculatePower(5, 0));

// Check if a Number is Strong

function isStrongNumber(n) {
  let sum = 0;
  let arr = String(n).split("").map(Number);

  for (let i = 0; i < arr.length; i++) {
    sum += factorial(arr[i]);
  }

  if (sum === n) return "Yes";
  else return "No";
}

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(isStrongNumber(145));
console.log(isStrongNumber(123));

// let x = 1;
// while (true) {
//   console.log(x);
//   x++;
//   if (x > 3) break;
// }

// Sum of digits of a number

function sumOfDigits(n) {
  let sum = 0;
  let index = 0;
  const stringN = String(n).split("").join("");
  while (index < stringN.length) {
    sum += Number(stringN[index]);
    index++;
  }
  return sum;
}

console.log(sumOfDigits(936));
console.log(sumOfDigits(1234));

// Check if a number is automorphic

function isAutomorphic(n) {
  n = String(n);
  const square = String(Math.pow(n, 2));
  if (square.endsWith(n)) return "Yes";
  else return "No";
}

console.log(isAutomorphic(25));
console.log(isAutomorphic(5));
console.log(isAutomorphic(7));

// Reverse a Number

function reverseNumber(n) {
  let rev = 0;

  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
}

console.log(reverseNumber(1234));
console.log(reverseNumber(1005));
console.log(reverseNumber(589));

// Harshad Number (Niven Number) Check

function isHarshad(nStr) {
  nStr = String(nStr);
  let sumOfnStr = 0;
  const splitnStr = nStr.split("");

  for (let i = 0; i < splitnStr.length; i++) {
    sumOfnStr += Number(splitnStr[i]);
  }

  if (nStr % sumOfnStr === 0) return "Harshad Number";
  else return "Not Harshad Number";
}

console.log(isHarshad(18));
console.log(isHarshad(20));
console.log(isHarshad(10));
console.log(isHarshad(21));

// Abundant Number Checker

function isAbundant(nStr) {
  let index = 1;
  const divisors = [];
  while (index < nStr) {
    if (nStr % index === 0) {
      divisors.push(index);
    }
    index++;
  }

  let sumOfDivisors = 0;

  for (let i = 0; i < divisors.length; i++) {
    sumOfDivisors += divisors[i];
  }

  if (sumOfDivisors > nStr) return "Yes";
  else return "No";
}

console.log(isAbundant(12));
console.log(isAbundant(15));
console.log(isAbundant(18));
console.log(isAbundant(28));

// Finding Prime Factors of a Number

function primeFactors(nStr) {
  nStr = Number(nStr);
  if (nStr === 0 || nStr === 1) {
    return "No prime factors";
  }

  function isPrimeNumber(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const factors = [];
  for (let i = 2; i <= nStr; i++) {
    while (nStr % i === 0) {
      if (isPrimeNumber(i)) {
        factors.push(i);
      }
      nStr /= i;
    }
  }

  let result = "";

  for (const f of factors) {
    result += f + "\n";
  }
  return result;
}

console.log(primeFactors(0));
console.log(primeFactors(1));
console.log(primeFactors(60));
console.log(primeFactors(45));

// Check if a number is a Neon Number:

function isNeonNumber(nStr) {
  nStr = Number(nStr);
  let squareNum = nStr * nStr;
  let sumOfSquare = 0;
  squareNum = String(squareNum);
  for (let i = 0; i < squareNum.length; i++) {
    sumOfSquare += Number(squareNum[i]);
  }
  if (sumOfSquare === nStr) return "Yes";
  else return "No";
}

console.log(isNeonNumber(9));
console.log(isNeonNumber(10));

// Armstrong Number Checker

function isArmstrong(nStr) {
  nStr = String(nStr);
  let armstrongNum = 0;
  for (let i = 0; i < nStr.length; i++) {
    armstrongNum += Math.pow(nStr[i], nStr.length);
  }
  nStr = Number(nStr);
  if (armstrongNum === nStr) return "Armstrong";
  else return "Not Armstrong";
}

console.log(isArmstrong(153));
console.log(isArmstrong(370));
console.log(isArmstrong(9474));
console.log(isArmstrong(2));
