// Function to store information about a car
function createCar(manufacturer: string, modelName: string, ...options: any): Record<string, any> {
    // Create an object to store car information
    const car: Record<string, any> = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    // Process additional keyword arguments
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function with required and optional information
const myCar = createCar("Toyota", "Camry", "color", "Blue", "year", 2022, "optionalFeature", "Sunroof");

// Print the returned object to verify the information
console.log("Car Information:");
console.log(myCar);

