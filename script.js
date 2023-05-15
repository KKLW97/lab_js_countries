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
    const countries = await fetchCountries();
    const countriesList = await loadCountryList();
}

window.addEventListener("load", setup);

// mvp 3 
// create a function that uses the global variable to create a series of new HTML elements
// populating each with information about each country (such as name and population)
// adding them to the <ul> in HTML
// Call this function following first function within the SetUp() function
// Ensure that the original <p> element is removed ahead of populating your list

// have a section with id countries container 
// loop through each country
// create a li element 
// append each li element to the section? or to the ul id countriesList?

const loadCountryList = async () => {
    const countryResponse = await fetch("https://restcountries.com/v3.1/all");
    const countryJsonData = await countryResponse.json();

    const countryList = document.querySelector("#countriesList");

    document.querySelector("p").remove();
    countryJsonData.forEach((url) => {
        const countryLi = document.createElement("li");
        countryLi.innerText =url.name.common + " " + url.flag + " " + url.population;
        countryList.appendChild(countryLi);
    });
}

// mvp 4
// Add a simple <form> to your HTML with a single text-box input and a submit button
// Create a function which is called when the form is submitted
// printing the value of the <input> element to the console
const submitButton = document.querySelector("#submit");

const newSearch = async () => {
    const inputValue = document.querySelector("#search_input").value;
    console.log(inputValue);
}

submitButton.addEventListener("click", () => newSearch());