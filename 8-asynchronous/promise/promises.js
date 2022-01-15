const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve('First promise is resolved');
        }, 1000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('second promise is resolved');
    }, 3000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('third promise is resolved');
    }, 4000)
})

Promise.all([p1,p2,p3]).then(x=> {
    console.log(x[0]);
    console.log(x[1]);
    console.log(x[2]);
}); //


Promise.allSettled([p1,p2,p3]).then(x=> {
    console.log(x[0]);
    console.log(x[1]);
    console.log(x[2]);
}).catch(x => console.log(x)); // returns all results with status


Promise.race([p1,p2,p3]).then(x=> {
    console.log(x);
})