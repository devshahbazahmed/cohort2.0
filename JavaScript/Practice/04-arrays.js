// Arrays

// 31. Create an array of movie names and print them in a single line separated by ` - ` using `join()`.

const movies = ["Animal", "Dhurandhar", "Toxic", "Avengers", "Varanasi"];
console.log(movies.join(" - "));

// 32. Create an array of numbers and print the value at index 1.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers[1]);

// 33. Add two elements to the beginning of an array using `unshift()` and print the updated array.

numbers.unshift(10);
numbers.unshift(15);
console.log(numbers);

// 34. Create an array of song names, remove the last element using `pop()`, and print the remaining elements.

const songs = ["Song1", "Song2", "Song3", "Song4", "Song5"];
songs.pop();
console.log(songs);

// 35. Given an array, extract the first three elements using `slice()` and print them.

console.log(songs.slice(0, 3));

// 36. Create an array of numbers and find the index of the number `5` using `indexOf()`.

console.log(numbers.indexOf(5));

// 37. Create an array of values and use `includes()` to check whether the value `3` exists in the array. Print the result.

const values = [0, 1, 2, 3, 4, 5];
const isExist = values.includes(3);
console.log(isExist);

// 38. Concatenate two arrays using `concat()` and print the resulting combined array.

console.log(songs.concat(numbers));

// 39. Sort an array of numbers in ascending order using a custom comparator function and print the sorted array.

const marks = [50, 35, 76, 12, 45, 89, 52];
console.log(marks.sort((a, b) => a - b));

// 40. Create a copy of an array using the spread operator (`...`). Print the copied array and also print whether the copied array and original array reference the same memory.

const copyMarks = [...marks];
console.log(copyMarks);
console.log(copyMarks === marks);
console.log(copyMarks == marks);
