import * as React from 'react';
import CssBase from './CssBase';
import PerspectivesBody from './PerspectivesBody';

const PerspectivesApp = () => {
  const [formVisible, setFormVisible] = React.useState(false);
  return (
    <main>
      <CssBase />
      <PerspectivesBody formVisible={formVisible} setFormVisible={setFormVisible} />
    </main>
  );
};

export default PerspectivesApp;