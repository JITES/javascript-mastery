// function declaration
greet(); // ******* differs in hoisting **********

// function declartion is when the first word is "function"

function greet() {
  console.log('Hi from greet');
}

//speak();

// function expression -- word function is the first word
const speak = () => {
  console.log('hi from speak -- function expression');
};

// function with arguments
const speakArgs = (args, location) => {
  console.log(`Hello ${args}, from ${location}`);
};

speakArgs('Jitesh', 'New York');

// function with default value

const speakArgsWithDefault = (name = 'Jack', location = 'Raebareli') => {
  console.log(`Hello ${name}, ${location}`);
};

speakArgsWithDefault('Sachin');

// arrow functions
const area = (radius) => 3.14 * radius ** 2;

console.log(area(5));

// Property method

const api = {
  add: function (x, y) {
    return x + y;
  },
  sub: function (x, y) {
    return x - y;
  },
};

api.multiply = (x, y) => {
  return x * y;
};

console.log(api.add(1, 10));

// ! functions are first class, treat function as variable

function greet() {
  console.log('hi');
}

function logGreeting(fn) {
  fn();
}

logGreeting(greet); // ? we don`t put paranthesis

/* Functions */

// ? Function Statement
function a() {
  console.log('A is executed');
}

// ? Function Expression
var b = function () {
  console.log('B is called');
};

// ? Anonymous Function -> used as values (assign as a value to var/const)
// function () {

// }

// ? Named Function Expression

// ? Difference b/w parameters and arguments
printYourMessage('Say hello my little tutß'); // * This is Argument

function printYourMessage(params) {
  // * This is parameter which is locally scoped in the function
  console.log(params);
}

// ? First Class Function
// ! Functions can be used as values (treated as other values) and can be passed as an arguments and can be returned
// ! From MDN - a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

var x = function (param1) {
  console.log(param1);
};
function fcf() {}

x(fcf);

var y = function () {
  return function returnFn() {};
};

console.log(y());


// ? Arrow Functions
