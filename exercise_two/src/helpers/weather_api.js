import axios from 'axios';
import api_key from '../secrets/apikey';

const URL = (city) => (
  `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&APPID=${api_key}`
);

async function getWeather(city) {
  try {
    const response = await axios.get(URL(city));
    const { main, weather, wind } = response.data;
    return { main, weather, wind };
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default getWeather;
