import * as React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-flow: column;
`;

const Website = styled.h3`
  color: #F4DBCB;
`;

const Phone = styled.h3`
  color: #fff;
`;

const SendBlurb = styled.h6`
  color: #fff;
`;

const ContactText = () => {
  return (
    <Section>
      <Website>www.gamerleash.org</Website>
      <Phone>1-800-IEAT-ASS</Phone>
      <SendBlurb>Send Check or Dogecoin:</SendBlurb>
    </Section>
  );
};

export default ContactText;