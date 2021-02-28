import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OverlayFormInput from './OverlayFormInput';

const Form = styled.form`
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 8rem 0 0 4rem;
  text-align: left;
`;

const OverlayFormBody = props => {
  return (
    <React.Fragment>
      <Form>
        {props.inputs.map((input, i) => (
          <OverlayFormInput key={i} name={input.name} placeholder={input.placeholder} config={props.config} setConfig={props.setConfig} />
        ))}
      </Form>
    </React.Fragment>
  );
};

OverlayFormBody.propTypes = {
  config: PropTypes.object,
  inputs: PropTypes.array,
  setConfig: PropTypes.func,
  visible: PropTypes.bool
};

export default OverlayFormBody;