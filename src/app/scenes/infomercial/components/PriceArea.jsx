import * as React from 'react';
import styled from 'styled-components';
import CreditCards from './CreditCards';
import PaymentText from './PaymentText';

const Section = styled.section`

`;

const PriceArea = () => {
  return (
    <Section>
      <CreditCards />
      <PaymentText />
    </Section>
  );
};

export default PriceArea;