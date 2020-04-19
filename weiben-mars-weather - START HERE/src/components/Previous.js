import React from 'react';
// Styles
import {
  PreviousWrapper,
  Toggle,
  PreviousDays,
  PreviousDay,
} from './Previous.styles';

const Previous = ({ weather, previous, setPrevious, setSelectedSol }) => (
  <PreviousWrapper previous={false}>
    <Toggle htmlFor='weather-toggle'>
      <span>&#8593;</span>
      <span className='sr-only'>Show previous weather</span>
    </Toggle>

    <h2 className='main-title previous-weather__title'>Previous 7 days</h2>
    <PreviousDays>Previous days</PreviousDays>
  </PreviousWrapper>
);

export default Previous;
