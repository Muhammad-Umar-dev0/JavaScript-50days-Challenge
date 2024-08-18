let search_btn = document.getElementById('search-btn');
let input = document.getElementById('country-input');
let result = document.getElementById("result"); 

search_btn.addEventListener("click", () => {
    let country_name = input.value;
    let api = `https://restcountries.com/v3.1/name/${country_name}?fullText=true`;

    fetch(api)
    .then((res) => res.json())
    .then((data) => {
        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <h4>Capital:</h4>
            <span>${data[0].capital[0]}</span>
        </div>
        <div class="wrapper">
            <h4>Continent:</h4>
            <span>${data[0].continents[0]}</span>
        </div>
        <div class="wrapper">
            <h4>Population:</h4>
            <span>${data[0].population}</span>
        </div>
        <div class="wrapper">
            <h4>Currency:</h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
        </div>
        <div class="wrapper">
            <h4>Common Languages:</h4>
            <span>${Object.values(data[0].languages).join(", ")}</span>
        </div>
        `;
    })
    .catch((error) => {
        result.innerHTML = `<h3>Something went wrong. Please try again.</h3>`;
        console.error("Error while  fetching country data:", error);
    });
});



