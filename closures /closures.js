
// inner funciton forms closure with the outer environment
function outer(argsOfOuter) {
  let a = 10; // it can be const or var
  function inner(argsOfInner) {
    console.log(a, argsOfOuter,name, argsOfInner);
  }
  return inner;
}
var name = 'basix';
outer('outerArgs')('innerArgs');
