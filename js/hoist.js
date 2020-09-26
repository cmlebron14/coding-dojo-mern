// #1
console.log(hello);
var hello = "world";
// after hoisting:
var hello;
console.log(hello);
hello = "world";
// predicted: undefined
// output: undefined

// #2
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}
//after hoisting:
var needle;
function test() {
  var needle = "magnet";
  console.log(needle);
}
needle = "haystack";
test();
// predicted: "magnet"
// output: "magnet"

// #3
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);
// after hoisting:
var brendan;
function print() {
  brendan = "only okay";
  console.log(brendan);
}
brendan = "super cool";
console.log(brendan);
// predicted: "super cool"
// output:

// #4
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
// after hoisting:
var food;
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";
}
food = "chicken";
console.log(food);
eat();
// predicted: "chicken", "half-chicken"
// output: "chicken", "half-chicken"

// #5
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);
// after hoisting:
var mean;
mean();
console.log(food);
mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);
// predicted: error: mean is not a function
// output: uncaught typeerror: mean is not a function

// #6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);
// after hoisting:
var genre;
function rewind() {
  var genre;
  genre = "rock";
  console.log(genre);
  genre = "r&b";
  console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
// predicted: undefined, "rock", "r&b", "disco"
// output: undefined, "rock", "r&b", "disco"

// #7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
// after hoisting:
function learn() {
  var dojo;
  dojo = "seattle";
  console.log(dojo);
  dojo = "burbank";
  console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
// predicted: "san jose", "seattle", "burbank", "san jose"
// output: "san jose", "seattle", "burbank", "san jose"

// #8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
// after hoisting:
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
// predicted:
/*
 * {
 *   name: "Chicago",
 *   students: 65,
 *   hiring: true,
 * }
 *
 * error - dojo is a const, cannot be changed
 */

// output:
/*
 * {
 *   name: "Chicago",
 *   students: 65,
 *   hiring: true,
 * }
 *
 * uncaught TypeError: assigment to constant variable
 */
