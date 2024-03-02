const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const cropsData = {
    'Rainy': ['Rice', 'Wheat'],
    'Sunny': ['Maize', 'Sugarcane'],
    'Cloudy': ['Barley', 'Oats'],
    'Snowy': ['Potatoes', 'Carrots'],
};

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const cropListElement = document.getElementById('cropList');

searchButton.addEventListener('click', ()