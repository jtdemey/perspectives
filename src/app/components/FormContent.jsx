import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring, useSprings } from 'react-spring';
import styled from 'styled-components';
import ColorInput from './ColorInput';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';

const Form = styled(animated.form)`
  display: flex;
  flex-flow: column;
`;

const generateInput = (conf, key) => {
  switch(conf.type) {
    case 'text':
      return <TextInput key={key} label={conf.label} />;
    case 'color':
      return <ColorInput key={key} label={conf.label} />;
    default:
      console.error(`Input ${conf.type} not recognized`);
      break;
  }
};

const FormContent = props => {
  const [spring, set] = useSpring(() => ({
    opacity: 0,
    y: -400
  }));
  set(() => ({ opacity: 1, y: 0 }));
  return (
    <Form style={spring}>
      {props.inputs.map((input, ind) => generateInput(input, ind))}
      <SubmitButton />
    </Form>
  );
};

FormContent.propTypes = {
  inputs: PropTypes.array
};

export default FormContent;