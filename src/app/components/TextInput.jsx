import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, interpolate, useSpring } from 'react-spring';
import styled from 'styled-components';
import { getSpringConfig } from '../utils';

const Container = styled.div`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled(animated.input)`
  height: 2rem;
  margin-bottom: 2rem;
  border: none;
  outline: none;
  font-size: 1rem;
`;

const Label = styled(animated.label)`
  display: inline-block;
  color: #416165;
  cursor: text;
`;

const TextInput = props => {
  const [value, setValue] = React.useState('');
  const changeFunc = e => setValue(e.target.value);
  const [labelSpring, setLabel] = useSpring(() => getSpringConfig(1, 600, 100, {
    scale: 1.25,
    x: 8,
    y: 20
  }));
  const [inputSpring, setInput] = useSpring(() => getSpringConfig(1, 1200, 60, {
    background: '#BFBBC9',
    thiccness: 0
  }));
  const focusFunc = () => {
    setLabel(() => ({ scale: 0.9, x: 0, y: 0 }));
    setInput(() => ({ background: '#ACB0BD', thiccness: 2 }));
  };
  const unfocusFunc = () => setInput(() => ({ background: '#BFBBC9', thiccness: 0 }));
  return (
    <Container>
      <Label onClick={focusFunc} onMouseOver={e => e.stopPropagation()} style={{
        transform: interpolate([labelSpring.scale, labelSpring.x, labelSpring.y], (scale, x, y) => `scale(${scale}, ${scale}) translate(${x}px, ${y}px)`)
      }}>{props.label}</Label><br />
      <Input type="text" onChange={changeFunc} onFocus={focusFunc} onBlur={unfocusFunc} value={props.value ?? value} style={{
        background: inputSpring.background,
        borderBottom: inputSpring.thiccness.interpolate(t => `${t}px solid #091E05`)
      }}></Input>
    </Container>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
};

export default TextInput;