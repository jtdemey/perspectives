import * as React from 'react';
import styled from 'styled-components';
import CssBase from '../../../components/CssBase';
import OverlayForm from '../../../components/overlayform/OverlayForm';
import Panes from './Panes';

const gfi = (name, placeholder) => ({ name, placeholder });
const formInputs = [
  gfi('color1', 'First swipe (hex)'),
  gfi('color2', 'Second swipe (px)'),
  gfi('color3', 'Third swipe (hex)')
];

const Main = styled.main`
  width: 100%;
  height: 100%;
  background: #eee;
  overflow: hidden;
`;

const formKeys = [9, 27]; //Tab, esc
const animKeys = [32]; //Space
const handleKey = (e, isVisible, setVisible, animStarting, setAnimState) => {
  if(formKeys.some(k => k === e.keyCode)) {
    setVisible(!isVisible);
  }
  if(animKeys.some(k => k === e.keyCode)) {
    setAnimState(!animStarting);
  }
};

const SwipeApp = () => {
  const [formVisible, setFormVisible] = React.useState(false);
  const [animStarting, setAnimState] = React.useState(false);
  const keyFunc = e => handleKey(e, formVisible, setFormVisible, animStarting, setAnimState);
  const [state, setState] = React.useState({
    color1: '',
    color2: '',
    color3: ''
  });
  return (
    <Main tabIndex="0" onKeyDown={keyFunc}>
      <OverlayForm inputs={formInputs} visible={formVisible} config={state} setConfig={setState} />
      <CssBase />
      <Panes colors={[state.color1, state.color2, state.color3]} isAnimated={animStarting} />
    </Main>
  );
};

export default SwipeApp;