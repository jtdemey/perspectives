import * as React from 'react';
import styled from 'styled-components';
import CssBase from '../../../components/CssBase';
import OverlayForm from '../../../components/overlayform/OverlayForm';

const gfi = (name, placeholder) => ({ name, placeholder });
const formInputs = [
  gfi('topcolor', 'Top Color (hex)'),
  gfi('toptext', 'Top Text (hex)'),
  gfi('maintext', 'Main Text (px)'),
  gfi('maincolor', 'Main Color (px)'),
  gfi('scrolltext', 'Scrolling Text (px)')
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

const BannerApp = () => {
  const [formVisible, setFormVisible] = React.useState(false);
  const keyFunc = e => handleKey(e, formVisible, setFormVisible);
  const [state, setState] = React.useState({
    topcolor: '',
    toptext: 0,
    maintext: '',
    maincolor: 80,
    scrolltext: 80
  });
  return (
    <Main tabIndex="0" onKeyDown={keyFunc}>
      <OverlayForm inputs={formInputs} visible={formVisible} config={state} setConfig={setState} />
      <CssBase />
      <BannerContainer  topcolor={state.topcolor}
                        toptext={parseInt(state.toptext)}
                        maintext={state.maintext}
                        maincolor={parseInt(state.maincolor)}
                        scrolltext={parseInt(state.scrolltext)} />
    </Main>
  );
};

export default BannerApp;