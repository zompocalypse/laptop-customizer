import React from 'react';
import SummarySelectedOption from './SummarySelectedOption'

export default function SummarySelected({ selected }) {
  const summary = Object.keys(selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = selected[feature];

    return (
      <SummarySelectedOption
        key={featureHash}
        feature={feature}
        selectedOption={selectedOption}
      />
    );
  });
  return summary;
}