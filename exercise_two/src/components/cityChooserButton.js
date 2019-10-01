import React from 'react';

const CityChooserButton = ({ city, current_city }) => {
  // Issue: pressing TAB circulate between <a> and <button>
  return (
    <a href={`/city?name=${city}`}>
      <button>
        {city}
      </button>
    </a>
  );
};

export default CityChooserButton;
