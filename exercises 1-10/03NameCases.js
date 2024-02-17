"use strict";
let personName = "ayesha nadeem";
let lowercaseName = personName.toLowerCase();
console.log(`Lowercase: ${lowercaseName}`);
let uppercaseName = personName.toUpperCase();
console.log(`Uppercase: ${uppercaseName}`);
let titlecaseName = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log(`Titlecase: ${titlecaseName}`);
