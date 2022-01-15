
console.log(num); // this will print undefined
//console.log(blockScoped); // Reference error

var num = 24;
let blockScoped = 06;
console.log(num);

console.log(printName);
console.log(printNameExpression);

// console.log(printNameWithConst); // ReferenceError

function printName () {
    console.log("this function is hoisted");
}

var printNameExpression = function () {
    console.log("this is function expression");
}

const printNameWithConst = () => {
    console.log("This is with const");
}