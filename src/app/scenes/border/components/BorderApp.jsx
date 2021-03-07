import * as React from 'react';
import styled from 'styled-components';
import CssBase from '../../../components/CssBase';
import OverlayForm from '../../../components/overlayform/OverlayForm';
import BorderContainer from './BorderContainer';

const gfi = (name, placeholder) => ({ name, placeholder });
const formInputs = [
  gfi('bordercolor', 'Border Color (hex)'),
  gfi('outlinewidth', 'Outline Width (px)'),
  gfi('outlinecolor', 'Outline Color (hex)'),
  gfi('width', 'Width (%)'),
  gfi('height', 'Height (%)')
];

const Main = styled.main`
  width: 100%;
  height: 100%;
  background: #eee;
  overflow: hidden;
`;

const boundKeys = [9, 27]; //Tab, esc
const handleKey = (e, isVisible, setVisible) => {
  if(boundKeys.some(k => k === e.keyCode)) {
    setVisible(!isVisible);
  }
};

const BorderApp = () => {
  const [formVisible, setFormVisible] = React.useState(false);
  const keyFunc = e => handleKey(e, formVisible, setFormVisible);
  const [state, setState] = React.useState({
    bordercolor: '',
    outlinewidth: 0,
    outlinecolor: '',
    width: 80,
    height: 80
  });
  return (
    <Main tabIndex="0" onKeyDown={keyFunc}>
      <OverlayForm inputs={formInputs} visible={formVisible} config={state} setConfig={setState} />
      <CssBase />
      <BorderContainer  bordercolor={state.bordercolor}
                        outlinewidth={parseInt(state.outlinewidth)}
                        outlinecolor={state.outlinecolor}
                        width={parseInt(state.width)}
                        height={parseInt(state.height)} />
    </Main>
  );
};

export default BorderApp;