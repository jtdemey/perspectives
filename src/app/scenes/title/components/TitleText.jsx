import * as React from 'react';
import { animated, useSpring, useSprings } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { between, isHex } from '../../../utils';

const Text = styled(animated.h1)`
  padding: 2rem;
  color: #eee;
  font-size: 8rem;
  text-align: center;
  font-family: 'Chewy', cursive;
  line-height: 7rem;
`;

const Span = styled(animated.span)`
  display: inline-block;
  min-width: 2rem;
	padding: 0 0.1rem;
  @media all and (min-width: 701px) {
    padding: 0 0.25rem;
  }
`;

const TitleText = props => {
  const displayText = props.text.length > 0 ? props.text : 'yee haw';
  const [colorSpring, setColor] = useSpring(() => ({
    color: '#eee'
  }));
  setColor(() => ({ color: isHex(props.color) ? props.color: '#eee' }));
  const [animSprings, setAnim] = useSprings(displayText.length, i => ({
    translation: 300,
    config: {
      mass: 1 + (between(2, 5) * 0.1),
      tension: (displayText.length * 25) - (i * 20),
      friction: 16,
      reset: true
    }
  }));
  setAnim(() => props.transition ? ({ delay: 250, opacity: 1, translation: 0 }) : ({ delay: 250, opacity: 1, translation: 300 }));
  const chars = displayText.split('');
  return (
    <Text style={colorSpring}>
      {animSprings.map(({ opacity, translation }, i) => (
        <Span key={i} style={{
          opacity: opacity,
          transform: translation.interpolate(t => `translate(0, ${t}px)`)
        }}>{chars[i]}</Span>
      ))}
    </Text>
  );
};

TitleText.propTypes = {
  text: PropTypes.string,
  transition: PropTypes.bool
};

export default TitleText;