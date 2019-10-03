import React from 'react';

const TemperatureDisplay = ({ temp, temp_min, temp_max }) => {
  return (
    <div className='temperatureDisplay'>
      <span className='mainTemp'>
        {Math.round(temp)} K
      </span> <br />
      <span>
        {Math.round(temp_min)} K ~ {Math.round(temp_max)} K
      </span>
    </div>
  );
};

export default TemperatureDisplay;
