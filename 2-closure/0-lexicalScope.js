//Closures in Js
//!Q14 - Lexical scope

var username = 'Sia Shahidi';

//global scope
function local() {
    //local scope
    console.log(username);
}

local();

//? it returns Sia Shahidi. lexical scope is when we defiend a var outside the local scope, but we can call it inside the scope

//todo another example down below

//global scope
function subscirbe() {
    var name = 'Sia Shahidi';
    //inner scope2
    function displayName() {
        //inner scope
        alert(name);
    }
    displayName();
}

subscirbe(); //it returns alert Sia Shahidi
