const current_users = ["john", "alice", "bob", "emma", "david"];


const new_users = ["Alice", "peter", "John", "sarah", "mike"];

// creating loop to check uniqueness in new_users
for (let i = 0; i < new_users.length; i++) {
    // Convert both usernames to lowercase for case-insensitive comparison
    const lowerCaseNewUser = new_users[i].toLowerCase();

    // Check if the lowercase version of the new username is in current_users
    if (current_users.includes(lowerCaseNewUser)) {

        console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
    } else {
        
        console.log(`The username '${new_users[i]}' is available.`);
    }
}
