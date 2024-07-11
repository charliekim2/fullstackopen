import axios from "axios";

const url = (slug) =>
  `https://studies.cs.helsinki.fi/restcountries/api/${slug}`;

const getAll = () => {
  return axios.get(url("all"));
};

const get = (name) => {
  return axios.get(url(`name/${name}`));
};

const getWeather = (city) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          city: city,
          temp: 10,
          wind: 1.5,
          sky: "clear",
        },
      });
    }, 100);
  });
};

export default { getAll, get, getWeather };
