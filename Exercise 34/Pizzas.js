"use strict";
let favoritePizzas = ['Pepperoni', 'double cheese', 'BBQ Chicken'];
// Print the name of each pizza using a for loop
console.log("Pizza Names:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}
// Print a sentence using the name of each pizza
console.log("\nPizza Statements:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
//  sentence outside the loop
console.log("\nI really love pizza!");
