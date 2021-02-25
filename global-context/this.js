console.log(this);

b();
console.log(a);
function b() {
    console.log(a);
    console.log('Hi');
}

var a = 'Say hello to a';