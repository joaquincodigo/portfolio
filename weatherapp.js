window.addEventListener("load", (event) => {
  const apiKey = "dca115c777b3c674a4c54e54082070aa";
  const apiUrl = "https://openweathermap.org/api/one-call-3";

  const locationInput = document.getElementById("location");
  const searchButton = document.getElementById("searchbtn");

  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");

  searchButton.addEventListener("click", () => {
    const location = locationInput.value;
    if (location) {
      fetchWeather(location);
    }
  });

  function fetchWeather(location) {
    alert(location);
  }
});
