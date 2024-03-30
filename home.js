// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData(apiKey, lat, lon) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return {
            city: data.name,
            temperature: `${data.main.temp}°C`,
            humidity: `${data.main.humidity}%`
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

// Function to fetch soil data from an imaginary Soil API (replace with real API)
async function fetchSoilData(apiKey, lat, lon) {
    const apiUrl = `https://api.soilapi.example.com/?lat=${lat}&lon=${lon}&apikey=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return {
            soilType: data.soilType
        };
    } catch (error) {
        console.error('Error fetching soil data:', error);
        return null;
    }
}

// Sample API key (replace with your actual API key)
const apiKey = '76ec6d763d6865136c27d14e50d5901c';

// Function to update weather information on the webpage
async function updateWeatherInfo(latitude, longitude) {
    const weatherData = await fetchWeatherData(apiKey, latitude, longitude);
    if (weatherData) {
        document.getElementById('city').innerText = weatherData.city;
        document.getElementById('temperature').innerText = weatherData.temperature;
        document.getElementById('humidity').innerText = weatherData.humidity;
    } else {
        document.getElementById('city').innerText = 'Unknown';
        document.getElementById('weather-info').innerText = 'Failed to fetch weather data.';
    }
}

// Function to update soil information on the webpage
async function updateSoilInfo(latitude, longitude) {
    const soilData = await fetchSoilData(apiKey, latitude, longitude);
    if (soilData) {
        document.getElementById('soil-type').innerText = soilData.soilType;
    } else {
        document.getElementById('soil-type').innerText = 'Unknown';
    }
}

// Initial update of weather and soil information on page load
navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    updateWeatherInfo(latitude, longitude);
    updateSoilInfo(latitude, longitude);
});
