// 1. Variable declarations are scanned and are made undefined
// 2. Function declarations are scanned and are made available

getName();

console.log(getName);

function getName() {
    console.log('This is a function X');
    return 'dummy'
}