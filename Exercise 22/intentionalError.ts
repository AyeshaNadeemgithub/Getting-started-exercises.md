// 1st we will create an array
let fruits: string[] = ["Apple", "Banana", "Orange"];

// Intentionally introduce an array index error
let wrongIndex = 5;
console.log("Invalid Access Attempt:", fruits[wrongIndex]);
/*this will print 'undefined'*/  

// Correct the error by using a valid index
let rightIndex = 1;
console.log("Valid Access:", fruits[rightIndex]);  