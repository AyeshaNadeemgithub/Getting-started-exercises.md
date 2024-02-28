// Function to show magicians
function show_magicians(magicianArray: string[]): void {
    console.log("Magician Names:");
    for (let i = 0; i < magicianArray.length; i++) {
        console.log(magicianArray[i]);
    }
}

// Function to make magicians great and return a new array
function make_great(magicianArray: string[]): string[] {
    const modifiedMagicians: string[] = [];
    for (let i = 0; i < magicianArray.length; i++) {
        modifiedMagicians.push(magicianArray[i] + " the Great");
    }
    return modifiedMagicians;
}

// Original array of magician names
const originalMagicians: string[] = ["David Copperfield", "Houdini", "Penn Jillette", "Teller", "Derren Brown"];

// Call make_great() with a copy of the original array
const greatMagicians: string[] = make_great([...originalMagicians]); // Use the spread operator to create a copy

// Call show_magicians() with the original and modified arrays
console.log("\nOriginal Magicians:");
show_magicians(originalMagicians);

console.log("\nModified Magicians with the Great added:");
show_magicians(greatMagicians);
