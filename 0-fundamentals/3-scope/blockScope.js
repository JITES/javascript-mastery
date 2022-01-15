var a = 10; // global scope
let b = 20; // script scope
{
    var a = 11;
    let b = 21; // block scope
    const c = 31; // block scope
    console.log('block scope');
    console.log(b);
} 
console.log('var shadowing');
console.log(a);
console.log('Script Scope');
console.log(b);

// Lexical scoping
console.log('Lexical Scoping');
const d = 1;
{
    const d = 2;
    {
        const d = 3;
        console.log(d);
    }
    console.log(d);
}
console.log(d);