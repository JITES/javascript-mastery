function foo() {
  console.log('Hey I am in a');
  var a = 'A';
  function bar() {
    console.log(a);
  }
}

foo();
