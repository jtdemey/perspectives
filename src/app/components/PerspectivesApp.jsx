import * as React from 'react';
import CascadingHeader from './CascadingHeader';
import CssBase from './CssBase';
import SlidingSubheader from './SlidingSubheader';
import TileList from './TileList';

const genLi = (href, text) => ({ href, text });
const listItems = [
  genLi('/towers', 'Towers'),
  genLi('/towers', 'Lions'),
  genLi('/towers', 'Tigers'),
  genLi('/towers', 'Bears'),
  genLi('/towers', 'Oh My')
];

const PerspectivesApp = () => (
  <main>
    <CssBase />
    <CascadingHeader text="Perspectives" />
    <SlidingSubheader text="by JD" />
    <TileList items={listItems} />
  </main>
);

export default PerspectivesApp;