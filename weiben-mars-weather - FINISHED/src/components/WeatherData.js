import React from 'react';
// Helpers
import { formatTemperature } from '../helpers';
// Styles
import { Wrapper, Date, Temp, Wind } from './WeatherData.styles';

const WeatherData = ({ sol, isMetric }) => (
  <Wrapper>
    <Date>
      <h2>{sol.sol}</h2>
      <p>{sol.date}</p>
    </Date>

    <Temp>
      <h2 className='section-title'>Temp</h2>
      <p className='reading'>
        High:
        <span> {formatTemperature(sol.maxTemp, isMetric)}</span>°
        <span> {isMetric ? ' C' : ' F'}</span>
      </p>
      <p className='reading'>
        Low:
        <span> {formatTemperature(sol.minTemp, isMetric)}</span>°
        <span> {isMetric ? ' C' : ' F'}</span>
      </p>
    </Temp>

    <Wind deg={sol.windDirectionDegrees}>
      <h2 className='section-title'>Wind</h2>
      <p className='reading'>
        <span>{sol.windSpeed}</span>
        <span>{isMetric ? ' kph' : ' mph'}</span>
      </p>

      <div className='wind__direction'>
        <div className='wind__arrow'></div>
      </div>
    </Wind>
  </Wrapper>
);

export default WeatherData;
