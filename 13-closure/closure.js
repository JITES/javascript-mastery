// Lexical scope

function x () {
    for(let i = 1; i <=5; i++) { // let variables are blocked scope
        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    }

    console.log("this is a comment")
}

x()