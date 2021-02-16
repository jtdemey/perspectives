import * as React from 'react';
import styled from 'styled-components';
import CssBase from '../../../components/CssBase';
import VideoDisplay from './VideoDisplay';
import PriceArea from './PriceArea';
import TextArea from './TextArea';

const Main = styled.main`
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-template-rows: 5fr 4fr;
  background: linear-gradient(#0A1448, #1C3BAD, #1D52C1);
`;

const InfomercialApp = () => {
  return (
    <Main>
      <CssBase />
      <VideoDisplay />
      <PriceArea />
      <TextArea />
    </Main>
  );
};

export default InfomercialApp;