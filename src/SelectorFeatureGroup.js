import React from 'react';
import SelectorFeatureGroupHeader from './SelectorFeatureGroupHeader';
import SelectorFeatureSet from './SelectorFeatureSet';

export default function SelectorFeatureGroup({
  selected,
  updateFeature,
  store,
  feature,
  featureHash,
}) {
  return (
    <fieldset className="feature" key={featureHash}>
      <SelectorFeatureGroupHeader feature={feature} />
      <SelectorFeatureSet
        feature={feature}
        selected={selected}
        updateFeature={updateFeature}
        store={store}
      />
    </fieldset>
  );
}
