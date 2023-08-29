const apiKey = 'b7d0529bd8c36290eb70801215d68b4f';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

searchBtn.addEventListener('click', searchWeather);

function searchWeather() {
    const city = cityInput.value.trim();
    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather:', error));

    cityInput.value = '';
}

function displayWeather(data) {
    const { name, main, weather } = data;

    const weatherHTML = `
        <h2>${name}</h2>
        <img src="http://openweathermap.org/img/wn/${weather[0].icon}.png" alt="Weather Icon">
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].description}</p>
        
    `;

    weatherInfo.innerHTML = weatherHTML;
}
