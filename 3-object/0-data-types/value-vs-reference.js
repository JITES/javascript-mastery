// https://www.youtube.com/watch?v=4Ej0LwjCDZQ

// Primitives pass values :

let x  = 2;
let y = x;
y +=1;

console.log(y);
console.log(x);

// Reference types use reference 

let xArray = [1,2,3]
let yArray = xArray;

yArray.push(4);

console.log(yArray);
console.log(xArray);

// Mutable vs Immutable

// Primitives are immutable
let myName = "Jitesh";
myName[0] = "R";
console.log(myName);

// Reassignment is not the same as mutable 
myName = "Sachin"
console.log(myName);

// References contain mutable data
yArray[0] = 9;
console.log(yArray);
console.log(xArray);
