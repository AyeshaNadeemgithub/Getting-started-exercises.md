//we are using if-else chain
let age: number = 30;

if (age < 2) {
    console.log("The person is a baby.");//less than
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");//greater than and eaqual to, and statement,less than
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}
//vchange the variable age to get different answer