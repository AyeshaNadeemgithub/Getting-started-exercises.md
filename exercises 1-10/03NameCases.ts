let personName: string = "ayesha nadeem";


let lowercaseName: string = personName.toLowerCase();
console.log(`Lowercase: ${lowercaseName}`);

let uppercaseName: string = personName.toUpperCase();
console.log(`Uppercase: ${uppercaseName}`);


let titlecaseName: string = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();
console.log(`Titlecase: ${titlecaseName}`);