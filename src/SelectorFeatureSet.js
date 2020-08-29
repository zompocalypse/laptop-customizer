import React from 'react';
import slugify from 'slugify';
import SelectorFeatureEach from './SelectorFeatureEach';

export default function SelectorFeatureSet({
  store,
  feature,
  updateFeature,
  selected,
}) {
  return store[feature].map((item) => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <SelectorFeatureEach
        feature={feature}
        updateFeature={updateFeature}
        selected={selected}
        itemHash={itemHash}
        item={item}
      />
    );
  });
}
