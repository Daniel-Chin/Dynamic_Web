import React from 'react';
import CityChooserButton from './cityChooserButton';
import './cityChooser.css';

const COOL_CITIES = [
  'Shanghai', 
  'New York', 
  'London', 
  'Hong Kong', 
  'Fake City', 
];

const CityChooser = ({ current_city }) => {
  return(
    <div className="cityChooserFlex">
      {COOL_CITIES.map((city, key) => (
        <CityChooserButton city={city} current_city={current_city} key={key} />
      ))}
    </div>
  );
};

export default CityChooser;
