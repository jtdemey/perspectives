import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

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

const SubmitButton = props => {
  const [spring, set] = useSpring(() => ({
    opacity: 0,
    y: -400
  }));
  set(() => ({ opacity: 1, y: 0 }));
  return (
    <Button>{'Launch'}</Button>
  );
};

export default SubmitButton;