import * as React from 'react';
import styled from 'styled-components';
import ContactText from './ContactText';

const Section = styled.section`
  grid-column: 1 / 3;
`;

const TextArea = () => {
  return (
    <Section>
      <ContactText />
    </Section>
  );
};

export default TextArea;
