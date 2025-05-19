import React, { useState } from "react";
import "./AircraftSearch.css";

const AircraftSearch = () => {
  const [weatherCity, setWeatherCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [weatherError, setWeatherError] = useState("");

  const fetchWeather = async () => {
    setWeatherError("");
    setWeatherData(null);

    if (!weatherCity.trim()) {
      setWeatherError("Please enter a city name.");
      return;
    }

    const API_KEY = "1435b758d058356aa532d41a52b48174";  

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&units=metric&appid=1435b758d058356aa532d41a52b48174`
      );
      const data = await res.json();

      if (res.status !== 200) {
        throw new Error(data.message || "Failed to fetch weather data.");
      }

      setWeatherData({
        city: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      });
    } catch (err) {
      setWeatherError(err.message);
    }
  };

  return (
  <div className="weather-container">
    <h3>Check Weather</h3>
    <input
      type="text"
      value={weatherCity}
      placeholder="Enter city name"
      onChange={(e) => setWeatherCity(e.target.value)}
      className="weather-input"
    />
    <button onClick={fetchWeather} className="weather-button">
      Get Weather
    </button>

    {weatherError && <p className="error-message">{weatherError}</p>}

    {weatherData && (
      <div className="weather-box">
        <p><strong>City:</strong> {weatherData.city}</p>
        <p><strong>Temperature:</strong> {weatherData.temp} °C</p>
        <p><strong>Weather:</strong> {weatherData.description}</p>
        <p><strong>Humidity:</strong> {weatherData.humidity}%</p>
        <p><strong>Wind Speed:</strong> {weatherData.wind} m/s</p>
      </div>
    )}
  </div>
  );
};

export default AircraftSearch;
