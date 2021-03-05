import * as React from 'react';
import PropTypes from 'prop-types';
import CreditCards from './CreditCards';
import PaymentText from './PaymentText';

const PriceArea = props => {
  return (
    <section>
      <CreditCards />
      <PaymentText cost={props.cost} moneyback={props.moneyback} payments={props.payments} />
    </section>
  );
};

PriceArea.propTypes = {
  cost: PropTypes.string,
  moneyback: PropTypes.string,
  payments: PropTypes.string
};

export default PriceArea;