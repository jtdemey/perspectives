import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PhaserText from './PhaserText';

const COLORS = ['#BF0603', '#8D0801', '#F4D58D', '#708D81'];
const WORD_COUNT = 38;
const TEXT_CONTENT = [];
for(let i = 0; i < WORD_COUNT; i++) {
  TEXT_CONTENT.push('Alpha Patrol');
}

const getColor = i => {
  const split = Math.floor(i / (WORD_COUNT / 3) + 1);
  if(i === 0) return COLORS[i];
  return COLORS[split];
};

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: center;
`;

let visibilityCounter = 0;
let animInterval;

const PhaserContainer = props => {
  const [visIndex, setVisIndex] = React.useState(0);
  React.useEffect(() => {
    animInterval = setInterval(() => {
      if(!props.transition) {
        visibilityCounter = 0;
        setVisIndex(0);
        return;
      }
      if(props.transition && visibilityCounter < WORD_COUNT) {
        visibilityCounter++;
        setVisIndex(visibilityCounter);
      }
    }, 25);
    return () => clearInterval(animInterval);
  }, [props.transition]);
  return (
    <Container style={{ background: props.background || '#333' }}>
      {TEXT_CONTENT.map((txt, i) => (
        <PhaserText key={i} color={getColor(i)} offset={i * 15} text={txt} textIndex={i} visible={i < visIndex + 1} />
      ))}
    </Container>
  );
};

PhaserContainer.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  transition: PropTypes.bool
};

export default PhaserContainer;