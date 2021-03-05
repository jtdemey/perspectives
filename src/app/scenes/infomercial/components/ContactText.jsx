import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddressBar from './AddressBar';

const Section = styled.section`
  display: flex;
  flex-flow: column;
  text-align: center;
  font-family: 'Heebo', sans-serif;
`;

const Website = styled.h3`
  padding-top: 1rem;
  color: #cc9900;
  font-size: 5rem;
  text-shadow: 8px 4px #111;
`;

const Phone = styled.h2`
  color: #fff;
  font-size: 9rem;
  text-shadow: 16px 8px #111;
`;

const SendBlurb = styled.h6`
  color: #fff;
  font-size: 2rem;
`;

const Company = styled.h4`
  padding-top: 0.5rem;
  color: #fff;
  font-size: 4rem;
  text-shadow: 8px 4px #111;
`;

const ContactText = props => {
  return (
    <Section>
      <Website>{props.website || 'www.gamerleash.org'}</Website>
      <Phone>{props.phone || '1-800-IEAT-ASS'}</Phone>
      <SendBlurb>{props.preaddress || 'Send Check or Small Shiny Rocks:'}</SendBlurb>
      <Company><i>{props.addr1 || 'BURT & SPURT UTILITIES'}</i></Company>
      <AddressBar addr2={props.addr2} addr3={props.addr3} />
    </Section>
  );
};

ContactText.propTypes = {
  addr1: PropTypes.string,
  addr2: PropTypes.string,
  addr3: PropTypes.string,
  phone: PropTypes.string,
  preaddress: PropTypes.string,
  website: PropTypes.string
};

export default ContactText;