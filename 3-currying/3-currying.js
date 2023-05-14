//Currying in JS
//! Q2 - evaluate('sum')(4)(2)=> 6
//!      evaluate('multiply')(4)(2)=>8
//!      evaluate('divide')(4)(2)=>2
//!      evaluate('substract')(4)(2)=>2

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation === 'sum') return a + b;
            else if (operation === 'multiply') return a * b;
            else if (operation === 'divide') return a / b;
            else if (operation === 'substract') return a - b;
            else return 'Invalid Operation';
        };
    };
}

const mul = evaluate('multiply');

console.log(mul(4)(2));
console.log(mul(6)(5));

//? we initialized our function once and reuse it as many as we want
