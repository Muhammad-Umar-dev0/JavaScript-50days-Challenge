const form = document.querySelector('#weather-form');
const search = document.querySelector('#search');
const weather = document.querySelector('#weather');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = search.value.trim();
    if (city) {
        getWeather(city);
    } else {
        weather.innerHTML = 'Please enter a city name';
    }
});

const getWeather = async (city) => {
    const url = `https://goweather.herokuapp.com/weather/${city}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found or API issue');
        }
        const data = await response.json();
        showWeather(data);
    } catch (error) {
        weather.innerHTML = `Error: ${error.message}`;
    }
};

const showWeather = (data) => {
    
    const { temperature, description, wind } = data;
    weather.innerHTML = `
        <div class="weather-info">
            <h2>Weather Details</h2>
            <p><strong>Temperature:</strong> ${temperature}</p>
            <p><strong>Condition:</strong> ${description}</p>
            <p><strong>Wind:</strong> ${wind}</p>
        </div>
    `;
};
