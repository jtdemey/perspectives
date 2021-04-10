import * as React from 'react';
import styled from 'styled-components';
import CssBase from '../../../components/CssBase';
import OverlayForm from '../../../components/overlayform/OverlayForm';
import BannerContainer from './BannerContainer';

const gfi = (name, placeholder) => ({ name, placeholder });
const formInputs = [
  gfi('topcolor', 'Top Color (hex)'),
  gfi('toptext', 'Top Text (hex)'),
  gfi('maintext', 'Main Text (px)'),
  gfi('maincolor', 'Main Color (px)'),
  gfi('bottomcolor', 'Bottom Color (px)'),
  gfi('scrolltext', 'Scrolling Text (px)')
];

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  background: #00ff00;
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
    toptext: '',
    maintext: '',
    maincolor: '',
    bottomcolor: '',
    scrolltext: '' 
  });
  return (
    <Main tabIndex="0" onKeyDown={keyFunc}>
      <OverlayForm inputs={formInputs} visible={formVisible} config={state} setConfig={setState} />
      <CssBase />
      <BannerContainer  topcolor={state.topcolor}
                        toptext={state.toptext}
                        maintext={state.maintext}
                        maincolor={state.maincolor}
                        bottomcolor={state.bottomcolor}
                        scrolltext={state.scrolltext} />
    </Main>
  );
};

export default BannerApp;