//Currying in JS
//! Q5 - Manipulating DOM

function updateElementText(id) {
    return function (content) {
        document.querySelector('#' + id).textContent = content;
    };
}

const updateHeader = updateElementText('heading');

updateHeader('Hello Sia Shahidi');
