import React from 'react';
// Styles
import { InfoStyles } from './Info.styles';

const Info = () => (
  <InfoStyles>
    <p>
      InSight is taking daily weather measurements (temperature, wind, pressure)
      on the surface of Mars at Elysium Planitia, a flat, smooth plain near
      Mars’ equator.
    </p>
    <p>
      This is only a part of InSight’s mission.{' '}
      <a href='https://mars.nasa.gov/insight/mission/overview/'>Click here</a>
      to find out more.
    </p>
  </InfoStyles>
);

export default Info;
