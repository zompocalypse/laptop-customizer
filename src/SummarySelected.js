import React from 'react';
import SummarySelectedOption from "./SummarySelectedOption";

export default function SummarySelected({ selected }) {
  return Object.keys(selected).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const selectedOption = selected[feature];

    return (
      <SummarySelectedOption
        featureHash={featureHash}
        feature={feature}
        selectedOption={selectedOption}
      />
    );
  });
}