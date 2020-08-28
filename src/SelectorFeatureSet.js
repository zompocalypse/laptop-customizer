import React from 'react';
import slugify from 'slugify';
import SelectorFeatureEach from './SelectorFeatureEach';

export default function SelectorFeatureSet({ selected, updateFeature, FEATURES, feature, featureHash}) {
  const options = FEATURES[feature].map(item => {
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
  })
  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
} 