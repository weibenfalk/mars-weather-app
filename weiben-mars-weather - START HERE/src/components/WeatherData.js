import React from 'react';
// Helpers
import { formatTemperature } from '../helpers';
// Styles
import { Wrapper, Date, Temp, Wind } from './WeatherData.styles';

const WeatherData = ({ sol, isMetric }) => (
  <Wrapper>
    <Date>
      <h2>Header</h2>
      <p>Text</p>
    </Date>

    <Temp>
      <h2 className='section-title'>Temp</h2>
      <p className='reading'>
        High:
        <span> Temp</span>°
        <span> F or C</span>
      </p>
      <p className='reading'>
        Low:
        <span> Temp</span>°
        <span> F or C</span>
      </p>
    </Temp>

    <Wind deg={180}>
      <h2 className='section-title'>Wind</h2>
      <p className='reading'>
        <span>Speed</span>
        <span>kph or mph</span>
      </p>

      <div className='wind__direction'>
        <div className='wind__arrow'></div>
      </div>
    </Wind>
  </Wrapper>
);

export default WeatherData;
