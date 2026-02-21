// Objects

// 61. Create an object representing a person with properties such as `name`, `age`, and `city`. Print the object.

const person = {
  name: "John Doe",
  age: 20,
  city: "New York",
};
console.log(person);

// 62. Add a new property (e.g., `isStudent`) to an existing object and print the updated object.

person.isStudent = false;
console.log(person);

// 63. Access and print the value of the `city` property from an object using bracket notation.

console.log(person["city"]);

// 64. Delete a property (e.g., `age`) from an object and print the modified object.

delete person.age;
console.log(person);

// 65. Write a function that takes an object as input and prints all its keys using `Object.keys()`.

function printKeys(obj) {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    console.log(key);
  });
}
printKeys(person);

// 66. Create an array of book objects, where each object contains a `title` and an `author`.

const books = [
  {
    title: "Book1",
    author: "Author1",
  },
  {
    title: "Book2",
    author: "Author2",
  },
  {
    title: "Book3",
    author: "Author3",
  },
  {
    title: "Book4",
    author: "Author4",
  },
  {
    title: "Book5",
    author: "Author5",
  },
];

// 67. Access and print the author of the second book from the array of book objects.

console.log(books[1].author);

// 68. Write a function that checks whether a specific key exists inside an object. Print "Key exists" or "Key does not exist" accordingly.

function checkKey(obj, key) {
  if (Object.keys(obj).includes(key)) return "Key exists";
  else return "Key does not exist";
}
console.log(checkKey(person, "age"));
console.log(checkKey(person, "address"));

// 69. Write a function that returns the total number of keys present in an object.

function totalKeys(obj) {
  const keys = Object.keys(obj);
  return keys.length;
}
console.log(totalKeys(person));

// 70. Use `Object.assign()` to merge an empty object with two existing objects/arrays and print the result.

const obj1 = { name: "Shahbaz", age: 25 };
const obj2 = { profession: "Developer", city: "Mumbai" };

const mergedObject = Object.assign({}, obj1, obj2);

console.log(mergedObject);
