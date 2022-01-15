// * Block
if (true) {
  // Compound statement
  var a = 10;
  console.log(a);
}
// * Block - var and functions which we can access inside a block

function foo() {
  var a = 'A';
  function bar() {
    console.log(a);
  }
  bar();
}
var a = 'Global A';
foo();
// ! bar(); This will give an error because bar`s outer lexical environmenet is foo not global lexical environment

// ! Shadowing

var a = 100;
{
  var a = 10;
  let b = 10;
  const c = 10;
  console.log(a, b, c);
}
console.log(a); // this will print 10

// Illegal Shadowing

let j = 10;
{
  var j = 20;
}

// Not illegal shadowing as var is functioned scope

let a = 10;
function shadow() {
  var a = 1;
}
