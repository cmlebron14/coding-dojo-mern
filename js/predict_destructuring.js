// #1
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
console.log(randomCar);
console.log(otherRandomCar);
// Predict the output:
// "Tesla"
// "Mercedes"

// #2
const employee = {
  name: "Elon",
  age: 47,
  company: "Tesla",
};
const { name: otherName } = employee;
console.log(name);
console.log(otherName);
// Predict the output:
// undefined
// "Elon"

// #3
const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
console.log(password);
console.log(hashedPassword);
// Predict the output:
// undefined -> jk, its totally "12345";
// undefined

// #4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
console.log(first == second);
console.log(first == third);
// Predict the output:
// first = 2
// second = 5
// third = 2
// false
// true

// #5
const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// Predict the output:
// key = "value"
// secondKey = [1, 5, 1, 8, 3, 3]
// secondKey[0] = 1
// willThisWork = 5
