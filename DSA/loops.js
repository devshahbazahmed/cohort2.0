// Print natural Numbers from 1 to N

function printNaturalNumber(n) {
  for (let i = 1; i <= n; i++) {
    process.stdout.write(i + " ");
  }

  process.stdout.write("\n");
}

// console.log(printNaturalNumber(5));
// console.log(printNaturalNumber(10));

// Print Natural Numbers from N to 1

function printNto1(n) {
  for (let i = n; i >= 1; i--) {
    process.stdout.write(i + " ");
  }

  process.stdout.write("\n");
}

// console.log(printNto1(5));
// console.log(printNto1(10));

// Sum upto N Numbers

function sumUptoN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sumUptoN(5));
// console.log(sumUptoN(10));

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

// console.log(factorial(5));
// console.log(factorial(10));
// console.log(factorial(50));
// console.log(factorial(0));
// console.log(factorial(-10));

// Print all factors of a number

function printFactors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
    }
  }

  process.stdout.write("\n");
}

// console.log(printFactors(5));
// console.log(printFactors(15));
// console.log(printFactors(20));

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

// console.log(sumEvenOddInRange(1, 5));
// console.log(sumEvenOddInRange(2, 10));

// let sum = 0;
// for (let i = 0; i <= 5; i++) {
//   sum += i;
// }
// console.log(sum);

// let i = 0;
// for (; i < 5; ) {
//   i++;
//   console.log(i);
// }

let count = 0;
for (let i = 2; i <= 20; i += 3) {
  count++;
}
// console.log(count);

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

// console.log(isPrime(7));
// console.log(isPrime(10));
// console.log(isPrime(9));
// console.log(isPrime(15));

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

// console.log(calculatePower(2, 3));
// console.log(calculatePower(5, 0));

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

// console.log(isStrongNumber(145));
// console.log(isStrongNumber(123));

let x = 1;
while (true) {
  console.log(x);
  x++;
  if (x > 3) break;
}
