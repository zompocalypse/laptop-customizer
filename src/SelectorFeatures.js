import React from 'react';

import SelectorFeatureSet from './SelectorFeatureSet';

export default function SelectorFeatures({ selected, updateFeature, FEATURES }) {
  const features = Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
      <SelectorFeatureSet
        selected={selected}
        updateFeature={updateFeature}
        FEATURES={FEATURES}
        featureHash={featureHash}
        feature={feature}
      />
      );
  });
  return features;
}