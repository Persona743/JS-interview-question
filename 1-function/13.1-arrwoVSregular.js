//Functions in Js
//!Q13 - Arrow function vs Regular function

//1 - Syntax
function square(num) {
    return num * num;
}

const square = (num) => {
    return num * num;
};

//2- Implicit 'return' keyword

const square = (num) => num * num;

//3- arguments - we can't defind arguments like below in arrow function
function fn() {
    console.log(arguments);
}

fn(1, 2, 3);

//4- 'this' keyword - rc1 returns Subscribe to undefined but the second one return Subscribe to sia shahidi.
let user = {
    username: 'sia shahidi',
    rc1: () => {
        console.log('Subscribe to ' + this.username);
    },
    rc2() {
        console.log('Subscribe to ' + this.username);
    },
};

user.rc1();
user.rc2();
