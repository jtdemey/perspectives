import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import CssBase from '../../../components/CssBase';
import OverlayForm from '../../../components/overlayform/OverlayForm';
import { isHex } from '../../../utils';

const gfi = (name, placeholder) => ({ name, placeholder });
const formInputs = [
  gfi('background', 'Background Color (hex)'),
  gfi('topcolor', 'Top Color (hex)'),
  gfi('bottomcolor', 'Bottom Color (hex)'),
  gfi('text', 'Text')
];

const Main = styled(animated.main)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #00cc00;
  overflow: hidden;
  z-index: -99;
`;

const formKeys = [9, 27]; //Tab, esc
const animKeys = [32]; //Space
const handleKey = (e, isVisible, setVisible, transition, setTransition) => {
  if(formKeys.some(k => k === e.keyCode)) {
    setVisible(!isVisible);
  } else if(animKeys.some(k => k === e.keyCode)) {
    setTransition(!transition);
  }
};

const ScorecardsApp = () => {
  const [formVisible, setFormVisible] = React.useState(false);
  const [transition, setTransition] = React.useState(false);
  const keyFunc = e => handleKey(e, formVisible, setFormVisible, transition, setTransition);
  const [state, setState] = React.useState({
    background: '',
    color: ''
  });
  const [spring, set] = useSpring(() => ({
    background: '#00cc00'
  }));
  set(() => ({ background: isHex(state.background) ? state.background : '#00cc00' }));
  return (
    <Main tabIndex="0" onKeyDown={keyFunc} style={spring}>
      <OverlayForm inputs={formInputs} visible={formVisible} config={state} setConfig={setState} />
      <CssBase />
    </Main>
  );
};

export default ScorecardsApp;