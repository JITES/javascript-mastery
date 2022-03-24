/*
A callback function is a function passed into another function as an argument, which is 
then invoked inside the outer function to complete some kind of routine or action.
*/

function loginUser(email, password, callback) {
    console.log('started')

    setTimeout(() => {
        console.log("now we have received the data")
        callback({userEmail: email})
    }, 5000);

    console.log('waiting to exit')
} 

const user = loginUser("jitesh@corp.com", 'passwordx', user => {
    console.log(user)
})