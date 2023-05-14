//Functions in Js
//!Q6 - Function Scope

var num1 = 20,
    num2 = 3,
    name = 'Roadside Coder';

function multiply() {
    return num1 * num2;
}

multiply(); //return 60

//A nested function example
function getScore() {
    var num1 = 2;
    num2 = 3;

    function add() {
        return name + ' Scored ' + (num1 + num2);
    }
    return add();
}

getScore(); //Return 'Roadside Coder scored 5

//?the first function returns a value of global varaible and the second one take the name from global scope but the num1 and num2 (locall scope) shadows on global scope.
