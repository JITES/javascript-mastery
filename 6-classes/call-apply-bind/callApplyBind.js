let name = {
    firstName : 'Jitesh',
    lastName : 'Srivastava',
   
}

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state);
}

let name2 = {
    firstName : 'Pete',
    lastName : 'Singh' 
}

// function borrowing
printFullName.call(name2);

printFullName.apply(name, ['rbl', 'UP'])

let printMyname = printFullName.bind(name2, 'Berlin', 'DE');
printMyname();