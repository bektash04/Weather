import { useState } from "react";
import Weather from "./commponents/Weather";
import Form from "./commponents/Form";
import Error from "./commponents/Error";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  return (
    <div className="app">
      <div className="video-background">
      <video autoPlay muted loop id="backgroundVideo">
        <source src="/src/smoke-background-optimized.mp4" type="video/mp4" />
      </video>
      <div className="weather-const">
        <Form setWeather={setWeather} city={city} setCity={setCity} />
        {weather && weather.cod !== 200 ? (
          <Error weather={weather} />
        ) : (
          <Weather weather={weather} />
        )}
      </div>
      </div>
    </div>
  );
}

export default App;
