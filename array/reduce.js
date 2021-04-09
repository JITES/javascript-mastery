const numbers = [1, -1, 2, 3];

let sum = 0;

const value = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(value);
