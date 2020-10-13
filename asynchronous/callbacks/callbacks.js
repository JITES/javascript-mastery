const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
}

printValue(function(value){
    console.log(value);
});
