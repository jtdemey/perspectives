import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Heebo', sans-serif;
  overflow: hidden;
  z-index: 4;
  padding: 1rem 0;
`;

const CheckboxInput = styled.input`
  width: 20rem;
  height: 2rem;
`;

const TextInput = styled.input`
  width: 20rem;
  height: 2rem;
`;

const Label = styled.label`
  color: #f2f2f2;
`;

const OverlayFormCheckbox = props => {
  return (
    <React.Fragment>
      <Form>
        {props.inputs.map((input, i) => (
          <OverlayFormInput key={i} name={input.name} placeholder={input.placeholder} type={input.type || 'text'} config={props.config} setConfig={props.setConfig} />
        ))}
      </Form>
    </React.Fragment>
  );
};

OverlayFormCheckbox.propTypes = {
  config: PropTypes.object,
  inputs: PropTypes.array,
  setConfig: PropTypes.func,
  visible: PropTypes.bool
};

export default OverlayFormCheckbox;