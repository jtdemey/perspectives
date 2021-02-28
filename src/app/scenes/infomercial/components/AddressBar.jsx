import * as React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  font-family: 'Heebo', sans-serif;
`;

const Text = styled.h6`
  padding: 0.5rem;
  color: #fff;
  font-size: 2rem;
  text-shadow: 1px 5px 3px #111;
`;

const AddressBar = () => {
  return (
    <Section>
      <Text>927 Pahkland Avenue Shoebox 420</Text>
      <Text>New Joisey, NJ 10011</Text>
    </Section>
  );
};

export default AddressBar;