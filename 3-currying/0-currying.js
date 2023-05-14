//Currying in JS
//! Example f(a,b) into f(a)(b)

function f(a) {
    return function (b) {
        return `${a} ${b}`;
    };
}

console.log(f(5)(6));

//? in currying; a function takes one argument at the time and returns a new function expecting the next argument
