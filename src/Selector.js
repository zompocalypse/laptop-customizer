import React from 'react';

import SelectorHeader from './SelectorHeader';
import SelectorFeatures from './SelectorFeatures';

export default function Selector({ selected, updateFeature }) {
  return (
    <form className="main__form">
      <SelectorHeader />
      <SelectorFeatures 
        selected={selected}
        updateFeature={updateFeature}
      />
    </form>
  )
}