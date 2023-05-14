//Closures in Js
//!Q16 - What is Closure scope chain?

// global scope
const e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            // outer functions scope
            return function (d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

console.log(sum(1)(2)(3)(4)); // 20

//? Every closure has three scopes: 1-Local scope (Own scope) 2-Enclosing scope (can be block, function, or module scope) 3-Global scope
