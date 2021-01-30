import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import TextInput from './TextInput';
import { getSpringConfig } from '../utils';

const Container = styled.div`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled(animated.input)`
  height: 2rem;
  transform: translateY(0.45rem);
  border: none;
  outline: none;
  margin-top: -2rem;
`;

const Label = styled(animated.label)`
  display: block;
  color: #416165;
  cursor: text;
  font-size: 0.9rem;
`;

const ColorInput = props => {
  const [inputSpring, setInput] = useSpring(() => getSpringConfig(1, 1200, 60, {
    background: '#BFBBC9',
    thiccness: 0
  }));
  const changeFunc = e => {
    console.log(e.target.value);

  };
  const focusFunc = () => setInput(() => ({ background: '#ACB0BD', thiccness: 2 }));
  const unfocusFunc = () => setInput(() => ({ background: '#BFBBC9', thiccness: 0 }));
  return (
    <React.Fragment>
      <Container>
        <TextInput label={props.label} />
        <Input type="color" onChange={changeFunc} onFocus={focusFunc} onBlur={unfocusFunc} style={{
          background: inputSpring.background,
          borderBottom: inputSpring.thiccness.interpolate(t => `${t}px solid #091E05`)
        }}></Input>
      </Container>
    </React.Fragment>
  );
};

ColorInput.propTypes = {
  label: PropTypes.string
};

export default ColorInput;