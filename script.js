// mvp 1
const fetchCountries =  async () => {
    const countryResponse = await fetch("https://restcountries.com/v3.1/all");
    const countryJsonData = await countryResponse.json();
    console.log(countryJsonData);
};
// fetchCountries();

// mvp 2
// create function setup()
// have it call first function and populate a global variable with the output
// call it when the page loads
const setup = async () => {
    const countries = fetchCountries();
}

window.addEventListener("load", setup);

// mvp 3 
// create a function that uses the global variable to create a series of new HTML elements
// populating each with information about each country (such as name and population)
// adding them to the <ul> in HTML
// Call this function following first function within the SetUp() function
// Ensure that the original <p> element is removed ahead of populating your list



// loading multiple results
// on button click = fetch country data
// have a section with id countries container 
// loop through each country
// create a li element 
// append each li element to the section? or to the ul id countriesList?

// const fetchCountries = async () => {
//     const countryResponse = await fetch("https://restcountries.com/v3.1/all?fields=name");
//     const countryJsonData = await countryResponse.json();

//     const countryList = document.querySelector("#countriesList");

//     countryJsonData.name.forEach((name) => {
//         const countryLi = document.createElement("li");
//         countryLi.innerText = name.common;
//         countryList.appendChild(countryLi);
//     });

// }

