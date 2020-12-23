import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, useSprings } from 'react-spring';
import { between } from '../utils';
import styled from 'styled-components';

const Header = styled(animated.h1)`
	padding-top: 6rem;
	color: #091E05;
  text-align: center;
  font-size: 2rem;
  @media all and (min-width: 701px) {
    font-size: 7rem;
  }
`;

const Span = styled(animated.span)`
	display: inline-block;
	padding: 0 0.1rem;
  @media all and (min-width: 701px) {
    padding: 0 0.25rem;
  }
`;

const CascadingHeader = props => {
  const [springs, set] = useSprings(props.text.length, () => ({
    opacity: 0,
    translation: between(-150, 150),
    config: {
      mass: between(2, 3),
      tension: between(50, 80),
      friction: between(30, 80) 
    }
  }));
  set(() => (props.isFading ? { config: { duration: 100 }, opacity: 0, translation: 20 }
    : { delay: 250, opacity: 1, translation: 0 }));
  const chars = props.text.split('');
  return (
    <Header>
      {springs.map(({ opacity, translation }, i) => (
        <Span key={i} style={{
          opacity: opacity,
          transform: translation.interpolate(t => `translate(0, ${t}px)`)
        }}>{chars[i]}</Span>
      ))}
    </Header>
  );
};

CascadingHeader.propTypes = {
  isFading: PropTypes.bool,
  text: PropTypes.string
};

export default CascadingHeader;