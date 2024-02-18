"use strict";
let usernames = ['admin', 'Eman', 'Anaya', 'Bushra', 'Javed'];
//inside for..of loop we have is-else statement
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, you have successfully loged in!`);
    }
}
