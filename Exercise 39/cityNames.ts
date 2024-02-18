function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs and print the returned values
let location1: string = city_country('Lahore', 'Pakistan');
let location2: string = city_country('Paris', 'France');
let location3: string = city_country('Sydney', 'Australia');

console.log(location1);
console.log(location2);
console.log(location3);
