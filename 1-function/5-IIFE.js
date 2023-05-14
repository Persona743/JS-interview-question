//Functions in Js
//!Q5 - IIFE - O/P Based Questions?

(function (x) {
    return (function (y) {
        console.log(x); // return 1
    })(2);
})(1);

//? it return 1. first it's gonna search for x and becaus can't find it, it's gonna find x in the next level and it return 1. this happen becaus of (closure).
