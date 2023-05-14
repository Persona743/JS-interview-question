//Closures in Js
//!Q6 - What is Mocule Patterns?

var Module = (function () {
    function privateMethod() {
        //do something
        console.log('private');
    }

    return {
        publicMethod: function () {
            //can call privateMethod();
            console.log('public');
        },
    };
})();

Module.publicMethod(); //return public
Module.privateMethod(); //error. cuz privateMethod is not accessible outside the scope. that why it is called private
