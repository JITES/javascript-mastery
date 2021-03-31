// ? special operator eval will execute a string in the current scope

const x = 1;
function evalAndReturn(code) {
  eval(code);
  return x;
}

console.log(evalAndReturn('var x = 2'));
console.log(x);
