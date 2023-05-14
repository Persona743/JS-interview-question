//Functions in Js
//!Q10 - Params vs Arguments

function square(num) {
    // params
    console.log(num * num);
}

square(5); //arguments

//todo rest operator and spread operator are shown below

function multiply(...nums) {
    //rest operator
    console.log(nums[0] * nums[1]);
}

var arr = [5, 6];

multiply(...arr); //spread operator
