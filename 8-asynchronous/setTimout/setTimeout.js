function x () {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    }, 3000);
    console.log('Without wait');
}

function withLoop () {
    // for (var i = 0; i < 5; i++) {
    //     setTimeout(function(){
    //         console.log(i);
    //     }, 1000);        
    // }

    for (var i = 1; i <= 5; i++) {
        function close (i) {
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        }
        close(i)        
    }
}

withLoop();