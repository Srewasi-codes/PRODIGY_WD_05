const apiKey = '7c32f97e642c5d2a4388094da250574e'; // Your OpenWeatherMap API key

const getWeather = (city) => {
    cityName.innerHTML = city;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(response => {
            console.log(response);

            temp.innerHTML = response.main.temp || "N/A"; 
            temp2.innerHTML = response.main.temp || "N/A"; 
            feels_like.innerHTML = response.main.feels_like || "N/A"; 
            humidity.innerHTML = response.main.humidity || "N/A"; 
            humidity2.innerHTML = response.main.humidity || "N/A"; 
            min_temp.innerHTML = response.main.temp_min || "N/A"; 
            max_temp.innerHTML = response.main.temp_max || "N/A"; 
            wind_speed.innerHTML = response.wind.speed || "N/A"; 
            wind_speed2.innerHTML = response.wind.speed || "N/A";
            wind_degrees.innerHTML = response.wind.deg || "N/A"; 
            sunrise.innerHTML = new Date(response.sys.sunrise * 1000).toLocaleTimeString(); 
            sunset.innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();  
        })
        .catch(err => console.error('Error:', err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value); 
});

getWeather("Delhi");
