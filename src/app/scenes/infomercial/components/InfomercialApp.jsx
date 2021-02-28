import * as React from 'react';
import styled from 'styled-components';
import CssBase from '../../../components/CssBase';
import VideoDisplay from './VideoDisplay';
import PriceArea from './PriceArea';
import TextArea from './TextArea';
import OverlayForm from '../../../components/overlayform/OverlayForm';

const gfi = (name, placeholder) => ({ name, placeholder });
const formInputs = [
  gfi('payments', 'Payment Amount'),
  gfi('cost', 'Cost'),
  gfi('money', 'Money Back Guarantee'),
  gfi('website', 'Website Name'),
  gfi('phone', 'Phone Number')
];

const Main = styled.main`
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-template-rows: 5fr 4fr;
  background: linear-gradient(#0A1448, #1C3BAD, #1D52C1);
  overflow: hidden;
`;

const boundKeys = [27, 32]; //Spacebar, esc
const handleKey = (e, isVisible, setVisible) => {
  if(boundKeys.some(k => k === e.keyCode)) {
    setVisible(!isVisible);
  }
};

const InfomercialApp = () => {
  const [formVisible, setFormVisible] = React.useState(false);
  const keyFunc = e => handleKey(e, formVisible, setFormVisible);
  const [state, setState] = React.useState({
    payments: '',
    cost: '',
    money: '',
    website: '',
    phone: ''
  });
  return (
    <Main tabIndex="0" onKeyDown={keyFunc}>
      <OverlayForm inputs={formInputs} visible={formVisible} config={state} setConfig={setState} />
      <CssBase />
      <VideoDisplay />
      <PriceArea cost={state.cost} payments={state.payments} />
      <TextArea />
    </Main>
  );
};

export default InfomercialApp;