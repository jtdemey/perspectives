import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { getSpringConfig } from '../utils';

const Button = styled(animated.button)`
	display: block;
	width: 140px;
	height: 2rem;
	margin: 4rem auto;
	background: rgba(87, 103, 100, 0.75);
  box-shadow: 8px 8px #1a1a1a;
  border: none;
	cursor: grab;
  font-family: 'Xanh Mono', monospace;
  font-size: 1rem;
`;

const BackButton = props => {
  const [spring, set] = useSprings(props.text.length, () => getSpringConfig(1, 500, 150, {
    opacity: 0,
    x: 450,
    y: between(-100, 100)
  }));
  set(i => (props.isFading ? { config: { duration: 100 }, opacity: 0, y: 50 } : { delay: (i * 200) + 600, opacity: 1, x: 0, y: 0 }));
  return (
    <Button />
  );
};

BackButton.propTypes = {
  isFading: PropTypes.bool
};

export default BackButton;