import * as React from 'react';
import CascadingHeader from './CascadingHeader';
import CssBase from './CssBase';
import SlidingSubheader from './SlidingSubheader';
import PerspectivesBody from './PerspectivesBody';

const PerspectivesApp = () => {
  const [formVisible, setFormVisible] = React.useState(false);
  return (
    <main>
      <CssBase />
      <CascadingHeader text="Perspectives" />
      <SlidingSubheader text="by JD" />
      <PerspectivesBody formVisible={formVisible} setFormVisible={setFormVisible} />
    </main>
  );
};

export default PerspectivesApp;