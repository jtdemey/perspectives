import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 5fr 4fr;
  text-align: center;
  font-family: 'Heebo', sans-serif;
  color: #E2A271;
  overflow: hidden;
`;

const PaymentHeader = styled.h4`
  grid-column: 1 / 3;
  font-size: 2.5rem;
  padding: 0.25rem;
  text-shadow: 4px 4px 10px #111;
  overflow: hidden;
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

const formatPayments = pmt => pmt === '' ? '52' : pmt;
const formatCost = amt => amt.indexOf && amt.indexOf('.') > -1 ? amt.split('.') : ([amt, '']);

const PaymentText = props => {
  const costStr = props.cost ? formatCost(props.cost) : (['80', '08']);
  const moneyStr = props.moneyback || '40';
  const paymentStr = formatPayments(props.payments);
  return (
    <Section>
      <PaymentHeader>Only <PaymentCount>{paymentStr}</PaymentCount> easy payments of</PaymentHeader>
      <PriceContainer>
        <PriceHeader>
          <DollahSign>$</DollahSign>
          <BigNums>{costStr[0]}</BigNums>
          <LittleNums>{costStr[1]}</LittleNums>
          <PhBlurb>Plus CBT</PhBlurb>
        </PriceHeader>
      </PriceContainer>
      <MoneyBackHeader>{moneyStr} Minute Money Back<br />Guarantee <Disclaimer>(same CBT)</Disclaimer></MoneyBackHeader>
    </Section>
  );
};

PaymentText.propTypes = {
  cost: PropTypes.string,
  moneyback: PropTypes.string,
  payments: PropTypes.string
};

export default PaymentText;