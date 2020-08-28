import React from 'react';
import Selector from './Selector';
import Summary from './Summary';

export default function Main({ selected, updateFeature, FEATURES }) {
  return (
    <main>
      <Selector
        selected={selected}
        updateFeature={updateFeature} 
        />
      <Summary
        selected={selected}
        />
    </main>
  );
}