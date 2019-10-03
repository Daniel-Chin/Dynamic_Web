import React from 'react';

const CityChooserButton = ({ city, current_city }) => {
  if (city === current_city) {
    return (
      <span className='citySpan'>
        {city}
      </span>
    );
  } else {
    return (
      <a href={`/?name=${city}`} className='cityButton'>
        {city}
      </a>
    );
  }
};

export default CityChooserButton;
