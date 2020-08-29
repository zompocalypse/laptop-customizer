import React from 'react';

import SummarySelectedOptionValue from './SummarySelectedOptionValue';
import SummarySelectedOptionLabel from './SummarySelectedOptionLabel';
import SummarySelectedOptionCost from './SummarySelectedOptionCost';


export default function SummarySelectedOption({ featureHash, feature, selectedOption }) {
  return (
    <div className="summary__option" key={featureHash}>
      <SummarySelectedOptionLabel feature={feature} />
      <SummarySelectedOptionValue selectedOption={selectedOption} />
      <SummarySelectedOptionCost selectedOption={selectedOption} />
  </div>
  );
}