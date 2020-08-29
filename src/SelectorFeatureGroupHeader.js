import React from 'react';

export default function SelectorFeatureGroupHeader({ feature }) {
  return (
    <legend className="feature__name">
      <h3>{feature}</h3>
    </legend>
  );
}