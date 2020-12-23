import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, interpolate, useSpring } from 'react-spring';
import styled from 'styled-components';
import { between } from '../utils';

const Input = styled(animated.input)`
  border: none;
`;

const Label = styled(animated.label)`
  color: purple;
`;

const TextInput = props => {
  const [spring, set] = useSpring(() => ({
    scale: 1,
    y: 0,
    thiccness: 2,
    config: {
      mass: 1,
      tension: between(500, 800),
      friction: between(150, 300) 
    }
  }));
  set(() => ({ scale: 1, x: 0, y: 0 }));
  return (
    <React.Fragment>
      <label>{props.label}</label><br />
      <Input type="text"></Input>
    </React.Fragment>
  );
};

TextInput.propTypes = {
  label: PropTypes.string
};

export default TextInput;