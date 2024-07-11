import { useState, useEffect } from "react";
import { Search, Results, Country } from "./countries";
import api from "./service/country.js";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    api.getAll().then((response) => {
      setCountries(response.data);
    });
  }, []);

  const onChange = (event) => {
    const filtered = countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase()),
    );
    if (filtered.length === 1) {
      getWeather(filtered[0].capital);
      setCountry(filtered[0]);
    } else {
      setCountry(null);
    }
    setFiltered(filtered);
  };

  const onClick = (country) => {
    setFiltered([]);
    getWeather(country.capital);
    setCountry(country);
  };

  const getWeather = (city) => {
    setWeather(null);
    api.getWeather(city).then((response) => {
      setWeather(response.data);
    });
  };

  return (
    <div>
      <Search onChange={onChange} />
      <Results countries={filtered} onClick={onClick} />
      <Country country={country} weather={weather} />
    </div>
  );
}

export default App;
