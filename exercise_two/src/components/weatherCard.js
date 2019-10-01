import React from 'react';

const WeatherCard = ({ city, no_info, info }) => {
  if (no_info) {
    return (
      <div>
        Too bad. I cannot find any weather info for "{city}". 
      </div>
    );
  }
  if (! info) {
    return (
      <div>
        Looking up weather for "{city}"...
      </div>
    );
  }
  console.log(info);
  const { humidity, pressure, temp, temp_min, temp_max } = info.main;
  const { weather, wind } = info;
  return (
    <div>
      <h1>{city}</h1>
      temp: {temp} <br />
      humidity: {humidity}
    </div>
  );
};

export default WeatherCard;
