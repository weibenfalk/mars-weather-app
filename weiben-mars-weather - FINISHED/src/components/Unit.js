import React from 'react';
// Styles
import { UnitStyles, Toggle } from './Unit.styles';

const Unit = ({ metric, setMetric }) => (
  <UnitStyles>
    <label htmlFor='cel'>°C</label>
    <Toggle metric={metric} onClick={() => setMetric((prev) => !prev)} />
    <label htmlFor='fah'>°F</label>
  </UnitStyles>
);
export default Unit;
