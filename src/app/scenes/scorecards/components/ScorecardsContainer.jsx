import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.h2`
  position: absolute;
  margin: auto;
  font-family: 'Shrikhand', cursive;
  font-size: 5rem;
  color: #8D0801;
`;

const ScorecardsContainer = props => {
  return (
    <Container></Container>
  );
};

ScorecardsContainer.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  visible: PropTypes.bool
};

export default ScorecardsContainer;