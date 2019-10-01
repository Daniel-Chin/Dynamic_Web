import React, { useState, useEffect } from 'react';
import getWeather from '../helpers/weather_api';
import WeatherCard from '../components/weatherCard';
import CityChooser from '../components/cityChooser';

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
  
  return (
    <>
      <CityChooser current_city={city} />
      <WeatherCard city={city} no_info={no_info} info={weather_info} />
    </>
  );
};

export default City;
