//  places to visit
let places: string[] = ["china", "switzerland", "madina", "northern pakistan", "palestine"];

// Print the array in its original order
console.log("Original Order:", places);

// Print the array in alphabetical order 
let sortedPlaces = [...places].sort();
console.log("Alphabetical Order:", sortedPlaces);

// Show that the original array is still in its original order
console.log("Original Order (unchanged):", places);

// Print the array in reverse alphabetical order without changing the order of the original list
let reverseSorted = [...places].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSorted);

// Show that the original array is still in its original order
console.log("Original Order (unchanged):", places);

// Reverse the order of the original list
places.reverse();
console.log("Reversed Order:", places);

// Reverse the order of the list again to get back to the original order
places.reverse();
console.log("Back to Original Order:", places);

// Sort the array so it's stored in alphabetical order
places.sort();
console.log("Sorted in Alphabetical Order:", places);

// Sort to change the array so it's stored in reverse alphabetical order
console.log("Sorted in Reverse Alphabetical Order:", reverseSorted);
