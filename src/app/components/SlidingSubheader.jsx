import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, interpolate, useSprings } from 'react-spring';
import styled from 'styled-components';
import { between } from '../utils';

const SubHeader = styled(animated.h2)`
  margin: 1rem;
	color: #416165;
	text-align: center;
  padding-left: 3rem;
	font-size: 1rem;
  @media all and (min-width: 701px) {
    margin: 2rem 4rem;
    padding-left: 16rem;
    font-size: 2.5rem;
  }
`;

const Span = styled(animated.span)`
	display: inline-block;
	min-width: 1rem;
  @media all and (min-width: 701px) {
    padding: 0 0.25rem;
  }
`;

const SlidingSubheader = props => {
  const [springs, set] = useSprings(props.text.length, () => ({
    opacity: 0,
    x: 450,
    y: between(-100, 100),
    config: {
      mass: 1,
      tension: between(500, 800),
      friction: between(150, 300) 
    }
  }));
  set(i => (props.isFading ? { config: { duration: 100 }, opacity: 0, y: 50 } : { delay: (i * 200) + 600, opacity: 1, x: 0, y: 0 }));
  const chars = props.text.split('');
  return (
    <SubHeader>
      {springs.map(({ opacity, x, y }, i) => (
        <Span key={i} style={{
          opacity: opacity,
          transform: interpolate([x, y], (x, y) => `translate(${x}px, ${y}px)`)
        }}>{chars[i]}</Span>
      ))}
    </SubHeader>
  );
};

SlidingSubheader.propTypes = {
  isFading: PropTypes.bool,
  text: PropTypes.string
};

export default SlidingSubheader;