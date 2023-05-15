// mvp 1
const fetchCountries =  async () => {
    const countryResponse = await fetch("https://restcountries.com/v3.1/all");
    const countryJsonData = await countryResponse.json();
    console.log(countryJsonData);

};
fetchCountries();

// mvp 2
// 



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

