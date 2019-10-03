import axios from 'axios';
import api_key from '../secrets/apikey';

const URL = (city) => (
  `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&APPID=${api_key}`
);

async function getWeather(city) {
  const response = await axios.get(URL(city));
  const { main, weather, wind, clouds } = response.data;
  return { main, weather, wind, clouds };
}

export default getWeather;
