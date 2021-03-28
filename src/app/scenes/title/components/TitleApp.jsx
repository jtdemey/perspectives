import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import CssBase from '../../../components/CssBase';
import OverlayForm from '../../../components/overlayform/OverlayForm';
import TitleContainer from './TitleContainer';
import { isHex } from '../../../utils';

const gfi = (name, placeholder) => ({ name, placeholder });
const formInputs = [
  gfi('background', 'Tile Color (hex)'),
  gfi('color', 'Text Color (hex)'),
  gfi('screenbg', 'Background Color (hex)'),
  gfi('text', 'Text')
];

const Main = styled(animated.main)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #00ff00;
  overflow: hidden;
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

const TitleApp = () => {
  const [formVisible, setFormVisible] = React.useState(false);
  const [transition, setTransition] = React.useState(true);
  const keyFunc = e => handleKey(e, formVisible, setFormVisible, transition, setTransition);
  const [state, setState] = React.useState({
    background: '',
    color: '',
    screenbg: '',
    text: ''
  });
  const [spring, set] = useSpring(() => ({
    background: '#00ff00'
  }));
  set(() => ({ background: isHex(state.screenbg) ? state.screenbg : '#00ff00' }));
  return (
    <Main tabIndex="0" onKeyDown={keyFunc} style={spring}>
      <OverlayForm inputs={formInputs} visible={formVisible} config={state} setConfig={setState} />
      <CssBase />
      <TitleContainer background={state.background} color={state.color} text={state.text} transition={transition} />
    </Main>
  );
};

export default TitleApp;