window.addEventListener("DOMContentLoaded", (event) => {
  // API
  const apiKey = "dca115c777b3c674a4c54e54082070aa";
  const apiUrl = "https://openweathermap.org/api/one-call-3";

  // INPUT
  let locationInput = document.getElementById("locationInput");
  let form = document.getElementById("form");

  // OUTPUT
  let temperatureElem = document.getElementById("temperature");
  let descriptionElem = document.getElementById("description");
  let locationElem = document.getElementById("location");
  let alertElem = document.getElementById("alert");

  // LOGIC
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alertElem.style.display = "none";

    if (locationInput.value) {
      fetchWeather(locationInput.value);
    } else {
      alertElem.style.display = "block";
      alertElem.textContent = "Please enter a city.";
      locationElem.textContent = "";
      descriptionElem.textContent = "";
      temperatureElem.textContent = "";
    }
  });

  function fetchWeather(location) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        let cityName = data.name;
        let weatherState = data.weather[0].main;
        let temp = data.main.temp;

        locationElem.textContent = cityName;
        descriptionElem.textContent = `Status: ${weatherState}`;
        temperatureElem.textContent = `Temperature: ${temp}°C`;
      });
    // fetch(
    //   `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (data.length === 0) {
    //       throw new Error("Location not found");
    //     }
    //     const lat = data[0].lat.toFixed(2);
    //     const lon = data[0].lon.toFixed(2);
    //     console.log(lon);
    //     console.log(lat);
    //     return fetch(
    //       "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={847cd06aebe270a86b9394e4d9259065}"
    //     );
    //   })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Weather data not available");
    //     }
    //     return res.json();
    //   })
    //   .then((weatherData) => {
    //     console.log(weatherData);
    //     // Further processing or rendering of weather data
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     // Handle errors gracefully, perhaps by showing an error message to the user
    //   });
  }
});
