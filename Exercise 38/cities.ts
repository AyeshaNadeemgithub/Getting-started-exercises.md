function describe_city(city: string, country: string = 'Default Country'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for different cities
describe_city('Karachi', 'Pakistan'); // Specifying both city and country
describe_city('New York'); // default country 
describe_city('Tokyo', 'Japan'); // Specifying both city and country
