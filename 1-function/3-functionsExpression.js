//Functions in Js
//!Q3 - What are First Class Functions?

function square(num) {
    return num * num;
}

function displaySquare(fn) {
    console.log('Square is ' + fn(5));
}

displaySquare(square());

//return 25
