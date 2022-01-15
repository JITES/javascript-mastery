const arr = [5,6,3,2,7,8,1];

const output = arr.reduce((a,c) => {
    return a +=c;
},0);

console.log(output);