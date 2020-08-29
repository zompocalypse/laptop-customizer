import React from 'react';
import USCurrencyFormat from './USCurrencyFormat';

export default function SummaryTotalValue({ selected }) {
  const total = Object.keys(selected).reduce(
    (acc, curr) => acc + selected[curr].cost,
    0
  );
  return (
    <div className="summary__total__value">
      {USCurrencyFormat.format(total)}
    </div>
  );
}