//Closures in Js
//!Q1 - What will be logged to console?

let count = 0;
(function printCount() {
    if (count === 0) {
        let count = 1; //shadowing
        console.log(count); //1
    }
    console.log(count); //0
})();

//? it returns 1 and 0. the inner scope overlapping global count variabl and it console 1. but the outer one it not depends on block scope. so it return 0.
