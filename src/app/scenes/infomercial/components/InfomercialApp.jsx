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
  gfi('moneyback', 'Money Back Guarantee'),
  gfi('website', 'Website Name'),
  gfi('phone', 'Phone Number'),
  gfi('preaddress', 'Preaddress'),
  gfi('addr1', 'Address 1'),
  gfi('addr2', 'Address 2'),
  gfi('addr3', 'Address 3')
];

const Main = styled.main`
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-template-rows: 5fr 4fr;
  background: linear-gradient(#0A1448, #1C3BAD, #1D52C1);
  overflow: hidden;
`;

const boundKeys = [9, 27]; //Tab, esc
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
    moneyback: '',
    website: '',
    phone: '',
    preaddress: '',
    addr1: '',
    addr2: '',
    addr3: ''
  });
  return (
    <Main tabIndex="0" onKeyDown={keyFunc}>
      <OverlayForm inputs={formInputs} visible={formVisible} config={state} setConfig={setState} />
      <CssBase />
      <VideoDisplay />
      <PriceArea cost={state.cost} moneyback={state.moneyback} payments={state.payments} />
      <TextArea addr1={state.addr1}
                addr2={state.addr2}
                addr3={state.addr3}
                phone={state.phone}
                preaddress={state.preaddress}
                website={state.website} />
    </Main>
  );
};

export default InfomercialApp;