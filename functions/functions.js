// function declaration 
greet(); // ******* differs in hoisting **********

function greet() {
    console.log('Hi from greet')
}

//speak();

// function expression
const speak = () => {
    console.log('hi from speak -- function expression')
}


// function with arguments
const speakArgs = (args, location) => {
    console.log(`Hello ${args}, from ${location}`)
}

speakArgs('Jitesh', 'New York')

// function with default value

const speakArgsWithDefault = (name = 'Jack', location ='Raebareli') => {
    console.log(`Hello ${name}, ${location}`);
}

speakArgsWithDefault('Sachin');

// arrow functions
const area = radius => 3.14 * radius**2;

console.log(area(5));