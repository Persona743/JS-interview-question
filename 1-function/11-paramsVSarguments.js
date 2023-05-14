//Functions in Js
//!Q11 - Params vs Arguments - O/P Based Question

const fn = (a, x, y, ...numbers) => {
    console.log(x, y, numbers);
};

fn(5, 6, 3, 7, 8, 9, 1);

//? When we use rest operator we should put it in the end of parantheses
