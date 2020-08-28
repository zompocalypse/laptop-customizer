import React from 'react';

import FEATURES from './Store';
import SelectorFeatureSet from './SelectorFeatureSet';

export default function SelectorFeatures({ selected, updateFeature }) {
  const features = Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
      <SelectorFeatureSet
        selected={selected}
        updateFeature={updateFeature}
        store={FEATURES}
        featureHash={featureHash}
        feature={feature}
      />
      );
  });
  return features;
}