"use strict";
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with three city-country pairs and print the returned values
let location1 = city_country('Lahore', 'Pakistan');
let location2 = city_country('Paris', 'France');
let location3 = city_country('Sydney', 'Australia');
console.log(location1);
console.log(location2);
console.log(location3);
