


function loginUser(email, password, callback) {
    console.log('Started');
    setTimeout(() => {
        console.log("Now we have the data");
        callback({userEmail: email})
    }, 5000);

    console.log('Waiting to exit');

} 


const user = loginUser("goo@goomail.com", 1212, user => {
    console.log(user)
})

const test = function () {
    console.log('test');
}

let test1 = test;
console.log(`This is test ${test1}`)