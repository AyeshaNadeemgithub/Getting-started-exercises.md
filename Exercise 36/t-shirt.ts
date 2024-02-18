// VOID MEANS THAT NOTHING IS RETURNED
function make_shirt(size: string, message: string): void {
    console.log(`Shirt Summary: Size - ${size}, Message - "${message}"`);
}

// Call the function with example values
make_shirt('Medium', 'HELLO WORLD!');
