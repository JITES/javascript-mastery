// var name ='foo';
// console.log(name);
// name = 'bar';
// console.log(name);

// var name can contain letters, numbers, _, $

// let - scoped

// let name;
// name ='foo';
// console.log(name);
// name = 'bar';
// console.log(name);

// const - scoped

// const name = 'foo';
// console.log(name);
// name = 'bar'; // TypeError: Assignment to constant variable.

const person = {
    name : 'John',
    age:30
}

person.name = 'Rose';

console.log(person.name)