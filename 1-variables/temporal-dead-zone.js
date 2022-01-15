// * Temporal Dead Zone - Phase from hoisting to assignment of variable, when access variable in tdz we get reference error
console.log(b); // undefined
console.log(a); // ReferenceError : Cannot access before initialization
console.log(x); // ReferenceError : x is not defined
let a = 10;
// let a = 20; // SyntaxError
var b = 100;

// ! Syntax error
// ! Reference error
// ! Type error
