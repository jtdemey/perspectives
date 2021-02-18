import * as React from 'react';
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

const ContactText = () => {
  return (
    <Section>
      <Website>www.gamerleash.org</Website>
      <Phone>1-800-IEAT-ASS</Phone>
      <SendBlurb>Send Check or Small Shiny Rocks:</SendBlurb>
      <Company><i>BURT & SPURT UTILITIES</i></Company>
      <AddressBar />
    </Section>
  );
};

export default ContactText;