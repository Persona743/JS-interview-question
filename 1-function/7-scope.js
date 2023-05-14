//Functions in Js
//!Q7 - Function Scope - O/P based question

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

//? it return 1,2,3,4,5 by 1000ms cuz it use let and let use block scope. if we change let to var it's gonna return 5,5 times
