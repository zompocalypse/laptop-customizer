import React from 'react';

import SummaryTotalHeader from './SummaryTotalHeader';
import SummaryTotalValue from './SummaryTotalValue';

export default function SummaryTotal({ selected }) {
  return (
    <div className="summary__total">
      <SummaryTotalHeader />
      <SummaryTotalValue selected={selected} />
  </div>
  );
}