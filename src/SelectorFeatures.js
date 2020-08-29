import React from 'react';

import FEATURES from './Store';
import SelectorFeatureGroup from './SelectorFeatureGroup';

export default function SelectorFeatures({ selected, updateFeature }) {
  return Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
      <SelectorFeatureGroup
        key={featureHash}
        selected={selected}
        updateFeature={updateFeature}
        store={FEATURES}
        featureHash={featureHash}
        feature={feature}
      />
    );
  });
}