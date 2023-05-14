//Closures in Js
//!Q7 - Make this run only once

let user;
function followSia() {
    let called = 0;

    return function () {
        if (called > 0) {
            console.log('Already Follow Sia Shahidi');
        } else {
            user = 'Sia Shahid';
            console.log('Followed ', user);
            called++;
        }
    };
}

let isFollowed = followSia();

isFollowed();
isFollowed();
isFollowed();
isFollowed();
isFollowed();
isFollowed();
isFollowed();
