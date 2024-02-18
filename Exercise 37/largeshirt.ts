function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`Shirt Summary: Size - ${size}, Message - "${message}"`);
}

// Call the function with default values
make_shirt();

// Call the function with a medium shirt and default message
make_shirt('Medium');

// Call the function with a custom-sized shirt and a different message
make_shirt('Small', 'TypeScript is fantastic!');
export{}