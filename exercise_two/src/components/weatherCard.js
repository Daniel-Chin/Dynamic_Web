import React from 'react';
import WeatherIcon from './weatherIcon';
import TemperatureDisplay from './temperatureDisplay';
import './weatherCard.css';

const WeatherCard = ({ city, no_info, info }) => {
  if (no_info) {
    return (
      <div>
        <br />
        Too bad. I cannot find any weather info for "{city}". 
      </div>
    );
  }
  if (! info) {
    return (
      <div>
        <br />
        Looking up weather for "{city}"...
      </div>
    );
  }
  const { humidity, temp, temp_min, temp_max } = info.main;
  const wind_speed = info.wind.speed;
  const weather = info.weather[0].main;
  const weather_description = info.weather[0].description;
  const cloudiness = info.clouds.all;
  return (
    <div className='weatherCard'>
      <h1>{city}</h1>
      <WeatherIcon weather={weather}/> <br />
      "{weather_description}..." <br />
      <TemperatureDisplay { ...{temp, temp_min, temp_max} } />
      <table><tbody>
        <tr>
          <td className='rightAlign'>Cloudiness</td>
          <td>{cloudiness}%</td>
        </tr>
        <tr>
          <td className='rightAlign'>Humidity</td>
          <td>{humidity}%</td>
        </tr>
        <tr>
          <td className='rightAlign'>Wind</td>
          <td>{wind_speed} m/s</td>
        </tr>
      </tbody></table>
    </div>
  );
};

export default WeatherCard;
