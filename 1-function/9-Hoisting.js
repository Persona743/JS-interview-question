//Functions in Js
//!Q9 - Function Hoisting - O/P Based Question

var x = 21;

var fun = function () {
    console.log(x);
    var x = 20;
};

fun();

//? the local varaible shadow global variable but log is defined above the x inside the scope. so it return undefied. if the log is below it return 20.
