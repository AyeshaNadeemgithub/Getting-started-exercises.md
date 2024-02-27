// i am AYESHA NADEEM
//DATE:2/17/2024
//These tests cover a range of conditions, including string equality and inequality, lowercase comparison, numerical comparisons, logical operators, array inclusion, and more
let fruit1 = 'apple';
let fruit2 = 'orange';
let number1 = 25;
let number2 = 42;
let colors = ['red', 'green', 'blue'];

// Tests for equality and inequality with strings
console.log("Test 1: Is fruit1 equal to 'apple'? I predict True.");
console.log(fruit1 == 'apple');

console.log("Test 2: Is fruit2 not equal to 'banana'? I predict True.");
console.log(fruit2 != 'banana');

// Tests using the lower case function
console.log("Test 3: Is fruit1 in lowercase equal to 'Apple' in lowercase? I predict True.");
console.log(fruit1.toLowerCase() == 'apple'.toLowerCase());

// Numerical tests
console.log("Test 4: Is number1 more than number2? I predict false.");
console.log(number1 > number2);

console.log("Test 5: Is number1 greater than or equal to 20? I predict True.");
console.log(number1 >= 20);

// Tests using "and" and "or" operators
console.log("Test 6: Is number1 greater than 20 and number2 less than 50? I predict True.");
console.log(number1 > 20 && number2 < 50);

console.log("Test 7: Is fruit1 equal to 'apple' or fruit2 equal to 'banana'? I predict True.");
console.log(fruit1 == 'apple' || fruit2 == 'banana');

// Test whether an item is in an array
console.log("Test 8: Is 'purple' in the colors array? I predict False.");
console.log(colors.includes('purple'));

// Test whether an item is not in an array
console.log("Test 9: Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes('yellow'));

// Additional tests
console.log("Test 10: Is number1 equal to 25? I predict True.");
console.log(number1 == 25);

console.log("Test 11: Is fruit2 not equal to 'orange'? I predict False.");
console.log(fruit2 != 'orange');
