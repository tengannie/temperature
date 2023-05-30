import React from 'react';
import classes from './TemperatureType.module.css';

const TemperatureType = (props) => {

  const unitChangeHandler = (event) => {
props.setTemperatureType(event.target.value);
  }

  return (
    <div className={classes['temperature-selection']}>
      <div className={classes['temperature-selection__control']}>
        <h2>Choose the temperature unit</h2>
        <select onChange={unitChangeHandler} value={props.value}>
        <option value='FtoC'>Fahrenheit to Celsius( °F to °C) </option>
          <option value='CtoF'>Celsius to Fahrenheit( °C to °F)</option>
        </select>
      </div>
    </div>
  );
};

export default TemperatureType;