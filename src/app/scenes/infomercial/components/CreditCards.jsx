import * as React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 1rem;
`;

const Card = styled.div`
  display: inline-block;
  width: 6rem;
  height: 3rem;
  padding: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
`;

const CreditCards = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default CreditCards;