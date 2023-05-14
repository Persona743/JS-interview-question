//Functions in Js
//!Q4 - What is IIFE?

(function square(num) {
    return num * num;
})(5);

//return 25

//? it stands for (Immediately invoked function expression) === instead of calling a function after its scope by square(), we can wrap the whole function into parentheses and immediately call it
