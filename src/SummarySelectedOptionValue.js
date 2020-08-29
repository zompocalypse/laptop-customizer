import React from 'react';

export default function SummarySelectedOptionValue({ selectedOption }) {
  return (
    <div className="summary__option__value">{selectedOption.name}</div>
  );
}