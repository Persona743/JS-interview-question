//Functions in Js
//!Q8 - Function Hoisting

functionName();

function functionName() {
    console.log('workattech');
}

/*******/

console.log(x);
var x = 7;

//? it doesn't matter if we call a function before it or after it. becaus of funtion hoisting it doesn't matter. but the x varaible return undefind.

//todo even if we put log and x variable inside the scope of function, if the log is still above the x varaible its gonna return undefinde. check below.

functionName();

function functionName() {
    console.log(x);
    var x = 7;

    console.log('workattech');
}
