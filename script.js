// loading multiple results
// on button click = fetch country data
// have a section with id countries container 
// loop through each country
// create a li element setting the .url property to be the actual URL
// append each li element to the section? or to the ul id countriesList?

const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

}