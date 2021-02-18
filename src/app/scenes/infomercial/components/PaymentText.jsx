import * as React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 5fr 4fr;
  text-align: center;
  font-family: 'Heebo', sans-serif;
  color: #E2A271;
`;

const PaymentHeader = styled.h4`
  grid-column: 1 / 3;
  font-size: 2.5rem;
  padding: 0.25rem;
  text-shadow: 4px 4px 10px #111;
`;

const PaymentCount = styled.span`
  font-size: 4rem;
`;

const PriceContainer = styled.div`
  grid-column: 1 / 3;
  height: 12rem;
  padding: 0 5rem 0 0;
`;

const PriceHeader = styled.h1`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  text-shadow: 5px 5px 10px #111;
`;

const DollahSign = styled.span`
  grid-row: 1 / 3;
  padding: 2rem 0 0 10rem;
  font-size: 6rem;
`;

const BigNums = styled.span`
  grid-row: 1 / 3;
  font-size: 12rem;
`;

const LittleNums = styled.span`
  padding: 0.5rem 6rem 0 0;
  font-size: 7rem;
`;

const PhBlurb = styled.span`
  padding-right: 6rem;
  font-size: 2rem;
  color: #fff;
  text-shadow: 1px 5px 3px #111;
`;

const MoneyBackHeader = styled.h4`
  grid-column: 1 / 3;
  font-size: 3rem;
  color: #fff;
  text-shadow: 1px 5px 3px #111;
`;

const Disclaimer = styled.span`
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 1px 5px 3px #111;
`;

const PaymentText = () => {
  return (
    <Section>
      <PaymentHeader>Only <PaymentCount>52</PaymentCount> easy payments of</PaymentHeader>
      <PriceContainer>
        <PriceHeader>
          <DollahSign>$</DollahSign>
          <BigNums>80</BigNums>
          <LittleNums>08</LittleNums>
          <PhBlurb>Plus CBT</PhBlurb>
        </PriceHeader>
      </PriceContainer>
      <MoneyBackHeader>40 Minute Money Back<br />Guarantee <Disclaimer>(same CBT)</Disclaimer></MoneyBackHeader>
    </Section>
  );
};

export default PaymentText;