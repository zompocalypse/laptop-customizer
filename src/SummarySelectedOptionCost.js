import React from 'react';
import USCurrencyFormat from './USCurrencyFormat';

export default function SummarySelectedOptionCost({ selectedOption } ) {
  return (
    <div className="summary__option__cost">
      {USCurrencyFormat.format(selectedOption.cost)}
    </div>
  );
}