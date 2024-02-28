// Function to show magicians
function show_magicians(magicianArray: string[]): void {
    console.log("Magician Names:");
    for (let i = 0; i < magicianArray.length; i++) {
        console.log(magicianArray[i]);
    }
}

// Function to make magicians great
function make_great(magicianArray: string[]): string[] {
    const modifiedMagicians: string[] = [];
    for (let i = 0; i < magicianArray.length; i++) {
        modifiedMagicians.push(magicianArray[i] + " the Great");
    }
    return modifiedMagicians;
}

// Array of magician names
const magicians: string[] = ["David Copperfield", "Houdini", "Penn Jillette", "Teller", "Derren Brown"];

// Call make_great() to modify the array
const greatMagicians: string[] = make_great([...magicians]);

// Call show_magicians() with the modified array
console.log("\nOriginal Magicians:");
show_magicians(magicians);

console.log("\nModified Magicians with the Great added:");
show_magicians(greatMagicians);
