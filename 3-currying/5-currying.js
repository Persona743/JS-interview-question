//Currying in JS
//! Q4 - Currying vs Partial Application

//? this is a partial application
function sum(a) {
    return function (b, c) {
        return a + b + c;
    };
}

const x = sum(10);

console.log(x(5, 6));
console.log(x(3, 2));

//or

console.log(sum(20)(1, 4));

//?this is a currying
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
