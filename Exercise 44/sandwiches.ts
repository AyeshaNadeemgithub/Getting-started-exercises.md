// Function to create a sandwich summary
function orderSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    } else {
        console.log("Items: " + items.join(", "));
        console.log("Enjoy your sandwich!");
    }
    console.log("----------------------------------");
}

// Call the function with different numbers of arguments
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese", "Mustard");
orderSandwich(); // No arguments provided
