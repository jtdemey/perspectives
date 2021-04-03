import * as React from 'react';
import styled from 'styled-components';
import CssBase from '../../../components/CssBase';
import OverlayForm from '../../../components/overlayform/OverlayForm';
import FrameBody from './FrameBody';
import { isHex } from '../../../utils';

const gfi = (name, placeholder, type = 'text') => ({ name, placeholder, type });
const formInputs = [
  gfi('width', 'Frame width (px)'),
  gfi('height', 'Frame height (px)'),
  gfi('colors', 'Gradient colors (comma-separated hex list)'),
  gfi('bordercolor', 'Border color (px)'),
  gfi('bordertop', 'Top border width (px)'),
  gfi('borderright', 'Right border width (px)'),
  gfi('borderbottom', 'Bottom border width (px)'),
  gfi('borderleft', 'Left border width (px)'),
  gfi('boxshadowwidth', 'Box shadow width (px)'),
  gfi('stripewidth', 'Stripe width (px)'),
  gfi('stripeangle', 'Stripe angle (deg)'),
  gfi('stripecolor', 'Stripe color (px)')
];

const Main = styled.main`
  width: 100%;
  height: 100%;
  background: #00cc00;
  overflow: hidden;
`;

const formKeys = [27]; //Esc
const handleKey = (e, isVisible, setVisible) => {
  if(formKeys.some(k => k === e.keyCode)) {
    setVisible(!isVisible);
  }
};

const parseColors = str => {
  const res = [];
  const add = v => {
    if(isHex(v) && v.length === 7) {
      res.push(v);
    }
  };
  if(str.indexOf(',') > 0) {
    str.split(',').forEach(c => {
      const val = c.replace(/\s/g,'');
      add(val);
    });
  } else {
    add(str);
  }
  return res.length > 0 ? res : ['#0099ff', '#002e4d'];
};

const FrameApp = () => {
  const [formVisible, setFormVisible] = React.useState(false);
  const keyFunc = e => handleKey(e, formVisible, setFormVisible);
  const [state, setState] = React.useState({
    width: 800,
    height: 450,
    colors: '',
    bordercolor: '',
    bordertop: 0,
    borderright: 0,
    borderbottom: 0,
    borderleft: 0,
    boxshadowwidth: 0,
    stripewidth: 0,
    stripeangle: 45,
    stripecolor: '#809fff'
  });
  return (
    <Main tabIndex="0" onKeyDown={keyFunc}>
      <OverlayForm inputs={formInputs} visible={formVisible} config={state} setConfig={setState} />
      <CssBase />
      <FrameBody  width={parseInt(state.width)}
                  height={parseInt(state.height)}
                  colors={parseColors(state.colors)}
                  borderColor={state.bordercolor}
                  borderTop={parseInt(state.bordertop)}
                  borderRight={parseInt(state.borderright)}
                  borderBottom={parseInt(state.borderbottom)}
                  borderLeft={parseInt(state.borderleft)}
                  boxShadowWidth={parseInt(state.boxshadowwidth)}
                  stripeWidth={parseInt(state.stripewidth)}
                  stripeAngle={parseInt(state.stripeangle)}
                  stripeColor={state.stripecolor} />
    </Main>
  );
};

export default FrameApp;