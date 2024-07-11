import axios from "axios";
const Search = ({ onChange }) => {
  return (
    <div>
      <p>Search for a country</p>
      <input type="text" onChange={onChange} />
    </div>
  );
};

const Results = ({ countries, onClick }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length <= 1) {
    return null;
  }

  return (
    <ul>
      {countries.map((country) => {
        return <Entry country={country} onClick={onClick} />;
      })}
    </ul>
  );
};

const Entry = ({ country, onClick }) => {
  return (
    <li>
      {country.name.common}
      <button onClick={() => onClick(country)}>Show</button>
    </li>
  );
};

const Country = ({ country, weather }) => {
  if (country === null) {
    return null;
  }
  return (
    <div>
      <MetaData country={country} />
      <Weather weather={weather} />
    </div>
  );
};

const MetaData = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => {
          return <li key={language}>{language}</li>;
        })}
      </ul>
      <img src={country.flags.png} alt="flag" width="100" />
    </div>
  );
};

const Weather = ({ weather }) => {
  if (weather === null) {
    return null;
  }
  return (
    <div>
      <h3>Weather in {weather.city}</h3>
      <p>Temperature: {weather.temp} Celsius</p>
      <p>Wind: {weather.wind} m/s</p>
      <p>Sky: {weather.sky}</p>
    </div>
  );
};

export { Search, Results, Country };
