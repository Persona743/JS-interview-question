//Closures in Js
//!Q4 - Block scope and setTimeout

function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i); //What is logged?
        }, 1000);
    }
}
a();

//? it returns 3 three times. because var is not a block scope and it returns the current value which is three. so it returns three, three time. but if we changed it to let since it is a block scope variable, it'll return 0, 1, 2.

//! so how do we get 0 1 2 by using var. CLOSURES.

for (var i = 0; i < 3; i++) {
    function inner(i) {
        setTimeout(function log() {
            console.log(i); //What is logged?
        }, 1000);
    }

    inner(i);
}
