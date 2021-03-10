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
