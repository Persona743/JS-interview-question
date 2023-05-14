//Closures in Js
//!Q8 - Once Polyfill

function once(func, context) {
    let ran;

    return function () {
        if (func) {
            ran = func.apply(context || this, arguments);
            func = null;
        }

        return ran;
    };
}

const hello = once((a, b) => console.log('hello', a, b));

hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);

//it returns only one time. because it is inside a closure and no matter how many times we call it.
