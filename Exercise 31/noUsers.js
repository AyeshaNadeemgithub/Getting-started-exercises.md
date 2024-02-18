"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = []; // this is an Empty array
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, you have successfully loged in!`);
        }
    }
}
