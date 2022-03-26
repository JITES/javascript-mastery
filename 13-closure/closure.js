// Lexical scope

// function x () {
//     for(let i = 1; i <=5; i++) { // let variables are blocked scope
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }

//     console.log("this is a comment")
// }
 
// x()

// Functions remembers it's lexical scope where it came from

function x() {
    var a = 7;

    function y() {
        console.log(a);
    }

    return y;
}
 
var z = x()
console.log(z)
z()

// function along with it's lexical scope bundled together forms a closure

// --- 
// Module design pattern
// Currying
// Functions like once
// Memoize
// Maintaining state in async world
// setTimeouts
// Iterators
// and many more...

