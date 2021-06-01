import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import CssBase from '../../../components/CssBase';
import OverlayForm from '../../../components/overlayform/OverlayForm';
import { isHex } from '../../../utils';
import ScorecardsContainer from './ScorecardsContainer';

const gfi = (name, placeholder) => ({ name, placeholder });
const formInputs = [
  gfi('background', 'Background Color (hex)'),
  gfi('carddelay', 'Scorecard animation delay (s)'),
  gfi('toptext', 'Top Text'),
  gfi('toptextdelay', 'Top text delay (s)'),
  gfi('topcolor', 'Top Color (hex)'),
  gfi('topiconcolor', 'Top Icon Color (hex)'),
  gfi('bottomtext', 'Bottom Text'),
  gfi('bottomtextdelay', 'Bottom text delay (s)'),
  gfi('bottomcolor', 'Bottom Color (hex)'),
  gfi('bottomiconcolor', 'Bottom Icon Color (hex)')
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
    carddelay: 269,
    toptext: '',
    toptextdelay: 1000,
    topcolor: '#8d0801',
    topiconcolor: '#bf0603',
    bottomtext: '',
    bottomtextdelay: 2000,
    bottomcolor: '#001427',
    bottomiconcolor: '#708d81'
  });
  const [spring, set] = useSpring(() => ({
    background: '#00cc00'
  }));
  set(() => ({ background: isHex(state.background) ? state.background : '#00cc00' }));
  return (
    <Main tabIndex="0" onKeyDown={keyFunc} style={spring}>
      <OverlayForm inputs={formInputs} visible={formVisible} config={state} setConfig={setState} />
      <CssBase />
      <ScorecardsContainer  delay={state.carddelay}
                            visible={transition}
                            textDelays={[parseInt(state.toptextdelay), parseInt(state.bottomtextdelay)]}
                            cardColors={[state.topcolor, state.topiconcolor, state.bottomcolor, state.bottomiconcolor]}
                            text={[state.toptext, state.bottomtext]} />
    </Main>
  );
};

export default ScorecardsApp;