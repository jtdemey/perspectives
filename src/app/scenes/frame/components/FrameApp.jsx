import * as React from 'react';
import styled from 'styled-components';
import CssBase from '../../../components/CssBase';
import OverlayForm from '../../../components/overlayform/OverlayForm';
import FrameBody from './FrameBody';

const gfi = (name, placeholder) => ({ name, placeholder });
const formInputs = [
  gfi('width', 'Frame width (px)'),
  gfi('height', 'Frame height (px)'),
  gfi('colors', 'Gradient colors (comma-separated hex list)'),
  gfi('bordercolor', 'Border color (px)'),
  gfi('borderwidth', 'Border width (px)')
];

const Main = styled.main`
  width: 100%;
  height: 100%;
  background: #00cc00;
  overflow: hidden;
`;

const formKeys = [9, 27]; //Tab, esc
const handleKey = (e, isVisible, setVisible) => {
  if(formKeys.some(k => k === e.keyCode)) {
    setVisible(!isVisible);
  }
};

const FrameApp = () => {
  const [formVisible, setFormVisible] = React.useState(false);
  const keyFunc = e => handleKey(e, formVisible, setFormVisible);
  const [state, setState] = React.useState({
    width: 800,
    height: 450,
    colors: [],
    bordercolor: '',
    borderwidth: 0
  });
  return (
    <Main tabIndex="0" onKeyDown={keyFunc}>
      <OverlayForm inputs={formInputs} visible={formVisible} config={state} setConfig={setState} />
      <CssBase />
      <FrameBody  width={parseInt(state.width)}
                  height={parseInt(state.height)}
                  colors={state.colors}
                  borderColor={state.bordercolor}
                  borderWidth={parseInt(state.borderwidth)} />
    </Main>
  );
};

export default FrameApp;