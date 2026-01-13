// Find Greatest Number

function greatestNumber(a, b) {
  if (a >= b) return a;
  else return b;
}

console.log(greatestNumber(5, 10));
console.log(greatestNumber(-3, -7));

// Check if a number is even or odd

function checkEvenOrOdd(num) {
  if (num % 2 === 0) return "Even";
  else return "Odd";
}

console.log(checkEvenOrOdd(10));
console.log(checkEvenOrOdd(5));

// Check if User is a valid voter

function checkVoterEligibility(name, age) {
  if (age >= 18) return `${name} is a valid voter`;
  else return `${name} is not a valid voter`;
}

console.log(checkVoterEligibility("Alice", 20));
console.log(checkVoterEligibility("Jon", 16));

// Check if a Year is a Leap year

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) return "Leap Year";
  else return "Not a Leap Year";
}

console.log(isLeapYear(2020));
console.log(isLeapYear(1900));

// Calculate Final Amount after discount
// Amount --- Discount
// 0 - 5000 --- 0%
// 5001 - 7000 --- 5%
// 7001 - 9000 --- 10%
// more than 9000 --- 20%

function calculateFinalAmount(amount) {
  let discount = 0;
  if (amount <= 5000 && amount > 0) {
    discount = 0;
  } else if (amount <= 7000 && amount > 5000) {
    discount = 5;
  } else if (amount <= 9000 && amount > 7000) {
    discount = 10;
  } else {
    discount = 20;
  }

  return amount = amount - ((amount * discount) / 100);
}

console.log(calculateFinalAmount(4000));
console.log(calculateFinalAmount(6000));
console.log(calculateFinalAmount(9000));
console.log(calculateFinalAmount(10000));

// Calculate Electricity bill based on units consumed
// Unit --- Price
// up to 100 --- Rs. 4.2/unit
// 101-200 --- Rs. 6/unit
// 201-400 --- Rs. 8/unit
// more than 400 --- Rs. 13/unit

function calculateElectricityBill(unit) {
  let amount = 0;
  if (unit >= 0 && unit <= 100) {
    amount = amount + (unit * 4.2);
  } else if (unit > 100 && unit <= 200) {
    amount = (100 * 4.2) + ((unit - 100) * 6);
  } else if (unit > 200 & unit <= 400) {
    amount = (100 * 4.2) + (100 * 6) + ((unit - 200) * 8);
  } else {
    amount = (100 * 4.2) + (100 * 6) + (200 * 8) + ((unit - 400) * 13);
  }

  return amount.toFixed(1);
}


console.log(calculateElectricityBill(420));

// Find the greatest number among three numbers

function findGreatest(a, b, c) {
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else return c;
}

console.log(findGreatest(3, 7, 5));
console.log(findGreatest(10, 10, 5));

// Print Day Name from Day number

class DayName {
  get_day_name(dayStr) {
    switch (dayStr) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      case 7:
        console.log("Sunday");
        break;
      default:
        console.log("Invalid day number");
        break;
    }
  }
}

let day = new DayName().get_day_name(2);
let day3 = new DayName().get_day_name(3);

// Get movie status
// Rating --- Message to be displayed
// 0.0 - 2.0 --- Flop
// 2.1 - 3.4 --- Semi-hit
// 3.5 - 4.5 --- Hit
// 4.6 - 5.0 --- Super-Hit

class MovieStatus {
  get_movie_status(ratingStr) {
    ratingStr = ratingStr.toFixed(1);
    ratingStr = Number(ratingStr);

    if (ratingStr >= 0.0 && ratingStr <= 2.0) {
      return "Flop";
    } else if (ratingStr > 2.0 && ratingStr <= 3.4) {
      return "Semi-hit";
    } else if (ratingStr > 3.4 && ratingStr <= 4.5) {
      return "Hit";
    } else if (ratingStr > 4.5 && ratingStr <= 5.0) {
      return "Super Hit";
    }
  }
}

let rate = new MovieStatus().get_movie_status(4.5);
console.log(rate);

// Check if a character is a vowel or consonent

class VowelCount {
  check_char(ch) {
    if (ch.length !== 1 || !/^[a-zA-Z]$/.test(ch)) {
      return "Invalid input";
    }

    const vowels = "aeiouAEIOU";
    return vowels.includes(ch) ? "Vowel" : "Consonant";
  }
}

let char = new VowelCount().check_char("B");
console.log(char);