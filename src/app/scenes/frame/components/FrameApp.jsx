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
  gfi('borderwidth', 'Border width (px)'),
  gfi('bordercolor', 'Border color (px)'),
  gfi('stripeenabled', 'Add stripes', 'checkbox'),
  gfi('stripeangle', 'Stripe angle (deg)'),
  gfi('stripewidth', 'Stripe width (px)'),
  gfi('stripecolor', 'Stripe color (px)')
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

const parseColors = str => {
  const res = [];
  const add = v => {
    if(isHex(v)) {
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
    borderwidth: 0,
    stripeangle: 45,
    stripewidth: 18,
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
                  borderWidth={parseInt(state.borderwidth)}
                  stripeangle={parseInt(state.stripeangle)}
                  stripewidth={parseInt(state.stripewidth)}
                  stripecolor={state.stripecolor} />
    </Main>
  );
};

export default FrameApp;