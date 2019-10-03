import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faWind, faSmog, faCloud, faSun, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';

const LOOKUP = {
  Thunder: faBolt, 
  Windy: faWind, 
  Smog: faSmog, 
  Clouds: faCloud, 
  Sunny: faSun, 
  Rain: faCloudRain, 
  Snow: faSnowflake, 
  Mist: faSmog, 
};

const WeatherIcon = ({ weather }) => {
  const icon = LOOKUP[weather];
  if (icon === undefined) {
    console.log(`${weather} does not have an appropriate icon!`);
    return <div>ICON</div>
  }
  return (
    <FontAwesomeIcon icon={icon} size='2x' />
  );
};

export default WeatherIcon;
