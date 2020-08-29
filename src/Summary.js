import React from 'react';
import SummaryHeader from './SummaryHeader';
import SummarySelected from './SummarySelected';
import SummaryTotal from './SummaryTotal';

export default function Summary({ selected }) {
  return (
    <section className="main__summary">
      <SummaryHeader />
      <SummarySelected selected={selected} />
      <SummaryTotal selected={selected} />
    </section>
  );
}