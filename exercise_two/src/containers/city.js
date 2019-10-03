import React, { useState, useEffect } from 'react';
import getWeather from '../helpers/weather_api';
import WeatherCard from '../components/weatherCard';
import CityChooser from '../components/cityChooser';
import './city.css';

const City = (props) => {
  const [city, setCity] = useState('Your city');
  const [weather_info, setWeatherInfo] = useState(false);
  const [no_info, setNoInfo] = useState(false);
  
  useEffect(() => {
    const urlParams = new URLSearchParams(props.location.search);
    const city_name = urlParams.get('name') || 'New York';
    setCity(city_name);
    setWeatherInfo(false);  // Imperative programming! Is there a fix? 
    getWeather(city_name)
      .then((result) => {
        setWeatherInfo(result);
      })
      .catch((error) => {
        setNoInfo(true);
      })
    ;
  }, [setCity, setWeatherInfo, props.location.search, setNoInfo]);
  
  let backgroundColor;
  if (weather_info.main === undefined) {
    backgroundColor = 'white';
  } else {
    backgroundColor = temp2Color(weather_info.main.temp);
  }
  const style = { backgroundColor };
  
  return (
    <>
      <div className="cityPage" style={style}>
        <CityChooser current_city={city} />
        <div className='cityBody'>
          <WeatherCard city={city} no_info={no_info} info={weather_info} />
        </div>
      </div>
    </>
  );
};

const [MIN_TEMP, MAX_TEMP] = [268, 313];
const HOT  = { r: 1, g: .5, b: 0 };
const COLD = { r: 0, g: 0, b: .5 };
const temp2Color = (temp) => {
  let hotness = (temp - MIN_TEMP) / (MAX_TEMP - MIN_TEMP);
  hotness = Math.min(hotness, 1);
  hotness = Math.max(hotness, 0);
  const coldness = 1 - hotness;
  
  const r = Math.sqrt((HOT.r)**2 * hotness + (COLD.r)**2 * coldness);
  const g = Math.sqrt((HOT.g)**2 * hotness + (COLD.g)**2 * coldness);
  const b = Math.sqrt((HOT.b)**2 * hotness + (COLD.b)**2 * coldness);
  return `rgb(${
    Math.floor(r * 256)
  }, ${
    Math.floor(g * 256)
  }, ${
    Math.floor(b * 256)
  })`;
};

export default City;
