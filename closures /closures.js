
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

// Closures are used in HOD, Memoization, Data hiding and encapsulation

function Counter(){
  var count = 0;
  this.incrementCounter = function (){
    count++;
    console.log(count);
  }
  this.decrementCounter = function (){
    count--;
    console.log(count);
  }
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.decrementCounter();

// Cons - closure Memory accumalation, Memory is not actively GC
